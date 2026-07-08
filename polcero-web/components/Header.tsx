"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRef, useState } from "react";
import {
  Menu, X, ArrowRight, ChevronDown,
  Bot, Brain, Cpu, Sprout, Shield, Zap, Sun, Factory,
  Wheat, HardHat, Warehouse, Cog,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Logo } from "./Logo";

// ── Static mega-menu data ─────────────────────────────────────────────────────

const BRANCHES = [
  { slug: "robots-icb",          Icon: Bot,     badge: "LIVE",      name: "ICB Robots",          tagline: "Industrial cobots & AMRs" },
  { slug: "ai-systems",          Icon: Brain,   badge: "TO ORDER",  name: "AI Systems",           tagline: "The AI brain for any robot" },
  { slug: "robots",              Icon: Cpu,     badge: "TO ORDER",  name: "Robots",               tagline: "Platform + specialized robots" },
  { slug: "farma-ai",            Icon: Sprout,  badge: "TO ORDER",  name: "Farma AI",             tagline: "Agriculture AI + field robots" },
  { slug: "commander",           Icon: Shield,  badge: "DUAL-USE",  name: "Commander",            tagline: "Dual-use AI command system" },
  { slug: "photonic-processors", Icon: Zap,     badge: "R&D",       name: "Photonic Processors",  tagline: "AI compute with light" },
  { slug: "energy",              Icon: Sun,     badge: "BACKBONE",  name: "Energy",               tagline: "Renewables + hydrogen" },
  { slug: "manufacturing",       Icon: Factory, badge: "BACKBONE",  name: "Manufacturing",        tagline: "Made in Poland / EU" },
] as const;

const SOLUTIONS = [
  { slug: "agriculture", Icon: Wheat,    name: "Agriculture",         tagline: "Field robots & AI-farmer" },
  { slug: "construction", Icon: HardHat, name: "Construction",        tagline: "BIM, layout, inspection" },
  { slug: "warehouse",   Icon: Warehouse,name: "Warehouse & Logistics",tagline: "Unloading, picking, AMR" },
  { slug: "services",    Icon: Shield,   name: "Uniformed Services",  tagline: "Patrol, surveillance, demining" },
  { slug: "industry",    Icon: Cog,      name: "Manufacturing Industry",tagline: "Lines, inspection, handling" },
] as const;

// ── Types ─────────────────────────────────────────────────────────────────────

type MenuId = "branches" | "solutions";

