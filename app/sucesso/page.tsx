'use client';

import { useEffect } from 'react';

export default function SuccessPage() {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://kynesia-app.vercel.app';
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md text-center">
        {/* Check Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-50">
              <svg
                className="h-12 w-12 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
          Assinatura confirmada! Seja bem-vindo ao ecossistema Kynesia.
        </h1>

        {/* Welcome Message */}
        <p className="mb-8 text-lg text-gray-600">
          Parabéns pela sua escolha de investir em Prática Baseada em Evidências. Agora você
          pode desfrutar de todos os benefícios exclusivos do app Kynesia e elevar sua clínica
          para o próximo nível.
        </p>

        {/* Redirect Message */}
        <p className="mb-10 text-sm text-gray-500">
          Você será redirecionado automaticamente para o painel em alguns segundos...
        </p>

        {/* Action Button */}
        <a
          href="https://kynesia-app.vercel.app"
          className="mb-6 inline-block rounded-lg bg-teal-600 px-8 py-3 font-semibold text-white transition duration-200 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Aceder ao Painel Agora
        </a>

        {/* Support Message */}
        <p className="text-xs text-gray-400">
          Se o redirecionamento não funcionar, clique no botão acima para continuar.
        </p>
      </div>
    </div>
  );
}
