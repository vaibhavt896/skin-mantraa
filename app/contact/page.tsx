import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABlock from "@/components/shared/CTABlock";
import { BRAND, SERVICES } from "@/lib/constants";
import BookingForm from "./BookingForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | SKIN@Mantraa – Kanpur Dermatology Clinic",
  description:
    "Visit SKIN@Mantraa in Swaroop Nagar, Kanpur. Book your dermatology consultation with Dr. Mamta Bhura online, or call/WhatsApp us directly.",
};

const HOURS_TABLE = [
  { day: "Monday – Friday", time: "11:00 AM – 6:00 PM", open: true },
  { day: "Saturday", time: "12:00 PM – 4:00 PM", open: true },
  { day: "Sunday", time: "10:00 AM – 2:00 PM", open: true },
];

const FAQ_CARDS = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C78D6B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    question: "What should I bring?",
    answer:
      "Please carry a valid government ID and any prior prescription or reports from previous dermatologists. If you've had skin procedures elsewhere, bring photos or discharge summaries — it helps Dr. Bhura give you the most accurate assessment.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C78D6B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    question: "Is parking available?",
    answer:
      "Yes. There is ample parking space directly in front of and around Bungalow No. 4. The lane off Swaroop Nagar Main Road (behind Hotel Royal Cliff) is wide enough for both cars and two-wheelers.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C78D6B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    question: "How long is the wait?",
    answer:
      "We operate strictly by appointment, so waiting time is typically under 10 minutes. Walk-ins are accommodated when slots are available, but scheduling in advance ensures you're seen promptly at your preferred time.",
  },
];

