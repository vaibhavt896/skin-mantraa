"use client";

import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { SERVICES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// ─── Service Icons ────────────────────────────────────────────────────────────

function LaserIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="2" y="17" width="8" height="6" rx="1.5" stroke="#C78D6B" strokeWidth="1.5" />
      <line x1="10" y1="20" x2="38" y2="20" stroke="#C78D6B" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 13 Q17 10 20 13 Q23 16 26 13 Q29 10 32 13" stroke="#C78D6B" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M14 27 Q17 30 20 27 Q23 24 26 27 Q29 30 32 27" stroke="#C78D6B" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.7" />
      <circle cx="36" cy="20" r="2.5" fill="#C78D6B" opacity="0.9" />
    </svg>
  );
}

function SparklesIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 6 L21.8 16.2 L32 18 L21.8 19.8 L20 30 L18.2 19.8 L8 18 L18.2 16.2 Z" stroke="#C78D6B" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(199,141,107,0.1)" />
      <path d="M31 7 L31.8 10.2 L35 11 L31.8 11.8 L31 15 L30.2 11.8 L27 11 L30.2 10.2 Z" stroke="#C78D6B" strokeWidth="1.2" strokeLinejoin="round" fill="rgba(199,141,107,0.08)" />
      <path d="M9 25 L9.7 27.3 L12 28 L9.7 28.7 L9 31 L8.3 28.7 L6 28 L8.3 27.3 Z" stroke="#C78D6B" strokeWidth="1.2" strokeLinejoin="round" fill="rgba(199,141,107,0.08)" />
      <circle cx="33" cy="28" r="1.5" fill="#C78D6B" opacity="0.5" />
    </svg>
  );
}

function ShieldIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 5 L34 11 L34 21 C34 29 20 36 20 36 C20 36 6 29 6 21 L6 11 Z" stroke="#C78D6B" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(199,141,107,0.08)" />
      <path d="M13 20.5 L17.5 25 L27 15" stroke="#C78D6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HairIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 35 C20 35 10 26 10 18 C10 11 15 7 20 5 C25 7 30 11 30 18 C30 26 20 35 20 35 Z" stroke="#C78D6B" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(199,141,107,0.08)" />
      <path d="M20 33 C17 27 14 21 16 15" stroke="#C78D6B" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M20 33 C23 27 26 21 24 15" stroke="#C78D6B" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M20 35 C20 28 20 18 20 8" stroke="#C78D6B" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

function MedicalIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="15" stroke="#C78D6B" strokeWidth="1.5" fill="rgba(199,141,107,0.08)" />
      <line x1="20" y1="11" x2="20" y2="29" stroke="#C78D6B" strokeWidth="2" strokeLinecap="round" />
      <line x1="11" y1="20" x2="29" y2="20" stroke="#C78D6B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 5 L23.09 14.26 L33 14.26 L25.45 19.94 L28.54 29.2 L20 23.52 L11.46 29.2 L14.55 19.94 L7 14.26 L16.91 14.26 Z" stroke="#C78D6B" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(199,141,107,0.1)" />
    </svg>
  );
}

const SERVICE_ICONS: Record<string, React.FC<{ size?: number }>> = {
  laser: LaserIcon, sparkles: SparklesIcon, shield: ShieldIcon,
  hair: HairIcon, medical: MedicalIcon, star: StarIcon,
};

// ─── Spotlight Card ───────────────────────────────────────────────────────────

interface Service {
  id: string; title: string; shortDesc: string; icon: string;
  featured: boolean; treatments: string[];
}

