import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/reveal";
import HomePricingSection from "./components/home-pricing-section";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import { ArrowIcon, CheckIcon, GiftIcon, PathIcon, PlusIcon } from "./components/icons";

export const metadata: Metadata = {
  title: "kynesia - Gestão Clínica para Fisioterapeutas",
  description:
    "Sistema de gestão clínica para fisioterapeutas com prontuário eletrônico, inteligência clínica baseada em evidências, controle financeiro e organização completa da rotina.",
};

const ICONS = {
  database: "M3 5c0-1.7 4-3 9-3s9 1.3 9 3-4 3-9 3-9-1.3-9-3Z M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5 M3 12c0 1.7 4 3 9 3s9-1.3 9-3",
  clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z M12 6v6l4 2",
  clip: "M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1Z M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2 M9 13h6 M9 17h4",
  brief: "M3 7h18v13H3Z M8 7V4h8v3 M3 13h18",
  spark: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z M19 3v4 M21 5h-4",
  folder: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",
  zap: "M13 2 3 14h9l-1 8 10-12h-9Z",
  file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
  cal: "M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
  coin: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z M12 6v12 M15 9.5a3 3 0 0 0-3-1.5c-1.7 0-3 .9-3 2s1.3 2 3 2 3 .9 3 2-1.3 2-3 2a3 3 0 0 1-3-1.5",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8",
  gift: "M20 12v10H4V12 M2 7h20v5H2Z M12 22V7 M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z M9 12l2 2 4-4",
  mic: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z M19 10v2a7 7 0 0 1-14 0v-2 M12 19v3",
};

const dores = [
  {
    icon: ICONS.database,
    title: "Desorganização de pacientes",
    description: "Dados espalhados em planilhas, papéis e WhatsApp sem controle.",
  },
  {
    icon: ICONS.clock,
    title: "Evoluções demoradas",
    description: "Perda de tempo escrevendo evoluções repetitivas manualmente.",
  },
  {
    icon: ICONS.clip,
    title: "Falta de padronização",
    description: "Cada profissional documenta de um jeito, sem padrão clínico.",
  },
  {
    icon: ICONS.brief,
    title: "Tempo perdido com tarefas administrativas",
    description: "Horas gastas com burocracia ao invés de atender pacientes.",
  },
];

const pilares = [
  {
    icon: ICONS.spark,
    title: "Inteligência Clínica",
    description:
      "Sugestões de condutas baseadas em evidências científicas para apoiar sua tomada de decisão. Você no controle, com o melhor da ciência ao seu lado.",
  },
  {
    icon: ICONS.folder,
    title: "Organização Total",
    description:
      "Prontuários, agenda, pacientes e financeiro em um só lugar. Tudo organizado e acessível, para você focar no que importa.",
  },
  {
    icon: ICONS.zap,
    title: "Produtividade",
    description:
      "Automatize tarefas repetitivas e foque no que importa: seus pacientes. Mais tempo clínico, menos tempo administrativo.",
  },
];

const diferenciais = [
  { icon: ICONS.clock, title: "Economia de tempo", description: "Evoluções clínicas em segundos. Menos burocracia, mais pacientes." },
  { icon: ICONS.shield, title: "Padronização clínica", description: "Documentação consistente e alinhada com as melhores práticas." },
  { icon: ICONS.spark, title: "Melhor tomada de decisão", description: "Insights diagnósticos baseados em evidência e análise inteligente." },
];

const confianca = [
  "5 dias grátis com todos os recursos",
  "Cancelamento online, sem fidelidade",
  "Celular, tablet e computador",
];

const agendaExemplo = [
  { hora: "08:00", nome: "Ana Souza", status: "Confirmado" },
  { hora: "09:30", nome: "Carlos Lima", status: "Em atendimento" },
  { hora: "11:00", nome: "Marina Costa", status: "Aguardando" },
];

const ondaVoz = [10, 22, 14, 30, 18, 34, 16, 26, 12, 20, 8];

