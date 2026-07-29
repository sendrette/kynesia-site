import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

export const metadata: Metadata = {
  title: "Evolução fisioterapêutica: como fazer corretamente",
  description:
    "Aprenda como fazer uma evolução fisioterapêutica completa, organizada e profissional para melhorar sua prática clínica.",
  openGraph: {
    title: "Evolução fisioterapêutica: como fazer corretamente",
    description:
      "Guia prático para registrar evoluções fisioterapêuticas bem estruturadas que melhoram documentação e qualidade do cuidado.",
    type: "article",
    url: "https://kynesia.com.br/blog/evolucao-fisioterapeutica-como-fazer-corretamente",
  },
};

const articleLdJson = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Evolução fisioterapêutica: como fazer corretamente",
  description:
    "Aprenda como fazer uma evolução fisioterapêutica completa, organizada e profissional para melhorar sua prática clínica.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  datePublished: "2026-05-13",
  dateModified: "2026-05-13",
  mainEntityOfPage: "https://kynesia.com.br/blog/evolucao-fisioteraputica-como-fazer-corretamente",
};

export default function EvolucaoFisioterapicaPage() {
  return (
    <main className="bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLdJson) }} />

      <SiteHeader />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-6xl">
          <Link href="/blog" className="text-teal-600 hover:underline">Blog</Link>
          {" / "}
          <span className="font-medium text-teal-600">Evolução fisioterapêutica</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Avaliação
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Evolução fisioterapêutica: como fazer corretamente</h1>

          <p className="mb-6 text-lg text-gray-600">Aprenda como fazer uma evolução fisioterapêutica completa, organizada e profissional para melhorar sua prática clínica.</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 13 Mai 2026</span>
            <span>Leitura: 6 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900"><strong>O que é evolução fisioterapêutica?</strong> Evolução é o registro periódico da resposta do paciente ao tratamento, incluindo sinais, sintomas, medidas de função e plano de progressão. Um registro claro orienta decisões e comunicação entre equipe.</p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">Uma evolução bem feita documenta alterações, justifica intervenções e cria histórico que permite análise da efetividade do tratamento.</p>

        <p className="mb-8 leading-relaxed text-gray-700">Neste guia, mostramos estrutura prática, itens essenciais a registrar e exemplos que ajudam você a manter padrão profissional e organizacional.</p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 font-semibold text-gray-900">Estrutura recomendada</h3>
          <p className="text-sm text-gray-700">Siga uma sequência: resumo do atendimento, sinais e sintomas, medidas objetivas, intervenção aplicada, resposta imediata e plano para próxima sessão.</p>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Itens essenciais em uma evolução</h2>
        <ul className="mb-8 space-y-3 text-gray-700">
          <li>- Data e hora do atendimento</li>
          <li>- Queixa principal e evolução desde a última sessão</li>
          <li>- Medidas objetivas (amplitude, força, PROMs)</li>
          <li>- Intervenção aplicada e parâmetros de dose</li>
          <li>- Resposta imediata ao tratamento</li>
          <li>- Plano e metas para próxima sessão</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Exemplo prático de evolução</h2>
        <p className="mb-5 leading-relaxed text-gray-700">Descrevemos um exemplo conciso que pode ser adaptado ao seu prontuário: resumo objetivo, medidas comparativas e plano de progressão com critério de avanço.</p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h3 className="mb-3 font-bold text-gray-900">Modelo de evolução (resumido)</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Resumo:</strong> Paciente relata redução da dor de 6 para 4/10 desde última sessão.</li>
            <li><strong>Objetivo:</strong> Melhorar amplitude de flexão cervical em 10 graus.</li>
            <li><strong>Intervenção:</strong> Mobilização articular + alongamento com 3 séries de 30s.</li>
            <li><strong>Resposta:</strong> Melhora subjetiva e aumento de 5 graus na amplitude imediata.</li>
            <li><strong>Plano:</strong> Repetir progressão de mobilidade e iniciar exercício de controle motor.</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Boas práticas para registros profissionais</h2>
        <p className="mb-5 leading-relaxed text-gray-700">Seja objetivo, use linguagem clínica padronizada, registre medidas quando possível e evite termos vagos. Bons registros facilitam auditoria e continuidade do cuidado.</p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como integrar evolução ao prontuário eletrônico</h2>
        <p className="mb-5 leading-relaxed text-gray-700">Use templates, campos obrigatórios e checklist para garantir que as evoluções contenham informações essenciais. Automatize medidas e fluxo de trabalho para reduzir tempo de registro.</p>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">Perguntas frequentes sobre evolução fisioterapêutica</h2>
        <div className="mb-8 space-y-3">
          {[
            { q: "Com que frequência devo registrar evolução?", a: "Registre evolução em todas as sessões ou conforme protocolo da clínica; ao menos semanalmente em programas prolongados." },
            { q: "O que é essencial registrar?", a: "Medidas objetivas, resposta ao tratamento, intervenções aplicadas e plano para continuidade." },
            { q: "Como medir progresso de forma objetiva?", a: "Use PROMs validados, goniometria, testes funcionais e escalas de dor padronizadas." },
            { q: "Evolução pode ser breve?", a: "Sim. O registro deve ser objetivo e direto, suficiente para guiar a próxima sessão e documentar resposta." },
          ].map((faq) => (
            <details key={faq.q} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <summary className="font-semibold text-gray-900">{faq.q}</summary>
              <p className="mt-3 leading-relaxed text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mb-8 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Registros de qualidade melhoram cuidado e gestão</h2>
          <p className="mb-4 leading-relaxed text-white">Boas evoluções ajudam a medir efeito, ajustar planos e comprovar a qualidade do serviço prestado.</p>
          <p className="leading-relaxed text-white">Invista em padrão e em processos que tornem o registro fácil e informativo.</p>
        </div>

        <PatientCTA />


        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-gray-900">Sobre o autor</h3>
          <p className="text-gray-700">Conteúdo produzido pela Equipe Kynesia com foco em avaliação clínica e documentação profissional. Use este modelo para padronizar suas evoluções e melhorar a qualidade assistencial.</p>
        </div>
      </article>
    </main>
  );
}
