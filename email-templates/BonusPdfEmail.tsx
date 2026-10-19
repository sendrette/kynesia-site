import * as React from "react";

export interface BonusPdfEmailProps {
  firstName?: string;
  downloadUrl: string;
  loginUrl?: string;
}

export default function BonusPdfEmail({
  firstName,
  downloadUrl,
  loginUrl = "https://kynesia-app.vercel.app",
}: BonusPdfEmailProps) {
  const trimmedName = firstName?.trim();
  const saudacao = trimmedName ? `Olá, ${trimmedName}!` : "Olá!";

  return (
    <div
      style={{
        fontFamily: "Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        lineHeight: "1.6",
        color: "#1e293b",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "32px 24px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        border: "1px solid #e2e8f0",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <h1 style={{ color: "#0d9488", fontSize: "26px", fontWeight: "bold", margin: "0 0 8px 0" }}>
          Obrigado por assinar o Kynesia! 🎉
        </h1>
        <p style={{ fontSize: "16px", color: "#64748b", margin: 0 }}>
          Sua assinatura está ativa e o seu bônus exclusivo já está disponível.
        </p>
      </div>

      <div style={{ padding: "0 8px", fontSize: "15px", color: "#334155" }}>
        <p style={{ fontSize: "16px", fontWeight: "bold", color: "#0f172a", marginBottom: "16px" }}>
          {saudacao}
        </p>

        <p style={{ margin: "0 0 16px 0" }}>
          Muito obrigado por assinar o Kynesia. Estamos felizes em ter você com a gente.
        </p>

        <p style={{ margin: "0 0 20px 0" }}>
          Como agradecimento, você ganhou de presente o <strong>Kit de Avaliação Kynesia</strong>, para que seu paciente tenha sempre o melhor atendimento.
        </p>

        {/* Card do Bônus */}
        <div
          style={{
            backgroundColor: "#f0fdf4",
            border: "1px solid #bbf7d0",
            borderRadius: "10px",
            padding: "24px 20px",
            margin: "24px 0",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "15px", fontWeight: "bold", color: "#166534", marginBottom: "8px" }}>
            🎁 Kit Completo de Avaliação Funcional em Fisioterapia
          </div>
          <p style={{ fontSize: "13px", color: "#15803d", margin: "0 0 20px 0" }}>
            Material completo com questionários validados e prontos para uso prático no seu consultório.
          </p>

          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#0d9488",
              color: "#ffffff",
              padding: "14px 32px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
              boxShadow: "0 4px 6px -1px rgba(13, 148, 136, 0.25)",
            }}
          >
            Baixar meu kit →
          </a>

          <p style={{ fontSize: "12px", color: "#64748b", marginTop: "16px", marginBottom: 0 }}>
            O link fica disponível por 30 dias. Se ele expirar ou se tiver qualquer dúvida, escreva para{" "}
            <a href="mailto:kynesia.fisio@gmail.com" style={{ color: "#0d9488", textDecoration: "underline" }}>
              kynesia.fisio@gmail.com
            </a>.
          </p>
        </div>

        {/* Acesso ao App */}
        <div style={{ marginTop: "28px", textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#475569", marginBottom: "12px" }}>
            Você também pode acessar a plataforma Kynesia a qualquer momento:
          </p>
          <a
            href={loginUrl}
            style={{
              display: "inline-block",
              backgroundColor: "#f8fafc",
              border: "1px solid #cbd5e1",
              color: "#334155",
              padding: "10px 24px",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Acessar Plataforma Kynesia
          </a>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #f1f5f9", margin: "28px 0" }} />

        <p style={{ fontSize: "13px", color: "#64748b" }}>
          Dúvidas sobre sua conta ou assinatura? Responda a este e-mail ou entre em contato com nosso suporte em{" "}
          <a href="mailto:kynesia.fisio@gmail.com" style={{ color: "#0d9488", textDecoration: "underline" }}>
            kynesia.fisio@gmail.com
          </a>.
        </p>

        <p style={{ marginTop: "20px", fontSize: "14px", color: "#475569" }}>
          Com carinho,<br />
          <strong>Equipe Kynesia</strong>
        </p>
      </div>
    </div>
  );
}
