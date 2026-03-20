"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield, Clock, Sparkles } from "lucide-react";

// ─── Pulsing Scanner Animation ────────────────────────────────────────────────

function ScannerVisual() {
  return (
    <div style={{ position: "relative", width: "120px", height: "120px", margin: "0 auto 2rem" }}>
      {/* Outer pulsing rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1.5px solid rgba(196,112,78,0.5)",
          }}
        />
      ))}

      {/* Main circle */}
      <motion.div
        animate={{ boxShadow: ["0 0 20px rgba(196,112,78,0.2)", "0 0 50px rgba(196,112,78,0.5)", "0 0 20px rgba(196,112,78,0.2)"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", inset: "20px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        {/* Scan line */}
        <motion.div
          aria-hidden="true"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", left: "10%", right: "10%",
            height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
            borderRadius: "2px",
          }}
        />
        {/* Face outline SVG */}
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <circle cx="18" cy="18" r="14" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none" />
          <circle cx="13" cy="15" r="2" fill="rgba(255,255,255,0.9)" />
          <circle cx="23" cy="15" r="2" fill="rgba(255,255,255,0.9)" />
          <path d="M12 23 Q18 28 24 23" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      </motion.div>

      {/* Corner brackets */}
      {[
        { top: 0, left: 0, rotate: 0 },
        { top: 0, right: 0, rotate: 90 },
        { bottom: 0, left: 0, rotate: 270 },
        { bottom: 0, right: 0, rotate: 180 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          style={{
            position: "absolute", width: "16px", height: "16px",
            borderTop: pos.top !== undefined ? "2.5px solid #C4704E" : "none",
            borderLeft: pos.left !== undefined ? "2.5px solid #C4704E" : "none",
            borderBottom: pos.bottom !== undefined ? "2.5px solid #C4704E" : "none",
            borderRight: pos.right !== undefined ? "2.5px solid #C4704E" : "none",
            ...pos,
          }}
        />
      ))}
    </div>
  );
}

// ─── Step indicator ───────────────────────────────────────────────────────────

const STEPS = [
  { n: "01", label: "Answer quick questions" },
  { n: "02", label: "Get AI-powered insights" },
  { n: "03", label: "See personalised results" },
];

function Steps({ inView }: { inView: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "0", flexWrap: "wrap" as const, marginBottom: "2.25rem" }}>
      {STEPS.map((step, i) => (
        <div key={step.n} style={{ display: "flex", alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: "center" as const, padding: "0 1.25rem" }}
          >
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: "linear-gradient(135deg, #C4704E, #D4A76A)",
              color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-accent)", fontSize: "0.72rem", fontWeight: 700,
              margin: "0 auto 0.5rem",
              boxShadow: "0 4px 16px rgba(196,112,78,0.35)",
            }}>{step.n}</div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#5C4033", margin: 0, maxWidth: "90px" }}>
              {step.label}
            </p>
          </motion.div>
          {i < STEPS.length - 1 && (
            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.55 + i * 0.15, duration: 0.4 }}
              style={{
                width: "40px", height: "1px",
                background: "linear-gradient(90deg, #C78D6B, #D4A76A)",
                transformOrigin: "left",
              }}
              className="hidden sm:block"
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SkinAnalysisCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "6rem 1.5rem",
        background: "linear-gradient(180deg, #FDF6EC 0%, #F5E6D3 50%, #FDF6EC 100%)",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Animated background grid */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(199,141,107,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,141,107,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
      }} />

      {/* Glow orbs */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "5%", right: "-10%",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,112,78,0.1) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", bottom: "5%", left: "-8%",
          width: "350px", height: "350px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,167,106,0.12) 0%, transparent 70%)",
          filter: "blur(50px)", pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            padding: "3.5rem 2.5rem",
            borderRadius: "28px",
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(199,141,107,0.15)",
            boxShadow: "0 20px 80px rgba(61,43,31,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
            textAlign: "center" as const,
          }}
        >
          {/* Scanner visual */}
          <ScannerVisual />

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            style={{
              display: "inline-block",
              fontFamily: "var(--font-accent)", fontSize: "0.68rem",
              fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase" as const, color: "#C4704E",
              background: "rgba(196,112,78,0.09)",
              padding: "5px 14px", borderRadius: 999, marginBottom: "1.25rem",
              border: "1px solid rgba(196,112,78,0.18)",
            }}
          >
            New Feature
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
              fontWeight: 700, fontStyle: "italic",
              color: "#3D2B1F", lineHeight: 1.18, marginBottom: "1rem",
            }}
          >
            Check Your Skin Health in{" "}
            <span style={{
              background: "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>3 Minutes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            style={{
              fontFamily: "var(--font-body)", fontSize: "1rem",
              color: "#5C4033", lineHeight: 1.75,
              maxWidth: "560px", margin: "0 auto 2.25rem",
            }}
          >
            Our Smart Skin Analysis tool identifies early signs of acne, pigmentation,
            hair loss, and aging. Get personalised insights instantly and know when to
            see a specialist.
          </motion.p>

          {/* Steps */}
          <Steps inView={inView} />

          {/* Feature pills */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" as const }}>
            {[
              { icon: Shield, text: "Evidence-Based" },
              { icon: Clock, text: "Under 3 Minutes" },
              { icon: Sparkles, text: "100% Free & Private" },
            ].map((pill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.65 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                style={{
                  display: "flex", alignItems: "center", gap: "0.4rem",
                  fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#5C4033",
                  background: "rgba(212,167,106,0.12)", padding: "0.45rem 1rem",
                  borderRadius: 999, border: "1px solid rgba(199,141,107,0.2)",
                  cursor: "default",
                }}
              >
                <pill.icon size={13} style={{ color: "#C4704E" }} />
                {pill.text}
              </motion.span>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.75 }}
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ display: "inline-block" }}
            >
              <Link
                href="/skin-analysis"
                style={{
                  fontFamily: "var(--font-accent)", fontSize: "1rem", fontWeight: 700,
                  padding: "1rem 2.5rem", borderRadius: 999,
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)",
                  color: "white",
                  boxShadow: "0 8px 32px rgba(196,112,78,0.4)",
                  letterSpacing: "0.02em",
                  display: "inline-flex", alignItems: "center", gap: "0.6rem",
                }}
              >
                Start Free Skin Analysis
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Privacy note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            style={{
              fontFamily: "var(--font-body)", fontSize: "0.75rem",
              color: "#5C4033", opacity: 0.55, marginTop: "1rem",
            }}
          >
            No sign-up required · Your data is never stored
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
