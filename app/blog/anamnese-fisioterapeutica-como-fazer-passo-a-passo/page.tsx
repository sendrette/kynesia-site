import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/anamnese-fisioterapeutica-como-fazer-passo-a-passo";

const faqItems = [
  {
    question: "O que não pode faltar na anamnese fisioterapêutica?",
    answer:
      "Queixa principal, história da dor, limitações funcionais, histórico clínico, medicações, rotina, objetivos do paciente e sinais de alerta. Esses dados guiam avaliação física e plano terapêutico.",
  },
  {
    question: "Quanto tempo deve durar a anamnese?",
    answer:
      "Depende da complexidade do caso. Em geral, de 15 a 30 minutos na primeira consulta, com foco em coletar informações relevantes sem perder objetividade.",
  },
  {
    question: "A anamnese já define o diagnóstico fisioterapêutico?",
    answer:
      "Ela orienta hipóteses iniciais importantes, mas o diagnóstico fisioterapêutico é consolidado com exame físico, testes funcionais e análise de resposta ao movimento.",
  },
  {
    question: "Como registrar a anamnese de forma organizada?",
    answer:
      "Use uma estrutura padronizada por blocos (queixa, história, antecedentes, funcionalidade, objetivos e red flags), com linguagem clara e dados clínicos rastreáveis para as próximas sessões.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Anamnese fisioterapêutica: como fazer passo a passo",
  description:
    "Aprenda como fazer uma anamnese fisioterapêutica completa com passo a passo, perguntas essenciais e dicas práticas.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
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
  title: "Anamnese fisioterapêutica: como fazer passo a passo",
  description:
    "Aprenda como fazer uma anamnese fisioterapêutica completa com passo a passo, perguntas essenciais e dicas práticas.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Anamnese fisioterapêutica: como fazer passo a passo",
    description:
      "Aprenda como fazer uma anamnese fisioterapêutica completa com passo a passo, perguntas essenciais e dicas práticas.",
    type: "article",
    url: pageUrl,
  },
};

