import * as React from "react";

export interface DowngradePlanEmailProps {
  firstName?: string;
  oldPlan: string;
  newPlan: string;
  effectiveDate?: string;
}

export default function DowngradePlanEmail({
  firstName = "",
  oldPlan,
  newPlan,
  effectiveDate,
}: DowngradePlanEmailProps) {
  const nome = firstName.trim() || "Profissional";

  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#0f172a" }}>
      <h1 style={{ color: "#0f766e", marginBottom: "12px" }}>Alteração de plano registrada</h1>
      <p>Olá, {nome}!</p>
      <p>Recebemos sua solicitação de downgrade de plano.</p>
      <ul>
        <li>
          <strong>Plano atual:</strong> {oldPlan}
        </li>
        <li>
          <strong>Novo plano:</strong> {newPlan}
        </li>
        {effectiveDate ? (
          <li>
            <strong>Data efetiva:</strong> {effectiveDate}
          </li>
        ) : null}
      </ul>
      <p>
        Até a data de transição, você continua com os recursos atuais. Se mudar de ideia, fale com nosso
        suporte.
      </p>
      <p style={{ marginTop: "20px" }}>
        Abraço,<br />
        Time Kynesia
      </p>
    </div>
  );
}
