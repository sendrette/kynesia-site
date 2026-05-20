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

export const ORIGINAL_PRICES: Record<PlanKey, number> = {
  start: 0,
  flow: 99,
  elite: 149,
};

export const PROMO_DISCOUNT_PERCENT = 25;
export const IS_PROMO_ACTIVE = true;
export const PROMO_END_DATE = "2026-06-20";

const promoDiscountRate = PROMO_DISCOUNT_PERCENT / 100;

export const PROMO_PRICES: Record<PlanKey, number> = {
  start: 0,
  flow: roundCurrency(ORIGINAL_PRICES.flow * (1 - promoDiscountRate)),
  elite: roundCurrency(ORIGINAL_PRICES.elite * (1 - promoDiscountRate)),
};

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
    monthlyPrice: ORIGINAL_PRICES.start,
    benefits: ["Gestão de pacientes", "Prontuário básico", "Agenda simples"],
  },
  flow: {
    name: "Flow",
    monthlyPrice: ORIGINAL_PRICES.flow,
    benefits: [
      "IA completa para evolução clínica",
      "Gestão financeira",
      "Relatórios avançados",
    ],
  },
  elite: {
    name: "Elite",
    monthlyPrice: ORIGINAL_PRICES.elite,
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
        label: "Prontuário Digital",
        note: "Gestão completa e segura do histórico de até 5 pacientes ativos.",
        status: "included",
      },
      {
        label: "3 Insights PBE/mês",
        note: "Sugestões clínicas baseadas em evidências científicas via IA.",
        status: "included",
      },
      {
        label: "Agenda Inteligente",
        note: "Controle otimizado de horários e sessões.",
        status: "included",
      },
      {
        label: "Gestão Financeira",
        note: "Controle completo de faturamento, custos e lucratividade.",
        status: "included",
      },
      {
        label: "Artigos científicos vinculados aos casos clínicos",
        note: "Leituras técnicas sugeridas automaticamente conforme o perfil e os casos clínicos do paciente.",
        status: "locked",
      },
      {
        label: "Avaliações funcionais (PROMs)",
        note: "Questionários validados para medir a evolução funcional real.",
        status: "locked",
      },
      {
        label: "Laudos via IA",
        note: "Geração instantânea de laudos profissionais e padronizados.",
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
        note: "Recursos essenciais ampliados para uma rotina mais produtiva.",
        status: "included",
      },
      {
        label: "Prontuário Digital",
        note: "Gestão completa e segura do histórico de até 50 pacientes ativos.",
        status: "included",
      },
      {
        label: "Insights PBE ilimitados",
        note: "Sugestões clínicas contínuas, sem limite mensal, para acelerar o raciocínio clínico.",
        status: "included",
      },
      {
        label: "Agenda Inteligente",
        note: "Controle otimizado de horários e sessões para maior produtividade.",
        status: "included",
      },
      {
        label: "Gestão Financeira",
        note: "Controle completo de faturamento, custos e lucratividade em um só lugar.",
        status: "included",
      },
      {
        label: "Dashboard de Artigos",
        note: "Leituras técnicas sugeridas automaticamente conforme seus casos clínicos e perfil do paciente.",
        status: "included",
      },
      {
        label: "Avaliações PROMs",
        note: "Questionários validados para acompanhar a evolução funcional real.",
        status: "included",
      },
      {
        label: "Área do Paciente",
        note: "Portal exclusivo para engajamento e acompanhamento do tratamento.",
        status: "included",
      },
      {
        label: "50 Laudos Fisioterapêuticos por IA ao mês",
        note: "Geração rápida de laudos profissionais e padronizados.",
        status: "included",
      },
      {
        label: "Suporte Prioritário",
        note: "Atendimento agilizado para garantir sua produtividade.",
        status: "included",
      },
      {
        label: "Portal de Parceiros e Benefícios Elite",
        note: "Disponível no Elite com clube de benefícios e descontos exclusivos.",
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
        note: "Tudo o que a operação precisa para escalar com profundidade analítica.",
        status: "included",
      },
      {
        label: "Prontuário Digital",
        note: "Gestão completa e segura do histórico de pacientes ilimitados.",
        status: "included",
      },
      {
        label: "Pacientes ilimitados",
        note: "Escala sem restrição para sua base assistencial.",
        status: "included",
      },
      {
        label: "Insights PBE ilimitados",
        note: "Sugestões clínicas contínuas para apoiar decisões estratégicas e assistenciais.",
        status: "included",
      },
      {
        label: "Agenda Inteligente",
        note: "Controle otimizado de horários, sessões e encaixes.",
        status: "included",
      },
      {
        label: "Gestão Financeira",
        note: "Controle completo de faturamento, custos e lucratividade.",
        status: "included",
      },
      {
        label: "Área do Paciente",
        note: "Portal exclusivo para engajamento e acompanhamento do tratamento.",
        status: "included",
      },
      {
        label: "Avaliações PROMs",
        note: "Questionários validados para medir a evolução funcional real.",
        status: "included",
      },
      {
        label: "Dashboard de Artigos",
        note: "Leituras técnicas sugeridas automaticamente conforme os casos clínicos.",
        status: "included",
      },
      {
        label: "Laudos via IA",
        note: "Geração instantânea de laudos profissionais e padronizados.",
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
        note: "Leitura de métricas para decisões estratégicas.",
        status: "included",
      },
      {
        label: "Suporte VIP dedicado",
        note: "Acompanhamento premium para sua operação clínica.",
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

function getLocalDateISO(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function isPromoEnabled(date = new Date()) {
  if (!IS_PROMO_ACTIVE) {
    return false;
  }

  return getLocalDateISO(date) < PROMO_END_DATE;
}

export function getPromoEndDateLabel(date = new Date(PROMO_END_DATE)) {
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });
}

