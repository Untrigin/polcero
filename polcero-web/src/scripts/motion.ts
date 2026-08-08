// Lightweight, dependency-free motion: scroll reveal + gentle photo parallax.
// Respects prefers-reduced-motion. Bundled & deferred by Astro - keeps JS budget low.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Reveal ──────────────────────────────────────────────────────────────
function initReveal() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!els.length) return;

  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          window.setTimeout(() => el.classList.add('is-revealed'), delay);
          io.unobserve(el);
        }
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.15 }
  );
  els.forEach((el) => io.observe(el));
}

// ── Parallax ────────────────────────────────────────────────────────────
function initParallax() {
  if (reduce) return;
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (!els.length) return;

  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    for (const el of els) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) continue;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh; // -0.5..0.5
      const shift = Math.max(-1, Math.min(1, progress)) * -8; // yPercent 8
      el.style.transform = `translate3d(0, ${shift}%, 0)`;
    }
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

// ── Hero background (animated WebP) ─────────────────────────────────────
// Decorative only (H1 text carries the meaning), so it never affects SEO.
// The <img> ships with NO src; the src is set here only on desktop, so mobile
// downloads zero bytes (it shows the static hero image instead). Under
// reduced-motion we load the still poster rather than the animation.
function initHeroBg() {
  const img = document.querySelector<HTMLImageElement>('img[data-hero-bg]');
  if (!img) return;

  const desktop = window.matchMedia('(min-width: 768px)').matches;
  if (!desktop) return; // mobile → static hero image only

  img.addEventListener('load', () => img.classList.add('is-playing'), { once: true });
  img.src = reduce ? img.dataset.poster! : img.dataset.src!;
}

function boot() {
  initReveal();
  initParallax();
  initHeroBg();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
