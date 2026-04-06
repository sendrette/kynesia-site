import * as React from "react";

export interface UpgradePlanEmailProps {
  firstName?: string;
  oldPlan: string;
  newPlan: string;
}

export default function UpgradePlanEmail({
  firstName = "",
  oldPlan,
  newPlan,
}: UpgradePlanEmailProps) {
  const nome = firstName.trim() || "Profissional";

  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#0f172a" }}>
      <h1 style={{ color: "#0f766e", marginBottom: "12px" }}>Upgrade confirmado ✅</h1>
      <p>Olá, {nome}!</p>
      <p>Seu plano foi atualizado com sucesso.</p>
      <ul>
        <li>
          <strong>Plano anterior:</strong> {oldPlan}
        </li>
        <li>
          <strong>Novo plano:</strong> {newPlan}
        </li>
      </ul>
      <p>
        A partir de agora, os novos recursos já estão disponíveis na sua conta. Obrigado por evoluir com a
        Kynesia.
      </p>
      <p style={{ marginTop: "20px" }}>
        Abraço,<br />
        Time Kynesia
      </p>
    </div>
  );
}
