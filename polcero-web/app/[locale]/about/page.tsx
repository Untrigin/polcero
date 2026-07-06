import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Layers, Factory, Sun, Globe, Users, Rocket } from "lucide-react";
import { AmbientGlow } from "@/components/AmbientGlow";
import { SectionHeader } from "@/components/SectionHeader";
import { ChipRow } from "@/components/ChipRow";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: "About POLCERO — Polish Robotics Center",
    description: t("vision_desc"),
    alternates: { canonical: `https://polcero.com/${locale}/about` },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t  = await getTranslations("about");
  const ht = await getTranslations("home");
  const bt = await getTranslations("branch_page");
  const ct = await getTranslations("common");
  const base = `/${locale}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About POLCERO",
    description: "POLCERO group — vision, platform, manufacturing and energy.",
    url: `https://polcero.com/${locale}/about`,
  };

  const sections = [
    { Icon: Globe, title: t("vision_title"), desc: t("vision_desc") },
    { Icon: Layers, title: t("platform_title"), desc: t("platform_desc") },
    { Icon: Rocket, title: t("to_order_title"), desc: t("to_order_desc") },
    { Icon: Factory, title: t("production_title"), desc: t("production_desc") },
    { Icon: Sun, title: t("energy_title"), desc: t("energy_desc") },
    { Icon: Users, title: t("team_title"), desc: t("team_desc") },
  ];

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <section className="relative z-20 py-16 px-6 overflow-hidden">
        <AmbientGlow />
        <div className="max-w-7xl mx-auto relative z-10">
          <Breadcrumbs crumbs={[
            { label: "POLCERO", href: `/${locale}` },
            { label: "About" },
          ]} />

          {/* Hero */}
          <div className="max-w-3xl mb-16">
            <p data-animate className="text-xs text-[rgb(var(--primary))] font-bold uppercase tracking-widest mb-3">
              {t("badge")}
            </p>
            <h1 data-animate data-animate-delay="100"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-tight mb-4 font-display">
              {t("title")}
            </h1>
            <p data-animate data-animate-delay="200"
              className="text-lg font-semibold text-gradient mb-6">
              {t("subtitle")}
            </p>
          </div>

          {/* Content grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {sections.map(({ Icon, title, desc }, i) => (
              <div key={i} data-animate data-animate-delay={String((i % 3) * 100)} className="bento-card">
                <div className="w-11 h-11 rounded-xl bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
                  flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[rgb(var(--primary))]" />
                </div>
                <h2 className="font-bold text-base mb-2 font-display" style={{ color: "var(--text-strong)" }}>
                  {title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Space R&D */}
          <div data-animate className="nl-card p-6 mb-12 max-w-3xl">
            <div className="flex items-start gap-4">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full
                bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
                text-[rgb(var(--primary))] shrink-0 mt-0.5">R&D</span>
              <div>
                <h3 className="font-bold text-sm mb-1.5 font-display" style={{ color: "var(--text-strong)" }}>
                  {t("space_title")}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {t("space_desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div data-animate>
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-[rgb(var(--primary))]">
              {ht("compliance.badge")}
            </p>
            <ChipRow chips={["CE Marking", "EU Machinery Regulation 2023/1230", "ISO 18497", "NIS2", "Cyber Resilience Act", "Security-by-design", "Human-in-the-loop", "Made in PL/EU"]} />
          </div>
        </div>
      </section>

      <CTASection
        title={ht("final_cta.title")}
        subtitle={ht("final_cta.subtitle")}
        description={ht("final_cta.desc")}
        cta={bt("cta_inquiry")}
        ctaHref={`${base}/contact`}
        secondaryCta={ct("all_branches")}
        secondaryCtaHref={`${base}/branches`}
      />
    </>
  );
}
