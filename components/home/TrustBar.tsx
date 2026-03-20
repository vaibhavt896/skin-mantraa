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
      ease: [0.16, 1, 0.3, 1],
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
      animate={{
        y: [-10, 10, -10],
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const PARTICLES = [
  { x: 10, y: 30, delay: 0 }, { x: 20, y: 60, delay: 0.5 }, { x: 35, y: 20, delay: 1 },
  { x: 50, y: 70, delay: 0.3 }, { x: 65, y: 40, delay: 0.8 }, { x: 80, y: 25, delay: 1.5 },
  { x: 90, y: 65, delay: 0.2 }, { x: 15, y: 80, delay: 1.2 }, { x: 75, y: 80, delay: 0.7 },
];

const STAT_OVERRIDES: Record<number, { display: string; sublabel?: string }> = {
  3: { display: "BHU IMS", sublabel: "Trained" },
};

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({ stat, index, inView, isLast }: { stat: { value: number; suffix: string; label: string }; index: number; inView: boolean; isLast: boolean }) {
  const override = STAT_OVERRIDES[index];
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        textAlign: "center" as const,
        padding: "1.25rem 2.5rem",
        borderRight: isLast ? "none" : "1px solid rgba(212,167,106,0.18)",
        flex: "1 1 160px",
        minWidth: "140px",
        position: "relative",
        cursor: "default",
      }}
    >
      {/* Hover glow bg */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(212,167,106,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          borderRadius: "12px",
        }}
      />

      {/* Number */}
      <motion.span
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ display: "block", lineHeight: 1 }}
      >
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
          fontWeight: 700,
          background: "linear-gradient(135deg, #D4A76A 0%, #C78D6B 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.03em",
          display: "inline-block",
        }}>
          {override ? (
            <>{override.display}</>
          ) : (
            <AnimatedCounter target={stat.value} suffix={stat.suffix} shouldAnimate={inView} />
          )}
        </span>
      </motion.span>

      {/* Sublabel for override */}
      {override?.sublabel && (
        <span style={{
          fontFamily: "var(--font-accent)",
          fontSize: "0.7rem",
          fontWeight: 600,
          color: "#D4A76A",
          letterSpacing: "0.1em",
          textTransform: "uppercase" as const,
          marginTop: "0.2rem",
        }}>{override.sublabel}</span>
      )}

      {/* Animated underline */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          height: "1px",
          width: "40px",
          background: "linear-gradient(90deg, transparent, #D4A76A, transparent)",
          margin: "0.5rem auto 0.35rem",
          transformOrigin: "center",
        }}
        aria-hidden="true"
      />

      {/* Label */}
      <span style={{
        fontFamily: "var(--font-accent)",
        fontSize: "0.72rem",
        fontWeight: 400,
        color: "rgba(253,246,236,0.65)",
        letterSpacing: "0.06em",
        textTransform: "uppercase" as const,
        marginTop: override?.sublabel ? "0.3rem" : "0.4rem",
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
        background: "linear-gradient(135deg, #1e0f09 0%, #2C1810 50%, #1e0f09 100%)",
        padding: "4rem 1.5rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Animated gradient border top */}
      <motion.div
        aria-hidden="true"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, #D4A76A 25%, #C4704E 50%, #D4A76A 75%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Animated gradient border bottom */}
      <motion.div
        aria-hidden="true"
        animate={{ backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, #C4704E 25%, #D4A76A 50%, #C4704E 75%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)", width: "800px", height: "400px",
        background: "radial-gradient(ellipse, rgba(212,167,106,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => <Particle key={i} {...p} delay={p.delay} />)}

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap" as const,
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
        }}>
          {/* Stats */}
          {TRUST_STATS.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              inView={inView}
              isLast={index === TRUST_STATS.length - 1}
            />
          ))}

          {/* Vertical divider */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={inView ? { opacity: 1, scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            aria-hidden="true"
            style={{
              width: "1px", height: "60px",
              background: "linear-gradient(to bottom, transparent, rgba(212,167,106,0.4), transparent)",
              margin: "0 0.75rem", flexShrink: 0,
            }}
            className="hidden md:block"
          />

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "flex", flexWrap: "wrap" as const,
              alignItems: "center", justifyContent: "center",
              gap: "0.5rem", padding: "1rem 1.25rem",
            }}
          >
            <span style={{
              fontFamily: "var(--font-accent)", fontSize: "0.68rem", fontWeight: 500,
              letterSpacing: "0.08em", textTransform: "uppercase" as const,
              color: "rgba(253,246,236,0.4)", marginRight: "0.2rem",
            }}>Member</span>
            {BRAND.doctor.memberships.map((badge) => (
              <motion.span
                key={badge}
                whileHover={{ scale: 1.08, borderColor: "#D4A76A", background: "rgba(212,167,106,0.15)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "0.3rem 0.85rem",
                  border: "1px solid rgba(212,167,106,0.4)",
                  borderRadius: "100px",
                  fontFamily: "var(--font-accent)", fontSize: "0.72rem",
                  fontWeight: 600, letterSpacing: "0.1em",
                  color: "#D4A76A", background: "rgba(212,167,106,0.07)",
                  cursor: "default",
                }}
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
