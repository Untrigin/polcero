import Image from "next/image";

// Native mark is 438x99 (~4.42:1). Height is controlled by the className
// passed in; width is derived from that ratio so both theme variants line
// up exactly. Visibility is toggled by the `[data-theme]` attribute on
// <html> via the .logo-light/.logo-dark rules in globals.css, rather than
// JS state - so there's no hydration mismatch: both server and first
// client paint agree (light shown, dark hidden) until ThemeToggle's effect
// flips the attribute.
export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <>
      <Image
        src="/polcero.svg"
        alt="POLCERO"
        width={367}
        height={70}
        priority
        className={`logo-light ${className} w-auto object-contain`}
      />
      <Image
        src="/polcero_white.svg"
        alt="POLCERO"
        width={367}
        height={70}
        priority
        className={`logo-dark ${className} w-auto object-contain`}
      />
    </>
  );
}
