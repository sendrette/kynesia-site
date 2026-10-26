"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import Reveal from "./reveal";
import { ArrowIcon, CheckIcon, GiftIcon, LockIcon } from "./icons";
import { kitInstruments } from "../lib/kit";
import {
  formatCurrencyBRL,
  getPlanPricing,
  planCatalog,
  pricingComparisonCards,
  type BillingCycle,
  type PlanKey,
} from "../lib/pricing";

type PricingComparisonSectionProps = {
  showHeader?: boolean;
  title?: string;
  description?: string;
  billingCycle?: BillingCycle;
  onBillingCycleChange?: (cycle: BillingCycle) => void;
};

const KIT_BANNER = "Assine o Kynesia e receba gratuitamente um kit de avaliação de 23 páginas no seu e-mail!";

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
    <section className="py-0 pb-[104px]" id="planos">
      <div className="k-wrap">
        {showHeader ? (
          <Reveal className="mx-auto max-w-[680px] text-center">
            <p className="k-eyebrow">Planos</p>
            <h2 className="k-h2">{title}</h2>
            <p className="k-lead mx-auto mt-4">{description}</p>
          </Reveal>
        ) : null}

        <Reveal className={`${showHeader ? "mt-8" : ""} text-center`}>
          <div
            role="group"
            aria-label="Ciclo de cobrança"
            className="inline-flex items-center gap-1.5 rounded-full border bg-white p-[5px]"
            style={{ borderColor: "#ddeae6" }}
          >
            <button
              type="button"
              aria-pressed={billingCycle === "monthly"}
              onClick={() => setBillingCycle("monthly")}
              className="k-btn"
              style={{
                minHeight: 44,
                padding: "0 22px",
                fontSize: 15,
                background: billingCycle === "monthly" ? "var(--k-brand)" : "transparent",
                color: billingCycle === "monthly" ? "#fff" : "#35565b",
              }}
            >
              Mensal
            </button>
            <button
              type="button"
              aria-pressed={billingCycle === "annual"}
              onClick={() => setBillingCycle("annual")}
              className="k-btn"
              style={{
                minHeight: 44,
                padding: "0 18px 0 22px",
                fontSize: 15,
                background: billingCycle === "annual" ? "var(--k-brand)" : "transparent",
                color: billingCycle === "annual" ? "#fff" : "#35565b",
              }}
            >
              Anual
              <span
                className="rounded-full px-[9px] py-0.5 text-xs font-extrabold"
                style={{
                  background: billingCycle === "annual" ? "var(--k-mint)" : "var(--k-mist-2)",
                  color: billingCycle === "annual" ? "var(--k-deep)" : "var(--k-brand)",
                }}
              >
                -15%
              </span>
            </button>
          </div>

          <p className="mt-4 text-sm font-semibold text-brand">Assinatura anual com 15% de desconto.</p>

          <div
            className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-3 rounded-[20px] border bg-white px-[18px] py-3.5 text-left"
            style={{ borderColor: "#d5e7e1", boxShadow: "0 10px 30px rgba(22,54,58,.06)" }}
          >
            <span className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-[14px] bg-brand">
              <GiftIcon size={24} stroke="#fff" />
            </span>
            <p className="text-[15px] font-bold leading-[1.45] text-ink">{KIT_BANNER}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] items-stretch gap-5">
          {pricingComparisonCards.map((plan, index) => {
            const meta = planCatalog[plan.key];
            const pricing = getPlanPricing(plan.key, billingCycle);
            const annualPricing = getPlanPricing(plan.key, "annual");
            const isFeatured = plan.featured;
            const isSelected = selectedPlan.key === plan.key;

            const strong = isFeatured ? "text-white" : "text-deep";
            const soft = isFeatured ? "text-[#c9e0d9]" : "text-muted";
            const box = isFeatured ? "bg-white/10 border-white/15" : "bg-mist border-line";

            return (
              <Reveal key={plan.key} delay={index * 80} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-3xl p-8 transition duration-200 hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${
                    isFeatured
                      ? "bg-deep text-white shadow-[0_30px_60px_rgba(22,54,58,.28)]"
                      : "border border-line bg-white hover:shadow-[0_18px_40px_rgba(22,54,58,.10)]"
                  } ${isSelected ? (isFeatured ? "outline outline-[3px] outline-offset-2 outline-mint" : "outline outline-[3px] outline-offset-2 outline-brand/40") : ""}`}
                >
                  {isFeatured ? (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-mint px-4 py-1.5 text-[13px] font-extrabold text-deep">
                      Mais escolhido
                    </span>
                  ) : null}

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className={`text-[13px] font-extrabold uppercase tracking-[0.08em] ${isFeatured ? "text-mint" : "text-muted"}`}>
                        {plan.tagline}
                      </p>
                      <h3 className={`mt-1.5 text-[22px] font-extrabold ${strong}`}>{meta.name}</h3>
                    </div>
                    {pricing.isPromoActive ? (
                      <span className="whitespace-nowrap rounded-full bg-rose-700 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                        {pricing.promoDiscountPercent}% OFF
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-5">
                    {meta.monthlyPrice > 0 ? (
                      billingCycle === "annual" ? (
                        <>
                          <p className={`text-xs font-extrabold uppercase tracking-wide ${isFeatured ? "text-mint" : "text-brand"}`}>
                            Cobrança anual em 12x
                          </p>
                          {pricing.isPromoActive ? (
                            <p className={`mt-1 text-sm font-medium line-through ${soft}`}>
                              12x {formatCurrencyBRL(pricing.originalInstallmentValue)}
                            </p>
                          ) : null}
                          <p className={`mt-1 text-[40px] font-extrabold leading-none tracking-[-0.03em] ${strong}`}>
                            12x {formatCurrencyBRL(pricing.installmentValue)}
                          </p>
                          {pricing.isPromoActive ? (
                            <p className={`mt-2 text-xs line-through ${soft}`}>
                              Total de {formatCurrencyBRL(pricing.originalTotalPrice)}/ano
                            </p>
                          ) : null}
                          <p className={`mt-0.5 text-xs ${soft}`}>Total de {formatCurrencyBRL(pricing.totalPrice)}/ano</p>
                          <p className={`mt-0.5 text-xs font-bold ${isFeatured ? "text-mint" : "text-emerald-700"}`}>
                            Economia de {formatCurrencyBRL(pricing.savings)}
                          </p>
                        </>
                      ) : (
                        <>
                          {pricing.isPromoActive ? (
                            <p className={`text-lg font-medium line-through ${soft}`}>
                              {formatCurrencyBRL(pricing.originalMonthlyPrice)}
                              <span className="text-base font-medium">/mês</span>
                            </p>
                          ) : null}
                          <p className={`text-5xl font-extrabold leading-none tracking-[-0.03em] ${strong}`}>
                            {formatCurrencyBRL(pricing.monthlyPrice)}
                            <span className={`text-[15px] font-medium tracking-normal ${soft}`}>/mês</span>
                          </p>
                          <p className={`mt-3 text-[14.5px] leading-snug ${soft}`}>{plan.summary}</p>
                          {plan.key !== "start" ? (
                            <div className={`mt-4 space-y-1 rounded-2xl border p-3 text-xs ${box} ${isFeatured ? "text-[#e3f1ec]" : "text-muted"}`}>
                              <p className={`text-[10px] font-extrabold uppercase tracking-wider ${isFeatured ? "text-mint" : "text-brand"}`}>
                                Opção Anual:
                              </p>
                              <p>
                                <span className={`font-extrabold ${strong}`}>{formatCurrencyBRL(annualPricing.installmentValue)}/mês</span>{" "}
                                (cobrado {formatCurrencyBRL(annualPricing.totalPrice)}/ano)
                              </p>
                              <p className={`font-bold ${isFeatured ? "text-mint" : "text-emerald-700"}`}>
                                Economize {formatCurrencyBRL(annualPricing.savings)} por ano
                              </p>
                            </div>
                          ) : null}
                        </>
                      )
                    ) : (
                      <>
                        <p className={`text-5xl font-extrabold leading-none tracking-[-0.03em] ${strong}`}>Gratuito</p>
                        <p className={`mt-3 text-[14.5px] leading-snug ${soft}`}>{plan.summary}</p>
                      </>
                    )}
                  </div>

                  {plan.key === "start" ? (
                    <p className="mt-4 inline-flex self-start rounded-full bg-mist px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-brand">
                      Teste todos os recursos por 5 dias grátis
                    </p>
                  ) : null}

                  {billingCycle === "annual" && meta.monthlyPrice > 0 ? (
                    <p className={`mt-4 rounded-xl border px-3 py-2 text-xs ${box} ${isFeatured ? "text-[#e3f1ec]" : "text-muted"}`}>
                      Desconto anual de 15% aplicado {pricing.isPromoActive ? `+ ${pricing.promoDiscountPercent}% OFF promocional.` : "."}
                    </p>
                  ) : null}

                  {pricing.isPromoActive ? (
                    <p className={`mt-3 rounded-xl border px-3 py-2 text-xs font-semibold ${isFeatured ? "border-white/15 bg-white/10 text-white" : "border-rose-100 bg-rose-50 text-rose-800"}`}>
                      Promoção por tempo limitado.
                    </p>
                  ) : null}

                  <p className={`mt-4 flex-1 rounded-xl border px-3 py-2 text-sm ${box} ${isFeatured ? "text-[#e3f1ec]" : "text-muted"}`}>
                    Veja as vantagens completas ao clicar em <span className={`font-bold ${strong}`}>Ver detalhes</span>.
                  </p>

                  {plan.key !== "start" ? (
                    <div className={`mt-4 flex items-start gap-2.5 rounded-2xl border p-3 text-xs ${box}`}>
                      <GiftIcon size={18} stroke={isFeatured ? "#8cc2b1" : "#2a6168"} className="mt-0.5 flex-none" />
                      <div>
                        <p className={`font-bold leading-snug ${strong}`}>{KIT_BANNER}</p>
                        <p className={`mt-0.5 text-[11px] ${soft}`}>9 instrumentos clínicos em PDF inclusos grátis.</p>
                      </div>
                    </div>
                  ) : null}

                  <button
                    type="button"
                    aria-controls="plano-detalhes"
                    aria-pressed={isSelected}
                    onClick={() => handleDetailsClick(plan.key)}
                    className={`k-btn mt-6 w-full ${isFeatured ? "k-btn-l" : "k-btn-g"}`}
                  >
                    Ver detalhes
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div
            id="plano-detalhes"
            ref={detailsRef}
            className="mt-12 scroll-mt-28 rounded-[32px] border bg-white p-6 md:p-10"
            style={{ borderColor: "#ddeae6", boxShadow: "0 24px 60px rgba(22,54,58,.07)" }}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="k-eyebrow">Detalhes do plano selecionado</p>
                <h3 className="mt-2 text-3xl font-extrabold tracking-[-0.025em] text-deep md:text-4xl">
                  {selectedMeta.name} — {selectedPlan.tagline}
                </h3>
                <p className="k-lead mt-3">{selectedPlan.summary}</p>
              </div>

              <div className="rounded-2xl border border-line bg-paper px-5 py-4 text-left lg:text-right">
                <p className="text-sm font-extrabold uppercase tracking-wide text-brand">Plano ativo</p>
                {selectedMeta.monthlyPrice > 0 ? (
                  billingCycle === "annual" ? (
                    <>
                      {selectedPricing.isPromoActive ? (
                        <p className="mt-1 text-base text-muted line-through">
                          12x {formatCurrencyBRL(selectedPricing.originalInstallmentValue)}
                        </p>
                      ) : null}
                      <p className="mt-1 text-3xl font-extrabold tracking-tight text-deep">
                        12x {formatCurrencyBRL(selectedPricing.installmentValue)}
                      </p>
                      {selectedPricing.isPromoActive ? (
                        <p className="mt-1 text-sm text-muted line-through">Total de {formatCurrencyBRL(selectedPricing.originalTotalPrice)}/ano</p>
                      ) : null}
                      <p className="mt-1 text-sm text-muted">Total de {formatCurrencyBRL(selectedPricing.totalPrice)}/ano</p>
                    </>
                  ) : (
                    <>
                      {selectedPricing.isPromoActive ? (
                        <p className="mt-1 text-base text-muted line-through">
                          {formatCurrencyBRL(selectedPricing.originalMonthlyPrice)}
                          <span className="text-sm font-medium">/mês</span>
                        </p>
                      ) : null}
                      <p className="mt-1 text-3xl font-extrabold tracking-tight text-deep">
                        {formatCurrencyBRL(selectedPricing.monthlyPrice)}
                        <span className="text-base font-medium text-muted">/mês</span>
                      </p>
                    </>
                  )
                ) : (
                  <p className="mt-1 text-3xl font-extrabold tracking-tight text-deep">Gratuito</p>
                )}
              </div>
            </div>

            <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
              {selectedPlan.features.map((feature) => (
                <li
                  key={`${selectedPlan.key}-${feature.label}`}
                  className={`rounded-2xl border px-4 py-4 ${
                    feature.status === "included" ? "border-line bg-mist" : "border-line bg-paper"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {feature.status === "included" ? (
                      <CheckIcon size={18} stroke="#2a6168" className="mt-0.5 flex-none" />
                    ) : (
                      <LockIcon size={18} stroke="#46646a" className="mt-0.5 flex-none" />
                    )}
                    <div>
                      <p className="text-[15px] font-bold text-ink">
                        {feature.label}
                        {feature.status !== "included" ? <span className="sr-only"> (não incluso neste plano)</span> : null}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {feature.note ?? "Recurso disponível neste plano."}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={selectedPlan.key === "start" ? "/start-free" : `/checkout?plan=${selectedPlan.key}&cycle=${billingCycle}`}
                className="k-btn k-btn-p"
              >
                {selectedPlan.key === "start" ? "Começar grátis" : `Assinar ${selectedMeta.name}`}
              </Link>
              <div className="flex flex-1 flex-wrap items-center justify-between gap-2 rounded-2xl border border-line bg-paper px-4 py-3 text-sm leading-relaxed text-muted">
                <span>Clique em outro card para atualizar os detalhes do plano escolhido.</span>
                <Link href="/cancelar-assinatura" className="text-sm font-bold text-brand underline hover:text-deep">
                  Já é assinante? Gerenciar ou cancelar assinatura →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bônus exclusivo de assinatura: Kit Completo de Avaliação Funcional */}
        <Reveal>
          <div
            id="kit"
            className="mt-14 rounded-[32px] border bg-white p-6 md:p-12"
            style={{ borderColor: "#ddeae6", boxShadow: "0 24px 60px rgba(22,54,58,.07)" }}
          >
            <div className="flex flex-col justify-between gap-6 border-b border-line pb-6 md:flex-row md:items-center">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-mist py-[7px] pl-2.5 pr-3.5 text-[13px] font-extrabold text-brand">
                  <GiftIcon size={16} stroke="#2a6168" /> Bônus Exclusivo para Assinantes
                </span>
                <h3 className="mt-4 text-[clamp(26px,3vw,38px)] font-extrabold leading-[1.14] tracking-[-0.025em] text-deep">
                  {KIT_BANNER}
                </h3>
                <p className="mt-4 text-base leading-[1.65] text-muted">
                  Ao assinar o Kynesia nos planos <strong>Flow</strong> ou <strong>Elite</strong>, você recebe gratuitamente no seu e-mail um link seguro para baixar o <strong>Kit Completo de Avaliação Funcional em Fisioterapia Ortopédica</strong> (material autoral em PDF com 23 páginas, vendido avulso por R$ 39,90).
                </p>
              </div>

              <div className="shrink-0 self-start rounded-2xl border border-line bg-paper px-5 py-4 text-center md:self-center">
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-muted">Valor Avulso</span>
                <span className="text-xl font-extrabold text-muted line-through">R$ 39,90</span>
                <span className="block text-sm font-extrabold text-brand">100% Grátis na Assinatura</span>
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-deep">
                  Os 9 Instrumentos Clínicos Inclusos no Kit:
                </h4>
                <span className="text-xs text-muted">
                  Formulários prontos para impressão · 10 itens cada · Cálculo de escore e tabela de evolução
                </span>
              </div>

              <ul className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3">
                {kitInstruments.map((item) => (
                  <li key={item.sigla} className="flex flex-col justify-between rounded-2xl border border-line bg-paper p-4 transition duration-200 hover:border-sage">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-lg border border-line bg-white px-2.5 py-0.5 text-[13px] font-extrabold tracking-[0.06em] text-brand">
                          {item.sigla}
                        </span>
                        <span className="rounded-md bg-mist-2 px-2 py-0.5 text-[11px] font-semibold text-muted">{item.tag}</span>
                      </div>
                      <h4 className="mt-2.5 text-[14.5px] font-bold leading-snug text-ink">{item.titulo}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.desc}</p>
                    </div>
                    <div className="mt-3.5 flex items-center justify-between border-t border-line pt-2 text-[11px] text-muted">
                      <span className="inline-flex items-center gap-1"><CheckIcon size={12} stroke="#2a6168" /> 10 itens objetivos</span>
                      <span className="inline-flex items-center gap-1"><CheckIcon size={12} stroke="#2a6168" /> Tabela evolutiva</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-paper p-4 text-sm text-muted md:flex-row md:items-center">
              <div className="flex items-start gap-3 sm:items-center">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand">
                  <CheckIcon size={14} stroke="#fff" />
                </span>
                <p className="leading-relaxed">
                  <strong className="text-ink">Como você recebe:</strong> O link seguro para download do PDF (com validade de 30 dias) é enviado automaticamente para o seu e-mail de cadastro assim que o primeiro pagamento da sua assinatura for confirmado pelo sistema.
                </p>
              </div>

              <Link
                href={`/checkout?plan=${selectedPlan.key === "start" ? "flow" : selectedPlan.key}&cycle=${billingCycle}`}
                className="k-btn k-btn-p shrink-0"
                style={{ minHeight: 44, fontSize: 14, padding: "0 20px" }}
              >
                Assinar plano {selectedPlan.key === "start" ? "Flow" : selectedMeta.name} e garantir o Kit
                <ArrowIcon size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
