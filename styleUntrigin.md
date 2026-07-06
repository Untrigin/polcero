# Untrigin Design System — Style Reference

A complete guide for building new pages that match the Untrigin website's look and feel.

---

## 1. Technology Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 + custom CSS classes in `globals.css` |
| Display font | **Space Grotesk** (`--font-space-grotesk`) — headings, `h1–h4`, `.font-display` |
| Body font | **Inter** (`--font-inter`) — all body copy |
| Icon library | `lucide-react` |
| Animation | `framer-motion` (hero) + CSS `[data-animate]` scroll-reveal |

---

## 2. Design Tokens (CSS Variables)

Defined in `frontend/src/app/globals.css`. Two themes: light (`:root`) and dark (`[data-theme='dark']`).

### Light mode (`:root`)
```css
/* Backgrounds */
--bg-app:        #f4f3f8;
--bg-panel:      rgba(255,255,255,0.75);
--bg-card:       rgba(255,255,255,0.90);
--bg-card-2:     rgba(255,255,255,0.60);
--bg-sidebar:    rgba(255,255,255,0.85);
--bg-chip:       rgba(20,20,40,0.05);
--bg-nav-active: #7c3aed;
--bg-icon:       rgba(20,20,40,0.05);
--bg-elevated:   rgba(255,255,255,0.98);

/* Text */
--text:          #1a1a24;
--text-strong:   #0d0d18;
--text-muted:    #6b6b78;
--text-faint:    #9a9aa6;

/* Borders */
--nl-border:     rgba(20,20,40,0.09);
--border-strong: rgba(20,20,40,0.16);

/* Accent (primary brand color) */
--accent:        #7c3aed;   /* Violet/Indigo */
--accent-2:      #6d28d9;
--accent-glow:   rgba(124,58,237,0.28);

/* Shadows */
--shadow-card:   0 2px 24px rgba(20,20,40,0.08);

/* Status */
--green:         #16a34a;
--red:           #dc2626;

/* Tailwind Compatibility */
--primary:       99 102 241;        /* Indigo 500 — rgb() usage */
--primary-glow:  168 85 247;        /* Purple 500 */
--primary-foreground: 255 255 255;
--muted-foreground: 113 113 122;    /* Zinc 500 */
--foreground:    9 9 11;
--card:          255 255 255;
--border:        228 228 231;
```

### Dark mode (`[data-theme='dark']`)
```css
--bg-app:        #0a0a0f;
--bg-panel:      rgba(20,20,28,0.60);
--bg-card:       rgba(28,28,38,0.55);
--bg-sidebar:    rgba(18,18,26,0.70);
--bg-chip:       rgba(255,255,255,0.05);
--bg-nav-active: #a78bfa;
--bg-elevated:   rgba(36,36,50,0.98);

--text:          #f4f4f7;
--text-strong:   #ffffff;
--text-muted:    #8b8b96;
--text-faint:    #5a5a66;

--nl-border:     rgba(255,255,255,0.07);
--border-strong: rgba(255,255,255,0.13);

--accent:        #a78bfa;   /* Lighter violet for dark bg */
--accent-2:      #c4b5fd;
--accent-glow:   rgba(167,139,250,0.30);

--shadow-card:   0 2px 32px rgba(0,0,0,0.45);
--green:         #4ade80;
--red:           #f87171;

--primary:       113 112 255;   /* Electric Indigo */
```

### App background gradient
Both themes use a large radial gradient on `body`:
```css
/* Light */
background: radial-gradient(1100px 500px at 80% -10%, rgba(167,139,250,0.18), transparent 60%),
            radial-gradient(800px 450px at -10% 110%, rgba(167,139,250,0.12), transparent 55%),
            #f4f3f8;

/* Dark */
background: radial-gradient(1100px 500px at 80% -10%, rgba(124,58,237,0.22), transparent 60%),
            radial-gradient(800px 450px at -10% 110%, rgba(124,58,237,0.16), transparent 55%),
            #0a0a0f;

background-attachment: fixed;
```

