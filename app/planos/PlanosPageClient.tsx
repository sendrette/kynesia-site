"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "../components/reveal";
import PricingComparisonSection from "../components/pricing-comparison-section";
import SiteHeader from "../components/site-header";
import type { BillingCycle } from "../lib/pricing";

const quickFaq = [
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Não há fidelidade e o cancelamento pode ser feito a qualquer momento diretamente pelo site, em nossa página de cancelamento, de forma 100% online.",
  },
  {
    q: "Como funcionam os 5 dias grátis?",
    a: "Você inicia o teste do plano Flow sem pagar nada hoje. Se você cancelar antes do término dos 5 dias, seu cartão não será cobrado e sua conta migra para o plano gratuito Start.",
  },
  {
    q: "Preciso de cartão para começar?",
    a: "Para usufruir dos 5 dias grátis com todos os recursos liberados, o cartão é cadastrado para validação inicial de segurança, mas a cobrança só ocorre no 6º dia caso você não cancele antes.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. O Kynesia funciona em desktop, tablet e celular com interface responsiva.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Segurança com boas práticas de proteção e conformidade com LGPD. Seus dados nunca são perdidos mesmo em caso de cancelamento.",
  },
];

export default function PlanosPageClient() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <section className="relative overflow-hidden px-6 py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-teal-50 to-blue-50" />
        <div className="pointer-events-none absolute -left-10 top-10 -z-10 h-56 w-56 rounded-full bg-teal-300/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-16 -z-10 h-64 w-64 rounded-full bg-sky-300/35 blur-3xl" />

        <Reveal className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Escolha o plano ideal para sua rotina clínica
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600 md:text-xl">
            Comece grátis e evolua conforme sua necessidade. Sem complicações.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2.5 rounded-2xl border border-emerald-300 bg-white/90 px-5 py-3 shadow-xs">
              <span className="text-base">🎁</span>
              <span className="text-xs sm:text-sm font-bold text-teal-950">
                Assine o Kynesia e receba gratuitamente um kit de avaliação de 23 páginas no seu e-mail!
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      <PricingComparisonSection
        showHeader={false}
        billingCycle={billingCycle}
        onBillingCycleChange={setBillingCycle}
      />

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10">
          <Reveal>
            <h2 className="text-3xl font-semibold md:text-4xl">Por que escolher o Kynesia?</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Economia de tempo com IA",
              "Organização total da clínica",
              "Melhor experiência para o paciente",
              "Crescimento profissional contínuo",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 90}>
                <div className="rounded-xl border border-gray-200 bg-white p-4 text-gray-700 shadow-sm">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <Reveal className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 md:p-10 text-center shadow-sm">
          <span className="inline-flex rounded-full bg-teal-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
            Transparência Total
          </span>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
            Sem fidelidade. Cancele quando quiser em 1 clique.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            Está utilizando os <strong>5 dias gratuitos</strong> e não quer que seja cobrado? Ou já é assinante e deseja encerrar seu plano? Cancele online a qualquer momento com apenas seu e-mail ou CPF, sem burocracia.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cancelar-assinatura"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900 shadow-sm"
            >
              Gerenciar ou Cancelar Assinatura
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            🔒 Seus dados e pacientes continuam protegidos e salvos na sua conta gratuita mesmo após o cancelamento.
          </p>
        </Reveal>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold md:text-4xl">FAQ rápido</h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {quickFaq.map((item, index) => (
              <Reveal key={item.q} delay={index * 80}>
                <details className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer list-none text-lg font-medium">{item.q}</summary>
                  <p className="mt-3 text-gray-600">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-8">
        <Reveal className="mx-auto max-w-5xl rounded-3xl bg-gray-900 px-8 py-12 text-center text-white md:py-16">
          <h2 className="text-3xl font-semibold md:text-4xl">Comece a transformar sua rotina clínica hoje</h2>
          <Link
            href={`/checkout?plan=flow&cycle=${billingCycle}`}
            className="mt-7 inline-flex rounded-xl bg-teal-500 px-7 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-teal-400"
          >
            Começar agora
          </Link>
        </Reveal>
      </section>
    </main>
  );
}