"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BRAND } from "@/lib/constants";
import { slideInFromLeft, slideInFromRight, fadeInUp, staggerContainer } from "@/lib/animations";

// ─── Icons ────────────────────────────────────────────────────────────────────

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
      <path d="M9 1.5C6.515 1.5 4.5 3.515 4.5 6C4.5 9.75 9 16.5 9 16.5C9 16.5 13.5 9.75 13.5 6C13.5 3.515 11.485 1.5 9 1.5Z" stroke="#C78D6B" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(199,141,107,0.1)" />
      <circle cx="9" cy="6" r="1.8" stroke="#C78D6B" strokeWidth="1.3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
      <path d="M3 3.5C3 3.5 4 2 5.5 2C7 2 8 4 8 4L6.5 6C6.5 6 7 7.5 9 9.5C11 11.5 12.5 12 12.5 12L14.5 10.5C14.5 10.5 16 11.5 16 13C16 14.5 14.5 15.5 14.5 15.5C14.5 15.5 12 17 8 13C4 9 3 6 3 6C3 6 2 5 3 3.5Z" stroke="#C78D6B" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(199,141,107,0.1)" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
      <circle cx="9" cy="9" r="7.5" stroke="#C78D6B" strokeWidth="1.4" fill="rgba(199,141,107,0.08)" />
      <path d="M6 7.2C6 7.2 6.2 6 7.2 6C8.2 6 8.8 7.5 8.8 7.5L7.8 8.8C7.8 8.8 8.2 9.8 9.2 10.5C10.2 11.2 11.2 11.2 11.2 11.2L12.5 10.2C12.5 10.2 14 10.8 14 11.8C14 12.8 12.8 13 12.8 13C12.8 13 8.5 13.5 5.5 9.5C5.5 9.5 5 8.4 6 7.2Z" stroke="#C78D6B" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// ─── Animated Pin ─────────────────────────────────────────────────────────────

function AnimatedPin() {
  return (
    <div style={{ position: "relative", display: "inline-flex", alignItems: "flex-end", justifyContent: "center" }}>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ zIndex: 1 }}
      >
        <svg width="36" height="46" viewBox="0 0 36 46" fill="none" aria-hidden="true">
          <path d="M18 2C10.268 2 4 8.268 4 16C4 26 18 44 18 44C18 44 32 26 32 16C32 8.268 25.732 2 18 2Z"
            fill="url(#pinGrad)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          <circle cx="18" cy="16" r="6" fill="rgba(255,255,255,0.9)" />
          <circle cx="18" cy="16" r="3" fill="#C4704E" />
          <defs>
            <linearGradient id="pinGrad" x1="4" y1="2" x2="32" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C4704E" />
              <stop offset="100%" stopColor="#D4A76A" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      {/* Shadow */}
      <motion.div
        aria-hidden="true"
        animate={{ scaleX: [1, 0.7, 1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: "-4px",
          width: "18px", height: "5px", borderRadius: "50%",
          background: "rgba(60,43,31,0.2)",
          filter: "blur(3px)",
        }}
      />
    </div>
  );
}

// ─── Hours Table ──────────────────────────────────────────────────────────────

const HOURS = [
  { days: "Mon – Fri", hours: "11:00 AM – 6:00 PM" },
  { days: "Saturday", hours: "4:00 PM – 8:00 PM" },
  { days: "Sunday", hours: "10:00 AM – 2:00 PM" },
];

function isClinicOpen(): boolean {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1-5=Mon-Fri, 6=Sat
  const h = now.getHours() + now.getMinutes() / 60;
  if (day >= 1 && day <= 5) return h >= 11 && h < 18;
  if (day === 6) return h >= 16 && h < 20;
  if (day === 0) return h >= 10 && h < 14;
  return false;
}

