import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight, Bot, Brain, Zap, Star,
  Factory, Tractor, Warehouse, HardHat, HeartHandshake, Sun,
  Package, Cpu, LayoutDashboard, Cog, Layers,
  CheckCircle2, ChevronRight, FlaskConical,
} from "lucide-react";
import { AmbientGlow } from "@/components/AmbientGlow";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { ChipRow } from "@/components/ChipRow";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  icbProducts, icbFeaturedProducts, icbCaseStudies,
  icbIndustries, icbWorkflow, icbCompany,
} from "@/content/icb";

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const icb = await getTranslations({ locale, namespace: "icb_page" });
  return {
    title: icb("meta_title"),
    description: icb("meta_desc"),
    alternates: {
      canonical: `https://robotic4u.com/${locale}/robots-icb`,
      languages: {
        en: "https://robotic4u.com/en/robots-icb",
        pl: "https://robotic4u.com/pl/robots-icb",
        de: "https://robotic4u.com/de/robots-icb",
        "x-default": "https://robotic4u.com/en/robots-icb",
      },
    },
    openGraph: {
      title: icb("meta_title"),
      description: icb("meta_desc"),
      url: `https://robotic4u.com/${locale}/robots-icb`,
      siteName: "POLCERO",
      locale,
      type: "website",
    },
  };
}

// ── Icon maps ─────────────────────────────────────────────────────────────────

const productIcons: Record<string, React.ElementType> = {
  "cobot": Bot,
  "autonomous-forklift": Package,
  "amr-platform": Cpu,
  "control-center": LayoutDashboard,
  "autonomous-production": Cog,
  "production-lines": Layers,
};

const industryIcons: Record<string, React.ElementType> = {
  manufacturing: Factory,
  agriculture: Tractor,
  construction: HardHat,
  logistics: Warehouse,
  services: HeartHandshake,
  "renewable-energy": Sun,
};

