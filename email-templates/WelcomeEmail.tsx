import * as React from "react";

export interface WelcomeEmailProps {
  firstName?: string;
  loginUrl?: string;
  isTrial?: boolean;
  planName?: string;
}

export default function WelcomeEmail({
  firstName = "",
  loginUrl = "https://kynesia-app.vercel.app",
  isTrial = true,
  planName = "Flow",
}: WelcomeEmailProps) {
  const nome = firstName.trim() || "Profissional";

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
          Bem-vindo(a) ao Kynesia! 🎉
        </h1>
        <p style={{ fontSize: "16px", color: "#64748b", margin: 0 }}>
          {isTrial
            ? `Seus 5 dias de teste grátis no plano ${planName} foram ativados com sucesso.`
            : `Sua assinatura do plano ${planName} está confirmada e ativa.`}
        </p>
      </div>

      <div style={{ padding: "0 8px", fontSize: "15px", color: "#334155" }}>
        <p>Olá, <strong>{nome}</strong>!</p>
        <p>
          Seu cadastro foi realizado com sucesso. A partir de agora, você tem acesso completo
          aos recursos de prontuário eletrônico inteligente, testes ortopédicos, escalas validadas
          e IA clínica para otimizar seus atendimentos e evoluções.
        </p>

        {isTrial ? (
          <div
            style={{
              backgroundColor: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "8px",
              padding: "16px",
              margin: "20px 0",
              color: "#166534",
              fontSize: "14px",
            }}
          >
            <strong>✨ Período de Teste de 5 Dias:</strong> Aproveite todos os recursos avançados sem qualquer custo. Você pode acessar seu painel a qualquer momento.
          </div>
        ) : null}

        <p style={{ marginTop: "24px", marginBottom: "28px", textAlign: "center" }}>
          <a
            href={loginUrl}
            style={{
              display: "inline-block",
              backgroundColor: "#0d9488",
              color: "#ffffff",
              padding: "14px 32px",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
              boxShadow: "0 4px 6px -1px rgba(13, 148, 136, 0.2)",
            }}
          >
            Entrar no App Kynesia →
          </a>
        </p>

        <p style={{ fontSize: "13px", color: "#64748b", textAlign: "center" }}>
          Ou acesse pelo link direto:{" "}
          <a href={loginUrl} style={{ color: "#0d9488", textDecoration: "underline" }}>
            {loginUrl}
          </a>
        </p>

        <hr style={{ border: "none", borderTop: "1px solid #f1f5f9", margin: "28px 0" }} />

        <p style={{ fontSize: "14px", color: "#64748b" }}>
          Caso tenha qualquer dúvida ou precise de suporte para configurar sua conta, basta responder a este e-mail. Nossa equipe está sempre à disposição.
        </p>

        <p style={{ marginTop: "20px", fontSize: "14px", color: "#475569" }}>
          Com carinho,<br />
          <strong>Equipe Kynesia</strong>
        </p>
      </div>
    </div>
  );
}
