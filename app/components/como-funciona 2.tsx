"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "./reveal";
import { ArrowIcon, CheckIcon } from "./icons";

const steps = [
  {
    title: "Entre em segundos",
    img: "/como-funciona/login.webp",
    alt: "Tela de login do Kynesia",
    desc: "Acesso rápido e seguro. Profissional e paciente têm cada um a sua porta de entrada.",
    points: ["Login profissional com e-mail e senha", "Área do paciente separada, com acesso por PIN"],
  },
  {
    title: "Seu dia em uma só tela",
    img: "/como-funciona/dashboard.webp",
    alt: "Dashboard Visão Geral do Kynesia",
    desc: "Ao entrar, você já vê o que importa: quem vem hoje, como está o mês e o que merece atenção.",
    points: [
      "Pacientes ativos, agenda do dia e faturamento",
      "Meta mensal com progresso em tempo real",
      "Leituras de evidência ligadas às suas condutas",
    ],
  },
  {
    title: "Agenda que enxerga os seus horários livres",
    img: "/como-funciona/agenda.webp",
    alt: "Agenda mensal com disponibilidade inteligente",
    desc: "Veja o mês inteiro e descubra, dia a dia, onde há espaço para encaixar mais atendimentos.",
    points: [
      "Calendário com marcadores nos dias de atendimento",
      "Disponibilidade inteligente: livres, ocupados e oportunidades",
      "Atalho direto para a agenda fixa",
    ],
  },
  {
    title: "Agenda fixa semanal",
    img: "/como-funciona/agenda-fixa.webp",
    alt: "Grade da agenda fixa semanal",
    desc: "Cada paciente no seu horário, de segunda a sexta. Rotina organizada sem remarcar tudo toda semana.",
    points: ["Grade por dia e horário", "Visão imediata dos horários recorrentes"],
  },
  {
    title: "IA que apoia a sua decisão clínica",
    img: "/como-funciona/ia-sugestao.webp",
    alt: "Sugestão clínica baseada em evidência gerada pela IA",
    desc: "A partir da anamnese, a inteligência artificial monta uma sugestão baseada em evidência (PBE). Você revisa, ajusta e decide.",
    points: [
      "Leitura por fase do tratamento",
      "Objetivos, conduta sugerida e exercícios para casa",
      "Apoio clínico: a decisão final é sempre do fisioterapeuta",
    ],
  },
  {
    title: "Libere o acesso do paciente em um toque",
    img: "/como-funciona/pin.webp",
    alt: "PIN de acesso do paciente",
    desc: "Gere o PIN e entregue ao paciente. Sem cadastro complicado, sem senha para lembrar.",
    points: ["PIN de 6 dígitos criado pelo profissional", "Validade de 30 dias, com revogação automática"],
  },
  {
    title: "Um plano de casa que o paciente realmente usa",
    img: "/como-funciona/portal.webp",
    alt: "Área do paciente com plano de casa",
    desc: "O paciente acompanha a próxima sessão, o progresso e faz os exercícios com a sua orientação, onde estiver.",
    points: [
      "Próxima sessão e evolução do tratamento",
      "Plano de casa com exercícios prescritos por você",
      "Mais adesão, melhores resultados",
    ],
  },
  {
    title: "Entenda sua dor, em linguagem simples",
    img: "/como-funciona/entenda-dor.webp",
    alt: "Tela Entenda sua dor",
    desc: "Um paciente que compreende o próprio quadro se engaja mais. O app explica sem jargão.",
    points: ["O que é o diagnóstico, em palavras claras", "O que esperar das próximas semanas"],
  },
  {
    title: "Histórico de sessões sempre à mão",
    img: "/como-funciona/historico.webp",
    alt: "Histórico de sessões do paciente",
    desc: "Cada atendimento registrado, com resumo do que foi contratado, realizado e faltas.",
    points: ["Sessões realizadas com data e horário", "Resumo claro: contratadas, realizadas e faltas"],
  },
];

const total = steps.length;