---

## 3. Typography

```css
/* Body */
font-family: var(--font-inter, 'Inter', -apple-system, sans-serif);
letter-spacing: -0.02em;
-webkit-font-smoothing: antialiased;

/* Headings */
font-family: var(--font-space-grotesk, 'Inter'), -apple-system, sans-serif;
```

### Scale patterns used on the site
| Element | Tailwind class | Notes |
|---|---|---|
| Hero H1 | `text-[clamp(2rem,5vw,4.25rem)]` | `font-bold tracking-[-0.04em] leading-[1.04]` |
| Hero H2 / sub | `text-[clamp(1rem,2vw,1.4rem)]` | `font-semibold text-gradient` |
| Section H2 | `text-[clamp(1.8rem,3.5vw,3rem)]` | `font-bold tracking-tight` |
| Card title | `text-sm font-bold` | — |
| Body / desc | `text-sm md:text-base` | `leading-relaxed font-medium` |
| Section badge | `text-xs font-bold uppercase tracking-widest` | accent color |
| Muted label | `text-[11px]` or `text-xs` | `text-[rgb(var(--muted-foreground))]` |
| Mono/code | `font-mono text-[11px]` | `JetBrains Mono` → `Fira Code` → `Cascadia Code` |

### Gradient text
```css
.text-gradient {
  background: linear-gradient(135deg, var(--accent), #c4b5fd);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```
Usage: `<span className="text-gradient">highlighted word</span>`

---

## 4. Component Classes (from `globals.css`)

### Glass / Frosted Cards
```css
/* General glass card — 22px radius */
.glass-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--nl-border);
  border-radius: 22px;
}

/* Header bar */
.glass-header {
  background: var(--bg-sidebar);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--nl-border);
}

/* App shell / sidebar panels */
.nl-shell {
  background: var(--bg-panel);
  backdrop-filter: blur(24px);
  border: 1px solid var(--nl-border);
  border-radius: 26px;
  box-shadow: var(--shadow-card);
  overflow: hidden;
}

/* Standard card */
.nl-card {
  background: var(--bg-card);
  backdrop-filter: blur(16px);
  border: 1px solid var(--nl-border);
  border-radius: 18px;
  box-shadow: var(--shadow-card);
}
```

### Bento Grid Cards
```css
.bento-card {
  background: var(--bg-card);
  backdrop-filter: blur(16px);
  border: 1px solid var(--nl-border);
  border-radius: 22px;
  padding: 2rem;
  position: relative;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-card);
}

.bento-card:hover {
  border-color: var(--border-strong);
  box-shadow: 0 8px 32px rgba(0,0,0,0.10); /* dark: 0.45 */
}
```
Mobile: padding reduces to `1.25rem`, radius to `16px` at `max-width: 640px`.

### Buttons
```css
/* Primary CTA */
.btn-premium {
  background: var(--accent);
  color: #fff;
  border-radius: 12px;
  height: 2.75rem;
  padding: 0 1.75rem;
  font-weight: 600;
  font-size: 0.875rem;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
  box-shadow: 0 4px 18px var(--accent-glow);
  transition: opacity 0.2s ease, box-shadow 0.2s ease;
}
.btn-premium:hover { opacity: 0.88; box-shadow: 0 6px 24px var(--accent-glow); }

/* Secondary / ghost */
.btn-secondary {
  background: var(--bg-chip);
  color: var(--text);
  border: 1px solid var(--nl-border);
  border-radius: 12px;
  height: 2.75rem;
  padding: 0 1.75rem;
  font-weight: 600;
  font-size: 0.875rem;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
  transition: border-color 0.2s ease, background 0.2s ease;
}
.btn-secondary:hover { background: var(--bg-icon); border-color: var(--border-strong); }
```

