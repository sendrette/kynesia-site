"use client";

import { useEffect, useState } from "react";

const WA_NUMBER = "https://wa.me/5512997489847";
const WA_MESSAGE = "Olá, gostaria de saber mais sobre os planos do Kynesia";

export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 250);
    return () => clearTimeout(t);
  }, []);

  const href = `${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <a
      aria-label="Abrir conversa no WhatsApp"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        `fixed right-5 bottom-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full ` +
        `bg-[#25D366] shadow-[0_12px_28px_rgba(37,211,102,0.35)] transition-all duration-300 ` +
        `transform-gpu hover:scale-105 hover:bg-[#22c55e] active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 ` +
        `${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`
      }
    >
      <span className="sr-only">WhatsApp</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="none"
        className="drop-shadow-[0_1px_0_rgba(0,0,0,0.05)]"
      >
        <path
          d="M19.11 17.62c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.85-.16-.27-.02-.41.12-.55.12-.11.27-.28.4-.42.13-.14.18-.23.27-.38.09-.16.03-.3-.02-.42-.05-.11-.6-1.4-.82-1.92-.21-.52-.43-.45-.59-.46l-.5-.01c-.16 0-.42.06-.65.31-.23.25-.88.97-.88 2.35 0 1.39 1.01 2.73 1.15 2.93.14.2 1.98 3.02 4.79 4.24 2.81 1.22 2.81.81 3.31.77.5-.04 1.63-.65 1.86-1.28.23-.63.23-1.17.17-1.28-.06-.11-.24-.18-.5-.31Z"
          fill="white"
        />
        <path
          d="M24.5 7.5A12.4 12.4 0 0 0 16 4C9.37 4 4 9.37 4 16a11.94 11.94 0 0 0 1.84 6.35L4 28l5.81-1.8A11.96 11.96 0 0 0 16 28c6.63 0 12-5.37 12-12 0-3.2-1.28-6.23-3.5-8.5Zm-8.5 18.6h-.01c-1.74 0-3.45-.47-4.95-1.36l-.36-.21-3.45 1.07 1.09-3.35-.23-.36A9.78 9.78 0 0 1 6.6 16c0-5.2 4.2-9.4 9.4-9.4 2.52 0 4.9.98 6.7 2.78A9.38 9.38 0 0 1 25.4 16c0 5.2-4.2 9.4-9.4 9.4Z"
          fill="white"
        />
      </svg>
    </a>
  );
}
