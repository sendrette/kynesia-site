import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/dor-lombar-ao-acordar-causas-e-como-aliviar-rapido";

const faqItems = [
  {
    question: "Quanto tempo pode durar a dor lombar ao acordar?",
    answer:
      "Em quadros leves, a dor lombar ao acordar costuma reduzir entre alguns dias e 2 semanas com ajustes de sono, mobilidade e carga diária. Se durar mais de 4 a 6 semanas, vale avaliação profissional.",
  },
  {
    question: "Colchão firme sempre é melhor para dor lombar ao acordar?",
    answer:
      "Nem sempre. O melhor colchão é o que mantém alinhamento e conforto para o seu corpo. Muito duro ou muito macio pode piorar a dor lombar ao acordar em algumas pessoas.",
  },
  {
    question: "Dor lombar ao acordar melhora só com alongamento?",
    answer:
      "Alongar ajuda, mas o melhor resultado costuma vir da combinação entre mobilidade, fortalecimento progressivo e ajustes de rotina (posição para dormir, pausas e gestão de carga).",
  },
  {
    question: "Quando procurar fisioterapia para dor lombar ao acordar?",
    answer:
      "Procure fisioterapia se a dor se repete por semanas, limita tarefas diárias, irradia para a perna ou volta sempre ao acordar, mesmo com mudanças básicas de hábito.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dor lombar ao acordar: causas e como aliviar rápido",
  description:
    "Dor lombar ao acordar pode indicar tensão muscular, colchão inadequado ou problemas na coluna. Veja causas, quando se preocupar e como aliviar.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
    logo: {
      "@type": "ImageObject",
      url: "https://kynesia.com.br/kynesia-logo-continuo.svg",
    },
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
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
  title: "Dor lombar ao acordar: causas e como aliviar rápido",
  description:
    "Dor lombar ao acordar pode indicar tensão muscular, colchão inadequado ou problemas na coluna. Veja causas, quando se preocupar e como aliviar.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dor lombar ao acordar: causas e como aliviar rápido",
    description:
      "Dor lombar ao acordar pode indicar tensão muscular, colchão inadequado ou problemas na coluna. Veja causas, quando se preocupar e como aliviar.",
    type: "article",
    url: pageUrl,
  },
};

export default function DorLombarAoAcordarPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-5xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Dor lombar ao acordar: causas e como aliviar rápido</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-14 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="inline-flex rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Dor
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#122a5a] md:text-5xl">
            Dor lombar ao acordar: causas e como aliviar rápido
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Entenda os principais gatilhos da dor matinal na lombar e quais medidas práticas ajudam a recuperar conforto ao levantar.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
            <span>📅 10 Abr 2026</span>
            <span>⏱ 9 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border-2 border-teal-500 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">Resposta rápida: dor lombar ao acordar</h2>
          <p className="mt-2 leading-relaxed text-slate-700">
            A dor lombar ao acordar geralmente está ligada a tensão muscular, posição de sono inadequada, colchão incompatível ou sobrecarga acumulada no dia anterior.
            Na maioria dos casos melhora com ajustes de rotina, mas dor persistente, irradiada ou com sinais neurológicos pede avaliação profissional.
          </p>
        </div>

        <p className="mt-8 leading-relaxed text-slate-700">
          A <strong>dor lombar ao acordar</strong> é uma queixa muito comum em pessoas que passam longos períodos sentadas, treinam sem progressão adequada ou dormem em posições que mantêm a coluna em estresse por horas.
          A boa notícia é que, na maior parte dos casos, existem intervenções simples para aliviar rápido e reduzir recorrência.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/dor-lombar-ao-acordar-causas-e-como-aliviar-rapido</p>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">Principais causas de dor lombar ao acordar</h2>
        <p className="mt-4 leading-relaxed text-slate-700">
          Antes de pensar em algo grave, vale revisar os fatores mais frequentes. Normalmente, a dor matinal aparece por combinação de hábitos e não por uma única causa isolada.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">1) Tensão muscular e rigidez após imobilidade</h3>
        <p className="mt-2 leading-relaxed text-slate-700">
          Durante o sono, ficamos horas na mesma posição. Se existe encurtamento muscular, baixa mobilidade de quadril ou fadiga da musculatura lombar, o corpo acorda mais rígido.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">2) Colchão e travesseiro incompatíveis</h3>
        <p className="mt-2 leading-relaxed text-slate-700">
          Colchão muito afundado ou duro demais pode tirar o alinhamento da coluna. O mesmo vale para travesseiro inadequado, especialmente em quem dorme de lado.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">3) Sobrecarga acumulada no dia anterior</h3>
        <p className="mt-2 leading-relaxed text-slate-700">
          Treinos intensos sem recuperação, longas horas sentado e má distribuição de carga no trabalho podem sensibilizar a lombar. A dor aparece com mais clareza ao levantar.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">Dor lombar ao acordar é sinal de problema na coluna?</h2>
        <p className="mt-4 leading-relaxed text-slate-700">
          Nem sempre. Em muitos casos é um quadro mecânico e reversível. Pode haver problema estrutural na coluna, mas isso precisa ser correlacionado com avaliação clínica, histórico e exame físico.
          Exame de imagem isolado não fecha diagnóstico funcional.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">Qual a melhor posição para dormir com dor lombar ao acordar?</h2>
        <p className="mt-4 leading-relaxed text-slate-700">
          Em geral, dormir de lado com travesseiro entre os joelhos costuma reduzir carga lombar. Para quem dorme de barriga para cima, apoio sob os joelhos pode ajudar.
          O mais importante é manter conforto, alinhamento e acordar com menos rigidez ao longo da semana.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">Quando a dor lombar ao acordar exige avaliação médica?</h2>
        <p className="mt-4 leading-relaxed text-slate-700">
          Procure avaliação imediata se houver perda de força progressiva, formigamento intenso persistente, alteração urinária/fecal, febre, trauma recente ou dor noturna incapacitante.
          Sem sinais de alerta, fisioterapia costuma ser o melhor primeiro passo para avaliação e tratamento.
        </p>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">Como aliviar dor lombar ao acordar rápido (primeiros passos)</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Faça 5 a 8 minutos de mobilidade leve ao levantar (quadril e coluna torácica).</li>
            <li>• Evite ficar muito tempo sentado sem pausa nas primeiras horas do dia.</li>
            <li>• Ajuste posição de sono e teste suporte para joelhos por 1 a 2 semanas.</li>
            <li>• Retome carga de treino de forma progressiva, sem picos bruscos.</li>
          </ul>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Perguntas frequentes</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
                <summary className="cursor-pointer font-semibold text-slate-900">{faq.question}</summary>
                <p className="mt-3 leading-relaxed text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">Leia também no blog Kynesia</h2>
          <ul className="mt-4 space-y-2 text-teal-700">
            <li>
              <Link href="/blog/dor-lombar-avaliacao-clinica" className="hover:underline">
                → Dor lombar na prática: avaliação clínica objetiva em 7 passos
              </Link>
            </li>
            <li>
              <Link href="/blog/tendinopatia-carga-progressiva" className="hover:underline">
                → Tendinopatia e carga progressiva: quando avançar, manter ou regredir
              </Link>
            </li>
            <li>
              <Link href="/blog/gestao-de-agenda-fisioterapia" className="hover:underline">
                → Gestão de agenda na fisioterapia: menos faltas e mais previsibilidade
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
