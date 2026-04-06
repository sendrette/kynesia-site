import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createElement, type ReactElement } from "react";
import WelcomeEmail from "@/email-templates/WelcomeEmail";
import UpgradePlanEmail from "@/email-templates/UpgradePlanEmail";
import DowngradePlanEmail from "@/email-templates/DowngradePlanEmail";

export const runtime = "nodejs";

type EventType = "welcome" | "upgrade" | "downgrade";

type SendEmailPayload = {
  email: string;
  eventType: EventType;
  firstName?: string;
  oldPlan?: string;
  newPlan?: string;
  effectiveDate?: string;
};

function getMissingEnv() {
  const missing: string[] = [];

  if (!process.env.RESEND_API_KEY) missing.push("RESEND_API_KEY");
  if (!process.env.RESEND_FROM_EMAIL) missing.push("RESEND_FROM_EMAIL");

  return missing;
}

function validateBody(body: Partial<SendEmailPayload>) {
  if (!body.email) return "Campo obrigatório: email";
  if (!body.eventType) return "Campo obrigatório: eventType";

  if (body.eventType === "upgrade" || body.eventType === "downgrade") {
    if (!body.oldPlan) return "Campo obrigatório para upgrade/downgrade: oldPlan";
    if (!body.newPlan) return "Campo obrigatório para upgrade/downgrade: newPlan";
  }

  return null;
}

export async function GET() {
  const missingEnv = getMissingEnv();

  return NextResponse.json(
    {
      ok: missingEnv.length === 0,
      service: "send-email",
      missingEnv,
      supportedEvents: ["welcome", "upgrade", "downgrade"],
    },
    { status: missingEnv.length === 0 ? 200 : 500 },
  );
}

export async function POST(req: Request) {
  const missingEnv = getMissingEnv();
  if (missingEnv.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Variáveis ausentes: ${missingEnv.join(", ")}` },
      { status: 500 },
    );
  }

  try {
    const body = (await req.json()) as Partial<SendEmailPayload>;
    const validationError = validateBody(body);

    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.RESEND_FROM_EMAIL as string;

    let subject = "Kynesia";
    let react: ReactElement;

    switch (body.eventType) {
      case "welcome":
        subject = "Bem-vindo(a) à Kynesia";
        react = createElement(WelcomeEmail, { firstName: body.firstName });
        break;
      case "upgrade":
        subject = "Seu upgrade de plano foi confirmado";
        react = createElement(UpgradePlanEmail, {
          firstName: body.firstName,
          oldPlan: body.oldPlan as string,
          newPlan: body.newPlan as string,
        });
        break;
      case "downgrade":
        subject = "Alteração de plano registrada";
        react = createElement(DowngradePlanEmail, {
          firstName: body.firstName,
          oldPlan: body.oldPlan as string,
          newPlan: body.newPlan as string,
          effectiveDate: body.effectiveDate,
        });
        break;
      default:
        return NextResponse.json({ ok: false, error: "eventType inválido" }, { status: 400 });
    }

    const result = await resend.emails.send({
      from,
      to: [body.email as string],
      subject,
      react,
    });

    if (result.error) {
      return NextResponse.json(
        {
          ok: false,
          error: result.error.message,
          details: result.error,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id ?? null });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro desconhecido";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