function HoursTable() {
  const [isOpen] = useState(() => isClinicOpen());

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
        <motion.div
          animate={{ scale: isOpen ? [1, 1.3, 1] : 1 }}
          transition={{ duration: 1.5, repeat: isOpen ? Infinity : 0 }}
          style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: isOpen ? "#22c55e" : "#ef4444",
            boxShadow: isOpen ? "0 0 8px rgba(34,197,94,0.5)" : "none",
          }}
          aria-hidden="true"
        />
        <span style={{
          fontFamily: "var(--font-accent)", fontSize: "0.72rem", fontWeight: 600,
          letterSpacing: "0.1em", textTransform: "uppercase" as const,
          color: isOpen ? "#22c55e" : "#ef4444",
        }}>
          {isOpen ? "Open Now" : "Closed Now"}
        </span>
        <span style={{ fontFamily: "var(--font-accent)", fontSize: "0.65rem", color: "#5C4033", opacity: 0.5, marginLeft: "auto" }}>Clinic Hours</span>
      </div>

      <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(199,141,107,0.15)" }}>
        {HOURS.map((row, idx) => (
          <div key={row.days} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0.65rem 0.9rem",
            borderBottom: idx < HOURS.length - 1 ? "1px solid rgba(199,141,107,0.1)" : "none",
            background: idx % 2 === 0 ? "rgba(199,141,107,0.04)" : "transparent",
          }}>
            <span style={{ fontFamily: "var(--font-accent)", fontSize: "0.82rem", fontWeight: 500, color: "#3D2B1F" }}>{row.days}</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#5C4033" }}>{row.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Contact Row ──────────────────────────────────────────────────────────────

function ContactRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      animate={{ x: hov ? 4 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        display: "flex", alignItems: "flex-start", gap: "0.75rem",
        padding: "0.5rem", borderRadius: "8px", cursor: "default",
        background: hov ? "rgba(199,141,107,0.05)" : "transparent",
        transition: "background 0.2s ease",
      }}
    >
      <span>{icon}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.6, color: "#5C4033" }}>
        {children}
      </span>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function LocationCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const whatsappMsg = encodeURIComponent("Hi Dr. Mamta Bhura, I'd like to book an appointment at SKIN@Mantraa.");

  return (
    <section
      ref={sectionRef}
      style={{
        background: "radial-gradient(ellipse at 30% 50%, #F8E8E0 0%, #FDF6EC 50%, #F5E6D3 100%)",
        position: "relative", overflow: "hidden",
      }}
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative circles */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: "320px", height: "320px", borderRadius: "50%",
        border: "1.5px dashed rgba(199,141,107,0.2)", pointerEvents: "none",
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", bottom: "-60px", left: "-60px",
        width: "250px", height: "250px", borderRadius: "50%",
        border: "1px solid rgba(199,141,107,0.15)", pointerEvents: "none",
      }} />

      <div className="max-w-7xl mx-auto" style={{ position: "relative", zIndex: 1 }}>

        {/* Section Heading */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              fontFamily: "var(--font-accent)", fontSize: "0.72rem", fontWeight: 600,
              letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C78D6B",
              marginBottom: "1rem",
            }}
          >
            <span aria-hidden="true" style={{ width: "24px", height: "1px", background: "#C78D6B" }} />
            Visit Us
            <span aria-hidden="true" style={{ width: "24px", height: "1px", background: "#C78D6B" }} />
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 600, color: "#3D2B1F",
              lineHeight: 1.1, margin: "0 0 1rem",
              letterSpacing: "-0.025em",
            }}
          >
            Find Us in{" "}
            <span style={{
              background: "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Swaroop Nagar</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            style={{ fontFamily: "var(--font-body)", fontSize: "1rem", maxWidth: "480px", margin: "0 auto", color: "#5C4033", opacity: 0.8, lineHeight: 1.7 }}
          >
            Conveniently located in Kanpur — come meet Dr. Mamta Bhura and begin your transformation
          </motion.p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left — Clinic Photo */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInFromLeft}
            style={{ position: "relative", borderRadius: "24px", overflow: "hidden", height: "440px", boxShadow: "0 20px 60px rgba(60,43,31,0.15)" }}
          >
            <Image
              src="/optimized/Clinic%20Front%20Look.webp"
              alt="Skin Mantraa clinic exterior — Swaroop Nagar, Kanpur"
              fill
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />

            {/* Subtle dark vignette overlay */}
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(30,15,9,0.15) 0%, transparent 40%, rgba(30,15,9,0.55) 100%)",
              pointerEvents: "none",
            }} />

            {/* Floating pin chip — top */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              style={{
                position: "absolute", top: "1.25rem", left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(199,141,107,0.3)",
                borderRadius: "100px", padding: "0.5rem 1.1rem",
                display: "flex", alignItems: "center", gap: "0.6rem",
                boxShadow: "0 4px 20px rgba(60,43,31,0.18)",
                whiteSpace: "nowrap",
              }}
            >
              <AnimatedPin />
              <div>
                <div style={{ fontFamily: "var(--font-accent)", fontSize: "0.8rem", fontWeight: 700, color: "#3D2B1F" }}>
                  SKIN@Mantraa
                </div>
                <div style={{ fontFamily: "var(--font-accent)", fontSize: "0.65rem", color: "#C78D6B", letterSpacing: "0.04em" }}>
                  Swaroop Nagar, Kanpur
                </div>
              </div>
            </motion.div>

            {/* Bottom — label + directions button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75, type: "spring", stiffness: 200 }}
              style={{
                position: "absolute", bottom: "1.25rem", left: "1.25rem", right: "1.25rem",
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 600, color: "#FDF6EC", lineHeight: 1.2 }}>
                  Our Clinic
                </div>
                <div style={{ fontFamily: "var(--font-accent)", fontSize: "0.7rem", color: "rgba(253,246,236,0.7)", letterSpacing: "0.05em" }}>
                  {BRAND.clinic.landmark}
                </div>
              </div>
              <motion.a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.clinic.address + " " + BRAND.clinic.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.45rem",
                  background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: "100px", padding: "0.55rem 1.1rem",
                  fontFamily: "var(--font-accent)", fontSize: "0.75rem", fontWeight: 600,
                  color: "#FDF6EC", textDecoration: "none",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
                  whiteSpace: "nowrap",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1C4.24 1 2 3.24 2 6C2 9.5 7 13 7 13C7 13 12 9.5 12 6C12 3.24 9.76 1 7 1Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  <circle cx="7" cy="6" r="1.6" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                Get Directions
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — Contact Card */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInFromRight}
            style={{
              borderRadius: "24px",
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 20px 60px rgba(60,43,31,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
              border: "1px solid rgba(199,141,107,0.15)",
              display: "flex", flexDirection: "column" as const, gap: "1.5rem",
              padding: "2.25rem",
            }}
          >
            {/* Header */}
            <div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 600,
                color: "#3D2B1F", margin: "0 0 0.25rem",
                fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)", lineHeight: 1.2,
              }}>Visit Our Clinic</h3>
              <p style={{ fontFamily: "var(--font-accent)", fontSize: "0.75rem", color: "#C78D6B", margin: 0 }}>
                {BRAND.name} — {BRAND.doctor.specialization}
              </p>
            </div>

            <div style={{ height: "1px", background: "linear-gradient(90deg, #C78D6B, rgba(212,167,106,0.2), transparent)" }} aria-hidden="true" />

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.25rem" }}>
              <ContactRow icon={<MapPinIcon />}>
                <span style={{ fontWeight: 600, color: "#3D2B1F" }}>{BRAND.clinic.address}</span>
                <br />{BRAND.clinic.landmark}<br />{BRAND.clinic.city}
              </ContactRow>

              <ContactRow icon={<PhoneIcon />}>
                <a
                  href={`tel:${BRAND.clinic.phone}`}
                  style={{ fontWeight: 600, color: "#3D2B1F", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C78D6B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#3D2B1F")}
                >
                  {BRAND.clinic.phoneDisplay}
                </a>
                <span style={{ opacity: 0.6 }}> — click to call</span>
              </ContactRow>

              <ContactRow icon={<WhatsAppIcon />}>
                <a
                  href={`https://wa.me/${BRAND.clinic.whatsapp}?text=${whatsappMsg}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ fontWeight: 600, color: "#3D2B1F", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C78D6B")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#3D2B1F")}
                >
                  WhatsApp Chat
                </a>
                <span style={{ opacity: 0.6 }}> — quick response guaranteed</span>
              </ContactRow>
            </div>

            {/* Hours */}
            <HoursTable />

            <div style={{ height: "1px", background: "rgba(199,141,107,0.15)" }} aria-hidden="true" />

            {/* CTAs */}
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", borderRadius: "12px" }}
                >
                  Book Appointment
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>

              <p style={{ textAlign: "center" as const, fontFamily: "var(--font-body)", fontSize: "0.83rem", color: "#5C4033", opacity: 0.7, margin: 0 }}>
                Or call us at{" "}
                <a href={`tel:${BRAND.clinic.phone}`} style={{ color: "#C78D6B", fontWeight: 600, textDecoration: "none" }}>
                  {BRAND.clinic.phoneDisplay}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
