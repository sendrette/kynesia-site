export type PlanKey = "start" | "flow" | "elite";
export type BillingCycle = "monthly" | "annual";

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
