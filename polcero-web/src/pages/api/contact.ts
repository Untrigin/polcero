import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// Runs on the server (Node adapter) so it can talk to SMTP. Not prerendered.
export const prerender = false;

const str = (v: FormDataEntryValue | null) => (typeof v === 'string' ? v.trim() : '');

export const POST: APIRoute = async ({ request }) => {
  let name = '', email = '', company = '', subject = '', message = '', honeypot = '';
  try {
    const data = await request.formData();
    name = str(data.get('name'));
    email = str(data.get('email'));
    company = str(data.get('company'));
    subject = str(data.get('subject'));
    message = str(data.get('message'));
    honeypot = str(data.get('website')); // hidden anti-spam field
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  // Bot filled the honeypot -> pretend success, send nothing.
  if (honeypot) return json({ ok: true }, 200);

  if (!name || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ ok: false, error: 'invalid' }, 400);
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.error('[contact] SMTP env vars are not set');
    return json({ ok: false, error: 'server_config' }, 500);
  }

  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465),
      secure: (SMTP_SECURE ?? 'true') === 'true', // 465 -> implicit SSL
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transport.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO,
      replyTo: `${name} <${email}>`,
      subject: `[polcero.com] ${subject || 'Zapytanie z formularza'} - ${name}`,
      text:
        `Imie i nazwisko: ${name}\n` +
        `E-mail: ${email}\n` +
        `Firma: ${company || '-'}\n` +
        `Temat: ${subject || '-'}\n\n` +
        `${message}\n`,
    });

    return json({ ok: true }, 200);
  } catch (err) {
    console.error('[contact] sendMail failed:', err);
    return json({ ok: false, error: 'send_failed' }, 502);
  }
};

// Method guard for anything that is not POST.
export const ALL: APIRoute = () => json({ ok: false, error: 'method_not_allowed' }, 405);

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}
