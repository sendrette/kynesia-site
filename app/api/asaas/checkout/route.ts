import { NextResponse } from "next/server";
import { getPlanPricing, onlyDigits, planCatalog, type BillingCycle, type PlanKey } from "../../../lib/pricing";

export const runtime = "nodejs";

type BillingType = "PIX" | "CREDIT_CARD";

type CheckoutPayload = {
  plan: PlanKey;
  billingCycle?: BillingCycle;
  paymentMethod: "pix" | "card";
  customer: {
    name: string;
    email: string;
    cpfCnpj: string;
    mobilePhone: string;
    postalCode: string;
    address: string;
    addressNumber: string;
    complement?: string;
    province: string;
  };
};

type AsaasCustomer = {
  id: string;
};

type AsaasPayment = {
  id: string;
  invoiceUrl?: string;
  bankSlipUrl?: string;
};

type AsaasError = {
  errors?: Array<{ code?: string; description?: string }>;
};

function getAsaasBaseUrl() {
  const mode = process.env.ASAAS_ENVIRONMENT?.toLowerCase();

  if (mode === "sandbox") {
    return "https://api-sandbox.asaas.com/v3";
  }

  return "https://api.asaas.com/v3";
}

function getNextDueDate() {
  const now = new Date();
  const due = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  return due.toISOString().slice(0, 10);
}

async function asaasRequest<T>(
  path: string,
  options: RequestInit,
): Promise<{ ok: true; data: T } | { ok: false; status: number; error: string }> {
  const apiKey = process.env.ASAAS_API_KEY;
  if (!apiKey) {
    return { ok: false, status: 500, error: "Variável ASAAS_API_KEY não configurada." };
  }

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

  const json = (await response.json()) as T & AsaasError;

  if (!response.ok) {
    const firstError = json.errors?.[0]?.description;
    return {
      ok: false,
      status: response.status,
      error: firstError ?? "Falha ao comunicar com o Asaas.",
    };
  }

  return { ok: true, data: json };
}

async function findOrCreateCustomer(payload: CheckoutPayload["customer"]) {
  const cpfCnpj = onlyDigits(payload.cpfCnpj);

  const found = await asaasRequest<{ data?: AsaasCustomer[] }>(
    `/customers?cpfCnpj=${cpfCnpj}&limit=1`,
    { method: "GET" },
  );

  if (found.ok && found.data.data && found.data.data.length > 0) {
    return { ok: true as const, customerId: found.data.data[0].id };
  }

  const created = await asaasRequest<AsaasCustomer>("/customers", {
    method: "POST",
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      cpfCnpj,
      mobilePhone: onlyDigits(payload.mobilePhone),
      postalCode: onlyDigits(payload.postalCode),
      address: payload.address,
      addressNumber: payload.addressNumber,
      complement: payload.complement,
      province: payload.province,
      notificationDisabled: false,
    }),
  });

  if (!created.ok) {
    return created;
  }

  return { ok: true as const, customerId: created.data.id };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CheckoutPayload;

    if (!body.plan || !(body.plan in planCatalog)) {
      return NextResponse.json({ ok: false, error: "Plano inválido." }, { status: 400 });
    }

    const billingCycle: BillingCycle = body.billingCycle === "annual" ? "annual" : "monthly";

    if (!body.customer?.name || !body.customer?.email || !body.customer?.cpfCnpj) {
      return NextResponse.json(
        { ok: false, error: "Preencha os dados obrigatórios do cliente." },
        { status: 400 },
      );
    }

    const pricing = getPlanPricing(body.plan, billingCycle);
    const amount = pricing.totalPrice;

    if (amount <= 0) {
      return NextResponse.json(
        { ok: false, error: "Plano gratuito não exige cobrança no Asaas." },
        { status: 400 },
      );
    }

    const billingType: BillingType = body.paymentMethod === "pix" ? "PIX" : "CREDIT_CARD";
    const isAnnualCardInstallment = billingType === "CREDIT_CARD" && billingCycle === "annual";

    const customerResult = await findOrCreateCustomer(body.customer);
    if (!customerResult.ok) {
      return NextResponse.json(
        { ok: false, error: customerResult.error },
        { status: customerResult.status },
      );
    }

    const paymentResult = await asaasRequest<AsaasPayment>("/payments", {
      method: "POST",
      body: JSON.stringify({
        customer: customerResult.customerId,
        billingType,
        value: amount,
        dueDate: getNextDueDate(),
        installmentCount: isAnnualCardInstallment ? pricing.installmentCount : undefined,
        installmentValue: isAnnualCardInstallment ? pricing.installmentValue : undefined,
        description: `Assinatura Kynesia - Plano ${body.plan.toUpperCase()} (${billingCycle === "annual" ? "anual" : "mensal"})`,
        externalReference: `kynesia-${body.plan}-${Date.now()}`,
      }),
    });

    if (!paymentResult.ok) {
      return NextResponse.json(
        { ok: false, error: paymentResult.error },
        { status: paymentResult.status },
      );
    }

    let pixPayload:
      | {
          qrCodeImage?: string;
          payload?: string;
          expirationDate?: string;
        }
      | undefined;

    if (billingType === "PIX") {
      const pixResult = await asaasRequest<{
        encodedImage?: string;
        payload?: string;
        expirationDate?: string;
      }>(`/payments/${paymentResult.data.id}/pixQrCode`, {
        method: "GET",
      });

      if (pixResult.ok) {
        pixPayload = {
          qrCodeImage: pixResult.data.encodedImage,
          payload: pixResult.data.payload,
          expirationDate: pixResult.data.expirationDate,
        };
      }
    }

    return NextResponse.json({
      ok: true,
      paymentId: paymentResult.data.id,
      billingType,
      billingCycle,
      totalValue: amount,
      checkoutUrl: paymentResult.data.invoiceUrl ?? paymentResult.data.bankSlipUrl ?? null,
      pix: pixPayload,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro inesperado ao criar cobrança.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
