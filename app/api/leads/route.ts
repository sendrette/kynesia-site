import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  profession?: string;
  source?: string;
  plan?: string;
  wantsContent?: boolean;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadPayload;

    if (!body.name?.trim()) {
      return NextResponse.json({ ok: false, error: "Nome é obrigatório." }, { status: 400 });
    }

    if (!body.email?.trim() || !isValidEmail(body.email)) {
      return NextResponse.json({ ok: false, error: "Email inválido." }, { status: 400 });
    }

    const lead = {
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim() ?? "",
      profession: body.profession ?? "",
      source: body.source ?? "free-plan",
      plan: body.plan ?? "start",
      wantsContent: Boolean(body.wantsContent),
      createdAt: new Date().toISOString(),
    };

    console.log("New free signup", {
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
    });

    console.log("Lead payload", lead);

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao receber lead.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
