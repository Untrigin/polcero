"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const allEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    );

    // 1. Synchronously mark everything already in the viewport as visible
    //    BEFORE the CSS hiding rule is activated — no async flash possible.
    allEls.forEach((el) => {
      const { top, bottom } = el.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) {
        el.classList.add("is-visible");
      }
    });

    // 2. Activate the CSS rule that hides not-yet-visible elements.
    document.documentElement.setAttribute("data-animate-ready", "");

    // 3. Observe all elements so below-fold ones animate in on scroll.
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        }),
      { threshold: 0.05 }
    );
    allEls.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      // Remove the gate so the next page renders visible by default.
      document.documentElement.removeAttribute("data-animate-ready");
    };
  }, [pathname]); // Re-run on every client-side navigation.
}
