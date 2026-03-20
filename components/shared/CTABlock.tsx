"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

interface CTABlockProps {
  headline: string;
  subtext?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}

const PARTICLES = [
  { x: "12%", y: "20%", size: 6, delay: 0, duration: 5.5 },
  { x: "85%", y: "15%", size: 4, delay: 1, duration: 6 },
  { x: "25%", y: "75%", size: 5, delay: 2, duration: 5 },
  { x: "70%", y: "65%", size: 3, delay: 0.5, duration: 7 },
  { x: "50%", y: "10%", size: 4, delay: 1.5, duration: 6.5 },
  { x: "92%", y: "50%", size: 5, delay: 0.8, duration: 5.8 },
  { x: "8%", y: "55%", size: 3, delay: 2.5, duration: 6.2 },
  { x: "60%", y: "85%", size: 4, delay: 1.2, duration: 5.2 },
];

export default function CTABlock({
  headline,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  dark = false,
}: CTABlockProps) {
  const ref = useRef<HTMLElement>(null);

  const bgStyle = dark
    ? {
        background:
          "linear-gradient(135deg, #2C1810 0%, #3D2B1F 50%, #2C1810 100%)",
      }
    : {
        background:
          "linear-gradient(135deg, #F5E6D3 0%, #F8E8E0 50%, #FDF6EC 100%)",
      };

  const headlineColor = dark ? "#FDF6EC" : "#3D2B1F";
  const subtextColor = dark ? "rgba(253,246,236,0.7)" : "#5C4033";
  const particleColor = dark
    ? "rgba(199,141,107,0.2)"
    : "rgba(196,112,78,0.12)";

  const ghostStyle = dark
    ? {
        border: "1.5px solid rgba(253,246,236,0.25)",
        color: "#FDF6EC",
      }
    : {
        border: "1.5px solid rgba(199,141,107,0.4)",
        color: "#3D2B1F",
      };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 px-6"
      style={bgStyle}
    >
      {/* Animated particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: particleColor,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Decorative ring top-right */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "-80px",
          right: "-80px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: `1px solid ${dark ? "rgba(199,141,107,0.12)" : "rgba(196,112,78,0.1)"}`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "-60px",
          left: "-60px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          border: `1px solid ${dark ? "rgba(212,167,106,0.1)" : "rgba(196,112,78,0.08)"}`,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            fontWeight: 600,
            fontStyle: "italic",
            lineHeight: 1.1,
            color: headlineColor,
            letterSpacing: "-0.01em",
          }}
        >
          {headline}
        </motion.h2>

        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: subtextColor,
              maxWidth: "52ch",
            }}
          >
            {subtext}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mt-2"
        >
          <Link
            href={primaryHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9375rem 2.25rem",
              background: "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)",
              color: "white",
              fontFamily: "var(--font-accent)",
              fontWeight: 500,
              fontSize: "0.9375rem",
              letterSpacing: "0.02em",
              borderRadius: "100px",
              boxShadow: "0 4px 24px rgba(196,112,78,0.35)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 10px 36px rgba(196,112,78,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 24px rgba(196,112,78,0.35)";
            }}
          >
            {primaryLabel}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.9375rem 2.25rem",
                background: "transparent",
                fontFamily: "var(--font-accent)",
                fontWeight: 500,
                fontSize: "0.9375rem",
                letterSpacing: "0.02em",
                borderRadius: "100px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                ...ghostStyle,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = dark
                  ? "rgba(253,246,236,0.08)"
                  : "rgba(199,141,107,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = dark
                  ? "rgba(253,246,236,0.45)"
                  : "#C78D6B";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = dark
                  ? "rgba(253,246,236,0.25)"
                  : "rgba(199,141,107,0.4)";
              }}
            >
              {secondaryLabel}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
