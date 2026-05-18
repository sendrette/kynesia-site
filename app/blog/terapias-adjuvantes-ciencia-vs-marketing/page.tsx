import type { Metadata } from "next";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Terapias adjuvantes (ultrassom, ondas de choque): ciência vs marketing",
  description:
    "O que a ciência diz sobre ultrassom terapêutico e ondas de choque: eficácia, indicações e como separar evidência de marketing.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Terapias adjuvantes (ultrassom, ondas de choque): ciência vs marketing",
  description:
    "O que a ciência diz sobre ultrassom terapêutico e ondas de choque: eficácia, indicações e como separar evidência de marketing.",
  author: { "@type": "Person", name: "Equipe Kynesia" },
  datePublished: "2026-05-18",
  image: ["/blog/terapias-adjuvantes.jpg"],
  mainEntityOfPage: { "@type": "WebPage", "@id": "/blog/terapias-adjuvantes-ciencia-vs-marketing" },
};

const faqItems = [
  {
    question: "Ultrassom terapêutico funciona?",
    answer:
      "A evidência para ultrassom na maioria das condições musculoesqueléticas é fraca; efeitos clínicos significativos são inconsistentes.",
  },
  {
    question: "Ondas de choque têm indicação clara?",
    answer:
      "Ondas de choque extracorpóreas têm evidência moderada para algumas tendinopatias crônicas (ex.: calcâneo), mas protocolo e indicação são determinantes.",
  },
  {
    question: "Como diferenciar ciência de marketing?",
    answer:
      "Procure revisões sistemáticas, metanálises e diretrizes clínicas; desconfie de promessas de cura rápida sem respaldo científico.",
  },
];

export default function Post() {
  return (
    <main>
      <SiteHeader />
      <article className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-8">
          <p className="text-sm text-teal-600">Tratamentos</p>
          <h1 className="mt-2 text-3xl font-bold">Terapias adjuvantes (ultrassom, ondas de choque): ciência vs marketing</h1>
          <p className="mt-3 text-sm text-gray-600">Publicado em 18 Mai 2026 • Equipe Kynesia • 8 min de leitura</p>
        </header>

        <section className="prose max-w-none">
          <p>
            Terapias adjuvantes como ultrassom terapêutico e ondas de choque são amplamente divulgadas.
            Vamos revisar o que as evidências suportam, quando considerar e como comunicar expectativas ao paciente.
          </p>

          <h2>Ultrassom terapêutico</h2>
          <p>
            Revisões sistemáticas mostram resultados inconsistentes do ultrassom em condições musculoesqueléticas.
            Efeitos clínicos são geralmente pequenos e de curta duração. O uso isolado raramente substitui exercícios
            e intervenções baseadas em evidência.
          </p>

          <h2>Ondas de choque</h2>
          <p>
            Ondas de choque radiais e focal têm evidência moderada para algias e tendinopatias crônicas selecionadas,
            especialmente quando protocolos e dosagens são aplicados corretamente. Resultados são melhores em casos crônicos
            refratários a terapia conservadora.
          </p>

          <h2>Diretrizes para uso</h2>
          <p>
            Use terapias adjuvantes como parte de um plano multimodal, com critérios claros de seleção, objetivos mensuráveis
            e registro de resposta. A comunicação honesta sobre eficácia esperada evita frustrações e reduz práticas
            comercialmente dirigidas sem respaldo.
          </p>

          <h2>Conclusão</h2>
          <p>
            Ultrassom tem evidência limitada; ondas de choque são mais promissoras em condições específicas. Priorize
            intervenções com melhor suporte e use adjuvantes criteriosamente, fundamentando escolha em evidência e objetivos do paciente.
          </p>
        </section>

        <aside className="mt-10">
          <h3 className="text-lg font-semibold">Perguntas frequentes</h3>
          <div className="mt-3 space-y-3">
            {faqItems.map((f) => (
              <details key={f.question} className="rounded border p-3">
                <summary className="font-medium">{f.question}</summary>
                <p className="mt-2 text-sm text-gray-700">{f.answer}</p>
              </details>
            ))}
          </div>
        </aside>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      </article>
    </main>
  );
}
