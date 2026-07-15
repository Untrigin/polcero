import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Shield, Eye, Radio, Truck, AlertTriangle, ArrowRight } from "lucide-react";
import { AmbientGlow } from "@/components/AmbientGlow";
import { SectionHeader } from "@/components/SectionHeader";
import { ChipRow } from "@/components/ChipRow";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "commander_page" });
  return {
    title: t("meta_title"),
    description: t("meta_desc"),
    alternates: { canonical: `https://polcero.com/${locale}/commander` },
  };
}

const complianceChips = [
  "EU Dual-Use Regulation (2021/821)",
  "NIS2", "Cyber Resilience Act",
  "Security-by-design",
  "Human-in-the-loop",
  "Export-control compliant",
  "Made in EU",
];

export default async function CommanderPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("commander_page");
  const base = `/${locale}`;

  const capabilities = [
    { Icon: Eye,           title: t("cap1_title"), desc: t("cap1_desc") },
    { Icon: Shield,        title: t("cap2_title"), desc: t("cap2_desc") },
    { Icon: AlertTriangle, title: t("cap3_title"), desc: t("cap3_desc") },
    { Icon: Radio,         title: t("cap4_title"), desc: t("cap4_desc") },
    { Icon: Truck,         title: t("cap5_title"), desc: t("cap5_desc") },
  ];

  const chassis = [
    { designation: t("chassis1_designation"), type: t("chassis1_type"), desc: t("chassis1_desc") },
    { designation: t("chassis2_designation"), type: t("chassis2_type"), desc: t("chassis2_desc") },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("meta_title"),
    description: t("meta_desc"),
    provider: { "@id": "https://polcero.com/#org" },
    url: `https://polcero.com/${locale}/commander`,
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
              <Shield size={12} /> {t("hero_badge")}
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
                {t("hero_cta")} <ArrowRight size={15} />
              </Link>
              <Link href={`${base}/ai-systems`} className="btn-secondary h-11 px-7">
                {t("hero_cta2")}
              </Link>
            </div>
          </div>

          {/* Human-in-the-loop banner */}
          <div data-animate className="nl-card p-5 mb-12 border-[rgba(var(--primary),0.3)] flex items-start gap-4 max-w-3xl">
            <Shield size={24} className="text-[rgb(var(--primary))] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm font-display" style={{ color: "var(--text-strong)" }}>
                {t("hitl_title")}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                {t("hitl_desc")}
              </p>
            </div>
          </div>

          {/* Capabilities */}
          <SectionHeader badge={t("cap_badge")} title={<>{t("cap_title")}</>} subtitle={t("cap_subtitle")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {capabilities.map(({ Icon, title, desc }, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="bento-card">
                <Icon size={22} className="text-[rgb(var(--primary))] mb-4" />
                <h3 className="font-bold text-sm mb-2 font-display" style={{ color: "var(--text-strong)" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Platform */}
          <SectionHeader badge={t("platform_badge")} title={<>{t("platform_title")}</>} />
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {chassis.map(({ designation, type, desc }, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="nl-card p-6">
                <code className="text-[rgb(var(--primary))] text-xs font-mono font-bold">{designation}</code>
                <p className="font-bold text-sm mt-1 mb-2 font-display" style={{ color: "var(--text-strong)" }}>{type}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Legal/ethical framing */}
          <div data-animate className="glass-card p-8 mb-16 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-[rgb(var(--primary))]">{t("legal_badge")}</p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>{t("legal_p1")}</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{t("legal_p2")}</p>
          </div>

          {/* Business model */}
          <div data-animate className="nl-card p-6 mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-[rgb(var(--primary))]">{t("model_badge")}</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{t("model_desc")}</p>
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
            <Link href={`${base}/solutions/services`} className="nl-card p-5 hover:border-[rgba(var(--primary),0.3)] transition-all group">
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
