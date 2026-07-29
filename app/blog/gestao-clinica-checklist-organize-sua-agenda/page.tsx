import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PatientCTA from "../../components/PatientCTA";

export const metadata: Metadata = {
  title: "Gestão clínica para fisioterapia: checklist prático para otimizar agenda e operação",
  description:
    "Checklist prático para gestão clínica na fisioterapia: otimize agenda, reduza faltas, aumente produtividade e melhore a experiência do paciente.",
  openGraph: {
    title: "Gestão clínica para fisioterapia: checklist prático para otimizar agenda e operação",
    description:
      "Passo a passo e checklist para melhorar gestão de agenda, reduzir no-show e tornar a operação da clínica mais previsível.",
    type: "article",
    url: "https://kynesia.com.br/blog/gestao-clinica-checklist-organize-sua-agenda",
  },
};

const articleLdJson = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Gestão clínica para fisioterapia: checklist prático para otimizar agenda e operação",
  description:
    "Checklist prático para gestão clínica na fisioterapia: otimize agenda, reduza faltas, aumente produtividade e melhore a experiência do paciente.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  datePublished: "2026-05-14",
  dateModified: "2026-05-14",
  mainEntityOfPage: "https://kynesia.com.br/blog/gestao-clinica-checklist-organize-sua-agenda",
};

export default function GestaoClinicaChecklistPage() {
  return (
    <main className="bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLdJson) }} />

      <SiteHeader />

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-6xl">
          <Link href="/blog" className="text-teal-600 hover:underline">Blog</Link>
          {" / "}
          <span className="font-medium text-teal-600">Gestão Clínica</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Gestão clínica para fisioterapia: checklist prático para otimizar agenda e operação
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Checklist prático para gestão clínica na fisioterapia: otimize agenda, reduza faltas, aumente produtividade e melhore a experiência do paciente.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Data: 14 Mai 2026</span>
            <span>Leitura: 8 min</span>
            <span>Autor: Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>Por que um checklist de gestão clínica?</strong> A gestão de uma clínica de fisioterapia depende de processos consistentes. Um checklist ajuda a padronizar rotinas, reduzir faltas e tornar a operação previsível.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          Este checklist reúne ações práticas e métricas para organizar a agenda, melhorar confirmação de consultas, otimizar ocupação e estruturar comunicação com o paciente.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Checklist prático de gestão e agenda</h2>
        <div className="mb-8 space-y-4">
          {[
            "Defina durações padrão por tipo de atendimento",
            "Implemente lembretes automáticos em D-1 e D-0",
            "Tenha política clara de atrasos, faltas e remarcações",
            "Crie blocos de encaixe para reduzir tempo ocioso",
            "Registre motivo de falta para ações corretivas",
            "Use lista de espera ativa para preenchimento rápido",
            "Padronize templates no prontuário para reduzir tempo de registro",
            "Monitore taxa de ocupação, faltas e remarcações semanalmente",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
              ✓ {item}
            </div>
          ))}
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Fluxo recomendado para confirmação de consultas</h2>
        <p className="mb-5 leading-relaxed text-gray-700">Um fluxo simples e repetível melhora a taxa de comparecimento. Sugerimos: confirmação no agendamento, lembrete D-1 com opção de remarcar e lembrete D-0 (2 horas) com botão de confirmação.</p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como medir sucesso</h2>
        <p className="mb-5 leading-relaxed text-gray-700">Acompanhe indicadores-chave: taxa de ocupação, taxa de faltas, tempo médio de preenchimento de horário e taxa de conclusão de plano terapêutico. Métricas mostram onde agir.</p>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">Perguntas frequentes sobre gestão de agenda</h2>
        <div className="mb-8 space-y-3">
          {[
            { q: "Qual lembrete funciona melhor?", a: "WhatsApp tende a ter alta taxa de resposta, mas respeite canal preferido do paciente." },
            { q: "Como reduzir faltas em horários de pico?", a: "Analise dados por turno e implemente contatos proativos para pacientes com histórico de falta." },
            { q: "Vale oferecer incentivo para presença?", a: "Incentivos eventuais podem funcionar, mas educação sobre importância do tratamento é mais sustentável." },
          ].map((faq) => (
            <details key={faq.q} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <summary className="font-semibold text-gray-900">{faq.q}</summary>
              <p className="mt-3 leading-relaxed text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mb-8 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Gestão consistente gera resultados consistentes</h2>
          <p className="mb-4 leading-relaxed">A disciplina operacional reduz falhas, aumenta previsibilidade e melhora o resultado clínico. Comece com um checklist simples e evolua conforme os dados indicarem prioridades.</p>
          <p className="leading-relaxed">Se precisar, o Kynesia ajuda a automatizar lembretes, monitorar indicadores e organizar a agenda da sua clínica.</p>
        </div>

        <PatientCTA />


        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-gray-900">Sobre o autor</h3>
          <p className="text-gray-700">Conteúdo produzido pela Equipe Kynesia com foco em gestão clínica. Use este checklist para melhorar organização, reduzir faltas e aumentar a previsibilidade da sua rotina.</p>
        </div>
      </article>
    </main>
  );
}
