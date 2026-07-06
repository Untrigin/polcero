"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto text-center">
        <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: "var(--green)" }} />
        <h2 className="text-2xl font-bold mb-2 font-display">{t("success_title")}</h2>
        <p style={{ color: "var(--text-muted)" }}>{t("success_desc")}</p>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-2 font-display">{t("title")}</h2>
      <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>{t("subtitle")}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide mb-2"
              style={{ color: "var(--text-muted)" }}>{t("name_label")}</label>
            <input name="name" required value={form.name} onChange={handleChange}
              className="modern-input" placeholder={t("name_placeholder")} />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide mb-2"
              style={{ color: "var(--text-muted)" }}>{t("email_label")}</label>
            <input name="email" type="email" required value={form.email} onChange={handleChange}
              className="modern-input" placeholder={t("email_placeholder")} />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "var(--text-muted)" }}>{t("company_label")}</label>
          <input name="company" value={form.company} onChange={handleChange}
            className="modern-input" placeholder={t("company_placeholder")} />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "var(--text-muted)" }}>{t("subject_label")}</label>
          <input name="subject" required value={form.subject} onChange={handleChange}
            className="modern-input" placeholder={t("subject_placeholder")} />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "var(--text-muted)" }}>{t("message_label")}</label>
          <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
            className="modern-input resize-none" placeholder={t("message_placeholder")} />
        </div>
        {status === "error" && (
          <p className="text-sm" style={{ color: "var(--red)" }}>{t("error")}</p>
        )}
        <button type="submit" disabled={status === "sending"}
          className="btn-premium w-full h-12 mt-2 disabled:opacity-60">
          {status === "sending" ? t("sending") : <>{t("submit")} <ArrowRight size={16} /></>}
        </button>
      </form>
    </div>
  );
}
