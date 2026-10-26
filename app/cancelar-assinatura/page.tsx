"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import { CheckIcon, LockIcon, PathIcon } from "../components/icons";
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

  const cardStyle = { borderColor: "#ddeae6", boxShadow: "0 24px 60px rgba(22,54,58,.07)" };
  const errorBox = (
    <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-3.5 text-sm font-semibold text-red-800">
      {error}
    </div>
  );

  return (
    <main className="k-page">
      <SiteHeader />

      <div className="k-wrap" style={{ maxWidth: 900, paddingTop: 48, paddingBottom: 96 }}>
        <div className="k-hin">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
            <Link href="/planos" className="text-sm font-bold text-brand underline-offset-4 hover:underline">
              ← Voltar para planos
            </Link>
            <span className="text-[13px] text-muted">Cancelamento 100% online e sem burocracia</span>
          </div>

          <div className="rounded-[32px] border bg-white p-7 md:p-12" style={cardStyle}>
            <div className="text-center">
              <span className="inline-flex rounded-full bg-mist px-3.5 py-1.5 text-[13px] font-extrabold uppercase tracking-wider text-brand">
                Autonomia do Cliente
              </span>
              <h1 className="mt-4 text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-deep">
                Gerenciar ou Cancelar Assinatura
              </h1>
              <p className="mx-auto mt-3.5 max-w-xl text-[17px] leading-[1.65] text-muted">
                Se você está no período de <strong>5 dias grátis</strong> e não deseja continuar, ou se já é assinante e deseja encerrar seu plano, cancele a qualquer momento sem pegadinhas.
              </p>
            </div>

            {/* PASSO 1: BUSCA POR EMAIL OU CPF */}
            {step === "search" && (
              <form onSubmit={handleSearch} className="mx-auto mt-9 max-w-lg space-y-4">
                <div>
                  <label htmlFor="identifier" className="mb-2 block text-sm font-extrabold text-deep">
                    E-mail ou CPF cadastrado na assinatura
                  </label>
                  <input
                    id="identifier"
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="exemplo@email.com ou 000.000.000-00"
                    className="k-input"
                  />
                  <p className="mt-1.5 text-[13px] text-muted">
                    Informe exatamente o mesmo e-mail ou CPF preenchido no momento do cadastro.
                  </p>
                </div>

                {error && errorBox}

                <button type="submit" disabled={loading} className="k-btn k-btn-p w-full">
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Localizando assinatura...
                    </>
                  ) : (
                    "Localizar Minha Assinatura"
                  )}
                </button>

                <div className="mt-4 flex items-start gap-2.5 rounded-2xl border border-line bg-paper p-4 text-[13px] leading-relaxed text-muted">
                  <LockIcon size={16} stroke="#2a6168" className="mt-0.5 flex-none" />
                  <p>
                    <strong className="text-ink">Segurança e Transparência:</strong> O cancelamento no Asaas remove imediatamente qualquer agendamento de cobrança futura no seu cartão de crédito.
                  </p>
                </div>
              </form>
            )}

            {/* PASSO 2: DETALHES ENCONTRADOS E CONFIRMAÇÃO */}
            {step === "confirm" && subscription && (
              <div className="mx-auto mt-8 max-w-xl space-y-6">
                <div className="rounded-3xl border border-line bg-paper p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-brand">
                        Assinatura Localizada
                      </span>
                      <h2 className="mt-1 text-2xl font-extrabold text-deep">Plano {subscription.planName}</h2>
                      <p className="mt-0.5 text-sm text-muted">
                        Titular: <strong>{customerName}</strong> ({customerEmail})
                      </p>
                    </div>
                    {subscription.isTrial ? (
                      <span className="rounded-full bg-mist-2 px-3 py-1 text-xs font-extrabold text-brand">
                        5 Dias Grátis (Trial)
                      </span>
                    ) : (
                      <span className="rounded-full bg-mist-2 px-3 py-1 text-xs font-extrabold text-deep">
                        Assinatura Ativa
                      </span>
                    )}
                  </div>

                  <div className="mt-5 space-y-2.5 border-t border-line pt-4 text-sm text-ink">
                    <div className="flex justify-between gap-3">
                      <span className="text-muted">Próxima cobrança programada:</span>
                      <span className="font-extrabold text-deep">{formatDate(subscription.nextDueDate)}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-muted">Valor que NÃO será cobrado:</span>
                      <span className="font-extrabold text-brand">{formatCurrencyBRL(subscription.value)}</span>
                    </div>
                  </div>

                  {subscription.isTrial && (
                    <div
                      className="mt-4 rounded-2xl border p-3.5 text-[13px] leading-relaxed"
                      style={{ background: "var(--k-soon-bg)", borderColor: "#ecd29a", color: "var(--k-soon-fg)" }}
                    >
                      <strong>Período de Testes:</strong> Ao confirmar o cancelamento agora, o seu cartão <strong>não será cobrado</strong> de nenhuma forma.
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="reason" className="mb-1.5 block text-sm font-extrabold text-deep">
                    Motivo do cancelamento (opcional)
                  </label>
                  <select
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="k-input"
                  >
                    <option value="">Selecione um motivo...</option>
                    <option value="Apenas testando a ferramenta">Estava apenas testando a ferramenta</option>
                    <option value="Preço / Custo">Preço / Condições financeiras</option>
                    <option value="Faltou alguma funcionalidade">Faltou alguma funcionalidade específica</option>
                    <option value="Não preciso no momento">Não preciso no momento</option>
                    <option value="Outro">Outro motivo</option>
                  </select>
                </div>

                {error && errorBox}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleConfirmCancel}
                    disabled={canceling}
                    className="k-btn flex-1"
                    style={{ background: "#be123c", color: "#fff" }}
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

                  <button type="button" onClick={handleReset} disabled={canceling} className="k-btn k-btn-g">
                    Voltar
                  </button>
                </div>
              </div>
            )}

            {/* PASSO 3: SUCESSO */}
            {step === "success" && (
              <div className="mx-auto mt-8 max-w-lg space-y-6 text-center" role="status">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-mist">
                  <CheckIcon size={40} stroke="#2a6168" strokeWidth={2.5} />
                </div>

                <div>
                  <h2 className="text-2xl font-extrabold text-deep md:text-3xl">Cancelamento Realizado com Sucesso!</h2>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    A assinatura foi removida diretamente no Asaas. Nenhuma cobrança futura será realizada no seu cartão de crédito.
                  </p>
                </div>

                <ul className="space-y-2 rounded-3xl border border-line bg-paper p-5 text-left text-sm text-ink">
                  {[
                    ["Cartão liberado:", "A cobrança recorrente foi encerrada."],
                    ["Plano gratuito ativo:", "Sua conta foi migrada para o plano Start (gratuito)."],
                    ["Dados seguros:", "Nenhum dado cadastrado de pacientes ou prontuários foi apagado."],
                    ["Comprovante enviado:", `Enviamos a confirmação para ${customerEmail}.`],
                  ].map(([strong, text]) => (
                    <li key={strong} className="flex gap-2.5">
                      <CheckIcon size={18} stroke="#2a6168" className="mt-0.5 flex-none" />
                      <span>
                        <strong>{strong}</strong> {text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
                  <Link href="/" className="k-btn k-btn-p">
                    Página Inicial
                  </Link>
                  <a href="https://kynesia-app.vercel.app" className="k-btn k-btn-g">
                    Acessar App Kynesia
                  </a>
                </div>
              </div>
            )}

            {/* PASSO 4: NENHUMA ASSINATURA ENCONTRADA */}
            {step === "not_found" && (
              <div className="mx-auto mt-8 max-w-lg space-y-6 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-mist">
                  <PathIcon d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z M12 16v-4 M12 8h.01" size={32} stroke="#2a6168" strokeWidth={2} />
                </div>

                <div>
                  <h2 className="text-2xl font-extrabold text-deep">Nenhuma Assinatura Ativa Encontrada</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    Não localizamos nenhuma assinatura ou cobrança pendente para os dados informados (<strong>{identifier}</strong>).
                  </p>
                </div>

                <div className="space-y-2 rounded-3xl border border-line bg-paper p-4 text-left text-[13.5px] text-muted">
                  <p>• Se você já cancelou anteriormente, seu cartão já está desvinculado e seguro.</p>
                  <p>• Verifique se digitou o mesmo e-mail ou CPF que preencheu na hora da assinatura.</p>
                  <p>• Caso precise de ajuda, nosso suporte está disponível via WhatsApp.</p>
                </div>

                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <button type="button" onClick={handleReset} className="k-btn k-btn-p">
                    Tentar Outro E-mail / CPF
                  </button>
                  <a
                    href="https://wa.me/5512996304111?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20minha%20assinatura%20no%20Kynesia"
                    target="_blank"
                    rel="noreferrer"
                    className="k-btn k-btn-g"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* DÚVIDAS FREQUENTES SOBRE O CANCELAMENTO */}
        <div className="mt-12 rounded-[32px] border bg-white p-6 md:p-10" style={cardStyle}>
          <h2 className="mb-5 text-2xl font-extrabold tracking-[-0.02em] text-deep">Dúvidas Frequentes sobre Cancelamento</h2>
          <div className="space-y-5 text-[15px] text-muted">
            <div>
              <h3 className="text-base font-extrabold text-deep">Vou ser cobrado se cancelar durante os 5 dias de teste grátis?</h3>
              <p className="mt-1 leading-relaxed">
                <strong>Não.</strong> Se você cancelar durante o período de 5 dias gratuitos, o agendamento da cobrança no Asaas é cancelado e nenhuma cobrança será efetuada no seu cartão.
              </p>
            </div>
            <div>
              <h3 className="text-base font-extrabold text-deep">Vou perder os dados cadastrados ou pacientes?</h3>
              <p className="mt-1 leading-relaxed">
                <strong>Não.</strong> Todos os seus dados, pacientes e prontuários permanecem salvos com segurança. Sua conta simplesmente continuará ativa nas regras do plano Start (gratuito).
              </p>
            </div>
            <div>
              <h3 className="text-base font-extrabold text-deep">Posso reativar meu plano depois?</h3>
              <p className="mt-1 leading-relaxed">
                Sim! Você pode contratar ou reativar qualquer um dos planos pagos quando desejar, diretamente pela página de planos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
