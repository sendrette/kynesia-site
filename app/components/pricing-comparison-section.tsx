"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import Reveal from "./reveal";
import {
  formatCurrencyBRL,
  getPlanPricing,
  planCatalog,
  pricingComparisonCards,
  type BillingCycle,
  type PlanKey,
} from "../lib/pricing";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5 shrink-0 text-emerald-500">
      <path d="M16.25 5.75 8.5 13.5l-4.25-4.25" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-5 w-5 shrink-0 text-gray-400">
      <path d="M6.5 8.5V6.75a3.5 3.5 0 1 1 7 0V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="4" y="8.5" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 11.5v2.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

type PricingComparisonSectionProps = {
  showHeader?: boolean;
  title?: string;
  description?: string;
  billingCycle?: BillingCycle;
  onBillingCycleChange?: (cycle: BillingCycle) => void;
};

export default function PricingComparisonSection({
  showHeader = true,
  title = "Planos Kynesia",
  description = "Compare os planos Start, Flow e Elite e escolha a melhor evolução para sua clínica.",
  billingCycle: controlledBillingCycle,
  onBillingCycleChange,
}: PricingComparisonSectionProps) {
  const [uncontrolledBillingCycle, setUncontrolledBillingCycle] = useState<BillingCycle>("monthly");
  const [selectedPlanKey, setSelectedPlanKey] = useState<PlanKey>("flow");
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const billingCycle = controlledBillingCycle ?? uncontrolledBillingCycle;
  const setBillingCycle = onBillingCycleChange ?? setUncontrolledBillingCycle;

  const selectedPlan = useMemo(
    () => pricingComparisonCards.find((plan) => plan.key === selectedPlanKey) ?? pricingComparisonCards[1],
    [selectedPlanKey],
  );
  const selectedMeta = planCatalog[selectedPlan.key];
  const selectedPricing = getPlanPricing(selectedPlan.key, billingCycle);

  function handleDetailsClick(planKey: PlanKey) {
    setSelectedPlanKey(planKey);
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  return (
    <section className="px-6 py-20 md:py-24" id="planos">
      <div className="mx-auto max-w-7xl">
        {showHeader ? (
          <Reveal className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">{description}</p>
          </Reveal>
        ) : null}

        <Reveal className={showHeader ? "mt-8 text-center" : "text-center"}>
          <div className="inline-flex rounded-2xl border border-slate-200 bg-white p-1 shadow-sm shadow-slate-200/70">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                billingCycle === "monthly" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              Mensal
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                billingCycle === "annual" ? "bg-teal-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              Anual -15%
            </button>
          </div>

          <p className="mt-4 text-sm font-medium text-teal-700">
            Assinatura anual com 15% de desconto. No cartão, a cobrança fica em 12x.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingComparisonCards.map((plan, index) => {
            const meta = planCatalog[plan.key];
            const pricing = getPlanPricing(plan.key, billingCycle);
            const isFeatured = plan.featured;
            const isSelected = selectedPlan.key === plan.key;

            return (
              <Reveal key={plan.key} delay={index * 90}>
                <article
                  className={`flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isFeatured
                      ? "border-teal-400 bg-gradient-to-b from-teal-50/90 to-white shadow-teal-100 ring-1 ring-teal-200"
                      : "border-slate-200"
                  } ${isSelected ? "ring-2 ring-teal-500/40" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{plan.tagline}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{meta.name}</h3>
                    </div>

                    {isFeatured ? (
                      <span className="inline-flex items-center rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                        Mais escolhido
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                    {meta.monthlyPrice > 0 ? (
                      billingCycle === "annual" ? (
                        <>
                          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Cobrança anual em 12x</p>
                          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
                            12x {formatCurrencyBRL(pricing.installmentValue)}
                          </p>
                          <p className="mt-1 text-sm text-slate-600">Total de {formatCurrencyBRL(pricing.totalPrice)}/ano</p>
                          <p className="mt-1 text-sm font-medium text-emerald-600">Economia de {formatCurrencyBRL(pricing.savings)}</p>
                        </>
                      ) : (
                        <>
                          <p className="text-4xl font-bold tracking-tight text-slate-900">
                            {formatCurrencyBRL(meta.monthlyPrice)}
                            <span className="text-base font-medium text-slate-500">/mês</span>
                          </p>
                          <p className="mt-1 text-sm text-slate-600">{plan.summary}</p>
                        </>
                      )
                    ) : (
                      <>
                        <p className="text-4xl font-bold tracking-tight text-slate-900">Gratuito</p>
                        <p className="mt-1 text-sm text-slate-600">{plan.summary}</p>
                      </>
                    )}
                  </div>

                  {billingCycle === "annual" && meta.monthlyPrice > 0 ? (
                    <p className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                      Desconto anual de 15% aplicado sobre o valor total de 12 meses.
                    </p>
                  ) : null}

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.label}
                        className={`flex items-start gap-3 rounded-2xl border px-4 py-3 ${
                          feature.status === "included"
                            ? "border-emerald-100 bg-white text-slate-700"
                            : "border-slate-200 bg-slate-50 text-slate-500"
                        }`}
                      >
                        {feature.status === "included" ? <CheckIcon /> : <LockIcon />}
                        <div className="min-w-0">
                          <p className="text-sm font-medium leading-snug text-slate-900">{feature.label}</p>
                          {feature.note ? <p className="mt-1 text-xs leading-relaxed text-slate-500">{feature.note}</p> : null}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => handleDetailsClick(plan.key)}
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3.5 text-sm font-semibold transition ${
                      isFeatured
                        ? "bg-teal-600 text-white shadow-sm shadow-teal-200 hover:bg-teal-700"
                        : "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50"
                    }`}
                  >
                    Ver detalhes
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div ref={detailsRef} className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">Detalhes do plano selecionado</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  {selectedMeta.name} — {selectedPlan.tagline}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{selectedPlan.summary}</p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-left lg:text-right">
                {selectedMeta.monthlyPrice > 0 ? (
                  billingCycle === "annual" ? (
                    <>
                      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Plano ativo</p>
                      <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                        12x {formatCurrencyBRL(selectedPricing.installmentValue)}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">Total de {formatCurrencyBRL(selectedPricing.totalPrice)}/ano</p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Plano ativo</p>
                      <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                        {formatCurrencyBRL(selectedMeta.monthlyPrice)}
                        <span className="text-base font-medium text-slate-500">/mês</span>
                      </p>
                    </>
                  )
                ) : (
                  <>
                    <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Plano ativo</p>
                    <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">Gratuito</p>
                  </>
                )}
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {selectedPlan.features.map((feature) => (
                <div
                  key={`${selectedPlan.key}-${feature.label}`}
                  className={`rounded-2xl border px-4 py-4 ${
                    feature.status === "included"
                      ? "border-emerald-100 bg-emerald-50/40"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {feature.status === "included" ? <CheckIcon /> : <LockIcon />}
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{feature.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {feature.note ?? "Recurso disponível neste plano."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={selectedPlan.key === "start" ? "/start-free" : `/checkout?plan=${selectedPlan.key}&cycle=${billingCycle}`}
                className="inline-flex items-center justify-center rounded-2xl bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-teal-200 transition hover:bg-teal-700"
              >
                {selectedPlan.key === "start" ? "Começar grátis" : `Assinar ${selectedMeta.name}`}
              </Link>
              <p className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-600">
                Clique em outro card para atualizar este painel com os detalhes do plano escolhido.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
