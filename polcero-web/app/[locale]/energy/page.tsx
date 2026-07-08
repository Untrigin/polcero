import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {
  Sun, Wind, Zap, TrendingDown, ShieldCheck, Leaf,
  Factory, ArrowRight, CheckCircle2, Globe, FlaskConical,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChipRow } from "@/components/ChipRow";
import { JsonLd } from "@/components/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "energy_page" });
  return {
    title: t("meta_title"),
    description: t("meta_desc"),
    alternates: {
      canonical: `https://robotic4u.com/${locale}/energy`,
    },
  };
}

export default async function EnergyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("energy_page");
  const base = `/${locale}`;

  const whyCards = [
    { Icon: TrendingDown, title: t("why1_title"), desc: t("why1_desc") },
    { Icon: ShieldCheck, title: t("why2_title"), desc: t("why2_desc") },
    { Icon: Globe, title: t("why3_title"), desc: t("why3_desc") },
    { Icon: Leaf, title: t("why4_title"), desc: t("why4_desc") },
  ];

  const clusterComponents = [
    { Icon: Sun, title: t("cluster1_title"), desc: t("cluster1_desc") },
    { Icon: Wind, title: t("cluster2_title"), desc: t("cluster2_desc") },
    { Icon: FlaskConical, title: t("cluster3_title"), desc: t("cluster3_desc") },
  ];

  const benefitChips = [
    t("chip1"), t("chip2"), t("chip3"), t("chip4"),
    t("chip5"), t("chip6"), t("chip7"), t("chip8"),
  ];

  const benefits = [
    { Icon: TrendingDown, title: t("benefit1_title"), desc: t("benefit1_desc") },
    { Icon: ShieldCheck, title: t("benefit2_title"), desc: t("benefit2_desc") },
    { Icon: Zap, title: t("benefit3_title"), desc: t("benefit3_desc") },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("meta_title"),
    description: t("meta_desc"),
    url: `https://robotic4u.com/${locale}/energy`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("breadcrumb_home"), item: `https://robotic4u.com/${locale}` },
        { "@type": "ListItem", position: 2, name: t("breadcrumb_page"), item: `https://robotic4u.com/${locale}/energy` },
      ],
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative z-20 pt-16 pb-12 px-6 overflow-hidden min-h-[72vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--primary),0.07)] to-transparent z-0" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <Breadcrumbs
            crumbs={[
              { label: t("breadcrumb_home"), href: base },
              { label: t("breadcrumb_page") },
            ]}
          />

          <div
            data-animate
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
              border border-[rgba(var(--primary),0.2)] bg-[rgba(var(--primary),0.06)]
              text-xs font-semibold tracking-wide uppercase text-[rgb(var(--primary))]"
          >
            {t("hero_badge")}
          </div>

          <h1
            data-animate
            data-animate-delay="100"
            className="text-[clamp(2rem,4.5vw,3.75rem)] font-bold tracking-[-0.04em] leading-[1.06]
              mb-4 max-w-4xl font-display"
            style={{ color: "rgb(var(--foreground))" }}
          >
            {t("hero_h1")}
          </h1>

          <h2
            data-animate
            data-animate-delay="200"
            className="text-[clamp(1rem,2vw,1.35rem)] font-semibold text-gradient mb-6"
          >
            {t("hero_h2")}
          </h2>

          <p
            data-animate
            data-animate-delay="300"
            className="text-sm md:text-base text-[rgb(var(--muted-foreground))]
              max-w-2xl mb-8 leading-relaxed font-medium"
          >
            {t("hero_desc")}
          </p>

          <div
            data-animate
            data-animate-delay="400"
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link href={`${base}/contact`} className="btn-premium h-11 px-7">
              {t("hero_cta")} <ArrowRight size={16} />
            </Link>
            <Link href={`${base}/manufacturing`} className="btn-secondary h-11 px-7">
              {t("hero_cta2")}
            </Link>
          </div>

          <div
            data-animate
            data-animate-delay="500"
            className="mt-10 flex flex-wrap gap-3"
          >
            {[t("stat1"), t("stat2"), t("stat3"), t("stat4")].map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 text-xs font-semibold
                  text-[rgb(var(--muted-foreground))]"
              >
                <CheckCircle2 size={13} className="text-[rgb(var(--primary))]" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY OWN ENERGY ───────────────────── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge={t("why_badge")}
            title={t("why_title")}
            subtitle={t("why_subtitle")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyCards.map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                data-animate
                data-animate-delay={String(i * 100)}
                className="bento-card"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
                  flex items-center justify-center mb-5"
                >
                  <Icon size={22} className="text-[rgb(var(--primary))]" />
                </div>
                <h3
                  className="font-bold text-sm mb-2 font-display"
                  style={{ color: "var(--text-strong)" }}
                >
                  {title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLUSTER COMPONENTS ───────────────── */}
      <section className="py-24 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(var(--card),0.5)] border-y border-[rgba(var(--border))] z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge={t("cluster_badge")}
            title={t("cluster_title")}
            subtitle={t("cluster_subtitle")}
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {clusterComponents.map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                data-animate
                data-animate-delay={String(i * 100)}
                className="glass-card p-8"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
                  flex items-center justify-center mb-6"
                >
                  <Icon size={26} className="text-[rgb(var(--primary))]" />
                </div>
                <h3
                  className="font-bold text-base mb-3 font-display"
                  style={{ color: "var(--text-strong)" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs text-[rgb(var(--primary))] font-bold uppercase tracking-widest mb-3">
                {t("benefits_badge")}
              </p>
              <h2
                className="text-[clamp(1.6rem,3vw,2.5rem)] font-bold tracking-tight mb-5 font-display"
                style={{ color: "rgb(var(--foreground))" }}
              >
                {t("benefits_title")}
              </h2>
              <div className="space-y-4">
                {benefits.map(({ Icon, title, desc }, i) => (
                  <div
                    key={i}
                    data-animate
                    data-animate-delay={String(i * 100)}
                    className="nl-card p-5 flex gap-4"
                  >
                    <div
                      className="w-10 h-10 rounded-xl bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.15)]
                      flex items-center justify-center shrink-0"
                    >
                      <Icon size={18} className="text-[rgb(var(--primary))]" />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-sm mb-1 font-display"
                        style={{ color: "var(--text-strong)" }}
                      >
                        {title}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-animate className="bento-card p-8 space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[rgb(var(--primary))]">
                {t("footprint_badge")}
              </p>
              <ChipRow chips={benefitChips} />
              <div className="border-t border-[rgba(var(--border))] pt-6">
                <p
                  className="text-xs leading-relaxed font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t("footprint_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING SYNERGY ────────────── */}
      <section className="py-20 px-6 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--primary),0.05)] to-transparent z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            data-animate
            className="bento-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
              flex items-center justify-center shrink-0">
              <Factory size={30} className="text-[rgb(var(--primary))]" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-[rgb(var(--primary))] mb-2">
                {t("synergy_badge")}
              </p>
              <h3
                className="text-xl md:text-2xl font-bold mb-3 font-display"
                style={{ color: "rgb(var(--foreground))" }}
              >
                {t("synergy_title")}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {t("synergy_desc")}
              </p>
            </div>
            <Link
              href={`${base}/manufacturing`}
              className="btn-secondary h-11 px-7 shrink-0"
            >
              {t("synergy_cta")} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <CTASection
        title={t("cta_title")}
        subtitle={t("cta_subtitle")}
        description={t("cta_desc")}
        cta={t("cta_primary")}
        ctaHref={`${base}/contact`}
        secondaryCta={t("cta_secondary")}
        secondaryCtaHref={`${base}/manufacturing`}
      />
    </>
  );
}
