import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/epicondilalgia-lateral-cotovelo-de-tenista";

const faqItems = [
  {
    question: "Epicondilite lateral tem cura?",
    answer:
      "A maioria dos pacientes melhora com tratamento conservador individualizado; a recuperação funcional é alcançável com manejo adequado de carga.",
  },
  {
    question: "Quanto tempo demora para melhorar?",
    answer:
      "Muitos respondem em semanas a meses; programas bem estruturados apresentam melhora em 6–12 semanas, com progressão contínua.",
  },
  {
    question: "Posso continuar treinando com dor no cotovelo?",
    answer:
      "Depende da intensidade; ajustar carga e modificar exercícios que provocam dor é preferível; planeje retorno com um fisioterapeuta.",
  },
  {
    question: "Quando indicar imagem?",
    answer:
      "Imagem está indicada em casos atípicos, suspeita de lesão associada ou falta de resposta após tratamento bem conduzido.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Epicondilalgia lateral (cotovelo de tenista): avaliação e tratamento baseado em evidências",
  description:
    "Epicondilalgia lateral: avaliação, diagnóstico e tratamento baseado em evidências para fisioterapeutas e pacientes.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  image: "https://kynesia.com.br/blog/epicondilalgia-lateral-cover.svg",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "Epicondilalgia lateral: avaliação e tratamento baseado em evidências",
  description:
    "Epicondilalgia lateral: avaliação, diagnóstico e tratamento baseado em evidências para fisioterapeutas e pacientes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Epicondilalgia lateral: avaliação e tratamento baseado em evidências",
    description:
      "Entenda causas, diagnóstico e orientações de tratamento da epicondilalgia lateral com abordagem baseada em evidências.",
    type: "article",
    url: pageUrl,
  },
};

export default function EpicondilalgiaPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Epicondilalgia lateral (cotovelo de tenista)</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Ortopedia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Epicondilalgia lateral (cotovelo de tenista): avaliação e tratamento baseado em evidências
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Dor lateral no cotovelo, perda de força de preensão e limitação funcional — entenda como avaliar e conduzir a reabilitação baseada em carga.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 01 Jun 2026</span>
            <span>⏱ 8 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            A <strong>epicondilalgia lateral</strong> caracteriza-se por dor focal na região lateral do cotovelo relacionada à sobrecarga dos tendões extensores do antebraço. O manejo atual prioriza educação, controle de carga e programas de exercício progressivo para restaurar função.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A epicondilalgia lateral, frequentemente chamada de "cotovelo de tenista", não depende exclusivamente da prática esportiva: é mais comumente associada a padrões repetitivos de uso e sobrecarga mecânica. O objetivo principal da reabilitação é recuperar capacidade e função, não apenas suprimir dor.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que é a epicondilalgia lateral?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Refere-se a dor e sensibilidade na região do epicôndilo lateral, com envolvimento dos tendões extensores, especialmente o extensor radial curto do carpo (ECRB).
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Fatores contribuintes</h2>
        <div className="mb-8 space-y-6">
          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">01</p>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Sobrecarga mecânica</h3>
            <p className="mb-4 leading-relaxed text-gray-700">Movimentos repetitivos com punho em extensão e carga excessiva aumentam irritabilidade tendínea.</p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Na prática:</strong> Modulação de atividades e progressão adequada de carga reduzem recidiva.</div>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">02</p>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Capacidade tendínea reduzida</h3>
            <p className="mb-4 leading-relaxed text-gray-700">Tendões com menor tolerância à carga respondem mal a picos de esforço; exposição gradual é a chave.</p>
            <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Na prática:</strong> Fortalecimento progressivo melhora resistência tendínea.</div>
          </div>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Avaliação clínica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">O diagnóstico é clínico: história, padrão de dor, resposta a testes provocativos e avaliação funcional guiam a conduta.</p>
        <ul className="mb-8 ml-6 space-y-2 text-gray-700">
          <li>• Coleta de história com foco em atividades agravantes</li>
          <li>• Avaliação de força de preensão e resistência ao movimento</li>
          <li>• Testes provocativos (Cozen, Mill, Maudsley) como auxiliares</li>
          <li>• Excluir neuropatia radial e causas cervicais quando necessário</li>
        </ul>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/teste-ortopedico-ombro" className="text-teal-600 hover:underline">
                → Testes ortopédicos mais usados e como interpretá-los
              </Link>
            </li>
            <li>
              <Link href="/blog/pratica-baseada-em-evidencias-fisioterapia" className="text-teal-600 hover:underline">
                → Prática baseada em evidências na fisioterapia
              </Link>
            </li>
            <li>
              <Link href="/blog/como-precificar-sessoes-de-fisioterapia" className="text-teal-600 hover:underline">
                → Gestão e organização clínica para fisioterapeutas
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Tratamento e condutas práticas</h2>
        <p className="mb-5 leading-relaxed text-gray-700">A melhor evidência favorece programas ativos: educação, manejo de carga e exercício progressivo direcionado aos extensores do punho.</p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Exercício progressivo e fortalecimento</h3>
        <p className="mb-4 leading-relaxed text-gray-700">Programas com progressão de carga (isométricos, excêntricos e concêntricos) melhoram dor e função a médio prazo.</p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Manejo de carga</h3>
        <p className="mb-4 leading-relaxed text-gray-700">Reduzir picos de demanda, adaptar atividades e planejar retorno gradual são estratégias fundamentais.</p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">Adjuvantes</h3>
        <p className="mb-4 leading-relaxed text-gray-700">Bandagens, órteses e recursos analgésicos podem ser úteis temporariamente, mas não substituem reabilitação ativa.</p>

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
          <h2 className="mb-4 text-2xl font-bold">Resumo clínico</h2>
          <p className="mb-4 leading-relaxed">
            Epicondilalgia lateral é uma condição associada à sobrecarga dos tendões extensores do punho, com impacto funcional significativo em atividades de preensão.
          </p>
          <p className="mb-4 leading-relaxed">
            Educação, manejo de carga e fortalecimento progressivo compõem o núcleo do tratamento com melhor sustentação de evidência.
          </p>
          <p className="leading-relaxed">O objetivo clínico é recuperar capacidade e função, não apenas alívio sintomático temporário.</p>
        </div>

        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">K</div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidência para profissionais da saúde.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
