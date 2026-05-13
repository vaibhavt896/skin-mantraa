"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import HorizontalTimeline from "@/components/about/HorizontalTimeline";
import { BRAND } from "@/lib/constants";
import {
  fadeInUp,
  staggerContainer,
  slideInFromLeft,
  slideInFromRight,
  scaleIn,
} from "@/lib/animations";

// ─── Credential & Membership Data ───────────────────────────────────────────
const MEMBERSHIPS = [
  {
    abbr: "IMA",
    name: "Indian Medical Association",
    description:
      "India's largest and most respected voluntary organisation of physicians, upholding standards of medical practice and ethics nationwide.",
    url: "https://www.ima-india.org/ima/",
  },
  {
    abbr: "IADVL",
    name: "Indian Association of Dermatologists, Venereologists & Leprologists",
    description:
      "The premier national body for dermatologists in India, driving advances in skin science, research, and clinical standards.",
    url: "https://iadvl.org/",
  },
  {
    abbr: "CDSI",
    name: "Cosmetic Dermatology Society of India",
    description:
      "A specialised society dedicated to cosmetic dermatology excellence, ensuring practitioners stay at the forefront of aesthetic medicine.",
    url: "https://cdsi.in/",
  },
];

// ─── Section wrapper with InView trigger ────────────────────────────────────
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </motion.div>
  );
}

