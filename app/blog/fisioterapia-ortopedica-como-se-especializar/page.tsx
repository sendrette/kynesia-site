import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

const pageUrl = "https://kynesia.com.br/blog/fisioterapia-ortopedica-como-se-especializar";

const faqItems = [
  {
    question: "Quanto tempo leva para se especializar em fisioterapia ortopédica?",
    answer:
      "Depende da base prévia e da rotina de estudo, mas a evolução consistente costuma vir com plano estruturado de 12 a 24 meses entre formação, prática supervisionada e atualização contínua.",
  },
  {
    question: "Quais temas são indispensáveis na fisioterapia ortopédica?",
    answer:
      "Avaliação clínica, biomecânica, controle de carga, dor musculoesquelética, raciocínio clínico, testes ortopédicos e prescrição de exercício terapêutico são pilares essenciais.",
  },
  {
    question: "Preciso fazer pós-graduação para atuar na área?",
    answer:
      "Não é obrigatório para começar, mas uma boa pós acelera repertório e consistência clínica. O diferencial real é combinar formação formal com prática orientada por evidências.",
  },
  {
    question: "Como estudar melhor no dia a dia da clínica?",
    answer:
      "Use casos reais para guiar estudo, revise artigos e livros por temas de alta incidência e aplique protocolos com reavaliação frequente. Isso transforma estudo em resultado clínico.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fisioterapia ortopédica: como se especializar",
  description:
    "Veja como se especializar em fisioterapia ortopédica, quais estudos são essenciais, livros recomendados e dicas para evoluir na área.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  mainEntityOfPage: pageUrl,
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  image: "https://kynesia.com.br/blog/ortopedia-ombro.svg",
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
  title: "Fisioterapia ortopédica: como se especializar",
  description:
    "Veja como se especializar em fisioterapia ortopédica, quais estudos são essenciais, livros recomendados e dicas para evoluir na área.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Fisioterapia ortopédica: como se especializar",
    description:
      "Aprenda um plano prático para evoluir na fisioterapia ortopédica com estudos essenciais, leitura estratégica e aplicação clínica baseada em evidências.",
    type: "article",
    url: pageUrl,
  },
};

export default function FisioterapiaOrtopedicaPage() {
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
          <span className="font-medium text-teal-600">Fisioterapia ortopédica: como se especializar</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Ortopedia
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Fisioterapia ortopédica: como se especializar
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Veja um caminho prático para evoluir na ortopedia com estudos estratégicos, leitura de qualidade e aplicação clínica baseada em evidências.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 21 Abr 2026</span>
            <span>⏱ 9 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            Para se especializar em fisioterapia ortopédica, combine base sólida em avaliação e dor musculoesquelética, estudo contínuo de evidências, prática supervisionada e padronização de raciocínio clínico.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>fisioterapia ortopédica</strong> é uma das áreas com maior demanda clínica. Para se destacar, não basta acumular cursos: é preciso organizar um plano de desenvolvimento técnico com foco em decisão clínica e resultado funcional.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          Neste guia, você vai ver quais conhecimentos priorizar, quais livros realmente ajudam e como transformar estudo em evolução prática no consultório.
        </p>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">URL slug sugerida</p>
          <p className="mt-2 break-all text-teal-700">/blog/fisioterapia-ortopedica-como-se-especializar</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/teste-ortopedico-ombro" className="text-teal-600 hover:underline">
                → Testes ortopédicos de ombro: quais realmente ajudam na decisão clínica
              </Link>
            </li>
            <li>
              <Link href="/blog/diagnostico-diferencial-cervical-vs-ombro" className="text-teal-600 hover:underline">
                → Diagnóstico diferencial: cervical vs ombro na prática clínica
              </Link>
            </li>
            <li>
              <Link href="/blog/tendinopatia-carga-progressiva" className="text-teal-600 hover:underline">
                → Tendinopatia e carga progressiva: quando avançar, manter ou regredir
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Por onde começar na fisioterapia ortopédica</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Comece dominando fundamentos de avaliação clínica e dor musculoesquelética. Sem isso, técnicas avançadas perdem efetividade porque faltam critérios para indicar, ajustar e progredir conduta.
        </p>

        <div className="mb-8 space-y-6">
          {[
            {
              num: "01",
              title: "Avaliação clínica objetiva",
              desc: "História clínica, testes direcionados, análise funcional e hipóteses claras são a base para condutas assertivas.",
              tip: "Avaliar melhor reduz erro diagnóstico e acelera evolução do paciente.",
            },
            {
              num: "02",
              title: "Raciocínio por critérios",
              desc: "Decida conduta por irritabilidade, capacidade funcional e resposta ao movimento, não apenas por protocolo fixo.",
              tip: "Critério clínico supera receita pronta.",
            },
            {
              num: "03",
              title: "Progressão de carga",
              desc: "Treinar quando avançar, manter ou regredir é uma habilidade-chave para resultados consistentes.",
              tip: "A dose certa de carga é o que transforma tratamento em desempenho.",
            },
          ].map((item) => (
            <div key={item.num} className="rounded-lg border-l-4 border-teal-500 bg-white p-6 pl-6 pb-6 shadow-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">Passo {item.num}</p>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-4 leading-relaxed text-gray-700">{item.desc}</p>
              <div className="rounded-lg bg-teal-50 p-3 text-sm text-teal-900">
                💡 <strong>Na prática:</strong> {item.tip}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Quais estudos são essenciais</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Priorize conteúdos com impacto direto no dia a dia: avaliação musculoesquelética, biomecânica aplicada, dor, exercício terapêutico e medicina baseada em evidências.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">1) Bases de dor e neurofisiologia</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Entender dor melhora comunicação com paciente e aumenta adesão ao tratamento ativo.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">2) Biomecânica e movimento funcional</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Ler movimento com qualidade ajuda a identificar fatores de sobrecarga e construir intervenções mais precisas.
        </p>

        <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">3) Leitura crítica de evidências</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Aprender a interpretar revisões e ensaios clínicos evita adoção de modismos e melhora segurança da conduta.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Livros recomendados para evoluir na área</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Monte uma biblioteca funcional, não extensa. Priorize obras de avaliação musculoesquelética, dor, exercício terapêutico e tomada de decisão clínica. Releitura com casos reais traz mais resultado do que leitura superficial de muitos títulos.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Dicas práticas para acelerar sua especialização</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Estude por blocos temáticos semanais, registre decisões clínicas, revise desfechos e discuta casos com colegas. Esse ciclo de prática-reflexão encurta curva de aprendizado.
        </p>

        <div className="mb-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-red-700">⚠ Erros comuns na formação</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Fazer muitos cursos sem aplicar em casos reais</li>
            <li>• Basear conduta apenas em técnica, sem critérios de progressão</li>
            <li>• Ignorar reavaliação funcional ao longo do tratamento</li>
            <li>• Atualizar-se pouco em evidências científicas recentes</li>
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
          <h2 className="mb-4 text-2xl font-bold">Especialização sólida é construída com método</h2>
          <p className="mb-4 leading-relaxed">
            Evoluir na fisioterapia ortopédica exige consistência entre estudo, prática e reavaliação. O profissional que estrutura esse processo cresce mais rápido e com mais segurança clínica.
          </p>
          <p className="mb-4 leading-relaxed">
            Com foco em evidência e aplicação prática, você aumenta confiança na tomada de decisão e entrega melhores resultados para seus pacientes.
          </p>
          <p className="leading-relaxed">
            Especialização real acontece quando conhecimento vira conduta eficaz.
          </p>
        </div>

        <PatientCTA />


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