### Inputs & Forms
```css
.modern-input {
  background: var(--bg-chip);
  border: 1px solid var(--nl-border);
  color: var(--text);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  width: 100%;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.modern-input::placeholder { color: var(--text-faint); }
.modern-input:focus {
  border-color: var(--border-strong);
  box-shadow: 0 0 0 3px var(--accent-glow);
}
```
For `<select>`, add `.modern-input` — it includes a custom SVG dropdown arrow and `appearance: none`.

### Chips / Pills
```css
.nl-chip {
  background: var(--bg-chip);
  border: 1px solid var(--nl-border);
  border-radius: 11px;
  color: var(--text-muted);
  font-size: 12.5px;
  font-weight: 500;
  transition: border-color 0.2s ease, color 0.2s ease;
}
.nl-chip:hover { border-color: var(--border-strong); color: var(--text); }
```

### Icon Buttons
```css
.nl-icon-btn {
  display: flex; align-items: center; justify-content: center;
  width: 40px; height: 40px;
  border-radius: 12px;
  background: var(--bg-chip);
  border: 1px solid var(--nl-border);
  color: var(--text);
  transition: border-color 0.2s ease, color 0.2s ease;
}
.nl-icon-btn:hover { border-color: var(--border-strong); color: var(--text-strong); }
```

### Model Tab Buttons
```css
.model-tab-btn {
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;  /* pill */
  font-size: 0.8125rem;
  font-weight: 600;
  border: 1px solid rgba(var(--border));
  color: rgb(var(--muted-foreground));
  background: transparent;
  transition: all 0.2s ease;
  cursor: pointer;
}
.model-tab-btn.active {
  background: rgb(var(--primary));
  border-color: rgb(var(--primary));
  color: rgb(var(--primary-foreground));
  box-shadow: 0 0 16px rgba(var(--primary), 0.35);
}
```

### Code Preview
```css
.code-preview {
  background: rgba(var(--card), 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(var(--border));
  border-radius: 16px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.8125rem;
  line-height: 1.6;
}
```
Include the macOS-style traffic-light dots for the fake title bar:
```jsx
<div className="flex items-center gap-2 mb-4 pb-3 border-b border-[rgba(var(--border))]">
  <div className="w-3 h-3 rounded-full bg-red-500/70" />
  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
  <div className="w-3 h-3 rounded-full bg-green-500/70" />
  <span className="ml-2 text-[11px] text-[rgb(var(--muted-foreground))]">filename.ts</span>
</div>
```

### Ambient Glow
A full-bleed decorative element placed at the top of a page:
```css
.ambient-glow {
  position: absolute;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 60%);
  top: -200px; left: 50%; transform: translateX(-50%);
  z-index: -1; pointer-events: none;
}
```

---

## 5. Layout Patterns

### Page shell
```jsx
<main className="min-h-screen relative overflow-x-hidden">
  <div className="ambient-glow" />
  <Header />
  {/* sections */}
  <Footer />
</main>
```

### Section width / spacing
- Full-width sections: `py-24 px-6`
- Constrained content: `max-w-7xl mx-auto` or `max-w-4xl mx-auto`
- Section header block:
  ```jsx
  <div data-animate className="text-center mb-12">
    <p className="text-xs text-[rgb(var(--primary))] font-bold uppercase tracking-widest mb-3">
      BADGE TEXT
    </p>
    <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold tracking-tight mb-4">
      Plain text <span className="text-gradient">gradient word</span>
    </h2>
    <p className="text-[rgb(var(--muted-foreground))] max-w-xl mx-auto">
      Description copy.
    </p>
  </div>
  ```

### Bento grid
```jsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <div className="bento-card">…</div>
</div>
```

### Alternate section background (zebra strip)
```jsx
<section className="py-24 px-6 relative z-10 overflow-hidden">
  <div className="absolute inset-0 bg-[rgba(var(--card),0.5)] border-y border-[rgba(var(--border))] z-0" />
  <div className="max-w-7xl mx-auto relative z-10">
    {/* content */}
  </div>
</section>
```

