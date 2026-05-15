import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/dor-lombar-ao-ficar-muito-tempo-sentado-causas-e-tratamento";

const faqItems = [
  {
    question: "Dor lombar ao ficar sentado é sempre sinal de problema grave?",
    answer:
      "Não. Na maioria dos casos, a dor lombar relacionada à posição sentada está ligada a sobrecarga mecânica, tolerância reduzida a postura estática, falta de variabilidade de movimento e menor capacidade de suporte da musculatura do tronco e do quadril.",
  },
  {
    question: "Levantar a cada hora ajuda mesmo?",
    answer:
      "Sim. Interromper longos períodos sentado com pequenas pausas de movimento costuma reduzir rigidez, melhorar circulação e diminuir a sensação de piora progressiva da dor ao longo do dia.",
  },
  {
    question: "Qual exercício costuma ajudar na dor lombar?",
    answer:
      "Exercícios de fortalecimento progressivo, controle motor e mobilidade do quadril podem ajudar bastante. O melhor plano depende da avaliação funcional e da irritabilidade dos sintomas.",
  },
  {
    question: "Quando devo procurar fisioterapia?",
    answer:
      "Procure avaliação se a dor persistir por mais de uma ou duas semanas, limitar trabalho e rotina, irradiar para a perna com frequência ou piorar mesmo com ajustes simples de postura e atividade.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dor lombar ao ficar muito tempo sentado: causas e tratamento",
  description:
    "Entenda por que a dor lombar aparece ao ficar muito tempo sentado, quais são as causas mais comuns e como a fisioterapia pode ajudar.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-15",
  dateModified: "2026-05-15",
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
  title: "Dor lombar ao ficar muito tempo sentado: causas e tratamento",
  description:
    "Entenda por que a dor lombar aparece ao ficar muito tempo sentado, quais são as causas mais comuns e como a fisioterapia pode ajudar.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dor lombar ao ficar muito tempo sentado: causas e tratamento",
    description:
      "Entenda por que a dor lombar aparece ao ficar muito tempo sentado, quais são as causas mais comuns e como a fisioterapia pode ajudar.",
    type: "article",
    url: pageUrl,
  },
};

