import React from "react";

export interface RenewalEmailProps {
  firstName?: string;
  planName?: string;
  renewalDate?: string;
  renewalValue?: string;
}

export default function RenewalEmail({
  firstName = "Fisioterapeuta",
  planName = "Flow",
  renewalDate = "",
  renewalValue = "",
}: RenewalEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333", margin: "0 auto", padding: "20px", maxWidth: "600px", backgroundColor: "#ffffff" }}>
      <h1 style={{ color: "#122a5a", fontSize: "24px", fontWeight: "bold" }}>Sua assinatura está próxima da renovação</h1>
      <p>Olá, {firstName}!</p>
      <p>
        Passando para avisar que sua assinatura do plano <strong>{planName}</strong> será renovada em breve.
      </p>
      <p>
        <strong>Data da próxima cobrança:</strong> {renewalDate}<br />
        <strong>Valor da cobrança:</strong> {renewalValue}
      </p>
      <p>
        Se desejar gerenciar ou cancelar sua assinatura antes da cobrança, você pode fazer isso na sua área do cliente.
      </p>
      <a href="https://kynesia.com.br/area-cliente" style={{ backgroundColor: "#0d9488", color: "#fff", padding: "12px 20px", borderRadius: "8px", textDecoration: "none", display: "inline-block", marginTop: "20px" }}>
        Gerenciar Assinatura
      </a>
    </div>
  );
}
