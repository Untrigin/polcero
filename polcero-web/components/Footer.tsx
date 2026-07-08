import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";

export async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const locale = await getLocale();
  const base = `/${locale}`;

  const branches = [
    { href: `${base}/robots-icb`, label: "ICB Robots" },
    { href: `${base}/ai-systems`, label: "AI Systems" },
    { href: `${base}/robots`, label: "Robots" },
    { href: `${base}/farma-ai`, label: "Farma AI" },
    { href: `${base}/commander`, label: "Commander" },
    { href: `${base}/photonic-processors`, label: "Photonic Processors" },
    { href: `${base}/energy`, label: "Energy" },
    { href: `${base}/manufacturing`, label: "Manufacturing" },
  ];

  const solutions = [
    { href: `${base}/solutions/agriculture`, label: "Agriculture" },
    { href: `${base}/solutions/construction`, label: "Construction" },
    { href: `${base}/solutions/warehouse`, label: "Warehouse" },
    { href: `${base}/solutions/services`, label: "Services" },
    { href: `${base}/solutions/industry`, label: "Industry" },
  ];

  const company = [
    { href: `${base}/about`, label: nav("about") },
    { href: `${base}/investors`, label: nav("investors") },
    { href: `${base}/contact`, label: nav("contact") },
  ];

  return (
    <footer
      className="relative z-10 pt-20 pb-10 px-6"
      style={{ background: "var(--bg-sidebar)", borderTop: "1px solid var(--nl-border)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href={`/${locale}`} className="inline-flex mb-5">
              <Logo className="h-8" />
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "var(--text-muted)" }}>
              {t("tagline")}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:biuro@polcero.com"
                className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
                style={{ color: "var(--text-muted)" }}
              >
                <Mail size={14} /> biuro@polcero.com
              </a>
              <a
                href="tel:+48535777268"
                className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
                style={{ color: "var(--text-muted)" }}
              >
                <Phone size={14} /> +48 535 777 268
              </a>
            </div>
          </div>

          {/* Branches */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "var(--text-faint)" }}>
              {t("branches_title")}
            </h4>
            <ul className="space-y-3">
              {branches.map((b) => (
                <li key={b.href}>
                  <Link
                    href={b.href}
                    className="text-sm transition-colors hover:text-[var(--accent)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {b.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "var(--text-faint)" }}>
              {t("solutions_title")}
            </h4>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors hover:text-[var(--accent)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "var(--text-faint)" }}>
              {t("company_title")}
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm transition-colors hover:text-[var(--accent)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "var(--text-faint)" }}>
              {t("contact_title")}
            </h4>
            <div className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
              <p className="font-semibold" style={{ color: "var(--text)" }}>POLCERO sp. z o.o.</p>
              <p className="text-xs" style={{ color: "var(--text-faint)" }}>
                KRS 0001178417<br />
                NIP 8971955510<br />
                REGON 542000919
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--nl-border)" }}
        >
          <p className="text-sm" style={{ color: "var(--text-faint)" }}>
            © {new Date().getFullYear()} {t("copyright")}
          </p>
          <p className="text-xs" style={{ color: "var(--text-faint)" }}>
            {t("legal")}
          </p>
        </div>
      </div>
    </footer>
  );
}
