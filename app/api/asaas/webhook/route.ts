import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createElement } from "react";
import BonusPdfEmail from "@/email-templates/BonusPdfEmail";
import ExpirationEmail from "@/email-templates/ExpirationEmail";
import { supabaseAdmin } from "../../../lib/supabase";

export const runtime = "nodejs";

type AsaasWebhookPayload = {
  id?: string;
  event?: string;
  payment?: {
    id?: string;
    status?: string;
    customer?: string;
    subscription?: string;
    value?: number;
    billingType?: string;
    description?: string;
    externalReference?: string;
    dueDate?: string;
  };
  subscription?: {
    id?: string;
    status?: string;
    customer?: string;
    value?: number;
    billingType?: string;
    description?: string;
    externalReference?: string;
    nextDueDate?: string;
  };
};

type AsaasCustomer = {
  id: string;
  name?: string;
  email?: string;
};

type AsaasError = {
  errors?: Array<{ code?: string; description?: string }>;
};

type UserLookupResult = {
  table: "profiles" | "users";
  id: string;
  email?: string;
  name?: string;
  full_name?: string;
  bonus_pdf_sent_at?: string | null;
};

function getAsaasBaseUrl() {
  return process.env.ASAAS_ENVIRONMENT?.toLowerCase() === "sandbox"
    ? "https://api-sandbox.asaas.com/v3"
    : "https://api.asaas.com/v3";
}

