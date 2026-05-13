import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Skin Specialist in Swaroop Nagar, Kanpur - SKIN@Mantraa Clinic",
  description:
    "SKIN@Mantraa is the leading skin clinic in Swaroop Nagar, Kanpur. Dr. Mamta Bhura - MD Dermatology, IMS BHU, 26+ years experience. Serving Kakadeo, Civil Lines, Kidwai Nagar, Govind Nagar, and all of Kanpur.",
  keywords: [
    "skin specialist Swaroop Nagar",
    "skin clinic Swaroop Nagar Kanpur",
    "dermatologist Swaroop Nagar",
    "skin doctor near Swaroop Nagar",
    "laser hair removal Swaroop Nagar Kanpur",
    "skin specialist Kanpur",
    "best skin clinic near me Kanpur",
  ],
  alternates: {
    canonical: "https://skinmantraa.in/skin-specialist-swaroop-nagar",
  },
  openGraph: {
    title: "Skin Specialist in Swaroop Nagar, Kanpur - SKIN@Mantraa",
    description:
      "SKIN@Mantraa is the leading skin clinic in Swaroop Nagar, Kanpur. Dr. Mamta Bhura - MD Dermatology, 26+ years. Advanced laser, anti-aging, acne, and hair treatments.",
    url: "https://skinmantraa.in/skin-specialist-swaroop-nagar",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": "https://skinmantraa.in/#clinic",
      name: "SKIN@Mantraa",
      url: "https://skinmantraa.in",
      telephone: BRAND.clinic.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff",
        addressLocality: "Kanpur",
        addressRegion: "Uttar Pradesh",
        postalCode: "208002",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: BRAND.clinic.coordinates.lat,
        longitude: BRAND.clinic.coordinates.lng,
      },
      areaServed: [
        { "@type": "City", name: "Kanpur" },
        { "@type": "Place", name: "Swaroop Nagar, Kanpur" },
        { "@type": "Place", name: "Kakadeo, Kanpur" },
        { "@type": "Place", name: "Civil Lines, Kanpur" },
        { "@type": "Place", name: "Kidwai Nagar, Kanpur" },
        { "@type": "Place", name: "Govind Nagar, Kanpur" },
        { "@type": "Place", name: "Rawatpur, Kanpur" },
      ],
      medicalSpecialty: "Dermatology",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "11:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "12:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "14:00",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is SKIN@Mantraa located in Swaroop Nagar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SKIN@Mantraa is located at Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff, Kanpur, UP 208002. The clinic is easily accessible from all major areas of Kanpur including Kakadeo, Civil Lines, Kidwai Nagar, Govind Nagar, and Rawatpur.",
          },
        },
        {
          "@type": "Question",
          name: "Which areas near Swaroop Nagar does SKIN@Mantraa serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SKIN@Mantraa serves patients from Swaroop Nagar, Kakadeo, Civil Lines, Kidwai Nagar, Govind Nagar, Rawatpur, Shyam Nagar, Vikas Nagar, and across central and south Kanpur. Patients also visit from Lucknow Road and outer Kanpur areas for specific treatments like HIFU, laser hair removal, and GFC hair treatment.",
          },
        },
        {
          "@type": "Question",
          name: "Is laser hair removal available at the Swaroop Nagar clinic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. SKIN@Mantraa offers laser hair removal at the Swaroop Nagar clinic with Nd:YAG and diode laser systems safe for Indian skin. Dr. Mamta Bhura personally oversees all laser treatments and calibrates settings for each patient's Fitzpatrick skin type.",
          },
        },
        {
          "@type": "Question",
          name: "What are the clinic hours at SKIN@Mantraa Swaroop Nagar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clinic hours: Monday–Friday 11AM–6PM, Saturday 12PM–6PM, Sunday 10AM–2PM. Walk-ins are welcome. For guaranteed appointment time, book in advance via WhatsApp (+91 98380 00024) or call +91 73830 79825.",
          },
        },
        {
          "@type": "Question",
          name: "Is there parking available at the Swaroop Nagar clinic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, parking is available at the clinic premises at Bungalow No. 4, Swaroop Nagar. The clinic is also accessible by auto-rickshaw from Kidwai Nagar, Kakadeo, and Civil Lines areas.",
          },
        },
      ],
    },
  ],
};

const NEARBY_AREAS = [
  "Swaroop Nagar",
  "Kakadeo",
  "Civil Lines",
  "Kidwai Nagar",
  "Govind Nagar",
  "Rawatpur",
  "Shyam Nagar",
  "Vikas Nagar",
];

