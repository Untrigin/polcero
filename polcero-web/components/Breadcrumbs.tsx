import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://polcero.com${c.href}` } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={jsonld} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm mb-8">
        {crumbs.map((c, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={14} style={{ color: "var(--text-faint)" }} />}
            {c.href ? (
              <Link
                href={c.href}
                className="transition-colors hover:text-[var(--accent)]"
                style={{ color: "var(--text-muted)" }}
              >
                {c.label}
              </Link>
            ) : (
              <span style={{ color: "var(--text)" }}>{c.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
