"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND, TRUST_STATS } from "@/lib/constants";
import { staggerContainer, heroTextReveal } from "@/lib/animations";

// ---------- Looping typewriter - cycles through phrases ----------
const TYPEWRITER_PHRASES = ["a Specialist.", "Flawless Skin.", "Expert Care."];

const TYPE_SPEED = 72; // ms per char typed
const DELETE_SPEED = 38; // ms per char deleted (faster = snappier backspace)
const HOLD_MS = 1800; // pause after fully typed before deleting
const PAUSE_MS = 420; // pause after fully deleted before next phrase

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
        const phrase =
          TYPEWRITER_PHRASES[phraseIdx % TYPEWRITER_PHRASES.length];

        // - Type forward -
        for (let i = 1; i <= phrase.length; i++) {
          if (cancelled) return;
          setDisplayed(phrase.slice(0, i));
          await sleep(TYPE_SPEED);
        }

        await sleep(HOLD_MS);

        // - Delete backward -
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
    return () => {
      cancelled = true;
    };
  }, [startDelay]);

  return (
    <em
      className="text-gradient"
      style={{
        fontStyle: "italic",
        fontWeight: 700,
        whiteSpace: "normal", // Changed from nowrap to normal for mobile wrap
      }}
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

export default function Hero() {
  return (
    <section
      id="hero"
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
        <Image
          src="/optimized/healthy-skin-poster.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover lg:hidden"
          aria-hidden="true"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/optimized/healthy-skin-poster.webp"
          className="hidden w-full h-full object-cover lg:block"
          style={{
            filter: "brightness(1.02) saturate(0.95)",
          }}
        >
          <source src="/optimized/healthy-skin-hero.webm" type="video/webm" />
          <source src="/optimized/healthy-skin-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Subtle light-bleed overlay ── */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(253, 246, 236, 0.8) 0%, transparent 60%)",
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
          padding: "clamp(4rem, 12vh, 7rem) clamp(1rem, 5vw, 6rem)", // Reduced horizontal padding for mobile
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
            maxWidth: "800px",
          }}
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
                fontSize: "clamp(0.65rem, 2vw, 0.75rem)", // Responsive font size
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "#3D2B1F",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                maxWidth: "100%",
              }}
            >
              <span
                style={{
                  width: "24px", // Slightly smaller icon on small screens
                  height: "24px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.3L12 17l-6.2 4.2 2.4-7.3L2 9.4h7.6L12 2z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="truncate sm:whitespace-normal">
                IMS BHU Trained · Kanpur&apos;s Trusted Skin Expert
              </span>
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
                fontSize: "clamp(2.4rem, 8vw, 5.2rem)", // Slightly smaller min for mobile, larger vw for scaling
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "#3D2B1F",
                margin: 0,
                textShadow: "0 2px 20px rgba(253, 246, 236, 0.4)",
              }}
            >
              Your Skin Deserves
              <br className="hidden sm:block" />
              <span className="sm:inline-block">
                {" "}
                <TypewriterText />
              </span>
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
            {
              " - Experience expert dermatological care designed for Indian skin. 26 years of excellence in Kanpur."
            }
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
            <Link
              href="/contact"
              className="btn-primary"
              style={{ padding: "1rem 2.25rem" }}
            >
              Book Appointment
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
                border: "1.5px solid rgba(199, 141, 107, 0.3)",
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
              "IMS BHU Trained",
            ].map((item, i, arr) => (
              <span
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#3D2B1F",
                    letterSpacing: "0.05em",
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
                      opacity: 0.6,
                    }}
                  />
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <Link
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
        <span
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: "#3D2B1F",
            fontWeight: 600,
          }}
        >
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 8l5 5 5-5"
              stroke="#3D2B1F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </Link>
    </section>
  );
}
