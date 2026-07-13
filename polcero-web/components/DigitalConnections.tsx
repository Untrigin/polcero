"use client";

/*
  viewBox 0 0 1000 400  -  SVG top:192px (middle-tile bottom).

  Line 2 starts at SVG y=40 → page y=192+(40/400×h) → 10% below the bottom edge of tile 2.
  Lines 1 & 3 start at SVG y=165.  At the narrowest responsive height (240 px):
    y-scale = 240/400 = 0.60  →  page y = 192 + 165×0.60 = 291 px
    Side-tile bottoms = 288 px  →  3 px gap, no tile overlap at any screen size.

  Height is responsive so lines shorten proportionally on narrower viewports:
    sm  (640 px+):  h-[240px]  → y-scale 0.60
    md  (768 px+):  h-[300px]  → y-scale 0.75
    lg (1024 px+):  h-[400px]  → y-scale 1.00

  All three lines share the same V → H → L → H → L → V structure (no chip rect).
  The image wrapper is placed above this SVG (z-20 vs z-10) so lines disappear
  beneath the opaque robot and show only through the transparent top of the photo.

  Non-intersection:
    Line 1 max x = 440  |  Line 2 x = 500–534  |  Line 3 min x = 560
    Gap L1↔L2 = 60 SVG units  |  Gap L2↔L3 = 26 SVG units
*/

export function DigitalConnections() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 400"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 w-full pointer-events-none hidden sm:block h-[240px] md:h-[300px] lg:h-[400px]"
      style={{ top: "192px", zIndex: 10, color: "#38bdf8", opacity: 0.45 }}
    >
      {/* ── LINE 1: left tile bottom → angles toward centre ─────────────── */}
      <path
        d="M 165 165 V 195 H 210 L 300 265 H 360 L 440 355 V 390"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />

      {/* ── LINE 2: starts 10% below tile-2 bottom edge (SVG y=40) ── */}
      <path
        d="M 500 40 V 90 H 514 L 528 195 H 534 L 530 335 V 390"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />

      {/* ── LINE 3: right tile bottom → mirror of line 1 ─────────────────── */}
      <path
        d="M 835 165 V 195 H 790 L 700 265 H 640 L 560 355 V 390"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />

      {/* ── NODES ─────────────────────────────────────────────────────────── */}

      {/* Line 2 - start node, 10% below tile-2 bottom */}
      <circle cx="500" cy="40"  r="4" fill="currentColor" />

      {/* Lines 1 & 3 - start nodes */}
      <circle cx="165" cy="165" r="5" fill="currentColor" />
      <circle cx="835" cy="165" r="5" fill="currentColor" />

      {/* Diagonal-end kink nodes */}
      <circle cx="300" cy="265" r="4" fill="currentColor" />
      <circle cx="528" cy="195" r="4" fill="currentColor" />
      <circle cx="700" cy="265" r="4" fill="currentColor" />
    </svg>
  );
}
