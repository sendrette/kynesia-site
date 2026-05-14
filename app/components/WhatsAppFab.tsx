"use client";

import { useEffect, useState } from "react";

const WA_NUMBER = "https://wa.me/551299748-9847";
const WA_MESSAGE = "Olá! Gostaria de conhecer melhor o Kynesia.";

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
        `fixed right-5 bottom-5 z-50 transform-gpu transition-all duration-400 ` +
        `shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 ` +
        `${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`
      }
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 p-3 text-white hover:bg-teal-500 active:scale-95 transition-transform duration-200 md:h-16 md:w-16">
        <span className="sr-only">WhatsApp</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M20.52 3.48A11.88 11.88 0 0 0 12.06.75C6.01.75 1.31 5.45 1.31 11.5c0 2.02.53 3.98 1.54 5.71L.5 23.5l6.56-2.05a11.62 11.62 0 0 0 5 1.05h.01c6.05 0 10.75-4.7 10.75-10.75 0-2.87-1.12-5.56-3.33-7.27zM12.06 21.5h-.01a9.4 9.4 0 0 1-4.77-1.34l-.34-.2-3.9 1.22 1.31-3.8-.22-.38A9.23 9.23 0 0 1 2.82 11.5c0-5.02 4.07-9.09 9.09-9.09 2.43 0 4.71.95 6.42 2.67a9.03 9.03 0 0 1 2.67 6.42c0 5.02-4.07 9.09-9.09 9.09z" />
          <path d="M17.22 14.1c-.3-.15-1.78-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.51-1.78-1.69-2.08-.18-.3-.02-.46.13-.61.13-.12.3-.31.45-.47.15-.15.2-.26.3-.43.1-.18.04-.34-.03-.49-.07-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.34-.28.28-1.07 1.05-1.07 2.57 0 1.52 1.1 2.99 1.25 3.2.15.2 2.16 3.3 5.23 4.63 3.07 1.33 3.07.89 3.62.84.55-.06 1.78-.72 2.03-1.41.25-.69.25-1.28.18-1.41-.07-.13-.27-.2-.58-.35z" />
        </svg>
      </div>
    </a>
  );
}
