import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Warehouse, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "warehouse_page" });
  return {
    title: t("meta_title"),
    description: t("meta_desc"),
    alternates: { canonical: `https://robotic4u.com/${locale}/solutions/warehouse` },
  };
}

/* Platform specs are factual - stays in English */
const platforms = [
  { name: "Boston Dynamics Stretch", note: "Mobile case-handling robot - trailer unloading, suction gripper, 22.7 kg/case." },
  { name: "Locus Robotics", note: "AMR fleet for pick-and-put: 36–1,361 kg payload range, LocusONE fleet orchestration." },
  { name: "Geek+ Shelf-to-Person", note: "600 kg payload AMR + robot arm picking station. 200-300% efficiency vs. manual." },
  { name: "MiR250 / MiR1350", note: "250–1,350 kg payload AMRs for facility transport. Fleet management up to 100 robots." },
  { name: "AutoStore", note: "Cube-based AS/RS - 400% storage density. 99.8% uptime." },
  { name: "POLCERO-W4 + AMR module", note: "POLCERO wheeled chassis configured for warehouse AMR with our AI brain." },
];

export default async function WarehousePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("warehouse_page");
  const base = `/${locale}`;

  const jobs = [
    { role: t("job1_role"), tasks: [t("job1_t1"), t("job1_t2"), t("job1_t3")] },
    { role: t("job2_role"), tasks: [t("job2_t1"), t("job2_t2"), t("job2_t3")] },
    { role: t("job3_role"), tasks: [t("job3_t1"), t("job3_t2"), t("job3_t3")] },
    { role: t("job4_role"), tasks: [t("job4_t1"), t("job4_t2"), t("job4_t3")] },
    { role: t("job5_role"), tasks: [t("job5_t1"), t("job5_t2"), t("job5_t3")] },
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
              <Warehouse size={12} /> {t("hero_badge")}
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
            <Link href={`${base}/contact`} className="btn-premium h-11 px-7 inline-flex">
              {t("hero_cta")} <ArrowRight size={15} />
            </Link>
          </div>

          <SectionHeader badge={t("scope_badge")} title={<>{t("scope_title")}</>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {jobs.map(({ role, tasks }, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="nl-card p-5">
                <h3 className="font-bold text-sm mb-3 font-display" style={{ color: "var(--text-strong)" }}>{role}</h3>
                <ul className="space-y-2">
                  {tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                      <CheckCircle2 size={13} className="text-[rgb(var(--primary))] mt-0.5 shrink-0" />{task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <SectionHeader badge={t("platforms_badge")} title={<>{t("platforms_title")}</>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {platforms.map(({ name, note }, i) => (
              <div key={i} data-animate data-animate-delay={String(i * 100)} className="nl-card p-5">
                <p className="font-mono font-bold text-xs text-[rgb(var(--primary))] mb-1">{name}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{note}</p>
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
