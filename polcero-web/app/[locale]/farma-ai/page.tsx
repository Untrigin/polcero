import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Sprout, Eye, Zap, Leaf, ArrowRight, CheckCircle2 } from "lucide-react";
import { AmbientGlow } from "@/components/AmbientGlow";
import { SectionHeader } from "@/components/SectionHeader";
import { ChipRow } from "@/components/ChipRow";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "farma_ai_page" });
  return {
    title: t("meta_title"),
    description: t("meta_desc"),
    alternates: { canonical: `https://polcero.com/${locale}/farma-ai` },
  };
}

const complianceChips = ["ISO 18497", "EU Machinery Regulation 2023/1230 (from 20 Jan 2027)", "NIS2", "Cyber Resilience Act", "Security-by-design", "Human-in-the-loop", "IP67"];

export default async function FarmaAiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("farma_ai_page");
  const base = `/${locale}`;

  const cropCycle = [
    { Icon: Sprout,       title: t("crop1_title"), desc: t("crop1_desc") },
    { Icon: Leaf,         title: t("crop2_title"), desc: t("crop2_desc") },
    { Icon: Zap,          title: t("crop3_title"), desc: t("crop3_desc") },
    { Icon: Eye,          title: t("crop4_title"), desc: t("crop4_desc") },
    { Icon: CheckCircle2, title: t("crop5_title"), desc: t("crop5_desc") },
  ];

  const techSpecs = [
    { title: t("tech1_title"), items: [t("tech1_i1"), t("tech1_i2"), t("tech1_i3"), t("tech1_i4"), t("tech1_i5"), t("tech1_i6")] },
    { title: t("tech2_title"), items: [t("tech2_i1"), t("tech2_i2"), t("tech2_i3"), t("tech2_i4"), t("tech2_i5")] },
    { title: t("tech3_title"), items: [t("tech3_i1"), t("tech3_i2"), t("tech3_i3"), t("tech3_i4")] },
  ];

  const valueProps = [
    { stat: t("value1_stat"), desc: t("value1_desc") },
    { stat: t("value2_stat"), desc: t("value2_desc") },
    { stat: t("value3_stat"), desc: t("value3_desc") },
    { stat: t("value4_stat"), desc: t("value4_desc") },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("meta_title"),
    description: t("meta_desc"),
    provider: { "@id": "https://polcero.com/#org" },
    url: `https://polcero.com/${locale}/farma-ai`,
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />

      <section className="relative z-20 py-16 px-6 overflow-hidden">
        <AmbientGlow />
        <div className="max-w-7xl mx-auto relative z-10">
          <Breadcrumbs crumbs={[
            { label: t("breadcrumb_home"), href: `/${locale}` },
            { label: t("breadcrumb_branches"), href: `${base}/branches` },
            { label: t("breadcrumb_page") },
          ]} />

          <div className="max-w-3xl mb-16">
            <span data-animate className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4
              bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
              text-[rgb(var(--primary))] text-xs font-bold uppercase tracking-wide">
              <Sprout size={12} /> {t("hero_badge")}
            </span>
            <h1 data-animate data-animate-delay="100"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-tight mb-4 font-display">
              {t("hero_h1")}
            </h1>
            <p data-animate data-animate-delay="200" className="text-xl font-semibold text-gradient mb-6">
              {t("hero_h2")}
            </p>
            <p data-animate data-animate-delay="300" className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              {t("hero_desc")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={`${base}/contact`} className="btn-premium h-11 px-7">
                {t("cta_primary")} <ArrowRight size={15} />
              </Link>
              <Link href={`${base}/ai-systems`} className="btn-secondary h-11 px-7">
                {t("hero_cta2")}
              </Link>
            </div>
          </div>

          {/* Crop cycle */}
          <SectionHeader badge={t("cycle_badge")} title={<>{t("cycle_title")}</>} subtitle={t("cycle_subtitle")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-20">
            {cropCycle.map(({ Icon, title, desc }, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="bento-card">
                <Icon size={22} className="text-[rgb(var(--primary))] mb-4" />
                <h3 className="font-bold text-sm mb-2 font-display" style={{ color: "var(--text-strong)" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Why it's hard */}
          <div data-animate className="nl-card p-8 mb-16 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-[rgb(var(--primary))]">{t("innov_badge")}</p>
            <h2 className="text-2xl font-bold mb-4 font-display" style={{ color: "var(--text-strong)" }}>
              {t("innov_title")}
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{t("innov_p1")}</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{t("innov_p2")}</p>
          </div>

          {/* Technical specs */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {techSpecs.map(({ title, items }, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="nl-card p-6">
                <h3 className="font-bold text-sm mb-4 font-display" style={{ color: "var(--text-strong)" }}>{title}</h3>
                <ul className="space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--primary))] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Value */}
          <SectionHeader badge={t("value_badge")} title={<>{t("value_title")}</>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {valueProps.map(({ stat, desc }, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="bento-card text-center">
                <p className="text-lg font-black text-gradient mb-2">{stat}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Business model */}
          <div data-animate className="glass-card p-8 mb-16 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-[rgb(var(--primary))]">{t("model_badge")}</p>
            <h3 className="text-xl font-bold mb-3 font-display" style={{ color: "var(--text-strong)" }}>{t("model_title")}</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{t("model_p1")}</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>{t("model_p2")}</p>
          </div>

          {/* Compliance */}
          <div data-animate className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-[rgb(var(--primary))]">{t("compliance_badge")}</p>
            <ChipRow chips={complianceChips} />
          </div>

          {/* Cross-links */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`${base}/ai-systems`} className="nl-card p-5 hover:border-[rgba(var(--primary),0.3)] transition-all group">
              <p className="text-xs font-bold uppercase tracking-wide mb-1 text-[rgb(var(--primary))]">{t("related_badge")}</p>
              <p className="font-bold font-display group-hover:text-[rgb(var(--primary))] transition-colors">{t("related1_link")}</p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{t("related1_desc")}</p>
            </Link>
            <Link href={`${base}/solutions/agriculture`} className="nl-card p-5 hover:border-[rgba(var(--primary),0.3)] transition-all group">
              <p className="text-xs font-bold uppercase tracking-wide mb-1 text-[rgb(var(--primary))]">{t("related2_badge")}</p>
              <p className="font-bold font-display group-hover:text-[rgb(var(--primary))] transition-colors">{t("related2_link")}</p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{t("related2_desc")}</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        description={t("cta_desc")}
        cta={t("cta_primary")}
        ctaHref={`${base}/contact`}
      />
    </>
  );
}
