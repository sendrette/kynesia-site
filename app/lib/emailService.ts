type EmailEvent = "welcome" | "upgrade" | "downgrade";

type BasePayload = {
  email: string;
  firstName?: string;
};

type WelcomePayload = BasePayload & {
  eventType: "welcome";
};

type UpgradePayload = BasePayload & {
  eventType: "upgrade";
  oldPlan: string;
  newPlan: string;
};

type DowngradePayload = BasePayload & {
  eventType: "downgrade";
  oldPlan: string;
  newPlan: string;
  effectiveDate?: string;
};

type SendPayload = WelcomePayload | UpgradePayload | DowngradePayload;

function resolveBaseUrl() {
  if (typeof window !== "undefined") {
    return "";
  }

  return process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
}

async function sendEmail(payload: SendPayload) {
  const baseUrl = resolveBaseUrl();
  const response = await fetch(`${baseUrl}/api/send-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = (await response.json()) as { ok: boolean; error?: string; id?: string };

  if (!response.ok || !result.ok) {
    throw new Error(result.error ?? "Falha ao enviar email");
  }

  return result;
}

export async function sendWelcomeEmail(email: string, firstName?: string) {
  return sendEmail({
    eventType: "welcome",
    email,
    firstName,
  });
}

export async function sendUpgradeEmail(
  email: string,
  firstName: string | undefined,
  oldPlan: string,
  newPlan: string,
) {
  return sendEmail({
    eventType: "upgrade",
    email,
    firstName,
    oldPlan,
    newPlan,
  });
}

export async function sendDowngradeEmail(
  email: string,
  firstName: string | undefined,
  oldPlan: string,
  newPlan: string,
  effectiveDate?: string,
) {
  return sendEmail({
    eventType: "downgrade",
    email,
    firstName,
    oldPlan,
    newPlan,
    effectiveDate,
  });
}

export type { EmailEvent };
