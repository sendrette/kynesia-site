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
    default: "Kynesia | Sistema para Fisioterapeutas",
    template: "%s | Kynesia",
  },
  description:
    "Sistema para fisioterapeutas com prontuário eletrônico fisioterapia, gestão clínica fisioterapia e organização de atendimentos com IA.",
  icons: {
    icon: "/kynesia-icon.svg",
    shortcut: "/kynesia-icon.svg",
    apple: "/kynesia-icon.svg",
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
