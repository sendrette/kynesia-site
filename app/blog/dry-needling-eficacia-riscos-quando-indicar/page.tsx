import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/dry-needling-eficacia-riscos-quando-indicar";

const faqItems = [
  {
    question: "O que é dry needling?",
    answer:
      "Técnica que utiliza agulhas sólidas para estimular pontos miofasciais (pontos gatilho) com objetivo analgésico e neuromodulador.",
  },
  {
    question: "Dry needling é igual à acupuntura?",
    answer:
      "Apesar de ambas usarem agulhas, dry needling é baseado em conceitos de pontos gatilho e neurofisiologia, diferindo da tradição da acupuntura.",
  },
  {
    question: "Quais são os riscos mais comuns?",
    answer: "Dor local, sangramento, hematoma; raramente pneumotórax em áreas torácicas—treinamento reduz riscos.",
  },
  {
    question: "Quando indicar?",
    answer: "Quando pontos gatilho contribuem para dor e disfunção, como parte de um plano multimodal com exercícios e educação.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dry needling: eficácia, riscos e quando indicar",
  description:
    "Dry needling na fisioterapia: o que a evidência mostra, riscos, indicações e como integrar essa técnica na prática clínica com segurança.",
  author: { "@type": "Organization", name: "Equipe Kynesia" },
  publisher: { "@type": "Organization", name: "Kynesia" },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
  image: "https://kynesia.com.br/blog/ortopedia-ombro.svg",
};

export const metadata: Metadata = {
  title: "Dry needling: eficácia, riscos e quando indicar",
  description:
    "Dry needling na fisioterapia: o que a evidência mostra, riscos, indicações e como integrar essa técnica na prática clínica com segurança.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Dry needling: eficácia, riscos e quando indicar",
    description:
      "Dry needling na fisioterapia: o que a evidência mostra, riscos, indicações e como integrar essa técnica na prática clínica com segurança.",
    url: pageUrl,
    type: "article",
  },
};

export default function DryNeedlingPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Dry needling</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Terapias
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Dry needling: eficácia, riscos e quando indicar
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Resumo atualizado sobre eficácia, segurança e aplicação clínica do dry needling na prática fisioterapêutica.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 18 Mai 2026</span>
            <span>Leitura: 6 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>Resumo:</strong> Dry needling pode reduzir dor a curto prazo em síndromes miofasciais; sua melhor aplicação é integrada a um plano multimodal com exercícios e educação.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Dry needling consiste na inserção de agulhas sólidas em pontos miofasciais hiperirritáveis. Mecanismos propostos incluem redução da atividade de ponto gatilho, modulação da nocicepção e estímulo de mecanismos locais de reparo.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Evidência atual</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Revisões mostram efeitos pequenos a moderados na dor a curto prazo; efeitos na função são mais inconsistentes. O benefício tende a ser maior quando combinado com exercícios ativos.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Indicações e precauções</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Indique quando pontos gatilho contribuem para a dor e a limitação funcional. Evite em coagulopatias não controladas, infecção local ou em pacientes sem consentimento. Tenha cuidado especial em regiões torácicas.
        </p>

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
          <p className="mb-4 leading-relaxed">
            Dry needling é uma ferramenta útil quando bem indicada e aplicada como parte de uma estratégia multimodal. A documentação, o consentimento e o treinamento são essenciais para segurança.
          </p>
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
