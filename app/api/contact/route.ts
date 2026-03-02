import nodemailer, { type Transporter } from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

const PROVIDER_CONFIG = {
  gmail: { host: "smtp.gmail.com", port: 587, secure: false },
  outlook: { host: "smtp.office365.com", port: 587, secure: false },
  yahoo: { host: "smtp.mail.yahoo.com", port: 587, secure: false },
  zoho: { host: "smtp.zoho.com", port: 587, secure: false },
} as const;

function parseBoolean(value?: string): boolean | undefined {
  if (!value) return undefined;
  const normalized = value.trim().toLowerCase();
  if (normalized === "true" || normalized === "1") return true;
  if (normalized === "false" || normalized === "0") return false;
  return undefined;
}

function createTransporter(): Transporter {
  const provider = (process.env.MAIL_PROVIDER || "smtp").trim().toLowerCase();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (!user || !pass) {
    throw new Error("SMTP_USER and SMTP_PASS are required.");
  }

  const providerDefaults =
    PROVIDER_CONFIG[provider as keyof typeof PROVIDER_CONFIG] ?? null;

  const host = process.env.SMTP_HOST || providerDefaults?.host;
  const port = Number(process.env.SMTP_PORT || providerDefaults?.port || 587);
  const secure =
    parseBoolean(process.env.SMTP_SECURE) ??
    providerDefaults?.secure ??
    port === 465;

  if (!host) {
    throw new Error(
      "SMTP host is not configured. Set SMTP_HOST or use a known MAIL_PROVIDER."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

function validate(payload: ContactPayload) {
  const name = payload.name?.trim() || "";
  const email = payload.email?.trim() || "";
  const message = payload.message?.trim() || "";
  const company = payload.company?.trim() || "";

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }

  if (name.length > 120 || message.length > 5000 || company.length > 120) {
    return { error: "Input exceeds allowed length." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please provide a valid email address." };
  }

  return { name, email, message, company };
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const validated = validate(payload);

    if ("error" in validated) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const { name, email, message, company } = validated;

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
    if (!toEmail) {
      return NextResponse.json(
        { error: "CONTACT_TO_EMAIL or SMTP_USER must be configured." },
        { status: 500 }
      );
    }

    const fromEmail = process.env.MAIL_FROM_EMAIL || process.env.SMTP_USER;
    const fromName = process.env.MAIL_FROM_NAME || "Portfolio Contact";

    if (!fromEmail) {
      return NextResponse.json(
        { error: "MAIL_FROM_EMAIL or SMTP_USER must be configured." },
        { status: 500 }
      );
    }

    const transporter = createTransporter();

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "N/A");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");

    await transporter.sendMail({
      from: `${fromName} <${fromEmail}>`,
      to: toEmail,
      replyTo: `${name} <${email}>`,
      subject: `New portfolio inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "N/A"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Message:</strong><br/>${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const details = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to send email.", details },
      { status: 500 }
    );
  }
}