export default function DorLombarSentadoPage() {
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
          <span className="font-medium text-teal-600">Dor lombar ao ficar muito tempo sentado</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Dor
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Dor lombar ao ficar muito tempo sentado: causas e tratamento
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Entenda por que a dor lombar aparece ao ficar muito tempo sentado, quais são as causas mais comuns e como a fisioterapia pode ajudar com estratégias baseadas em evidências.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 15 Mai 2026</span>
            <span>Leitura: 9 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>Resumo clínico:</strong> a dor lombar ao permanecer sentado por muito tempo costuma estar relacionada à sobrecarga mecânica, baixa tolerância à postura estática e redução da variabilidade de movimento.
            Na maior parte dos casos, o quadro melhora com educação, ajuste de carga, pausas ativas e exercícios progressivos.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>dor lombar ao ficar muito tempo sentado</strong> é uma das queixas mais frequentes em pessoas que trabalham em escritório, estudam por longos períodos ou dirigem com frequência.
          Embora muita gente associe o problema apenas à postura, o quadro costuma ser mais complexo do que isso.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          A posição sentada por tempo prolongado aumenta a demanda sobre estruturas lombares, reduz a alternância de movimento e pode elevar a percepção de rigidez e desconforto.
          Em vez de buscar apenas uma postura “perfeita”, a evidência atual favorece uma abordagem mais prática: variar a posição, reduzir exposição contínua e recuperar capacidade física com progressão individualizada.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/dor-lombar-ao-ficar-muito-tempo-sentado-causas-e-tratamento</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">Leia também</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/dor-lombar-ao-acordar-causas-e-como-aliviar-rapido" className="text-teal-600 hover:underline">
                Dor lombar ao acordar: causas e como aliviar rápido
              </Link>
            </li>
            <li>
              <Link href="/blog/dor-lombar-avaliacao-clinica" className="text-teal-600 hover:underline">
                Dor lombar na prática: avaliação clínica objetiva em 7 passos
              </Link>
            </li>
            <li>
              <Link href="/blog/cervicalgia-raciocinio-clinico" className="text-teal-600 hover:underline">
                Cervicalgia: raciocínio clínico para escolher conduta sem excesso de protocolos
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por que a dor lombar aparece ao sentar por muito tempo</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Ficar sentado por longos períodos não é, por si só, uma causa única de dor. O que costuma acontecer é um acúmulo de fatores: pouca movimentação, fadiga muscular, sensibilidade aumentada da região lombar e menor capacidade de sustentar a mesma posição sem incômodo.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Em pessoas com histórico prévio de dor lombar, a postura sentada prolongada pode funcionar como gatilho porque exige tolerância a carga estática que, naquele momento, o corpo ainda não suporta bem.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Exposição prolongada à mesma posição",
              desc: "A permanência longa sentado reduz a variabilidade de movimento e pode aumentar rigidez e desconforto lombar, especialmente no fim do dia.",
              tip: "Pausas curtas de movimento ao longo da jornada costumam ajudar mais do que tentar ‘aguentar’ a mesma posição por horas.",
            },
            {
              num: "02",
              title: "Baixa capacidade de suporte muscular",
              desc: "Quando tronco e quadril apresentam menor resistência, a lombar pode assumir mais carga do que deveria durante o trabalho sentado.",
              tip: "Fortalecimento progressivo do core, glúteos e quadris melhora a tolerância ao dia a dia.",
            },
            {
              num: "03",
              title: "Sensibilidade aumentada à carga",
              desc: "Em quadros persistentes, o sistema pode se tornar mais reativo a estímulos antes tolerados sem dor, inclusive à postura sentada.",
              tip: "A estratégia costuma combinar educação em dor, ajuste de atividade e progressão gradual de esforço.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Causa {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                <strong>Na prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Sinais que acompanham o quadro</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Além da dor em si, muitos pacientes relatam sensação de travamento ao levantar, rigidez ao iniciar o movimento, desconforto após dirigir e piora após longas reuniões ou períodos de estudo.
          Algumas pessoas percebem alívio temporário ao deitar ou caminhar por alguns minutos.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Também é comum notar que o quadro varia conforme o estresse, o sono e a atividade física semanal. Isso reforça a importância de olhar para o problema de forma integrada, e não apenas como uma questão de cadeira ou postura.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como a fisioterapia ajuda</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O tratamento fisioterapêutico costuma ser mais efetivo quando combina educação, modulação de carga e exercício. Na prática, o objetivo é reduzir a irritação do sistema, recuperar tolerância ao movimento e devolver confiança para as atividades do dia a dia.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">1) Educação e ajuste de rotina</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Explicar por que a dor aparece, identificar padrões que pioram os sintomas e implementar pausas ativas já pode reduzir a percepção de limitação.
          O foco deixa de ser apenas “corrigir postura” e passa a ser organizar melhor o tempo sentado.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">2) Exercícios progressivos</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Exercícios de força para tronco, quadril e membros inferiores ajudam a aumentar a capacidade de suporte da região lombar.
          Em muitos casos, a melhora ocorre quando a pessoa passa a tolerar melhor flexão, extensão, sentar, levantar e caminhar sem flare-ups frequentes.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">3) Exposição gradual ao que dói</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Se sentar ainda provoca sintomas, a progressão deve ser gradual: períodos curtos, pausas programadas e aumento de tolerância conforme resposta individual.
          Essa estratégia tende a ser mais sustentável do que evitar completamente o movimento.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">O que a evidência sugere</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          As melhores abordagens para dor lombar inespecífica costumam valorizar exercício, educação e retorno progressivo à função. Intervenções isoladas, como depender apenas de repouso prolongado, frequentemente não resolvem o problema a médio prazo.
        </p>
        <p className="mb-5 leading-relaxed text-gray-700">
          Em vez de prometer alívio imediato e definitivo, o cuidado baseado em evidências procura melhorar capacidade, reduzir recorrência e ampliar autonomia do paciente. Isso é especialmente importante em quadros ligados ao trabalho sentado, que tendem a voltar quando o ambiente e os hábitos não mudam.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando buscar avaliação especializada</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Procure avaliação fisioterapêutica se a dor persistir, estiver piorando ou interferir com trabalho, sono e lazer. Quanto antes o padrão for identificado, mais fácil costuma ser reorganizar a rotina e recuperar função.
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">Sinais de alerta</h3>
          <ul className="space-y-2 text-gray-700">
            <li>- Dor com perda progressiva de força nas pernas</li>
            <li>- Dormência persistente ou piora importante na irradiação</li>
            <li>- Febre, trauma recente ou perda de peso sem explicação</li>
            <li>- Alterações de controle urinário ou intestinal</li>
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
          <h2 className="mb-4 text-2xl font-bold">Postura sentada não precisa definir sua rotina</h2>
          <p className="mb-4 leading-relaxed">
            A dor lombar ao ficar muito tempo sentado melhora com uma estratégia clínica bem organizada: entender a causa dominante, ajustar o nível de exposição e recuperar capacidade física com progressão.
          </p>
          <p className="mb-4 leading-relaxed">
            Em vez de focar apenas em alívio temporário, o objetivo é construir um corpo mais tolerante ao trabalho, ao estudo e às demandas do cotidiano.
          </p>
          <p className="leading-relaxed">
            Com a conduta certa, o paciente costuma voltar a sentar, levantar e se mover com mais segurança e menos medo.
          </p>
        </div>

        <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
          <div>
            <p className="font-semibold text-gray-900">Equipe Kynesia</p>
            <p className="text-sm text-gray-600">Conteúdo clínico baseado em evidência para quem busca saúde com qualidade.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