export function getPlanPricing(plan: PlanKey, cycle: BillingCycle) {
  const originalMonthlyPrice = ORIGINAL_PRICES[plan];
  const promoActive = plan !== "start" && isPromoEnabled();
  const monthlyPrice = promoActive ? PROMO_PRICES[plan] : originalMonthlyPrice;

  const originalAnnualTotal = roundCurrency(originalMonthlyPrice * 12 * (1 - annualDiscountRate));
  const originalAnnualInstallment = roundCurrency(originalAnnualTotal / 12);

  if (cycle === "annual") {
    const total = roundCurrency(monthlyPrice * 12 * (1 - annualDiscountRate));
    const installmentValue = roundCurrency(total / 12);
    const savings = roundCurrency(monthlyPrice * 12 - total);
    const cycleSavings = roundCurrency(originalAnnualTotal - total);

    return {
      monthlyPrice,
      originalMonthlyPrice,
      totalPrice: total,
      originalTotalPrice: originalAnnualTotal,
      installmentCount: 12,
      installmentValue,
      originalInstallmentValue: originalAnnualInstallment,
      savings,
      cycleSavings,
      discountRate: annualDiscountRate,
      isPromoActive: promoActive,
      promoDiscountPercent: PROMO_DISCOUNT_PERCENT,
      promoEndDate: PROMO_END_DATE,
    };
  }

  const cycleSavings = roundCurrency(originalMonthlyPrice - monthlyPrice);

  return {
    monthlyPrice,
    originalMonthlyPrice,
    totalPrice: monthlyPrice,
    originalTotalPrice: originalMonthlyPrice,
    installmentCount: 1,
    installmentValue: monthlyPrice,
    originalInstallmentValue: originalMonthlyPrice,
    savings: 0,
    cycleSavings,
    discountRate: 0,
    isPromoActive: promoActive,
    promoDiscountPercent: PROMO_DISCOUNT_PERCENT,
    promoEndDate: PROMO_END_DATE,
  };
}
