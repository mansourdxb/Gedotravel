import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.EMAIL_TO || "info@gedotravel.com";
const FROM_EMAIL = "Gedotravel <noreply@gedotravel.com>";

interface EmailPayload {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ subject, html, replyTo }: EmailPayload) {
  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject,
    html,
    replyTo,
  });

  if (error) {
    console.error("[Resend error]", error);
    throw new Error(error.message);
  }

  console.log("[Resend sent]", data?.id);
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
