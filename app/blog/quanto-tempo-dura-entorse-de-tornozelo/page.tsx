import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/quanto-tempo-dura-entorse-de-tornozelo";

const faqItems = [
  {
    question: "Entorse de tornozelo leve melhora em quantos dias?",
    answer:
      "Em geral, entorses leves podem melhorar entre 7 e 14 dias, desde que haja proteção adequada, controle de dor e progressão funcional orientada.",
  },
  {
    question: "Posso voltar a treinar quando a dor diminuir?",
    answer:
      "A redução da dor é importante, mas não é o único critério. O retorno deve considerar estabilidade, força, mobilidade e testes funcionais sem piora após esforço.",
  },
  {
    question: "Entorse de tornozelo pode virar dor crônica?",
    answer:
      "Sim, especialmente quando o retorno é precoce ou sem reabilitação adequada. Instabilidade residual e fraqueza aumentam risco de nova torção e dor persistente.",
  },
  {
    question: "Quando preciso fazer exame de imagem na entorse?",
    answer:
      "Exames são indicados quando há suspeita de fratura, incapacidade importante de apoio, dor óssea localizada persistente ou evolução fora do esperado após conduta inicial.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Quanto tempo dura uma entorse de tornozelo?",
  description:
    "Quanto tempo dura uma entorse de tornozelo? Veja tempo de recuperação por grau da lesão, cuidados iniciais e quando procurar fisioterapia.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-13",
  dateModified: "2026-04-13",
  image: "https://kynesia.com.br/blog/reabilitacao-joelho.svg",
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
  title: "Quanto tempo dura uma entorse de tornozelo? Guia rápido",
  description:
    "Quanto tempo dura uma entorse de tornozelo? Entenda os prazos por gravidade, o que acelera recuperação e quando buscar avaliação especializada.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Quanto tempo dura uma entorse de tornozelo? Guia rápido",
    description:
      "Descubra o tempo médio de recuperação da entorse de tornozelo e como evitar recaídas com manejo e reabilitação adequados.",
    type: "article",
    url: pageUrl,
  },
};

export default function EntorseTornozeloPage() {
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
          <span className="font-medium text-teal-600">Quanto tempo dura uma entorse de tornozelo?</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Dor
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Quanto tempo dura uma entorse de tornozelo?
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Veja os prazos reais de recuperação, como acelerar melhora com segurança e quais sinais indicam necessidade de avaliação especializada.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 13 Abr 2026</span>
            <span>⏱ 8 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            Em média, uma entorse de tornozelo pode durar de 1 a 2 semanas (grau leve), 3 a 6 semanas (grau moderado) ou mais de 8 semanas (grau grave).
            O tempo real depende do grau da lesão, da reabilitação e do retorno progressivo às atividades.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Quando surge uma torção, a pergunta mais comum é: <strong>quanto tempo dura uma entorse de tornozelo</strong>? A resposta varia conforme gravidade, resposta inflamatória e qualidade da condução clínica nos primeiros dias.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Mais importante do que contar dias é acompanhar critérios objetivos de evolução: dor, edema, mobilidade, força, estabilidade e tolerância funcional. Isso reduz recaídas e acelera retorno seguro.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/quanto-tempo-dura-entorse-de-tornozelo</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/reabilitacao-pos-operatorio-joelho" className="text-teal-600 hover:underline">
                → Reabilitação de joelho no pós-operatório: progressão por critérios
              </Link>
            </li>
            <li>
              <Link href="/blog/tendinopatia-carga-progressiva" className="text-teal-600 hover:underline">
                → Tendinopatia e carga progressiva: quando avançar, manter ou regredir
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-lombar-ao-acordar-causas-e-como-aliviar-rapido" className="text-teal-600 hover:underline">
                → Dor lombar ao acordar: causas e como aliviar rápido
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quanto tempo dura entorse de tornozelo em cada grau?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A classificação por grau ajuda a estimar prazo de recuperação, mas não substitui avaliação funcional. Dois pacientes com o mesmo grau podem evoluir em ritmos diferentes.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Grau I (leve)",
              desc: "Estiramento ligamentar sem instabilidade relevante, dor leve a moderada e edema discreto.",
              tip: "Tempo médio: 7 a 14 dias com manejo adequado e progressão funcional inicial.",
            },
            {
              num: "02",
              title: "Grau II (moderado)",
              desc: "Ruptura parcial ligamentar, edema mais evidente e limitação de apoio e marcha.",
              tip: "Tempo médio: 3 a 6 semanas com fisioterapia estruturada.",
            },
            {
              num: "03",
              title: "Grau III (grave)",
              desc: "Ruptura importante, instabilidade acentuada e grande perda funcional inicial.",
              tip: "Tempo médio: acima de 8 semanas, podendo variar conforme conduta e demanda funcional.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Grau {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que acelera a recuperação da entorse de tornozelo?</h2>
        <p className="mb-8 leading-relaxed text-gray-700">
          Controle de edema, carga progressiva, treino de equilíbrio, ganho de mobilidade e fortalecimento específico são os pilares que mais aceleram evolução.
          Retorno precipitado ao esporte sem critérios funcionais costuma aumentar risco de nova torção.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando a entorse de tornozelo deve preocupar?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Procure avaliação se houver dor intensa persistente, incapacidade de apoio por mais tempo que o esperado, edema progressivo, sensação de falseio frequente ou dor óssea localizada.
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Sinais de alerta</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Dor importante sem melhora progressiva após alguns dias</li>
            <li>• Incapacidade de apoio com piora funcional</li>
            <li>• Instabilidade recorrente ao caminhar</li>
            <li>• Edema e hematoma extensos sem regressão</li>
          </ul>
        </div>

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
          <h2 className="mb-4 text-2xl font-bold">Recuperar rápido é recuperar com critério</h2>
          <p className="mb-4 leading-relaxed">
            Entorse de tornozelo tem bom prognóstico quando conduzida com progressão adequada e foco funcional. O objetivo não é apenas tirar dor, mas devolver estabilidade e confiança para movimento.
          </p>
          <p className="mb-4 leading-relaxed">
            Com avaliação e reabilitação bem estruturadas, o retorno às atividades tende a ser mais seguro e com menor risco de recaída.
          </p>
          <p className="leading-relaxed">
            Se sua torção não evolui como esperado, uma avaliação fisioterapêutica pode encurtar caminho e evitar cronicidade.
          </p>
        </div>

        <PatientCTA />


        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidência para quem busca saúde com qualidade.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
