import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/dor-no-pescoco-e-dor-de-cabeca-entenda-a-relacao";

const faqItems = [
  {
    question: "Dor no pescoço pode causar dor de cabeça mesmo?",
    answer:
      "Sim. A dor cervical pode irradiar para a cabeça, especialmente para nuca, têmporas e região atrás dos olhos. Isso é comum em cefaleia cervicogênica e em quadros de tensão muscular.",
  },
  {
    question: "Como saber se a dor de cabeça vem da cervical?",
    answer:
      "Alguns sinais sugerem origem cervical: dor que piora com movimentos do pescoço, rigidez na nuca, sensibilidade em músculos cervicais e melhora parcial com mobilização e exercícios.",
  },
  {
    question: "Quando devo procurar fisioterapia?",
    answer:
      "Procure fisioterapia quando os sintomas persistem por mais de 1-2 semanas, quando há limitação de movimento, recorrência frequente das crises ou impacto na rotina de trabalho e sono.",
  },
  {
    question: "Dor de cabeça e dor no pescoço podem ser sinal de algo grave?",
    answer:
      "Na maioria dos casos não, mas sinais como febre, perda de força, alterações visuais importantes, confusão mental, trauma recente ou dor súbita muito intensa exigem avaliação médica imediata.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dor no pescoço e dor de cabeça: entenda a relação",
  description:
    "Dor no pescoço e dor de cabeça podem estar relacionadas. Veja causas, sintomas e quando procurar fisioterapia para aliviar.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
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
  title: "Dor no pescoço e dor de cabeça: entenda a relação",
  description:
    "Dor no pescoço e dor de cabeça podem estar relacionadas. Veja causas, sintomas e quando procurar fisioterapia para aliviar.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dor no pescoço e dor de cabeça: entenda a relação",
    description:
      "Dor no pescoço e dor de cabeça podem estar relacionadas. Veja causas, sintomas e quando procurar fisioterapia para aliviar.",
    type: "article",
    url: pageUrl,
  },
};

