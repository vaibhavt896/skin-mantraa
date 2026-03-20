"use client";

import { motion, useInView, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ─── Star Rating ──────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"
          fill={i < rating ? "#D4A76A" : "none"}
        >
          <path d="M7 1.5L8.18 5.12H12L9.09 7.26L10.27 10.88L7 8.75L3.73 10.88L4.91 7.26L2 5.12H5.82L7 1.5Z"
            stroke="#D4A76A" strokeWidth="1" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

// ─── Testimonial Card (used in marquee) ───────────────────────────────────────

type Testimonial = (typeof TESTIMONIALS)[number];

function TestimonialCard({ testimonial, featured }: { testimonial: Testimonial; featured?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.02 : 1, y: hovered ? -4 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        width: featured ? "360px" : "300px",
        flexShrink: 0,
        padding: featured ? "1.75rem" : "1.4rem",
        borderRadius: "18px",
        background: featured
          ? "linear-gradient(135deg, rgba(199,141,107,0.12) 0%, rgba(199,141,107,0.06) 100%)"
          : "#FFFFFF",
        border: featured
          ? "1px solid rgba(199,141,107,0.28)"
          : "1px solid rgba(199,141,107,0.14)",
        boxShadow: hovered
          ? "0 16px 48px rgba(60,43,31,0.12)"
          : "0 2px 16px rgba(60,43,31,0.05)",
        position: "relative", overflow: "hidden",
        cursor: "default", transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Decorative quote mark */}
      {featured && (
        <div aria-hidden="true" style={{
          position: "absolute", top: "0.75rem", right: "1rem",
          fontFamily: "Georgia, serif", fontSize: "5rem", lineHeight: 1,
          color: "#C78D6B", opacity: 0.12, userSelect: "none",
        }}>&ldquo;</div>
      )}

      {/* Hover shimmer */}
      <motion.div
        aria-hidden="true"
        animate={hovered ? { x: ["−100%", "200%"] } : { x: "−100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.25) 50%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "0.85rem" }}>
          <StarRating rating={testimonial.rating} />
        </div>

        <blockquote style={{
          fontFamily: featured ? "var(--font-display)" : "var(--font-body)",
          fontSize: featured ? "clamp(1rem, 1.6vw, 1.15rem)" : "0.875rem",
          lineHeight: 1.65,
          color: "#3D2B1F",
          marginBottom: "1.1rem",
          fontStyle: featured ? "italic" : "normal",
        }}>
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div style={{
              width: "30px", height: "30px", borderRadius: "50%",
              background: featured ? "#C78D6B" : "rgba(199,141,107,0.15)",
              color: featured ? "#fff" : "#C78D6B",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-accent)", fontSize: "0.75rem", fontWeight: 700, flexShrink: 0,
            }}>
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-accent)", fontSize: "0.82rem", fontWeight: 600, color: "#3D2B1F" }}>
                {testimonial.name}
              </div>
              <div style={{ fontFamily: "var(--font-accent)", fontSize: "0.65rem", color: "#C78D6B", letterSpacing: "0.04em" }}>
                {testimonial.treatment}
              </div>
            </div>
          </div>
          <span style={{ fontFamily: "var(--font-accent)", fontSize: "0.65rem", color: "#5C4033", opacity: 0.5 }}>
            via {testimonial.source}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Infinite Marquee Row ─────────────────────────────────────────────────────

function MarqueeRow({ items, speed = 40, reverse = false }: { items: Testimonial[]; speed?: number; reverse?: boolean }) {
  const [paused, setPaused] = useState(false);
  const xRef = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (paused) return;
    const containerW = containerRef.current?.scrollWidth ?? 0;
    const halfW = containerW / 2;
    if (halfW === 0) return;

    const dir = reverse ? 1 : -1;
    const next = xRef.get() + dir * (speed / 1000) * delta;
    const wrapped = reverse
      ? next > 0 ? next - halfW : next
      : next < -halfW ? next + halfW : next;
    xRef.set(wrapped);
  });

  const doubled = [...items, ...items];

  return (
    <div
      style={{ overflow: "hidden", position: "relative" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Edge fades */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2,
        background: "linear-gradient(90deg, #F5E6D3 0%, transparent 12%, transparent 88%, #F5E6D3 100%)",
      }} />

      <motion.div
        ref={containerRef}
        style={{ x: xRef, display: "flex", gap: "1.25rem", width: "max-content", paddingBottom: "0.5rem" }}
      >
        {doubled.map((t, i) => (
          <div key={`${t.id}-${i}`} ref={i === 0 ? innerRef : undefined}>
            <TestimonialCard testimonial={t} featured={t.featured} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function TestimonialsWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Split testimonials into two rows
  const row1 = TESTIMONIALS.filter((_, i) => i % 2 === 0);
  const row2 = TESTIMONIALS.filter((_, i) => i % 2 === 1);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: "#F5E6D3", position: "relative", overflow: "hidden" }}
      className="py-24 overflow-hidden"
    >
      {/* Background decoration */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(199,141,107,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Section Header */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                fontFamily: "var(--font-accent)", fontSize: "0.72rem", fontWeight: 600,
                letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C78D6B",
                marginBottom: "1rem",
              }}
            >
              <span aria-hidden="true" style={{ width: "24px", height: "1px", background: "#C78D6B" }} />
              Patient Stories
              <span aria-hidden="true" style={{ width: "24px", height: "1px", background: "#C78D6B" }} />
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 600, color: "#3D2B1F",
                lineHeight: 1.1, margin: "0 0 1rem",
                letterSpacing: "-0.025em",
              }}
            >
              Real Results,{" "}
              <span style={{
                background: "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Real Stories</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              style={{ fontFamily: "var(--font-body)", fontSize: "1rem", maxWidth: "440px", margin: "0 auto", color: "#5C4033", opacity: 0.8, lineHeight: 1.7 }}
            >
              From patients who trusted us with their skin — unedited and verified
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}
      >
        <MarqueeRow items={row1} speed={35} />
        <MarqueeRow items={row2.length > 0 ? row2 : row1} speed={28} reverse />
      </motion.div>

      {/* Bottom trust note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9, duration: 0.6 }}
        style={{ textAlign: "center", marginTop: "3rem", padding: "0 1.5rem" }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" as const }}>
          {["Practo", "Google", "Justdial"].map((platform) => (
            <span key={platform} style={{
              fontFamily: "var(--font-accent)", fontSize: "0.75rem", fontWeight: 500,
              color: "#5C4033", opacity: 0.55,
              display: "flex", alignItems: "center", gap: "0.35rem",
            }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C78D6B", display: "inline-block" }} aria-hidden="true" />
              {platform}
            </span>
          ))}
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#5C4033", opacity: 0.45 }}>
            — verified reviews
          </span>
        </div>
      </motion.div>
    </section>
  );
}
