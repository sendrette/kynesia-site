"use client";

import Link from "next/link";
import { useState } from "react";

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
          phone: phone.trim(),
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

      setSuccessMessage("Conta gratuita liberada, redirecionando...");
      setTimeout(() => {
        window.location.href = "https://kynesia-app.vercel.app";
      }, 1200);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-teal-50 to-blue-50 px-6 py-10">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Kynesia
          </Link>
          <Link href="/" className="text-sm font-medium text-teal-700 underline">Voltar ao site</Link>
        </header>

        <section className="mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_48px_-28px_rgba(15,23,42,0.35)] md:p-9">
          <h1 className="text-3xl font-bold leading-tight text-[#122a5a] md:text-4xl">
            Comece gratuitamente no Kynesia
          </h1>
          <p className="mt-3 text-slate-600">
            Crie sua conta gratuita e conheça as funcionalidades da plataforma.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
            />

            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="WhatsApp (opcional)"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
            />

            <select
              value={profession}
              onChange={(e) => setProfession(e.target.value as Profession)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
            >
              <option value="">Profissão (opcional)</option>
              <option value="Fisioterapeuta">Fisioterapeuta</option>
              <option value="Estudante">Estudante</option>
            </select>

            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={wantsContent}
                onChange={(e) => setWantsContent(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              />
              Quero receber conteúdos e novidades
            </label>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Processando...
                </>
              ) : (
                "Continuar gratuitamente"
              )}
            </button>

            <div className="min-h-6 pt-1 text-sm">
              {error ? <p className="text-red-600">{error}</p> : null}
              {successMessage ? <p className="text-teal-700">{successMessage}</p> : null}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