const faqs = [
  {
    q: "O que é o Kynesia?",
    a: "O Kynesia é uma plataforma de gestão clínica criada para fisioterapeutas que desejam organizar melhor sua rotina profissional. O sistema reúne em um só lugar recursos como agenda, prontuário eletrônico, evolução fisioterapêutica, cadastro de pacientes, controle financeiro, questionários validados e apoio com inteligência artificial. A proposta do Kynesia é reduzir tarefas manuais, melhorar a organização dos atendimentos e ajudar o fisioterapeuta a ter mais clareza sobre seus pacientes, sua agenda e sua clínica.",
  },
  {
    q: "Para quem o Kynesia é indicado?",
    a: "O Kynesia é indicado para fisioterapeutas autônomos, clínicas de fisioterapia, consultórios e profissionais que atendem em diferentes áreas da reabilitação. Ele pode ser utilizado por quem está começando na carreira e precisa de organização, mas também por profissionais que já possuem uma rotina maior de atendimentos e desejam centralizar informações clínicas, financeiras e administrativas em uma plataforma mais profissional.",
  },
  {
    q: "O Kynesia funciona no celular?",
    a: "Sim. O Kynesia foi desenvolvido para funcionar em celular, tablet e computador. Isso permite que o fisioterapeuta acesse sua rotina clínica de forma prática, seja no consultório, na clínica ou em outro local de atendimento. Por ser uma plataforma online, o acesso acontece pelo navegador, sem depender inicialmente de instalação de aplicativo.",
  },
  {
    q: "Preciso instalar algum programa para usar o Kynesia?",
    a: "Não. O Kynesia pode ser acessado diretamente pela internet, usando navegador como Chrome, Safari ou Edge. Basta criar sua conta, fazer login e começar a utilizar os recursos disponíveis. Isso facilita o acesso e permite que o sistema seja usado em diferentes dispositivos.",
  },
  {
    q: "O Kynesia possui prontuário eletrônico?",
    a: "Sim. O Kynesia possui prontuário eletrônico para fisioterapia, permitindo registrar informações importantes do paciente, avaliações, evoluções, histórico clínico e acompanhamento do tratamento. Esse recurso ajuda o fisioterapeuta a manter os dados organizados, reduzir o uso de papel e acessar rapidamente as informações necessárias durante o atendimento.",
  },
  {
    q: "O Kynesia tem agenda para fisioterapeutas?",
    a: "Sim. A plataforma conta com agenda clínica para organizar atendimentos, horários, pacientes e rotina profissional. A agenda ajuda o fisioterapeuta a visualizar melhor seus compromissos, evitar confusões de horários e manter uma rotina mais produtiva e organizada.",
  },
  {
    q: "O Kynesia ajuda no controle financeiro?",
    a: "Sim. O Kynesia também auxilia na organização financeira da rotina clínica, permitindo acompanhar pagamentos, planos, atendimentos realizados e informações importantes relacionadas ao faturamento. Esse recurso é útil para fisioterapeutas que desejam ter mais controle sobre a parte administrativa da clínica sem depender apenas de planilhas ou anotações manuais.",
  },
  {
    q: "Como funciona a inteligência artificial do Kynesia?",
    a: "A inteligência artificial do Kynesia funciona como uma ferramenta de apoio ao fisioterapeuta. Ela pode auxiliar na organização das informações clínicas e em sugestões baseadas em evidências, ajudando o profissional a ganhar tempo e estruturar melhor sua rotina. A IA não substitui o raciocínio clínico do fisioterapeuta. Ela serve como suporte para tornar o processo mais organizado, rápido e eficiente.",
  },
  {
    q: "O Kynesia substitui o fisioterapeuta?",
    a: "Não. O Kynesia não substitui o fisioterapeuta, nem realiza decisões clínicas de forma independente. A plataforma foi criada para apoiar o profissional na gestão, organização e documentação da prática clínica. A avaliação, interpretação dos dados, conduta terapêutica e tomada de decisão continuam sendo responsabilidade do fisioterapeuta.",
  },
  {
    q: "Meus dados e os dados dos pacientes ficam seguros?",
    a: "Sim. O Kynesia foi pensado para organizar informações clínicas com responsabilidade e segurança, considerando a importância dos dados dos pacientes. A plataforma busca seguir boas práticas de proteção de dados e privacidade, alinhada aos princípios da LGPD, para que o fisioterapeuta possa utilizar o sistema com mais confiança.",
  },
  {
    q: "O Kynesia possui questionários validados?",
    a: "Sim. O Kynesia conta com recursos voltados para o uso de questionários e instrumentos de avaliação que auxiliam o fisioterapeuta na coleta de informações clínicas. Esses questionários ajudam a tornar a avaliação mais organizada, padronizada e útil para acompanhar a evolução do paciente ao longo do tratamento.",
  },
  {
    q: "Existe plano gratuito?",
    a: "Sim. O Kynesia possui uma opção gratuita inicial para que o fisioterapeuta possa conhecer a plataforma, testar os recursos disponíveis e começar a organizar sua rotina clínica. Conforme a necessidade do profissional ou da clínica aumenta, é possível evoluir para planos com mais funcionalidades.",
  },
  {
    q: "O Kynesia serve para clínicas ou apenas para profissionais autônomos?",
    a: "O Kynesia pode ser utilizado tanto por fisioterapeutas autônomos quanto por clínicas de fisioterapia. Para profissionais autônomos, ele ajuda na organização da rotina individual. Para clínicas, auxilia na centralização de informações, gestão de pacientes, agenda, financeiro e padronização dos processos.",
  },
  {
    q: "Como faço para começar a usar o Kynesia?",
    a: "Para começar, basta clicar em “Começar grátis”, preencher seus dados e acessar a plataforma. Depois disso, você poderá criar sua conta, conhecer os recursos disponíveis e começar a organizar sua rotina clínica de forma mais profissional.",
  },
];

