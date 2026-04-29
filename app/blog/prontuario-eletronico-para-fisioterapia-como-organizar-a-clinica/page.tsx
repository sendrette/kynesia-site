import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/prontuario-eletronico-para-fisioterapia-como-organizar-a-clinica";

const faqItems = [
  {
    question: "O que um prontuário eletrônico para fisioterapia precisa ter?",
    answer:
      "Ele precisa organizar anamnese, avaliação, evolução, objetivos, conduta e histórico clínico de forma segura e fácil de consultar, além de permitir padronização da equipe.",
  },
  {
    question: "Prontuário eletrônico ajuda na gestão clínica?",
    answer:
      "Sim. Um prontuário bem estruturado melhora rastreabilidade, reduz retrabalho e fortalece decisões baseadas em dados, integrando assistência e gestão.",
  },
  {
    question: "Como evitar prontuário desorganizado?",
    answer:
      "Use campos padronizados, sequência clínica fixa, linguagem objetiva e um sistema único para registrar e revisar a evolução do paciente ao longo do tratamento.",
  },
  {
    question: "O Kynesia serve como prontuário eletrônico?",
    answer:
      "Sim. O Kynesia centraliza prontuário, agenda, financeiro e inteligência clínica em um fluxo único, melhorando organização e produtividade da clínica.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prontuário eletrônico para fisioterapia: como organizar a clínica",
  description:
    "Veja como usar prontuário eletrônico para fisioterapia para organizar a clínica, padronizar registros e melhorar a gestão clínica.",
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
  title: "Prontuário eletrônico para fisioterapia: como organizar a clínica",
  description:
    "Veja como usar prontuário eletrônico para fisioterapia para organizar a clínica, padronizar registros e melhorar a gestão clínica.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Prontuário eletrônico para fisioterapia: como organizar a clínica",
    description:
      "Aprenda a estruturar prontuário eletrônico para fisioterapia e elevar a organização da clínica com mais padrão e segurança.",
    type: "article",
    url: pageUrl,
  },
};

export default function ProntuarioEletronicoFisioterapiaPage() {
  return (
    <main className="bg-white text-gray-900">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600"><div className="mx-auto max-w-2xl"><Link href="/blog" className="text-teal-600 hover:underline">Blog</Link>{" / "}<span className="font-medium text-teal-600">Prontuário eletrônico para fisioterapia</span></div></div>
      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20"><div className="mx-auto max-w-2xl"><span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">Gestão Clínica</span><h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Prontuário eletrônico para fisioterapia: como organizar a clínica</h1><p className="mb-6 text-lg text-gray-600">Um prontuário eletrônico bem estruturado melhora a organização da clínica, dá segurança ao raciocínio clínico e fortalece a gestão.</p><div className="flex flex-wrap gap-4 text-sm text-gray-500"><span>📅 29 Abr 2026</span><span>⏱ 8 min de leitura</span><span>✍️ Equipe Kynesia</span></div></div></header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6"><p className="text-gray-900">O prontuário eletrônico para fisioterapia não é só um registro. Ele é a base da continuidade do cuidado, da comunicação entre profissionais e da gestão clínica de alta qualidade.</p></div>
        <p className="mb-5 leading-relaxed text-gray-700">Quando o prontuário é padronizado, o fisioterapeuta consegue consultar a história do paciente com rapidez, identificar evolução e tomar decisões mais confiantes. Isso reduz erros e retrabalho.</p>
        <p className="mb-8 leading-relaxed text-gray-700">Se o objetivo é crescer com previsibilidade, o prontuário precisa conversar com agenda, financeiro e indicadores. É aí que a gestão deixa de ser improvisada e passa a ser estratégica.</p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6"><h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3><ul className="space-y-2 text-sm"><li><Link href="/blog/gestao-clinica-para-fisioterapia" className="text-teal-600 hover:underline">→ Gestão clínica para fisioterapia: como organizar e crescer</Link></li><li><Link href="/blog/modelos-evolucao-prontuario-fisioterapeutica" className="text-teal-600 hover:underline">→ Modelos de evolução e prontuário fisioterapêutica: guia prático</Link></li><li><Link href="/blog/software-para-fisioterapia-como-escolher-o-melhor" className="text-teal-600 hover:underline">→ Software para fisioterapia: como escolher o melhor</Link></li></ul></div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como estruturar um prontuário eletrônico</h2>
        <div className="mb-8 space-y-6">{[
          { num: "01", title: "Anamnese padronizada", desc: "Use campos consistentes para queixa, história da dor, antecedentes e objetivos funcionais.", tip: "Perguntas fixas reduzem lacunas importantes na primeira consulta." },
          { num: "02", title: "Avaliação física objetiva", desc: "Registre testes, achados e medidas de forma comparável entre sessões.", tip: "Comparabilidade é essencial para avaliar resposta ao tratamento." },
          { num: "03", title: "Evolução clínica clara", desc: "Documente mudanças relevantes, resposta aos exercícios e próximos passos com objetividade.", tip: "Evolução boa é a que ajuda a decidir a próxima sessão." },
          { num: "04", title: "Plano terapêutico visível", desc: "Defina metas, condutas e critérios de progressão para que a equipe siga a mesma direção.", tip: "Metas claras aumentam adesão do paciente e da equipe." },
        ].map((item) => (<div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm"><p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Etapa {item.num}</p><h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3><p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p><div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">💡 <strong>Dica prática:</strong> {item.tip}</div></div>))}</div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Erros que comprometem o prontuário</h2>
        <ul className="mb-8 space-y-2 leading-relaxed text-gray-700"><li>• Texto longo demais e pouco objetivo</li><li>• Registro sem padrão entre profissionais</li><li>• Falta de ligação entre avaliação e conduta</li><li>• Informações importantes espalhadas em lugares diferentes</li></ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como o Kynesia ajuda</h2>
        <p className="mb-5 leading-relaxed text-gray-700">O Kynesia centraliza prontuário eletrônico, agenda e gestão clínica em um único fluxo, deixando o atendimento mais organizado e o acompanhamento muito mais confiável.</p>
        <p className="mb-8 leading-relaxed text-gray-700">Com isso, a clínica ganha padrão, velocidade e clareza na tomada de decisão, o que ajuda diretamente no crescimento sustentável.</p>

        <section className="mt-12"><h2 className="text-2xl font-bold text-gray-900">Perguntas frequentes</h2><div className="mt-6 space-y-3">{faqItems.map((faq) => (<details key={faq.question} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50"><summary className="font-semibold text-gray-900">{faq.question}</summary><p className="mt-3 leading-relaxed text-gray-700">{faq.answer}</p></details>))}</div></section>

        <div className="mb-8 mt-12 rounded-2xl bg-gray-900 p-8 text-white"><h2 className="mb-4 text-2xl font-bold">Prontuário eletrônico é base de gestão</h2><p className="mb-4 leading-relaxed">Quem quer escalar a clínica precisa tratar prontuário como ativo estratégico. O dado clínico bem organizado melhora cuidado e gestão ao mesmo tempo.</p><p className="leading-relaxed">Quanto mais claro o histórico, melhor a decisão clínica.</p></div>
      </article>
    </main>
  );
}