export default function ComoFunciona() {
  const [active, setActive] = useState(0);

  const goTo = (index: number) => setActive(((index % total) + total) % total);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  return (
    <section
      id="como-funciona"
      className="relative scroll-mt-24 overflow-hidden"
      style={{ background: "radial-gradient(900px 520px at 12% 0%, #dcebe6 0%, rgba(246,250,248,0) 70%)" }}
    >
      <div className="k-wrap" style={{ paddingTop: 72, paddingBottom: 88 }}>
        <Reveal className="max-w-[760px]">
          <span
            className="inline-flex items-center rounded-full border bg-white px-4 py-[7px] text-sm font-bold text-brand"
            style={{ borderColor: "#d5e7e1" }}
          >
            Como funciona
          </span>
          <h2 className="mt-5 text-[clamp(34px,4.6vw,56px)] font-extrabold leading-[1.04] tracking-[-0.035em] text-deep">
            Da agenda à IA clínica, <span className="text-brand">tudo no seu bolso.</span>
          </h2>
          <p className="mt-[18px] text-[clamp(17px,1.5vw,19px)] leading-[1.65] text-muted">
            Toque no celular e percorra, passo a passo, o que o Kynesia faz pela sua clínica e pelo seu paciente.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-start gap-x-10 gap-y-8">
          <Reveal className="min-w-0 flex-[1_1_440px]" delay={80}>
            <div>
              <div className="k-stage" role="region" aria-label="Telas do aplicativo">
                <Image
                  src="/brand/kynesia-simbolo.svg"
                  alt=""
                  aria-hidden="true"
                  width={1010}
                  height={821}
                  className="pointer-events-none absolute"
                  style={{ right: -60, bottom: -60, width: 320, height: "auto", opacity: 0.07 }}
                />
                <button type="button" className="k-phone" onClick={next} aria-label="Próxima tela do aplicativo">
                  {steps.map((step, i) => (
                    <div key={step.img} className={`k-layer${i === active ? " on" : ""}`} aria-hidden={i !== active}>
                      <Image
                        src={step.img}
                        alt={step.alt}
                        width={900}
                        height={1350}
                        loading={i === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 480px) 90vw, 380px"
                      />
                    </div>
                  ))}
                  <span className="k-hint">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 11V5a2 2 0 1 1 4 0v6" />
                      <path d="M13 10V8a2 2 0 1 1 4 0v5a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-3l-2-4a2 2 0 0 1 3-2l1 1" />
                    </svg>
                    Toque para avançar
                  </span>
                </button>
              </div>

              <div className="mt-[22px] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <button type="button" className="k-ctl" onClick={prev} aria-label="Tela anterior">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button type="button" className="k-ctl k-ctl-main" onClick={next} aria-label="Próxima tela">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
                <div className="k-dots" aria-hidden="true">
                  {steps.map((step, i) => (
                    <i key={step.img} className={i === active ? "on" : ""} />
                  ))}
                </div>
                <p className="text-[15px] font-extrabold text-muted" aria-live="polite">
                  <span className="text-deep">{active + 1}</span> de {total}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="min-w-0 flex-[1_1_400px]" delay={160}>
            <div className="flex flex-col gap-2.5">
              {steps.map((step, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={step.title}
                    type="button"
                    className={`k-step${isActive ? " on" : ""}`}
                    onClick={() => goTo(i)}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span className="flex items-center gap-3.5">
                      <span className="k-step-n">{i + 1}</span>
                      <span className="text-base font-extrabold leading-[1.3] text-deep">{step.title}</span>
                    </span>
                    {isActive ? (
                      <span className="k-step-body">
                        <span className="block text-[15px] leading-[1.6] text-muted">{step.desc}</span>
                        <span className="mt-3 flex flex-col gap-2">
                          {step.points.map((point) => (
                            <span key={point} className="flex items-start gap-2.5 text-[14.5px] font-semibold leading-[1.55] text-[#35565b]">
                              <CheckIcon size={16} stroke="#2a6168" strokeWidth={2.6} className="mt-[3px] flex-none" />
                              {point}
                            </span>
                          ))}
                        </span>
                      </span>
                    ) : null}
                  </button>
                );
              })}
              <Link href="/start-free" className="mt-3.5 inline-flex items-center gap-2 self-start text-[14.5px] font-extrabold text-brand hover:underline">
                Quero testar grátis
                <ArrowIcon size={18} strokeWidth={2.4} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
