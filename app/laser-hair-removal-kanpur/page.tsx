import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Laser Hair Removal in Kanpur - Safe for Indian Skin | SKIN@Mantraa Swaroop Nagar",
  description:
    "Laser hair removal in Kanpur with Nd:YAG and diode laser - safe for Indian skin tones. 6–8 sessions. 80–90% permanent reduction. Dr. Mamta Bhura, SKIN@Mantraa, Swaroop Nagar.",
  keywords: [
    "laser hair removal Kanpur",
    "laser hair removal Swaroop Nagar Kanpur",
    "Nd:YAG laser Kanpur",
    "diode laser hair removal Kanpur",
    "permanent hair removal Kanpur",
    "laser hair removal Indian skin",
    "best laser clinic Kanpur",
  ],
  alternates: {
    canonical: "https://skinmantraa.in/laser-hair-removal-kanpur",
  },
  openGraph: {
    title: "Laser Hair Removal in Kanpur - Safe for Indian Skin | SKIN@Mantraa",
    description:
      "Laser hair removal with Nd:YAG and diode laser - safe for Indian skin. 6–8 sessions for 80–90% permanent reduction. Dr. Mamta Bhura, SKIN@Mantraa, Swaroop Nagar, Kanpur.",
    url: "https://skinmantraa.in/laser-hair-removal-kanpur",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      name: "Laser Hair Removal",
      procedureType: "Laser treatment",
      status: "EventScheduled",
      description:
        "Nd:YAG and diode laser hair removal at SKIN@Mantraa, Kanpur - calibrated for Indian skin (Fitzpatrick Type III–V). 6–8 sessions, 4–6 weeks apart, for 80–90% permanent hair reduction.",
      performedBy: {
        "@type": "Physician",
        name: "Dr. Mamta Bhura",
        url: "https://skinmantraa.in/about/dr-mamta-bhura",
      },
      location: {
        "@type": "MedicalBusiness",
        name: "SKIN@Mantraa",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff",
          addressLocality: "Kanpur",
          addressRegion: "Uttar Pradesh",
          postalCode: "208002",
          addressCountry: "IN",
        },
        telephone: BRAND.clinic.phone,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How many sessions does laser hair removal take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most patients require 6 to 8 sessions for significant and lasting hair reduction. Sessions are spaced 4 to 6 weeks apart for the body and 3 to 4 weeks for the face, following the natural hair growth cycle. After completing the course, most patients see 80 to 90% permanent hair reduction.",
          },
        },
        {
          "@type": "Question",
          name: "Which laser is safe for Indian skin for hair removal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For Indian skin (Fitzpatrick Type III-V), Nd:YAG 1064nm and diode 810nm lasers are the safest options. The alexandrite 755nm laser has a higher risk of burns and post-inflammatory hyperpigmentation on darker skin. At SKIN@Mantraa, we use Nd:YAG and diode systems with settings calibrated per patient skin tone.",
          },
        },
        {
          "@type": "Question",
          name: "Is laser hair removal painful?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most patients describe a mild snapping or warming sensation. The laser handpiece has a built-in cooling mechanism. For facial treatments, topical anaesthetic cream is available. There is no downtime - patients return to normal activities immediately after each session.",
          },
        },
        {
          "@type": "Question",
          name: "What areas can be treated with laser hair removal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All body areas: upper lip, chin, sideburns, underarms, arms (upper and lower), legs (full, lower, or upper), bikini line, full Brazilian, back, chest, abdomen, shoulders, and neck. Treatment areas are assessed individually for session duration and recommended session count.",
          },
        },
        {
          "@type": "Question",
          name: "How much does laser hair removal cost in Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cost at SKIN@Mantraa is priced per session by treatment area. Multi-session packages are available. Book a consultation (₹600) for a personalised assessment and current pricing specific to your areas.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do before a laser hair removal session?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shave the treatment area 24 hours before (do not wax or thread for 4 weeks - the hair root must be intact). Avoid sun exposure for 2 weeks before. Arrive with clean, product-free skin on the treatment area. After each session, apply SPF 50+ sunscreen and avoid direct sun for 2 weeks.",
          },
        },
      ],
    },
  ],
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Skin Assessment",
    desc: "Dr. Bhura assesses your Fitzpatrick skin type, hair colour, and density. Laser settings (wavelength, fluence, pulse duration) are determined before the first session.",
  },
  {
    step: "02",
    title: "Preparation",
    desc: "The treatment area is shaved 24 hours before. On treatment day, the area is cleaned and cooling gel is applied. Topical anaesthetic available for facial treatments.",
  },
  {
    step: "03",
    title: "Laser Treatment",
    desc: "The laser handpiece is applied to the skin. Built-in cooling keeps the surface comfortable. Sessions range from 5–10 minutes (underarms) to 45–60 minutes (full legs).",
  },
  {
    step: "04",
    title: "Post-Care & Follow-Up",
    desc: "Soothing cream applied. SPF 50+ sunscreen for 2 weeks. Sessions repeated at 4–6 week intervals until the 6–8 session course is complete.",
  },
];

