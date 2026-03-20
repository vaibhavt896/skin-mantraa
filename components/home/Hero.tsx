"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        paddingBottom: "2rem",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 30% 50%, #F8E8E0 0%, #FDF6EC 50%, #F5E6D3 100%)",
      }}
    >
      {/* ── Animated gradient blobs ── */}
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          style={blob.style}
          animate={blob.animate}
          transition={blob.transition}
          aria-hidden="true"
        />
      ))}

      {/* ── Main content grid ── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-center"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(5rem, 10vh, 7rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 6vh, 5rem)",
          gap: "clamp(2rem, 4vw, 4rem)",
        }}
      >
        {/* ─── LEFT: Text content ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* 1. Label badge */}
          <motion.div custom={0} variants={heroTextReveal}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.38rem 1.1rem 0.38rem 0.42rem",
                border: "1.5px solid rgba(212,167,106,0.5)",
                borderRadius: "100px",
                background: "linear-gradient(135deg, rgba(212,167,106,0.11) 0%, rgba(199,141,107,0.04) 100%)",
                fontFamily: "var(--font-accent)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase" as const,
                color: "#C78D6B",
                boxShadow: "0 2px 18px rgba(212,167,106,0.16), inset 0 1px 0 rgba(255,255,255,0.55)",
              }}
            >
              {/* Gold medal icon */}
              <span
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(196,112,78,0.4)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.3L12 17l-6.2 4.2 2.4-7.3L2 9.4h7.6L12 2z" fill="white" />
                </svg>
              </span>
              BHU Gold Medallist
              <span style={{ opacity: 0.4, fontWeight: 300 }}>·</span>
              Kanpur&apos;s Trusted Skin Expert
              <span style={{ opacity: 0.4, fontWeight: 300 }}>·</span>
              26+ Years
            </span>
          </motion.div>

          {/* 2. Main headline */}
          <motion.div custom={1} variants={heroTextReveal}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "#3D2B1F",
                margin: 0,
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
              fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              color: "#5C4033",
              lineHeight: 1.65,
              maxWidth: "540px",
              margin: 0,
            }}
          >
            {BRAND.doctor.name}
            {" — BHU-trained Dermatologist & Cosmetologist | 26 Years of Transforming Skin in Kanpur"}
          </motion.p>

          {/* 4. CTA Buttons */}
          <motion.div
            custom={3}
            variants={heroTextReveal}
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              gap: "0.875rem",
              alignItems: "center",
            }}
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

          {/* 5. Trust micro-bar */}
          <motion.div
            custom={4}
            variants={heroTextReveal}
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              alignItems: "center",
              gap: "0.5rem",
              paddingTop: "0.5rem",
            }}
          >
            {[
              `${TRUST_STATS[1].value}${TRUST_STATS[1].suffix} Happy Patients`,
              `${TRUST_STATS[0].value}${TRUST_STATS[0].suffix} Years Experience`,
              "BHU Gold Standard",
            ].map((item, i, arr) => (
              <span
                key={item}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#5C4033",
                    letterSpacing: "0.03em",
                  }}
                >
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#C78D6B",
                      opacity: 0.7,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column: invisible spacer so text stays in left half */}
        <div className="hidden lg:block" aria-hidden="true" />
      </div>

      {/* ══════════════════════════════════════════════════════
          RIGHT: Doctor image — full section height, no frame
      ══════════════════════════════════════════════════════ */}
      <div
        className="hidden lg:block"
        style={{
          position: "absolute",
          left: "54%",
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 5,
          pointerEvents: "none",
        }}
      >
        {/* ── Aurora orb 1: deep warm gold — pulses behind the doctor ── */}
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.78, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "18%", left: "10%",
            width: "80%", height: "60%",
            background:
              "radial-gradient(ellipse, rgba(196,112,78,0.42) 0%, rgba(212,167,106,0.18) 48%, transparent 76%)",
            filter: "blur(64px)",
            borderRadius: "50%",
          }}
        />
        {/* ── Aurora orb 2: rosy blush — top-right rim light ── */}
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.48, 0.25], x: [0, 18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "2%", right: "-5%",
            width: "55%", height: "45%",
            background:
              "radial-gradient(ellipse, rgba(248,195,175,0.55) 0%, transparent 72%)",
            filter: "blur(48px)",
            borderRadius: "50%",
          }}
        />
        {/* ── Aurora orb 3: amber — foot-level ground bloom ── */}
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.22, 1], opacity: [0.22, 0.46, 0.22] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            position: "absolute",
            bottom: "0%", left: "5%",
            width: "70%", height: "30%",
            background:
              "radial-gradient(ellipse, rgba(212,167,106,0.45) 0%, transparent 72%)",
            filter: "blur(56px)",
            borderRadius: "50%",
          }}
        />
        {/* ── Aurora orb 4: cool left-bleed — atmospheric bridge to text ── */}
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.18, 0.34, 0.18], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{
            position: "absolute",
            top: "30%", left: "-15%",
            width: "45%", height: "40%",
            background:
              "radial-gradient(ellipse, rgba(248,232,224,0.6) 0%, transparent 75%)",
            filter: "blur(44px)",
            borderRadius: "50%",
          }}
        />

        {/* ── Outer orbit ring — clockwise ── */}
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            width: "560px", height: "740px",
            transform: "translate(-50%, -50%)",
            borderRadius: "42% 58% 52% 48% / 46% 44% 56% 54%",
            border: "1px solid rgba(196,112,78,0.14)",
          }}
        />
        {/* ── Inner orbit ring — counter-clockwise ── */}
        <motion.div
          aria-hidden="true"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            width: "380px", height: "520px",
            transform: "translate(-50%, -50%)",
            borderRadius: "58% 42% 48% 52% / 54% 46% 54% 46%",
            border: "1px solid rgba(212,167,106,0.08)",
          }}
        />

        {/* ════════════════════════════════
            THE DOCTOR IMAGE — no frame
        ════════════════════════════════ */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            /* Fade in from the left edge so image melts into background */
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.55) 14%, black 30%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.55) 14%, black 30%)",
          }}
        >
          <Image
            src="/images/Dr. Mamta Bhura.png"
            alt="Dr. Mamta Bhura — Dermatologist & Cosmetologist at SKIN@Mantraa, Kanpur"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 0px"
            style={{
              objectFit: "cover",
              objectPosition: "center 8%",
              /* multiply erases the white photo background on this cream site */
              mixBlendMode: "multiply",
            }}
          />
        </motion.div>

        {/* ── Diagonal shimmer sweep — every 7 s ── */}
        <motion.div
          aria-hidden="true"
          animate={{ x: ["-120%", "120%"] }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
            repeatDelay: 7,
            ease: [0.4, 0, 0.6, 1],
          }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(110deg, transparent 30%, rgba(255,243,225,0.28) 50%, transparent 70%)",
            zIndex: 3,
          }}
        />

        {/* ── Bokeh particles ── */}
        {premiumParticles.map((p, i) => (
          <motion.div
            key={i}
            aria-hidden="true"
            animate={{
              y: [0, -(p.size * 4), 0],
              opacity: [0.28, 0.68, 0.28],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + p.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
            style={{
              position: "absolute",
              left: p.left, top: p.top,
              width: `${p.size}px`, height: `${p.size}px`,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, #D4A76A 0%, rgba(199,141,107,0.2) 100%)",
              boxShadow: `0 0 ${p.glow}px rgba(212,167,106,0.8), 0 0 ${p.glow * 2.5}px rgba(196,112,78,0.18)`,
              zIndex: 4,
            }}
          />
        ))}

        {/* ── Badge: IMS BHU — drops in from top ── */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            top: "11%", right: "8%",
            background: "rgba(253,246,236,0.92)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(199,141,107,0.28)",
            borderRadius: "18px",
            padding: "0.8rem 1.1rem",
            boxShadow:
              "0 24px 56px rgba(60,43,31,0.14), inset 0 1px 0 rgba(255,255,255,0.7)",
            display: "flex", alignItems: "center", gap: "0.65rem",
            zIndex: 10,
            pointerEvents: "auto",
          }}
        >
          <div style={{
            width: "36px", height: "36px", borderRadius: "10px",
            background: "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, boxShadow: "0 4px 14px rgba(196,112,78,0.4)",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p style={{ margin: 0, fontFamily: "var(--font-accent)", fontSize: "0.74rem", fontWeight: 700, color: "#3D2B1F", letterSpacing: "0.05em" }}>IMS BHU</p>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "0.67rem", color: "#5C4033", marginTop: "2px" }}>MD Dermatology</p>
          </div>
        </motion.div>

        {/* ── Badge: 26+ Years — rises from bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            bottom: "13%", left: "8%",
            background: "rgba(44,24,16,0.88)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: "18px",
            padding: "0.85rem 1.2rem",
            boxShadow:
              "0 24px 56px rgba(44,24,16,0.32), inset 0 1px 0 rgba(255,255,255,0.06)",
            display: "flex", alignItems: "center", gap: "0.65rem",
            zIndex: 10,
            pointerEvents: "auto",
          }}
        >
          <div style={{
            width: "38px", height: "38px", borderRadius: "10px",
            background: "linear-gradient(135deg, #D4A76A 0%, #C78D6B 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, boxShadow: "0 4px 14px rgba(212,167,106,0.48)",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p style={{ margin: 0, fontFamily: "var(--font-accent)", fontSize: "1.2rem", fontWeight: 700, color: "#D4A76A", lineHeight: 1 }}>26+</p>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "0.68rem", color: "rgba(245,230,211,0.8)", marginTop: "3px" }}>Years of Excellence</p>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <a
        href="/#trust"
        aria-label="Scroll to trust section"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.35rem",
          zIndex: 10,
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            color: "rgba(92,64,51,0.6)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 8l5 5 5-5"
              stroke="#C78D6B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </a>
    </section>
  );
}