const stageColors: Record<string, string> = {
  concept: "bg-blue-500/10 border-blue-500/30 text-blue-600",
  rd: "bg-purple-500/10 border-purple-500/30 text-purple-600",
  pilot: "bg-yellow-500/10 border-yellow-500/30 text-yellow-700",
  live: "bg-green-500/10 border-green-500/30 text-green-700",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function RobotsIcbPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("branch_page");
  const icb = await getTranslations("icb_page");
  const base = `/${locale}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://robotic4u.com/${locale}/robots-icb#service`,
    name: "ICB Robots - Industrial Cobots & AMR",
    description: icbCompany.description,
    provider: { "@id": "https://robotic4u.com/#org" },
    serviceType: "Robotics Integration",
    areaServed: ["PL", "EU"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ICB Robots Product Lines",
      itemListElement: icbProducts.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: p.name, description: p.description },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: icb("faq1_q"), acceptedAnswer: { "@type": "Answer", text: icb("faq1_a") } },
      { "@type": "Question", name: icb("faq3_q"), acceptedAnswer: { "@type": "Answer", text: icb("faq3_a") } },
      { "@type": "Question", name: icb("faq2_q"), acceptedAnswer: { "@type": "Answer", text: icb("faq2_a") } },
      { "@type": "Question", name: icb("faq_prog_q"), acceptedAnswer: { "@type": "Answer", text: icb("faq_prog_a") } },
      { "@type": "Question", name: icb("faq5_q"), acceptedAnswer: { "@type": "Answer", text: icb("faq5_a") } },
    ],
  };

  const complianceChips = [
    "CE Marking", "ISO 10218 / TS 15066", "ISO 18497",
    "NIS2 / CRA", "EU Machinery Regulation 2023/1230", "Human-in-the-loop",
  ];

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* ── HERO ──────────────────────────────── */}
      <section className="relative z-20 pt-8 pb-8 w-full overflow-hidden min-h-[78vh] flex flex-col justify-center">
        <AmbientGlow />
        <div className="relative z-20 px-6 max-w-[1200px] mx-auto">
          <Breadcrumbs
            crumbs={[
              { label: icb("breadcrumb_home"), href: base },
              { label: icb("breadcrumb_branches"), href: `${base}/branches` },
              { label: icb("breadcrumb_page") },
            ]}
          />

          <div data-animate className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
            border border-[rgba(var(--primary),0.2)] bg-[rgba(var(--primary),0.05)]
            text-xs font-semibold tracking-wide uppercase text-[rgb(var(--primary))]">
            <Star size={12} /> {icb("hero_badge")} {icbCompany.experience.since}
          </div>

          <h1 data-animate data-animate-delay="100"
            className="text-[clamp(2rem,4.5vw,3.75rem)] font-bold tracking-[-0.04em] leading-[1.06]
              mb-4 max-w-3xl font-display" style={{ color: "rgb(var(--foreground))" }}>
            {icb("hero_h1")}
          </h1>

          <h2 data-animate data-animate-delay="200"
            className="text-[clamp(1rem,2vw,1.35rem)] font-semibold text-gradient mb-6">
            {icb("hero_h2")}
          </h2>

          <p data-animate data-animate-delay="300"
            className="text-sm md:text-base text-[rgb(var(--muted-foreground))]
              max-w-2xl mb-4 leading-relaxed font-medium">
            {icb("core_differentiator")}
          </p>

          <div data-animate data-animate-delay="400"
            className="flex flex-col sm:flex-row items-start gap-4">
            <Link href={`${base}/contact`} className="btn-premium h-11 px-7">
              {t("cta_inquiry")} <ArrowRight size={16} />
            </Link>
            <Link href={`${base}/ai-systems`} className="btn-secondary h-11 px-7">
              {icb("hero_cta2")}
            </Link>
          </div>

          <div data-animate data-animate-delay="500"
            className="mt-10 flex flex-wrap items-center gap-4 text-sm font-semibold text-[rgb(var(--muted-foreground))]">
            {[
              icb("hero_stat_live"),
              `${icb("hero_stat_since")} ${icbCompany.experience.since}`,
              `${icbCompany.experience.teamExperienceYears} ${icb("hero_stat_years")}`,
              `${icbCompany.experience.industrySectors} ${icb("hero_stat_sectors")}`,
              icb("hero_stat_raas"),
            ].map((s) => (
              <span key={s} className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[rgb(var(--primary))]" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCT SPECS ─────────────── */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge={icb("specs_badge")}
            title={<>{icb("specs_title")}</>}
            subtitle={icb("specs_subtitle")}
          />
          <div className="grid lg:grid-cols-2 gap-6">
            {icbFeaturedProducts.map((product, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="bento-card gap-5">
                <div>
                  <h3 className="font-bold text-base mb-1 font-display" style={{ color: "var(--text-strong)" }}>
                    {product.name}
                  </h3>
                  <p className="text-xs text-[rgb(var(--primary))] font-mono mb-3">{product.namePl}</p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                    {product.description}
                  </p>
                </div>

                {/* Spec table */}
                <div className="overflow-hidden rounded-xl border border-[var(--nl-border)]">
                  <table className="w-full text-sm">
                    <tbody>
                      {product.specs.map(({ label, labelPl, value }, j) => (
                        <tr key={label} style={{ borderBottom: j < product.specs.length - 1 ? "1px solid var(--nl-border)" : "none" }}>
                          <td className="px-4 py-2.5 text-xs font-semibold w-44" style={{ color: "var(--text-faint)", background: "var(--bg-chip)" }}>
                            {label}
                            {labelPl !== label && (
                              <span className="block text-[10px] font-normal" style={{ color: "var(--text-faint)" }}>{labelPl}</span>
                            )}
                          </td>
                          <td className="px-4 py-2.5 font-bold font-mono text-xs text-[rgb(var(--primary))]">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Programming stack */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-faint)" }}>
                    {icb("specs_programming")}
                  </p>
                  <div className="flex gap-2">
                    {product.programmingStack.map((lang) => (
                      <span key={lang} className="px-2.5 py-1 rounded-lg font-mono text-xs font-bold
                        bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))]">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1.5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      <ChevronRight size={12} className="text-[rgb(var(--primary))] shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIX SERVICE CATEGORIES ─────────────── */}
      <section className="py-24 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(var(--card),0.5)] border-y border-[rgba(var(--border))] z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge={icb("services_badge")}
            title={<>{icb("services_title")}</>}
            subtitle={icb("services_subtitle")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {icbProducts.map((product, i) => {
              const Icon = productIcons[product.id] ?? Bot;
              return (
                <div key={product.id} data-animate data-animate-delay={String((i % 3) * 100)}
                  className="bento-card flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[rgba(var(--primary),0.1)]
                      border border-[rgba(var(--primary),0.2)] flex items-center justify-center">
                      <Icon size={20} className="text-[rgb(var(--primary))]" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5
                      rounded-full bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
                      text-[rgb(var(--primary))]">
                      {icb("services_label")}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm mb-0.5 font-display" style={{ color: "var(--text-strong)" }}>
                      {product.name}
                    </h3>
                    <p className="text-[10px] font-mono mb-1" style={{ color: "var(--text-faint)" }}>{product.namePl}</p>
                    <p className="text-xs font-semibold text-[rgb(var(--primary))] uppercase tracking-wide mb-2">
                      {product.headline}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {product.description}
                    </p>
                  </div>

                  <ul className="space-y-1 mt-auto">
                    {product.verbCapabilities.slice(0, 3).map((cap) => (
                      <li key={cap} className="flex items-start gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
                        <ChevronRight size={11} className="text-[rgb(var(--primary))] shrink-0 mt-0.5" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ───────────────────────── */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge={icb("cases_badge")}
            title={<>{icb("cases_title")}</>}
            subtitle={icb("cases_subtitle")}
          />
          <div className="grid sm:grid-cols-3 gap-5">
            {icbCaseStudies.map((cs, i) => (
              <div key={cs.id} data-animate data-animate-delay={String(i * 100)} className="nl-card p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--text-faint)" }}>
                    {cs.sector}
                  </span>
                  <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${stageColors[cs.stage]}`}>
                    {cs.stageLabel}
                  </span>
                </div>
                <h3 className="font-bold text-sm font-display" style={{ color: "var(--text-strong)" }}>
                  {cs.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {cs.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ─────────────────────────── */}
      <section className="py-20 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--primary),0.04)] to-transparent z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge={icb("industries_badge")}
            title={<>{icb("industries_title")}</>}
            subtitle={icb("industries_subtitle")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {icbIndustries.map((industry, i) => {
              const Icon = industryIcons[industry.id] ?? Factory;
              return (
                <div key={industry.id} data-animate data-animate-delay={String((i % 3) * 100)}
                  className="nl-card p-5 flex flex-col gap-3">
                  <Icon size={20} className="text-[rgb(var(--primary))]" />
                  <h3 className="font-bold text-sm font-display" style={{ color: "var(--text-strong)" }}>
                    {industry.name}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {industry.note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DELIVERY WORKFLOW ──────────────────── */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge={icb("workflow_badge")}
            title={<>{icb("workflow_title")}</>}
            subtitle={icb("workflow_subtitle")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {icbWorkflow.map((step, i) => (
              <div key={step.id} data-animate data-animate-delay={String(i * 100)}
                className="nl-card p-5 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-[rgba(var(--primary),0.1)]
                  border border-[rgba(var(--primary),0.2)] flex items-center justify-center
                  text-xs font-black text-[rgb(var(--primary))]">
                  {String(step.step).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-sm font-display" style={{ color: "var(--text-strong)" }}>
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI BRAIN NOTE ─────────────────────── */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bento-card p-8 flex flex-col md:flex-row items-start gap-8">
            <div className="w-14 h-14 rounded-2xl bg-[rgba(var(--primary),0.1)]
              border border-[rgba(var(--primary),0.2)] flex items-center justify-center shrink-0">
              <Brain size={26} className="text-[rgb(var(--primary))]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[rgb(var(--primary))] mb-2">
                {icb("brain_badge")}
              </p>
              <h3 className="font-bold text-xl mb-3 font-display" style={{ color: "var(--text-strong)" }}>
                {icb("brain_title")}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                {icb("brain_desc")}
              </p>
              <Link href={`${base}/ai-systems`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[rgb(var(--primary))]">
                {icb("brain_link")} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ─────────────────────────── */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-4 text-[rgb(var(--primary))]">
            {icb("compliance_badge")}
          </p>
          <ChipRow chips={complianceChips} />
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────── */}
      <section className="py-20 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(var(--card),0.5)] border-y border-[rgba(var(--border))] z-0" />
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader badge={icb("faq_badge")} title={icb("faq_title")} />
          <div className="space-y-3">
            {[
              { q: icb("faq1_q"), a: icb("faq1_a") },
              { q: icb("faq2_q"), a: icb("faq2_a") },
              { q: icb("faq3_q"), a: icb("faq3_a") },
              { q: icb("faq4_q"), a: icb("faq4_a") },
              { q: icb("faq5_q"), a: icb("faq5_a") },
            ].map((item, i) => (
              <details key={i} data-animate data-animate-delay={String(i * 100)} className="nl-card p-5">
                <summary className="font-bold text-sm cursor-pointer list-none flex items-center justify-between gap-4 font-display"
                  style={{ color: "var(--text-strong)" }}>
                  {item.q}
                  <span className="text-[rgb(var(--primary))] shrink-0">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED BRANCHES ──────────────────── */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-6 text-[rgb(var(--primary))]">
            {t("related")}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: `${base}/ai-systems`, Icon: Brain, badge: icb("related1_badge"), name: icb("related1_name"), tagline: icb("related1_tagline"), desc: icb("related1_desc") },
              { href: `${base}/robots`,     Icon: Bot,   badge: icb("related2_badge"), name: icb("related2_name"), tagline: icb("related2_tagline"), desc: icb("related2_desc") },
              { href: `${base}/farma-ai`,   Icon: Zap,   badge: icb("related3_badge"), name: icb("related3_name"), tagline: icb("related3_tagline"), desc: icb("related3_desc") },
            ].map(({ href, Icon, badge, name, tagline, desc }, i) => (
              <Link key={href} href={href} data-animate data-animate-delay={String(i * 100)}
                className="group flex flex-col gap-4 p-5 rounded-2xl
                  border border-[rgba(var(--border))] bg-[rgba(var(--foreground),0.02)]
                  hover:bg-[rgba(var(--primary),0.04)] hover:border-[rgba(var(--primary),0.25)] transition-all">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(var(--foreground),0.06)] border border-[rgba(var(--border))]
                    flex items-center justify-center group-hover:border-[rgba(var(--primary),0.2)] transition-all">
                    <Icon size={20} className="text-[rgb(var(--primary))]" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5
                    rounded-full bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)] text-[rgb(var(--primary))]">
                    {badge}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm mb-0.5 group-hover:text-[rgb(var(--primary))] transition-colors font-display">{name}</p>
                  <p className="text-[10px] font-semibold text-[rgb(var(--muted-foreground))] uppercase tracking-wide mb-2">{tagline}</p>
                  <p className="text-[11px] text-[rgb(var(--muted-foreground))] leading-relaxed">{desc}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[rgb(var(--primary))] mt-auto">
                  {icb("learn_more")} <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={icb("cta_title")}
        subtitle={icb("cta_subtitle")}
        description={icb("cta_desc")}
        cta={icb("cta_primary")}
        ctaHref={`${base}/contact`}
        secondaryCta={icb("cta_secondary")}
        secondaryCtaHref={`${base}/branches`}
      />
    </>
  );
}
