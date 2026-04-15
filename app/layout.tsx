import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "kynesia - Gestão Clínica para Fisioterapeutas",
    template: "%s - Kynesia",
  },
  description:
    "Sistema de gestão clínica para fisioterapeutas com prontuário eletrônico, inteligência clínica baseada em evidências, controle financeiro e organização completa da rotina.",
  icons: {
    icon: [{ url: "/kynesia-logo.svg", type: "image/svg+xml" }],
    shortcut: "/kynesia-logo.svg",
    apple: "/kynesia-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
