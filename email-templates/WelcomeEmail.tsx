import * as React from "react";

export interface WelcomeEmailProps {
  firstName?: string;
}

export default function WelcomeEmail({ firstName = "" }: WelcomeEmailProps) {
  const nome = firstName.trim() || "Profissional";

  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#0f172a" }}>
      <h1 style={{ color: "#0f766e", marginBottom: "12px" }}>Bem-vindo(a) à Kynesia 🎉</h1>
      <p>Olá, {nome}!</p>
      <p>
        Sua conta foi criada com sucesso. Agora você pode organizar prontuários, acompanhar pacientes e
        acelerar sua rotina clínica com inteligência artificial.
      </p>
      <p>
        Se precisar de ajuda, responda este e-mail. Nosso time está pronto para apoiar você no início da
        jornada.
      </p>
      <p style={{ marginTop: "20px" }}>
        Abraço,<br />
        Time Kynesia
      </p>
    </div>
  );
}