### Gradient section tint
```jsx
<section className="py-24 px-6 relative z-10 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--primary),0.04)] to-transparent z-0" />
  {/* content */}
</section>
```

---

## 6. Scroll-Reveal Animations

Add `data-animate` (and optionally `data-animate-delay="100|200|300|400|500"`) to any element. A `useScrollReveal()` hook wires the `IntersectionObserver`:

```tsx
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-animate]')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible')
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}
```

The CSS keyframe is defined globally:
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}
[data-animate] { opacity: 0; }
[data-animate].is-visible {
  animation: fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
```

---

## 7. Hero Section Pattern

```jsx
<section className="relative z-20 pt-28 pb-8 w-full overflow-hidden min-h-[88vh] flex flex-col justify-start">
  {/* Optional: planet / decorative visuals behind content */}

  <div className="relative z-20 px-6 max-w-[1200px] mx-auto text-center mt-4 pt-12">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
      border border-[rgba(var(--primary),0.2)] bg-[rgba(var(--primary),0.05)]
      text-xs font-semibold tracking-wide uppercase">
      BADGE TEXT
    </div>

    {/* H1 */}
    <h1 className="text-[clamp(2rem,5vw,4.25rem)] font-bold tracking-[-0.04em]
      leading-[1.04] mb-2 text-[rgb(var(--foreground))] max-w-4xl mx-auto">
      Headline text
    </h1>

    {/* Gradient subtitle */}
    <h2 className="text-[clamp(1rem,2vw,1.4rem)] font-semibold text-gradient mb-6">
      Gradient tagline
    </h2>

    {/* Body */}
    <p className="text-sm md:text-base text-[rgb(var(--muted-foreground))]
      max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
      Description paragraph.
    </p>

    {/* CTA buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="/dashboard" className="btn-premium w-full sm:w-auto h-11 px-7">
        Primary CTA <ArrowRight size={16} />
      </a>
      <a href="#section" className="btn-secondary w-full sm:w-auto h-11 px-7">
        Secondary CTA
      </a>
    </div>

    {/* Stats strip */}
    <div className="mt-10 flex flex-wrap items-center justify-center gap-6
      text-sm font-semibold text-[rgb(var(--muted-foreground))]">
      <span className="flex items-center gap-1.5">
        <span className="text-[rgb(var(--foreground))] font-black text-lg">15+</span>
        AI Models
      </span>
      <span className="flex items-center gap-1.5">
        <CheckCircle2 size={15} className="text-[rgb(var(--primary))]" />
        Pay-as-you-go
      </span>
    </div>
  </div>
</section>
```

---

## 8. Badge / Tag Patterns

```jsx
{/* Section eyebrow badge */}
<p className="text-xs text-[rgb(var(--primary))] font-bold uppercase tracking-widest mb-3">
  SECTION LABEL
</p>

{/* Pill badge on cards */}
<span className="px-2 py-0.5 rounded-full
  bg-[rgba(var(--primary),0.12)] text-[rgb(var(--primary))]
  text-[10px] font-bold border border-[rgba(var(--primary),0.2)]">
  New
</span>

{/* Feature badge (icon + text) */}
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full
  bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
  text-[rgb(var(--primary))] text-xs font-bold uppercase tracking-wide">
  <Sparkles size={11} /> Coming Soon
</span>
```

---

## 9. Product / Feature Card Pattern (Mega-menu style)

```jsx
<a href="/product" className="group flex flex-col gap-4 p-5 rounded-2xl
  border border-[rgba(var(--border))] bg-[rgba(var(--foreground),0.02)]
  hover:bg-[rgba(var(--primary),0.04)] hover:border-[rgba(var(--primary),0.25)]
  transition-all">
  {/* Icon + badge row */}
  <div className="flex items-start justify-between">
    <div className="w-10 h-10 rounded-xl
      bg-[rgba(var(--foreground),0.06)] border border-[rgba(var(--border))]
      flex items-center justify-center
      group-hover:border-[rgba(var(--primary),0.2)] transition-all">
      <Icon size={20} className="text-indigo-400" />
    </div>
    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5
      rounded-full bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.2)]
      text-[rgb(var(--primary))]">LIVE</span>
  </div>
  {/* Text */}
  <div>
    <p className="font-bold text-sm mb-0.5 group-hover:text-[rgb(var(--primary))] transition-colors">
      Product Name
    </p>
    <p className="text-[10px] font-semibold text-[rgb(var(--muted-foreground))] uppercase tracking-wide mb-2">
      Tagline
    </p>
    <p className="text-[11px] text-[rgb(var(--muted-foreground))] leading-relaxed">
      Description copy.
    </p>
  </div>
  {/* Arrow CTA */}
  <span className="inline-flex items-center gap-1 text-xs font-bold text-[rgb(var(--primary))] mt-auto">
    Get started <ArrowRight size={11} />
  </span>
