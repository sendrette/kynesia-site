import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/reveal";

export const metadata: Metadata = {
  title: "Planos Kynesia | Sistema para Fisioterapeutas",
  description:
    "Escolha o plano ideal do Kynesia, software para clínica de fisioterapia com prontuário eletrônico fisioterapia, gestão clínica fisioterapia e recursos inteligentes.",
};

const plans = [
  {
    name: "Start",
    subtitle: "Ideal para iniciantes",
    price: "Gratuito",
    period: "",
    features: [
      "Gestão de pacientes",
      "Prontuário básico",
      "Agenda simples",
      "Acesso limitado à IA",
      "Sem financeiro",
    ],
    cta: "Começar grátis",
    plan: "start",
    highlighted: false,
  },
  {
    name: "Flow",
    subtitle: "Recomendado para clínicas em crescimento",
    price: "R$ 99",
    period: "/mês",
    features: [
      "Tudo do Start +",
      "IA completa",
      "Gestão financeira",
      "Relatórios avançados",
      "Benefícios com parceiros (+10%)",
    ],
    cta: "Começar agora",
    plan: "flow",
    highlighted: true,
  },
  {
    name: "Elite",
    subtitle: "Para operação avançada",
    price: "R$ 149",
    period: "/mês",
    features: [
      "Tudo do Flow +",
      "Benefícios com parceiros (+15%)",
      "Recursos avançados",
      "Prioridade em novidades",
      "Suporte prioritário",
    ],
    cta: "Assinar Elite",
    plan: "elite",
    highlighted: false,
  },
];

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

export default function PricingPage() {
  return (
    <main className="bg-white text-gray-900">
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

      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 90}>
              <article
                className={`h-full rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  plan.highlighted
                    ? "border-teal-500 bg-teal-50/70 ring-1 ring-teal-200"
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.highlighted && (
                  <p className="mb-3 inline-flex rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Mais escolhido
                  </p>
                )}
                <h2 className="text-2xl font-semibold">{plan.name}</h2>
                <p className="mt-2 text-sm text-gray-600">{plan.subtitle}</p>
                <p className="mt-5 text-4xl font-bold">
                  {plan.price}
                  <span className="text-base font-medium text-gray-600">{plan.period}</span>
                </p>

                <ul className="mt-6 space-y-2 text-gray-700">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>

                <Link
                  href={`/checkout?plan=${plan.plan}`}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-medium transition ${
                    plan.highlighted
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {plan.cta}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

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
          <p className="mt-2 text-gray-600">
            Seus dados protegidos com segurança e conformidade com LGPD.
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
          <h2 className="text-3xl font-semibold md:text-4xl">
            Comece a transformar sua rotina clínica hoje
          </h2>
          <Link
            href="/checkout?plan=flow"
            className="mt-7 inline-flex rounded-xl bg-teal-500 px-7 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-teal-400"
          >
            Começar agora
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
