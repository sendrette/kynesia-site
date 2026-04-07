"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Reveal from "./reveal";
import { formatCurrencyBRL, getPlanPricing, planCatalog, type BillingCycle } from "../lib/pricing";

export default function HomePricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const plans = useMemo(
    () => [
      {
        key: "start" as const,
        summary: "Base essencial para iniciar com organização.",
      },
      {
        key: "flow" as const,
        summary: "Plano recomendado para evolução consistente.",
      },
      {
        key: "elite" as const,
        summary: "Escala com recursos avançados e suporte prioritário.",
      },
    ],
    [],
  );

  return (
    <section className="px-6 py-20 md:py-24" id="planos">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Planos Kynesia</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">
            Compare os planos Start, Flow e Elite e escolha a melhor evolução para sua clínica.
          </p>

          <div className="mt-8 inline-flex rounded-2xl border border-gray-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                billingCycle === "monthly" ? "bg-teal-600 text-white" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Mensal
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                billingCycle === "annual" ? "bg-teal-600 text-white" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Anual -15%
            </button>
          </div>

          <p className="mt-4 text-sm font-medium text-teal-700">
            Assinatura anual com 15% de desconto. No cartão, a cobrança fica em 12x.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => {
            const meta = planCatalog[plan.key];
            const pricing = getPlanPricing(plan.key, billingCycle);
            const isFlow = meta.name === "Flow";

            return (
              <Reveal key={meta.name} delay={index * 90}>
                <article
                  className={`rounded-2xl border p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                    isFlow ? "border-teal-500 bg-teal-50/60" : "border-gray-200 bg-white"
                  }`}
                >
                  {isFlow && (
                    <p className="mb-3 inline-flex rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      Recomendado
                    </p>
                  )}
                  <h3 className="text-base font-semibold">{meta.name}</h3>

                  {meta.monthlyPrice > 0 ? (
                    <div className="mt-2">
                      {billingCycle === "annual" ? (
                        <>
                          <p className="text-2xl font-bold text-gray-900">
                            12x {formatCurrencyBRL(pricing.installmentValue)}
                          </p>
                          <p className="mt-1 text-sm font-medium text-emerald-600">
                            Total {formatCurrencyBRL(pricing.totalPrice)}/ano
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            Economia de {formatCurrencyBRL(pricing.savings)}
                          </p>
                        </>
                      ) : (
                        <p className="text-2xl font-bold text-gray-900">{formatCurrencyBRL(meta.monthlyPrice)}/mês</p>
                      )}
                    </div>
                  ) : (
                    <p className="mt-2 text-2xl font-bold text-gray-900">Gratuito</p>
                  )}

                  <p className="mt-3 text-sm text-gray-600">{plan.summary}</p>

                  <Link
                    href={plan.key === "start" ? "/start-free" : `/checkout?plan=${plan.key}&cycle=${billingCycle}`}
                    className={`mt-6 inline-flex rounded-xl border px-5 py-3 text-sm font-medium transition ${
                      isFlow ? "border-teal-600 bg-teal-600 text-white hover:bg-teal-700" : "border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {plan.key === "start" ? "Começar grátis" : "Ver detalhes"}
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}