const categorias = [
  {
    title: "Inteligência Artificial & Clínica",
    icon: ICONS.spark,
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
    icon: ICONS.file,
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
    icon: ICONS.cal,
    items: [
      "Agenda inteligente",
      "Controle de presença",
      "Dashboard de produtividade",
      "Acesso multiplataforma",
    ],
  },
  {
    title: "Ecossistema de Benefícios",
    icon: ICONS.gift,
    items: [
      "Clube de benefícios Kynesia",
      "Vouchers para pacientes",
      "Descontos progressivos por plano",
      "Validação com CREFITO",
    ],
  },
  {
    title: "Gestão Financeira",
    icon: ICONS.coin,
    items: [
      "Controle de faturamento",
      "Gestão de pagamentos",
      "Relatórios analíticos",
    ],
  },
  {
    title: "Portal do Paciente",
    icon: ICONS.users,
    items: [
      "Área exclusiva do paciente",
      "Prescrição de exercícios",
      "Feedback de evolução",
    ],
  },
];

export default function Home() {
  return (
    <main className="k-page">
      <SiteHeader />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "radial-gradient(900px 520px at 88% 8%, #dcebe6 0%, rgba(246,250,248,0) 70%)" }}
      >
        <Image
          src="/brand/kynesia-simbolo.svg"
          alt=""
          aria-hidden="true"
          width={1010}
          height={821}
          className="pointer-events-none absolute"
          style={{ right: -140, top: 30, width: "min(70vmin, 640px)", height: "auto", opacity: 0.07 }}
        />
        <div className="k-wrap relative flex flex-wrap items-center gap-x-12 gap-y-14 pb-24 pt-14">
          <div className="k-hin min-w-0" style={{ flex: "1 1 500px" }}>
            <div
              className="inline-flex items-center gap-2 rounded-full border bg-white py-[7px] pl-2.5 pr-4 text-sm font-bold text-brand"
              style={{ borderColor: "#d5e7e1" }}
            >
              <PathIcon d={ICONS.spark} size={18} stroke="#2a6168" strokeWidth={2} />
              Gerenciamento clínico para fisioterapeutas
            </div>

            <h1 className="mt-[22px] text-[clamp(34px,4.6vw,56px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-deep">
              O sistema completo para fisioterapeutas que querem mais{" "}
              <span className="text-brand">organização, produtividade e inteligência clínica</span>
            </h1>

            <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted">
              Gerencie pacientes, evoluções e atendimentos com o apoio de inteligência artificial em um único lugar.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-1" style={{ marginTop: 28 }}>
              <Link href="/start-free" className="k-btn k-btn-p">
                Começar grátis
                <ArrowIcon size={18} />
              </Link>
              <Link href="/planos" className="k-btn k-btn-g">
                Ver planos
              </Link>
            </div>

            <Link
              href="/planos"
              className="mt-[30px] flex max-w-[520px] items-center gap-3.5 rounded-[20px] border bg-white px-[18px] py-3.5 no-underline"
              style={{ borderColor: "#d5e7e1", boxShadow: "0 10px 30px rgba(22,54,58,.06)" }}
            >
              <span className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-[14px] bg-brand">
                <GiftIcon size={24} stroke="#fff" />
              </span>
              <span className="text-[15px] font-bold leading-[1.45] text-ink">
                Assine o Kynesia e receba gratuitamente um kit de avaliação de 23 páginas no seu e-mail!
              </span>
            </Link>

            <ul className="mt-7 flex list-none flex-wrap gap-x-7 gap-y-3 p-0 text-[14.5px] font-semibold text-[#35565b]">
              {confianca.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon size={18} stroke="#2a6168" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup ilustrativo do app */}
          <div className="k-float relative min-w-0" style={{ flex: "1 1 460px" }} aria-hidden="true">
            <div
              className="relative overflow-hidden rounded-[28px] border bg-white"
              style={{ borderColor: "#ddeae6", boxShadow: "0 40px 80px rgba(22,54,58,.16), 0 6px 16px rgba(22,54,58,.06)" }}
            >
              <div className="flex items-center gap-[7px] border-b px-5 py-4" style={{ borderColor: "#e7f0ed", background: "#fafcfb" }}>
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "#d5e7e1" }} />
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "#d5e7e1" }} />
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "#d5e7e1" }} />
                <span className="ml-2.5 text-[13px] font-bold text-muted">Kynesia · Hoje</span>
              </div>
              <div className="flex flex-col gap-[18px] px-[22px] pb-6 pt-[22px]">
                <div>
                  <div className="mb-2.5 text-xs font-extrabold uppercase tracking-[0.08em] text-muted">Agenda do dia</div>
                  <div className="flex flex-col gap-2">
                    {agendaExemplo.map((a) => (
                      <div key={a.hora} className="flex items-center gap-3 rounded-[14px] px-3 py-2.5" style={{ background: "#f4f9f7" }}>
                        <span className="rounded-[10px] border bg-white px-[9px] py-[5px] text-[13px] font-extrabold text-brand" style={{ borderColor: "#d5e7e1" }}>
                          {a.hora}
                        </span>
                        <span className="flex-1 text-[14.5px] font-bold text-ink">{a.nome}</span>
                        <span className="rounded-full bg-mist-2 px-2.5 py-1 text-xs font-bold text-brand">{a.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[18px] border border-line p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand">
                      <PathIcon d={ICONS.mic} size={20} stroke="#fff" strokeWidth={2} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-ink">Evolução por voz</div>
                      <div className="mt-0.5 flex h-[26px] items-center gap-1">
                        {ondaVoz.map((h, i) => (
                          <span key={i} className="w-1 rounded-sm bg-sage" style={{ height: h }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-[7px]">
                    <span className="h-2 rounded bg-[#e7f0ed]" style={{ width: "96%" }} />
                    <span className="h-2 rounded bg-[#e7f0ed]" style={{ width: "82%" }} />
                    <span className="h-2 rounded bg-[#e7f0ed]" style={{ width: "64%" }} />
                  </div>
                </div>

                <div className="rounded-[18px] p-4" style={{ background: "linear-gradient(135deg,#e4f1ed,#d4e8e1)" }}>
                  <div className="flex items-center gap-2 text-[13px] font-extrabold text-brand">
                    <PathIcon d={ICONS.spark} size={17} stroke="#2a6168" strokeWidth={2} />
                    Sugestão clínica
                  </div>
                  <p className="mt-2 text-sm leading-[1.55] text-ink">
                    Considere os testes ortopédicos indicados para a queixa e reavalie a amplitude de movimento na próxima sessão.
                  </p>
                </div>
                <div className="text-center text-[11.5px] text-muted">Exemplo ilustrativo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section style={{ padding: "24px 0 96px" }}>
        <div className="k-wrap">
          <Reveal className="max-w-[680px]">
            <p className="k-eyebrow">O problema</p>
            <h2 className="k-h2">Você ainda enfrenta esses problemas?</h2>
            <p className="k-lead mt-4">
              A maioria dos fisioterapeutas perde tempo e qualidade por falta de ferramentas adequadas.
            </p>
          </Reveal>
          <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
            {dores.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className="h-full">
                <article className="k-card k-lift h-full p-7">
                  <span className="k-icon-box">
                    <PathIcon d={item.icon} size={24} stroke="#2a6168" />
                  </span>
                  <h3 className="mb-2 mt-5 text-[19px] font-extrabold text-deep">{item.title}</h3>
                  <p className="text-[15.5px] leading-[1.6] text-muted">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="relative overflow-hidden" style={{ background: "var(--k-deep)", color: "#fff" }}>
        <Image
          src="/brand/kynesia-simbolo.svg"
          alt=""
          aria-hidden="true"
          width={1010}
          height={821}
          className="pointer-events-none absolute"
          style={{ left: -160, bottom: -120, width: 520, height: "auto", opacity: 0.06 }}
        />
        <div className="k-wrap relative py-24">
          <Reveal className="max-w-[720px]">
            <p className="k-eyebrow" style={{ color: "var(--k-mint)" }}>A solução</p>
            <h2 className="k-h2" style={{ color: "#fff" }}>O Kynesia centraliza toda sua rotina clínica</h2>
            <p className="mt-4 text-[17px] leading-[1.65]" style={{ color: "#c9e0d9" }}>
              em uma <strong className="font-extrabold text-white">única plataforma inteligente</strong>
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {pilares.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className="h-full">
                <article className="h-full rounded-3xl border p-8" style={{ background: "rgba(255,255,255,.06)", borderColor: "rgba(255,255,255,.12)" }}>
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-brand">
                    <PathIcon d={item.icon} size={26} stroke="#cfe8e0" />
                  </span>
                  <h3 className="mb-2.5 mt-[22px] text-[21px] font-extrabold">{item.title}</h3>
                  <p className="text-base leading-[1.6]" style={{ color: "#e3f1ec" }}>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="funcionalidades" style={{ padding: "104px 0 96px" }}>
        <div className="k-wrap">
          <Reveal className="max-w-[680px]">
            <p className="k-eyebrow">Funcionalidades</p>
            <h2 className="k-h2">Funcionalidades completas para gestão clínica em fisioterapia</h2>
            <p className="k-lead mt-4">
              Tudo o que você precisa para gerenciar sua clínica de fisioterapia com eficiência.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
            {categorias.map((category, index) => (
              <Reveal key={category.title} delay={index * 80} className="h-full">
                <article className="k-card k-lift h-full p-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="k-icon-box" style={{ width: 52, height: 52, borderRadius: 16 }}>
                      <PathIcon d={category.icon} size={26} stroke="#2a6168" />
                    </span>
                    {category.title === "Ecossistema de Benefícios" ? (
                      <span
                        className="rounded-full px-3 py-[5px] text-xs font-extrabold tracking-[0.04em]"
                        style={{ color: "var(--k-soon-fg)", background: "var(--k-soon-bg)" }}
                      >
                        EM BREVE
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mb-3.5 mt-[22px] text-[21px] font-extrabold text-deep">{category.title}</h3>
                  <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                    {category.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[15.5px] leading-normal text-muted">
                        <CheckIcon size={18} stroke="#2a6168" className="mt-0.5 flex-none" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAL IA */}
      <section id="ia" style={{ padding: "0 0 96px" }}>
        <div className="k-wrap">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[36px] text-white"
              style={{ background: "linear-gradient(135deg,#1b4448 0%,#2a6168 60%,#3b7a80 100%)", padding: "clamp(32px,5vw,72px)" }}
            >
              <Image
                src="/brand/kynesia-simbolo.svg"
                alt=""
                aria-hidden="true"
                width={1010}
                height={821}
                className="pointer-events-none absolute"
                style={{ right: -90, top: -70, width: 440, height: "auto", opacity: 0.08 }}
              />
              <div className="relative max-w-[700px]">
                <span className="inline-block rounded-full px-3.5 py-1.5 text-[13px] font-extrabold" style={{ background: "rgba(255,255,255,.14)", color: "#cfe8e0" }}>
                  Diferencial
                </span>
                <h2 className="mt-4 text-[clamp(28px,3.6vw,44px)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                  A inteligência artificial que trabalha junto com você
                </h2>
                <p className="mt-4 text-lg leading-[1.6]" style={{ color: "#d6ebe5" }}>
                  Tecnologia de ponta integrada à sua prática clínica diária.
                </p>
              </div>
              <div className="relative mt-11 grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-[18px]">
                {diferenciais.map((item) => (
                  <article key={item.title} className="rounded-[22px] border p-7" style={{ background: "rgba(255,255,255,.09)", borderColor: "rgba(255,255,255,.16)" }}>
                    <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px]" style={{ background: "rgba(255,255,255,.14)" }}>
                      <PathIcon d={item.icon} size={24} stroke="#cfe8e0" />
                    </span>
                    <h3 className="mb-2 mt-[18px] text-xl font-extrabold">{item.title}</h3>
                    <p className="text-[15.5px] leading-[1.6]" style={{ color: "#d6ebe5" }}>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <HomePricingSection />

      {/* FAQ */}
      <section id="faq" style={{ padding: "0 0 104px" }}>
        <div className="k-wrap" style={{ maxWidth: 860 }}>
          <Reveal className="text-center">
            <p className="k-eyebrow">Perguntas frequentes</p>
            <h2 className="k-h2">FAQ</h2>
          </Reveal>
          <div className="mt-11 flex flex-col gap-3">
            {faqs.map((item, index) => (
              <Reveal key={item.q} delay={Math.min(index, 5) * 80}>
                <details className="k-faq">
                  <summary>
                    {item.q}
                    <PlusIcon />
                  </summary>
                  <p className="pb-[22px] text-base leading-[1.7] text-muted">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "0 0 96px" }}>
        <div className="k-wrap">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[36px] text-center text-white"
              style={{ background: "linear-gradient(135deg,#16363a 0%,#2a6168 100%)", padding: "clamp(48px,7vw,88px) 24px" }}
            >
              <Image
                src="/brand/kynesia-simbolo.svg"
                alt=""
                aria-hidden="true"
                width={1010}
                height={821}
                className="pointer-events-none absolute"
                style={{ right: -80, top: -60, width: 420, height: "auto", opacity: 0.08 }}
              />
              <div className="relative">
                <h2 className="mx-auto max-w-[720px] text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                  Comece a transformar sua rotina clínica hoje
                </h2>
                <div className="mt-[34px] flex flex-wrap justify-center gap-3.5">
                  <Link href="/start-free" className="k-btn k-btn-l k-on-dark">
                    Testar grátis
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