function SpotlightCard({ service, Icon, featured }: { service: Service; Icon: React.FC<{ size?: number }>; featured?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const spotlightX = useSpring(useTransform(mouseX, (v) => `${v}px`), { stiffness: 150, damping: 20 });
  const spotlightY = useSpring(useTransform(mouseY, (v) => `${v}px`), { stiffness: 150, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={featured ? "sm:col-span-2 lg:col-span-2" : ""}
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        background: featured
          ? "linear-gradient(135deg, #F8E8E0 0%, #F5E6D3 60%, #FDF6EC 100%)"
          : "linear-gradient(160deg, #FDF6EC 0%, #F5E6D3 100%)",
        border: "1px solid rgba(199,141,107,0.18)",
        boxShadow: "0 4px 24px rgba(60,43,31,0.06)",
        cursor: "pointer",
        display: "flex", flexDirection: "column" as const,
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 60px rgba(60,43,31,0.14), 0 0 0 1px rgba(199,141,107,0.3)",
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Mouse-tracking spotlight */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: spotlightX, top: spotlightY,
          width: "280px", height: "280px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(199,141,107,0.18) 0%, transparent 65%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          zIndex: 0,
        }}
      />

      {/* Animated border shimmer on hover */}
      <motion.div
        aria-hidden="true"
        animate={hovered ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", inset: 0, borderRadius: "20px",
          background: "linear-gradient(90deg, transparent 0%, rgba(212,167,106,0.4) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease",
          zIndex: 0, mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
          WebkitMaskComposite: "xor",
          padding: "1px",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, padding: featured ? "2.5rem 2.75rem" : "1.85rem 2rem", display: "flex", flexDirection: "column" as const, gap: "1.2rem", flex: 1 }}>
        {featured && (
          <span style={{
            fontFamily: "var(--font-accent)", fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase" as const,
            color: "#C78D6B", marginBottom: "-0.4rem",
          }}>Featured Service</span>
        )}

        <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
          {/* Animated icon container */}
          <motion.div
            animate={hovered ? { rotate: [0, -8, 8, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              flexShrink: 0,
              width: featured ? "68px" : "56px", height: featured ? "68px" : "56px",
              borderRadius: "16px",
              background: hovered ? "rgba(199,141,107,0.15)" : "rgba(199,141,107,0.08)",
              border: "1px solid rgba(199,141,107,0.18)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.3s ease",
            }}
          >
            <Icon size={featured ? 48 : 36} />
          </motion.div>

          <div style={{ flex: 1 }}>
            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 600,
              color: "#3D2B1F", margin: "0 0 0.4rem",
              fontSize: featured ? "clamp(1.35rem, 2.5vw, 1.9rem)" : "clamp(1.1rem, 1.8vw, 1.4rem)",
              lineHeight: 1.2,
            }}>{service.title}</h3>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "#5C4033", margin: 0, opacity: 0.9 }}>
              {service.shortDesc}
            </p>
          </div>
        </div>

        {/* Treatment badges */}
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.45rem" }}>
          {service.treatments.slice(0, featured ? 4 : 3).map((treatment, i) => (
            <motion.span
              key={treatment}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0.85, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              style={{
                fontFamily: "var(--font-accent)", fontSize: "0.72rem", fontWeight: 500,
                padding: "0.28rem 0.8rem", borderRadius: "100px",
                background: hovered ? "rgba(199,141,107,0.18)" : "rgba(199,141,107,0.1)",
                color: "#C78D6B", border: "1px solid rgba(199,141,107,0.22)",
                transition: "background 0.2s ease",
              }}
            >
              {treatment}
            </motion.span>
          ))}
        </div>

        {/* CTA */}
        <motion.div animate={hovered ? { x: 4 } : { x: 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} style={{ marginTop: "auto" }}>
          <Link
            href={`/services/${service.id}`}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              fontFamily: "var(--font-accent)", fontSize: "0.85rem", fontWeight: 600,
              color: "#C78D6B", textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Explore treatment
            <motion.span animate={hovered ? { x: 4 } : { x: 0 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>→</motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: "#FDF6EC", position: "relative", overflow: "hidden" }}
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background orbs */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "10%", right: "-8%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(199,141,107,0.07) 0%, transparent 65%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", bottom: "15%", left: "-5%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,167,106,0.06) 0%, transparent 65%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />

      <div className="max-w-7xl mx-auto" style={{ position: "relative", zIndex: 1 }}>

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              fontFamily: "var(--font-accent)", fontSize: "0.72rem",
              fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase" as const, color: "#C78D6B",
              marginBottom: "1rem",
            }}
          >
            <span style={{ width: "24px", height: "1px", background: "#C78D6B" }} aria-hidden="true" />
            Our Expertise
            <span style={{ width: "24px", height: "1px", background: "#C78D6B" }} aria-hidden="true" />
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
            Advanced Treatments
            <br />
            <span style={{
              background: "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>for Every Skin Need</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            style={{ fontFamily: "var(--font-body)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto", color: "#5C4033", opacity: 0.8, lineHeight: 1.7 }}
          >
            From medical dermatology to cutting-edge cosmetic procedures — all under one roof
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon] ?? StarIcon;
            return (
              <SpotlightCard
                key={service.id}
                service={service}
                Icon={Icon}
                featured={service.featured}
              />
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginTop: "3.5rem" }}
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }} style={{ display: "inline-block" }}>
            <Link href="/services" className="btn-ghost">
              View All Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
