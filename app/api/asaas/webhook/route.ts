import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createElement } from "react";
import WelcomeEmail from "@/email-templates/WelcomeEmail";

export const runtime = "nodejs";

const processedEventIds = new Set<string>();
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
      if (processedEventIds.has(payload.id)) {
        return NextResponse.json({ ok: true, duplicated: true }, { status: 200 });
      }

      processedEventIds.add(payload.id);
      if (processedEventIds.size > 5000) {
        processedEventIds.clear();
      }
    }

    // Eventos de cobrança (ex.: PAYMENT_CREATED, PAYMENT_CONFIRMED, PAYMENT_RECEIVED, PAYMENT_OVERDUE)
    switch (payload.event) {
      case "PAYMENT_RECEIVED":
        await handlePaymentReceived(payload);
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