</a>
```

---

## 10. Form / Order Form Pattern

Wrap inputs in a `glass-card` or `bento-card`. Use `modern-input` for all fields.

```jsx
<div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
  <h2 className="text-2xl font-bold mb-2">Order / Contact Form</h2>
  <p className="text-sm text-[rgb(var(--muted-foreground))] mb-8">Supporting copy.</p>

  <form className="space-y-5">
    {/* Single field */}
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wide mb-2"
        style={{ color: 'var(--text-muted)' }}>
        Label
      </label>
      <input
        type="text"
        className="modern-input"
        placeholder="Placeholder text"
      />
    </div>

    {/* Select */}
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wide mb-2"
        style={{ color: 'var(--text-muted)' }}>
        Service
      </label>
      <select className="modern-input">
        <option>Option A</option>
        <option>Option B</option>
      </select>
    </div>

    {/* Textarea */}
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wide mb-2"
        style={{ color: 'var(--text-muted)' }}>
        Message
      </label>
      <textarea
        rows={4}
        className="modern-input resize-none"
        placeholder="Your message…"
      />
    </div>

    {/* Submit */}
    <button type="submit" className="btn-premium w-full h-12 mt-2">
      Submit <ArrowRight size={16} />
    </button>
  </form>
</div>
```

---

## 11. Footer Pattern

```jsx
<footer className="relative z-10 pt-20 pb-10 px-6"
  style={{ background: 'var(--bg-sidebar)', borderTop: '1px solid var(--nl-border)' }}>
  <div className="max-w-7xl mx-auto">

    {/* 6-column grid: brand (col-span-2) + 4 link groups */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
      {/* Brand column */}
      <div className="col-span-2">
        <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'var(--text-muted)' }}>
          Tagline / short description.
        </p>
        {/* Social icons — use Lucide Twitter, Github, Linkedin */}
      </div>

      {/* Link group */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest mb-5"
          style={{ color: 'var(--text-faint)' }}>
          Column Title
        </h4>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-sm transition-colors"
              style={{ color: 'var(--text-muted)' }}>
              Link label
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ borderTop: '1px solid var(--nl-border)' }}>
      <p className="text-sm" style={{ color: 'var(--text-faint)' }}>
        © 2025 Brand Name. All rights reserved.
      </p>
    </div>

  </div>
</footer>
```

---

## 12. Header / Navigation Pattern

```jsx
<header className="glass-header fixed top-0 left-0 right-0 z-50">
  <div className="px-6 py-3.5">
    <div className="mx-auto max-w-7xl flex items-center justify-between">

      {/* Logo */}
      <a href="/" className="text-[rgb(var(--foreground))] hover:opacity-75 transition-opacity">
        <Logo className="h-7 w-auto" />
      </a>

      {/* Desktop nav links */}
      <nav className="hidden lg:flex items-center gap-0.5 ml-6">
        <a href="#" className="inline-flex items-center px-4 py-2 h-9 rounded-lg
          text-sm font-medium text-[rgb(var(--muted-foreground))]
          hover:text-[rgb(var(--foreground))] hover:bg-[rgba(var(--foreground),0.04)]
          transition-all">
          Link
        </a>
      </nav>

      {/* Right side CTAs */}
      <div className="hidden lg:flex items-center gap-2.5 shrink-0 ml-auto">
        <a href="/login" className="btn-secondary h-9 px-4 text-sm">Sign in</a>
        <a href="/register" className="btn-premium h-9 px-5 text-sm">Get started</a>
      </div>

    </div>
  </div>
