import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TrendingUp, Globe, Factory, Zap } from "lucide-react";
import { AmbientGlow } from "@/components/AmbientGlow";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "investors" });
  return {
    title: "Investors — POLCERO",
    description: t("desc"),
    alternates: { canonical: `https://polcero.com/${locale}/investors` },
  };
}

const pillarIcons = [Globe, Factory, Zap, TrendingUp] as const;

export default async function InvestorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("investors");

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: "POLCERO — Investors", url: `https://polcero.com/${locale}/investors` }} />

      <section className="relative z-20 py-16 px-6 overflow-hidden">
        <AmbientGlow />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mb-16">
            <p data-animate className="text-xs text-[rgb(var(--primary))] font-bold uppercase tracking-widest mb-3">
              {t("badge")}
            </p>
            <h1 data-animate data-animate-delay="100"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-tight mb-4 font-display">
              {t("title")}
            </h1>
            <p data-animate data-animate-delay="200"
              className="text-base leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              {t("subtitle")}
            </p>
            <p data-animate data-animate-delay="300"
              className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {t("desc")}
            </p>
          </div>

          {/* Platform pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {([1, 2, 3, 4] as const).map((n, i) => {
              const Icon = pillarIcons[i];
              return (
                <div key={n} data-animate data-animate-delay={String(i * 100)} className="bento-card">
                  <Icon size={22} className="text-[rgb(var(--primary))] mb-4" />
                  <h3 className="font-bold text-sm mb-2 font-display" style={{ color: "var(--text-strong)" }}>
                    {t(`p${n}_title`)}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {t(`p${n}_desc`)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Contact form */}
          <div data-animate>
            <h2 className="text-2xl font-bold mb-2 font-display text-center mb-8">
              {t("form_title")}
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
