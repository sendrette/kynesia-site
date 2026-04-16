import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/hernia-de-disco-tem-cura-entenda-o-tratamento";

const faqItems = [
  {
    question: "Hérnia de disco tem cura sem cirurgia?",
    answer:
      "Em muitos casos, sim. A maior parte das hérnias melhora com tratamento conservador, controle de dor, adaptação de carga e fisioterapia orientada por critérios.",
  },
  {
    question: "Quanto tempo demora para melhorar?",
    answer:
      "A melhora varia conforme irritabilidade, localização e resposta ao tratamento. Muitos pacientes apresentam redução importante dos sintomas em semanas, mas o tempo pode ser maior em quadros mais intensos.",
  },
  {
    question: "Preciso fazer ressonância para tratar?",
    answer:
      "Nem sempre. O diagnóstico é clínico na maioria das vezes, e a imagem é indicada quando há sinais de alerta, déficit neurológico, trauma ou evolução fora do esperado.",
  },
  {
    question: "Quando a fisioterapia é indicada?",
    answer:
      "A fisioterapia é indicada desde o início na maioria dos casos, principalmente para orientar movimento, reduzir dor, recuperar função e evitar recorrência.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hérnia de disco tem cura? Entenda o tratamento",
  description:
    "Hérnia de disco tem cura? Veja quando melhora, tratamentos mais indicados e quando procurar fisioterapia para aliviar a dor.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
  image: "https://kynesia.com.br/blog/avaliacao-clinica.svg",
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
  title: "Hérnia de disco tem cura? Entenda o tratamento",
  description:
    "Hérnia de disco tem cura? Veja quando melhora, tratamentos mais indicados e quando procurar fisioterapia para aliviar a dor.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Hérnia de disco tem cura? Entenda o tratamento",
    description:
      "Entenda quando a hérnia de disco melhora, quais tratamentos são mais indicados e quando procurar fisioterapia.",
    type: "article",
    url: pageUrl,
  },
};

export default function HerniaDeDiscoPage() {
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
          <span className="font-medium text-teal-600">Hérnia de disco tem cura? Entenda o tratamento</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Dor
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Hérnia de disco tem cura? Entenda o tratamento
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Veja quando a hérnia de disco melhora, quais tratamentos costumam funcionar melhor e em que momento a fisioterapia deve entrar para aliviar a dor.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 16 Abr 2026</span>
            <span>⏱ 8 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            Hérnia de disco tem cura na maioria dos casos com tratamento conservador. O objetivo não é apenas “sumir com a imagem”, mas reduzir dor, recuperar função e permitir retorno seguro às atividades.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A pergunta <strong>“hérnia de disco tem cura?”</strong> é muito comum no consultório. A resposta depende do que se entende por cura: em muitos pacientes, os sintomas melhoram bastante e a rotina volta ao normal sem cirurgia.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Em vez de focar apenas no exame, a avaliação clínica considera dor, função, irritabilidade, sinais neurológicos e resposta ao movimento. Isso orienta um tratamento mais seguro e eficiente.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/hernia-de-disco-tem-cura-entenda-o-tratamento</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/dor-lombar-avaliacao-clinica" className="text-teal-600 hover:underline">
                → Dor lombar na prática: avaliação clínica objetiva em 7 passos
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-lombar-ao-acordar-causas-e-como-aliviar-rapido" className="text-teal-600 hover:underline">
                → Dor lombar ao acordar: causas e como aliviar rápido
              </Link>
            </li>
            <li>
              <Link href="/blog/cervical-travada-o-que-fazer-na-hora-e-quando-preocupar" className="text-teal-600 hover:underline">
                → Cervical travada: o que fazer na hora e quando preocupar
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Hérnia de disco tem cura em quais casos?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Na prática, muitos quadros de hérnia de disco melhoram com o tempo e com conduta conservadora.
          Isso acontece porque a dor costuma estar mais relacionada à irritação e à sobrecarga funcional do que apenas ao achado anatômico em si.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Casos leves ou moderados",
              desc: "Sintomas controláveis, sem déficit neurológico importante, tendem a responder muito bem a educação, ajuste de carga e exercício.",
              tip: "A melhora costuma ocorrer sem procedimentos invasivos quando o plano é consistente.",
            },
            {
              num: "02",
              title: "Quadros com boa resposta ao movimento",
              desc: "Quando a dor reduz com mudanças de posição e progressão gradual, o prognóstico costuma ser favorável.",
              tip: "Movimento bem dosado é parte central do tratamento.",
            },
            {
              num: "03",
              title: "Sintomas sem sinais de alerta",
              desc: "Na ausência de perda de força progressiva, alterações esfincterianas ou piora importante, a abordagem conservadora costuma ser suficiente.",
              tip: "Nem toda hérnia precisa de cirurgia.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Cenário {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quais tratamentos são mais indicados?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O tratamento da hérnia de disco costuma combinar educação em dor, controle de carga, exercícios terapêuticos e, quando necessário, recursos para modulação de sintomas.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">1) Fisioterapia com progressão por critérios</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          A fisioterapia ajuda a reduzir medo de movimento, recuperar mobilidade e fortalecer estruturas que sustentam a coluna.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">2) Ajuste de atividades e ergonomia</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Reduzir temporariamente posições sustentadas, pausas frequentes e adaptar treino ou trabalho pode diminuir irritação do quadro.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">3) Acompanhamento médico quando necessário</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Em casos com dor intensa, déficit neurológico ou evolução fora do esperado, o acompanhamento médico pode indicar medicação, infiltração ou avaliação cirúrgica.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando procurar fisioterapia para hérnia de disco</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Quanto antes o paciente é orientado, melhor tende a ser o controle da dor e o retorno funcional. A fisioterapia é útil tanto na fase aguda quanto na reabilitação e prevenção de recorrência.
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Sinais de alerta</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Perda de força progressiva</li>
            <li>• Dormência intensa ou piora neurológica</li>
            <li>• Alterações para urinar ou evacuar</li>
            <li>• Dor incapacitante sem melhora com o passar dos dias</li>
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
          <h2 className="mb-4 text-2xl font-bold">Hérnia de disco melhora com tratamento bem conduzido</h2>
          <p className="mb-4 leading-relaxed">
            A maioria dos pacientes não precisa de soluções invasivas de início. Com avaliação correta, progressão de exercícios e manejo de carga, é possível reduzir sintomas e recuperar função com segurança.
          </p>
          <p className="mb-4 leading-relaxed">
            Se a dor está limitando sua rotina, a fisioterapia pode encurtar o caminho entre sofrimento e retorno funcional.
          </p>
          <p className="leading-relaxed">
            O mais importante é tratar a pessoa, não apenas o exame.
          </p>
        </div>

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
