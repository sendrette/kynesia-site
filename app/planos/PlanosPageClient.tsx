"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "../components/reveal";
import PricingComparisonSection from "../components/pricing-comparison-section";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import { GiftIcon, PathIcon, PlusIcon } from "../components/icons";
import type { BillingCycle } from "../lib/pricing";

const quickFaq = [
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Não há fidelidade e o cancelamento pode ser feito a qualquer momento diretamente pelo site, em nossa página de cancelamento, de forma 100% online.",
  },
  {
    q: "Como funcionam os 5 dias grátis?",
    a: "Você inicia o teste do plano Flow sem pagar nada hoje. Se você cancelar antes do término dos 5 dias, seu cartão não será cobrado e sua conta migra para o plano gratuito Start.",
  },
  {
    q: "Preciso de cartão para começar?",
    a: "Para usufruir dos 5 dias grátis com todos os recursos liberados, o cartão é cadastrado para validação inicial de segurança, mas a cobrança só ocorre no 6º dia caso você não cancele antes.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. O Kynesia funciona em desktop, tablet e celular com interface responsiva.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Segurança com boas práticas de proteção e conformidade com LGPD. Seus dados nunca são perdidos mesmo em caso de cancelamento.",
  },
];

const diferenciais = [
  { icon: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z M19 3v4 M21 5h-4", title: "Economia de tempo com IA" },
  { icon: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", title: "Organização total da clínica" },
  { icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8", title: "Melhor experiência para o paciente" },
  { icon: "M13 2 3 14h9l-1 8 10-12h-9Z", title: "Crescimento profissional contínuo" },
];

export default function PlanosPageClient() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <main className="k-page">
      <SiteHeader />

      <section
        className="relative overflow-hidden"
        style={{ background: "radial-gradient(900px 480px at 50% 0%, #dcebe6 0%, rgba(246,250,248,0) 70%)" }}
      >
        <Image
          src="/brand/kynesia-simbolo.svg"
          alt=""
          aria-hidden="true"
          width={1010}
          height={821}
          className="pointer-events-none absolute"
          style={{ right: -120, top: -20, width: 520, height: "auto", opacity: 0.06 }}
        />
        <div className="k-wrap k-hin relative pb-14 pt-14 text-center" style={{ maxWidth: 860 }}>
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand no-underline hover:underline">
            ← Voltar para o início
          </Link>
          <h1 className="mt-[18px] text-[clamp(34px,4.8vw,56px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-deep">
            Escolha o plano ideal para sua rotina clínica
          </h1>
          <p className="mx-auto mt-[18px] max-w-[560px] text-lg leading-[1.6] text-muted">
            Comece grátis e evolua conforme sua necessidade. Sem complicações.
          </p>
          <div
            className="mt-7 inline-flex items-center gap-3 rounded-[28px] border bg-white py-2.5 pl-3 pr-5 text-left"
            style={{ borderColor: "#d5e7e1", boxShadow: "0 10px 30px rgba(22,54,58,.06)" }}
          >
            <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-brand">
              <GiftIcon size={18} stroke="#fff" />
            </span>
            <span className="text-[14.5px] font-bold leading-[1.4] text-ink">
              Assine o Kynesia e receba gratuitamente um kit de avaliação de 23 páginas no seu e-mail!
            </span>
          </div>
        </div>
      </section>

      <PricingComparisonSection
        showHeader={false}
        billingCycle={billingCycle}
        onBillingCycleChange={setBillingCycle}
      />

      <section style={{ padding: "0 0 24px" }}>
        <div className="k-wrap">
          <Reveal className="max-w-[680px]">
            <p className="k-eyebrow">Diferenciais</p>
            <h2 className="k-h2">Por que escolher o Kynesia?</h2>
          </Reveal>
          <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">
            {diferenciais.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className="h-full">
                <article className="k-card k-lift h-full p-[30px]">
                  <span className="k-icon-box">
                    <PathIcon d={item.icon} size={24} stroke="#2a6168" />
                  </span>
                  <h3 className="mt-5 text-[19px] font-extrabold text-deep">{item.title}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 0 24px" }}>
        <div className="k-wrap">
          <Reveal>
            <div
              className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 rounded-[32px] border bg-white"
              style={{ borderColor: "#ddeae6", padding: "clamp(28px,4vw,48px)" }}
            >
              <div className="min-w-0" style={{ flex: "1 1 420px" }}>
                <p className="k-eyebrow">Transparência total</p>
                <h2 className="mt-2.5 text-[clamp(26px,3vw,34px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-deep">
                  Sem fidelidade. Cancele quando quiser em 1 clique.
                </h2>
                <p className="mt-3 max-w-[560px] text-[16.5px] leading-[1.65] text-muted">
                  Está utilizando os <strong>5 dias gratuitos</strong> e não quer que seja cobrado? Ou já é assinante e deseja encerrar seu plano? Cancele online a qualquer momento com apenas seu e-mail ou CPF, sem burocracia.
                </p>
                <p className="mt-3 text-sm text-muted">
                  Seus dados e pacientes continuam protegidos e salvos na sua conta gratuita mesmo após o cancelamento.
                </p>
              </div>
              <Link href="/cancelar-assinatura" className="k-btn k-btn-g">
                Gerenciar ou Cancelar Assinatura
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "96px 0 24px" }}>
        <div className="k-wrap" style={{ maxWidth: 860 }}>
          <Reveal className="text-center">
            <p className="k-eyebrow">Perguntas rápidas</p>
            <h2 className="k-h2">FAQ rápido</h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-3">
            {quickFaq.map((item, index) => (
              <Reveal key={item.q} delay={index * 80}>
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

      <section style={{ padding: "96px 0" }}>
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
                <div className="mt-[34px] flex justify-center">
                  <Link href={`/checkout?plan=flow&cycle=${billingCycle}`} className="k-btn k-btn-l k-on-dark">
                    Começar agora
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
