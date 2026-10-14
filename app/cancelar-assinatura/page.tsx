"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import { formatCurrencyBRL } from "../lib/pricing";

type SubscriptionData = {
  id?: string;
  planName: string;
  value: number;
  nextDueDate?: string;
  isTrial: boolean;
  status: string;
  description?: string;
};

export default function CancelarAssinaturaPage() {
  const [identifier, setIdentifier] = useState("");
  const [loading, setLoading] = useState(false);
  const [canceling, setCanceling] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState<"search" | "confirm" | "success" | "not_found">("search");
  const [reason, setReason] = useState("");

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const cleanId = identifier.trim();
    if (!cleanId) {
      setError("Por favor, digite seu e-mail ou CPF cadastrado.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/asaas/cancel-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: cleanId, action: "check" }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        if (data.notFound) {
          setStep("not_found");
          return;
        }
        throw new Error(data.error || "Não foi possível consultar os dados.");
      }

      setCustomerName(data.customerName || "Profissional");
      setCustomerEmail(data.customerEmail || cleanId);

      if (!data.hasActiveSubscription) {
        setStep("not_found");
        return;
      }

      setSubscription(data.subscription);
      setStep("confirm");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado ao consultar assinatura.");
    } finally {
      setLoading(false);
    }
  }

  async function handleConfirmCancel() {
    setCanceling(true);
    setError("");

    try {
      const res = await fetch("/api/asaas/cancel-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: customerEmail || identifier.trim(),
          action: "cancel",
          reason,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Erro ao processar o cancelamento no Asaas.");
      }

      setStep("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao cancelar assinatura.");
    } finally {
      setCanceling(false);
    }
  }

  function handleReset() {
    setIdentifier("");
    setError("");
    setSubscription(null);
    setStep("search");
  }

  function formatDate(dateStr?: string) {
    if (!dateStr) return "Em breve";
    try {
      const [year, month, day] = dateStr.split("T")[0].split("-");
      if (year && month && day) return `${day}/${month}/${year}`;
      return new Date(dateStr).toLocaleDateString("pt-BR");
    } catch {
      return dateStr;
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-teal-50/30 text-gray-900">
      <SiteHeader />

      <div className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/planos" className="text-sm font-medium text-teal-700 underline hover:text-teal-800">
            ← Voltar para planos
          </Link>
          <span className="text-xs text-gray-500">Cancelamento 100% online e sem burocracia</span>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-teal-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700">
              Autonomia do Cliente
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Gerenciar ou Cancelar Assinatura
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
              Se você está no período de <strong>5 dias grátis</strong> e não deseja continuar, ou se já é assinante e deseja encerrar seu plano, cancele a qualquer momento sem pegadinhas.
            </p>
          </div>

          {/* PASSO 1: BUSCA POR EMAIL OU CPF */}
          {step === "search" && (
            <form onSubmit={handleSearch} className="mx-auto mt-9 max-w-lg space-y-4">
              <div>
                <label htmlFor="identifier" className="block text-sm font-semibold text-slate-700 mb-2">
                  E-mail ou CPF cadastrado na assinatura
                </label>
                <input
                  id="identifier"
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="exemplo@email.com ou 000.000.000-00"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3.5 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
                <p className="mt-1.5 text-xs text-slate-500">
                  Informe exatamente o mesmo e-mail ou CPF preenchido no momento do cadastro.
                </p>
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Localizando assinatura...
                  </>
                ) : (
                  "Localizar Minha Assinatura"
                )}
              </button>

              <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-4 text-xs text-slate-600 leading-relaxed">
                🔒 <strong>Segurança e Transparência:</strong> O cancelamento no Asaas remove imediatamente qualquer agendamento de cobrança futura no seu cartão de crédito.
              </div>
            </form>
          )}

          {/* PASSO 2: DETALHES ENCONTRADOS E CONFIRMAÇÃO */}
          {step === "confirm" && subscription && (
            <div className="mx-auto mt-8 max-w-xl space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                      Assinatura Localizada
                    </span>
                    <h2 className="mt-1 text-2xl font-bold text-slate-900">
                      Plano {subscription.planName}
                    </h2>
                    <p className="text-sm text-slate-600 mt-0.5">
                      Titular: <strong>{customerName}</strong> ({customerEmail})
                    </p>
                  </div>
                  {subscription.isTrial ? (
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                      5 Dias Grátis (Trial)
                    </span>
                  ) : (
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                      Assinatura Ativa
                    </span>
                  )}
                </div>

                <div className="mt-5 space-y-2.5 border-t border-slate-200 pt-4 text-sm text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Próxima cobrança programada:</span>
                    <span className="font-semibold text-slate-900">
                      {formatDate(subscription.nextDueDate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Valor que NÃO será cobrado:</span>
                    <span className="font-semibold text-emerald-600">
                      {formatCurrencyBRL(subscription.value)}
                    </span>
                  </div>
                </div>

                {subscription.isTrial && (
                  <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3.5 text-xs text-amber-900 leading-relaxed">
                    ℹ️ <strong>Período de Testes:</strong> Ao confirmar o cancelamento agora, o seu cartão <strong>não será cobrado</strong> de nenhuma forma.
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Motivo do cancelamento (opcional)
                </label>
                <select
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
                >
                  <option value="">Selecione um motivo...</option>
                  <option value="Apenas testando a ferramenta">Estava apenas testando a ferramenta</option>
                  <option value="Preço / Custo">Preço / Condições financeiras</option>
                  <option value="Faltou alguma funcionalidade">Faltou alguma funcionalidade específica</option>
                  <option value="Não preciso no momento">Não preciso no momento</option>
                  <option value="Outro">Outro motivo</option>
                </select>
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-700">
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleConfirmCancel}
                  disabled={canceling}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-rose-700 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
                >
                  {canceling ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Cancelando no Asaas...
                    </>
                  ) : (
                    "Confirmar Cancelamento Agora"
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  disabled={canceling}
                  className="rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Voltar
                </button>
              </div>
            </div>
          )}

          {/* PASSO 3: SUCESSO */}
          {step === "success" && (
            <div className="mx-auto mt-8 max-w-lg text-center space-y-6">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  Cancelamento Realizado com Sucesso!
                </h2>
                <p className="mt-2 text-base text-slate-600">
                  A assinatura foi removida diretamente no Asaas. Nenhuma cobrança futura será realizada no seu cartão de crédito.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left text-sm text-slate-700 space-y-2">
                <p>✓ <strong>Cartão liberado:</strong> A cobrança recorrente foi encerrada.</p>
                <p>✓ <strong>Plano gratuito ativo:</strong> Sua conta foi migrada para o plano Start (gratuito).</p>
                <p>✓ <strong>Dados seguros:</strong> Nenhum dado cadastrado de pacientes ou prontuários foi apagado.</p>
                <p>✓ <strong>Comprovante enviado:</strong> Enviamos a confirmação para {customerEmail}.</p>
              </div>

              <div className="pt-2 flex flex-col gap-3 sm:flex-row justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
                >
                  Página Inicial
                </Link>
                <a
                  href="https://kynesia-app.vercel.app"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Acessar App Kynesia
                </a>
              </div>
            </div>
          )}

          {/* PASSO 4: NENHUMA ASSINATURA ENCONTRADA */}
          {step === "not_found" && (
            <div className="mx-auto mt-8 max-w-lg text-center space-y-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Nenhuma Assinatura Ativa Encontrada
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Não localizamos nenhuma assinatura ou cobrança pendente para os dados informados (<strong>{identifier}</strong>).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 text-left space-y-2">
                <p>• Se você já cancelou anteriormente, seu cartão já está desvinculado e seguro.</p>
                <p>• Verifique se digitou o mesmo e-mail ou CPF que preencheu na hora da assinatura.</p>
                <p>• Caso precise de ajuda, nosso suporte está disponível via WhatsApp.</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
                >
                  Tentar Outro E-mail / CPF
                </button>
                <a
                  href="https://wa.me/5512996304111?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20minha%20assinatura%20no%20Kynesia"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>

        {/* DÚVIDAS FREQUENTES SOBRE O CANCELAMENTO */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Dúvidas Frequentes sobre Cancelamento</h2>
          <div className="space-y-4 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">Vou ser cobrado se cancelar durante os 5 dias de teste grátis?</p>
              <p className="mt-1 leading-relaxed">
                <strong>Não.</strong> Se você cancelar durante o período de 5 dias gratuitos, o agendamento da cobrança no Asaas é cancelado e nenhuma cobrança será efetuada no seu cartão.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Vou perder os dados cadastrados ou pacientes?</p>
              <p className="mt-1 leading-relaxed">
                <strong>Não.</strong> Todos os seus dados, pacientes e prontuários permanecem salvos com segurança. Sua conta simplesmente continuará ativa nas regras do plano Start (gratuito).
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Posso reativar meu plano depois?</p>
              <p className="mt-1 leading-relaxed">
                Sim! Você pode contratar ou reativar qualquer um dos planos pagos quando desejar, diretamente pela página de planos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
