import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/reveal";
import HomePricingSection from "./components/home-pricing-section";

export const metadata: Metadata = {
  title: "kynesia - Gestão Clínica para Fisioterapeutas",
  description:
    "Kynesia é o sistema para fisioterapeutas que integra prontuário eletrônico fisioterapia, software para clínica de fisioterapia e gestão clínica fisioterapia com mais organização e produtividade.",
};

const dores = [
  {
    icon: "shuffle",
    title: "Desorganização de pacientes",
    description: "Dados espalhados em planilhas, papéis e WhatsApp sem controle.",
  },
  {
    icon: "clock",
    title: "Evoluções demoradas",
    description: "Perda de tempo escrevendo evoluções repetitivas manualmente.",
  },
  {
    icon: "file-alert",
    title: "Falta de padronização",
    description: "Cada profissional documenta de um jeito, sem padrão clínico.",
  },
  {
    icon: "triangle-alert",
    title: "Tempo perdido com tarefas administrativas",
    description: "Horas gastas com burocracia ao invés de atender pacientes.",
  },
] as const;

function PainIcon({ type }: { type: (typeof dores)[number]["icon"] }) {
  const classes = "h-7 w-7 text-red-500";

  if (type === "shuffle") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={classes} aria-hidden>
        <path d="M16 3h5v5" />
        <path d="M4 20l7-7" />
        <path d="M21 3l-7 7" />
        <path d="M4 4h5l10 10" />
        <path d="M16 16h5v5" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={classes} aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (type === "file-alert") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={classes} aria-hidden>
        <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
        <path d="M14 2v5h5" />
        <path d="M9.5 16.5l5-5" />
        <path d="M14.5 16.5l-5-5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={classes} aria-hidden>
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    </svg>
  );
}

const categorias = [
  {
    title: "Inteligência Artificial & Clínica",
    icon: "🧠",
    items: [
      "Evolução com IA por voz ou texto",
      "IA diagnóstica com clusters",
      "Sugestão de testes ortopédicos",
      "Suporte à prática baseada em evidência",
      "Guia de anamnese inteligente",
    ],
  },
  {
    title: "Gestão de Prontuários & Pacientes",
    icon: "📋",
    items: [
      "Prontuário eletrônico ilimitado",
      "Anamnese estruturada",
      "Histórico de sessões com filtros",
      "Upload de exames",
      "Conformidade com LGPD e COFFITO",
    ],
  },
  {
    title: "Organização & Fluxo de Trabalho",
    icon: "📅",
    items: [
      "Agenda inteligente",
      "Controle de presença",
      "Dashboard de produtividade",
      "Acesso multiplataforma",
    ],
  },
  {
    title: "Ecossistema de Benefícios",
    icon: "🎁",
    items: [
      "Clube de benefícios Kynesia",
      "Vouchers para pacientes",
      "Descontos progressivos por plano",
      "Validação com CREFITO",
    ],
  },
  {
    title: "Gestão Financeira",
    icon: "💳",
    items: [
      "Controle de faturamento",
      "Gestão de pagamentos",
      "Relatórios analíticos",
    ],
  },
  {
    title: "Portal do Paciente",
    icon: "👥",
    items: [
      "Área exclusiva do paciente",
      "Prescrição de exercícios",
      "Feedback de evolução",
    ],
  },
];

const faqs = [
  {
    q: "O que é o Kynesia?",
    a: "O Kynesia é um sistema para fisioterapeutas que reúne prontuário eletrônico fisioterapia, gestão de pacientes, agenda e inteligência clínica em uma única plataforma.",
  },
  {
    q: "Para quem é o Kynesia?",
    a: "Para profissionais autônomos, clínicas e equipes que precisam de um software para clínica de fisioterapia com organização e produtividade no atendimento.",
  },
  {
    q: "Preciso pagar para usar?",
    a: "Você pode começar no plano gratuito inicial e evoluir para um plano pago conforme a necessidade da operação.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. O sistema é responsivo e funciona em celular, tablet e desktop.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. O Kynesia segue boas práticas de segurança e conformidade LGPD para proteção de dados clínicos.",
  },
  {
    q: "Preciso de internet?",
    a: "Sim. Por ser SaaS, o acesso acontece pela internet com atualização contínua e sincronização dos dados.",
  },
];

