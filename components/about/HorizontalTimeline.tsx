"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE = [
  {
    year: "1998",
    title: "MBBS — Institute of Medical Sciences, BHU",
    description: "Completed her Bachelor of Medicine and Bachelor of Surgery from one of India's foremost medical institutions.",
  },
  {
    year: "2001",
    title: "MD Dermatology — IMS BHU",
    description: "Specialised in Dermatology at IMS BHU, mastering the diagnosis and management of complex skin disorders.",
  },
  {
    year: "2001–2005",
    title: "Consultant, Himalayan Institute",
    description: "Served as a Consultant Dermatologist at the renowned Himalayan Institute across a diverse patient population.",
  },
  {
    year: "2005–2010",
    title: "Senior Consultant, Kaya Skin Clinic",
    description: "Joined Kaya Skin Clinic in New Delhi as a Senior Consultant, gaining deep expertise in advanced cosmetic dermatology.",
  },
  {
    year: "2010",
    title: "Founded SKIN@Mantraa",
    description: "Returned to Kanpur to establish SKIN@Mantraa — offering honest advice, world-class treatments, and genuine care.",
  },
  {
    year: "Present",
    title: "451+ Patients · 28+ Treatments",
    description: "Continues to lead SKIN@Mantraa with a commitment to clinical excellence.",
  },
];

export default function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !trackRef.current) return;

    const totalWidth = trackRef.current.scrollWidth - window.innerWidth + 400; // Extra padding

    gsap.to(trackRef.current, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "center center",
        end: () => `+=${totalWidth}`,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-24 lg:py-32 overflow-hidden"
      style={{ background: "#F5E6D3", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full mb-16 shrink-0">
        <p
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C4704E",
            marginBottom: "0.875rem",
          }}
        >
          A Journey of Excellence
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#3D2B1F",
            letterSpacing: "-0.02em",
          }}
        >
          26 Years in the Making
        </h2>
      </div>

      {/* Horizontal Track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "4rem",
          paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2))",
          paddingRight: "4rem",
          width: "max-content",
        }}
      >
        {TIMELINE.map((item, idx) => (
          <div key={idx} style={{ width: "320px", flexShrink: 0, position: "relative" }}>
            {/* Connecting line */}
            {idx < TIMELINE.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  top: "2rem",
                  left: "4rem",
                  width: "100%",
                  height: "2px",
                  background: "rgba(199,141,107,0.25)",
                  zIndex: 0,
                }}
              />
            )}
            
            <div
              className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6"
              style={{
                background:
                  idx === TIMELINE.length - 1
                    ? "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)"
                    : "#FDF6EC",
                border:
                  idx === TIMELINE.length - 1
                    ? "none"
                    : "2px solid rgba(199,141,107,0.4)",
                boxShadow: "0 4px 16px rgba(61,43,31,0.08)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: idx === TIMELINE.length - 1 ? "white" : "#C4704E",
                  letterSpacing: "0.04em",
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                {item.year.includes("–") ? (
                  <>
                    {item.year.split("–")[0]}
                    <br />–<br />
                    {item.year.split("–")[1]}
                  </>
                ) : (
                  item.year
                )}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#3D2B1F",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "#5C4033",
                lineHeight: 1.6,
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
