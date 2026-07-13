import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { robots, getRobotBySlug } from "@/content/robots";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChipRow } from "@/components/ChipRow";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return robots.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const robot = getRobotBySlug(slug);
  if (!robot) return { title: "Robot not found" };
  return {
    title: `${robot.name} - ${robot.manufacturer} | POLCERO Robot Catalog`,
    description: `${robot.name} by ${robot.manufacturer}. ${robot.applications.join(", ")}. ${robot.polceroNote}`,
    alternates: { canonical: `https://robotic4u.com/${locale}/robots/${slug}` },
  };
}

const STATUS_LABELS: Record<string, string> = {
  commercial: "Commercial",
  pilot: "Pilot / Limited",
  development: "In Development",
  research: "Research",
};

const CATEGORY_LABELS: Record<string, string> = {
  humanoid: "Humanoid",
  amr: "AMR",
  cobot: "Cobot",
  quadruped: "Quadruped",
  specialized: "Specialized",
  construction: "Construction",
};

export default async function RobotPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const robot = getRobotBySlug(slug);
  if (!robot) notFound();

  const base = `/${locale}`;

  const specEntries = Object.entries(robot.specs).filter(([, v]) => v);

  const related = robots
    .filter((r) => r.category === robot.category && r.slug !== robot.slug)
    .slice(0, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: robot.name,
    brand: { "@type": "Brand", name: robot.manufacturer },
    description: robot.polceroNote,
    category: CATEGORY_LABELS[robot.category],
    url: `https://robotic4u.com/${locale}/robots/${robot.slug}`,
  };

  return (
    <>
      <JsonLd data={productJsonLd} />

      <section className="py-12 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs crumbs={[
            { label: "POLCERO", href: `/${locale}` },
            { label: "Robots", href: `${base}/robots` },
            { label: robot.name },
          ]} />

          {/* Hero */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full
                bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)] text-[rgb(var(--primary))]">
                {CATEGORY_LABELS[robot.category]}
              </span>
              <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border
                ${robot.marketStatus === "commercial"
                  ? "bg-green-500/10 border-green-500/30 text-green-600"
                  : "bg-[rgba(var(--primary),0.1)] border-[rgba(var(--primary),0.2)] text-[rgb(var(--primary))]"
                }`}>
                {STATUS_LABELS[robot.marketStatus]}
              </span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight mb-1 font-display">
              {robot.name}
            </h1>
            <p className="text-lg" style={{ color: "var(--text-muted)" }}>by {robot.manufacturer}</p>
          </div>

          {/* Quotable summary */}
          <p className="text-base leading-relaxed mb-10 max-w-2xl" style={{ color: "var(--text-muted)" }}>
            {robot.name} by {robot.manufacturer} is a {CATEGORY_LABELS[robot.category].toLowerCase()} robot
            used for {robot.applications.slice(0, 3).join(", ")}.
            {" "}{robot.polceroNote}
          </p>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* Specs */}
            {specEntries.length > 0 && (
              <div className="nl-card p-6">
                <h2 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
                  Specifications
                </h2>
                <div className="space-y-3">
                  {specEntries.map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between gap-4 text-sm">
                      <span className="capitalize" style={{ color: "var(--text-muted)" }}>{key}</span>
                      <span className="font-semibold" style={{ color: "var(--text)" }}>{val}</span>
                    </div>
                  ))}
                  {robot.priceRange && (
                    <div className="flex items-center justify-between gap-4 text-sm border-t border-[var(--nl-border)] pt-3 mt-3">
                      <span style={{ color: "var(--text-muted)" }}>Price range</span>
                      <span className="font-semibold" style={{ color: "var(--text)" }}>{robot.priceRange}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Applications */}
            <div className="nl-card p-6">
              <h2 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
                Applications
              </h2>
              <ChipRow chips={robot.applications} />
            </div>
          </div>

          {/* POLCERO deployment block */}
          <div data-animate className="glass-card p-8 mb-12 border border-[rgba(var(--primary),0.25)]">
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-[rgb(var(--primary))]">
              How POLCERO deploys this robot
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              {robot.polceroNote}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={`${base}/contact`} className="btn-premium h-10 px-6">
                Ask about deployment <ArrowRight size={14} />
              </Link>
              <Link href={`${base}/robots`} className="btn-secondary h-10 px-6">
                Full robot catalog
              </Link>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div>
              <h2 className="font-bold text-sm uppercase tracking-widest mb-5" style={{ color: "var(--text-faint)" }}>
                Related robots
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link key={r.slug} href={`${base}/robots/${r.slug}`}
                    className="nl-card p-4 hover:border-[rgba(var(--primary),0.3)] transition-all group">
                    <p className="font-bold text-sm mb-0.5 group-hover:text-[rgb(var(--primary))] transition-colors font-display">
                      {r.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{r.manufacturer}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection title="Want to deploy this robot?"
        subtitle="POLCERO builds AI and integrates - to order."
        description="Submit an inquiry and we'll discuss the deployment scenario, AI brain configuration, and service model for your application."
        cta="Ask about deployment" ctaHref={`${base}/contact`} />
    </>
  );
}