export default function SkinSpecialistSwaroopNagarPage() {
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
              113/196, Swaroop Nagar · Kanpur UP 208002
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
              Skin Specialist in
              <br />
              <span style={{ color: "#C4704E" }}>Swaroop Nagar, Kanpur</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.15rem",
                lineHeight: 1.8,
                color: "#5C4033",
                maxWidth: "600px",
                marginBottom: "2rem",
              }}
            >
              SKIN@Mantraa is the premier dermatology and cosmetology clinic in
              Swaroop Nagar. Dr. Mamta Bhura - MD Dermatology, IMS BHU - has
              served Kanpur for 26+ years from this location. Advanced
              treatments for all skin, laser, and hair concerns.
            </p>
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
                Book Appointment
              </Link>
              <a
                href={`https://wa.me/${BRAND.clinic.whatsapp}`}
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
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ── Location Details ── */}
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
                  fontSize: "1.9rem",
                  fontWeight: 600,
                  color: "#3D2B1F",
                  marginBottom: "1.25rem",
                }}
              >
                Find Us
              </h2>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: 2,
                  color: "#5C4033",
                }}
              >
                <p>Bungalow No. 4, 113/196</p>
                <p>
                  <strong>Swaroop Nagar</strong>
                </p>
                <p>Behind Hotel Royal Cliff</p>
                <p>Kanpur, Uttar Pradesh 208002</p>
              </div>
              <div
                style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                <a
                  href={`tel:${BRAND.clinic.phone}`}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "#C4704E",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  📞 {BRAND.clinic.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${BRAND.clinic.whatsapp}`}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "#C4704E",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  💬 +91 98380 00024
                </a>
                <a
                  href={`mailto:${BRAND.clinic.email}`}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "#C4704E",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  ✉ {BRAND.clinic.email}
                </a>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href={`https://maps.google.com/?q=${BRAND.clinic.coordinates.lat},${BRAND.clinic.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "0.7rem 1.5rem",
                    background: "rgba(196,112,78,0.1)",
                    color: "#C4704E",
                    borderRadius: "6px",
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.9rem",
                  fontWeight: 600,
                  color: "#3D2B1F",
                  marginBottom: "1.25rem",
                }}
              >
                Clinic Hours
              </h2>
              {[
                { day: "Monday – Friday", time: "11:00 AM – 6:00 PM" },
                { day: "Saturday", time: "12:00 PM – 6:00 PM" },
                { day: "Sunday", time: "10:00 AM – 2:00 PM" },
              ].map(({ day, time }) => (
                <div
                  key={day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(199,141,107,0.15)",
                    padding: "0.8rem 0",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      color: "#3D2B1F",
                      fontWeight: 600,
                    }}
                  >
                    {day}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      color: "#8C6F5E",
                    }}
                  >
                    {time}
                  </span>
                </div>
              ))}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "#8C6F5E",
                  marginTop: "1rem",
                  lineHeight: 1.6,
                }}
              >
                Walk-ins welcome. Book in advance via WhatsApp for a specific
                time slot. Consultation fee: ₹600.
              </p>
            </div>
          </div>
        </section>

        {/* ── Areas Served ── */}
        <section style={{ background: "#FDF6EC", padding: "4rem 1.5rem" }}>
          <div className="max-w-4xl mx-auto">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.9rem",
                fontWeight: 600,
                color: "#3D2B1F",
                marginBottom: "0.75rem",
              }}
            >
              Serving All of Kanpur
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "#8C6F5E",
                marginBottom: "1.75rem",
              }}
            >
              Patients from across Kanpur visit SKIN@Mantraa for specialist
              dermatology care unavailable elsewhere in the city.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {NEARBY_AREAS.map((area) => (
                <span
                  key={area}
                  style={{
                    padding: "0.4rem 1rem",
                    background: "#FFFFFF",
                    color: "#5C4033",
                    fontSize: "0.9rem",
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    borderRadius: "999px",
                    border: "1px solid rgba(199,141,107,0.2)",
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Treatments Quick List ── */}
        <section style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div className="max-w-4xl mx-auto">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.9rem",
                fontWeight: 600,
                color: "#3D2B1F",
                marginBottom: "2rem",
              }}
            >
              Available at Our Swaroop Nagar Clinic
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                "Laser Hair Removal (Nd:YAG / Diode)",
                "HIFU Non-Surgical Facelift",
                "Botox & Dermal Fillers",
                "Thread Lift",
                "Dermapen 4 Microneedling",
                "Chemical Peels",
                "PRP Hair Treatment",
                "GFC Hair Treatment",
                "Melasma Treatment",
                "Vitiligo Phototherapy",
                "Tattoo Removal",
                "Carbon Laser Facial",
                "Acne & Scar Treatment",
                "Pigmentation Correction",
                "Medical Dermatology",
                "Hair Loss Diagnosis",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "0.75rem 1rem",
                    background: "#FDF6EC",
                    borderRadius: "8px",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "#3D2B1F",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "#C4704E", fontWeight: 700 }}>✓</span>{" "}
                  {item}
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/services"
                style={{
                  display: "inline-block",
                  padding: "0.8rem 2rem",
                  background: "#C4704E",
                  color: "#ffffff",
                  borderRadius: "6px",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                }}
              >
                View All Services
              </Link>
              <Link
                href="/dermatologist-kanpur"
                style={{
                  display: "inline-block",
                  padding: "0.8rem 2rem",
                  background: "transparent",
                  color: "#3D2B1F",
                  border: "1.5px solid rgba(61,43,31,0.2)",
                  borderRadius: "6px",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                }}
              >
                About Our Dermatologist
              </Link>
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
              Common Questions
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
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            background: "#3D2B1F",
            padding: "4rem 1.5rem",
            textAlign: "center",
          }}
        >
          <div className="max-w-2xl mx-auto">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                fontWeight: 600,
                color: "#FDF6EC",
                marginBottom: "0.75rem",
              }}
            >
              Visit Our Swaroop Nagar Clinic
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "rgba(253,246,236,0.75)",
                marginBottom: "2rem",
                lineHeight: 1.8,
              }}
            >
              Consultation: ₹600 · Walk-ins welcome · Monday–Sunday
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
                Book Appointment
              </Link>
              <a
                href={`tel:${BRAND.clinic.phone}`}
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
                {BRAND.clinic.phoneDisplay}
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
