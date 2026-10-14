import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createElement } from "react";
import CancellationEmail from "@/email-templates/CancellationEmail";
import { supabaseAdmin } from "../../../lib/supabase";
import { onlyDigits } from "../../../lib/pricing";

export const runtime = "nodejs";

type AsaasCustomer = {
  id: string;
  name?: string;
  email?: string;
  cpfCnpj?: string;
};

type AsaasSubscription = {
  id: string;
  customer?: string;
  value?: number;
  nextDueDate?: string;
  cycle?: string;
  status?: string;
  description?: string;
  billingType?: string;
};

type AsaasPayment = {
  id: string;
  status?: string;
  value?: number;
  dueDate?: string;
  description?: string;
};

type AsaasListResponse<T> = {
  object?: string;
  hasMore?: boolean;
  totalCount?: number;
  data?: T[];
  errors?: Array<{ code?: string; description?: string }>;
};

function getAsaasBaseUrl() {
  const mode = process.env.ASAAS_ENVIRONMENT?.toLowerCase();
  if (mode === "sandbox") {
    return "https://api-sandbox.asaas.com/v3";
  }
  return "https://api.asaas.com/v3";
}

async function asaasRequest<T>(
  path: string,
  options: RequestInit,
): Promise<{ ok: true; data: T } | { ok: false; status: number; error: string }> {
  const apiKey = process.env.ASAAS_API_KEY;
  if (!apiKey) {
    return { ok: false, status: 500, error: "Variável ASAAS_API_KEY não configurada no servidor." };
  }

  try {
    const response = await fetch(`${getAsaasBaseUrl()}${path}`, {
      ...options,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        access_token: apiKey,
        ...(options.headers ?? {}),
      },
      cache: "no-store",
    });

    const json = (await response.json()) as T & { errors?: Array<{ code?: string; description?: string }> };

    if (!response.ok) {
      const firstError = json.errors?.[0]?.description;
      return {
        ok: false,
        status: response.status,
        error: firstError ?? "Falha ao comunicar com o gateway Asaas.",
      };
    }

    return { ok: true, data: json };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      error: error instanceof Error ? error.message : "Erro de conexão com o Asaas.",
    };
  }
}

async function findCustomerInAsaas(identifier: string): Promise<AsaasCustomer | null> {
  const cleanId = identifier.trim();
  const isEmail = cleanId.includes("@");
  const digits = onlyDigits(cleanId);

  // 1. Tentar busca por e-mail no Asaas
  if (isEmail) {
    const res = await asaasRequest<AsaasListResponse<AsaasCustomer>>(
      `/customers?email=${encodeURIComponent(cleanId.toLowerCase())}&limit=1`,
      { method: "GET" },
    );
    if (res.ok && res.data.data && res.data.data.length > 0) {
      return res.data.data[0];
    }
  }

  // 2. Tentar busca por CPF/CNPJ no Asaas
  if (digits.length >= 11) {
    const res = await asaasRequest<AsaasListResponse<AsaasCustomer>>(
      `/customers?cpfCnpj=${digits}&limit=1`,
      { method: "GET" },
    );
    if (res.ok && res.data.data && res.data.data.length > 0) {
      return res.data.data[0];
    }
  }

  // 3. Fallback: procurar no Supabase se há registro com esse e-mail/CPF que guarde asaas_customer_id
  try {
    let query = supabaseAdmin.from("profiles").select("email, asaas_customer_id, full_name, name");
    if (isEmail) {
      query = query.eq("email", cleanId.toLowerCase());
    } else if (digits.length >= 11) {
      query = query.eq("cpf", digits);
    }
    const { data: profiles } = await query.limit(1);

    if (profiles && profiles.length > 0 && profiles[0].asaas_customer_id) {
      const custRes = await asaasRequest<AsaasCustomer>(
        `/customers/${profiles[0].asaas_customer_id}`,
        { method: "GET" },
      );
      if (custRes.ok) {
        return custRes.data;
      }
      return {
        id: profiles[0].asaas_customer_id,
        email: profiles[0].email,
        name: profiles[0].full_name || profiles[0].name,
      };
    }
  } catch (err) {
    console.warn("[CANCELAMENTO] Erro ao consultar fallback Supabase:", err);
  }

  return null;
}

async function sendCancellationNotification(email: string, name?: string, planName?: string, isTrial?: boolean) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.warn("[EMAIL] Resend ausente. Notificação de cancelamento ignorada.");
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const firstName = name?.trim().split(" ")[0] || "Profissional";

    await resend.emails.send({
      from,
      to: [email.trim().toLowerCase()],
      subject: "Cancelamento confirmado — Kynesia",
      react: createElement(CancellationEmail, {
        firstName,
        planName: planName || "Flow",
        isTrial: Boolean(isTrial),
      }),
    });
    console.log("[EMAIL] E-mail de confirmação de cancelamento enviado para:", email);
  } catch (err) {
    console.error("[EMAIL ERROR] Erro ao enviar e-mail de cancelamento:", err);
  }
}

