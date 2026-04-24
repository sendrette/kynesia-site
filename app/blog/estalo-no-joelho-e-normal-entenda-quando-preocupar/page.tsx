import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/estalo-no-joelho-e-normal-entenda-quando-preocupar";

const faqItems = [
  {
    question: "Estalo no joelho sem dor é normal?",
    answer:
      "Na maioria dos casos, sim. Estalos sem dor, sem inchaço e sem perda de função costumam ser benignos e relacionados a ajuste de tecidos ou gás intra-articular.",
  },
  {
    question: "Quando o estalo no joelho é preocupante?",
    answer:
      "É sinal de alerta quando vem com dor persistente, inchaço, sensação de travamento, falseio ou limitação para atividades como subir escadas e agachar.",
  },
  {
    question: "Estalo no joelho pode ser lesão no menisco?",
    answer:
      "Pode, mas não é sempre. Lesões meniscais geralmente cursam com dor localizada, edema e episódios de travamento. O diagnóstico deve ser clínico, com exames complementares quando necessário.",
  },
  {
    question: "Fisioterapia ajuda no estalo no joelho?",
    answer:
      "Sim. A fisioterapia melhora controle de movimento, força muscular e distribuição de carga, reduzindo sintomas e prevenindo recorrência em quadros sintomáticos.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Estalo no joelho é normal? Entenda quando preocupar",
  description:
    "Estalo no joelho é normal? Veja causas, quando se preocupar e como tratar com fisioterapia de forma segura.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-24",
  dateModified: "2026-04-24",
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
  title: "Estalo no joelho é normal? Entenda quando preocupar",
  description:
    "Estalo no joelho é normal? Veja causas, quando se preocupar e como tratar com fisioterapia de forma segura.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Estalo no joelho é normal? Entenda quando preocupar",
    description:
      "Entenda causas de estalo no joelho, sinais de alerta e quando a fisioterapia é indicada para tratamento seguro.",
    type: "article",
    url: pageUrl,
  },
};

export default function EstaloNoJoelhoPage() {
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
          <span className="font-medium text-teal-600">Estalo no joelho é normal? Entenda quando preocupar</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Dor
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Estalo no joelho é normal? Entenda quando preocupar
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Estalos no joelho são muito comuns e nem sempre indicam lesão. Neste guia, você vai entender as causas mais frequentes, os sinais de alerta e quando a fisioterapia é recomendada.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 24 Abr 2026</span>
            <span>⏱ 8 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            Estalo no joelho pode ser normal quando ocorre sem dor e sem limitação funcional. Já estalo com dor, inchaço ou travamento merece avaliação clínica para diagnóstico diferencial e conduta correta.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Ouvir ou sentir um estalo no joelho durante agachamento, caminhada ou ao levantar da cadeira é algo frequente no consultório. Em muitos casos, esse ruído articular não representa problema estrutural grave.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          O ponto mais importante é avaliar o contexto: há dor? há edema? houve trauma? existe perda de movimento? Essas respostas orientam a necessidade de investigação e tratamento.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/dor-no-joelho-ao-subir-escada-causas-e-tratamento" className="text-teal-600 hover:underline">
                → Dor no joelho ao subir escada: causas e tratamento
              </Link>
            </li>
            <li>
              <Link href="/blog/reabilitacao-pos-operatorio-joelho" className="text-teal-600 hover:underline">
                → Reabilitação pós-operatório de joelho: guia prático
              </Link>
            </li>
            <li>
              <Link href="/blog/quanto-tempo-dura-entorse-de-tornozelo" className="text-teal-600 hover:underline">
                → Quanto tempo dura entorse de tornozelo?
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Principais causas de estalo no joelho</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Nem todo estalo significa lesão. Existem causas fisiológicas e causas patológicas. A diferença está nos sintomas associados e no impacto funcional.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Cavitação articular (fisiológica)",
              desc: "Mudanças de pressão no líquido sinovial podem gerar estalos sem dor, semelhantes ao que ocorre em outras articulações.",
              tip: "Se não há dor, edema ou bloqueio, geralmente não é preocupante.",
            },
            {
              num: "02",
              title: "Atrito de tecidos moles",
              desc: "Tendões e estruturas ao redor da patela podem deslizar e produzir ruídos durante movimento, especialmente em fases de treino ou mudança de carga.",
              tip: "Controle de carga e fortalecimento costumam reduzir sintomas quando presentes.",
            },
            {
              num: "03",
              title: "Síndrome femoropatelar",
              desc: "Alterações no alinhamento e no controle da patela podem causar dor anterior no joelho e crepitação em atividades como subir escadas e agachar.",
              tip: "Exercícios para quadríceps, glúteos e controle motor são chave na reabilitação.",
            },
            {
              num: "04",
              title: "Lesão meniscal",
              desc: "Pode gerar estalo com dor, sensação de travamento e piora em rotações ou flexão profunda, especialmente após trauma.",
              tip: "O diagnóstico clínico direciona quando imagem e outras condutas são necessárias.",
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

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quando se preocupar com estalo no joelho?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O estalo deve ser investigado quando aparece junto de outros sinais clínicos. Esses sinais aumentam a probabilidade de um problema que exige conduta específica.
        </p>

        <ul className="mb-8 space-y-2 leading-relaxed text-gray-700">
          <li>• Dor persistente por mais de 2 semanas</li>
          <li>• Inchaço recorrente após atividade</li>
          <li>• Sensação de joelho "falhando" ou instável</li>
          <li>• Episódios de travamento articular</li>
          <li>• Dificuldade para agachar, correr ou subir escadas</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como a fisioterapia trata de forma segura</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O tratamento começa por avaliação individual: tipo de estalo, padrões de movimento, força, mobilidade e tolerância à carga. A partir disso, é montado um plano progressivo orientado por critérios.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">1) Controle de dor e carga inicial</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Ajustes temporários de atividade e exercícios com baixa irritabilidade ajudam a reduzir sintomas sem interromper completamente o movimento.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">2) Fortalecimento e estabilidade</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Progressão de força para quadríceps, glúteos, panturrilha e controle do membro inferior melhora a mecânica do joelho e reduz sobrecarga local.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">3) Retorno funcional com segurança</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          O retorno à corrida, academia ou esporte é feito por etapas, com critérios objetivos de dor, função e desempenho.
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Sinais de alerta</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Trauma importante com incapacidade de apoiar</li>
            <li>• Inchaço agudo relevante nas primeiras horas</li>
            <li>• Travamento persistente do joelho</li>
            <li>• Dor progressiva associada a febre ou mal-estar</li>
          </ul>
          <p className="mt-4 text-sm text-gray-700">Nesses casos, procure avaliação médica e fisioterapêutica o quanto antes.</p>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Acompanhamento clínico com dados melhora decisões</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Em dores recorrentes de joelho, registrar evolução da dor, resposta aos exercícios e nível de função facilita o ajuste do plano terapêutico.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          No Kynesia, o fisioterapeuta centraliza prontuário, condutas e evolução em um fluxo único, com mais clareza para decidir progressões de carga e comunicar resultados ao paciente.
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
          <h2 className="mb-4 text-2xl font-bold">Estalo no joelho nem sempre é problema, mas merece contexto clínico</h2>
          <p className="mb-4 leading-relaxed">
            O mais importante é avaliar sintomas associados e função. Quando há dor, edema ou limitação, um plano fisioterapêutico bem estruturado acelera a recuperação e reduz risco de recorrência.
          </p>
          <p className="leading-relaxed">Tratar cedo é mais simples do que corrigir um quadro crônico.</p>
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
