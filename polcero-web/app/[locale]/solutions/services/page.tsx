import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services_page" });
  return {
    title: t("meta_title"),
    description: t("meta_desc"),
    alternates: { canonical: `https://polcero.com/${locale}/solutions/services` },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("services_page");
  const base = `/${locale}`;

  const applications = [
    { title: t("app1_title"), items: [t("app1_i1"), t("app1_i2"), t("app1_i3")] },
    { title: t("app2_title"), items: [t("app2_i1"), t("app2_i2"), t("app2_i3")] },
    { title: t("app3_title"), items: [t("app3_i1"), t("app3_i2"), t("app3_i3")] },
    { title: t("app4_title"), items: [t("app4_i1"), t("app4_i2"), t("app4_i3")] },
  ];

  const chassis = [
    { name: t("chassis1_name"), note: t("chassis1_note") },
    { name: t("chassis2_name"), note: t("chassis2_note") },
  ];

  return (
    <>
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs crumbs={[
            { label: t("breadcrumb_home"), href: `/${locale}` },
            { label: t("breadcrumb_solutions"), href: `${base}/solutions` },
            { label: t("breadcrumb_page") },
          ]} />
          <div className="max-w-3xl mb-12">
            <span data-animate className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4
              bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
              text-[rgb(var(--primary))] text-xs font-bold uppercase tracking-wide">
              <Shield size={12} /> {t("hero_badge")}
            </span>
            <h1 data-animate data-animate-delay="100"
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-tight mb-4 font-display">
              {t("hero_h1")}
            </h1>
            <p data-animate data-animate-delay="200" className="text-lg font-semibold text-gradient mb-6">
              {t("hero_h2")}
            </p>
            <p data-animate data-animate-delay="300" className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              {t("hero_desc")}
            </p>
            <Link href={`${base}/commander`} className="btn-premium h-11 px-7 inline-flex mr-3">
              {t("hero_cta1")} <ArrowRight size={15} />
            </Link>
            <Link href={`${base}/contact`} className="btn-secondary h-11 px-7 inline-flex">
              {t("hero_cta2")}
            </Link>
          </div>

          {/* Human-in-loop banner */}
          <div data-animate className="nl-card p-5 mb-12 border-[rgba(var(--primary),0.3)] flex items-start gap-4 max-w-3xl">
            <Shield size={20} className="text-[rgb(var(--primary))] shrink-0 mt-0.5" />
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {t("hitl_notice")}
            </p>
          </div>

          <SectionHeader badge={t("apps_badge")} title={<>{t("apps_title")}</>} />
          <div className="grid sm:grid-cols-2 gap-5 mb-16">
            {applications.map(({ title, items }, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="nl-card p-5">
                <h3 className="font-bold text-sm mb-3 font-display" style={{ color: "var(--text-strong)" }}>{title}</h3>
                <ul className="space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                      <CheckCircle2 size={13} className="text-[rgb(var(--primary))] mt-0.5 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <SectionHeader badge={t("platforms_badge")} title={<>{t("platforms_title")}</>} />
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {chassis.map(({ name, note }, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="nl-card p-5">
                <p className="font-mono font-bold text-xs text-[rgb(var(--primary))] mb-1">{name}</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{note}</p>
              </div>
            ))}
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