// POST: Realiza consulta (action: "check") OU cancelamento efetivo (action: "cancel")
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { identifier, action = "cancel", reason = "" } = body;

    if (!identifier || typeof identifier !== "string" || !identifier.trim()) {
      return NextResponse.json(
        { ok: false, error: "Informe seu e-mail ou CPF cadastrado para localizar sua assinatura." },
        { status: 400 },
      );
    }

    const customer = await findCustomerInAsaas(identifier);

    if (!customer) {
      return NextResponse.json(
        {
          ok: false,
          notFound: true,
          error: "Nenhum cadastro encontrado com os dados informados. Verifique se digitou o mesmo e-mail ou CPF usado na assinatura.",
        },
        { status: 404 },
      );
    }

    // Buscar assinaturas associadas a este cliente no Asaas
    const subsRes = await asaasRequest<AsaasListResponse<AsaasSubscription>>(
      `/subscriptions?customer=${customer.id}`,
      { method: "GET" },
    );

    const subscriptions = subsRes.ok && subsRes.data.data ? subsRes.data.data : [];
    const activeSubs = subscriptions.filter(
      (s) => s.status === "ACTIVE" || s.status === "PENDING" || s.status === "CREATED",
    );

    // Buscar cobranças pendentes
    const paymentsRes = await asaasRequest<AsaasListResponse<AsaasPayment>>(
      `/payments?customer=${customer.id}&status=PENDING`,
      { method: "GET" },
    );
    const pendingPayments = paymentsRes.ok && paymentsRes.data.data ? paymentsRes.data.data : [];

    // Detectar detalhes da assinatura
    const primarySub = activeSubs[0] || subscriptions[0];
    const isTrial =
      Boolean(primarySub?.description?.includes("[Trial 5 Dias]")) ||
      Boolean(primarySub?.nextDueDate && new Date(primarySub.nextDueDate) > new Date());
    const planName = primarySub?.description?.toLowerCase().includes("elite")
      ? "Elite"
      : primarySub?.description?.toLowerCase().includes("flow")
      ? "Flow"
      : "Flow";

    // 1. SE A AÇÃO FOR APENAS CONSULTAR (check)
    if (action === "check") {
      if (activeSubs.length === 0 && pendingPayments.length === 0) {
        return NextResponse.json({
          ok: true,
          hasActiveSubscription: false,
          customerName: customer.name,
          customerEmail: customer.email,
          message: "Você não possui nenhuma assinatura ativa ou cobrança pendente para este cadastro.",
        });
      }

      return NextResponse.json({
        ok: true,
        hasActiveSubscription: true,
        customerName: customer.name,
        customerEmail: customer.email,
        subscription: {
          id: primarySub?.id,
          planName,
          value: primarySub?.value || (pendingPayments[0]?.value ?? 49.9),
          nextDueDate: primarySub?.nextDueDate || pendingPayments[0]?.dueDate,
          isTrial,
          status: primarySub?.status || "PENDING",
          description: primarySub?.description || pendingPayments[0]?.description,
        },
        activeSubscriptionsCount: activeSubs.length,
        pendingPaymentsCount: pendingPayments.length,
      });
    }

    // 2. SE A AÇÃO FOR CANCELAR (cancel)
    let canceledSubsCount = 0;
    let canceledPaymentsCount = 0;

    // A. Deletar todas as assinaturas ativas no Asaas
    for (const sub of activeSubs) {
      const delRes = await asaasRequest(`/subscriptions/${sub.id}`, { method: "DELETE" });
      if (delRes.ok) {
        canceledSubsCount++;
        console.log(`[ASAAS] Assinatura cancelada com sucesso: ${sub.id}`);
      } else {
        console.warn(`[ASAAS] Falha ao deletar assinatura ${sub.id}:`, delRes.error);
      }
    }

    // B. Deletar/cancelar cobranças pendentes
    for (const pay of pendingPayments) {
      const delPayRes = await asaasRequest(`/payments/${pay.id}`, { method: "DELETE" });
      if (delPayRes.ok) {
        canceledPaymentsCount++;
        console.log(`[ASAAS] Cobrança pendente cancelada: ${pay.id}`);
      }
    }

    // C. Atualizar o banco de dados Supabase (profiles e fallback users)
    const normalizedEmail = customer.email?.trim().toLowerCase();
    if (normalizedEmail) {
      const updatePayload = {
        subscription_status: "canceled",
        current_plan: "start",
        updated_at: new Date().toISOString(),
      };

      try {
        const { error: pError } = await supabaseAdmin
          .from("profiles")
          .update(updatePayload)
          .eq("email", normalizedEmail);

        if (pError) {
          console.warn("[SUPABASE] Falha ao atualizar profiles no cancelamento:", pError.message);
        } else {
          console.log("[SUPABASE] Plano atualizado para 'start' e status 'canceled' no profiles para:", normalizedEmail);
        }

        // Atualizar também na tabela users por redundância
        await supabaseAdmin
          .from("users")
          .update(updatePayload)
          .eq("email", normalizedEmail);
      } catch (dbErr) {
        console.error("[SUPABASE ERROR] Erro ao sincronizar cancelamento no banco:", dbErr);
      }
    }

    // D. Enviar e-mail de confirmação ao cliente
    if (customer.email) {
      void sendCancellationNotification(customer.email, customer.name, planName, isTrial);
    }

    return NextResponse.json({
      ok: true,
      message: "Sua assinatura foi cancelada com sucesso! Nenhuma cobrança futura será realizada no seu cartão de crédito.",
      canceledSubsCount,
      canceledPaymentsCount,
      customerEmail: customer.email,
      planName,
      isTrial,
      reason: reason || undefined,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro inesperado ao processar cancelamento.";
    console.error("[CANCELAMENTO ERROR]:", error);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
