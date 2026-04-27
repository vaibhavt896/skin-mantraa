"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { BRAND, TRUST_STATS } from "@/lib/constants";
import { staggerContainer, heroTextReveal } from "@/lib/animations";

// ---------- Looping typewriter — cycles through phrases ----------
const TYPEWRITER_PHRASES = ["a Specialist.", "Flawless Skin.", "Expert Care."];

const TYPE_SPEED   = 72;   // ms per char typed
const DELETE_SPEED = 38;   // ms per char deleted (faster = snappier backspace)
const HOLD_MS      = 1800; // pause after fully typed before deleting
const PAUSE_MS     = 420;  // pause after fully deleted before next phrase

function TypewriterText({ startDelay = 1.6 }: { startDelay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [started, setStarted] = useState(false);

  // Always-on cursor blink once started
  useEffect(() => {
    if (!started) return;
    const id = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, [started]);

  // Main loop
  useEffect(() => {
    let cancelled = false;
    let phraseIdx = 0;

    function sleep(ms: number) {
      return new Promise<void>((res) => setTimeout(res, ms));
    }

    async function run() {
      await sleep(startDelay * 1000);
      if (cancelled) return;
      setStarted(true);

      while (!cancelled) {
        const phrase = TYPEWRITER_PHRASES[phraseIdx % TYPEWRITER_PHRASES.length];

        // — Type forward —
        for (let i = 1; i <= phrase.length; i++) {
          if (cancelled) return;
          setDisplayed(phrase.slice(0, i));
          await sleep(TYPE_SPEED);
        }

        await sleep(HOLD_MS);

        // — Delete backward —
        for (let i = phrase.length - 1; i >= 0; i--) {
          if (cancelled) return;
          setDisplayed(phrase.slice(0, i));
          await sleep(DELETE_SPEED);
        }

        await sleep(PAUSE_MS);
        phraseIdx++;
      }
    }

    run();
    return () => { cancelled = true; };
  }, [startDelay]);

  return (
    <em
      className="text-gradient"
      style={{ fontStyle: "italic", fontWeight: 700, whiteSpace: "nowrap" }}
    >
      {displayed}
      <motion.span
        aria-hidden="true"
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        style={{
          display: "inline-block",
          width: "3px",
          height: "0.78em",
          background: "linear-gradient(180deg, #C4704E 0%, #D4A76A 100%)",
          borderRadius: "2px",
          marginLeft: "3px",
          verticalAlign: "middle",
        }}
      />
    </em>
  );
}

// ---------- Floating blob shapes ----------
// `ease` must be typed as const so TypeScript narrows it to the Framer Motion
// Easing literal union rather than the broad `string` type.
const blobs = [
  {
    id: 1,
    style: {
      position: "absolute" as const,
      top: "10%",
      left: "-8%",
      width: "420px",
      height: "420px",
      background:
        "radial-gradient(ellipse, rgba(248,232,224,0.55) 0%, rgba(245,230,211,0.2) 70%, transparent 100%)",
      borderRadius: "62% 38% 70% 30% / 45% 55% 45% 55%",
      filter: "blur(40px)",
    },
    animate: { x: [0, 18, 0], y: [0, -22, 0], rotate: [0, 8, 0] },
    transition: { duration: 12, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    id: 2,
    style: {
      position: "absolute" as const,
      bottom: "5%",
      right: "-6%",
      width: "360px",
      height: "360px",
      background:
        "radial-gradient(ellipse, rgba(245,230,211,0.5) 0%, rgba(248,232,224,0.2) 70%, transparent 100%)",
      borderRadius: "38% 62% 30% 70% / 55% 45% 55% 45%",
      filter: "blur(36px)",
    },
    animate: { x: [0, -15, 0], y: [0, 20, 0], rotate: [0, -6, 0] },
    transition: { duration: 14, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    id: 3,
    style: {
      position: "absolute" as const,
      top: "40%",
      left: "38%",
      width: "260px",
      height: "260px",
      background:
        "radial-gradient(ellipse, rgba(212,167,106,0.08) 0%, transparent 70%)",
      borderRadius: "50% 50% 60% 40% / 60% 40% 60% 40%",
      filter: "blur(28px)",
    },
    animate: { x: [0, 10, 0], y: [0, -12, 0] },
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" as const },
  },
];

// ---------- Premium bokeh particles ----------
const premiumParticles = [
  { left: "14%", top: "18%", size: 6,  delay: 0,   glow: 14 },
  { left: "72%", top: "12%", size: 4,  delay: 0.7, glow: 9  },
  { left: "88%", top: "38%", size: 8,  delay: 1.4, glow: 18 },
  { left: "22%", top: "58%", size: 5,  delay: 0.3, glow: 11 },
  { left: "62%", top: "72%", size: 3,  delay: 1.9, glow: 7  },
  { left: "42%", top: "28%", size: 7,  delay: 2.2, glow: 16 },
  { left: "80%", top: "62%", size: 4,  delay: 0.9, glow: 9  },
  { left: "8%",  top: "44%", size: 5,  delay: 1.6, glow: 11 },
  { left: "52%", top: "86%", size: 6,  delay: 2.5, glow: 13 },
  { left: "92%", top: "22%", size: 3,  delay: 0.5, glow: 7  },
  { left: "32%", top: "76%", size: 9,  delay: 1.1, glow: 20 },
  { left: "68%", top: "48%", size: 4,  delay: 3.0, glow: 9  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const doctorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !doctorRef.current) return;

    // Parallax depth on doctor portrait
    gsap.to(doctorRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#E8D9CE", // Updated brand background color
      }}
    >
      {/* ── Background Video Container ── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[50%] z-0">
        <video
          src="/hero-video/Healthy%20Skin%204K%20Video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ 
            filter: "brightness(1.02) saturate(0.95)"
          }}
        />
      </div>

      {/* ── Subtle light-bleed overlay ── */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none"
        style={{ 
          background: "radial-gradient(circle at 20% 50%, rgba(253, 246, 236, 0.8) 0%, transparent 60%)"
        }}
      />

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "clamp(5rem, 10vh, 7rem) clamp(1.5rem, 5vw, 6rem)",
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", flexDirection: "column", gap: "1.75rem", maxWidth: "800px" }}
        >
          {/* 1. Label badge */}
          <motion.div custom={0} variants={heroTextReveal}>
            <span
              className="hero-trust-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.45rem 1.25rem 0.45rem 0.45rem",
                border: "1.5px solid rgba(253, 246, 236, 0.3)",
                borderRadius: "100px",
                background: "rgba(253, 246, 236, 0.15)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                fontFamily: "var(--font-accent)",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "#3D2B1F",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              }}
            >
              <span
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.3L12 17l-6.2 4.2 2.4-7.3L2 9.4h7.6L12 2z" fill="white" />
                </svg>
              </span>
              BHU Gold Medallist · Kanpur&apos;s Trusted Skin Expert
            </span>
          </motion.div>

          {/* 2. Main headline */}
          <motion.div 
            custom={1} 
            variants={heroTextReveal}
            style={{ maxWidth: "650px" }} // Constrain text width
          >
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 6vw, 5.2rem)", // Slightly smaller for better fit
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "#3D2B1F",
                margin: 0,
                textShadow: "0 2px 20px rgba(253, 246, 236, 0.4)",
              }}
            >
              Your Skin Deserves
              <br />
              <TypewriterText />
            </h1>
          </motion.div>

          {/* 3. Subheadline */}
          <motion.p
            custom={2}
            variants={heroTextReveal}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)",
              color: "#4A3728",
              lineHeight: 1.6,
              maxWidth: "600px",
              margin: 0,
              fontWeight: 500,
            }}
          >
            {BRAND.doctor.name}
            {" — Experience expert dermatological care designed for Indian skin. 26 years of excellence in Kanpur."}
          </motion.p>

          {/* 4. CTA Buttons */}
          <motion.div
            custom={3}
            variants={heroTextReveal}
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              gap: "1rem",
              alignItems: "center",
              marginTop: "0.5rem",
            }}
          >
            <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2.25rem" }}>
              Book Appointment
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link 
              href="/services" 
              className="btn-ghost"
              style={{ 
                padding: "1rem 2.25rem",
                background: "rgba(253, 246, 236, 0.2)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1.5px solid rgba(199, 141, 107, 0.3)"
              }}
            >
              Explore Treatments
            </Link>
          </motion.div>

          {/* 5. Trust micro-bar */}
          <motion.div
            custom={4}
            variants={heroTextReveal}
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              alignItems: "center",
              gap: "0.75rem",
              paddingTop: "1rem",
            }}
          >
            {[
              `${TRUST_STATS[1].value}${TRUST_STATS[1].suffix} Patients`,
              `${TRUST_STATS[0].value}${TRUST_STATS[0].suffix} Years`,
              "BHU Gold Standard",
            ].map((item, i, arr) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#3D2B1F",
                  letterSpacing: "0.05em",
                }}>
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C78D6B", opacity: 0.6 }} />
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <a
        href="/#trust"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 10,
          textDecoration: "none",
        }}
      >
        <span style={{
          fontFamily: "var(--font-accent)",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "#3D2B1F",
          fontWeight: 600,
        }}>
          Explore
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
            <path d="M5 8l5 5 5-5" stroke="#3D2B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </a>
    </section>
  );
}
