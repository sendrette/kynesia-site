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
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4 shrink-0 text-emerald-500">
      <path d="M16.25 5.75 8.5 13.5l-4.25-4.25" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4 shrink-0 text-gray-400">
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
            Assinatura anual com 15% de desconto.
          </p>

          <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-emerald-300 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 p-4 shadow-xs">
            <p className="text-sm font-bold text-teal-950 flex items-center justify-center gap-2 text-center">
              <span className="text-base">🎁</span>
              <span>Assine o Kynesia e receba gratuitamente um kit de avaliação de 23 páginas no seu e-mail!</span>
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingComparisonCards.map((plan, index) => {
            const meta = planCatalog[plan.key];
            const pricing = getPlanPricing(plan.key, billingCycle);
            const annualPricing = getPlanPricing(plan.key, "annual");
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
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{plan.tagline}</p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">{meta.name}</h3>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      {isFeatured ? (
                        <span className="inline-flex items-center rounded-full bg-teal-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white whitespace-nowrap">
                          Mais escolhido
                        </span>
                      ) : null}

                      {pricing.isPromoActive ? (
                        <span className="inline-flex items-center rounded-full bg-rose-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white whitespace-nowrap">
                          {pricing.promoDiscountPercent}% OFF
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-5 rounded-3xl border border-slate-100 bg-slate-50/80 p-5">
                    {meta.monthlyPrice > 0 ? (
                      billingCycle === "annual" ? (
                        <>
                          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Cobrança anual em 12x</p>
                          {pricing.isPromoActive ? (
                            <p className="mt-1 text-sm font-medium text-slate-500 line-through">
                              12x {formatCurrencyBRL(pricing.originalInstallmentValue)}
                            </p>
                          ) : null}
                          <p className="mt-1 text-4xl font-bold tracking-tight text-slate-900">
                            12x {formatCurrencyBRL(pricing.installmentValue)}
                          </p>
                          {pricing.isPromoActive ? (
                            <p className="mt-0.5 text-xs text-slate-500 line-through">
                              Total de {formatCurrencyBRL(pricing.originalTotalPrice)}/ano
                            </p>
                          ) : null}
                          <p className="mt-0.5 text-xs text-slate-600">Total de {formatCurrencyBRL(pricing.totalPrice)}/ano</p>
                          <p className="mt-0.5 text-xs font-medium text-emerald-600">Economia de {formatCurrencyBRL(pricing.savings)}</p>
                        </>
                      ) : (
                        <>
                          {pricing.isPromoActive ? (
                            <p className="text-lg font-medium text-slate-500 line-through">
                              {formatCurrencyBRL(pricing.originalMonthlyPrice)}
                              <span className="text-base font-medium text-slate-500">/mês</span>
                            </p>
                          ) : null}
                          <p className="text-5xl font-bold tracking-tight text-slate-900">
                            {formatCurrencyBRL(pricing.monthlyPrice)}
                            <span className="text-2xl font-medium text-slate-500">/mês</span>
                          </p>
                          <p className="mt-2 text-base text-slate-600">{plan.summary}</p>
                          {plan.key !== "start" ? (
                            <div className="mt-4 space-y-1 rounded-2xl border border-teal-100 bg-teal-50/50 p-3 text-xs text-teal-800">
                              <p className="font-semibold text-teal-900 uppercase tracking-wider text-[10px]">Opção Anual:</p>
                              <p>
                                <span className="font-bold text-slate-950">{formatCurrencyBRL(annualPricing.installmentValue)}/mês</span>{" "}
                                (cobrado {formatCurrencyBRL(annualPricing.totalPrice)}/ano)
                              </p>
                              <p className="font-semibold text-emerald-600">
                                Economize {formatCurrencyBRL(annualPricing.savings)} por ano
                              </p>
                            </div>
                          ) : null}
                        </>
                      )
                    ) : (
                      <>
                        <p className="text-5xl font-bold tracking-tight text-slate-900">Gratuito</p>
                        <p className="mt-2 text-base text-slate-600">{plan.summary}</p>
                      </>
                    )}
                  </div>

                  {billingCycle === "annual" && meta.monthlyPrice > 0 ? (
                    <p className="mt-3 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
                      Desconto anual de 15% aplicado {pricing.isPromoActive ? `+ ${pricing.promoDiscountPercent}% OFF promocional.` : "."}
                    </p>
                  ) : null}

                  {pricing.isPromoActive ? (
                    <p className="mt-3 rounded-lg border border-rose-100 bg-rose-50 px-3 py-2 text-xs font-medium text-rose-700">
                      Promoção por tempo limitado.
                    </p>
                  ) : null}

                  <div className="mt-4 flex-1 rounded-xl border border-slate-100 bg-white/70 px-3 py-2 text-sm text-slate-600">
                    Veja as vantagens completas ao clicar em <span className="font-semibold text-slate-800">Ver detalhes</span>.
                  </div>

                  {plan.key !== "start" ? (
                    <div className="mt-4 rounded-2xl border border-emerald-300 bg-gradient-to-r from-emerald-50/90 to-teal-50/90 p-3 text-xs shadow-xs">
                      <div className="flex items-start gap-2 text-left">
                        <span className="text-base leading-none">🎁</span>
                        <div>
                          <p className="font-bold text-emerald-950 leading-snug">
                            Assine o Kynesia e receba gratuitamente um kit de avaliação de 23 páginas no seu e-mail!
                          </p>
                          <p className="mt-0.5 text-[11px] text-slate-600">
                            9 instrumentos clínicos em PDF inclusos grátis.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => handleDetailsClick(plan.key)}
                    className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isFeatured
                        ? "bg-teal-600 text-white shadow-sm shadow-teal-200 hover:bg-teal-700"
                        : "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50"
                    }`}
                  >
                    Ver detalhes
                  </button>
                        {plan.key === "start" ? (
                          <span className="mb-3 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-700">
                            Teste todos os recursos por 5 dias grátis
                          </span>
                        ) : null}
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
                      {selectedPricing.isPromoActive ? (
                        <p className="mt-1 text-base text-slate-500 line-through">
                          12x {formatCurrencyBRL(selectedPricing.originalInstallmentValue)}
                        </p>
                      ) : null}
                      <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                        12x {formatCurrencyBRL(selectedPricing.installmentValue)}
                      </p>
                      {selectedPricing.isPromoActive ? (
                        <p className="mt-1 text-sm text-slate-500 line-through">Total de {formatCurrencyBRL(selectedPricing.originalTotalPrice)}/ano</p>
                      ) : null}
                      <p className="mt-1 text-sm text-slate-600">Total de {formatCurrencyBRL(selectedPricing.totalPrice)}/ano</p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Plano ativo</p>
                      {selectedPricing.isPromoActive ? (
                        <p className="mt-1 text-base text-slate-500 line-through">
                          {formatCurrencyBRL(selectedPricing.originalMonthlyPrice)}
                          <span className="text-sm font-medium text-slate-500">/mês</span>
                        </p>
                      ) : null}
                      <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                        {formatCurrencyBRL(selectedPricing.monthlyPrice)}
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
              <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-600 flex items-center justify-between flex-wrap gap-2">
                <span>Clique em outro card para atualizar os detalhes do plano escolhido.</span>
                <Link href="/cancelar-assinatura" className="text-xs font-semibold text-teal-700 underline hover:text-teal-900">
                  Já é assinante? Gerenciar ou cancelar assinatura →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bloco de Bônus Exclusivo de Assinatura: Kit Completo de Avaliação Funcional */}
        <Reveal>
          <div className="mt-14 overflow-hidden rounded-3xl border border-teal-200/90 bg-gradient-to-br from-teal-50/70 via-white to-sky-50/40 p-6 md:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-teal-100 pb-6">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
                  <span>🎁</span> Bônus Exclusivo para Assinantes
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Assine o Kynesia e receba gratuitamente um kit de avaliação de 23 páginas no seu e-mail!
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                  Ao assinar o Kynesia nos planos <strong>Flow</strong> ou <strong>Elite</strong>, você recebe gratuitamente no seu e-mail um link seguro para baixar o <strong>Kit Completo de Avaliação Funcional em Fisioterapia Ortopédica</strong> (material autoral em PDF com 23 páginas, vendido avulso por R$ 39,90).
                </p>
              </div>

              <div className="shrink-0 self-start md:self-center rounded-2xl border border-teal-200 bg-white px-5 py-4 text-center shadow-xs">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Valor Avulso</span>
                <span className="text-xl font-bold text-slate-400 line-through">R$ 39,90</span>
                <span className="block text-sm font-extrabold text-emerald-600">100% Grátis na Assinatura</span>
              </div>
            </div>

            {/* Apresentação das 9 Avaliações presentes no Kit */}
            <div className="mt-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  Os 9 Instrumentos Clínicos Inclusos no Kit:
                </h4>
                <span className="text-xs text-slate-500">
                  Formulários prontos para impressão · 10 itens cada · Cálculo de escore e tabela de evolução
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    sigla: "AFL",
                    titulo: "Avaliação Funcional da Coluna Lombar",
                    desc: "Mede o impacto da dor lombar nas atividades funcionais, postura sentada, flexão de tronco e sono.",
                    tag: "Coluna",
                  },
                  {
                    sigla: "AFC",
                    titulo: "Avaliação Funcional da Coluna Cervical",
                    desc: "Identifica limitações por dor e rigidez cervical, movimentos de rotação ao dirigir e trabalho no computador.",
                    tag: "Coluna",
                  },
                  {
                    sigla: "AFO",
                    titulo: "Avaliação do Ombro e Membro Superior",
                    desc: "Investiga disfunções em tarefas acima da cabeça, alcance atrás das costas, empurrar peso e higiene pessoal.",
                    tag: "Membros Superiores",
                  },
                  {
                    sigla: "AFJ",
                    titulo: "Avaliação Funcional do Joelho",
                    desc: "Mensura limitação funcional em escadas, agachamento, ajoelhar e rastreia sensação de instabilidade ou falseio.",
                    tag: "Membros Inferiores",
                  },
                  {
                    sigla: "AFQ",
                    titulo: "Avaliação Funcional do Quadril",
                    desc: "Rastreia restrições ao calçar meias/sapatos, cruzar as pernas, transferências e impacto no padrão de marcha.",
                    tag: "Membros Inferiores",
                  },
                  {
                    sigla: "AFTP",
                    titulo: "Avaliação de Tornozelo e Pé",
                    desc: "Avalia limitações decorrentes de entorses, apoio na ponta dos pés, superfícies irregulares e estabilidade.",
                    tag: "Membros Inferiores",
                  },
                  {
                    sigla: "AEF",
                    titulo: "Escala de Equilíbrio Funcional",
                    desc: "Rastreia risco de quedas e dificuldades de equilíbrio estático/dinâmico (ideal para idosos e geriatria).",
                    tag: "Equilíbrio & Geriatria",
                  },
                  {
                    sigla: "EMEM",
                    titulo: "Escala de Medo-Evitação ao Movimento",
                    desc: "Identifica crenças psicossociais, medo de movimentação e cinesiofobia em condições musculoesqueléticas crônicas.",
                    tag: "Psicossocial & Dor",
                  },
                  {
                    sigla: "QDQV",
                    titulo: "Questionário Geral de Dor e Qualidade de Vida",
                    desc: "Visão global do impacto da dor na rotina cotidiana, disposição física, humor, trabalho e convívio social.",
                    tag: "Avaliação Global",
                  },
                ].map((item) => (
                  <div
                    key={item.sigla}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4.5 transition duration-200 hover:border-teal-300 hover:shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-100">
                          {item.sigla}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                          {item.tag}
                        </span>
                      </div>
                      <h5 className="mt-2.5 text-sm font-bold text-slate-900 leading-snug">{item.titulo}</h5>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                    </div>

                    <div className="mt-3.5 border-t border-slate-100 pt-2 flex items-center justify-between text-[11px] text-slate-600">
                      <span>✓ 10 itens objetivos</span>
                      <span>✓ Tabela evolutiva</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aviso de como é feito o envio */}
            <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-teal-200/80 bg-white/90 p-4.5 text-xs text-slate-700">
              <div className="flex items-start sm:items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white font-bold text-xs shadow-xs">
                  ✓
                </span>
                <p className="leading-relaxed">
                  <strong>Como você recebe:</strong> O link seguro para download do PDF (com validade de 30 dias) é enviado automaticamente para o seu e-mail de cadastro assim que o primeiro pagamento da sua assinatura for confirmado pelo sistema.
                </p>
              </div>

              <Link
                href={`/checkout?plan=${selectedPlan.key === "start" ? "flow" : selectedPlan.key}&cycle=${billingCycle}`}
                className="shrink-0 inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-teal-700 transition"
              >
                Assinar plano {selectedPlan.key === "start" ? "Flow" : selectedMeta.name} e garantir o Kit →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
