"use server";

import { sendEmail, escapeHtml } from "@/lib/email";

interface ActionResult {
  success: boolean;
  error?: string;
}

function row(label: string, value: string): string {
  return `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${label}</td><td style="padding:6px 12px">${escapeHtml(value)}</td></tr>`;
}

function wrap(title: string, rows: string): string {
  return `
    <div style="font-family:sans-serif;max-width:600px">
      <h2 style="color:#e60000;margin-bottom:16px">${title}</h2>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
      <hr style="margin-top:24px;border:none;border-top:1px solid #eee"/>
      <p style="color:#888;font-size:12px">Sent from gedotravel.com</p>
    </div>`;
}

export async function submitContactForm(formData: FormData): Promise<ActionResult> {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!firstName || !email || !message) {
    return { success: false, error: "Required fields missing" };
  }

  try {
    await sendEmail({
      subject: `Contact: ${subject || "General Inquiry"} — ${firstName} ${lastName}`,
      replyTo: email,
      html: wrap("New Contact Message", [
        row("Name", `${firstName} ${lastName}`),
        row("Email", email),
        row("Phone", phone || "—"),
        row("Subject", subject || "—"),
        row("Message", escapeHtml(message).replace(/\n/g, "<br/>")),
      ].join("")),
    });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send message" };
  }
}

export async function submitFlightsForm(formData: FormData): Promise<ActionResult> {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const from = formData.get("from") as string;
  const to = formData.get("to") as string;
  const departDate = formData.get("departDate") as string;
  const returnDate = formData.get("returnDate") as string;
  const passengers = formData.get("passengers") as string;
  const cabinClass = formData.get("cabinClass") as string;
  const tripType = formData.get("tripType") as string;
  const notes = formData.get("notes") as string;

  if (!fullName || !email || !from || !to) {
    return { success: false, error: "Required fields missing" };
  }

  try {
    await sendEmail({
      subject: `Flight Inquiry: ${from} → ${to} — ${fullName}`,
      replyTo: email,
      html: wrap("New Flight Inquiry", [
        row("Name", fullName),
        row("Email", email),
        row("Phone", phone || "—"),
        row("Route", `${from} → ${to}`),
        row("Departure", departDate || "—"),
        row("Return", returnDate || "—"),
        row("Passengers", passengers || "1"),
        row("Cabin Class", cabinClass || "—"),
        row("Trip Type", tripType || "—"),
        row("Notes", notes ? escapeHtml(notes).replace(/\n/g, "<br/>") : "—"),
      ].join("")),
    });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send message" };
  }
}

export async function submitVisasForm(formData: FormData): Promise<ActionResult> {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const nationality = formData.get("nationality") as string;
  const destination = formData.get("destination") as string;
  const visaType = formData.get("visaType") as string;
  const travelDate = formData.get("travelDate") as string;
  const notes = formData.get("notes") as string;

  if (!fullName || !email) {
    return { success: false, error: "Required fields missing" };
  }

  try {
    await sendEmail({
      subject: `Visa Request: ${visaType || "General"} — ${fullName}`,
      replyTo: email,
      html: wrap("New Visa Request", [
        row("Name", fullName),
        row("Email", email),
        row("Phone", phone || "—"),
        row("Nationality", nationality || "—"),
        row("Destination", destination || "—"),
        row("Visa Type", visaType || "—"),
        row("Travel Date", travelDate || "—"),
        row("Notes", notes ? escapeHtml(notes).replace(/\n/g, "<br/>") : "—"),
      ].join("")),
    });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send message" };
  }
}

export async function submitPartnerForm(formData: FormData): Promise<ActionResult> {
  const companyName = formData.get("companyName") as string;
  const contactPerson = formData.get("contactPerson") as string;
  const email = formData.get("email") as string;
  const partnershipType = formData.get("partnershipType") as string;
  const description = formData.get("description") as string;

  if (!companyName || !email) {
    return { success: false, error: "Required fields missing" };
  }

  try {
    await sendEmail({
      subject: `Partnership Inquiry: ${companyName}`,
      replyTo: email,
      html: wrap("New Partnership Inquiry", [
        row("Company", companyName),
        row("Contact Person", contactPerson || "—"),
        row("Email", email),
        row("Partnership Type", partnershipType || "—"),
        row("Description", description ? escapeHtml(description).replace(/\n/g, "<br/>") : "—"),
      ].join("")),
    });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send message" };
  }
}

export async function submitNewsletterForm(formData: FormData): Promise<ActionResult> {
  const email = formData.get("email") as string;

  if (!email) {
    return { success: false, error: "Email is required" };
  }

  try {
    await sendEmail({
      subject: `Newsletter Subscription: ${email}`,
      html: wrap("New Newsletter Subscriber", [
        row("Email", email),
      ].join("")),
    });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to subscribe" };
  }
}
