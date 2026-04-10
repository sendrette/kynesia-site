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
    a: "Sim. Não há fidelidade e o cancelamento pode ser feito a qualquer momento.",
  },
  {
    q: "Preciso de cartão para começar?",
    a: "Você pode iniciar no período grátis e contratar no momento ideal para sua clínica.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. O Kynesia funciona em desktop, tablet e celular com interface responsiva.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Segurança com boas práticas de proteção e conformidade com LGPD.",
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
        <Reveal className="mx-auto max-w-4xl rounded-2xl border border-teal-100 bg-teal-50/70 p-8 text-center">
          <p className="text-lg font-medium text-gray-800">Sem fidelidade. Cancele quando quiser.</p>
          <p className="mt-2 text-gray-600">Seus dados protegidos com segurança e conformidade com LGPD.</p>
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