// ── Component ─────────────────────────────────────────────────────────────────

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<MenuId | null>(null);
  const [activeMenu, setActiveMenu] = useState<MenuId | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const base = `/${locale}`;

  const openMenu  = (id: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(id);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 180);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    // No h-16 on the outer element — it would clip the absolute mega-menu panel.
    <header className="glass-header fixed top-0 left-0 right-0 z-50">
      {/* ── Bar ── */}
      <div className="px-6 h-16 flex items-center">
        <div className="mx-auto max-w-7xl w-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center shrink-0" onClick={closeMobile}>
            <Logo className="h-7 sm:h-9" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 ml-4 h-full" aria-label="Main navigation">

            {/* About */}
            <Link href={`${base}/about`}
              className="inline-flex items-center px-4 py-2 h-9 rounded-lg text-sm font-medium
                text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-chip)] transition-all">
              {t("about")}
            </Link>

            {/* Branches trigger */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => openMenu("branches")}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`inline-flex items-center gap-1 px-4 py-2 h-9 rounded-lg text-sm font-medium transition-all
                  ${activeMenu === "branches"
                    ? "text-[var(--text)] bg-[var(--bg-chip)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-chip)]"
                  }`}
                aria-expanded={activeMenu === "branches"}
                aria-haspopup="true"
              >
                {t("branches")}
                <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === "branches" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Solutions trigger */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => openMenu("solutions")}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`inline-flex items-center gap-1 px-4 py-2 h-9 rounded-lg text-sm font-medium transition-all
                  ${activeMenu === "solutions"
                    ? "text-[var(--text)] bg-[var(--bg-chip)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-chip)]"
                  }`}
                aria-expanded={activeMenu === "solutions"}
                aria-haspopup="true"
              >
                {t("solutions")}
                <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu === "solutions" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Investors */}
            <Link href={`${base}/investors`}
              className="inline-flex items-center px-4 py-2 h-9 rounded-lg text-sm font-medium
                text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-chip)] transition-all">
              {t("investors")}
            </Link>

            {/* Contact */}
            <Link href={`${base}/contact`}
              className="inline-flex items-center px-4 py-2 h-9 rounded-lg text-sm font-medium
                text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-chip)] transition-all">
              {t("contact")}
            </Link>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0 ml-auto">
            <LocaleSwitcher />
            <ThemeToggle />
            <Link href={`${base}/contact`} className="btn-premium h-9 px-5 text-sm">
              {t("inquiry")} <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile right */}
          <div className="flex lg:hidden items-center gap-1 sm:gap-2 ml-auto">
            <LocaleSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nl-icon-btn"
              aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mega menu — Branches ─────────────────────────────────────────── */}
      {activeMenu === "branches" && (
        <div
          className="absolute top-16 left-0 right-0 border-t border-[var(--nl-border)]"
          style={{ background: "var(--bg-sidebar)", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
                Business Branches
              </p>
              <Link href={`${base}/branches`} onClick={() => setActiveMenu(null)}
                className="text-xs font-bold text-[rgb(var(--primary))] inline-flex items-center gap-1 hover:opacity-75 transition-opacity">
                View all <ArrowRight size={11} />
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {BRANCHES.map(({ slug, Icon, badge, name, tagline }) => (
                <Link
                  key={slug}
                  href={`${base}/${slug}`}
                  onClick={() => setActiveMenu(null)}
                  className="group flex items-start gap-3 p-3 rounded-xl
                    border border-[rgba(var(--border))] bg-[rgba(var(--foreground),0.02)]
                    hover:bg-[rgba(var(--primary),0.05)] hover:border-[rgba(var(--primary),0.25)]
                    transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.15)]
                    flex items-center justify-center shrink-0 group-hover:bg-[rgba(var(--primary),0.18)] transition-colors">
                    <Icon size={15} className="text-[rgb(var(--primary))]" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs font-bold truncate group-hover:text-[rgb(var(--primary))] transition-colors font-display"
                        style={{ color: "var(--text-strong)" }}>
                        {name}
                      </span>
                      <span className="text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full shrink-0
                        bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))]">
                        {badge}
                      </span>
                    </div>
                    <p className="text-[10px] leading-snug" style={{ color: "var(--text-muted)" }}>{tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Mega menu — Solutions ─────────────────────────────────────────── */}
      {activeMenu === "solutions" && (
        <div
          className="absolute top-16 left-0 right-0 border-t border-[var(--nl-border)]"
          style={{ background: "var(--bg-sidebar)", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
                Solutions by Market
              </p>
              <Link href={`${base}/solutions`} onClick={() => setActiveMenu(null)}
                className="text-xs font-bold text-[rgb(var(--primary))] inline-flex items-center gap-1 hover:opacity-75 transition-opacity">
                View all <ArrowRight size={11} />
              </Link>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {SOLUTIONS.map(({ slug, Icon, name, tagline }) => (
                <Link
                  key={slug}
                  href={`${base}/solutions/${slug}`}
                  onClick={() => setActiveMenu(null)}
                  className="group flex flex-col gap-2 p-3 rounded-xl
                    border border-[rgba(var(--border))] bg-[rgba(var(--foreground),0.02)]
                    hover:bg-[rgba(var(--primary),0.05)] hover:border-[rgba(var(--primary),0.25)]
                    transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.15)]
                    flex items-center justify-center group-hover:bg-[rgba(var(--primary),0.18)] transition-colors">
                    <Icon size={15} className="text-[rgb(var(--primary))]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-0.5 group-hover:text-[rgb(var(--primary))] transition-colors font-display"
                      style={{ color: "var(--text-strong)" }}>
                      {name}
                    </p>
                    <p className="text-[10px] leading-snug" style={{ color: "var(--text-muted)" }}>{tagline}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom strip */}
            <div className="mt-4 pt-4 border-t border-[var(--nl-border)] flex items-center gap-6">
              <Link href={`${base}/ai-systems`} onClick={() => setActiveMenu(null)}
                className="text-xs font-semibold hover:text-[rgb(var(--primary))] transition-colors"
                style={{ color: "var(--text-muted)" }}>
                → AI Systems for all markets
              </Link>
              <Link href={`${base}/robots`} onClick={() => setActiveMenu(null)}
                className="text-xs font-semibold hover:text-[rgb(var(--primary))] transition-colors"
                style={{ color: "var(--text-muted)" }}>
                → Robot catalog
              </Link>
              <Link href={`${base}/contact`} onClick={() => setActiveMenu(null)}
                className="text-xs font-bold text-[rgb(var(--primary))] inline-flex items-center gap-1 ml-auto">
                Submit an inquiry <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile menu ──────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--nl-border)]"
          style={{ background: "var(--bg-sidebar)" }}>
          <nav className="px-4 py-4 flex flex-col gap-1">

            <Link href={`${base}/about`} onClick={closeMobile}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-muted)]
                hover:bg-[var(--bg-chip)] hover:text-[var(--text)] transition-colors">
              {t("about")}
            </Link>

            {/* Branches accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "branches" ? null : "branches")}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium
                  text-[var(--text-muted)] hover:bg-[var(--bg-chip)] hover:text-[var(--text)] transition-colors"
              >
                {t("branches")}
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileExpanded === "branches" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "branches" && (
                <div className="ml-3 mt-1 flex flex-col gap-0.5">
                  {BRANCHES.map(({ slug, Icon, name }) => (
                    <Link key={slug} href={`${base}/${slug}`} onClick={closeMobile}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm
                        text-[var(--text-muted)] hover:bg-[var(--bg-chip)] hover:text-[var(--text)] transition-colors">
                      <Icon size={14} className="text-[rgb(var(--primary))] shrink-0" />
                      {name}
                    </Link>
                  ))}
                  <Link href={`${base}/branches`} onClick={closeMobile}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[rgb(var(--primary))]">
                    All branches <ArrowRight size={11} />
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "solutions" ? null : "solutions")}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium
                  text-[var(--text-muted)] hover:bg-[var(--bg-chip)] hover:text-[var(--text)] transition-colors"
              >
                {t("solutions")}
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileExpanded === "solutions" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "solutions" && (
                <div className="ml-3 mt-1 flex flex-col gap-0.5">
                  {SOLUTIONS.map(({ slug, Icon, name }) => (
                    <Link key={slug} href={`${base}/solutions/${slug}`} onClick={closeMobile}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm
                        text-[var(--text-muted)] hover:bg-[var(--bg-chip)] hover:text-[var(--text)] transition-colors">
                      <Icon size={14} className="text-[rgb(var(--primary))] shrink-0" />
                      {name}
                    </Link>
                  ))}
                  <Link href={`${base}/solutions`} onClick={closeMobile}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[rgb(var(--primary))]">
                    All solutions <ArrowRight size={11} />
                  </Link>
                </div>
              )}
            </div>

            <Link href={`${base}/investors`} onClick={closeMobile}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-muted)]
                hover:bg-[var(--bg-chip)] hover:text-[var(--text)] transition-colors">
              {t("investors")}
            </Link>

            <Link href={`${base}/contact`} onClick={closeMobile}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-muted)]
                hover:bg-[var(--bg-chip)] hover:text-[var(--text)] transition-colors">
              {t("contact")}
            </Link>

            <Link href={`${base}/contact`} onClick={closeMobile}
              className="btn-premium mt-3 w-full justify-center">
              {t("inquiry")} <ArrowRight size={14} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