// ─── Page Component ──────────────────────────────────────────────────────────
export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      <Header />
      <main style={{ background: "#FDF6EC" }}>
        {/* ══════════════════════════════════════════════════
            1. HERO SECTION
        ══════════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative min-h-[60vh] flex items-end pb-16 pt-40 overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #FDF6EC 0%, #F5E6D3 40%, #F8E8E0 70%, #FDF6EC 100%)",
          }}
        >
          {/* Decorative orbs */}
          <div
            className="absolute top-20 right-20 w-80 h-80 rounded-full opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #C78D6B 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute bottom-0 left-10 w-60 h-60 rounded-full opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #C4704E 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center gap-2 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "#C78D6B",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
              <span style={{ color: "#C78D6B", fontSize: "0.75rem" }}>›</span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "#5C4033",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                About
              </span>
            </motion.nav>

            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#C4704E",
                  marginBottom: "1.25rem",
                }}
              >
                Meet the Doctor
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.75rem, 6vw, 5rem)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  lineHeight: 1.08,
                  color: "#3D2B1F",
                  letterSpacing: "-0.02em",
                  marginBottom: "1.75rem",
                }}
              >
                The Story Behind
                <br />
                <span className="text-gradient">Your Skin&apos;s</span>{" "}
                Transformation
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.125rem",
                  lineHeight: 1.7,
                  color: "#5C4033",
                  maxWidth: "560px",
                }}
              >
                Over 26 years ago, Dr. Mamta Bhura set out from the hallowed
                halls of IMS BHU with a simple mission: to give every patient
                the honest, expert skin care they deserve. Today, that mission
                lives on at SKIN@Mantraa in Kanpur.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            2. BIO SECTION
        ══════════════════════════════════════════════════ */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Photo placeholder with badges */}
              <AnimatedSection>
                <motion.div variants={slideInFromLeft} className="relative">
                  {/* Organic blob photo placeholder */}
                  <div
                    className="relative mx-auto"
                    style={{ maxWidth: "480px" }}
                  >
                    {/* Main blob */}
                    <div
                      className="relative w-full aspect-[4/5] overflow-hidden"
                      style={{
                        borderRadius: "60% 40% 55% 45% / 50% 45% 55% 50%",
                        boxShadow:
                          "0 32px 80px rgba(61, 43, 31, 0.12), 0 0 0 1px rgba(199,141,107,0.1)",
                      }}
                    >
                      <Image
                        src="/optimized/Dr.%20Mamta%20Bhura%201.webp"
                        alt="Dr. Mamta Bhura - SKIN@Mantraa, Kanpur"
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: "center 10%",
                        }}
                        sizes="(max-width: 768px) 90vw, 380px"
                        priority
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to bottom, transparent 60%, rgba(44,24,16,0.35) 100%)",
                          borderRadius: "inherit",
                        }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Floating badge: BHU */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-4 -left-4 lg:-left-8 px-4 py-3 rounded-2xl"
                      style={{
                        background: "#FDF6EC",
                        boxShadow: "0 8px 32px rgba(61,43,31,0.12)",
                        border: "1px solid rgba(199,141,107,0.2)",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-accent)",
                          fontSize: "0.7rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#C4704E",
                        }}
                      >
                        IMS BHU
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "#3D2B1F",
                        }}
                      >
                        <span style={{ whiteSpace: "nowrap" }}>MBBS, MD</span>
                      </p>
                    </motion.div>

                    {/* Floating badge: 26 years */}
                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      className="absolute -bottom-4 -right-4 lg:-right-8 px-4 py-3 rounded-2xl"
                      style={{
                        background:
                          "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)",
                        boxShadow: "0 8px 32px rgba(196,112,78,0.3)",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.75rem",
                          fontWeight: 700,
                          color: "#FDF6EC",
                          lineHeight: 1,
                        }}
                      >
                        26+
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-accent)",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(253,246,236,0.8)",
                        }}
                      >
                        Years of Excellence
                      </p>
                    </motion.div>

                    {/* Floating badge: 451+ patients */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      className="absolute top-1/2 -right-6 lg:-right-12 -translate-y-1/2 px-4 py-3 rounded-2xl"
                      style={{
                        background: "#FDF6EC",
                        boxShadow: "0 8px 32px rgba(61,43,31,0.12)",
                        border: "1px solid rgba(199,141,107,0.2)",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: "#C4704E",
                          lineHeight: 1,
                        }}
                      >
                        451+
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-accent)",
                          fontSize: "0.65rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#5C4033",
                        }}
                      >
                        Happy Patients
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* Right: Bio text */}
              <AnimatedSection>
                <motion.div variants={slideInFromRight}>
                  <motion.p
                    variants={fadeInUp}
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#C4704E",
                      marginBottom: "1rem",
                    }}
                  >
                    About the Doctor
                  </motion.p>

                  <motion.h2
                    variants={fadeInUp}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 600,
                      fontStyle: "italic",
                      lineHeight: 1.1,
                      color: "#3D2B1F",
                      letterSpacing: "-0.02em",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Dr. Mamta Bhura
                    <br />
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        color: "#C78D6B",
                        letterSpacing: "0",
                      }}
                    >
                      MBBS, MD (Dermatology)
                    </span>
                  </motion.h2>

                  <motion.p
                    variants={fadeInUp}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.75,
                      color: "#5C4033",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {BRAND.doctor.bio}
                  </motion.p>

                  <motion.p
                    variants={fadeInUp}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.75,
                      color: "#5C4033",
                      marginBottom: "1.25rem",
                    }}
                  >
                    After completing her MD Dermatology at IMS BHU, Dr. Bhura
                    spent years sharpening her skills at the Himalayan Institute
                    of Medical Sciences and later at Kaya Skin Clinic in New
                    Delhi - India&apos;s leading chain of advanced dermatology
                    clinics - where she gained mastery in laser technologies,
                    cosmetic injectables, and medical-grade aesthetic protocols.
                  </motion.p>

                  <motion.p
                    variants={fadeInUp}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.75,
                      color: "#5C4033",
                      marginBottom: "2rem",
                    }}
                  >
                    In 2010, she returned to Kanpur to found SKIN@Mantraa - a
                    clinic built on the conviction that patients in Tier-2
                    cities deserve the same world-class dermatological care
                    available in metropolitan India.
                  </motion.p>

                  <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap gap-3"
                  >
                    {BRAND.doctor.memberships.map((m) => (
                      <span
                        key={m}
                        className="px-4 py-1.5 rounded-full text-sm font-medium"
                        style={{
                          fontFamily: "var(--font-accent)",
                          fontSize: "0.8125rem",
                          letterSpacing: "0.06em",
                          color: "#C4704E",
                          border: "1.5px solid rgba(196,112,78,0.3)",
                          background: "rgba(196,112,78,0.06)",
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            3. CAREER TIMELINE (GSAP Horizontal)
        ══════════════════════════════════════════════════ */}
        <HorizontalTimeline />

        {/* ══════════════════════════════════════════════════
            4. PHILOSOPHY SECTION (dark)
        ══════════════════════════════════════════════════ */}
        <section
          className="py-24 lg:py-36 relative overflow-hidden"
          style={{ background: "#2C1810" }}
        >
          {/* Background texture orbs */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #D4A76A 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #C4704E 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <motion.p
                variants={fadeInUp}
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#D4A76A",
                  marginBottom: "0.875rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ opacity: 0.6 }}
                >
                  <path d="M12 22C12 22 17 17 19 13C21 9 19 4 15 4C13 4 12 6 12 6C12 6 11 4 9 4C5 4 3 9 5 13C7 17 12 22 12 22Z" />
                  <path d="M12 22V12" />
                  <path d="M12 12C12 12 15 10 17 7" />
                  <path d="M12 12C12 12 9 10 7 7" />
                </svg>
                My Philosophy
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#FDF6EC",
                  letterSpacing: "-0.02em",
                }}
              >
                Why I Practice
              </motion.h2>
            </AnimatedSection>

            <AnimatedSection>
              <motion.p
                variants={fadeInUp}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.8,
                  color: "rgba(253,246,236,0.72)",
                  marginBottom: "1.5rem",
                }}
              >
                Medicine, for me, has always been about the person sitting
                across the table - not the condition they carry. Every patient
                who walks into SKIN@Mantraa comes with a story, an insecurity,
                or a hope. My responsibility is to honour that with an honest
                assessment and a plan that truly serves their skin&apos;s
                long-term health, not just the next appointment.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.8,
                  color: "rgba(253,246,236,0.72)",
                  marginBottom: "1.5rem",
                }}
              >
                I chose to return to Kanpur because I believe world-class
                dermatology should not be the exclusive privilege of those who
                can travel to Delhi or Mumbai. The science is the same, the
                standards must be the same, and the respect for every patient
                must be absolute - regardless of city or background.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.8,
                  color: "rgba(253,246,236,0.72)",
                  marginBottom: "3rem",
                }}
              >
                That philosophy drives every consultation, every treatment
                choice, and every follow-up. I will never recommend a procedure
                you don&apos;t need. I will always tell you what is realistic.
                That honesty is the foundation SKIN@Mantraa is built on.
              </motion.p>

              {/* Pull quote */}
              <motion.blockquote
                variants={scaleIn}
                className="relative text-center px-8 py-10 rounded-3xl"
                style={{
                  background: "rgba(212,167,106,0.08)",
                  border: "1px solid rgba(212,167,106,0.2)",
                }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl leading-none"
                  style={{ color: "#D4A76A", opacity: 0.4 }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    fontStyle: "italic",
                    fontWeight: 500,
                    color: "#D4A76A",
                    lineHeight: 1.4,
                  }}
                >
                  I believe every patient deserves a doctor who tells the truth
                  - not just what they want to hear.
                </p>
                <footer
                  className="mt-4"
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(253,246,236,0.45)",
                  }}
                >
                  - Dr. Mamta Bhura
                </footer>
              </motion.blockquote>
            </AnimatedSection>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            5. CREDENTIALS & MEMBERSHIPS
        ══════════════════════════════════════════════════ */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection className="mb-16">
              <motion.p
                variants={fadeInUp}
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C4704E",
                  marginBottom: "0.875rem",
                }}
              >
                Qualifications
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#3D2B1F",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.5rem",
                }}
              >
                Credentials & Memberships
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.0625rem",
                  color: "#5C4033",
                  maxWidth: "500px",
                  lineHeight: 1.65,
                }}
              >
                A career built on rigorous training, continuous learning, and
                active participation in India&apos;s premier dermatology bodies.
              </motion.p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Credentials */}
              <AnimatedSection>
                <motion.h3
                  variants={fadeInUp}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#3D2B1F",
                    marginBottom: "1.5rem",
                    paddingBottom: "0.75rem",
                    borderBottom: "1px solid rgba(199,141,107,0.2)",
                  }}
                >
                  Academic Credentials
                </motion.h3>

                <div className="space-y-5">
                  {[
                    {
                      degree: "MBBS",
                      institution:
                        "Institute of Medical Sciences, BHU, Varanasi",
                      year: "1998",
                      note: "Bachelor of Medicine & Bachelor of Surgery",
                      url: "https://www.bhu.ac.in/Site/UnitHomeTemplate/1_4_12_Institute-of-Medical-Sciences-Home",
                    },
                    {
                      degree: "MD (Dermatology)",
                      institution:
                        "Institute of Medical Sciences, BHU, Varanasi",
                      year: "2001",
                      note: "Specialisation in Dermatology, Venereology & Leprosy",
                      url: "https://www.bhu.ac.in/Site/UnitHomeTemplate/1_4_12_Institute-of-Medical-Sciences-Home",
                    },
                  ].map((cred) => (
                    <motion.a
                      href={cred.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={cred.degree}
                      variants={fadeInUp}
                      className="flex gap-5 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 block"
                      style={{
                        background: "rgba(245,230,211,0.4)",
                        border: "1px solid rgba(199,141,107,0.12)",
                        boxShadow: "0 4px 12px rgba(61,43,31,0)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 8px 24px rgba(61,43,31,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 4px 12px rgba(61,43,31,0)";
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            color: "white",
                            letterSpacing: "0.05em",
                            textAlign: "center",
                          }}
                        >
                          {cred.year}
                        </span>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            color: "#3D2B1F",
                            lineHeight: 1.2,
                          }}
                        >
                          {cred.degree}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.875rem",
                            color: "#C4704E",
                            marginTop: "2px",
                          }}
                        >
                          {cred.institution}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.8125rem",
                            color: "#5C4033",
                            marginTop: "4px",
                            opacity: 0.8,
                          }}
                        >
                          {cred.note}
                        </p>
                      </div>
                    </motion.a>
                  ))}

                  {/* Research / publications placeholder */}
                  <motion.div
                    variants={fadeInUp}
                    className="p-5 rounded-2xl"
                    style={{
                      background: "rgba(248,232,224,0.5)",
                      border: "1px solid rgba(199,141,107,0.12)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 mt-0.5 w-2 h-2 rounded-full"
                        style={{ background: "#C78D6B", marginTop: "8px" }}
                      />
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "#3D2B1F",
                          }}
                        >
                          Clinical Research & Publications
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.875rem",
                            color: "#5C4033",
                            lineHeight: 1.65,
                            marginTop: "4px",
                          }}
                        >
                          Dr. Bhura has contributed to clinical research on
                          Indian skin phototypes and the efficacy of Nd-YAG
                          laser protocols for melasma in South Asian patients.
                          Details of published work available on request.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>

              {/* Memberships */}
              <AnimatedSection>
                <motion.h3
                  variants={fadeInUp}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#3D2B1F",
                    marginBottom: "1.5rem",
                    paddingBottom: "0.75rem",
                    borderBottom: "1px solid rgba(199,141,107,0.2)",
                  }}
                >
                  Professional Memberships
                </motion.h3>

                <div className="space-y-5">
                  {MEMBERSHIPS.map((m) => (
                    <motion.a
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={m.abbr}
                      variants={fadeInUp}
                      className="p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 block"
                      style={{
                        background: "rgba(245,230,211,0.4)",
                        border: "1px solid rgba(199,141,107,0.12)",
                        boxShadow: "0 4px 12px rgba(61,43,31,0)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 8px 24px rgba(61,43,31,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 4px 12px rgba(61,43,31,0)";
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            fontFamily: "var(--font-accent)",
                            letterSpacing: "0.08em",
                            color: "white",
                            background:
                              "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)",
                          }}
                        >
                          {m.abbr}
                        </span>
                        <p
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "#3D2B1F",
                            lineHeight: 1.25,
                          }}
                        >
                          {m.name}
                        </p>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.875rem",
                          color: "#5C4033",
                          lineHeight: 1.6,
                        }}
                      >
                        {m.description}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            6. CTA SECTION
        ══════════════════════════════════════════════════ */}
        <section
          className="py-20 lg:py-28"
          style={{
            background:
              "linear-gradient(135deg, #F5E6D3 0%, #FDF6EC 50%, #F8E8E0 100%)",
          }}
        >
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection>
              <motion.p
                variants={fadeInUp}
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C4704E",
                  marginBottom: "0.875rem",
                }}
              >
                Begin Your Journey
              </motion.p>

              <motion.h2
                variants={fadeInUp}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#3D2B1F",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  marginBottom: "1.25rem",
                }}
              >
                Ready to Transform
                <br />
                Your Skin?
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.0625rem",
                  color: "#5C4033",
                  lineHeight: 1.7,
                  marginBottom: "2.5rem",
                }}
              >
                Book a consultation with Dr. Mamta Bhura and take the first step
                toward the skin you deserve - with honesty, expertise, and
                genuine care guiding every decision.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link href="/contact" className="btn-primary">
                  Book Appointment
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
                <Link href="/services" className="btn-ghost">
                  Explore Treatments
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
