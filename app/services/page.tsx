import { Suspense } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { SERVICES, BRAND } from "@/lib/constants";
import ServicesClient from "./ServicesClient";

// ─── Service icon SVGs ───────────────────────────────────────────────────────
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  laser: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <circle cx="30" cy="30" r="28" stroke="#C4704E" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" />
      <circle cx="30" cy="30" r="10" fill="none" stroke="#C4704E" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="3" fill="#C4704E" />
      <line x1="30" y1="6" x2="30" y2="20" stroke="#C4704E" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="40" x2="30" y2="54" stroke="#C4704E" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="30" x2="20" y2="30" stroke="#C78D6B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="30" x2="54" y2="30" stroke="#C78D6B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="14" x2="23" y2="23" stroke="#D4A76A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="37" y1="37" x2="46" y2="46" stroke="#D4A76A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  sparkles: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <path d="M30 8L33 22L47 25L33 28L30 42L27 28L13 25L27 22L30 8Z" stroke="#C4704E" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(196,112,78,0.06)" />
      <path d="M48 10L49.5 16L56 17.5L49.5 19L48 25L46.5 19L40 17.5L46.5 16L48 10Z" stroke="#C78D6B" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
      <path d="M12 38L13 42L17 43L13 44L12 48L11 44L7 43L11 42L12 38Z" stroke="#D4A76A" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
      <circle cx="30" cy="25" r="2" fill="#C4704E" opacity="0.5" />
    </svg>
  ),
  shield: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <path d="M30 8L50 16V30C50 40 41 49 30 52C19 49 10 40 10 30V16L30 8Z" stroke="#C4704E" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(196,112,78,0.05)" />
      <path d="M22 30L27 35L38 24" stroke="#C4704E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="30" cy="30" r="6" stroke="#C78D6B" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.5" />
    </svg>
  ),
  hair: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <path d="M20 48C20 36 18 28 22 20C25 14 30 12 30 12C30 12 35 14 38 20C42 28 40 36 40 48" stroke="#C4704E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M24 44C24 36 22 30 25 24C27 20 30 18 30 18" stroke="#C78D6B" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M36 44C36 36 38 30 35 24C33 20 30 18 30 18" stroke="#C78D6B" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
      <circle cx="30" cy="10" r="4" fill="none" stroke="#D4A76A" strokeWidth="1.2" />
      <path d="M14 22C16 26 15 32 16 38" stroke="#D4A76A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M46 22C44 26 45 32 44 38" stroke="#D4A76A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
  medical: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <rect x="10" y="10" width="40" height="40" rx="12" stroke="#C4704E" strokeWidth="1.5" fill="rgba(196,112,78,0.04)" />
      <path d="M30 18V42M18 30H42" stroke="#C4704E" strokeWidth="2" strokeLinecap="round" />
      <rect x="18" y="22" width="24" height="16" rx="4" stroke="#C78D6B" strokeWidth="0.75" fill="none" opacity="0.4" />
      <circle cx="30" cy="30" r="3" fill="#D4A76A" opacity="0.5" />
    </svg>
  ),
  star: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <path d="M30 10L35 24H50L38 32L42 47L30 38L18 47L22 32L10 24H25L30 10Z" stroke="#C4704E" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(196,112,78,0.06)" />
      <circle cx="30" cy="30" r="5" fill="none" stroke="#C78D6B" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="30" cy="30" r="2" fill="#D4A76A" opacity="0.6" />
    </svg>
  ),
};

// ─── Gradient panels for decorative image areas ──────────────────────────────
const SERVICE_GRADIENTS = [
  "linear-gradient(145deg, #F8E8E0 0%, #F5E6D3 40%, #EDD5C0 80%, #F8E8E0 100%)",
  "linear-gradient(145deg, #F5E6D3 0%, #FDF6EC 40%, #F8E8E0 80%, #F5E6D3 100%)",
  "linear-gradient(145deg, #FDF6EC 0%, #F8E8E0 40%, #F5E6D3 80%, #FDF6EC 100%)",
  "linear-gradient(145deg, #F8E8E0 0%, #EDD5C0 40%, #F5E6D3 80%, #F8E8E0 100%)",
  "linear-gradient(145deg, #F5E6D3 0%, #FDF6EC 40%, #EDD5C0 80%, #F5E6D3 100%)",
  "linear-gradient(145deg, #FDF6EC 0%, #F5E6D3 40%, #F8E8E0 80%, #FDF6EC 100%)",
];

