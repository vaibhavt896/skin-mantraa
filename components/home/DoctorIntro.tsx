"use client";

import { useRef, useCallback } from "react";
import {
  motion,
  useInView,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/constants";
import {
  slideInFromLeft,
  slideInFromRight,
  staggerContainer,
  fadeInUp,
} from "@/lib/animations";

const QUALIFICATIONS = [
  { text: "MBBS & MD Dermatology - IMS BHU", icon: "🎓" },
  { text: "Former Consultant, Kaya Skin Clinic Delhi", icon: "🏥" },
  { text: "26+ Years Clinical Experience", icon: "⭐" },
  { text: "IMA | IADVL | CDSI Member", icon: "🏛️" },
];

// ─── 3D Tilt Card ─────────────────────────────────────────────────────────────

function TiltCard({ inView }: { inView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 180,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 180,
    damping: 28,
  });
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["-20%", "120%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["-20%", "120%"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      variants={slideInFromLeft}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ position: "relative", perspective: "1200px" }}
    >
      {/* Ambient glow - bottom left */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "-4rem",
          left: "-3rem",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,112,78,0.22) 0%, transparent 65%)",
          filter: "blur(45px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Ambient glow - top right */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
        style={{
          position: "absolute",
          top: "-2rem",
          right: "-3rem",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,167,106,0.2) 0%, transparent 65%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 3D Tilt container */}
      <motion.div
        ref={cardRef}
        className="doctor-tilt-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "440px",
          margin: "0 auto",
        }}
      >
        {/* Gradient border wrapper - creates the gold border effect */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            padding: "2px",
            borderRadius: "24px",
            background:
              "linear-gradient(145deg, rgba(212,167,106,0.85) 0%, rgba(196,112,78,0.5) 45%, rgba(212,167,106,0.75) 100%)",
            boxShadow:
              "0 48px 120px rgba(60,43,31,0.22), 0 0 80px rgba(199,141,107,0.14)",
          }}
        >
          {/* Photo card */}
          <div
            style={{
              position: "relative",
              aspectRatio: "3 / 4",
              borderRadius: "22px",
              overflow: "hidden",
              background: "#EDD5BC",
            }}
          >
            {/* Doctor photo */}
            <Image
              src="/optimized/Dr.%20Mamta%20Bhura%202.webp"
              alt={BRAND.doctor.name}
              fill
              style={{ objectFit: "cover", objectPosition: "center 8%" }}
              sizes="(max-width: 768px) 90vw, 440px"
              priority
            />

            {/* Mouse-tracking glare spotlight */}
            <motion.div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: glareX,
                top: glareY,
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)",
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
                zIndex: 3,
              }}
            />

            {/* Diagonal shimmer sweep */}
            <motion.div
              aria-hidden="true"
              animate={{ x: ["-100%", "220%"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 4,
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "45%",
                height: "100%",
                background:
                  "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.14) 50%, transparent 65%)",
                pointerEvents: "none",
                zIndex: 3,
              }}
            />

            {/* Animated gold corner brackets */}
            {/* Top-left */}
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 0 }}
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                width: "22px",
                height: "22px",
                borderTop: "2px solid #D4A76A",
                borderLeft: "2px solid #D4A76A",
                zIndex: 4,
              }}
            />
            {/* Top-right */}
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "22px",
                height: "22px",
                borderTop: "2px solid #D4A76A",
                borderRight: "2px solid #D4A76A",
                zIndex: 4,
              }}
            />
            {/* Bottom-left */}
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                width: "22px",
                height: "22px",
                borderBottom: "2px solid #D4A76A",
                borderLeft: "2px solid #D4A76A",
                zIndex: 4,
              }}
            />
            {/* Bottom-right */}
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 1.5 }}
              style={{
                position: "absolute",
                bottom: "16px",
                right: "16px",
                width: "22px",
                height: "22px",
                borderBottom: "2px solid #D4A76A",
                borderRight: "2px solid #D4A76A",
                zIndex: 4,
              }}
            />

            {/* Bottom gradient + name plate */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "4rem 1.4rem 1.4rem",
                background:
                  "linear-gradient(to top, rgba(30,15,8,0.88) 0%, rgba(30,15,8,0.5) 45%, transparent 100%)",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.35rem",
                      fontWeight: 600,
                      color: "#fff",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                    }}
                  >
                    {BRAND.doctor.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.62rem",
                      fontWeight: 500,
                      color: "#D4A76A",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase" as const,
                      marginTop: "0.25rem",
                    }}
                  >
                    {BRAND.doctor.specialization}
                  </div>
                </div>
                {/* Verified tick */}
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #C4704E, #D4A76A)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginLeft: "0.5rem",
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8.5l3.5 3.5 6.5-7"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Floating chips (outside the card, in 3D space) ── */}

        {/* Rating chip - top right */}
        <motion.div
          className="doctor-floating-chip doctor-rating-chip"
          animate={{
            y: [0, -7, 0],
            boxShadow: [
              "0 8px 28px rgba(60,43,31,0.14), 0 0 0 1px rgba(199,141,107,0.18)",
              "0 8px 36px rgba(199,141,107,0.25), 0 0 0 1.5px rgba(199,141,107,0.3)",
              "0 8px 28px rgba(60,43,31,0.14), 0 0 0 1px rgba(199,141,107,0.18)",
            ],
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            position: "absolute",
            top: "2rem",
            right: "-1.75rem",
            background: "rgba(255,255,255,0.94)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            padding: "0.55rem 1rem",
            borderRadius: "14px",
            boxShadow:
              "0 8px 28px rgba(60,43,31,0.14), 0 0 0 1px rgba(199,141,107,0.18)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 5,
          }}
        >
          <span style={{ fontSize: "1rem", lineHeight: 1 }}>⭐</span>
          <div>
            <div
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#3D2B1F",
                lineHeight: 1,
              }}
            >
              {BRAND.doctor.rating} / 5
            </div>
            <div
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.59rem",
                color: "#C78D6B",
                letterSpacing: "0.05em",
                marginTop: "2px",
              }}
            >
              {BRAND.doctor.patients} reviews
            </div>
          </div>
        </motion.div>

        {/* Experience chip - left middle */}
        <motion.div
          className="doctor-floating-chip doctor-experience-chip"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          }}
          style={{
            position: "absolute",
            top: "38%",
            left: "-1.75rem",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            padding: "0.5rem 0.85rem 0.5rem 0.6rem",
            borderRadius: "14px",
            boxShadow:
              "0 6px 24px rgba(60,43,31,0.12), 0 0 0 1px rgba(199,141,107,0.16)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 2L12.4 7.4H18L13.3 10.7L15.1 16.2L10 12.9L4.9 16.2L6.7 10.7L2 7.4H7.6L10 2Z"
                fill="rgba(255,255,255,0.95)"
              />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#3D2B1F",
                lineHeight: 1,
              }}
            >
              26+
            </div>
            <div
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.58rem",
                color: "#5C4033",
                letterSpacing: "0.04em",
                marginTop: "2px",
              }}
            >
              Yrs Experience
            </div>
          </div>
        </motion.div>

        {/* BHU badge - bottom left */}
        <motion.div
          className="doctor-floating-chip doctor-bhu-chip"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            position: "absolute",
            bottom: "-1.25rem",
            left: "1.35rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#2C1810",
            color: "#D4A76A",
            padding: "0.55rem 1rem",
            borderRadius: "100px",
            boxShadow:
              "0 12px 36px rgba(44,24,16,0.45), 0 0 0 1px rgba(212,167,106,0.3)",
            zIndex: 6,
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 1l1.8 4H14l-3.4 2.5 1.3 4L8 9 4.1 11.5l1.3-4L2 5h4.2L8 1z"
              fill="#D4A76A"
            />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "0.66rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
            }}
          >
            IMS BHU Trained
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function DoctorIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#FDF6EC",
        padding: "7rem 1.5rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(199,141,107,0.05) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(212,167,106,0.04) 0%, transparent 50%)",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          gap: "4rem",
        }}
        className="grid grid-cols-1 lg:grid-cols-2 items-center"
      >
        {/* LEFT: 3D Tilt Card */}
        <TiltCard inView={inView} />

        {/* RIGHT: Text Content */}
        <motion.div
          variants={slideInFromRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "1.75rem",
          }}
        >
          {/* Label */}
          <motion.span
            variants={fadeInUp}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-accent)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: "#C78D6B",
            }}
          >
            <motion.span
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: "block",
                width: "28px",
                height: "1.5px",
                background: "#C78D6B",
                transformOrigin: "left",
              }}
              aria-hidden="true"
            />
            Meet Your Dermatologist
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.08,
              color: "#3D2B1F",
              margin: 0,
            }}
          >
            26 Years of Science,
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Care &amp; Transformation
            </span>
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "#5C4033",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {BRAND.doctor.bio}
          </motion.p>

          {/* Pull quote */}
          <motion.blockquote
            variants={fadeInUp}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              margin: "0.25rem 0",
              padding: "1.35rem 1.5rem",
              background:
                "linear-gradient(135deg, rgba(199,141,107,0.07) 0%, rgba(199,141,107,0.04) 100%)",
              borderLeft: "3px solid #C78D6B",
              borderRadius: "0 14px 14px 0",
              cursor: "default",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
                fontStyle: "italic",
                color: "#3D2B1F",
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "2.5rem",
                  color: "#C78D6B",
                  lineHeight: 0,
                  verticalAlign: "-0.5rem",
                  marginRight: "0.1em",
                }}
              >
                &ldquo;
              </span>
              She honestly tells you what can and cannot be treated.
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "2.5rem",
                  color: "#C78D6B",
                  lineHeight: 0,
                  verticalAlign: "-0.5rem",
                  marginLeft: "0.1em",
                }}
              >
                &rdquo;
              </span>
            </p>
            <footer
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "rgba(92,64,51,0.6)",
                letterSpacing: "0.03em",
                marginTop: "0.85rem",
              }}
            >
              - Patient Review, Practo
            </footer>
            {/* Handwritten signature */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{ marginTop: "0.75rem" }}
            >
              <svg
                width="140"
                height="36"
                viewBox="0 0 140 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Dr. Mamta Bhura signature"
              >
                <path
                  d="M6 28 C12 8, 20 4, 28 16 C36 28, 38 12, 46 10 C54 8, 58 20, 62 18"
                  stroke="#C4704E"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M64 16 C70 8, 76 6, 82 14 C88 22, 90 10, 96 8 C102 6, 106 18, 112 16 C118 14, 122 20, 128 18"
                  stroke="#C4704E"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M8 32 L134 32"
                  stroke="#D4A76A"
                  strokeWidth="0.75"
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </motion.blockquote>

          {/* Qualifications */}
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column" as const,
              gap: "0.6rem",
            }}
          >
            {QUALIFICATIONS.map((q) => (
              <motion.li
                key={q.text}
                variants={fadeInUp}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.925rem",
                  color: "#5C4033",
                  lineHeight: 1.5,
                  cursor: "default",
                  padding: "0.35rem 0",
                }}
              >
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: "rgba(199,141,107,0.1)",
                    border: "1px solid rgba(199,141,107,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  {q.icon}
                </span>
                {q.text}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div variants={fadeInUp} style={{ paddingTop: "0.25rem" }}>
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ display: "inline-block" }}
            >
              <Link href="/about" className="btn-primary">
                Meet Dr. Bhura
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
