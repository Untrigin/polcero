"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion, AnimatePresence,
  useScroll, useTransform, useMotionValueEvent,
} from "framer-motion";
import { ChevronDown } from "lucide-react";

// ── Palette ───────────────────────────────────────────────────────────────────
// Hardcoded so text is always readable on dark overlays in any site theme.
const WHITE     = "#ffffff";
const WHITE_DIM = "rgba(255,255,255,0.68)";
const ACCENT    = "rgba(167,139,250,1)";

// ── TextPair ──────────────────────────────────────────────────────────────────
// Module-level - stable component type across parent re-renders.
// Uses initial/animate/exit (not a MotionValue) so there is no init-race:
// opacity starts at 0 in HTML, Framer Motion fades it to 1 after mount.
interface TextPairProps { label: string; title: string; desc: string; }

function TextPair({ label, title, desc }: TextPairProps) {
  return (
    <>
      {/* Upper-right: model label + chassis title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-[17%] right-6 lg:right-16 max-w-xs text-right z-20 pointer-events-none"
      >
        <p className="text-[10px] font-black uppercase tracking-widest mb-1.5"
          style={{ color: ACCENT }}>{label}</p>
        <p className="font-display font-bold text-2xl lg:text-3xl leading-tight"
          style={{ color: WHITE }}>{title}</p>
      </motion.div>

      {/* Lower-left: chassis description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-[17%] left-6 lg:left-16 max-w-[300px] z-20 pointer-events-none"
      >
        <p className="text-sm leading-relaxed" style={{ color: WHITE_DIM }}>{desc}</p>
      </motion.div>
    </>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface Props {
  label1: string; title1: string; desc1: string;
  label2: string; title2: string; desc2: string;
  label3: string; title3: string; desc3: string;
  label4: string; title4: string; desc4: string;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function RobotScrollSection({
  label1, title1, desc1,
  label2, title2, desc2,
  label3, title3, desc3,
  label4, title4, desc4,
}: Props) {
  const outerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  // ── Active text stage ─────────────────────────────────────────────────────
  // State updates ONLY at stage-boundary crossings - no per-frame re-renders.
  // Stage 0 means no text is shown (before/between/after active windows).
  const [stage, setStage] = useState<0|1|2|3|4>(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Stage 4 has no upper bound - once WL4+Arm is on screen it stays.
    const next: 0|1|2|3|4 =
      v >= 0.86                ? 4 :
      v >= 0.65 && v <= 0.82  ? 3 :
      v >= 0.43 && v <= 0.63  ? 2 :
      v >= 0.22 && v <= 0.40  ? 1 : 0;
    setStage(s => s !== next ? next : s);
  });

  // ── Cluster: zoom from hero right-column position → screen centre ─────────
  const clusterX     = useTransform(scrollYProgress, [0, 0.22], ["25vw", "0vw"], { clamp: true });
  const clusterScale = useTransform(scrollYProgress, [0, 0.22], [0.65,   1.30],  { clamp: true });

  // ── Q4 legs (3.png): static in cluster, exits LEFT ───────────────────────
  const q4X = useTransform(scrollYProgress, [0.28, 0.40], ["0vw", "-130vw"],     { clamp: true });

  // ── T6 tracks (4.png): RIGHT → centre → LEFT ─────────────────────────────
  const t6X = useTransform(
    scrollYProgress,
    [0.36, 0.46, 0.53, 0.63],
    ["130vw", "0vw", "0vw", "-130vw"],
    { clamp: true }
  );

  // ── Arm - Stage 2 (5.png alongside T6): same motion path as T6 ───────────
  const arm2X = useTransform(
    scrollYProgress,
    [0.36, 0.46, 0.53, 0.63],
    ["130vw", "0vw", "0vw", "-130vw"],
    { clamp: true }
  );

  // ── W4 wheels (2.png): RIGHT → centre → LEFT ─────────────────────────────
  const w4X = useTransform(
    scrollYProgress,
    [0.59, 0.69, 0.74, 0.82],
    ["130vw", "0vw", "0vw", "-130vw"],
    { clamp: true }
  );

  // ── WL4 wheel-legs (6.png): enters RIGHT, stays ──────────────────────────
  const wl4X = useTransform(scrollYProgress, [0.78, 0.88], ["130vw", "0vw"],     { clamp: true });

  // ── Arm - Stage 4 (5.png alongside WL4): enters RIGHT just after WL4 ─────
  const armX  = useTransform(scrollYProgress, [0.82, 0.90], ["130vw", "0vw"],    { clamp: true });

  // ── Background colour ─────────────────────────────────────────────────────
  // Transparent at 0 so the robot is visible over the hero with no overlay.
  // Fades to dark starting at 0.08 - well after the zoom begins - so the
  // hero-to-animation transition feels natural rather than abrupt.
  const bgColor = useTransform(
    scrollYProgress,
    [0,    0.08,               0.40,              0.41,              0.63,              0.64,              0.82            ],
    [
      "rgba(0,0,0,0)",
      "rgba(8,8,18,0.88)",    // neutral dark - Q4
      "rgba(8,8,18,0.88)",
      "rgba(4,9,28,0.93)",    // deep navy    - T6 + Arm
      "rgba(4,9,28,0.93)",
      "rgba(3,20,14,0.93)",   // deep teal    - W4
      "rgba(18,4,38,0.93)",   // deep purple  - WL4 + Arm (stays)
    ],
    { clamp: true }
  );

  const hintOp   = useTransform(scrollYProgress, [0, 0.05], [1, 0], { clamp: true });
  const imgShadow = { filter: "drop-shadow(0 18px 52px rgba(0,0,0,0.34))" } as const;

  return (
    <div ref={outerRef} style={{ height: "500vh" }} className="relative">

      {/* ══════════════════════ FIXED PANEL ═══════════════════════════════════
          Always visible (opacity 1) - robot cluster is already in the hero's
          right column on page load (x=25vw, scale=0.65, transparent bg).
          Text driven by AnimatePresence + React stage state: exactly ONE
          TextPair in the DOM at any time - no overlap flash.                  */}
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 30,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* Background colour overlay */}
        <motion.div className="absolute inset-0" style={{ backgroundColor: bgColor }} />

        {/* Ambient glow */}
        <div aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full" style={{
            width: 720, height: 720,
            background: "radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 65%)",
          }} />
        </div>

        {/* ── ROBOT CLUSTER ─────────────────────────────────────────────────
            Zooms from hero right-column (x=25vw, scale=0.65) to centre
            (x=0, scale=1.30) by progress 0.22. Chassis images then slide
            in/out horizontally as stages advance.                             */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative"
            style={{ x: clusterX, scale: clusterScale, width: 480, height: 540 }}
          >
            {/* Q4 quadruped legs - exits LEFT at Stage 1 end */}
            <motion.div className="absolute inset-0" style={{ x: q4X }}>
              <Image src="/robot/3.png" alt="Q4 quadruped chassis"
                fill sizes="480px" className="object-contain" style={imgShadow} />
            </motion.div>

            {/* T6 tracked chassis - RIGHT → centre → LEFT */}
            <motion.div className="absolute inset-0" style={{ x: t6X }}>
              <Image src="/robot/4.png" alt="T6 tracked chassis"
                fill sizes="480px" className="object-contain" style={imgShadow} />
            </motion.div>

            {/* Arm module - Stage 2: enters and exits with T6 */}
            <motion.div className="absolute inset-0" style={{ x: arm2X }}>
              <Image src="/robot/5.png" alt="Robot arm module"
                fill sizes="480px" className="object-contain" style={imgShadow} />
            </motion.div>

            {/* W4 wheeled chassis - RIGHT → centre → LEFT */}
            <motion.div className="absolute inset-0" style={{ x: w4X }}>
              <Image src="/robot/2.png" alt="W4 wheeled chassis"
                fill sizes="480px" className="object-contain" style={imgShadow} />
            </motion.div>

            {/* WL4 wheel-leg chassis - enters RIGHT, stays */}
            <motion.div className="absolute inset-0" style={{ x: wl4X }}>
              <Image src="/robot/6.png" alt="WL4 wheel-leg chassis"
                fill sizes="480px" className="object-contain" style={imgShadow} />
            </motion.div>

            {/* Arm module - Stage 4: enters RIGHT just after WL4, stays */}
            <motion.div className="absolute inset-0" style={{ x: armX }}>
              <Image src="/robot/5.png" alt="Robot arm module"
                fill sizes="480px" className="object-contain" style={imgShadow} />
            </motion.div>

            {/* Body (1.png) - always centred, always on top */}
            <div className="absolute inset-0 z-20">
              <Image src="/robot/1.png" alt="POLCERO AI robot body"
                fill sizes="480px" className="object-contain"
                style={{ filter: "drop-shadow(0 10px 32px rgba(0,0,0,0.22))" }} />
            </div>
          </motion.div>
        </div>

        {/* ── TEXT PANELS ───────────────────────────────────────────────────
            AnimatePresence keeps exactly one TextPair mounted at a time.
            Entering pair fades in; exiting pair fades out simultaneously.
            Stage 0 = no text (before/between/after chassis windows).          */}
        <AnimatePresence>
          {stage === 1 && <TextPair key="s1" label={label1} title={title1} desc={desc1} />}
          {stage === 2 && <TextPair key="s2" label={label2} title={title2} desc={desc2} />}
          {stage === 3 && <TextPair key="s3" label={label3} title={title3} desc={desc3} />}
          {stage === 4 && <TextPair key="s4" label={label4} title={title4} desc={desc4} />}
        </AnimatePresence>

        {/* Scroll hint - fades out as soon as scrolling begins */}
        <motion.div style={{ opacity: hintOp }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none
            flex flex-col items-center gap-1.5">
          <span className="text-[9px] uppercase tracking-[0.18em] font-bold"
            style={{ color: "rgba(255,255,255,0.35)" }}>scroll</span>
          <ChevronDown size={18} className="animate-bounce" style={{ color: ACCENT }} />
        </motion.div>
      </motion.div>
    </div>
  );
}
