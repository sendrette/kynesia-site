"use client";

import { useEffect, useState } from "react";

export default function PatientCTA() {
  const [articleTitle, setArticleTitle] = useState("");

  useEffect(() => {
    const h1 = document.querySelector("h1");
    if (h1 && h1.textContent) {
      setArticleTitle(h1.textContent.trim());
    } else {
      const title = document.title;
      const cleanTitle = title.split("|")[0]?.split(":")[0]?.trim() || "";
      setArticleTitle(cleanTitle);
    }
  }, []);

  const waMessage = `Olá! Acabei de ler o artigo '${articleTitle}' no blog do Kynesia e gostaria de conversar com um especialista. Gostaria de saber como funciona a avaliação online e qual seria o melhor tratamento para o meu caso.`;
  const waUrl = `https://wa.me/5512997489847?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="my-12 rounded-2xl bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-950 p-8 text-white shadow-xl border border-teal-700/20">
      <div className="flex flex-col gap-8 text-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Precisa de ajuda para tratar sua dor?
          </h3>
          <p className="text-sm leading-relaxed text-teal-100/90 md:text-base max-w-[85%] mx-auto">
            As informações deste artigo ajudam você a compreender melhor o problema, mas cada pessoa apresenta sintomas e necessidades diferentes. Converse com um dos especialistas do Kynesia e receba uma orientação individualizada baseada em evidências científicas.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-teal-100 max-w-[80%] mx-auto w-full text-left sm:pl-8">
          <li className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span> Atendimento online
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span> Especialistas em fisioterapia
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span> Plano de tratamento personalizado
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span> Baseado em evidências científicas
          </li>
        </ul>

        <div className="flex justify-center pt-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#22c55e] hover:shadow-emerald-500/20 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 w-full md:w-[70%]"
          >
            <svg
              viewBox="0 0 32 32"
              width="22"
              height="22"
              fill="currentColor"
              className="shrink-0"
            >
              <path d="M19.11 17.62c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.85-.16-.27-.02-.41.12-.55.12-.11.27-.28.4-.42.13-.14.18-.23.27-.38.09-.16.03-.3-.02-.42-.05-.11-.6-1.4-.82-1.92-.21-.52-.43-.45-.59-.46l-.5-.01c-.16 0-.42.06-.65.31-.23.25-.88.97-.88 2.35 0 1.39 1.01 2.73 1.15 2.93.14.2 1.98 3.02 4.79 4.24 2.81 1.22 2.81.81 3.31.77.5-.04 1.63-.65 1.86-1.28.23-.63.23-1.17.17-1.28-.06-.11-.24-.18-.5-.31Z" />
              <path d="M24.5 7.5A12.4 12.4 0 0 0 16 4C9.37 4 4 9.37 4 16a11.94 11.94 0 0 0 1.84 6.35L4 28l5.81-1.8A11.96 11.96 0 0 0 16 28c6.63 0 12-5.37 12-12 0-3.2-1.28-6.23-3.5-8.5Zm-8.5 18.6h-.01c-1.74 0-3.45-.47-4.95-1.36l-.36-.21-3.45 1.07 1.09-3.35-.23-.36A9.78 9.78 0 0 1 6.6 16c0-5.2 4.2-9.4 9.4-9.4 2.52 0 4.9.98 6.7 2.78A9.38 9.38 0 0 1 25.4 16c0 5.2-4.2 9.4-9.4 9.4Z" />
            </svg>
            Falar com um Especialista
          </a>
        </div>
      </div>
    </div>
  );
}
