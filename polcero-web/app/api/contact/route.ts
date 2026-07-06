import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  locale?: string;
}

function validatePayload(body: unknown): body is ContactPayload {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" && b.name.trim().length > 0 &&
    typeof b.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.subject === "string" && b.subject.trim().length > 0 &&
    typeof b.message === "string" && b.message.trim().length > 0
  );
}

function sanitize(str: string): string {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildHtml(p: ContactPayload): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
  <div style="background:#7c3aed;padding:20px;border-radius:12px 12px 0 0">
    <h1 style="color:white;margin:0;font-size:20px">POLCERO — New Inquiry</h1>
  </div>
  <div style="background:#f4f3f8;padding:24px;border-radius:0 0 12px 12px">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;color:#6b6b78;font-size:13px;width:120px">Name:</td>
          <td style="padding:8px 0;font-weight:600">${sanitize(p.name)}</td></tr>
      <tr><td style="padding:8px 0;color:#6b6b78;font-size:13px">Email:</td>
          <td style="padding:8px 0"><a href="mailto:${sanitize(p.email)}">${sanitize(p.email)}</a></td></tr>
      ${p.company ? `<tr><td style="padding:8px 0;color:#6b6b78;font-size:13px">Company:</td>
          <td style="padding:8px 0">${sanitize(p.company)}</td></tr>` : ""}
      <tr><td style="padding:8px 0;color:#6b6b78;font-size:13px">Subject:</td>
          <td style="padding:8px 0;font-weight:600">${sanitize(p.subject)}</td></tr>
      ${p.locale ? `<tr><td style="padding:8px 0;color:#6b6b78;font-size:13px">Locale:</td>
          <td style="padding:8px 0">${sanitize(p.locale)}</td></tr>` : ""}
    </table>
    <hr style="border:none;border-top:1px solid #e0e0e0;margin:16px 0">
    <h3 style="margin:0 0 12px;color:#1a1a24">Message:</h3>
    <p style="white-space:pre-wrap;color:#1a1a24;line-height:1.6">${sanitize(p.message)}</p>
  </div>
  <p style="color:#9a9aa6;font-size:12px;text-align:center;margin-top:16px">
    POLCERO sp. z o.o. · KRS 0001178417 · polcero.com
  </p>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!validatePayload(body)) {
    return NextResponse.json({ error: "Invalid or missing required fields" }, { status: 422 });
  }

  const smtpHost = process.env.SMTP_HOST ?? "smtp.emaillabs.net.pl";
  const smtpPort = parseInt(process.env.SMTP_PORT ?? "587", 10);
  const smtpUser = process.env.SMTP_USER ?? "";
  const smtpPass = process.env.SMTP_PASS ?? "";
  const toEmail = process.env.CONTACT_TO ?? "biuro@polcero.com";
  const fromEmail = process.env.CONTACT_FROM ?? "noreply@polcero.com";

  if (!smtpUser || !smtpPass) {
    console.warn("SMTP credentials not configured — skipping email send");
    return NextResponse.json({ ok: true, note: "email_not_configured" });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  try {
    await transporter.sendMail({
      from: `"POLCERO Website" <${fromEmail}>`,
      to: toEmail,
      replyTo: body.email,
      subject: `[POLCERO Inquiry] ${body.subject}`,
      html: buildHtml(body),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
