import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Brain, Eye, Cloud, Cpu, Wrench, HardHat, Warehouse, ArrowRight } from "lucide-react";
import { AmbientGlow } from "@/components/AmbientGlow";
import { SectionHeader } from "@/components/SectionHeader";
import { ChipRow } from "@/components/ChipRow";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ai_systems_page" });
  return {
    title: t("meta_title"),
    description: t("meta_desc"),
    alternates: { canonical: `https://robotic4u.com/${locale}/ai-systems` },
  };
}

const complianceChips = ["ISO 18497", "EU Machinery Regulation 2023/1230", "NIS2", "Cyber Resilience Act", "Human-in-the-loop", "Security-by-design", "Safe stop"];

export default async function AiSystemsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("ai_systems_page");
  const base = `/${locale}`;

  const constructionJobs = [
    t("apps_c_j1"), t("apps_c_j2"), t("apps_c_j3"), t("apps_c_j4"),
    t("apps_c_j5"), t("apps_c_j6"), t("apps_c_j7"),
  ];
  const warehouseJobs = [
    t("apps_w_j1"), t("apps_w_j2"), t("apps_w_j3"), t("apps_w_j4"),
    t("apps_w_j5"), t("apps_w_j6"), t("apps_w_j7"), t("apps_w_j8"),
  ];
  const furtherJobs = [t("apps_f_j1"), t("apps_f_j2"), t("apps_f_j3"), t("apps_f_j4")];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("meta_title"),
    description: t("meta_desc"),
    provider: { "@id": "https://robotic4u.com/#org" },
    areaServed: "EU",
    url: `https://robotic4u.com/${locale}/ai-systems`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: t("faq1_q"), acceptedAnswer: { "@type": "Answer", text: t("faq1_a") } },
      { "@type": "Question", name: t("faq2_q"), acceptedAnswer: { "@type": "Answer", text: t("faq2_a") } },
      { "@type": "Question", name: t("faq3_q"), acceptedAnswer: { "@type": "Answer", text: t("faq3_a") } },
      { "@type": "Question", name: t("faq4_q"), acceptedAnswer: { "@type": "Answer", text: t("faq4_a") } },
      { "@type": "Question", name: t("faq5_q"), acceptedAnswer: { "@type": "Answer", text: t("faq5_a") } },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceJsonLd, faqJsonLd]} />

      <section className="relative z-20 py-16 px-6 overflow-hidden">
        <AmbientGlow />
        <div className="max-w-7xl mx-auto relative z-10">
          <Breadcrumbs crumbs={[
            { label: t("breadcrumb_home"), href: `/${locale}` },
            { label: t("breadcrumb_branches"), href: `${base}/branches` },
            { label: t("breadcrumb_page") },
          ]} />

          {/* Hero */}
          <div className="max-w-3xl mb-16">
            <span data-animate className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4
              bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
              text-[rgb(var(--primary))] text-xs font-bold uppercase tracking-wide">
              <Brain size={12} /> {t("hero_badge")}
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
              <Link href={`${base}/robots`} className="btn-secondary h-11 px-7">
                {t("hero_cta2")}
              </Link>
            </div>
          </div>

          {/* What we do */}
          <SectionHeader badge={t("what_badge")} title={<>{t("what_title")}</>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {[
              { Icon: Brain, title: t("layer1_title"), desc: t("layer1_desc") },
              { Icon: Eye,   title: t("layer2_title"), desc: t("layer2_desc") },
              { Icon: Cloud, title: t("layer3_title"), desc: t("layer3_desc") },
              { Icon: Cpu,   title: t("layer4_title"), desc: t("layer4_desc") },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="bento-card">
                <Icon size={22} className="text-[rgb(var(--primary))] mb-4" />
                <h3 className="font-bold text-sm mb-2 font-display" style={{ color: "var(--text-strong)" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Jobs robots replace */}
          <SectionHeader badge={t("apps_badge")} title={<>{t("apps_title")}</>} subtitle={t("apps_subtitle")} />

          <div className="grid lg:grid-cols-2 gap-6 mb-20">
            {/* Construction */}
            <div data-animate className="nl-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <HardHat size={20} className="text-[rgb(var(--primary))]" />
                <h3 className="font-bold font-display" style={{ color: "var(--text-strong)" }}>{t("apps_construction_title")}</h3>
              </div>
              <ul className="space-y-2.5">
                {constructionJobs.map((job, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--primary))] mt-2 shrink-0" />
                    {job}
                  </li>
                ))}
              </ul>
            </div>
            {/* Warehouse */}
            <div data-animate data-animate-delay="100" className="nl-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <Warehouse size={20} className="text-[rgb(var(--primary))]" />
                <h3 className="font-bold font-display" style={{ color: "var(--text-strong)" }}>{t("apps_warehouse_title")}</h3>
              </div>
              <ul className="space-y-2.5">
                {warehouseJobs.map((job, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--primary))] mt-2 shrink-0" />
                    {job}
                  </li>
                ))}
              </ul>
            </div>
            {/* Further */}
            <div data-animate data-animate-delay="200" className="nl-card p-6 lg:col-span-2">
              <h3 className="font-bold mb-4 font-display" style={{ color: "var(--text-strong)" }}>{t("apps_further_title")}</h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {furtherJobs.map((job, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--primary))] mt-2 shrink-0" />
                    {job}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <SectionHeader badge={t("tech_badge")} title={<>{t("tech_title")}</>} />
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { label: t("tech1_label"), value: t("tech1_value") },
              { label: t("tech2_label"), value: t("tech2_value") },
              { label: t("tech3_label"), value: t("tech3_value") },
            ].map(({ label, value }, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="nl-card p-5">
                <p className="text-xs font-bold uppercase tracking-wide mb-2 text-[rgb(var(--primary))]">{label}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{value}</p>
              </div>
            ))}
          </div>

          {/* Compliance */}
          <div data-animate className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-[rgb(var(--primary))]">{t("compliance_badge")}</p>
            <ChipRow chips={complianceChips} />
          </div>

          {/* Cross-links */}
          <div data-animate className="grid sm:grid-cols-2 gap-4 mb-8">
            <Link href={`${base}/farma-ai`} className="nl-card p-5 hover:border-[rgba(var(--primary),0.3)] transition-all group">
              <p className="text-xs font-bold uppercase tracking-wide mb-1 text-[rgb(var(--primary))]">{t("related_badge")}</p>
              <p className="font-bold font-display group-hover:text-[rgb(var(--primary))] transition-colors">{t("farma_link")}</p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{t("farma_desc")}</p>
            </Link>
            <Link href={`${base}/commander`} className="nl-card p-5 hover:border-[rgba(var(--primary),0.3)] transition-all group">
              <p className="text-xs font-bold uppercase tracking-wide mb-1 text-[rgb(var(--primary))]">{t("related_badge")}</p>
              <p className="font-bold font-display group-hover:text-[rgb(var(--primary))] transition-colors">{t("commander_link")}</p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{t("commander_desc")}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(var(--card),0.5)] border-y border-[rgba(var(--border))] z-0" />
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader badge={t("faq_badge")} title={t("faq_title")} />
          {[
            { q: t("faq1_q"), a: t("faq1_a") },
            { q: t("faq2_q"), a: t("faq2_a") },
            { q: t("faq3_q"), a: t("faq3_a") },
            { q: t("faq4_q"), a: t("faq4_a") },
            { q: t("faq5_q"), a: t("faq5_a") },
          ].map((item, i) => (
            <details key={i} data-animate data-animate-delay={String(i * 100)} className="nl-card p-5 mb-3">
              <summary className="font-bold text-sm cursor-pointer list-none flex items-center justify-between gap-4 font-display" style={{ color: "var(--text-strong)" }}>
                {item.q}
                <span className="text-[rgb(var(--primary))] shrink-0">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.a}</p>
            </details>
          ))}
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
