import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Skin Clinic Near Kakadeo Kanpur — SKIN@Mantraa, Swaroop Nagar",
  description:
    "Looking for a skin clinic near Kakadeo, Kanpur? SKIN@Mantraa in Swaroop Nagar is just 3 km away. Dr. Mamta Bhura — MD Dermatology, IMS BHU, 26+ years experience. Laser, anti-aging, acne and hair treatments.",
  keywords: [
    "skin clinic Kakadeo Kanpur",
    "dermatologist near Kakadeo",
    "skin doctor Kakadeo Kanpur",
    "best skin clinic near Kakadeo",
    "laser treatment near Kakadeo Kanpur",
    "dermatologist Swaroop Nagar near Kakadeo",
  ],
  alternates: {
    canonical: "https://skinmantraa.in/skin-clinic-kakadeo-kanpur",
  },
  openGraph: {
    title: "Skin Clinic Near Kakadeo Kanpur — SKIN@Mantraa",
    description:
      "SKIN@Mantraa in Swaroop Nagar is the nearest premium dermatology clinic to Kakadeo, Kanpur. Dr. Mamta Bhura — 26+ years, MD Dermatology, IMS BHU.",
    url: "https://skinmantraa.in/skin-clinic-kakadeo-kanpur",
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
        streetAddress: "Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.0",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "451",
      },
      areaServed: [
        { "@type": "City", name: "Kanpur" },
        { "@type": "Place", name: "Kakadeo, Kanpur" },
        { "@type": "Place", name: "Swaroop Nagar, Kanpur" },
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
          name: "Which skin clinic near Kakadeo Kanpur is best?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SKIN@Mantraa in Swaroop Nagar is approximately 3 km from Kakadeo and is the closest premium dermatology clinic in the area. It is led by Dr. Mamta Bhura — MBBS MD Dermatology (IMS BHU) with 26+ years of clinical experience, ranked #1 dermatologist in Kanpur by ThreeBestRated.in.",
          },
        },
        {
          "@type": "Question",
          name: "How far is SKIN@Mantraa from Kakadeo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SKIN@Mantraa is located at Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff, Kanpur — approximately 3 km from Kakadeo. The clinic is easily accessible by auto, cab, or personal vehicle.",
          },
        },
        {
          "@type": "Question",
          name: "What skin treatments are available near Kakadeo Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At SKIN@Mantraa (near Kakadeo), treatments include laser hair removal, Nd:YAG and diode laser, Botox, dermal fillers, HIFU skin tightening, Dermapen 4 for acne scars, PRP and GFC for hair loss, chemical peels, melasma treatment, vitiligo phototherapy, and full-spectrum medical dermatology.",
          },
        },
        {
          "@type": "Question",
          name: "Does SKIN@Mantraa serve patients from Kakadeo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. SKIN@Mantraa regularly serves patients from Kakadeo, Govind Nagar, Civil Lines, Kidwai Nagar, and across Kanpur. The clinic is a short drive from Kakadeo — approximately 10–15 minutes depending on traffic.",
          },
        },
      ],
    },
  ],
};

const styles = {
  heading2: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)",
    fontWeight: 600,
    color: "#3D2B1F",
    marginTop: "2.5rem",
    marginBottom: "1rem",
    paddingLeft: "0.75rem",
    borderLeft: "3px solid #C4704E",
    lineHeight: 1.3,
  } as React.CSSProperties,
  para: {
    fontFamily: "var(--font-body)",
    fontSize: "1.05rem",
    lineHeight: 1.85,
    color: "#2d2d2d",
    marginBottom: "1.25rem",
  } as React.CSSProperties,
};