</header>
```

Add `pt-28` to the first section below the header to clear the fixed bar.

---

## 13. Tailwind Utility Patterns

Frequently used combinations across the site:

```
/* Accent border + tinted background */
border border-[rgba(var(--primary),0.2)] bg-[rgba(var(--primary),0.05)]

/* Hover: accent border */
hover:border-[rgba(var(--primary),0.25)]

/* Hover: accent text */
hover:text-[rgb(var(--primary))]

/* Hover: subtle background lift */
hover:bg-[rgba(var(--primary),0.04)]

/* Muted text */
text-[rgb(var(--muted-foreground))]

/* Strong foreground text */
text-[rgb(var(--foreground))]

/* Card background */
bg-[rgba(var(--card),0.5)]

/* Divider line */
border-[rgba(var(--border))]
border-t border-[rgba(var(--border))]

/* Pill / badge */
rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider

/* Transition all */
transition-all duration-200
transition-colors
```

---

## 14. Color Palette Quick Reference

| Name | Light | Dark | Use |
|---|---|---|---|
| Accent / Primary | `#7c3aed` | `#a78bfa` | buttons, links, badges, glows |
| Accent 2 | `#6d28d9` | `#c4b5fd` | gradient endpoint |
| Background | `#f4f3f8` | `#0a0a0f` | page base |
| Card | `rgba(255,255,255,0.90)` | `rgba(28,28,38,0.55)` | cards, panels |
| Text | `#1a1a24` | `#f4f4f7` | body text |
| Text muted | `#6b6b78` | `#8b8b96` | descriptions, labels |
| Text faint | `#9a9aa6` | `#5a5a66` | footer, meta |
| Border | `rgba(20,20,40,0.09)` | `rgba(255,255,255,0.07)` | all card/element borders |
| Border strong | `rgba(20,20,40,0.16)` | `rgba(255,255,255,0.13)` | hover borders |
| Green | `#16a34a` | `#4ade80` | success states |
| Red | `#dc2626` | `#f87171` | error states |

---

## 15. EmailLabs Integration (Order Form Backend)

EmailLabs SMTP is already configured in the Untrigin backend. To send order/contact form submissions:

- **SMTP host**: `smtp.emaillabs.net.pl:587` (STARTTLS)
- **Config location**: `backend/.env` (see `emaillabs-smtp.md` in memory)
- **Backend endpoint to reuse**: POST `/contact` or equivalent route in `main.py`
- The form should POST JSON `{ name, email, subject, message }` to the backend endpoint
- The backend calls `send_email(to, subject, html_body)` using the existing `email_service`

Pattern for the frontend fetch:
```ts
await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, company, message }),
})
```

---

## 16. Responsive Breakpoints

| Breakpoint | Tailwind prefix | Notes |
|---|---|---|
| Mobile | (none) | Default; stack everything vertically |
| Small | `sm:` | 640px — grid 2-col, show more content |
| Large | `lg:` | 1024px — desktop nav, 3-col grids |
| XL | `xl:` | 1280px — 4-col model grids |
| Max content | `max-w-7xl` | 1280px cap; `max-w-4xl` for prose/forms |

---

## 17. Print Styles

The site includes print CSS (triggered by `window.print()`) that:
- Hides header, nav, buttons
- Forces white background + black text
- Strips backdrop filters and glassmorphism
- Uses A4 page size with 16mm margins

No action needed unless the new page also needs PDF export.
