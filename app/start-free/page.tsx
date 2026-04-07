import type { Metadata } from "next";
import StartFreePageClient from "./StartFreePageClient";

export const metadata: Metadata = {
  title: "Começar grátis - Kynesia",
  description: "Crie sua conta gratuita no sistema para fisioterapeutas Kynesia.",
};

export default function StartFreePage() {
  return <StartFreePageClient />;
}
