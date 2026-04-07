import type { Metadata } from "next";
import PlanosPageClient from "./PlanosPageClient";

export const metadata: Metadata = {
  title: "Planos Kynesia | Sistema para Fisioterapeutas",
  description:
    "Escolha o plano ideal do Kynesia, software para clínica de fisioterapia com prontuário eletrônico fisioterapia, gestão clínica fisioterapia e recursos inteligentes.",
};

export default function PricingPage() {
  return <PlanosPageClient />;
}
