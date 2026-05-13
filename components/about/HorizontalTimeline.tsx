"use client";

import { useRef } from "react";

const TIMELINE = [
  {
    year: "1998",
    title: "MBBS - Institute of Medical Sciences, BHU",
    description:
      "Completed her Bachelor of Medicine and Bachelor of Surgery from one of India's foremost medical institutions.",
  },
  {
    year: "2001",
    title: "MD Dermatology - IMS BHU",
    description:
      "Specialised in Dermatology at IMS BHU, mastering the diagnosis and management of complex skin disorders.",
  },
  {
    year: "2001–2005",
    title: "Consultant, Himalayan Institute",
    description:
      "Served as a Consultant Dermatologist at the renowned Himalayan Institute across a diverse patient population.",
  },
  {
    year: "2005–2010",
    title: "Senior Consultant, Kaya Skin Clinic",
    description:
      "Joined Kaya Skin Clinic in New Delhi as a Senior Consultant, gaining deep expertise in advanced cosmetic dermatology.",
  },
  {
    year: "2010",
    title: "Founded SKIN@Mantraa",
    description:
      "Returned to Kanpur to establish SKIN@Mantraa - offering honest advice, world-class treatments, and genuine care.",
  },
  {
    year: "Present",
    title: "451+ Patients · 28+ Treatments",
    description:
      "Continues to lead SKIN@Mantraa with a commitment to clinical excellence.",
  },
];

export default function HorizontalTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section
      style={{ background: "#F5E6D3", padding: "6rem 0" }}
      aria-label="Dr. Mamta Bhura's career timeline"
    >
      {/* Header */}
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1.5rem 3rem",
        }}
      >
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

      {/* Scroll track - native CSS scroll-snap */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "3rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2))",
          paddingRight: "max(1.5rem, calc((100vw - 80rem) / 2))",
          paddingBottom: "1.5rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="hide-scrollbar"
      >
        {TIMELINE.map((item, idx) => (
          <div
            key={idx}
            style={{
              width: "300px",
              flexShrink: 0,
              scrollSnapAlign: "start",
              position: "relative",
            }}
          >
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

            {/* Year badge */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
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