export default function KakadeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main style={{ background: "#FDF6EC" }}>
        <article className="pt-40 pb-24">
          <header className="max-w-4xl mx-auto px-6 lg:px-8 mb-14">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
              <span style={{ padding: "0.2rem 0.85rem", background: "rgba(196,112,78,0.1)", color: "#7a3b1e", fontSize: "0.72rem", fontFamily: "var(--font-accent)", fontWeight: 600, letterSpacing: "0.08em", borderRadius: "999px", textTransform: "uppercase" }}>
                Local Guide · Kakadeo, Kanpur
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 600, lineHeight: 1.15, color: "#3D2B1F", marginBottom: "1.25rem", letterSpacing: "-0.025em" }}>
              Skin Clinic Near Kakadeo, Kanpur
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", lineHeight: 1.75, color: "#5C4033", marginBottom: "1.5rem" }}>
              SKIN@Mantraa, Swaroop Nagar — the nearest premium dermatology clinic to Kakadeo. Led by Dr. Mamta Bhura, MD Dermatology, IMS BHU.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Book Consultation — ₹600</Link>
              <a href={`tel:${BRAND.clinic.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.65rem 1.4rem", borderRadius: "10px", border: "1px solid rgba(199,141,107,0.35)", color: "#C78D6B", fontFamily: "var(--font-accent)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
                Call Clinic
              </a>
            </div>
          </header>

          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div
              className="answer-box"
              style={{ background: "rgba(196,112,78,0.06)", borderLeft: "3px solid #C4704E", borderRadius: "0 10px 10px 0", padding: "1.1rem 1.4rem", marginBottom: "1.75rem" }}
            >
              <p style={{ fontFamily: "var(--font-accent)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4704E", margin: "0 0 0.45rem" }}>
                Quick Answer
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.75, color: "#3D2B1F", margin: 0 }}>
                SKIN@Mantraa in Swaroop Nagar is approximately 3 km from Kakadeo — the nearest advanced dermatology clinic to the area. Dr. Mamta Bhura (MBBS, MD Dermatology, IMS BHU) offers laser, anti-aging, acne, hair restoration, and skin disease treatments. Consultation fee: ₹600.
              </p>
            </div>

            <h2 style={styles.heading2}>Closest Advanced Skin Clinic to Kakadeo</h2>
            <p style={styles.para}>
              If you live in Kakadeo and need a dermatologist, SKIN@Mantraa at Swaroop Nagar is approximately 10–15 minutes away by road. The clinic is located at Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff — a well-known landmark in the area.
            </p>
            <p style={styles.para}>
              SKIN@Mantraa is led by Dr. Mamta Bhura — MBBS MD Dermatology from IMS BHU, with 26+ years of clinical experience in Kanpur. She has been ranked the #1 dermatologist in Kanpur by ThreeBestRated.in and is a verified practitioner on Practo and Justdial with a strong patient review record.
            </p>

            <h2 style={styles.heading2}>Treatments Available for Kakadeo Patients</h2>
            <p style={styles.para}>
              The full range of dermatology and cosmetology treatments is available to patients from Kakadeo at SKIN@Mantraa:
            </p>
            <ul style={{ margin: "0.5rem 0 1.25rem 1.5rem", listStyle: "disc" }}>
              {[
                "Laser hair removal — Nd:YAG 1064nm and diode laser, safe for Indian skin",
                "Botox for forehead lines, frown lines, and crow's feet",
                "Dermal fillers for cheeks, lips, and nasolabial folds",
                "HIFU non-surgical skin tightening",
                "PRP and GFC hair restoration for hair fall",
                "Dermapen 4 microneedling for acne scars",
                "Chemical peels for pigmentation and skin texture",
                "Melasma and hyperpigmentation treatment",
                "Vitiligo, psoriasis, eczema, and fungal skin conditions",
              ].map((item, i) => (
                <li key={i} style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.75, color: "#2d2d2d", marginBottom: "0.4rem" }}>
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={styles.heading2}>Why Patients from Kakadeo Choose SKIN@Mantraa</h2>
            <p style={styles.para}>
              Most patients from Kakadeo tell us the same thing: they tried local options first, and eventually came to SKIN@Mantraa because they needed an accurate diagnosis, a clear treatment plan, and a doctor who would be honest about what can and cannot be treated.
            </p>
            <p style={styles.para}>
              Dr. Bhura trained at IMS BHU — one of India's most respected medical institutions for dermatology. Her approach is clinical first: she does not offer treatments that are not indicated, and she does not upsell procedures that are unlikely to help your specific condition. Consultation is ₹600, with no hidden costs.
            </p>

            <h2 style={styles.heading2}>Clinic Hours and Location</h2>
            <p style={styles.para}>
              SKIN@Mantraa is open Monday to Friday 11:00 AM – 6:00 PM, Saturday 12:00 PM – 6:00 PM, and Sunday 10:00 AM – 2:00 PM. To book: call {BRAND.clinic.phoneDisplay} or WhatsApp {BRAND.clinic.whatsapp.replace("+91", "+91 ")}.
            </p>

            {/* FAQ */}
            <div style={{ marginTop: "3rem", borderTop: "1px solid rgba(199,141,107,0.2)", paddingTop: "2rem" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)", fontWeight: 600, color: "#3D2B1F", marginBottom: "1.5rem" }}>
                Questions from Kakadeo Patients
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  {
                    q: "How far is SKIN@Mantraa from Kakadeo?",
                    a: "Approximately 3 km, roughly 10–15 minutes by road depending on traffic. The clinic is at Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff, Kanpur.",
                  },
                  {
                    q: "Is there a dermatologist in Kakadeo itself?",
                    a: "SKIN@Mantraa in Swaroop Nagar serves as the primary advanced dermatology clinic for Kakadeo and the surrounding neighbourhoods. It is the closest clinic offering the full range of clinical and cosmetic dermatology.",
                  },
                  {
                    q: "Does Dr. Mamta Bhura see patients from Kakadeo?",
                    a: "Yes. Dr. Bhura regularly sees patients from Kakadeo, Govind Nagar, Civil Lines, and all parts of Kanpur. Appointments can be booked by phone or WhatsApp.",
                  },
                  {
                    q: "What is the consultation fee?",
                    a: "Consultation with Dr. Mamta Bhura is ₹600. This is a clinical consultation — she examines your skin, makes a diagnosis, and gives you a clear treatment plan and realistic expectations. No upselling.",
                  },
                ].map(({ q, a }, i) => (
                  <details key={i} style={{ border: "1px solid rgba(199,141,107,0.2)", borderRadius: "10px", overflow: "hidden" }}>
                    <summary style={{ padding: "1rem 1.25rem", fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "#3D2B1F", background: "#f8f7f4", cursor: "pointer", listStyle: "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
                      {q}
                      <span aria-hidden="true" style={{ color: "#C78D6B", fontWeight: 400, fontSize: "1.25rem", lineHeight: 1, flexShrink: 0 }}>+</span>
                    </summary>
                    <p style={{ padding: "0.875rem 1.25rem 1rem", fontFamily: "var(--font-body)", fontSize: "0.97rem", lineHeight: 1.8, color: "#444", margin: 0 }}>{a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ background: "#3D2B1F", borderRadius: "14px", padding: "2rem 1.75rem", marginTop: "2.5rem", textAlign: "center" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "#FDF6EC", marginBottom: "0.5rem" }}>
                Book Your Consultation at SKIN@Mantraa
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(253,246,236,0.7)", marginBottom: "1rem", lineHeight: 1.7 }}>
                Serving Kakadeo and all of Kanpur. Honest diagnosis, clear plan, no pressure.
              </p>
              <p style={{ fontFamily: "var(--font-accent)", fontSize: "0.9rem", color: "#C78D6B", marginBottom: "0.25rem" }}>
                {BRAND.clinic.phoneDisplay} &nbsp;·&nbsp; WhatsApp: {BRAND.clinic.whatsapp}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginTop: "1.25rem" }}>
                <Link href="/contact" className="btn-primary" style={{ borderRadius: "10px" }}>
                  Book Consultation
                </Link>
                <Link href="/dermatologist-kanpur" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.65rem 1.4rem", borderRadius: "10px", border: "1px solid rgba(199,141,107,0.35)", color: "#C78D6B", fontFamily: "var(--font-accent)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
                  About the Clinic
                </Link>
              </div>
            </div>

            <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(199,141,107,0.15)" }}>
              <Link href="/skin-specialist-swaroop-nagar" style={{ fontFamily: "var(--font-accent)", fontSize: "0.88rem", color: "#C4704E", textDecoration: "none", fontWeight: 600 }}>
                ← Skin Specialist in Swaroop Nagar
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
