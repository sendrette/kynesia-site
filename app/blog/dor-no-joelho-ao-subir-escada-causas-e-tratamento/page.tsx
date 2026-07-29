import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/dor-no-joelho-ao-subir-escada-causas-e-tratamento";

const faqItems = [
  {
    question: "Dor no joelho ao subir escada é normal?",
    answer:
      "Não deve ser considerada normal quando é frequente ou progressiva. Pode estar relacionada a sobrecarga mecânica, déficit de força, alteração de controle motor ou lesão articular.",
  },
  {
    question: "Qual músculo fortalecer para reduzir dor no joelho?",
    answer:
      "Em geral, fortalecer quadríceps, glúteos e panturrilhas ajuda bastante. O plano ideal depende da avaliação funcional, do padrão de movimento e da irritabilidade do quadro.",
  },
  {
    question: "Posso continuar subindo escada com dor?",
    answer:
      "Depende da intensidade e do comportamento da dor. Em muitos casos, é possível manter atividade com ajuste de volume e técnica, evitando piora de sintomas após esforço.",
  },
  {
    question: "Quando procurar fisioterapia para dor no joelho?",
    answer:
      "Procure fisioterapia se a dor persistir por mais de 1 a 2 semanas, limitar atividades diárias, piorar progressivamente ou vier acompanhada de inchaço e falseio.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dor no joelho ao subir escada: causas e tratamento",
  description:
    "Dor no joelho ao subir escada pode indicar sobrecarga ou lesão. Veja causas, sintomas e quando procurar fisioterapia.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
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
  title: "Dor no joelho ao subir escada: causas e tratamento",
  description:
    "Dor no joelho ao subir escada pode indicar sobrecarga ou lesão. Veja causas, sintomas e quando procurar fisioterapia.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dor no joelho ao subir escada: causas e tratamento",
    description:
      "Entenda por que o joelho dói ao subir escada, como manejar sintomas e quando buscar tratamento fisioterapêutico.",
    type: "article",
    url: pageUrl,
  },
};

export default function DorJoelhoEscadaPage() {
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
          <span className="font-medium text-teal-600">Dor no joelho ao subir escada: causas e tratamento</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Dor
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Dor no joelho ao subir escada: causas e tratamento
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Entenda as causas mais comuns da dor no joelho ao subir escada, como aliviar sintomas e quando a fisioterapia é indicada para recuperação segura.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 15 Abr 2026</span>
            <span>⏱ 8 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            Dor no joelho ao subir escada geralmente está relacionada a sobrecarga femoropatelar, déficit de força e controle de movimento.
            O tratamento envolve ajuste de carga, exercícios progressivos e correção de padrões funcionais para reduzir dor e evitar recorrência.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>dor no joelho ao subir escada</strong> é uma queixa comum em adultos ativos e também em quem passa longos períodos sentado.
          Esse sintoma costuma aparecer porque subir degraus aumenta a demanda sobre o joelho, especialmente na articulação femoropatelar.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          A boa notícia é que, na maioria dos casos, o quadro responde bem a tratamento conservador com fisioterapia, desde que a conduta seja guiada por avaliação funcional e progressão adequada.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/dor-no-joelho-ao-subir-escada-causas-e-tratamento</p>
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

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Principais causas da dor no joelho ao subir escada</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Subir escadas exige maior flexão de joelho e aumento de força muscular. Se há déficit de capacidade do tecido ou padrão de movimento inadequado, a dor aparece.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Sobrecarga femoropatelar",
              desc: "Comum em quem apresenta dor anterior no joelho, piorando em escada, agachamento e longos períodos sentado.",
              tip: "Ajustar volume de esforço e fortalecer quadríceps e glúteos reduz estresse articular.",
            },
            {
              num: "02",
              title: "Fraqueza de quadríceps e glúteos",
              desc: "A menor capacidade de gerar força aumenta compensações e eleva a sobrecarga local durante subida de degraus.",
              tip: "Treino progressivo de força é um dos pilares de melhora clínica.",
            },
            {
              num: "03",
              title: "Controle motor e técnica de movimento",
              desc: "Valgo dinâmico, queda de pelve e rotação femoral excessiva podem amplificar dor durante atividades funcionais.",
              tip: "Reeducação do gesto funcional e treino específico aceleram retorno sem dor.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Causa {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Sintomas que costumam acompanhar</h2>
        <p className="mb-8 leading-relaxed text-gray-700">
          Além da dor ao subir escada, é comum sentir desconforto ao descer degraus, levantar da cadeira, agachar ou após muito tempo sentado.
          Alguns pacientes relatam crepitação e sensação de fraqueza no joelho.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como é o tratamento fisioterapêutico</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O tratamento combina educação em dor, ajuste de carga, fortalecimento progressivo e treino funcional.
          A progressão respeita irritabilidade dos sintomas e metas da rotina do paciente.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">1) Controle de carga e dor</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Reduzir temporariamente volume de escadas, corrida ou agachamentos profundos pode diminuir irritação e permitir progresso mais estável.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">2) Fortalecimento progressivo</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Exercícios para quadríceps, glúteos e panturrilhas com progressão individualizada melhoram tolerância do joelho às demandas diárias.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">3) Retorno funcional guiado por critérios</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O retorno pleno a escadas, treino e esporte deve considerar dor durante e após esforço, qualidade de movimento e confiança funcional.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando procurar avaliação especializada</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Se a dor no joelho ao subir escada persiste por semanas, limita atividades ou piora com o tempo, uma avaliação fisioterapêutica ajuda a definir causa predominante e tratamento assertivo.
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Sinais de alerta</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Inchaço importante e recorrente no joelho</li>
            <li>• Sensação de falseio ou travamento articular</li>
            <li>• Dor noturna persistente sem melhora</li>
            <li>• Queda importante de força ou incapacidade funcional progressiva</li>
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
          <h2 className="mb-4 text-2xl font-bold">Dor ao subir escada melhora com plano certo</h2>
          <p className="mb-4 leading-relaxed">
            A dor no joelho ao subir escada costuma ter bom prognóstico quando tratada com estratégia: reduzir irritação inicial, recuperar força e progredir função de forma objetiva.
          </p>
          <p className="mb-4 leading-relaxed">
            Mais do que aliviar sintoma no curto prazo, a fisioterapia busca restaurar capacidade e prevenir recaídas nas atividades do dia a dia.
          </p>
          <p className="leading-relaxed">
            Se o joelho está limitando sua rotina, avaliar cedo acelera resultados e melhora sua confiança para movimento.
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
