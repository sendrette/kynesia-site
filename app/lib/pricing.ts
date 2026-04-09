export type PlanKey = "start" | "flow" | "elite";
export type BillingCycle = "monthly" | "annual";

export type PricingCardFeature = {
  label: string;
  note?: string;
  status: "included" | "locked";
};

export type PricingComparisonCard = {
  key: PlanKey;
  tagline: string;
  summary: string;
  ctaLabel: string;
  featured?: boolean;
  features: PricingCardFeature[];
};

export const annualDiscountRate = 0.15;

export const planCatalog: Record<
  PlanKey,
  {
    name: string;
    monthlyPrice: number;
    benefits: string[];
  }
> = {
  start: {
    name: "Start",
    monthlyPrice: 0,
    benefits: ["Gestão de pacientes", "Prontuário básico", "Agenda simples"],
  },
  flow: {
    name: "Flow",
    monthlyPrice: 99,
    benefits: [
      "IA completa para evolução clínica",
      "Gestão financeira",
      "Relatórios avançados",
    ],
  },
  elite: {
    name: "Elite",
    monthlyPrice: 149,
    benefits: ["Tudo do Flow + recursos avançados", "Suporte prioritário", "Prioridade em novidades"],
  },
};

export const pricingComparisonCards: PricingComparisonCard[] = [
  {
    key: "start",
    tagline: "O Essencial",
    summary: "Base para começar com organização, prontuário e agenda.",
    ctaLabel: "Começar grátis",
    features: [
      {
        label: "Até 5 pacientes ativos",
        note: "Prontuário Digital",
        status: "included",
      },
      {
        label: "3 Insights PBE/mês",
        note: "Anamnese e evolução baseada em evidências",
        status: "included",
      },
      {
        label: "Agenda Inteligente de atendimentos",
        status: "included",
      },
      {
        label: "Financeiro: visão de faturamento total do mês",
        status: "included",
      },
      {
        label: "Artigos científicos vinculados aos casos clínicos",
        note: "Sugestões automáticas com base no perfil e nos achados do paciente",
        status: "locked",
      },
      {
        label: "Avaliações funcionais (PROMs)",
        status: "locked",
      },
      {
        label: "Laudos via IA",
        status: "locked",
      },
    ],
  },
  {
    key: "flow",
    tagline: "Produtividade",
    summary: "Tudo do Start e mais recursos para escalar a operação clínica.",
    ctaLabel: "Ver detalhes",
    featured: true,
    features: [
      {
        label: "Tudo do Start e mais",
        status: "included",
      },
      {
        label: "Até 50 pacientes ativos",
        status: "included",
      },
      {
        label: "Insights PBE ilimitados",
        status: "included",
      },
      {
        label: "Dashboard de Artigos",
        note: "Leituras técnicas personalizadas sugeridas automaticamente com base no perfil do paciente.",
        status: "included",
      },
      {
        label: "Avaliações funcionais (PROMs) e Área do Paciente",
        status: "included",
      },
      {
        label: "50 Laudos Fisioterapêuticos por IA ao mês",
        status: "included",
      },
      {
        label: "Suporte Prioritário",
        status: "included",
      },
      {
        label: "Portal de Parceiros e Benefícios Elite",
        status: "locked",
      },
    ],
  },
  {
    key: "elite",
    tagline: "Ecossistema Completo",
    summary: "A solução completa para clínicas que precisam de escala e análise avançada.",
    ctaLabel: "Ver detalhes",
    features: [
      {
        label: "Tudo do Flow e mais",
        status: "included",
      },
      {
        label: "Pacientes ilimitados",
        status: "included",
      },
      {
        label: "Portal de Parceiros",
        note: "Clube de benefícios e descontos exclusivos",
        status: "included",
      },
      {
        label: "Programa de Vantagens",
        note: "Descontos em cursos, workshops e produtos",
        status: "included",
      },
      {
        label: "Relatórios avançados e análise de dados (Analytics)",
        status: "included",
      },
      {
        label: "Suporte VIP dedicado",
        status: "included",
      },
    ],
  },
];

export function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function formatCurrencyBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
}

function roundCurrency(value: number) {
  return Math.round(value * 100) / 100;
}

export function getPlanPricing(plan: PlanKey, cycle: BillingCycle) {
  const monthlyPrice = planCatalog[plan].monthlyPrice;

  if (cycle === "annual") {
    const total = roundCurrency(monthlyPrice * 12 * (1 - annualDiscountRate));
    const installmentValue = roundCurrency(total / 12);
    const savings = roundCurrency(monthlyPrice * 12 - total);

    return {
      monthlyPrice,
      totalPrice: total,
      installmentCount: 12,
      installmentValue,
      savings,
      discountRate: annualDiscountRate,
    };
  }

  return {
    monthlyPrice,
    totalPrice: monthlyPrice,
    installmentCount: 1,
    installmentValue: monthlyPrice,
    savings: 0,
    discountRate: 0,
  };
}
