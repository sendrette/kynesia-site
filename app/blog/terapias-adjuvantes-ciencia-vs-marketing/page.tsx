import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/terapias-adjuvantes-ciencia-vs-marketing";

const faqItems = [
  {
    question: "Ultrassom terapêutico funciona?",
    answer: "A evidência para ultrassom em muitas condições musculoesqueléticas é limitada e inconsistente.",
  },
  {
    question: "Ondas de choque têm indicação clara?",
    answer: "Ondas de choque têm evidência moderada para algumas tendinopatias crônicas quando protocolos são aplicados corretamente.",
  },
  {
    question: "Como distinguir ciência de marketing?",
    answer: "Busque revisões sistemáticas, metanálises e diretrizes clínicas; desconfie de promessas de cura rápida sem evidência robusta.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Terapias adjuvantes (ultrassom, ondas de choque): ciência vs marketing",
  description:
    "O que a ciência diz sobre ultrassom terapêutico e ondas de choque: eficácia, indicações e como separar evidência de marketing.",
  author: { "@type": "Organization", name: "Equipe Kynesia" },
  publisher: { "@type": "Organization", name: "Kynesia" },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
  image: "https://kynesia.com.br/blog/ortopedia-ombro.svg",
};

export const metadata: Metadata = {
  title: "Terapias adjuvantes (ultrassom, ondas de choque): ciência vs marketing",
  description:
    "O que a ciência diz sobre ultrassom terapêutico e ondas de choque: eficácia, indicações e como separar evidência de marketing.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Terapias adjuvantes (ultrassom, ondas de choque): ciência vs marketing",
    description:
      "O que a ciência diz sobre ultrassom terapêutico e ondas de choque: eficácia, indicações e como separar evidência de marketing.",
    url: pageUrl,
    type: "article",
  },
};

export default function TerapiasAdjuvantesPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">Blog</Link>
          {" / "}
          <span className="font-medium text-teal-600">Terapias adjuvantes</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">Tratamentos</span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Terapias adjuvantes (ultrassom, ondas de choque): ciência vs marketing</h1>

          <p className="mb-6 text-lg text-gray-600">Uma análise crítica das terapias adjuvantes mais divulgadas e o que a evidência recomenda.</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 18 Mai 2026</span>
            <span>Leitura: 8 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900"><strong>Resumo:</strong> Ultrassom tem evidência limitada; ondas de choque mostram resultados melhores em condições específicas — use criteriosamente.</p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">Muitas terapias adjuvantes são comercializadas com grandes promessas. Profissionais devem avaliar evidências e protocolos antes de incorporar rotineiramente.</p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Ultrassom terapêutico</h2>
        <p className="mb-5 leading-relaxed text-gray-700">Revisões apontam efeitos clínicos pequenos e inconsistentes; uso isolado raramente substitui intervenções ativas.</p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Ondas de choque</h2>
        <p className="mb-5 leading-relaxed text-gray-700">Evidência moderada para algumas tendinopatias crônicas quando protocolos são aplicados corretamente, especialmente em casos refratários.</p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Perguntas frequentes</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                <summary className="font-semibold text-gray-900">{faq.question}</summary>
                <p className="mt-3 leading-relaxed text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mb-8 mt-12 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Conclusão</h2>
          <p className="mb-4 leading-relaxed">Avalie criticamente cada terapia adjuvante, priorize intervenções com maior suporte e utilize adjuvantes apenas quando alinhados aos objetivos e evidências para o paciente.</p>
        </div>

        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">K</div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidência para quem busca saúde com qualidade.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