const depoimentos = [
  {
    text: '"O Kynesia revolucionou minha rotina clínica. A inteligência artificial economiza horas do meu dia."',
    name: "Fisioterapeuta",
    credential: "CREFITO verificado",
    photo: "",
  },
  {
    text: '"O Kynesia revolucionou minha rotina clínica. A inteligência artificial economiza horas do meu dia."',
    name: "Fisioterapeuta",
    credential: "CREFITO verificado",
    photo: "",
  },
  {
    text: '"O Kynesia revolucionou minha rotina clínica. A inteligência artificial economiza horas do meu dia."',
    name: "Fisioterapeuta",
    credential: "CREFITO verificado",
    photo: "",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8 md:py-0">
          <div className="flex items-center justify-between gap-4 md:contents">
            <Link href="/" aria-label="Kynesia" className="inline-flex items-center">
              <Image
                src="/kynesia-logo-continuo.svg"
                alt="Kynesia"
                width={180}
                height={48}
                priority
                className="h-auto w-[150px] md:w-[180px]"
              />
            </Link>

            <Link
              href="/start-free"
              className="inline-flex rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600 md:hidden"
            >
              Começar grátis
            </Link>
          </div>

          <nav className="flex w-full flex-nowrap items-center justify-between gap-2 px-1 text-[12px] font-medium text-slate-600 md:gap-8 md:px-0 md:text-base">
            <a href="#funcionalidades" className="whitespace-nowrap transition hover:text-slate-900">Funcionalidades</a>
            <a href="#ia" className="whitespace-nowrap transition hover:text-slate-900">IA</a>
            <a href="#planos" className="whitespace-nowrap transition hover:text-slate-900">Planos</a>
            <a href="#faq" className="whitespace-nowrap transition hover:text-slate-900">FAQ</a>
            <Link href="/blog" className="whitespace-nowrap transition hover:text-slate-900">Blog</Link>
            <a href="#contato" className="whitespace-nowrap transition hover:text-slate-900">Contato</a>
          </nav>

          <Link
            href="/start-free"
            className="hidden rounded-2xl bg-teal-500 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-600 md:inline-flex"
          >
            Começar grátis
          </Link>
        </div>
      </header>

      <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="mx-auto inline-flex rounded-full bg-teal-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 md:text-sm">
            Gerenciamento clínico para fisioterapeutas
          </p>

          <h1 className="mt-7 text-4xl font-bold leading-[1.04] tracking-tight text-[#122a5a] md:text-6xl">
            O sistema completo para fisioterapeutas que querem mais
            <span className="text-teal-500"> organização, produtividade e inteligência clínica</span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-slate-500 md:text-xl">
            Gerencie pacientes, evoluções e atendimentos com o apoio de inteligência
            artificial em um único lugar.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/start-free"
              className="rounded-2xl bg-teal-500 px-10 py-3 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-600"
            >
              Começar grátis
            </Link>
            <Link
              href="/planos"
              className="rounded-2xl border border-slate-300 bg-white px-10 py-3 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Ver planos
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-slate-50 px-6 py-20 md:py-24" id="funcionalidades">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-[#122a5a] md:text-5xl">
              Você ainda enfrenta esses problemas?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-500 md:text-lg">
              A maioria dos fisioterapeutas perde tempo e qualidade por falta de ferramentas adequadas.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {dores.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className="group h-full rounded-3xl border border-slate-200 bg-slate-50 p-7 text-center shadow-sm transition-all duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:shadow-[0_18px_42px_-22px_rgba(15,23,42,0.45)] active:-translate-y-1 active:shadow-[0_16px_40px_-24px_rgba(15,23,42,0.4)]">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100/70">
                    <PainIcon type={item.icon} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24" id="ia">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#122a5a] md:text-4xl">
              O Kynesia centraliza toda sua rotina clínica
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-500 md:text-lg">
              em uma <span className="text-teal-500 font-semibold">única plataforma inteligente</span>
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Reveal delay={0}>
              <article className="h-full rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:shadow-[0_18px_42px_-22px_rgba(15,23,42,0.45)]">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-100/70">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-teal-500" aria-hidden>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-tight text-slate-900">
                  Inteligência Clínica
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  Sugestões de condutas baseadas em evidências científicas para apoiar sua tomada de decisão. Você no controle, com o melhor da ciência ao seu lado.
                </p>
              </article>
            </Reveal>

            <Reveal delay={90}>
              <article className="h-full rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:shadow-[0_18px_42px_-22px_rgba(15,23,42,0.45)]">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-100/70">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-teal-500" aria-hidden>
                    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" />
                    <path d="M4 10h16M8 6v12M16 6v12" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-tight text-slate-900">
                  Organização Total
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  Prontuários, agenda, pacientes e financeiro em um só lugar. Tudo organizado e acessível, para você focar no que importa.
                </p>
              </article>
            </Reveal>

            <Reveal delay={180}>
              <article className="h-full rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:shadow-[0_18px_42px_-22px_rgba(15,23,42,0.45)]">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-100/70">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10 text-teal-500" aria-hidden>
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-tight text-slate-900">
                  Produtividade
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  Automatize tarefas repetitivas e foque no que importa: seus pacientes. Mais tempo clínico, menos tempo administrativo.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#122a5a] md:text-4xl">Funcionalidades completas para</h2>
            <h2 className="text-3xl font-bold leading-tight text-[#122a5a] md:text-4xl">gestão clínica em fisioterapia</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-500 md:text-lg">
              Tudo o que você precisa para gerenciar sua clínica de fisioterapia com eficiência.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {categorias.map((category, index) => {
              const getIcon = () => {
                switch(index) {
                  case 0:
                    return (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-teal-500">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                        <circle cx="5" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <path d="M12 6v6M12 12v6" />
                        <path d="M6 12h6M12 12h6" />
                      </svg>
                    );
                  case 1:
                    return (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-slate-400">
                        <path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
                        <path d="M8 8h8M8 12h8M8 16h4" />
                      </svg>
                    );
                  case 2:
                    return (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-teal-500">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                    );
                  case 3:
                    return (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-slate-400">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    );
                  case 4:
                    return (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-teal-500">
                        <circle cx="12" cy="12" r="1" />
                        <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
                      </svg>
                    );
                  default:
                    return (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-slate-400">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    );
                }
              };

              return (
                <Reveal key={category.title} delay={index * 80}>
                  <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-base font-semibold text-slate-900 text-center">{category.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                          <div className="flex-shrink-0">
                            {getIcon()}
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#071a45] to-[#162e61] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 md:text-sm">Diferencial</p>
            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
              A inteligência artificial que <span className="text-teal-400">trabalha junto com você</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 md:text-lg">
              Tecnologia de ponta integrada à sua prática clínica diária.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal delay={0}>
              <article className="rounded-3xl border border-white/15 bg-white/5 p-8 text-center shadow-[0_16px_40px_-24px_rgba(2,8,23,0.7)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-teal-300" aria-hidden>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white md:text-2xl">Economia de tempo</h3>
                <p className="mx-auto mt-4 max-w-xs text-base leading-relaxed text-slate-300 md:text-lg">
                  Evoluções clínicas em segundos. Menos burocracia, mais pacientes.
                </p>
              </article>
            </Reveal>

            <Reveal delay={90}>
              <article className="rounded-3xl border border-white/15 bg-white/5 p-8 text-center shadow-[0_16px_40px_-24px_rgba(2,8,23,0.7)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-teal-300" aria-hidden>
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white md:text-2xl">Padronização clínica</h3>
                <p className="mx-auto mt-4 max-w-xs text-base leading-relaxed text-slate-300 md:text-lg">
                  Documentação consistente e alinhada com as melhores práticas.
                </p>
              </article>
            </Reveal>

            <Reveal delay={180}>
              <article className="rounded-3xl border border-white/15 bg-white/5 p-8 text-center shadow-[0_16px_40px_-24px_rgba(2,8,23,0.7)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-teal-300" aria-hidden>
                    <path d="M6 15l5-5 3 3 4-4" />
                    <path d="M14 9h4v4" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white md:text-2xl">Melhor tomada de decisão</h3>
                <p className="mx-auto mt-4 max-w-xs text-base leading-relaxed text-slate-300 md:text-lg">
                  Insights diagnósticos baseados em evidência e análise inteligente.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <HomePricingSection />

      {/* Seção de depoimentos ocultada - será reativada quando houver dados reais */}
      {/* <section className="px-6 py-20 md:py-24" id="faq">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-[#122a5a] md:text-5xl">
              Desenvolvido por profissionais da área da saúde
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-500 md:text-lg">
              O Kynesia é construído por quem entende a realidade da fisioterapia no dia a dia.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {depoimentos.map((item, index) => (
              <Reveal key={`${item.name}-${index}`} delay={index * 90}>
                <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-10 w-10 text-teal-300" aria-hidden>
                    <path d="M10 7H6a2 2 0 0 0-2 2v5a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3V9a2 2 0 0 0-2-2z" />
                    <path d="M20 7h-4a2 2 0 0 0-2 2v5a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3V9a2 2 0 0 0-2-2z" />
                  </svg>

                  <p className="mt-4 text-[1.7rem] leading-relaxed text-slate-500 italic md:text-[2rem]">
                    {item.text}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-teal-50 ring-1 ring-teal-100">
                      {item.photo ? (
                        <img src={item.photo} alt={`Foto de ${item.name}`} className="h-full w-full object-cover" />
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-teal-500" aria-hidden>
                          <circle cx="12" cy="8" r="4" />
                          <path d="M6 20a6 6 0 0 1 12 0" />
                        </svg>
                      )}
                    </div>

                    <div className="text-left">
                      <p className="text-[1.9rem] font-semibold leading-tight text-slate-900 md:text-[2.2rem]">{item.name}</p>
                      <p className="mt-1 text-[1.5rem] text-slate-500 md:text-[1.7rem]">{item.credential}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">FAQ</h2>
          </Reveal>
          <div className="mt-12 space-y-4">
            {faqs.map((item, index) => (
              <Reveal key={item.q} delay={index * 75}>
                <details className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer list-none text-base font-medium">{item.q}</summary>
                  <p className="mt-3 leading-relaxed text-sm text-gray-600">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <Reveal className="mx-auto max-w-6xl rounded-3xl bg-gray-900 px-8 py-12 text-center text-white md:py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Comece a transformar sua rotina clínica hoje
          </h2>
          <Link
            href="/checkout?plan=flow"
            className="mt-7 inline-flex rounded-xl bg-teal-500 px-7 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-teal-400"
          >
            Testar grátis
          </Link>
        </Reveal>
      </section>

      <section id="contato" className="px-6 py-20 md:py-24">
        <Reveal className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-semibold md:text-3xl">Contato</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-600 md:text-base">
            Fale com nosso time para dúvidas comerciais e implantação da plataforma.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a className="rounded-xl border border-gray-200 p-4 text-center transition hover:bg-gray-50" href="mailto:contato@kynesia.com.br">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-sm font-medium text-gray-900 md:text-base">contato@kynesia.com.br</p>
            </a>
            <a className="rounded-xl border border-gray-200 p-4 text-center transition hover:bg-gray-50" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
              <p className="text-sm text-gray-500">WhatsApp</p>
              <p className="text-sm font-medium text-gray-900 md:text-base">(00) 00000-0000</p>
            </a>
            <div className="rounded-xl border border-gray-200 p-4 text-center">
              <p className="text-sm text-gray-500">Atendimento</p>
              <p className="text-sm font-medium text-gray-900 md:text-base">Seg a Sex, 09h às 18h</p>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Kynesia. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-900">Termos</a>
            <a href="#" className="hover:text-gray-900">Privacidade</a>
            <a href="#contato" className="hover:text-gray-900">Contato</a>
          </div>
        </div>
      </footer>
    </main>
  );
}