export default function DorPescocoDorCabecaPage() {
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
          <span className="font-medium text-teal-600">Dor no pescoço e dor de cabeça: entenda a relação</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Dor
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Dor no pescoço e dor de cabeça: entenda a relação
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Dor no pescoço e dor de cabeça frequentemente aparecem juntas. Entenda por que isso acontece, quais sinais observar e quando a fisioterapia pode ajudar a aliviar os sintomas.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 23 Abr 2026</span>
            <span>⏱ 8 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            Em muitos casos, a dor de cabeça tem origem ou contribuição cervical. Tensão muscular, restrição articular e sobrecarga postural do pescoço podem sensibilizar estruturas que irradiam dor para a cabeça.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Se você sente dor na nuca e, ao mesmo tempo, episódios de cefaleia, não está sozinho. Essa combinação é comum na prática clínica e pode ter relação com alterações do controle muscular cervical e da mecânica da coluna.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          A boa notícia é que, com avaliação adequada e tratamento direcionado, costuma ser possível reduzir a frequência e a intensidade dos sintomas, além de recuperar mobilidade e qualidade de vida.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/cervical-travada-o-que-fazer-na-hora-e-quando-preocupar" className="text-teal-600 hover:underline">
                → Cervical travada: o que fazer na hora e quando preocupar
              </Link>
            </li>
            <li>
              <Link href="/blog/cervicalgia-raciocinio-clinico" className="text-teal-600 hover:underline">
                → Cervicalgia: raciocínio clínico na fisioterapia
              </Link>
            </li>
            <li>
              <Link href="/blog/diagnostico-diferencial-cervical-vs-ombro" className="text-teal-600 hover:underline">
                → Diagnóstico diferencial: dor cervical vs dor no ombro
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por que dor no pescoço e dor de cabeça estão relacionadas?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A região cervical compartilha vias nervosas com estruturas da cabeça. Quando músculos, articulações e tecidos do pescoço estão sobrecarregados, o sistema nervoso pode interpretar o estímulo doloroso também como dor de cabeça.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Esse mecanismo é comum na <strong>cefaleia cervicogênica</strong>, mas também pode coexistir com cefaleia tensional. Por isso, o diagnóstico não deve ser baseado apenas na localização da dor, e sim em uma avaliação funcional completa.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Tensão muscular sustentada",
              desc: "Longos períodos em postura fixa (computador, celular, direção) aumentam a sobrecarga em trapézio superior, elevador da escápula e suboccipitais.",
              tip: "Pausas ativas e exercícios simples ao longo do dia reduzem a irritabilidade muscular.",
            },
            {
              num: "02",
              title: "Restrição de mobilidade cervical",
              desc: "Perda de rotação e extensão do pescoço pode alterar a mecânica do movimento e gerar compensações dolorosas.",
              tip: "Mobilidade guiada e controle motor cervical ajudam a normalizar o padrão de movimento.",
            },
            {
              num: "03",
              title: "Sensibilização por estresse e sono ruim",
              desc: "Estresse crônico, ansiedade e privação de sono podem aumentar a percepção de dor e tornar crises mais frequentes.",
              tip: "O tratamento precisa considerar estilo de vida, não apenas a estrutura anatômica.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Fator {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Sintomas mais comuns</h2>
        <ul className="mb-8 space-y-2 leading-relaxed text-gray-700">
          <li>• Dor na nuca com irradiação para têmpora ou atrás dos olhos</li>
          <li>• Rigidez no pescoço ao acordar ou no fim do dia</li>
          <li>• Piora da dor de cabeça ao movimentar a cervical</li>
          <li>• Sensibilidade muscular em ombro e região cervical</li>
          <li>• Cansaço visual e sensação de peso na cabeça</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando procurar fisioterapia?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A fisioterapia é indicada quando os sintomas se repetem, quando há limitação funcional ou quando analgésicos aliviam apenas de forma temporária. O foco é identificar a causa mecânica e funcional do problema para tratar a origem do quadro.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">1) Avaliação clínica direcionada</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Inclui histórico, padrão da dor, testes de mobilidade cervical, controle motor e análise de fatores de sobrecarga no trabalho e nas atividades diárias.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">2) Tratamento com progressão por critérios</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Combina exercícios terapêuticos, técnicas manuais quando indicadas, educação em dor e ajustes de rotina para reduzir recorrência.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">3) Prevenção de novas crises</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Após controlar os sintomas, o objetivo é manter ganhos de mobilidade e força, melhorar tolerância à carga e construir estratégias sustentáveis para o dia a dia.
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Sinais de alerta</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Dor de cabeça súbita e muito intensa</li>
            <li>• Febre associada a rigidez de nuca importante</li>
            <li>• Alteração neurológica (fraqueza, fala, visão, confusão)</li>
            <li>• Dor após trauma relevante</li>
          </ul>
          <p className="mt-4 text-sm text-gray-700">Nesses casos, procure atendimento médico imediato.</p>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como a tecnologia melhora o acompanhamento clínico</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Em quadros recorrentes, acompanhar evolução com consistência faz diferença. Registrar sintomas, resposta aos exercícios e fatores gatilho ajuda o fisioterapeuta a ajustar o plano com mais precisão.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          No Kynesia, o profissional organiza prontuário, evolução e condutas em um só fluxo, facilitando decisões clínicas e comunicação com o paciente ao longo do tratamento.
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
          <h2 className="mb-4 text-2xl font-bold">Dor no pescoço e dor de cabeça têm tratamento</h2>
          <p className="mb-4 leading-relaxed">
            Quando avaliadas de forma integrada, essas dores costumam responder bem à fisioterapia. O caminho passa por diagnóstico funcional, progressão de carga e mudanças de hábito.
          </p>
          <p className="leading-relaxed">
            Quanto antes você agir, maior a chance de reduzir crises e recuperar qualidade de vida.
          </p>
        </div>

        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            K
          </div>
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo baseado em prática clínica e fisioterapia orientada por evidências.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
