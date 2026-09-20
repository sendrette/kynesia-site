import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createElement } from "react";
import WelcomeEmail from "@/email-templates/WelcomeEmail";
import ExpirationEmail from "@/email-templates/ExpirationEmail";
import { supabaseAdmin } from "../../../lib/supabase";

export const runtime = "nodejs";

const sentWelcomeForPaymentIds = new Set<string>();

type AsaasWebhookPayload = {
  id?: string;
  event?: string;
  payment?: {
    id?: string;
    status?: string;
    customer?: string;
    value?: number;
    billingType?: string;
    description?: string;
    externalReference?: string;
    dueDate?: string;
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

async function sendWelcomeEmail(email: string, firstName?: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.warn("[ASAAS WEBHOOK] Envio de e-mail ignorado: RESEND_API_KEY/RESEND_FROM_EMAIL ausentes.");
    return;
  }

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from,
    to: [email],
    subject: "Bem-vindo(a) à Kynesia",
    react: createElement(WelcomeEmail, { firstName }),
  });

  if (result.error) {
    throw new Error(result.error.message);
  }
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

async function handlePaymentReceived(payload: AsaasWebhookPayload) {
  const paymentId = payload.payment?.id;
  const customerId = payload.payment?.customer;

  if (!paymentId || !customerId) {
    return;
  }

  if (sentWelcomeForPaymentIds.has(paymentId)) {
    return;
  }

  const customerResult = await asaasGet<AsaasCustomer>(`/customers/${customerId}`);

  if (!customerResult.ok) {
    console.warn("[ASAAS WEBHOOK] Não foi possível buscar cliente para e-mail:", customerResult.error);
    return;
  }

  const customerEmail = customerResult.data.email;
  const customerName = customerResult.data.name;

  if (!customerEmail) {
    console.warn("[ASAAS WEBHOOK] Cliente sem e-mail. Envio ignorado.", {
      customerId,
      paymentId,
    });
    return;
  }

  const firstName = customerName?.trim().split(" ")[0];
  await sendWelcomeEmail(customerEmail, firstName);

  sentWelcomeForPaymentIds.add(paymentId);
  if (sentWelcomeForPaymentIds.size > 5000) {
    sentWelcomeForPaymentIds.clear();
  }
}

async function updateUserPlanInSupabase(customerEmail: string, payload: AsaasWebhookPayload) {
  const event = payload.event;
  const payment = payload.payment;
  
  if (!customerEmail) return;

  const updateData: any = {
    asaas_customer_id: payment?.customer,
    payment_id: payment?.id,
  };

  const isTrial = payment?.description?.includes("[Trial 5 Dias]");
  const planInDescription = payment?.description?.toLowerCase().includes("elite") ? "elite" : "flow";

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
  } else if (event === "PAYMENT_CREATED" && isTrial) {
    // Activating 5 days free trial immediately upon checkout
    updateData.current_plan = "flow";
    updateData.subscription_status = "trialing";
    updateData.trial_started_at = new Date().toISOString();
    
    if (payment?.dueDate) {
      const dueDate = new Date(payment.dueDate);
      updateData.trial_ends_at = dueDate.toISOString();
      updateData.next_billing_at = dueDate.toISOString();
    }
  } else if (event === "PAYMENT_OVERDUE" || event === "PAYMENT_DELETED") {
    updateData.subscription_status = "past_due";
    updateData.current_plan = "start";
    
    // Send expiration email
    if (customerEmail) {
      const firstName = customerEmail.split("@")[0]; // Fallback to email prefix if name is not easily available here
      await sendExpirationEmail(customerEmail, firstName);
    }
  } else {
    // Event not relevant for updating plan
    return;
  }
  
  // Try updating `profiles` table first
  let { data: profiles, error: selectError } = await supabaseAdmin
    .from("profiles")
    .select("id")
    .eq("email", customerEmail)
    .limit(1);
    
  if (selectError || !profiles || profiles.length === 0) {
    // Fallback to "users" table if profiles is not found
    const { data: users, error: selectUsersError } = await supabaseAdmin
      .from("users")
      .select("id")
      .eq("email", customerEmail)
      .limit(1);
      
    if (!selectUsersError && users && users.length > 0) {
       await supabaseAdmin.from("users").update(updateData).eq("email", customerEmail);
       console.log("[SUPABASE] Atualizado plano do usuário na tabela 'users' para", customerEmail);
       return;
    }
    console.warn("[SUPABASE] Usuário não encontrado no Supabase (nem em profiles, nem em users):", customerEmail);
    return;
  }
  
  const { error: updateError } = await supabaseAdmin
    .from("profiles")
    .update(updateData)
    .eq("email", customerEmail);
    
  if (updateError) {
    console.error("[SUPABASE] Erro ao atualizar plano no Supabase:", updateError);
  } else {
    console.log("[SUPABASE] Plano atualizado com sucesso no Supabase para", customerEmail, "Event:", event);
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

    // Buscar o email do cliente para atualizar o Supabase
    let customerEmailForSupabase = "";
    if (payload.payment?.customer) {
      const customerResult = await asaasGet<AsaasCustomer>(`/customers/${payload.payment.customer}`);
      if (customerResult.ok && customerResult.data.email) {
        customerEmailForSupabase = customerResult.data.email;
      }
    }

    // Eventos de cobrança (ex.: PAYMENT_CREATED, PAYMENT_CONFIRMED, PAYMENT_RECEIVED, PAYMENT_OVERDUE)
    switch (payload.event) {
      case "PAYMENT_RECEIVED":
        await handlePaymentReceived(payload);
        if (customerEmailForSupabase) {
          await updateUserPlanInSupabase(customerEmailForSupabase, payload);
        }
        console.log("[ASAAS WEBHOOK]", {
          event: payload.event,
          id: payload.id,
          paymentId: payload.payment?.id,
          status: payload.payment?.status,
          billingType: payload.payment?.billingType,
          value: payload.payment?.value,
        });
        break;
      case "PAYMENT_CONFIRMED":
      case "PAYMENT_CREATED":
      case "PAYMENT_OVERDUE":
      case "PAYMENT_DELETED":
      case "PAYMENT_RESTORED":
        if (customerEmailForSupabase) {
          await updateUserPlanInSupabase(customerEmailForSupabase, payload);
        }
        console.log("[ASAAS WEBHOOK]", {
          event: payload.event,
          id: payload.id,
          paymentId: payload.payment?.id,
          status: payload.payment?.status,
          billingType: payload.payment?.billingType,
          value: payload.payment?.value,
        });
        break;
      default:
        console.log("[ASAAS WEBHOOK] Evento ignorado", {
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