export default function ContactPage() {
  const mapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Swaroop+Nagar+Kanpur+Uttar+Pradesh";
  const whatsappUrl = `https://wa.me/${BRAND.clinic.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20SKIN%40Mantraa.`;

  return (
    <>
      <Header />
      <main style={{ background: "#FDF6EC" }}>
        {/* ── Hero ──────────────────────────────────────────── */}
        <section
          className="relative pt-36 pb-20 px-6 overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #F5E6D3 0%, #FDF6EC 55%, #F8E8E0 100%)",
          }}
        >
          {/* Decorative circle */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-120px",
              right: "-100px",
              width: "480px",
              height: "480px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(199,141,107,0.1) 0%, transparent 70%)",
            }}
          />

          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 mb-8"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.8125rem",
                  color: "#C78D6B",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Home
              </Link>
              <span
                style={{
                  color: "rgba(92,64,51,0.4)",
                  fontSize: "0.75rem",
                }}
              >
                /
              </span>
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.8125rem",
                  color: "#5C4033",
                  letterSpacing: "0.02em",
                }}
              >
                Contact
              </span>
            </nav>

            <div className="max-w-2xl">
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C78D6B",
                  background: "rgba(199,141,107,0.1)",
                  border: "1px solid rgba(199,141,107,0.3)",
                  borderRadius: "100px",
                  padding: "0.3rem 0.875rem",
                  marginBottom: "1.25rem",
                }}
              >
                Kanpur&apos;s Trusted Skin Clinic
              </span>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  lineHeight: 1.08,
                  color: "#3D2B1F",
                  letterSpacing: "-0.01em",
                  marginBottom: "1.25rem",
                }}
              >
                Visit Us in{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #C4704E 0%, #D4A76A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Swaroop Nagar
                </span>
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.72,
                  color: "#5C4033",
                  maxWidth: "52ch",
                }}
              >
                Dr. Mamta Bhura personally attends every consultation. Fill in
                the form below, call, or WhatsApp us — we&apos;ll confirm your
                slot within a few hours.
              </p>
            </div>
          </div>
        </section>

        {/* ── Main Content ──────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10 xl:gap-14">
              {/* Left: Booking Form */}
              <div className="lg:col-span-3">
                <BookingForm services={SERVICES} />
              </div>

              {/* Right: Contact Info Card */}
              <aside className="lg:col-span-2">
                <div
                  className="rounded-2xl overflow-hidden sticky top-28"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0 12px 48px rgba(61,43,31,0.1)",
                  }}
                >
                  {/* Card header */}
                  <div
                    className="px-8 py-6"
                    style={{
                      background:
                        "linear-gradient(135deg, #3D2B1F 0%, #2C1810 100%)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "0.6875rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#D4A76A",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Find Us
                    </p>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.625rem",
                        fontStyle: "italic",
                        fontWeight: 600,
                        color: "#FDF6EC",
                        lineHeight: 1.15,
                      }}
                    >
                      Clinic Information
                    </h2>
                  </div>

                  <div className="px-8 py-7 flex flex-col gap-6">
                    {/* Address */}
                    <div className="flex gap-3.5">
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(199,141,107,0.1)" }}
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C78D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#C78D6B",
                            marginBottom: "0.35rem",
                          }}
                        >
                          Address
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9rem",
                            lineHeight: 1.65,
                            color: "#3D2B1F",
                          }}
                        >
                          {BRAND.clinic.address}
                          <br />
                          {BRAND.clinic.landmark}
                          <br />
                          {BRAND.clinic.city}
                        </p>
                        <p
                          className="mt-2"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.8125rem",
                            fontStyle: "italic",
                            color: "#5C4033",
                            lineHeight: 1.5,
                          }}
                        >
                          From Swaroop Nagar Main Road, take the lane behind
                          Hotel Royal Cliff.
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        height: "1px",
                        background: "rgba(199,141,107,0.15)",
                      }}
                    />

                    {/* Phone */}
                    <a
                      href={`tel:${BRAND.clinic.phone}`}
                      className="flex gap-3.5 items-center group"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                        style={{ background: "rgba(199,141,107,0.1)" }}
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C78D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#C78D6B",
                            marginBottom: "0.2rem",
                          }}
                        >
                          Call Us
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9375rem",
                            fontWeight: 500,
                            color: "#3D2B1F",
                            transition: "color 0.2s",
                          }}
                        >
                          {BRAND.clinic.phoneDisplay}
                        </p>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3.5 items-center"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(37,211,102,0.1)" }}
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="#25D366"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.882l6.244-1.637A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.011-1.374l-.36-.213-3.707.972.988-3.61-.234-.37A9.818 9.818 0 0 1 2.182 12C2.182 6.568 6.568 2.182 12 2.182c5.432 0 9.818 4.386 9.818 9.818 0 5.432-4.386 9.818-9.818 9.818z" />
                        </svg>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#25D366",
                            marginBottom: "0.2rem",
                          }}
                        >
                          WhatsApp
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.9375rem",
                            fontWeight: 500,
                            color: "#3D2B1F",
                          }}
                        >
                          Chat with us directly
                        </p>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${BRAND.clinic.email}`}
                      className="flex gap-3.5 items-center"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(199,141,107,0.1)" }}
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C78D6B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-accent)",
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#C78D6B",
                            marginBottom: "0.2rem",
                          }}
                        >
                          Email
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.875rem",
                            color: "#3D2B1F",
                          }}
                        >
                          {BRAND.clinic.email}
                        </p>
                      </div>
                    </a>

                    <div
                      style={{
                        height: "1px",
                        background: "rgba(199,141,107,0.15)",
                      }}
                    />

                    {/* Hours Table */}
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-accent)",
                          fontSize: "0.75rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "#C78D6B",
                          marginBottom: "0.75rem",
                        }}
                      >
                        Clinic Hours
                      </p>
                      <div className="flex flex-col gap-2">
                        {HOURS_TABLE.map(({ day, time }) => (
                          <div
                            key={day}
                            className="flex items-center justify-between gap-4"
                          >
                            <span
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "0.8375rem",
                                color: "#5C4033",
                                flexShrink: 0,
                              }}
                            >
                              {day}
                            </span>
                            <span
                              style={{
                                fontFamily: "var(--font-accent)",
                                fontSize: "0.8375rem",
                                color: "#3D2B1F",
                                fontWeight: 500,
                                textAlign: "right",
                              }}
                            >
                              {time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Directions Button */}
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl py-3.5 transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)",
                        color: "white",
                        fontFamily: "var(--font-accent)",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        letterSpacing: "0.02em",
                        textDecoration: "none",
                        boxShadow: "0 4px 20px rgba(196,112,78,0.3)",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="3 11 22 2 13 21 11 13 3 11" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Map ───────────────────────────────────────────── */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 12px 48px rgba(61,43,31,0.12)" }}
            >
              <iframe
                src="https://maps.google.com/maps?q=26.48100042497026,80.31557800112557&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="600"
                style={{ border: "none", display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SKIN@Mantraa – Swaroop Nagar, Kanpur"
                aria-label="Google Maps showing clinic location in Swaroop Nagar, Kanpur"
              />
            </div>
          </div>
        </section>

        {/* ── FAQ Row ───────────────────────────────────────── */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 flex justify-center">
              <SectionHeader
                label="Quick Answers"
                headline="Before You Visit"
                subtext="Everything you need to know for a smooth experience at the clinic."
                align="center"
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {FAQ_CARDS.map((card) => (
                <div
                  key={card.question}
                  className="rounded-2xl p-7"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0 4px 24px rgba(61,43,31,0.07)",
                    border: "1px solid rgba(199,141,107,0.12)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(199,141,107,0.1)" }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.3125rem",
                      fontStyle: "italic",
                      fontWeight: 600,
                      color: "#3D2B1F",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {card.question}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      lineHeight: 1.72,
                      color: "#5C4033",
                    }}
                  >
                    {card.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Block ─────────────────────────────────────── */}
        <CTABlock
          headline={"Not ready to book?\nWe're happy to answer questions first."}
          subtext="Call or WhatsApp Dr. Bhura's clinic directly. Our team responds within a few hours during clinic hours."
          primaryLabel="WhatsApp Us"
          primaryHref={whatsappUrl}
          secondaryLabel="Call the Clinic"
          secondaryHref={`tel:${BRAND.clinic.phone}`}
          dark
        />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
