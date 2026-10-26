"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import { ArrowIcon, GiftIcon } from "../components/icons";

const WHATSAPP_HREF =
  "https://wa.me/5512996304111?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20do%20Kynesia";

type Profession = "" | "Fisioterapeuta" | "Estudante";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function StartFreePageClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState<Profession>("");
  const [wantsContent, setWantsContent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName) {
      setError("Informe seu nome.");
      return;
    }

    if (!trimmedEmail || !isValidEmail(trimmedEmail)) {
      setError("Informe um e-mail válido.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          profession,
          source: "free-plan",
          plan: "start",
          wantsContent,
        }),
      });

      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Não foi possível liberar a conta gratuita.");
      }

      setSuccessMessage("Redirecionando para o cadastro seguro...");
      const params = new URLSearchParams({
        plan: "flow",
        trial: "true",
        name: trimmedName,
        email: trimmedEmail,
      });
      if (trimmedPhone) {
        params.set("phone", trimmedPhone);
      }

      setTimeout(() => {
        window.location.href = `/checkout?${params.toString()}`;
      }, 800);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="k-page">
      <SiteHeader />

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
        <div className="k-wrap relative flex flex-wrap items-center gap-x-14 gap-y-10 pb-24 pt-14">
          <div className="k-hin min-w-0" style={{ flex: "1 1 420px" }}>
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand no-underline hover:underline">
              ← Voltar para o início
            </Link>
            <h1 className="mt-[18px] text-[clamp(34px,4.6vw,56px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-deep">
              5 dias grátis no Kynesia
            </h1>
            <p className="mt-5 max-w-[34rem] text-[17.5px] leading-[1.65] text-muted">
              Cadastre-se para começar. Você não será cobrado durante os 5 dias. Após o período de teste, será cobrado o valor do plano Flow caso você não cancele.
            </p>

            <div
              className="mt-8 flex max-w-[520px] items-start gap-3.5 rounded-[20px] border bg-white p-[18px]"
              style={{ borderColor: "#d5e7e1", boxShadow: "0 10px 30px rgba(22,54,58,.06)" }}
            >
              <span className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-[14px] bg-brand">
                <GiftIcon size={24} stroke="#fff" />
              </span>
              <div>
                <p className="text-[17px] font-extrabold leading-[1.35] text-deep">
                  Assine o Kynesia e receba gratuitamente um kit de avaliação de 23 páginas no seu e-mail!
                </p>
                <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">
                  9 instrumentos clínicos ortopédicos completos em PDF com cálculo de escore e tabelas de evolução.
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0" style={{ flex: "1 1 400px", maxWidth: 520 }}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[28px] border bg-white"
              style={{ borderColor: "#ddeae6", padding: "clamp(26px,3.4vw,40px)", boxShadow: "0 40px 80px rgba(22,54,58,.14), 0 6px 16px rgba(22,54,58,.06)" }}
            >
              <h2 className="text-[22px] font-extrabold text-deep">Crie sua conta gratuita</h2>
              <p className="mt-1.5 text-[15px] leading-normal text-muted">Leva menos de um minuto.</p>

              <div className="mt-6 space-y-4">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome"
                  aria-label="Nome"
                  autoComplete="name"
                  className="k-input"
                />

                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  aria-label="Email"
                  autoComplete="email"
                  className="k-input"
                />

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="WhatsApp (opcional)"
                  aria-label="WhatsApp (opcional)"
                  autoComplete="tel"
                  className="k-input"
                />

                <select
                  value={profession}
                  onChange={(e) => setProfession(e.target.value as Profession)}
                  aria-label="Profissão (opcional)"
                  className="k-input"
                >
                  <option value="">Profissão (opcional)</option>
                  <option value="Fisioterapeuta">Fisioterapeuta</option>
                  <option value="Estudante">Estudante</option>
                </select>

                <label className="flex items-center gap-3 text-[15px] text-ink">
                  <input
                    type="checkbox"
                    checked={wantsContent}
                    onChange={(e) => setWantsContent(e.target.checked)}
                    className="h-5 w-5 flex-none accent-[#2a6168]"
                  />
                  Quero receber conteúdos e novidades
                </label>

                <button type="submit" disabled={loading} className="k-btn k-btn-p w-full" style={{ marginTop: 8 }}>
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Processando...
                    </>
                  ) : (
                    <>
                      Continuar gratuitamente
                      <ArrowIcon size={18} />
                    </>
                  )}
                </button>

                <div className="min-h-6 text-sm" role="status" aria-live="polite">
                  {error ? <p className="font-semibold text-red-700">{error}</p> : null}
                  {successMessage ? <p className="font-semibold text-brand">{successMessage}</p> : null}
                </div>
              </div>

              <div className="mt-2 border-t pt-5 text-center text-[14.5px] text-muted" style={{ borderColor: "#e7f0ed" }}>
                Ficou com dúvida?{" "}
                <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="font-extrabold text-brand underline">
                  Fale com a gente no WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
