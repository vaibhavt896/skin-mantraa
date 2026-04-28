"use client";

import { motion, useInView } from "framer-motion";
import { ExternalLink, ShieldCheck, Star, MessageSquareText } from "lucide-react";
import { useRef } from "react";

const REVIEW_BADGES = [
  {
    name: "Practo",
    label: "Patient stories and clinic profile",
    href: "https://www.practo.com/kanpur/clinic/skin-mantraa-swaroop-nagar-1/reviews",
    accent: "#14A7A0",
  },
  {
    name: "Justdial",
    label: "Local listing and patient feedback",
    href: "https://www.justdial.com/Kanpur/Dr-Mamta-Bhura-Near-Domino-s-Swaroop-Nagar/0512PX512-X512-160830213024-J7A4_BZDET/reviews",
    accent: "#F5A623",
  },
];

export default function ProofOfCare() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="proof-of-care-title"
      className="px-5 py-16 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(180deg, #FDF6EC 0%, #FFF9F3 42%, #F5E6D3 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "auto -10% -35% -10%",
          height: "340px",
          background:
            "radial-gradient(ellipse at center, rgba(196,112,78,0.11) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        style={{ position: "relative", zIndex: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              borderRadius: 999,
              border: "1px solid rgba(199,141,107,0.22)",
              background: "rgba(255,255,255,0.58)",
              color: "#C4704E",
              fontFamily: "var(--font-accent)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.13em",
              padding: "0.42rem 0.85rem",
              textTransform: "uppercase",
            }}
          >
            <ShieldCheck size={14} />
            Proof of Care
          </span>

          <h2
            id="proof-of-care-title"
            style={{
              color: "#3D2B1F",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.1rem, 4vw, 3.4rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              margin: "1rem 0 0.9rem",
            }}
          >
            Real patients, real public feedback.
          </h2>

          <p
            style={{
              color: "#5C4033",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: "54ch",
            }}
          >
            We keep the website beautiful, but not artificial. Visitors can
            check independent public platforms before they book, then speak to
            the clinic directly for medical guidance.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {REVIEW_BADGES.map((badge, index) => (
            <motion.a
              key={badge.name}
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.62,
                delay: 0.12 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              style={{
                minHeight: "220px",
                borderRadius: 18,
                border: "1px solid rgba(199,141,107,0.18)",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.88), rgba(253,246,236,0.72))",
                boxShadow: "0 16px 52px rgba(61,43,31,0.09)",
                color: "#3D2B1F",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                padding: "1.35rem",
                position: "relative",
                textDecoration: "none",
              }}
            >
              <motion.div
                aria-hidden="true"
                animate={{ x: ["-30%", "135%"] }}
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  width: "36%",
                  background:
                    "linear-gradient(105deg, transparent 10%, rgba(255,255,255,0.5) 50%, transparent 90%)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    marginBottom: "1.35rem",
                  }}
                >
                  <div
                    style={{
                      alignItems: "center",
                      background: badge.accent,
                      borderRadius: 14,
                      color: "white",
                      display: "inline-flex",
                      fontFamily: "var(--font-accent)",
                      fontSize: "1.15rem",
                      fontWeight: 800,
                      height: 52,
                      justifyContent: "center",
                      letterSpacing: "-0.01em",
                      minWidth: 118,
                      padding: "0 1rem",
                    }}
                  >
                    {badge.name}
                  </div>
                  <ExternalLink size={18} color="#C78D6B" />
                </div>

                <p
                  style={{
                    color: "#3D2B1F",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    fontStyle: "italic",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    marginBottom: "0.55rem",
                  }}
                >
                  {badge.label}
                </p>
                <p
                  style={{
                    color: "#6E5545",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.86rem",
                    lineHeight: 1.6,
                  }}
                >
                  Opens the public listing so visitors can review the latest
                  patient feedback themselves.
                </p>
              </div>

              <div
                style={{
                  alignItems: "center",
                  color: "#C4704E",
                  display: "flex",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  gap: "0.4rem",
                  letterSpacing: "0.08em",
                  position: "relative",
                  textTransform: "uppercase",
                  zIndex: 1,
                }}
              >
                {index === 0 ? <Star size={14} /> : <MessageSquareText size={14} />}
                Independent platform
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
