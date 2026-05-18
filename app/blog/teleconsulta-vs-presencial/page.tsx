import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/teleconsulta-vs-presencial";

const faqItems = [
  {
    question: "Teleconsulta funciona para fisioterapia?",
    answer:
      "Sim, especialmente para educação, triagem e acompanhamento de programas de exercício; eficácia varia com condição e qualidade do atendimento.",
  },
  {
    question: "Quais são as limitações principais?",
    answer:
      "Impossibilidade de exame físico hands-on completo, dependência tecnológica e barreiras de acesso em algumas populações.",
  },
  {
    question: "Quando preferir presencial?",
    answer: "Quando há necessidade de exame detalhado, técnicas manuais, testes específicos ou sinais de alerta.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Teleconsulta vs atendimento presencial: resultados, limites e quando usar",
  description:
    "Compare evidências sobre teleconsulta e atendimento presencial na fisioterapia: eficácia, limitações e recomendações práticas.",
  author: { "@type": "Organization", name: "Equipe Kynesia" },
  publisher: { "@type": "Organization", name: "Kynesia" },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
  image: "https://kynesia.com.br/blog/gestao-clinica.svg",
};

export const metadata: Metadata = {
  title: "Teleconsulta vs atendimento presencial: resultados, limites e quando usar",
  description:
    "Compare evidências sobre teleconsulta e atendimento presencial na fisioterapia: eficácia, limitações e recomendações práticas.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Teleconsulta vs atendimento presencial: resultados, limites e quando usar",
    description:
      "Compare evidências sobre teleconsulta e atendimento presencial na fisioterapia: eficácia, limitações e recomendações práticas.",
    url: pageUrl,
    type: "article",
  },
};

export default function TeleconsultaPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">Blog</Link>
          {" / "}
          <span className="font-medium text-teal-600">Teleconsulta vs presencial</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">Prática clínica</span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Teleconsulta vs atendimento presencial: resultados, limites e quando usar</h1>

          <p className="mb-6 text-lg text-gray-600">Resumo das evidências e recomendações para integrar teleconsulta à prática fisioterapêutica.</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 18 Mai 2026</span>
            <span>Leitura: 7 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900"><strong>Resumo:</strong> Teleconsulta é eficaz para programas de exercício e educação em muitas condições; o modelo híbrido maximiza alcance sem perder qualidade clínica.</p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">Desde 2020 a teleconsulta ampliou acesso ao atendimento. Evidências mostram equivalência para alguns desfechos em condições selecionadas quando programas são estruturados e acompanhados.</p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando usar teleconsulta</h2>
        <p className="mb-5 leading-relaxed text-gray-700">Use para triagem, educação, seguimento de programas de exercícios e monitoramento de adesão. Reserve presencial para avaliação inicial complexa ou quando técnicas manuais forem essenciais.</p>

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
          <p className="mb-4 leading-relaxed">Teleconsulta é uma ferramenta valiosa quando integrada com critérios claros e modelos híbridos. Defina protocolos, critérios de encaminhamento e documente desfechos.</p>
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
