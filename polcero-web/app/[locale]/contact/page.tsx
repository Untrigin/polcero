import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Mail, Phone, Building2 } from "lucide-react";
import { AmbientGlow } from "@/components/AmbientGlow";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: "Contact - Submit an inquiry | POLCERO",
    description: t("subtitle"),
    alternates: { canonical: `https://polcero.com/${locale}/contact` },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("contact");

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "POLCERO - Contact",
    url: `https://polcero.com/${locale}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "POLCERO sp. z o.o.",
      email: "biuro@polcero.com",
      telephone: "+48535777268",
      legalName: "POLCERO sp. z o.o.",
    },
  };

  return (
    <>
      <JsonLd data={contactJsonLd} />

      <section className="relative z-20 py-16 px-6 overflow-hidden">
        <AmbientGlow />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: contact info */}
            <div>
              <p data-animate className="text-xs text-[rgb(var(--primary))] font-bold uppercase tracking-widest mb-3">
                {t("badge")}
              </p>
              <h1 data-animate data-animate-delay="100"
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-tight mb-4 font-display">
                {t("title")}
              </h1>
              <p data-animate data-animate-delay="200"
                className="text-base leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
                {t("subtitle")}
              </p>

              <div data-animate data-animate-delay="300" className="nl-card p-6 space-y-5">
                <a href="mailto:biuro@polcero.com"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-[var(--accent)]"
                  style={{ color: "var(--text-muted)" }}>
                  <Mail size={16} className="shrink-0" />
                  biuro@polcero.com
                </a>
                <a href="tel:+48535777268"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-[var(--accent)]"
                  style={{ color: "var(--text-muted)" }}>
                  <Phone size={16} className="shrink-0" />
                  +48 535 777 268
                </a>
                <div className="flex items-start gap-3 pt-3 border-t border-[var(--nl-border)]">
                  <Building2 size={16} className="shrink-0 mt-0.5" style={{ color: "var(--text-faint)" }} />
                  <div className="text-xs" style={{ color: "var(--text-faint)" }}>
                    <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-muted)" }}>{t("entity")}</p>
                    <p>{t("krs")}</p>
                    <p>{t("nip")}</p>
                    <p>{t("regon")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div data-animate data-animate-delay="200">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