async function asaasGet<T>(path: string): Promise<{ ok: true; data: T } | { ok: false; error: string }> {
  const apiKey = process.env.ASAAS_API_KEY;

  if (!apiKey) {
    return { ok: false, error: "ASAAS_API_KEY não configurada." };
  }

  const response = await fetch(`${getAsaasBaseUrl()}${path}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      access_token: apiKey,
    },
    cache: "no-store",
  });

  const data = (await response.json()) as T & AsaasError;

  if (!response.ok) {
    return {
      ok: false,
      error: data.errors?.[0]?.description ?? "Falha ao consultar Asaas.",
    };
  }

  return { ok: true, data };
}

async function sendExpirationEmail(email: string, firstName?: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) return;

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to: [email],
    subject: "Aviso: Sua assinatura foi encerrada",
    react: createElement(ExpirationEmail, { firstName }),
  });
}

/**
 * Localiza o usuário no Supabase respeitando a ordem de prioridade:
 * 1. asaas_subscription_id
 * 2. asaas_customer_id
 * 3. email
 * Verifica primeiro na tabela 'profiles' e em seguida na tabela 'users' (fallback).
 */
async function findUserRecord({
  subscriptionId,
  customerId,
  email,
}: {
  subscriptionId?: string;
  customerId?: string;
  email?: string;
}): Promise<UserLookupResult | null> {
  const tables: Array<"profiles" | "users"> = ["profiles", "users"];

  for (const table of tables) {
    // 1. Tentar por asaas_subscription_id
    if (subscriptionId) {
      const { data, error } = await supabaseAdmin
        .from(table)
        .select("id, email, name, full_name, bonus_pdf_sent_at")
        .eq("asaas_subscription_id", subscriptionId)
        .limit(1);
      if (!error && data && data.length > 0) {
        return { table, ...data[0] };
      }
    }

    // 2. Tentar por asaas_customer_id
    if (customerId) {
      const { data, error } = await supabaseAdmin
        .from(table)
        .select("id, email, name, full_name, bonus_pdf_sent_at")
        .eq("asaas_customer_id", customerId)
        .limit(1);
      if (!error && data && data.length > 0) {
        return { table, ...data[0] };
      }
    }

    // 3. Reserva: tentar por email
    if (email) {
      const normalizedEmail = email.trim().toLowerCase();
      const { data, error } = await supabaseAdmin
        .from(table)
        .select("id, email, name, full_name, bonus_pdf_sent_at")
        .eq("email", normalizedEmail)
        .limit(1);
      if (!error && data && data.length > 0) {
        return { table, ...data[0] };
      }
    }
  }

  return null;
}

/**
 * Atualiza o plano do usuário no Supabase.
 * Retorna o registro localizado do usuário para reutilização em operações subsequentes.
 */
async function updateUserPlanInSupabase(
  customerEmail: string,
  payload: AsaasWebhookPayload,
): Promise<UserLookupResult | null> {
  const event = payload.event;
  const payment = payload.payment;
  const subscription = payload.subscription;

  const customerId = payment?.customer || subscription?.customer;
  const asaasSubscriptionId = subscription?.id || payment?.subscription;
  const paymentId = payment?.id || subscription?.id;
  const description = payment?.description || subscription?.description;
  const dueDate = payment?.dueDate || subscription?.nextDueDate;

  const updateData: Record<string, unknown> = {
    asaas_customer_id: customerId,
    asaas_subscription_id: asaasSubscriptionId,
    payment_id: paymentId,
  };

  const isTrial = description?.includes("[Trial 5 Dias]");
  const planInDescription = description?.toLowerCase().includes("elite") ? "elite" : "flow";

  if (event === "PAYMENT_CONFIRMED" || event === "PAYMENT_RECEIVED") {
    updateData.current_plan = isTrial ? "flow" : planInDescription;
    updateData.subscription_status = "active";

    if (isTrial) {
      updateData.trial_started_at = new Date().toISOString();
      const trialEnds = new Date();
      trialEnds.setDate(trialEnds.getDate() + 5);
      updateData.trial_ends_at = trialEnds.toISOString();
      updateData.next_billing_at = trialEnds.toISOString();
    } else {
      const nextMonth = new Date();
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      updateData.next_billing_at = nextMonth.toISOString();
    }
  } else if ((event === "PAYMENT_CREATED" || event === "SUBSCRIPTION_CREATED") && isTrial) {
    updateData.current_plan = "flow";
    updateData.subscription_status = "trialing";
    updateData.trial_started_at = new Date().toISOString();

    if (dueDate) {
      const targetDate = new Date(dueDate);
      updateData.trial_ends_at = targetDate.toISOString();
      updateData.next_billing_at = targetDate.toISOString();
    }
  } else if (event === "SUBSCRIPTION_CREATED" && !isTrial) {
    updateData.current_plan = planInDescription;
    updateData.subscription_status = "active";
  } else if (event === "PAYMENT_OVERDUE" || event === "PAYMENT_DELETED" || event === "SUBSCRIPTION_DELETED") {
    updateData.subscription_status = "past_due";
    updateData.current_plan = "start";

    if (customerEmail) {
      const firstName = customerEmail.split("@")[0];
      await sendExpirationEmail(customerEmail, firstName);
    }
  } else {
    // Evento não relevante para atualização do plano
    return null;
  }

  // Localizar o registro do usuário
  const userRecord = await findUserRecord({
    subscriptionId: asaasSubscriptionId,
    customerId,
    email: customerEmail,
  });

  if (!userRecord) {
    console.warn("[SUPABASE] Usuário não encontrado no Supabase (nem em profiles, nem em users):", {
      customerId,
      subscriptionId: asaasSubscriptionId,
      email: customerEmail ? customerEmail.replace(/(.{2})(.*)(@.*)/, "$1***$3") : "não informado",
    });
    return null;
  }

  const { error: updateError } = await supabaseAdmin
    .from(userRecord.table)
    .update(updateData)
    .eq("id", userRecord.id);

  if (updateError) {
    console.error("[SUPABASE] Erro ao atualizar plano no Supabase:", updateError);
  } else {
    console.log("[SUPABASE] Plano atualizado com sucesso na tabela", userRecord.table, "Event:", event);
  }

  return userRecord;
}

/**
 * Dispara o envio do PDF Bônus (Kit de Avaliação) com reserva atômica no Supabase.
 * - Garante que apenas 1 e-mail seja enviado, mesmo com webhooks concorrentes ou repetidos.
 * - Falha no envio reverte a reserva e nunca trava a resposta do webhook para o Asaas.
 */
async function handleBonusPdfDispatch({
  payload,
  userRecord,
  customerEmail,
  customerName,
}: {
  payload: AsaasWebhookPayload;
  userRecord: UserLookupResult | null;
  customerEmail: string;
  customerName?: string;
}) {
  const paymentId = payload.payment?.id || payload.subscription?.id || "desconhecido";
  const customerId = payload.payment?.customer || payload.subscription?.customer;

  // 1. Diferenciação: se usuário não encontrado, registrar aviso sem dados sensíveis
  if (!userRecord) {
    console.warn(`[BONUS PDF] Usuário não encontrado no Supabase para envio do bônus. Payment ID: ${paymentId}.`);
    return;
  }

  // 2. Se já foi enviado anteriormente, encerra em silêncio
  if (userRecord.bonus_pdf_sent_at) {
    console.log(`[BONUS PDF] Bônus já enviado anteriormente para o usuário ${userRecord.id}. Encerrando.`);
    return;
  }

  // 3. Reserva atômica: UPDATE ... SET bonus_pdf_sent_at = now() WHERE id = :id AND bonus_pdf_sent_at IS NULL
  const nowIso = new Date().toISOString();
  const { data: reservedRows, error: reserveError } = await supabaseAdmin
    .from(userRecord.table)
    .update({ bonus_pdf_sent_at: nowIso })
    .eq("id", userRecord.id)
    .is("bonus_pdf_sent_at", null)
    .select("id, bonus_pdf_sent_at");

  if (reserveError) {
    console.error("[BONUS PDF] Erro na reserva atômica de bonus_pdf_sent_at:", reserveError.message);
    return;
  }

  // Se afetou 0 linhas e o usuário existe, outro webhook concorrente acabou de reservar
  if (!reservedRows || reservedRows.length === 0) {
    console.log(`[BONUS PDF] Concorrência detectada ou bônus já reservado para o usuário ${userRecord.id}. Encerrando.`);
    return;
  }

  // 4. Reserva conquistada com sucesso: gerar URL assinada e disparar e-mail único
  try {
    const { data: signedData, error: signedError } = await supabaseAdmin
      .storage
      .from("bonus-materials")
      .createSignedUrl("kit-avaliacao-funcional-fisioterapia.pdf", 60 * 60 * 24 * 30);

    if (signedError || !signedData?.signedUrl) {
      throw new Error(`Falha ao gerar link assinado do PDF no Storage: ${signedError?.message || "URL vazia"}`);
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !from) {
      throw new Error("Credenciais do Resend ausentes (RESEND_API_KEY / RESEND_FROM_EMAIL).");
    }

    const recipientEmail = userRecord.email || customerEmail;
    if (!recipientEmail) {
      throw new Error("Destinatário sem e-mail cadastrado.");
    }

    const fullName = (userRecord.name || userRecord.full_name || customerName || "").trim();
    const firstName = fullName ? fullName.split(" ")[0] : undefined;

    const resend = new Resend(apiKey);
    const emailResult = await resend.emails.send({
      from,
      to: [recipientEmail.trim().toLowerCase()],
      subject: "Obrigado por assinar o Kynesia! Seu bônus chegou",
      react: createElement(BonusPdfEmail, {
        firstName,
        downloadUrl: signedData.signedUrl,
        loginUrl: process.env.NEXT_PUBLIC_APP_URL || "https://kynesia-app.vercel.app",
      }),
    });

    if (emailResult.error) {
      throw new Error(emailResult.error.message);
    }

    console.log(`[BONUS PDF] E-mail com o Kit de Avaliação enviado com sucesso para o usuário ${userRecord.id}.`);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro desconhecido ao enviar e-mail com bônus";
    console.error(`[BONUS PDF] Falha no envio do e-mail. Revertendo reserva atômica. Payment ID: ${paymentId}. Motivo: ${message}`);

    // Reverter a reserva atômica (volta para NULL para permitir reenvio futuro)
    await supabaseAdmin
      .from(userRecord.table)
      .update({ bonus_pdf_sent_at: null })
      .eq("id", userRecord.id);

    // Gravar erro em log persistente no banco de dados para consulta e reenvio manual
    try {
      await supabaseAdmin
        .from("bonus_dispatch_errors")
        .insert({
          payment_id: paymentId,
          customer_id: customerId,
          user_id: userRecord.id,
          user_email: userRecord.email || customerEmail,
          error_message: message,
        });
    } catch (dbErr) {
      console.error("[BONUS PDF] Falha ao persistir erro na tabela bonus_dispatch_errors:", dbErr);
    }
  }
}

function isAuthorized(req: Request) {
  const expectedToken = process.env.ASAAS_WEBHOOK_AUTH_TOKEN;

  if (!expectedToken) {
    return {
      ok: false,
      status: 500,
      error: "Variável ASAAS_WEBHOOK_AUTH_TOKEN não configurada.",
    };
  }

  const receivedToken = req.headers.get("asaas-access-token");

  if (!receivedToken || receivedToken !== expectedToken) {
    return {
      ok: false,
      status: 401,
      error: "Token de autenticação do webhook inválido.",
    };
  }

  return { ok: true, status: 200, error: "" };
}

export async function POST(req: Request) {
  const auth = isAuthorized(req);

  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  }

  try {
    const payload = (await req.json()) as AsaasWebhookPayload;

    if (!payload.event) {
      return NextResponse.json({ ok: false, error: "Evento não informado." }, { status: 400 });
    }

    if (payload.id) {
      const { data: existingEvent } = await supabaseAdmin
        .from("asaas_events")
        .select("event_id")
        .eq("event_id", payload.id)
        .maybeSingle();

      if (existingEvent) {
        return NextResponse.json({ ok: true, duplicated: true }, { status: 200 });
      }

      await supabaseAdmin
        .from("asaas_events")
        .insert({ event_id: payload.id, event_type: payload.event });
    }

    // Identificar se o pagamento está associado a uma assinatura
    const subscriptionId = payload.payment?.subscription || payload.subscription?.id;

    // Se for uma compra avulsa (ex: Kit vendido a R$ 39,90 no blog, sem vínculo com assinatura),
    // ignoramos operações de plano e envio de bônus para não quebrar a venda avulsa.
    if (!subscriptionId) {
      console.log("[ASAAS WEBHOOK] Pagamento avulso recebido (sem assinatura vinculada). Ignorando alteração de plano e envio de bônus.", {
        paymentId: payload.payment?.id,
        value: payload.payment?.value,
        event: payload.event,
      });
      return NextResponse.json({ ok: true, message: "Pagamento avulso processado sem alteração de assinatura." }, { status: 200 });
    }

    // Buscar dados do cliente no Asaas para suporte à localização
    let customerEmailForSupabase = "";
    let customerNameForSupabase = "";
    const customerId = payload.payment?.customer || payload.subscription?.customer;
    if (customerId) {
      const customerResult = await asaasGet<AsaasCustomer>(`/customers/${customerId}`);
      if (customerResult.ok) {
        if (customerResult.data.email) {
          customerEmailForSupabase = customerResult.data.email;
        }
        if (customerResult.data.name) {
          customerNameForSupabase = customerResult.data.name;
        }
      }
    }

    // Eventos de cobrança e assinatura
    switch (payload.event) {
      case "PAYMENT_CONFIRMED":
      case "PAYMENT_RECEIVED": {
        // 1. Atualizar o plano no Supabase
        const userRecord = await updateUserPlanInSupabase(customerEmailForSupabase, payload);

        // 2. Disparar envio único do e-mail com o PDF bônus (somente se pagamento já caiu diretamente no Asaas)
        await handleBonusPdfDispatch({
          payload,
          userRecord,
          customerEmail: customerEmailForSupabase,
          customerName: customerNameForSupabase,
        });

        console.log("[ASAAS WEBHOOK] Pagamento confirmado/recebido processado:", {
          event: payload.event,
          id: payload.id,
          paymentId: payload.payment?.id,
          subscriptionId,
        });
        break;
      }

      case "PAYMENT_CREATED":
      case "PAYMENT_OVERDUE":
      case "PAYMENT_DELETED":
      case "PAYMENT_RESTORED":
      case "SUBSCRIPTION_CREATED":
      case "SUBSCRIPTION_UPDATED":
      case "SUBSCRIPTION_DELETED":
        await updateUserPlanInSupabase(customerEmailForSupabase, payload);
        console.log("[ASAAS WEBHOOK] Evento de assinatura processado:", {
          event: payload.event,
          id: payload.id,
          paymentId: payload.payment?.id || payload.subscription?.id,
          status: payload.payment?.status || payload.subscription?.status,
        });
        break;

      default:
        console.log("[ASAAS WEBHOOK] Evento ignorado:", {
          event: payload.event,
          id: payload.id,
        });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao processar webhook";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