export default function AnamneseFisioterapeuticaPage() {
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
          <span className="font-medium text-teal-600">Anamnese fisioterapêutica: como fazer passo a passo</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Avaliação
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Anamnese fisioterapêutica: como fazer passo a passo
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Uma anamnese bem conduzida melhora o raciocínio clínico, economiza tempo e aumenta a precisão do plano terapêutico. Veja um passo a passo prático para aplicar na sua rotina.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 27 Abr 2026</span>
            <span>⏱ 9 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            A anamnese fisioterapêutica é o primeiro filtro clínico para identificar hipóteses, red flags e objetivos funcionais. Quanto melhor esse processo, mais assertiva tende a ser a conduta.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Muitos erros no tratamento começam por falhas na coleta inicial de informações. Perguntas genéricas, ausência de critérios e registro incompleto dificultam o diagnóstico fisioterapêutico e a evolução do caso.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste guia, você vai encontrar um <strong>passo a passo de anamnese fisioterapêutica</strong> com perguntas essenciais, organização prática e dicas para transformar dados em decisão clínica.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/dor-lombar-avaliacao-clinica" className="text-teal-600 hover:underline">
                → Dor lombar na prática: avaliação clínica objetiva em 7 passos
              </Link>
            </li>
            <li>
              <Link href="/blog/cervicalgia-raciocinio-clinico" className="text-teal-600 hover:underline">
                → Cervicalgia: raciocínio clínico na fisioterapia
              </Link>
            </li>
            <li>
              <Link href="/blog/modelos-evolucao-prontuario-fisioterapeutica" className="text-teal-600 hover:underline">
                → Modelos de evolução para prontuário fisioterapêutico
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por que a anamnese é tão importante?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A anamnese organiza o caso antes do exame físico. Ela ajuda a entender irritabilidade, mecanismo da dor, impacto funcional, contexto psicossocial e expectativas do paciente.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Com isso, você define melhor os testes clínicos, reduz hipóteses irrelevantes e cria um plano com prioridades reais para aquela fase do tratamento.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Passo a passo da anamnese fisioterapêutica</h2>
        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Queixa principal e objetivo da consulta",
              desc: "Comece com pergunta aberta: “O que te trouxe hoje?”. Depois, refine para entender o principal problema e o que o paciente espera recuperar.",
              tip: "Registre a queixa com as palavras do paciente e o objetivo funcional desejado.",
            },
            {
              num: "02",
              title: "História da dor e evolução do quadro",
              desc: "Investigue início, duração, frequência, localização, irradiação, fatores de piora e melhora, além da intensidade e padrão ao longo do dia.",
              tip: "Use escalas e marcos temporais para facilitar comparação nas próximas sessões.",
            },
            {
              num: "03",
              title: "Histórico clínico e antecedentes",
              desc: "Pergunte sobre doenças prévias, cirurgias, traumas, uso de medicação, exames realizados e tratamentos já tentados.",
              tip: "Evite repetir condutas que não funcionaram sem uma justificativa clínica clara.",
            },
            {
              num: "04",
              title: "Funcionalidade e impacto no dia a dia",
              desc: "Mapeie limitações em trabalho, sono, atividades domésticas, esporte e autocuidado. Isso define metas e indicadores de progresso.",
              tip: "Transforme queixas em tarefas mensuráveis (ex.: subir escada sem dor).",
            },
            {
              num: "05",
              title: "Triagem de sinais de alerta (red flags)",
              desc: "Verifique sinais sistêmicos e neurológicos que exigem encaminhamento: febre, perda de peso inexplicada, trauma relevante, déficit progressivo, alterações esfincterianas, entre outros.",
              tip: "Red flag identificada muda a prioridade da consulta e a segurança da conduta.",
            },
            {
              num: "06",
              title: "Hipóteses iniciais e plano da avaliação física",
              desc: "Com os dados coletados, formule hipóteses clínicas e selecione testes específicos para confirmar ou refutar cada uma.",
              tip: "Anamnese boa reduz testes desnecessários e melhora o raciocínio clínico.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Passo {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Dica prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Perguntas essenciais para usar na prática</h2>
        <ul className="mb-8 space-y-2 leading-relaxed text-gray-700">
          <li>• Quando começou e como começou o sintoma?</li>
          <li>• O que piora e o que alivia a dor?</li>
          <li>• Qual atividade ficou mais limitada?</li>
          <li>• Como está o sono desde que o quadro começou?</li>
          <li>• Já fez tratamento antes? O que ajudou ou piorou?</li>
          <li>• Existe algum sintoma neurológico associado?</li>
          <li>• Qual resultado você espera com a fisioterapia?</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como evitar erros comuns na anamnese</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Os erros mais frequentes são: conduzir entrevista muito fechada, não investigar função, ignorar fatores psicossociais e registrar tudo de forma pouco objetiva.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Padronizar sua estrutura de perguntas e usar um prontuário organizado melhora a consistência entre atendimentos e facilita decisões clínicas ao longo das sessões.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Registro clínico e continuidade do cuidado</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Uma anamnese excelente perde valor se não estiver bem documentada. O ideal é registrar informações em blocos objetivos, com linguagem clínica clara e fácil rastreabilidade.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          No Kynesia, você estrutura anamnese, evolução e plano terapêutico no mesmo fluxo, com histórico organizado para revisar hipóteses, ajustar condutas e acompanhar resultados com mais precisão.
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
          <h2 className="mb-4 text-2xl font-bold">Anamnese bem feita melhora todo o tratamento</h2>
          <p className="mb-4 leading-relaxed">
            Coletar dados certos na primeira consulta encurta o caminho entre avaliação e resultado clínico. O foco deve ser transformar informação em decisão prática.
          </p>
          <p className="leading-relaxed">
            Estruture seu processo, registre com qualidade e acompanhe evolução por critérios.
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
