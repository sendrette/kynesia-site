"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { formatCurrencyBRL, getPlanPricing, planCatalog, type BillingCycle, type PlanKey, onlyDigits } from "../lib/pricing";
import SiteHeader from "../components/site-header";

type PaymentMethod = "card" | "pix";

type CheckoutForm = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCvv: string;
};

const initialForm: CheckoutForm = {
  name: "",
  email: "",
  cpf: "",
  phone: "",
  cep: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
  cardNumber: "",
  cardName: "",
  cardExpiry: "",
  cardCvv: "",
};

function formatCpf(value: string) {
  const digits = onlyDigits(value).slice(0, 11);
  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function formatPhone(value: string) {
  const digits = onlyDigits(value).slice(0, 11);

  if (digits.length <= 10) {
    return digits
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return digits
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

function formatCep(value: string) {
  const digits = onlyDigits(value).slice(0, 8);
  return digits.replace(/(\d{5})(\d)/, "$1-$2");
}

function formatCardNumber(value: string) {
  const digits = onlyDigits(value).slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatCardExpiry(value: string) {
  const digits = onlyDigits(value).slice(0, 4);
  return digits.replace(/(\d{2})(\d)/, "$1/$2");
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const requestedPlan = searchParams.get("plan")?.toLowerCase();
  const requestedCycle = searchParams.get("cycle")?.toLowerCase();

  const selectedPlan = useMemo(() => {
    if (requestedPlan === "start" || requestedPlan === "flow" || requestedPlan === "elite") {
      return requestedPlan;
    }

    return "flow";
  }, [requestedPlan]);

  const selectedCycle = useMemo<BillingCycle>(() => {
    return requestedCycle === "annual" ? "annual" : "monthly";
  }, [requestedCycle]);

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(selectedCycle);
  const [form, setForm] = useState<CheckoutForm>(initialForm);
  const [loadingCep, setLoadingCep] = useState(false);
  const [cepError, setCepError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [pixPayload, setPixPayload] = useState<{ qrCodeImage?: string; payload?: string } | null>(null);
  const lastFetchedCep = useRef("");

  const plan = planCatalog[selectedPlan as PlanKey];
  const pricing = getPlanPricing(selectedPlan as PlanKey, billingCycle);
  const isAnnual = billingCycle === "annual";
  const paymentSecurityMessage =
    "Pagamento 100% seguro. Todas as transações são processadas em ambiente criptografado e protegido. As cobranças em sua fatura ou extrato bancário aparecerão sob a razão social: 66.073.513 PEDRO PAULO SENDRETE JUNIOR, CNPJ 66.073.513/0001-30. Ao prosseguir, você concorda com os termos de cobrança da empresa responsável.";

  async function fetchAddressByCep(rawCep: string) {
    const cep = onlyDigits(rawCep);

    if (cep.length !== 8 || cep === lastFetchedCep.current) return;

    setLoadingCep(true);
    setCepError("");

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = (await response.json()) as {
        erro?: boolean;
        logradouro?: string;
        bairro?: string;
        localidade?: string;
        uf?: string;
      };

      if (!response.ok || data.erro) {
        setCepError("CEP não encontrado.");
        return;
      }

      lastFetchedCep.current = cep;
      setForm((prev) => ({
        ...prev,
        street: data.logradouro ?? prev.street,
        neighborhood: data.bairro ?? prev.neighborhood,
        city: data.localidade ?? prev.city,
        state: data.uf ?? prev.state,
      }));
    } catch {
      setCepError("Não foi possível buscar o endereço agora.");
    } finally {
      setLoadingCep(false);
    }
  }

  function updateField<K extends keyof CheckoutForm>(key: K, value: CheckoutForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setSubmitError("");
    setPixPayload(null);

    try {
      const response = await fetch("/api/asaas/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: selectedPlan,
          billingCycle,
          paymentMethod,
          customer: {
            name: form.name,
            email: form.email,
            cpfCnpj: form.cpf,
            mobilePhone: form.phone,
            postalCode: form.cep,
            address: form.street,
            addressNumber: form.number,
            complement: form.complement,
            province: form.neighborhood,
          },
        }),
      });

      const data = (await response.json()) as {
        ok: boolean;
        error?: string;
        checkoutUrl?: string | null;
        pix?: { qrCodeImage?: string; payload?: string };
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Não foi possível criar a cobrança no Asaas.");
      }

      if (paymentMethod === "pix") {
        setPixPayload(data.pix ?? null);
        return;
      }

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return;
      }

      throw new Error("Cobrança criada, mas sem URL de pagamento para redirecionar.");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Erro inesperado ao criar cobrança.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-teal-50 to-blue-50">
      <SiteHeader />

      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/planos" className="text-sm font-medium text-teal-700 underline">
            ← Voltar para planos
          </Link>
          <p className="text-xs text-gray-500">Checkout seguro Kynesia</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr]">
          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
            <p className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
              Resumo do plano
            </p>
            <h1 className="mt-4 text-2xl font-bold text-gray-900">{plan.name}</h1>
            <div className="mt-3 inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1 text-sm">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`rounded-lg px-4 py-2 font-medium transition ${
                  !isAnnual ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                }`}
              >
                Mensal
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("annual")}
                className={`rounded-lg px-4 py-2 font-medium transition ${
                  isAnnual ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                }`}
              >
                Anual -15%
              </button>
            </div>

            {plan.monthlyPrice > 0 ? (
              <div className="mt-4 space-y-1">
                {isAnnual ? (
                  <>
                    <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
                      Cobrança anual em 12x
                    </p>
                    <p className="text-xl font-semibold text-teal-700">
                      12x de {formatCurrencyBRL(pricing.installmentValue)}
                    </p>
                    <p className="text-sm text-gray-500">
                      Total de {formatCurrencyBRL(pricing.totalPrice)} por ano
                    </p>
                    <p className="text-sm font-medium text-emerald-600">
                      Você economiza {formatCurrencyBRL(pricing.savings)}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xl font-semibold text-teal-700">
                      {formatCurrencyBRL(plan.monthlyPrice)}/mês
                    </p>
                    <p className="text-sm text-gray-500">
                      Total de {formatCurrencyBRL(plan.monthlyPrice)} por mês
                    </p>
                  </>
                )}
              </div>
            ) : (
              <p className="mt-1 text-xl font-semibold text-teal-700">Gratuito</p>
            )}

            <ul className="mt-5 space-y-3 text-sm text-gray-700">
              {plan.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span className="mt-0.5 text-teal-600">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {isAnnual && plan.monthlyPrice > 0 ? (
              <div className="mt-5 rounded-xl bg-teal-50 p-4 text-sm text-teal-900">
                Assinatura anual com 15% de desconto. No cartão, o Asaas fará o parcelamento em 12x.
                No Pix, a cobrança será única com o valor anual total.
              </div>
            ) : null}
          </aside>

          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-gray-900">Dados para assinatura</h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Cadastro</h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Nome completo"
                    className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
                  />
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="E-mail"
                    className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
                  />
                  <input
                    required
                    value={form.cpf}
                    onChange={(e) => updateField("cpf", formatCpf(e.target.value))}
                    placeholder="CPF"
                    className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
                  />
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => updateField("phone", formatPhone(e.target.value))}
                    placeholder="Telefone"
                    className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <input
                      required
                      value={form.cep}
                      onBlur={(e) => fetchAddressByCep(e.target.value)}
                      onChange={(e) => {
                        const nextCep = formatCep(e.target.value);
                        updateField("cep", nextCep);

                        if (onlyDigits(nextCep).length === 8) {
                          void fetchAddressByCep(nextCep);
                        }
                      }}
                      placeholder="CEP"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
                    />
                    {loadingCep && <p className="mt-2 text-xs text-gray-500">Buscando endereço...</p>}
                    {cepError && <p className="mt-2 text-xs text-red-600">{cepError}</p>}
                  </div>

                  <input
                    required
                    value={form.street}
                    onChange={(e) => updateField("street", e.target.value)}
                    placeholder="Rua"
                    className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 md:col-span-2"
                  />

                  <input
                    required
                    value={form.number}
                    onChange={(e) => updateField("number", e.target.value)}
                    placeholder="Número"
                    className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
                  />
                  <input
                    value={form.complement}
                    onChange={(e) => updateField("complement", e.target.value)}
                    placeholder="Complemento (opcional)"
                    className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 md:col-span-2"
                  />

                  <input
                    required
                    value={form.neighborhood}
                    onChange={(e) => updateField("neighborhood", e.target.value)}
                    placeholder="Bairro"
                    className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
                  />
                  <input
                    required
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    placeholder="Cidade"
                    className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
                  />
                  <input
                    required
                    value={form.state}
                    onChange={(e) => updateField("state", e.target.value.toUpperCase().slice(0, 2))}
                    placeholder="UF"
                    className="rounded-xl border border-gray-300 px-4 py-3 text-sm uppercase outline-none transition focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Pagamento</h3>

                <div className="inline-flex rounded-xl border border-gray-300 p-1">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                      paymentMethod === "card" ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Cartão de Crédito
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("pix")}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                      paymentMethod === "pix" ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Pix
                  </button>
                </div>

                {paymentMethod === "card" ? (
                  <div className="space-y-3">
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        required
                        value={form.cardNumber}
                        onChange={(e) => updateField("cardNumber", formatCardNumber(e.target.value))}
                        placeholder="Número do cartão"
                        className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 md:col-span-2"
                      />
                      <input
                        required
                        value={form.cardName}
                        onChange={(e) => updateField("cardName", e.target.value)}
                        placeholder="Nome impresso no cartão"
                        className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500 md:col-span-2"
                      />
                      <input
                        required
                        value={form.cardExpiry}
                        onChange={(e) => updateField("cardExpiry", formatCardExpiry(e.target.value))}
                        placeholder="Validade (MM/AA)"
                        className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
                      />
                      <input
                        required
                        value={form.cardCvv}
                        onChange={(e) => updateField("cardCvv", onlyDigits(e.target.value).slice(0, 4))}
                        placeholder="CVV"
                        className="rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-900">
                    Ao confirmar, geraremos um QR Code Pix para pagamento da assinatura do plano {plan.name}
                    {isAnnual ? ` no valor anual de ${formatCurrencyBRL(pricing.totalPrice)}` : ""}.
                  </div>
                )}
              </div>

              {plan.monthlyPrice > 0 ? (
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-gray-900">Resumo da cobrança</span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                      {isAnnual ? "Anual -15%" : "Mensal"}
                    </span>
                  </div>
                  <div className="mt-3 space-y-1">
                    {isAnnual ? (
                      <>
                        <p>
                          Total anual: <strong>{formatCurrencyBRL(pricing.totalPrice)}</strong>
                        </p>
                        <p>
                          Parcelamento no cartão: <strong>12x de {formatCurrencyBRL(pricing.installmentValue)}</strong>
                        </p>
                        <p>
                          Economia de <strong>{formatCurrencyBRL(pricing.savings)}</strong> no ano.
                        </p>
                      </>
                    ) : (
                      <p>
                        Cobrança mensal de <strong>{formatCurrencyBRL(pricing.totalPrice)}</strong>.
                      </p>
                    )}
                  </div>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center rounded-xl bg-teal-600 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
              >
                {submitting ? "Processando..." : "Confirmar Assinatura"}
              </button>

              <p className="mt-2 flex items-start gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs leading-relaxed text-gray-700">
                <span aria-hidden="true" className="mt-0.5 text-gray-600">
                  🔒
                </span>
                <span>{paymentSecurityMessage}</span>
              </p>

              {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}

              {pixPayload?.payload ? (
                <div className="rounded-xl border border-teal-200 bg-teal-50 p-4">
                  <p className="text-sm font-medium text-teal-900">Pix gerado com sucesso</p>
                  {pixPayload.qrCodeImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`data:image/png;base64,${pixPayload.qrCodeImage}`}
                      alt="QR Code Pix"
                      className="mt-3 h-48 w-48 rounded-lg border border-teal-100 bg-white p-2"
                    />
                  ) : null}
                  <p className="mt-3 break-all rounded-lg bg-white p-3 text-xs text-gray-700">
                    {pixPayload.payload}
                  </p>
                </div>
              ) : null}
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

function CheckoutFallback() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-teal-50 to-blue-50">
      <SiteHeader />

      <div className="flex items-center justify-center px-6 py-12 text-center">
        <div className="max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">Preparando checkout seguro</h1>
          <p className="mt-3 text-gray-600">Estamos carregando os detalhes do seu plano.</p>
        </div>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutFallback />}>
      <CheckoutContent />
    </Suspense>
  );
}