const AREAS_TREATED = [
  "Upper Lip & Chin",
  "Sideburns",
  "Full Face",
  "Underarms",
  "Arms (Upper / Lower / Full)",
  "Legs (Lower / Upper / Full)",
  "Bikini Line",
  "Full Brazilian",
  "Back",
  "Chest & Abdomen",
  "Shoulders",
  "Neck",
];

export default function LaserHairRemovalKanpurPage() {
  const faqs = (
    pageSchema["@graph"][1] as {
      mainEntity: { name: string; acceptedAnswer: { text: string } }[];
    }
  ).mainEntity;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main style={{ background: "#FDF6EC" }}>
        {/* ── Hero ── */}
        <section
          className="pt-40 pb-20 px-4 sm:px-6 lg:px-8"
          style={{
            background: "linear-gradient(160deg, #FDF6EC 0%, #F5E6D3 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                fontFamily: "var(--font-accent)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C78D6B",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{ width: "24px", height: "1px", background: "#C78D6B" }}
              />
              SKIN@Mantraa · Swaroop Nagar, Kanpur
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "#3D2B1F",
                letterSpacing: "-0.025em",
                marginBottom: "1.5rem",
              }}
            >
              Laser Hair Removal
              <br />
              <span style={{ color: "#C4704E" }}>in Kanpur</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.15rem",
                lineHeight: 1.8,
                color: "#5C4033",
                maxWidth: "620px",
                marginBottom: "1.5rem",
              }}
            >
              Safe for Indian skin. Nd:YAG and diode laser systems - the correct
              lasers for Fitzpatrick Type III–V skin tones. 6 to 8 sessions. 80
              to 90% permanent hair reduction. All treatments performed under
              Dr. Mamta Bhura&apos;s supervision.
            </p>
            {/* Key stats bar */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {[
                { val: "6–8", lbl: "Sessions" },
                { val: "80–90%", lbl: "Permanent Reduction" },
                { val: "Nd:YAG / Diode", lbl: "Laser Systems" },
                { val: "₹600", lbl: "Consultation" },
              ].map(({ val, lbl }) => (
                <div
                  key={lbl}
                  style={{
                    padding: "0.75rem 1.25rem",
                    background: "rgba(61,43,31,0.06)",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#3D2B1F",
                      margin: 0,
                    }}
                  >
                    {val}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.78rem",
                      color: "#8C6F5E",
                      margin: 0,
                    }}
                  >
                    {lbl}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  padding: "0.9rem 2.25rem",
                  background: "#C4704E",
                  color: "#ffffff",
                  borderRadius: "6px",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                }}
              >
                Book Consultation
              </Link>
              <Link
                href="/skin-guide/laser-hair-removal-kanpur"
                style={{
                  display: "inline-block",
                  padding: "0.9rem 2.25rem",
                  background: "transparent",
                  color: "#3D2B1F",
                  border: "1.5px solid rgba(61,43,31,0.25)",
                  borderRadius: "6px",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                }}
              >
                Full Clinical Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Why Indian Skin Needs Special Care ── */}
        <section style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div className="max-w-4xl mx-auto">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                color: "#3D2B1F",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Why Indian Skin Needs the Right Laser
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.05rem",
                    lineHeight: 1.85,
                    color: "#2d2d2d",
                    marginBottom: "1.25rem",
                  }}
                >
                  Indian skin (Fitzpatrick Type III–V) has a higher melanin
                  density than lighter skin types. Laser hair removal works by
                  targeting melanin in the hair follicle - but if the wrong
                  wavelength is used, it also heats the melanin in the
                  surrounding skin, causing burns or post-inflammatory
                  hyperpigmentation.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.05rem",
                    lineHeight: 1.85,
                    color: "#2d2d2d",
                  }}
                >
                  This is why the alexandrite 755nm laser - effective for fair
                  skin - is not recommended for darker Indian skin. And why many
                  clinics offering low-cost &quot;laser packages&quot; without
                  Fitzpatrick-appropriate equipment produce poor results or skin
                  damage.
                </p>
              </div>
              <div
                style={{
                  background: "#FDF6EC",
                  borderRadius: "12px",
                  padding: "2rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#3D2B1F",
                    marginBottom: "1rem",
                  }}
                >
                  What we use at SKIN@Mantraa:
                </p>
                {[
                  {
                    laser: "Nd:YAG 1064nm",
                    note: "Gold standard for Fitzpatrick IV–VI. Lower melanin absorption - safer for darker skin.",
                  },
                  {
                    laser: "Diode 810nm",
                    note: "Effective for Fitzpatrick III–IV with calibrated settings. High follicle selectivity.",
                  },
                ].map(({ laser, note }) => (
                  <div
                    key={laser}
                    style={{
                      marginBottom: "1rem",
                      paddingBottom: "1rem",
                      borderBottom: "1px solid rgba(199,141,107,0.2)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "#C4704E",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {laser}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        color: "#5C4033",
                        lineHeight: 1.6,
                      }}
                    >
                      {note}
                    </p>
                  </div>
                ))}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "#8C6F5E",
                    lineHeight: 1.6,
                  }}
                >
                  Settings (fluence, pulse duration, spot size) are calibrated
                  per patient at each session - not fixed clinic-wide values.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section style={{ background: "#FDF6EC", padding: "5rem 1.5rem" }}>
          <div className="max-w-4xl mx-auto">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                color: "#3D2B1F",
                marginBottom: "2.5rem",
              }}
            >
              What Happens at Each Session
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {PROCESS_STEPS.map(({ step, title, desc }) => (
                <div
                  key={step}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "12px",
                    padding: "1.75rem",
                    border: "1px solid rgba(199,141,107,0.12)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      color: "rgba(196,112,78,0.2)",
                      lineHeight: 1,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#3D2B1F",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      color: "#5C4033",
                      lineHeight: 1.7,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who is it for + Areas ── */}
        <section style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div
            className="max-w-4xl mx-auto"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  color: "#3D2B1F",
                  marginBottom: "1.25rem",
                }}
              >
                Who Is It For?
              </h2>
              {[
                "Anyone with unwanted body or facial hair - any skin tone",
                "PCOS patients with facial hair growth",
                "Women seeking a permanent alternative to waxing or threading",
                "Men with back, chest, or facial hair concerns",
                "Patients with ingrown hair or razor bumps from shaving",
                "Those who have had poor results from IPL or alexandrite laser elsewhere",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      color: "#C4704E",
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: "0.1rem",
                    }}
                  >
                    ✓
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      color: "#2d2d2d",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  color: "#3D2B1F",
                  marginBottom: "1.25rem",
                }}
              >
                Treatment Areas
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {AREAS_TREATED.map((area) => (
                  <span
                    key={area}
                    style={{
                      padding: "0.35rem 0.9rem",
                      background: "#FDF6EC",
                      color: "#5C4033",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-body)",
                      borderRadius: "999px",
                      border: "1px solid rgba(199,141,107,0.2)",
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
              <div
                style={{
                  marginTop: "1.5rem",
                  background: "#FDF6EC",
                  borderRadius: "10px",
                  padding: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#3D2B1F",
                    marginBottom: "0.5rem",
                  }}
                >
                  What to Expect After Treatment
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "#5C4033",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  After 6–8 sessions: 80–90% permanent hair reduction. Remaining
                  hair (if any) will be finer and lighter. Maintenance sessions
                  once or twice a year may be needed for follicles activated by
                  hormonal changes (PCOS, pregnancy, thyroid).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: "#FDF6EC", padding: "5rem 1.5rem" }}>
          <div className="max-w-3xl mx-auto">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                fontWeight: 600,
                color: "#3D2B1F",
                marginBottom: "2rem",
              }}
            >
              Frequently Asked Questions
            </h2>
            {faqs.map((item, i) => (
              <details
                key={i}
                style={{
                  borderBottom: "1px solid rgba(199,141,107,0.2)",
                  padding: "0.1rem 0",
                }}
              >
                <summary
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#3D2B1F",
                    cursor: "pointer",
                    padding: "1.1rem 0",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {item.name}
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: "1.2rem",
                      color: "#C4704E",
                      fontWeight: 300,
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    color: "#2d2d2d",
                    paddingBottom: "1.25rem",
                  }}
                >
                  {item.acceptedAnswer.text}
                </p>
              </details>
            ))}
            <div style={{ marginTop: "1.5rem" }}>
              <Link
                href="/skin-guide/laser-hair-removal-kanpur"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "#C4704E",
                  textDecoration: "none",
                }}
              >
                Read the full clinical guide on laser hair removal →
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            background: "#3D2B1F",
            padding: "5rem 1.5rem",
            textAlign: "center",
          }}
        >
          <div className="max-w-2xl mx-auto">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                color: "#FDF6EC",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Book a Laser Hair Removal Assessment
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "rgba(253,246,236,0.75)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Dr. Bhura will assess your skin tone and hair type, choose the
              appropriate laser, and give you a complete session and pricing
              plan. Consultation: ₹600.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  padding: "0.9rem 2.25rem",
                  background: "#C4704E",
                  color: "#ffffff",
                  borderRadius: "6px",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                }}
              >
                Book Consultation
              </Link>
              <a
                href={`https://wa.me/${BRAND.clinic.whatsapp}`}
                style={{
                  display: "inline-block",
                  padding: "0.9rem 2.25rem",
                  background: "transparent",
                  color: "#C78D6B",
                  border: "1px solid rgba(199,141,107,0.4)",
                  borderRadius: "6px",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
