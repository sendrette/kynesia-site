"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const validPlans = new Set(["start", "flow", "elite"]);

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const requestedPlan = searchParams.get("plan")?.toLowerCase() ?? "flow";
  const plan = validPlans.has(requestedPlan) ? requestedPlan : "flow";

  const asaasBase = process.env.NEXT_PUBLIC_ASAAS_CHECKOUT_URL ?? "https://www.asaas.com/checkout";
  const destination = `${asaasBase}?plan=${plan}`;

  useEffect(() => {
    window.location.href = destination;
  }, [destination]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white via-teal-50 to-blue-50 px-6 text-center">
      <div className="max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">Redirecionando para o checkout seguro</h1>
        <p className="mt-3 text-gray-600">
          Você está indo para a finalização da assinatura do plano <strong>{plan.toUpperCase()}</strong>.
        </p>
        <a
          href={destination}
          className="mt-6 inline-flex rounded-xl bg-teal-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700"
        >
          Continuar para pagamento
        </a>
        <p className="mt-4 text-sm text-gray-500">
          Problemas no redirecionamento? Volte para <Link href="/planos" className="text-teal-700 underline">planos</Link>.
        </p>
      </div>
    </main>
  );
}
