import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "info@gedotravel.com";
const FROM_EMAIL = "Gedotravel <onboarding@resend.dev>";

interface EmailPayload {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ subject, html, replyTo }: EmailPayload) {
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject,
    html,
    replyTo,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
