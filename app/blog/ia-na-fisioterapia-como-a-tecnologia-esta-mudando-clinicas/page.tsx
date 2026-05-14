import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

const pageUrl = "https://kynesia.com.br/blog/ia-na-fisioterapia-como-a-tecnologia-esta-mudando-clinicas";

const faqItems = [
  {
    question: "IA na fisioterapia substitui o profissional?",
    answer:
      "Não. A IA apoia o fisioterapeuta com organização de dados, sugestões e automações, mas a decisão clínica, a comunicação e a conduta continuam sendo responsabilidades do profissional.",
  },
  {
    question: "Onde a IA gera mais ganho na rotina da clínica?",
    answer:
      "Os maiores ganhos costumam aparecer na documentação clínica, gestão de agenda, monitoramento de indicadores e padronização de processos operacionais.",
  },
  {
    question: "É possível usar IA mantendo segurança e LGPD?",
    answer:
      "Sim. Com processos adequados de segurança, controle de acesso, consentimento e governança de dados, a clínica pode usar IA de forma ética e alinhada à LGPD.",
  },
  {
    question: "Como começar a implementar IA na fisioterapia?",
    answer:
      "Comece por um problema específico, como reduzir tempo de registro ou diminuir faltas. Defina indicadores simples, teste em pequena escala e ajuste o fluxo antes de expandir.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IA na fisioterapia: como a tecnologia está mudando clínicas",
  description:
    "Entenda como a inteligência artificial na fisioterapia está transformando avaliações, gestão clínica e produtividade profissional.",
  author: { "@type": "Organization", name: "Equipe Kynesia" },
  publisher: { "@type": "Organization", name: "Kynesia" },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-05-14",
  dateModified: "2026-05-14",
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
  title: "IA na fisioterapia: como a tecnologia está mudando clínicas",
  description:
    "Entenda como a inteligência artificial na fisioterapia está transformando avaliações, gestão clínica e produtividade profissional.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "IA na fisioterapia: como a tecnologia está mudando clínicas",
    description:
      "Entenda como a inteligência artificial na fisioterapia está transformando avaliações, gestão clínica e produtividade profissional.",
    url: pageUrl,
    type: "article",
  },
};

export default function IaNaFisioterapiaPage() {
  return (
    <main className="bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-6xl">
          <Link href="/blog" className="text-teal-600 hover:underline">Blog</Link>
          {" / "}
          <span className="font-medium text-teal-600">IA na fisioterapia</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-14 md:py-16">
        <div className="mx-auto max-w-3xl">
          <span className="mb-5 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica
          </span>

          <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            IA na fisioterapia: como a tecnologia está mudando clínicas
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            Entenda como a inteligência artificial na fisioterapia está transformando avaliações, gestão clínica e produtividade profissional.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 14 Mai 2026</span>
            <span>Leitura: 8 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-14">
        <p className="mb-6 leading-relaxed text-gray-700">
          A inteligência artificial já faz parte do dia a dia de muitas clínicas, mesmo quando isso não está explícito. Da organização da agenda ao apoio na documentação, a tecnologia vem reduzindo tarefas repetitivas e liberando tempo para o que mais importa: o cuidado com o paciente.
        </p>

        <div className="mb-10 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Por que falar de IA na fisioterapia agora?</h2>
          <p className="leading-relaxed text-gray-700">
            Porque clínicas estão sendo pressionadas por mais produtividade, melhor experiência do paciente e maior previsibilidade financeira. A IA surge como alavanca para acelerar processos sem comprometer qualidade clínica.
          </p>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-gray-900">1) Avaliação clínica mais estruturada</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Ferramentas com IA ajudam a organizar anamnese, hipóteses e evolução de forma padronizada. Isso reduz variabilidade entre profissionais, melhora a comunicação da equipe e facilita revisão de caso.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-gray-900">2) Documentação mais rápida e consistente</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Um dos maiores gargalos operacionais da clínica é registrar tudo com qualidade sem aumentar o tempo administrativo. Com IA, é possível acelerar registros, manter histórico mais limpo e ganhar rastreabilidade para auditoria e tomada de decisão.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-gray-900">3) Gestão clínica orientada por dados</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Quando a clínica acompanha indicadores como faltas, adesão ao plano terapêutico, taxa de retorno e produtividade por agenda, a gestão deixa de ser reativa. A IA pode ajudar a identificar padrões e apontar onde agir primeiro.
        </p>

        <div className="mb-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 text-lg font-semibold text-gray-900">Exemplo prático de ganho operacional</h3>
          <p className="leading-relaxed text-gray-700">
            Se a clínica reduz apenas alguns minutos por atendimento em tarefas administrativas, o impacto semanal já é relevante. Em escala, isso significa mais capacidade de atendimento com melhor padrão de execução.
          </p>
        </div>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-gray-900">4) Experiência do paciente mais fluida</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          A tecnologia também melhora a jornada do paciente: lembretes inteligentes, comunicação mais clara, histórico organizado e acompanhamento da evolução. Resultado: maior percepção de valor e melhor adesão ao tratamento.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-gray-900">5) O que muda no papel do fisioterapeuta</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Com IA, o fisioterapeuta tende a dedicar menos energia a tarefas mecânicas e mais atenção ao raciocínio clínico, à educação em saúde e ao vínculo terapêutico. A tecnologia potencializa o trabalho humano; não substitui o julgamento profissional.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-gray-900">Como implementar IA com segurança</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-gray-700">
          <li>Comece pequeno: escolha um processo crítico para testar.</li>
          <li>Defina métricas claras de sucesso (tempo, qualidade, adesão, no-show).</li>
          <li>Treine a equipe e padronize uso no fluxo diário.</li>
          <li>Garanta segurança, privacidade e conformidade com LGPD.</li>
          <li>Revise resultados periodicamente e ajuste o processo.</li>
        </ul>

        <h2 className="mb-4 mt-10 text-2xl font-bold text-gray-900">Perguntas frequentes</h2>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <details key={item.question} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <summary className="font-semibold text-gray-900">{item.question}</summary>
              <p className="mt-3 leading-relaxed text-gray-700">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Conclusão</h2>
          <p className="leading-relaxed text-white">
            A IA na fisioterapia já é uma realidade prática para clínicas que querem escalar qualidade sem perder controle da operação. O melhor caminho é implementar com foco, dados e processo, mantendo sempre o paciente no centro das decisões.
          </p>
        </div>
      </article>
    </main>
  );
}
