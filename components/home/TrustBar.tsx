"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { TRUST_STATS, BRAND } from "@/lib/constants";

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ target, suffix, shouldAnimate }: { target: number; suffix: string; shouldAnimate: boolean }) {
  const [current, setCurrent] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!shouldAnimate || hasRun.current) return;
    hasRun.current = true;
    const controls = animate(0, target, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return controls.stop;
  }, [shouldAnimate, target]);

  return <span>{current}{suffix}</span>;
}

// ─── Floating Particle ────────────────────────────────────────────────────────

function Particle({ delay, x, y }: { delay: number; x: number; y: number }) {
  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: 3,
        height: 3,
        borderRadius: "50%",
        background: "rgba(212,167,106,0.6)",
        pointerEvents: "none",
      }}
      animate={{ y: [-10, 10, -10], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
      transition={{ duration: 3.5, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

const PARTICLES = [
  { x: 10, y: 30, delay: 0 }, { x: 20, y: 60, delay: 0.5 }, { x: 35, y: 20, delay: 1 },
  { x: 50, y: 70, delay: 0.3 }, { x: 65, y: 40, delay: 0.8 }, { x: 80, y: 25, delay: 1.5 },
  { x: 90, y: 65, delay: 0.2 }, { x: 15, y: 80, delay: 1.2 }, { x: 75, y: 80, delay: 0.7 },
];

// ─── Stat Card ────────────────────────────────────────────────────────────────

// Border classes for 2-col mobile / 4-col desktop grid
const BORDER_CLASSES = [
  "border-b border-r md:border-b-0",      // 0: right always + bottom on mobile only
  "border-b md:border-b-0 md:border-r",   // 1: bottom mobile, right desktop
  "border-r",                               // 2: right always
  "",                                        // 3: last — no border
];

function StatCard({ stat, index, inView }: {
  stat: { value: number; suffix: string; label: string };
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={BORDER_CLASSES[index]}
      style={{
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        textAlign: "center" as const,
        padding: "clamp(1.5rem, 3vw, 2rem) clamp(1rem, 2.5vw, 2.5rem)",
        position: "relative",
        cursor: "default",
        borderColor: "rgba(212,167,106,0.18)",
      }}
    >
      {/* Hover glow */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, rgba(212,167,106,0.11) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Number */}
      <motion.span
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ display: "block", lineHeight: 1 }}
      >
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          background: "linear-gradient(135deg, #D4A76A 0%, #C78D6B 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.03em",
          display: "inline-block",
        }}>
          <AnimatedCounter target={stat.value} suffix={stat.suffix} shouldAnimate={inView} />
        </span>
      </motion.span>

      {/* Animated underline on hover */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        style={{
          height: "1px", width: "36px",
          background: "linear-gradient(90deg, transparent, #D4A76A, transparent)",
          margin: "0.55rem auto 0.4rem",
          transformOrigin: "center",
        }}
        aria-hidden="true"
      />

      <span style={{
        fontFamily: "var(--font-accent)",
        fontSize: "clamp(0.68rem, 1.2vw, 0.72rem)", // Slightly larger minimum font for mobile legibility
        fontWeight: 600, // Slightly bolder for mobile
        color: "rgba(253,246,236,0.6)",
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
        lineHeight: 1.4,
      }}>
        {stat.label}
      </span>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="trust"
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #1a0c07 0%, #2C1810 50%, #1a0c07 100%)",
        padding: "clamp(3rem, 5vw, 4.5rem) 1.5rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Animated gold border — top */}
      <motion.div
        aria-hidden="true"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, transparent 0%, #D4A76A 25%, #C4704E 50%, #D4A76A 75%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Animated gold border — bottom */}
      <motion.div
        aria-hidden="true"
        animate={{ backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, transparent 0%, #C4704E 25%, #D4A76A 50%, #C4704E 75%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)", width: "900px", height: "500px",
        background: "radial-gradient(ellipse, rgba(212,167,106,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Stats grid: 2-col mobile → 4-col desktop ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-0">
          {TRUST_STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} inView={inView} />
          ))}
        </div>

        {/* ── Credential strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{
            marginTop: "2.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(212,167,106,0.14)",
            display: "flex",
            flexWrap: "wrap" as const,
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            paddingLeft: "1rem", // Added padding for mobile edge-to-edge wrap
            paddingRight: "1rem",
          }}
        >
          {/* IMS BHU Trained pill — stands out */}
          <motion.div
            whileHover={{ scale: 1.05, y: -1 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.45rem 1rem 0.45rem 0.55rem",
              background: "linear-gradient(135deg, rgba(212,167,106,0.18) 0%, rgba(196,112,78,0.12) 100%)",
              border: "1px solid rgba(212,167,106,0.4)",
              borderRadius: "100px",
              cursor: "default",
              boxShadow: "0 0 20px rgba(212,167,106,0.1)",
            }}
          >
            <span style={{
              width: "18px", height: "18px", borderRadius: "50%", // Smaller circle for mobile wrap
              background: "linear-gradient(135deg, #C4704E, #D4A76A)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.3L12 17l-6.2 4.2 2.4-7.3L2 9.4h7.6L12 2z" fill="white" />
              </svg>
            </span>
            <span style={{
              fontFamily: "var(--font-accent)", fontSize: "0.68rem", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#D4A76A",
            }}>
              IMS BHU Trained
            </span>
          </motion.div>

          {/* Subtle dot separator - Hidden on smallest mobile if it pushes badges apart */}
          <span className="hidden sm:inline-block" aria-hidden="true" style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(212,167,106,0.3)", flexShrink: 0 }} />

          {/* Member label */}
          <span style={{
            fontFamily: "var(--font-accent)", fontSize: "0.62rem", fontWeight: 500,
            letterSpacing: "0.1em", textTransform: "uppercase" as const,
            color: "rgba(253,246,236,0.38)",
          }}>
            Member
          </span>

          {/* Membership badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {BRAND.doctor.memberships.map((badge) => (
              <motion.span
                key={badge}
                whileHover={{ scale: 1.07, borderColor: "rgba(212,167,106,0.6)", background: "rgba(212,167,106,0.12)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "0.25rem 0.7rem",
                  border: "1px solid rgba(212,167,106,0.28)",
                  borderRadius: "100px",
                  fontFamily: "var(--font-accent)", fontSize: "0.65rem",
                  fontWeight: 600, letterSpacing: "0.1em",
                  color: "rgba(212,167,106,0.85)", background: "rgba(212,167,106,0.05)",
                  cursor: "default",
                }}
              >
                {badge}
              </motion.span>
            ))}
          </div>

          <span className="hidden sm:inline-block" aria-hidden="true" style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(212,167,106,0.3)", flexShrink: 0 }} />
          <span style={{
            fontFamily: "var(--font-accent)", fontSize: "0.62rem", fontWeight: 400,
            letterSpacing: "0.06em", color: "rgba(253,246,236,0.35)",
          }}>
            IMS BHU Trained
          </span>
        </motion.div>

      </div>
    </section>
  );
}
