import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gestão de Agenda Fisioterapia: Menos Faltas e Previsibilidade",
  description:
    "Aprenda como melhorar a gestão de agenda na fisioterapia, reduzir no-show e aumentar previsibilidade com um fluxo simples e eficiente.",
  openGraph: {
    title: "Gestão de Agenda Fisioterapia: Menos Faltas e Previsibilidade",
    description:
      "Guia prático para reduzir faltas e melhorar aderência ao plano terapêutico com gestão de agenda baseada em dados.",
    type: "article",
    url: "https://kynesia.com.br/blog/gestao-de-agenda-fisioterapia",
  },
};

const articleLdJson = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Gestão de agenda na fisioterapia: menos faltas e mais previsibilidade",
  description:
    "Ajustes simples de fluxo e comunicação para reduzir no-show e melhorar aderência ao plano terapêutico.",
  author: {
    "@type": "Organization",
    name: "Equipe Kynesia",
  },
  publisher: {
    "@type": "Organization",
    name: "Kynesia",
  },
  datePublished: "2026-03-29",
  dateModified: "2026-04-09",
  mainEntityOfPage: "https://kynesia.com.br/blog/gestao-de-agenda-fisioterapia",
};

export default function GestaoAgendaFisioterapiaPage() {
  return (
    <main className="bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLdJson) }} />

      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8 md:py-0">
          <div className="flex items-center justify-between gap-4 md:contents">
            <Link href="/" aria-label="Kynesia" className="inline-flex items-center">
              <Image
                src="/kynesia-logo-continuo.svg"
                alt="Kynesia"
                width={240}
                height={64}
                priority
                className="h-auto w-[190px] md:w-[240px]"
              />
            </Link>

            <Link
              href="/start-free"
              className="inline-flex rounded-lg bg-teal-500 px-3 py-2 text-[11px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600 md:hidden"
            >
              Começar grátis
            </Link>

            <Link
              href="/start-free"
              className="hidden rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600 md:inline-flex"
            >
              Começar grátis
            </Link>
          </div>

          <nav className="flex w-full flex-nowrap items-center justify-between gap-2 px-1 text-[12px] font-medium text-slate-600 md:gap-8 md:px-0 md:text-base">
            <Link href="/#funcionalidades" className="whitespace-nowrap transition hover:text-slate-900">
              Funcionalidades
            </Link>
            <Link href="/#ia" className="whitespace-nowrap transition hover:text-slate-900">
              IA
            </Link>
            <Link href="/#planos" className="whitespace-nowrap transition hover:text-slate-900">
              Planos
            </Link>
            <Link href="/#faq" className="whitespace-nowrap transition hover:text-slate-900">
              FAQ
            </Link>
            <Link href="/blog" className="whitespace-nowrap transition hover:text-slate-900">
              Blog
            </Link>
            <Link href="/#contato" className="whitespace-nowrap transition hover:text-slate-900">
              Contato
            </Link>
          </nav>

          <Link
            href="/start-free"
            className="hidden rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600 md:inline-flex"
          >
            Começar grátis
          </Link>
        </div>
      </header>

      <div className="bg-slate-50 px-6 py-4 text-sm text-gray-600">
        <div className="mx-auto max-w-6xl">
          <Link href="/blog" className="text-teal-600 hover:underline">
            Blog
          </Link>
          {" / "}
          <span className="font-medium text-teal-600">Gestão de agenda na fisioterapia</span>
        </div>
      </div>

      <header className="bg-gradient-to-b from-teal-50 via-blue-50 to-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            Gestão Clínica
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Gestão de agenda na fisioterapia: menos faltas e mais previsibilidade
          </h1>

          <p className="mb-6 text-lg text-gray-600">
            Ajustes simples de fluxo e comunicação para reduzir no-show e melhorar aderência ao plano terapêutico.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📅 29 Mar 2026</span>
            <span>⏱ 5 min de leitura</span>
            <span>✍️ Equipe Kynesia</span>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 rounded-2xl border-2 border-teal-500 bg-white p-6">
          <p className="text-gray-900">
            <strong>O que é gestão de agenda na fisioterapia?</strong> Gestão de agenda na fisioterapia é a organização inteligente dos horários, confirmações e remarcações para reduzir faltas e manter o paciente aderente ao tratamento. Quando bem feita, melhora o fluxo da clínica e aumenta a previsibilidade de receita.
          </p>
        </div>

        <p className="mb-5 leading-relaxed text-gray-700">
          A <strong>gestão de agenda na fisioterapia</strong> não é só marcar horários: ela impacta diretamente no resultado clínico e financeiro. Um paciente que falta quebra a continuidade terapêutica, aumenta tempo de alta e reduz a eficiência da equipe.
        </p>

        <p className="mb-8 leading-relaxed text-gray-700">
          A boa notícia é que pequenas mudanças de processo já reduzem no-show em poucas semanas: confirmação automática, janela de remarcação clara, comunicação ativa e análise simples de dados por turno e profissional.
        </p>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 font-semibold text-gray-900">🔗 URL do artigo</h3>
          <p className="text-sm text-gray-700">/blog/gestao-de-agenda-fisioterapia</p>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">📚 Leia também:</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/dor-lombar-avaliacao-clinica" className="text-teal-600 hover:underline">
                → Dor lombar na prática: avaliação clínica objetiva em 7 passos
              </Link>
            </li>
            <li>
              <Link href="/blog/teste-ortopedico-ombro" className="text-teal-600 hover:underline">
                → Testes ortopédicos de ombro: decisão clínica com menos falso positivo
              </Link>
            </li>
            <li>
              <Link href="/blog/reabilitacao-pos-operatorio-joelho" className="text-teal-600 hover:underline">
                → Reabilitação de joelho no pós-operatório: progressão por critérios
              </Link>
            </li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como reduzir faltas na agenda da fisioterapia?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O primeiro passo é padronizar uma régua de confirmação. Envie lembrete em dois momentos: 24 horas antes e 2 horas antes da sessão. Inclua no lembrete um botão simples de confirmação, remarcação ou cancelamento.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Em paralelo, defina uma política objetiva de falta e atraso. Regras claras reduzem ruído e melhoram compromisso. O paciente precisa saber exatamente como agir caso surja imprevisto.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Qual o melhor fluxo de confirmação para evitar no-show?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          O melhor fluxo é curto e repetível: agendamento → confirmação automática → lembrete com ação → follow-up em caso de ausência. Cada etapa precisa estar registrada para que a recepção não dependa de memória manual.
        </p>
        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <h3 className="mb-3 font-bold text-teal-900">Fluxo recomendado em 4 passos</h3>
          <ul className="space-y-2 text-gray-700">
            <li>1. Confirmar agendamento no ato (canal preferido do paciente).</li>
            <li>2. Lembrete D-1 com opção de remarcar.</li>
            <li>3. Lembrete D-0 (2 horas antes) com botão de confirmação.</li>
            <li>4. Em falta, contato em até 24h para reagendar e manter aderência.</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Como medir previsibilidade na agenda da clínica?</h2>
        <p className="mb-5 leading-relaxed text-gray-700">
          Sem medir, não há gestão. Acompanhe semanalmente três indicadores: taxa de faltas, taxa de remarcação e ocupação de agenda por período. Esses dados mostram onde o processo está falhando.
        </p>
        <p className="mb-8 leading-relaxed text-gray-700">
          Comece simples: uma planilha já funciona. O ideal é centralizar isso em software para visualizar padrão por profissional, convênio e horário de pico. A previsibilidade vem de consistência operacional.
        </p>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">Checklist prático de gestão de agenda</h2>
        <div className="mb-8 space-y-4">
          {[
            "Configurar lembretes automáticos em dois momentos (D-1 e D-0)",
            "Padronizar política de atraso, falta e remarcação",
            "Registrar motivo de falta para agir na causa raiz",
            "Criar lista de espera para preencher horários vagos",
            "Acompanhar no-show por profissional e por turno",
            "Reforçar plano terapêutico na recepção para aumentar compromisso",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
              ✓ {item}
            </div>
          ))}
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">Perguntas frequentes sobre gestão de agenda</h2>
        <div className="mb-8 space-y-3">
          {[
            {
              q: "Qual taxa de no-show é considerada saudável na fisioterapia?",
              a: "Depende da região e perfil da clínica, mas em geral manter no-show abaixo de 10% já indica processo operacional consistente. Acima disso, vale revisar confirmação, política de remarcação e comunicação da recepção.",
            },
            {
              q: "WhatsApp funciona melhor que ligação para confirmar consulta?",
              a: "Na maioria dos casos, sim. WhatsApp tende a ter maior taxa de resposta e menor custo operacional. O ideal é respeitar o canal preferido do paciente e manter padrão de mensagem curto e objetivo.",
            },
            {
              q: "Vale manter lista de espera para encaixe?",
              a: "Sim. Lista de espera ativa reduz o impacto de cancelamentos em cima da hora e aumenta ocupação da agenda. O ganho aparece rapidamente quando a equipe aciona essa lista de forma disciplinada.",
            },
            {
              q: "Recepção e fisioterapeuta devem compartilhar os mesmos indicadores?",
              a: "Sim. Quando todos visualizam os mesmos números, a tomada de decisão fica alinhada. Isso melhora previsibilidade e reduz conflito entre operação e assistência clínica.",
            },
          ].map((faq) => (
            <details key={faq.q} className="cursor-pointer rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
              <summary className="font-semibold text-gray-900">{faq.q}</summary>
              <p className="mt-3 leading-relaxed text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mb-8 rounded-2xl bg-gray-900 p-8 text-white">
          <h2 className="mb-4 text-2xl font-bold">Agenda previsível é tratamento mais eficiente</h2>
          <p className="mb-4 leading-relaxed">
            Reduzir faltas não é só melhorar faturamento: é garantir continuidade terapêutica. Cada sessão perdida atrasa resultado e compromete experiência do paciente.
          </p>
          <p className="leading-relaxed">
            Com processos simples e consistentes, sua clínica ganha produtividade, previsibilidade e qualidade assistencial.
          </p>
        </div>
      </article>
    </main>
  );
}
