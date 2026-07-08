import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Factory, Cpu, Layers, Cog, CheckCircle2, ArrowRight } from "lucide-react";
import { AmbientGlow } from "@/components/AmbientGlow";
import { SectionHeader } from "@/components/SectionHeader";
import { ChipRow } from "@/components/ChipRow";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "manufacturing_page" });
  return {
    title: t("meta_title"),
    description: t("meta_desc"),
    alternates: { canonical: `https://robotic4u.com/${locale}/manufacturing` },
  };
}

export default async function ManufacturingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("manufacturing_page");
  const base = `/${locale}`;

  const competencies = [
    { Icon: Cpu, title: t("comp1_title"), desc: t("comp1_desc") },
    { Icon: Layers, title: t("comp2_title"), desc: t("comp2_desc") },
    { Icon: Cog, title: t("comp3_title"), desc: t("comp3_desc") },
    { Icon: Factory, title: t("comp4_title"), desc: t("comp4_desc") },
  ];

  const modelItems = [
    t("model_item1"), t("model_item2"), t("model_item3"),
    t("model_item4"), t("model_item5"),
  ];

  const complianceChips = [
    "CE Marking", "EU Machinery Regulation 2023/1230",
    "ISO quality control", "NIS2", "Cyber Resilience Act", "Made in PL/EU",
  ];

  return (
    <>
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
              <Factory size={12} /> {t("hero_badge")}
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
            <Link href={`${base}/contact`} className="btn-premium h-11 px-7 inline-flex">
              {t("hero_cta")} <ArrowRight size={15} />
            </Link>
          </div>

          <SectionHeader badge={t("comp_badge")} title={<>{t("comp_title")}</>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {competencies.map(({ Icon, title, desc }, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="bento-card">
                <Icon size={22} className="text-[rgb(var(--primary))] mb-4" />
                <h3 className="font-bold text-sm mb-2 font-display" style={{ color: "var(--text-strong)" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <div data-animate className="nl-card p-6">
              <p className="text-xs font-bold uppercase tracking-widest mb-3 text-[rgb(var(--primary))]">{t("location_badge")}</p>
              <h3 className="font-bold text-base mb-2 font-display" style={{ color: "var(--text-strong)" }}>{t("location_title")}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {t("location_desc")}
              </p>
            </div>
            <div data-animate data-animate-delay="100" className="nl-card p-6">
              <p className="text-xs font-bold uppercase tracking-widest mb-3 text-[rgb(var(--primary))]">{t("model_badge")}</p>
              <h3 className="font-bold text-base mb-2 font-display" style={{ color: "var(--text-strong)" }}>{t("model_title")}</h3>
              <ul className="space-y-2">
                {modelItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                    <CheckCircle2 size={14} className="text-[rgb(var(--primary))] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div data-animate className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-[rgb(var(--primary))]">{t("compliance_badge")}</p>
            <ChipRow chips={complianceChips} />
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
