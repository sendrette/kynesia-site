import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/indicadores-de-gestao-clinica-em-fisioterapia";

const faqItems = [
  {
    question: "Quais indicadores são mais importantes na gestão clínica?",
    answer:
      "Os principais são taxa de comparecimento, taxa de evolução funcional, retenção, tempo médio de tratamento, produtividade por profissional e previsibilidade de agenda.",
  },
  {
    question: "Preciso medir muitos indicadores para começar?",
    answer:
      "Não. Comece com poucos indicadores realmente úteis. O ideal é medir bem o que impacta decisão clínica e operação antes de ampliar a análise.",
  },
  {
    question: "Indicadores ajudam no ranqueamento do Google?",
    answer:
      "Indiretamente, sim, porque reforçam autoridade temática e podem ser usados como base para conteúdo útil, consistente e mais profundo sobre gestão clínica para fisioterapia.",
  },
  {
    question: "Como o Kynesia organiza indicadores?",
    answer:
      "O Kynesia ajuda a integrar prontuário, agenda e financeiro, facilitando visualização de dados relevantes para a gestão clínica e para a tomada de decisão.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Indicadores de gestão clínica em fisioterapia: o que acompanhar",
  description:
    "Veja quais indicadores de gestão clínica em fisioterapia acompanham melhor a performance da clínica e ajudam na tomada de decisão.",
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
  title: "Indicadores de gestão clínica em fisioterapia: o que acompanhar",
  description:
    "Veja quais indicadores de gestão clínica em fisioterapia acompanham melhor a performance da clínica e ajudam na tomada de decisão.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Indicadores de gestão clínica em fisioterapia: o que acompanhar",
    description:
      "Aprenda a monitorar indicadores que melhoram gestão clínica, previsibilidade e qualidade assistencial na fisioterapia.",
    type: "article",
    url: pageUrl,
  },
};

export default function IndicadoresGestaoClinicaPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600"><div className="mx-auto max-w-2xl"><Link href="/blog" className="text-teal-600 hover:underline">Blog</Link>{" / "}<span className="font-medium text-teal-600">Indicadores de gestão clínica em fisioterapia</span></div></div>
      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20"><div className="mx-auto max-w-2xl"><span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">Gestão Clínica</span><h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Indicadores de gestão clínica em fisioterapia: o que acompanhar</h1><p className="mb-6 text-lg text-gray-600">Indicadores certos mostram onde a clínica está crescendo e onde precisa ajustar processos para ganhar eficiência e previsibilidade.</p><div className="flex flex-wrap gap-4 text-sm text-gray-500"><span>📅 29 Abr 2026</span><span>⏱ 8 min de leitura</span><span>✍️ Equipe Kynesia</span></div></div></header>
      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6"><p className="text-gray-900">Indicadores de gestão clínica em fisioterapia transformam percepções em decisão. Sem medir, fica difícil saber se a clínica está evoluindo de verdade.</p></div>
        <p className="mb-5 leading-relaxed text-gray-700">A clínica pode estar cheia e ainda assim operar mal. É por isso que números como comparecimento, retenção e produtividade são tão importantes para entender a saúde real do negócio.</p>
        <p className="mb-8 leading-relaxed text-gray-700">Este artigo ajuda você a escolher indicadores úteis, simples de acompanhar e alinhados ao crescimento sustentável da fisioterapia.</p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6"><h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3><ul className="space-y-2 text-sm"><li><Link href="/blog/gestao-clinica-para-fisioterapia" className="text-teal-600 hover:underline">→ Gestão clínica para fisioterapia: como organizar e crescer</Link></li><li><Link href="/blog/prontuario-eletronico-para-fisioterapia-como-organizar-a-clinica" className="text-teal-600 hover:underline">→ Prontuário eletrônico para fisioterapia: como organizar a clínica</Link></li><li><Link href="/blog/gestao-de-agenda-fisioterapia" className="text-teal-600 hover:underline">→ Gestão de agenda na fisioterapia: menos faltas e mais previsibilidade</Link></li></ul></div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quais indicadores acompanhar primeiro?</h2>
        <div className="mb-8 space-y-6">{[
          { num: "01", title: "Taxa de comparecimento", desc: "Mostra o percentual de pacientes que realmente comparecem às sessões agendadas.", tip: "É um dos indicadores mais rápidos para medir impacto de comunicação e agenda." },
          { num: "02", title: "Retenção do paciente", desc: "Avalia quantos pacientes permanecem no plano terapêutico até a alta ou meta clínica.", tip: "Retenção alta costuma indicar boa percepção de valor e continuidade do cuidado." },
          { num: "03", title: "Tempo médio de tratamento", desc: "Ajuda a entender a duração dos casos e se há evolução mais rápida ou mais lenta do que o esperado.", tip: "Use esse dado para comparar perfis de pacientes e protocolos diferentes." },
          { num: "04", title: "Produtividade por profissional", desc: "Mostra quantos atendimentos, retornos e evoluções cada profissional realiza em determinado período.", tip: "Produtividade deve ser lida junto com qualidade, não isoladamente." },
        ].map((item) => (<div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm"><p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Indicador {item.num}</p><h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3><p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p><div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Na prática:</strong> {item.tip}</div></div>))}</div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como usar indicadores sem complicar a rotina</h2>
        <p className="mb-5 leading-relaxed text-gray-700">Não transforme a gestão em excesso de planilhas. Escolha poucos indicadores, defina frequência de análise e faça revisão semanal ou quinzenal com a equipe.</p>
        <p className="mb-8 leading-relaxed text-gray-700">O ideal é que os dados sejam visíveis no fluxo da clínica, para orientar decisões de agenda, comunicação, retenção e ajuste de processos.</p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como o Kynesia apoia a análise</h2>
        <p className="mb-5 leading-relaxed text-gray-700">Com o Kynesia, a clínica centraliza prontuário, agenda e financeiro, o que facilita enxergar padrões e transformar informação em ação.</p>
        <p className="mb-8 leading-relaxed text-gray-700">Isso ajuda a construir uma gestão clínica mais inteligente, com decisões baseadas em dados e não apenas em impressão subjetiva.</p>

        <section className="mt-12"><h2 className="text-2xl font-bold text-gray-900">Perguntas frequentes</h2><div className="mt-6 space-y-3">{faqItems.map((faq) => (<details key={faq.question} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50"><summary className="font-semibold text-gray-900">{faq.question}</summary><p className="mt-3 leading-relaxed text-gray-700">{faq.answer}</p></details>))}</div></section>
        <div className="mb-8 mt-12 rounded-2xl bg-gray-900 p-8 text-white"><h2 className="mb-4 text-2xl font-bold">Medir bem é melhorar a clínica</h2><p className="leading-relaxed">Indicadores certos mostram o que precisa ser mantido, o que precisa ser corrigido e onde a clínica pode crescer com mais segurança.</p></div>
      </article>
    </main>
  );
}
