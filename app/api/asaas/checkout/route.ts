import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createElement } from "react";
import WelcomeEmail from "@/email-templates/WelcomeEmail";
import { supabaseAdmin } from "../../../lib/supabase";
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
    city?: string;
    state?: string;
  };
  creditCard?: {
    holderName: string;
    number: string;
    expiryMonth: string;
    expiryYear: string;
    ccv: string;
  };
  isTrial?: boolean;
};

type AsaasCustomer = {
  id: string;
};

type AsaasSubscription = {
  id: string;
  customer?: string;
  value?: number;
  nextDueDate?: string;
  cycle?: string;
  status?: string;
  description?: string;
};

type AsaasPayment = {
  id: string;
  invoiceUrl?: string;
  bankSlipUrl?: string;
  status?: string;
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

function getNextDueDate(isTrial?: boolean) {
  const now = new Date();
  const spTimeString = now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
  const spDate = new Date(spTimeString);

  const offset = isTrial ? 5 : 1;
  spDate.setDate(spDate.getDate() + offset);

  const year = spDate.getFullYear();
  const month = String(spDate.getMonth() + 1).padStart(2, "0");
  const day = String(spDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
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

async function sendWelcomeNotification(email: string, name?: string, isTrial?: boolean, plan?: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.warn("[EMAIL] Resend credenciais ausentes (RESEND_API_KEY/RESEND_FROM_EMAIL).");
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const firstName = name?.trim().split(" ")[0] || "Profissional";
    const subject = isTrial
      ? "Bem-vindo(a) à Kynesia — Seus 5 dias grátis estão liberados!"
      : "Bem-vindo(a) à Kynesia — Assinatura confirmada!";

    await resend.emails.send({
      from,
      to: [email.trim().toLowerCase()],
      subject,
      react: createElement(WelcomeEmail, {
        firstName,
        loginUrl: "https://kynesia-app.vercel.app",
        isTrial: Boolean(isTrial),
        planName: plan ? plan.toUpperCase() : "FLOW",
      }),
    });
    console.log("[EMAIL] E-mail de boas-vindas enviado com sucesso para:", email);
  } catch (err) {
    console.error("[EMAIL ERROR] Erro ao enviar e-mail de boas-vindas:", err);
  }
}

async function syncUserInSupabase({
  name,
  email,
  phone,
  cpfCnpj,
  plan,
  isTrial,
  asaasCustomerId,
  subscriptionId,
  paymentId,
  dueDate,
}: {
  name: string;
  email: string;
  phone?: string;
  cpfCnpj?: string;
  plan: string;
  isTrial?: boolean;
  asaasCustomerId: string;
  subscriptionId?: string;
  paymentId?: string;
  dueDate: string;
}) {
  const normalizedEmail = email.trim().toLowerCase();

  try {
    // 1. Tentar criar usuário no Supabase Auth (caso ainda não exista)
    let authUserId: string | null = null;
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: normalizedEmail,
      email_confirm: true,
      user_metadata: {
        name: name.trim(),
        full_name: name.trim(),
        phone: phone || "",
        cpf: cpfCnpj || "",
      },
    });

    if (authData?.user?.id) {
      authUserId = authData.user.id;
      console.log("[SUPABASE AUTH] Usuário criado no Auth com ID:", authUserId);
    } else if (authError) {
      console.log("[SUPABASE AUTH] Usuário já pode existir ou aviso:", authError.message);
    }

    // 2. Dados de perfil e assinatura
    const nowIso = new Date().toISOString();
    const trialEndIso = new Date(dueDate).toISOString();

    const profileData: Record<string, any> = {
      email: normalizedEmail,
      name: name.trim(),
      full_name: name.trim(),
      phone: phone || "",
      current_plan: isTrial ? "flow" : (plan || "flow"),
      subscription_status: isTrial ? "trialing" : "active",
      trial_started_at: isTrial ? nowIso : null,
      trial_ends_at: isTrial ? trialEndIso : null,
      next_billing_at: trialEndIso,
      asaas_customer_id: asaasCustomerId,
      asaas_subscription_id: subscriptionId || paymentId || null,
      payment_id: paymentId || subscriptionId || null,
      updated_at: nowIso,
    };

    // 3. Atualizar/Inserir na tabela 'profiles'
    const { data: existingProfiles } = await supabaseAdmin
      .from("profiles")
      .select("id")
      .eq("email", normalizedEmail)
      .limit(1);

    if (existingProfiles && existingProfiles.length > 0) {
      const profileId = existingProfiles[0].id;
      await supabaseAdmin
        .from("profiles")
        .update(profileData)
        .eq("id", profileId);
      console.log("[SUPABASE] Tabela 'profiles' atualizada para:", normalizedEmail);
    } else {
      const insertPayload = authUserId ? { id: authUserId, ...profileData } : profileData;
      const { error: profileInsertError } = await supabaseAdmin
        .from("profiles")
        .insert(insertPayload);

      if (profileInsertError) {
        console.warn("[SUPABASE] Aviso ao inserir em 'profiles', tentando fallback na tabela 'users':", profileInsertError.message);
        const { data: existingUsers } = await supabaseAdmin
          .from("users")
          .select("id")
          .eq("email", normalizedEmail)
          .limit(1);

        if (existingUsers && existingUsers.length > 0) {
          await supabaseAdmin
            .from("users")
            .update(profileData)
            .eq("id", existingUsers[0].id);
          console.log("[SUPABASE] Tabela 'users' atualizada para:", normalizedEmail);
        } else {
          await supabaseAdmin.from("users").insert(insertPayload);
          console.log("[SUPABASE] Tabela 'users' inserida para:", normalizedEmail);
        }
      } else {
        console.log("[SUPABASE] Registro em 'profiles' criado com sucesso para:", normalizedEmail);
      }
    }
  } catch (err) {
    console.error("[SUPABASE SYNC ERROR] Falha ao sincronizar usuário no Supabase:", err);
  }
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
    const amount = billingCycle === "annual" ? pricing.totalPrice : pricing.monthlyPrice;

    if (amount <= 0) {
      return NextResponse.json(
        { ok: false, error: "Plano gratuito não exige cobrança no Asaas." },
        { status: 400 },
      );
    }

    const billingType: BillingType = body.paymentMethod === "pix" ? "PIX" : "CREDIT_CARD";

    const customerResult = await findOrCreateCustomer(body.customer);
    if (!customerResult.ok) {
      return NextResponse.json(
        { ok: false, error: customerResult.error },
        { status: customerResult.status },
      );
    }

    const dueDate = getNextDueDate(body.isTrial);

    // FLUXO CARTÃO DE CRÉDITO (ASSINATURA COM RETENÇÃO DE DADOS E COBRANÇA APÓS 5 DIAS GRÁTIS)
    if (billingType === "CREDIT_CARD") {
      if (!body.creditCard?.number || !body.creditCard?.holderName) {
        return NextResponse.json(
          { ok: false, error: "Preencha todos os dados do cartão de crédito." },
          { status: 400 },
        );
      }

      const expYear = body.creditCard.expiryYear?.trim() || "";
      const fullYear = expYear.length === 2 ? `20${expYear}` : expYear;

      const subscriptionPayload = {
        customer: customerResult.customerId,
        billingType: "CREDIT_CARD" as const,
        value: amount,
        nextDueDate: dueDate,
        cycle: billingCycle === "annual" ? ("YEARLY" as const) : ("MONTHLY" as const),
        description: `Assinatura Kynesia - Plano ${body.plan.toUpperCase()} (${billingCycle === "annual" ? "anual" : "mensal"})${body.isTrial ? " [Trial 5 Dias]" : ""}`,
        externalReference: `kynesia-${body.plan}-${Date.now()}`,
        creditCard: {
          holderName: body.creditCard.holderName,
          number: onlyDigits(body.creditCard.number),
          expiryMonth: body.creditCard.expiryMonth?.trim(),
          expiryYear: fullYear,
          ccv: onlyDigits(body.creditCard.ccv),
        },
        creditCardHolderInfo: {
          name: body.customer.name,
          email: body.customer.email,
          cpfCnpj: onlyDigits(body.customer.cpfCnpj),
          postalCode: onlyDigits(body.customer.postalCode),
          addressNumber: body.customer.addressNumber,
          addressComplement: body.customer.complement || undefined,
          phone: onlyDigits(body.customer.mobilePhone),
          mobilePhone: onlyDigits(body.customer.mobilePhone),
        },
      };

      // Criar a assinatura no Asaas com os dados do cartão (validação imediata, débito SOMENTE após o trial)
      const subscriptionResult = await asaasRequest<AsaasSubscription>("/subscriptions", {
        method: "POST",
        body: JSON.stringify(subscriptionPayload),
      });

      if (!subscriptionResult.ok) {
        return NextResponse.json(
          { ok: false, error: subscriptionResult.error },
          { status: subscriptionResult.status },
        );
      }

      // Sincronizar criação/atualização do usuário e plano no Supabase
      await syncUserInSupabase({
        name: body.customer.name,
        email: body.customer.email,
        phone: body.customer.mobilePhone,
        cpfCnpj: body.customer.cpfCnpj,
        plan: body.plan,
        isTrial: body.isTrial,
        asaasCustomerId: customerResult.customerId,
        subscriptionId: subscriptionResult.data.id,
        dueDate,
      });

      // Enviar e-mail de boas-vindas imediatamente
      void sendWelcomeNotification(body.customer.email, body.customer.name, body.isTrial, body.plan);

      return NextResponse.json({
        ok: true,
        subscriptionId: subscriptionResult.data.id,
        billingType,
        billingCycle,
        totalValue: amount,
        nextDueDate: dueDate,
        redirectUrl: "https://kynesia-app.vercel.app",
      });
    }

    // FLUXO PIX (Cobrança direta com QR Code)
    const paymentResult = await asaasRequest<AsaasPayment>("/payments", {
      method: "POST",
      body: JSON.stringify({
        customer: customerResult.customerId,
        billingType: "PIX",
        value: amount,
        dueDate,
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

    // Sincronizar criação/atualização do usuário e plano no Supabase
    await syncUserInSupabase({
      name: body.customer.name,
      email: body.customer.email,
      phone: body.customer.mobilePhone,
      cpfCnpj: body.customer.cpfCnpj,
      plan: body.plan,
      isTrial: body.isTrial,
      asaasCustomerId: customerResult.customerId,
      paymentId: paymentResult.data.id,
      dueDate,
    });

    // Enviar e-mail de boas-vindas imediatamente
    void sendWelcomeNotification(body.customer.email, body.customer.name, body.isTrial, body.plan);

    return NextResponse.json({
      ok: true,
      paymentId: paymentResult.data.id,
      billingType,
      billingCycle,
      totalValue: amount,
      redirectUrl: "https://kynesia-app.vercel.app",
      checkoutUrl: paymentResult.data.invoiceUrl ?? paymentResult.data.bankSlipUrl ?? null,
      pix: pixPayload,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro inesperado ao criar cobrança.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
