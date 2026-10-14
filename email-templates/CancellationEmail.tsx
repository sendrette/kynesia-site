import * as React from "react";

export interface CancellationEmailProps {
  firstName?: string;
  planName?: string;
  isTrial?: boolean;
}

export default function CancellationEmail({
  firstName = "",
  planName = "Flow",
  isTrial = true,
}: CancellationEmailProps) {
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
        <div
          style={{
            display: "inline-block",
            width: "56px",
            height: "56px",
            lineHeight: "56px",
            borderRadius: "50%",
            backgroundColor: "#fef2f2",
            color: "#dc2626",
            fontSize: "24px",
            marginBottom: "16px",
          }}
        >
          ✓
        </div>
        <h1 style={{ color: "#0f172a", fontSize: "24px", fontWeight: "bold", margin: "0 0 8px 0" }}>
          Cancelamento Confirmado
        </h1>
        <p style={{ fontSize: "15px", color: "#64748b", margin: 0 }}>
          {isTrial
            ? "O seu período de testes de 5 dias foi encerrado com sucesso."
            : `Sua assinatura do plano ${planName} foi cancelada com sucesso.`}
        </p>
      </div>

      <div style={{ padding: "0 8px", fontSize: "15px", color: "#334155" }}>
        <p>Olá, <strong>{nome}</strong>!</p>
        <p>
          Confirmamos que a sua solicitação de cancelamento da assinatura do <strong>Kynesia</strong> foi processada com sucesso no nosso sistema de pagamentos.
        </p>

        <div
          style={{
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            padding: "16px",
            margin: "20px 0",
            fontSize: "14px",
            color: "#334155",
          }}
        >
          <p style={{ margin: "0 0 8px 0", fontWeight: "bold", color: "#0f172a" }}>
            Detalhes do cancelamento:
          </p>
          <ul style={{ margin: 0, paddingLeft: "20px", color: "#475569" }}>
            <li><strong>Plano:</strong> {planName}</li>
            <li><strong>Cobranças futuras:</strong> Nenhuma cobrança será realizada no seu cartão de crédito.</li>
            <li><strong>Status da conta:</strong> Migrada para o plano gratuito (Start).</li>
          </ul>
        </div>

        <p style={{ color: "#475569", fontSize: "14px" }}>
          <strong>Seus dados continuam seguros:</strong> Nenhum paciente, prontuário ou histórico cadastrado foi excluído. Você ainda pode acessar o sistema com os recursos essenciais do plano Start gratuito.
        </p>

        <p style={{ color: "#475569", fontSize: "14px", marginTop: "16px" }}>
          Se você mudar de ideia ou quiser reativar os recursos avançados de IA e prontuário no futuro, basta acessar sua conta ou visitar nossa página de planos quando desejar.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid #f1f5f9", margin: "28px 0" }} />

        <p style={{ fontSize: "13px", color: "#64748b" }}>
          Se você não solicitou este cancelamento ou tiver alguma dúvida, responda diretamente a este e-mail para falar com nosso suporte.
        </p>

        <p style={{ marginTop: "20px", fontSize: "14px", color: "#475569" }}>
          Atenciosamente,<br />
          <strong>Equipe Kynesia</strong>
        </p>
      </div>
    </div>
  );
}
