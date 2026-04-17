import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/gestao-clinica-em-fisioterapia-guia-completo-2026";

const faqItems = [
  {
    question: "O que é gestão clínica em fisioterapia?",
    answer:
      "É a organização integrada da rotina clínica e administrativa: prontuário, agenda, evolução, indicadores, financeiro e tomada de decisão baseada em dados e evidências.",
  },
  {
    question: "Qual o principal erro na gestão de clínicas de fisioterapia?",
    answer:
      "O erro mais comum é trabalhar sem processos padronizados e sem indicadores. Isso reduz previsibilidade, aumenta retrabalho e impacta qualidade assistencial.",
  },
  {
    question: "Como melhorar a gestão clínica rapidamente?",
    answer:
      "Comece padronizando avaliação e evolução, organizando agenda com regras claras, acompanhando métricas simples e usando uma plataforma única para centralizar operação.",
  },
  {
    question: "Como o Kynesia ajuda na gestão clínica?",
    answer:
      "O Kynesia centraliza prontuário, agenda, financeiro e inteligência clínica em um só sistema, reduzindo burocracia e aumentando eficiência, padronização e qualidade no atendimento.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Gestão clínica em fisioterapia: guia completo 2026",
  description:
    "Entenda como fazer gestão clínica em fisioterapia com eficiência, organização e tecnologia. Veja estratégias e ferramentas essenciais.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  image: "https://kynesia.com.br/blog/gestao-clinica.svg",
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
  title: "Gestão clínica em fisioterapia: guia completo 2026",
  description:
    "Entenda como fazer gestão clínica em fisioterapia com eficiência, organização e tecnologia. Veja estratégias e ferramentas essenciais.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Gestão clínica em fisioterapia: guia completo 2026",
    description:
      "Veja como estruturar uma gestão clínica moderna para fisioterapia e como tecnologia pode elevar qualidade, produtividade e resultado.",
    type: "article",
    url: pageUrl,
  },
};

export default function GestaoClinicaFisioterapiaPage() {
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
          <span className="font-medium text-teal-600">Gestão clínica em fisioterapia: guia completo 2026</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Gestão clínica em fisioterapia: guia completo 2026
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Entenda como estruturar uma gestão clínica eficiente na fisioterapia, com processos claros, indicadores objetivos e tecnologia para escalar qualidade assistencial.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 17 Abr 2026</span>
            <span>⏱ 9 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            Gestão clínica em fisioterapia é integrar assistência e operação com método: prontuário padronizado, agenda inteligente, indicadores e suporte tecnológico. Isso aumenta previsibilidade, produtividade e qualidade no cuidado ao paciente.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Fazer <strong>gestão clínica em fisioterapia</strong> vai muito além de preencher agenda. Envolve organizar processos, padronizar documentação, acompanhar resultados e tomar decisões com base em dados clínicos e operacionais.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Na prática profissional, uma clínica bem gerida atende melhor, reduz retrabalho e melhora experiência de paciente e equipe. Em 2026, tecnologia deixou de ser diferencial e virou base para crescimento sustentável.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/gestao-clinica-em-fisioterapia-guia-completo-2026</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/gestao-de-agenda-fisioterapia" className="text-teal-600 hover:underline">
                → Gestão de agenda na fisioterapia: menos faltas e mais previsibilidade
              </Link>
            </li>
            <li>
              <Link href="/blog/modelos-evolucao-prontuario-fisioterapeutica" className="text-teal-600 hover:underline">
                → Modelos de evolução e prontuário fisioterapêutica: guia prático
              </Link>
            </li>
            <li>
              <Link href="/blog/tendinopatia-carga-progressiva" className="text-teal-600 hover:underline">
                → Tendinopatia e carga progressiva: quando avançar, manter ou regredir
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como funciona a gestão clínica na prática</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A gestão clínica eficaz conecta três pilares: qualidade assistencial, eficiência operacional e sustentabilidade financeira. Quando um desses pilares falha, toda a operação sofre.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Padronização clínica",
              desc: "Anamnese, avaliação, evolução e plano terapêutico com estrutura clara reduzem variabilidade e aumentam consistência entre profissionais.",
              tip: "Protocolos flexíveis, com raciocínio clínico, ajudam mais do que checklists rígidos.",
            },
            {
              num: "02",
              title: "Fluxo operacional organizado",
              desc: "Agenda, confirmação de presença, comunicação e follow-up precisam de rotina definida para reduzir no-show e gargalos.",
              tip: "Pequenos ajustes de processo geram grandes ganhos de produtividade.",
            },
            {
              num: "03",
              title: "Gestão por indicadores",
              desc: "Acompanhar taxa de comparecimento, tempo de evolução, retenção e resultado funcional orienta decisões mais assertivas.",
              tip: "Sem métrica, a clínica opera por percepção; com métrica, opera por estratégia.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Pilar {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Vantagens de uma gestão clínica bem estruturada</h2>
        <p className="mb-8 leading-relaxed text-gray-700">
          Entre os principais ganhos estão maior qualidade no atendimento, melhor experiência do paciente, redução de retrabalho, previsibilidade de receita e crescimento mais saudável da operação.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Tecnologia como fator de qualidade (e não só velocidade)</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Digitalizar a clínica não é apenas “fazer mais rápido”. O objetivo é fazer melhor: centralizar informações, reduzir erros, facilitar análise de dados e melhorar tomada de decisão clínica.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">1) Prontuário eletrônico inteligente</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Com histórico acessível e padronizado, o raciocínio clínico fica mais consistente e a comunicação entre profissionais melhora.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">2) Agenda e operação com previsibilidade</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Gestão de agenda integrada ao restante da operação reduz conflitos, no-show e atrasos no fluxo de atendimento.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">3) Financeiro integrado ao clínico</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Quando o financeiro conversa com a operação clínica, a gestão deixa de ser reativa e passa a ser estratégica.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como o Kynesia eleva a gestão clínica do fisioterapeuta</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O Kynesia foi desenhado para integrar rotina clínica e gestão em um só ambiente. Na prática, isso significa menos ferramentas desconectadas, menos burocracia e mais tempo para o que realmente importa: resultado do paciente.
        </p>

        <p className="mb-5 leading-relaxed text-gray-700">
          Com prontuário eletrônico, inteligência clínica baseada em evidências, agenda inteligente e controle financeiro integrado, o fisioterapeuta ganha visão completa da operação e melhora decisões em tempo real.
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Sinais de que sua gestão precisa evoluir</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Informações clínicas espalhadas em planilhas e mensagens</li>
            <li>• Falta de padrão nas evoluções entre profissionais</li>
            <li>• Agenda lotada, mas com baixa previsibilidade de receita</li>
            <li>• Decisões sem indicadores confiáveis de desempenho</li>
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
          <h2 className="mb-4 text-2xl font-bold">Gestão clínica forte é vantagem competitiva real</h2>
          <p className="mb-4 leading-relaxed">
            Clínicas que combinam método, dados e tecnologia entregam mais qualidade com menos fricção operacional.
          </p>
          <p className="mb-4 leading-relaxed">
            Com o Kynesia, o fisioterapeuta transforma rotina complexa em fluxo inteligente, ganhando eficiência sem perder personalização clínica.
          </p>
          <p className="leading-relaxed">
            Em 2026, gestão clínica profissional não é opcional: é o caminho para crescer com consistência.
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
