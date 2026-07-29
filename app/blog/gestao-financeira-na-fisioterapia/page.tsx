import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/gestao-financeira-na-fisioterapia";

const faqItems = [
  {
    question: "Por que a gestão financeira é importante na fisioterapia?",
    answer:
      "Porque ela garante previsibilidade de caixa, ajuda a identificar gargalos da operação e permite decisões mais seguras sobre crescimento e investimento.",
  },
  {
    question: "O que deve ser acompanhado no financeiro da clínica?",
    answer:
      "Receita recorrente, inadimplência, ticket médio, custo fixo, ocupação de agenda e margem de contribuição são métricas muito úteis para gestão.",
  },
  {
    question: "Financeiro e gestão clínica devem andar juntos?",
    answer:
      "Sim. Quando financeiro e operação clínica se integram, a clínica entende melhor a relação entre atendimento, produtividade e resultado econômico.",
  },
  {
    question: "O Kynesia ajuda no financeiro?",
    answer:
      "O Kynesia integra gestão clínica e financeira em um único fluxo, facilitando organização, acompanhamento e tomada de decisão com mais clareza.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Gestão financeira na fisioterapia: como ter previsibilidade",
  description:
    "Veja como organizar a gestão financeira na fisioterapia para ganhar previsibilidade, reduzir inadimplência e crescer com segurança.",
  author: { "@type": "Organization", name: "Equipe Kynesia" },
  publisher: { "@type": "Organization", name: "Kynesia" },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  image: "https://kynesia.com.br/blog/gestao-clinica.svg",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export const metadata: Metadata = {
  title: "Gestão financeira na fisioterapia: como ter previsibilidade",
  description:
    "Veja como organizar a gestão financeira na fisioterapia para ganhar previsibilidade, reduzir inadimplência e crescer com segurança.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Gestão financeira na fisioterapia: como ter previsibilidade",
    description:
      "Aprenda a integrar financeiro e operação clínica para ter mais previsibilidade, controle e crescimento sustentável.",
    type: "article",
    url: pageUrl,
  },
};

export default function GestaoFinanceiraFisioterapiaPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600"><div className="mx-auto max-w-2xl"><Link href="/blog" className="text-teal-600 hover:underline">Blog</Link>{" / "}<span className="font-medium text-teal-600">Gestão financeira na fisioterapia</span></div></div>
      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20"><div className="mx-auto max-w-2xl"><span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">Gestão Clínica</span><h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Gestão financeira na fisioterapia: como ter previsibilidade</h1><p className="mb-6 text-lg text-gray-600">Organize o financeiro da clínica para crescer com segurança, controlar custos e conectar números à operação clínica.</p><div className="flex flex-wrap gap-4 text-sm text-gray-500"><span>📅 29 Abr 2026</span><span>⏱ 8 min de leitura</span><span>✍️ Equipe Kynesia</span></div></div></header>
      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6"><p className="text-gray-900">Gestão financeira na fisioterapia é acompanhar receita, custos, inadimplência e ocupação para entender o real desempenho da clínica. Sem isso, o crescimento acontece no escuro.</p></div>
        <p className="mb-5 leading-relaxed text-gray-700">A clínica pode atender bem e ainda assim ter dificuldade financeira. Isso acontece quando não existe previsibilidade de caixa, controle de custos ou análise do impacto da agenda sobre o resultado.</p>
        <p className="mb-8 leading-relaxed text-gray-700">Unir financeiro e gestão clínica é a forma mais segura de crescer com consistência, mantendo qualidade do atendimento e saúde do negócio.</p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6"><h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3><ul className="space-y-2 text-sm"><li><Link href="/blog/gestao-clinica-para-fisioterapia" className="text-teal-600 hover:underline">→ Gestão clínica para fisioterapia: como organizar e crescer</Link></li><li><Link href="/blog/gestao-clinica-em-fisioterapia-guia-completo-2026" className="text-teal-600 hover:underline">→ Gestão clínica em fisioterapia: guia completo 2026</Link></li><li><Link href="/blog/indicadores-de-gestao-clinica-em-fisioterapia" className="text-teal-600 hover:underline">→ Indicadores de gestão clínica em fisioterapia: o que acompanhar</Link></li></ul></div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quais números acompanhar primeiro?</h2>
        <div className="mb-8 space-y-6">{[
          { num: "01", title: "Receita recorrente", desc: "Mostra quanto a clínica entra de forma previsível por período.", tip: "Ajuda a planejar expansão e novos investimentos." },
          { num: "02", title: "Inadimplência", desc: "Aponta valores em aberto que afetam o caixa e a saúde financeira.", tip: "Reduzir inadimplência melhora liquidez rapidamente." },
          { num: "03", title: "Ticket médio", desc: "Permite entender o valor médio gerado por paciente ao longo do tratamento.", tip: "Útil para avaliar mix de serviços e percepção de valor." },
          { num: "04", title: "Ocupação de agenda", desc: "Relaciona volume de agenda com capacidade real da clínica.", tip: "Ocupação sem controle pode esconder ociosidade ou excesso de custos." },
        ].map((item) => (<div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm"><p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Métrica {item.num}</p><h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3><p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p><div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Na prática:</strong> {item.tip}</div></div>))}</div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como conectar financeiro e operação</h2>
        <p className="mb-5 leading-relaxed text-gray-700">O financeiro não pode ficar separado do atendimento. O ideal é cruzar dados de agenda, comparecimento, plano terapêutico e faturamento para enxergar a realidade da clínica.</p>
        <p className="mb-8 leading-relaxed text-gray-700">Com essa visão integrada, a clínica consegue tomar decisões mais inteligentes sobre precificação, organização de horários e expansão.</p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como o Kynesia ajuda</h2>
        <p className="mb-5 leading-relaxed text-gray-700">O Kynesia reúne gestão clínica e financeira no mesmo ambiente, evitando dispersão de dados e facilitando análise de resultado.</p>
        <p className="mb-8 leading-relaxed text-gray-700">Isso melhora previsibilidade, reduz retrabalho e fortalece a estratégia de crescimento da clínica.</p>

        <section className="mt-12"><h2 className="text-2xl font-bold text-gray-900">Perguntas frequentes</h2><div className="mt-6 space-y-3">{faqItems.map((faq) => (<details key={faq.question} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50"><summary className="font-semibold text-gray-900">{faq.question}</summary><p className="mt-3 leading-relaxed text-gray-700">{faq.answer}</p></details>))}</div></section>
        <div className="mb-8 mt-12 rounded-2xl bg-gray-900 p-8 text-white"><h2 className="mb-4 text-2xl font-bold">Gestão financeira é parte da gestão clínica</h2><p className="leading-relaxed">Quem quer crescer com segurança precisa entender números, não apenas agenda. O financeiro mostra a qualidade real da operação.</p></div>
      <PatientCTA />

      </article>
    </main>
  );
}