// ─── Decorative pattern for gradient panel ───────────────────────────────────
function DecorativePanel({ gradient, icon, title }: { gradient: string; icon: React.ReactNode; title: string }) {
  return (
    <div
      className="w-full h-full min-h-[340px] rounded-3xl flex flex-col items-center justify-center gap-6 relative overflow-hidden"
      style={{ background: gradient }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(199,141,107,0.15) 0%, transparent 70%)",
        }}
      />
      {/* Concentric circles decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
        style={{ border: "1px solid rgba(199,141,107,0.12)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
        style={{ border: "1px solid rgba(199,141,107,0.1)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
        style={{ border: "1px solid rgba(199,141,107,0.08)" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-4">
        <div
          className="p-5 rounded-2xl"
          style={{
            background: "rgba(253,246,236,0.8)",
            boxShadow: "0 8px 32px rgba(61,43,31,0.08)",
          }}
        >
          {icon}
        </div>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontStyle: "italic",
            color: "#C4704E",
            opacity: 0.6,
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

// ─── Process Steps ────────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    number: "01",
    title: "Book Consultation",
    description:
      "Schedule your consultation online or by phone. Our team will confirm your appointment and share any pre-visit guidelines relevant to your skin concern.",
  },
  {
    number: "02",
    title: "Skin Assessment",
    description:
      "Dr. Bhura conducts a thorough evaluation of your skin type, medical history, and concerns — using clinical expertise to form an accurate diagnosis.",
  },
  {
    number: "03",
    title: "Personalised Treatment Plan",
    description:
      "Receive a tailored treatment plan designed specifically for your skin's needs — with honest timelines, realistic expectations, and no unnecessary upselling.",
  },
  {
    number: "04",
    title: "Results & Follow-up",
    description:
      "Track your progress through scheduled follow-ups. Dr. Bhura adjusts your plan as needed to ensure you achieve the best possible, long-lasting results.",
  },
];

// ─── Server-rendered page shell ───────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#FDF6EC" }}>
        {/* ══════════════════════════════════════════════════
            1. HERO SECTION
        ══════════════════════════════════════════════════ */}
        <section
          className="relative min-h-[58vh] flex items-end pb-16 pt-40 overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #FDF6EC 0%, #F5E6D3 45%, #F8E8E0 75%, #FDF6EC 100%)",
          }}
        >
          {/* Orb decorations */}
          <div
            className="absolute top-16 right-16 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, #C78D6B 0%, transparent 70%)",
              filter: "blur(70px)",
              opacity: 0.2,
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, #C4704E 0%, transparent 70%)",
              filter: "blur(60px)",
              opacity: 0.15,
            }}
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-8">
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
                Services
              </span>
            </nav>

            <div className="max-w-3xl">
              <p
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#C4704E",
                  marginBottom: "1.25rem",
                }}
              >
                What We Offer
              </p>

              <h1
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
                Advanced Treatments
                <br />
                <span className="text-gradient">for Every Skin Need</span>
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.125rem",
                  lineHeight: 1.7,
                  color: "#5C4033",
                  maxWidth: "560px",
                }}
              >
                From medical dermatology to advanced cosmetic treatments,
                SKIN@Mantraa offers 15+ evidence-based procedures — each
                selected for clinical efficacy and tailored to Indian skin
                tones by Dr. Mamta Bhura.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            2. SERVICES EDITORIAL GRID
        ══════════════════════════════════════════════════ */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-24 lg:space-y-32">
              {SERVICES.map((service, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                      isEven ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Text content */}
                    <div className={isEven ? "lg:col-start-2" : ""}>
                      {/* Number + category */}
                      <div className="flex items-center gap-4 mb-6">
                        <span
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            color: "rgba(199,141,107,0.5)",
                          }}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div
                          className="h-px flex-1"
                          style={{ background: "rgba(199,141,107,0.2)", maxWidth: "48px" }}
                        />
                        {service.featured && (
                          <span
                            className="px-3 py-0.5 rounded-full text-xs"
                            style={{
                              fontFamily: "var(--font-accent)",
                              fontSize: "0.7rem",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "white",
                              background: "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)",
                            }}
                          >
                            Featured
                          </span>
                        )}
                      </div>

                      <h2
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                          fontWeight: 600,
                          fontStyle: "italic",
                          color: "#3D2B1F",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.1,
                          marginBottom: "1rem",
                        }}
                      >
                        {service.title}
                      </h2>

                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "1.0625rem",
                          color: "#5C4033",
                          lineHeight: 1.7,
                          marginBottom: "1.75rem",
                        }}
                      >
                        {service.shortDesc}
                      </p>

                      {/* Treatment chips */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {service.treatments.map((treatment) => (
                          <span
                            key={treatment}
                            className="px-3 py-1.5 rounded-full text-sm"
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "0.8125rem",
                              color: "#3D2B1F",
                              background: "rgba(245,230,211,0.8)",
                              border: "1px solid rgba(199,141,107,0.2)",
                            }}
                          >
                            {treatment}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 group"
                        style={{
                          fontFamily: "var(--font-accent)",
                          fontSize: "0.9375rem",
                          fontWeight: 500,
                          color: "#C4704E",
                          letterSpacing: "0.02em",
                          textDecoration: "none",
                        }}
                      >
                        Explore Treatment
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                          style={{
                            transition: "transform 0.25s ease",
                          }}
                          className="group-hover:translate-x-1"
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
                    </div>

                    {/* Decorative panel */}
                    <div className={isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                      <DecorativePanel
                        gradient={SERVICE_GRADIENTS[idx]}
                        icon={SERVICE_ICONS[service.icon]}
                        title={service.title}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            3. PROCESS SECTION
        ══════════════════════════════════════════════════ */}
        <section
          className="py-24 lg:py-32"
          style={{ background: "#F5E6D3" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
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
                Your Journey
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#3D2B1F",
                  letterSpacing: "-0.02em",
                  maxWidth: "420px",
                  lineHeight: 1.1,
                }}
              >
                How It Works
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.number}
                  className="relative p-6 lg:p-8 rounded-3xl flex flex-col"
                  style={{
                    background:
                      idx % 2 === 0
                        ? "rgba(253,246,236,0.9)"
                        : "rgba(248,232,224,0.7)",
                    border: "1px solid rgba(199,141,107,0.12)",
                  }}
                >
                  {/* Number circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5 flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)",
                      boxShadow: "0 6px 20px rgba(196,112,78,0.25)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: "white",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.375rem",
                      fontWeight: 600,
                      color: "#3D2B1F",
                      marginBottom: "0.75rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      color: "#5C4033",
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Connector arrow (hidden on last) */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div
                      className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 rounded-full items-center justify-center"
                      style={{
                        background: "#F5E6D3",
                        border: "1px solid rgba(199,141,107,0.2)",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 6h8M6 2l4 4-4 4"
                          stroke="#C78D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            4. FAQ — client component (accordion)
        ══════════════════════════════════════════════════ */}
        <Suspense fallback={<div className="py-24" />}>
          <ServicesClient />
        </Suspense>

        {/* ══════════════════════════════════════════════════
            5. CTA SECTION
        ══════════════════════════════════════════════════ */}
        <section
          className="py-20 lg:py-28 relative overflow-hidden"
          style={{ background: "#2C1810" }}
        >
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #D4A76A 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #C4704E 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <p
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#D4A76A",
                marginBottom: "0.875rem",
              }}
            >
              Take the First Step
            </p>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                fontStyle: "italic",
                color: "#FDF6EC",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
              }}
            >
              Ready for the Skin
              <br />
              You Deserve?
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                color: "rgba(253,246,236,0.65)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              Book a consultation with Dr. Mamta Bhura and let{" "}
              {BRAND.doctor.experience} years of expertise guide your path to
              healthier, more radiant skin.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <Link
                href="/contact"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.9375rem",
                  color: "rgba(253,246,236,0.6)",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {BRAND.clinic.phoneDisplay}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2 2.5C2 2.5 3.5 1 4.5 1C5.5 1 6 2 6.5 3C7 4 7.5 4.5 7 5C6.5 5.5 6 5.5 6.5 6.5C7 7.5 7.5 8 8.5 9C9.5 10 10 10.5 11 9.5C12 8.5 12 8 12.5 9C13 10 13.5 11 12 12C10.5 13 9 13 7 11C5 9 2 6 2 2.5Z"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
