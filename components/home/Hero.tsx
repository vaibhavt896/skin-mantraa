"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { BRAND, TRUST_STATS } from "@/lib/constants";
import { staggerContainer, heroTextReveal } from "@/lib/animations";

const EASE_IN = [0.7, 0, 1, 0.45] as [number, number, number, number];

const PHRASE_HOLD = 3000;
const BRAND_HOLD  = 3200;
const EXIT_MS     = 360;
const INIT_DELAY  = 600;

const STAGGER  = 0.032;
const WORD_GAP = 0.055;

const BEST_START = 3 * STAGGER + WORD_GAP;
const SPEC_START = (3 + 4) * STAGGER + 2 * WORD_GAP;

const ACCENT: CSSProperties = {
  background: "linear-gradient(135deg, #8C3510 0%, #C85A2A 45%, #A84020 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontStyle: "italic",
};

const ACCENT_BRAND: CSSProperties = {
  background:
    "linear-gradient(110deg, #8C3510 0%, #C85A2A 20%, #E8A060 48%, #C85A2A 72%, #8C3510 100%)",
  backgroundSize: "260% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontStyle: "italic",
  letterSpacing: "-0.03em",
  animation: "hero-shimmer 3.2s linear infinite",
};

type Phase = "idle" | "phrase" | "out" | "brand";

function Word({
  text,
  style,
  startDelay = 0,
}: {
  text: string;
  style: CSSProperties;
  startDelay?: number;
}) {
  return (
    <motion.span
      exit={{ opacity: 0, y: -20, transition: { duration: 0.18, ease: EASE_IN } }}
      style={{ display: "inline-flex" }}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring" as const,
            stiffness: 420,
            damping: 44,
            delay: startDelay + i * STAGGER,
          }}
          style={{ display: "inline-block", ...style }}
        >
          {ch}
        </motion.span>
      ))}
    </motion.span>
  );
}

function CinematicHeadline() {
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const ids: ReturnType<typeof setTimeout>[] = [];
    const after = (ms: number, fn: () => void) => { ids.push(setTimeout(fn, ms)); };

    function loop() {
      setPhase("phrase");
      after(PHRASE_HOLD, () => {
        setPhase("out");
        after(EXIT_MS, () => {
          setPhase("brand");
          after(BRAND_HOLD, () => {
            setPhase("out");
            after(EXIT_MS, loop);
          });
        });
      });
    }

    ids.push(setTimeout(loop, INIT_DELAY));
    return () => ids.forEach(clearTimeout);
  }, []);

  const showPhrase = phase === "phrase";
  const showBrand  = phase === "brand";

  return (
    <>
      <span style={{ display: "block" }}>Your Skin</span>
      <span style={{ display: "block" }}>Deserves</span>
      <span
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          gap: "0.28em",
          minHeight: "1.12em",
        }}
      >
        <AnimatePresence>
          {showPhrase ? <Word key="the"        text="The"         style={ACCENT}        startDelay={0}          /> : null}
          {showPhrase ? <Word key="best"       text="Best"        style={ACCENT}        startDelay={BEST_START} /> : null}
          {showPhrase ? <Word key="specialist" text="Specialist"  style={ACCENT}        startDelay={SPEC_START} /> : null}
          {showBrand  ? <Word key="brand"      text="SkinMantraa" style={ACCENT_BRAND}  startDelay={0}          /> : null}
        </AnimatePresence>
      </span>
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] lg:h-[100svh] flex flex-col lg:flex-row lg:items-center overflow-hidden bg-[#E8D9CE]"
    >
      {/* ── Background Video ── */}
      {/* On desktop: absolute right-0 w-[50%] z-0 h-full */}
      {/* On mobile/tablet: absolute inset-0 w-full h-full z-0 */}
      <div className="absolute inset-0 lg:inset-y-0 lg:right-0 w-full lg:w-[50%] h-full z-0">
        <Image
          src="/optimized/healthy-skin-poster.webp"
          alt="Healthy glowing skin – dermatology results at SKIN@Mantraa, Kanpur"
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover lg:hidden"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/optimized/healthy-skin-poster.webp"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(1.02) saturate(0.95)" }}
        >
          <source src="/optimized/healthy-skin-hero-1080p-h265.mp4" type='video/mp4; codecs="hvc1"' />
          <source src="/optimized/healthy-skin-hero-1080p.webm" type="video/webm" />
          <source src="/optimized/healthy-skin-hero-1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Light-bleed overlay (desktop only) ── */}
      <div
        className="hidden lg:block absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(253,246,236,0.8) 0%, transparent 60%)",
        }}
      />

      {/* ── Soft fade overlay (mobile/tablet only) ── */}
      <div
        className="block lg:hidden absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(253, 246, 236, 0.96) 0%, rgba(253, 246, 236, 0.90) 50%, rgba(253, 246, 236, 0.45) 100%)",
        }}
      />

      {/* ── Main content ── */}
      <div
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[clamp(1rem,5vw,6rem)] pt-24 pb-12 lg:py-[clamp(1rem,5vh,3rem)]"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            maxWidth: "min(100%, 580px)",
          }}
        >
          {/* 1. Trust badge */}
          <motion.div custom={0} variants={heroTextReveal}>
            <span
              className="hero-trust-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.45rem 1.25rem 0.45rem 0.45rem",
                border: "1.5px solid rgba(253,246,236,0.3)",
                borderRadius: "100px",
                background: "rgba(253,246,236,0.15)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                fontFamily: "var(--font-accent)",
                fontSize: "clamp(0.65rem,2vw,0.75rem)",
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
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#C4704E 0%,#D4A76A 100%)",
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

          {/* 2. Headline — bold editorial stack, matches reference scale */}
          <motion.div custom={1} variants={heroTextReveal}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5.2vw, 4.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "#080401",
                margin: 0,
              }}
            >
              <CinematicHeadline />
            </h1>
          </motion.div>

          {/* 3. Sub-headline */}
          <motion.p
            custom={2}
            variants={heroTextReveal}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.05rem,1.8vw,1.22rem)",
              color: "#4A3728",
              lineHeight: 1.62,
              maxWidth: "580px",
              margin: 0,
              fontWeight: 500,
            }}
          >
            {BRAND.doctor.name}
            {". Expert dermatological care designed for Indian skin. 26 years of excellence in Kanpur."}
          </motion.p>

          {/* 4. CTAs */}
          <motion.div
            custom={3}
            variants={heroTextReveal}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mt-2"
          >
            <Link href="/contact" className="btn-primary justify-center sm:justify-start" style={{ padding: "1rem 2.25rem" }}>
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
              className="btn-ghost justify-center sm:justify-start"
              style={{
                padding: "1rem 2.25rem",
                background: "rgba(253,246,236,0.2)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1.5px solid rgba(199,141,107,0.3)",
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
              <span key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
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
        className="hidden lg:flex"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
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
