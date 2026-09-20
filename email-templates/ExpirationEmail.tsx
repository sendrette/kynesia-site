import React from "react";

export interface ExpirationEmailProps {
  firstName?: string;
}

export default function ExpirationEmail({
  firstName = "Fisioterapeuta",
}: ExpirationEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333", margin: "0 auto", padding: "20px", maxWidth: "600px", backgroundColor: "#ffffff" }}>
      <h1 style={{ color: "#122a5a", fontSize: "24px", fontWeight: "bold" }}>Seu plano pago foi encerrado</h1>
      <p>Olá, {firstName}.</p>
      <p>
        Informamos que a sua assinatura paga no Kynesia foi encerrada e sua conta passou para as regras do plano Start (gratuito).
      </p>
      <p>
        <strong>Importante:</strong> Nenhum dado cadastrado foi perdido. Seus pacientes e informações continuam seguros na plataforma. No entanto, os recursos exclusivos do plano pago estão bloqueados e os limites do plano gratuito estão em vigor.
      </p>
      <p>
        Você pode reativar sua assinatura a qualquer momento para recuperar os recursos completos e voltar a decolar na sua clínica!
      </p>
      <a href="https://kynesia.com.br/planos" style={{ backgroundColor: "#0d9488", color: "#fff", padding: "12px 20px", borderRadius: "8px", textDecoration: "none", display: "inline-block", marginTop: "20px" }}>
        Reativar Assinatura
      </a>
    </div>
  );
}
