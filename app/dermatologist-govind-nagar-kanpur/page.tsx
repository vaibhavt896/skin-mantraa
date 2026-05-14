import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dermatologist Near Govind Nagar Kanpur — SKIN@Mantraa",
  description:
    "Dermatologist near Govind Nagar, Kanpur — SKIN@Mantraa at Swaroop Nagar. Dr. Mamta Bhura, MD Dermatology (IMS BHU), 26+ years experience. Laser, anti-aging, hair and skin disease treatments. Consultation ₹600.",
  keywords: [
    "dermatologist Govind Nagar Kanpur",
    "skin clinic near Govind Nagar",
    "skin doctor Govind Nagar Kanpur",
    "best dermatologist near Govind Nagar",
    "laser treatment Govind Nagar Kanpur",
    "hair loss treatment Govind Nagar Kanpur",
  ],
  alternates: {
    canonical: "https://skinmantraa.in/dermatologist-govind-nagar-kanpur",
  },
  openGraph: {
    title: "Dermatologist Near Govind Nagar Kanpur — SKIN@Mantraa",
    description:
      "SKIN@Mantraa at Swaroop Nagar is the nearest advanced dermatology clinic to Govind Nagar, Kanpur. Dr. Mamta Bhura — 26+ years, MD Dermatology.",
    url: "https://skinmantraa.in/dermatologist-govind-nagar-kanpur",
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
        { "@type": "Place", name: "Govind Nagar, Kanpur" },
        { "@type": "Place", name: "Swaroop Nagar, Kanpur" },
      ],
      medicalSpecialty: "Dermatology",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which dermatologist is best near Govind Nagar Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dr. Mamta Bhura at SKIN@Mantraa, Swaroop Nagar is widely recommended for patients from Govind Nagar. The clinic is approximately 6 km away — a 20-minute drive. Dr. Bhura holds an MD in Dermatology from IMS BHU, has 26+ years experience, and is ranked #1 by ThreeBestRated.in.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a skin clinic near Govind Nagar in Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SKIN@Mantraa at Swaroop Nagar serves Govind Nagar patients and is the closest premium dermatology clinic — approximately 6 km, or 18–22 minutes by road.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get PRP hair treatment near Govind Nagar Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. SKIN@Mantraa at Swaroop Nagar offers both PRP (Platelet-Rich Plasma) and GFC (Growth Factor Concentrate) hair loss treatments. Both are performed by Dr. Mamta Bhura and are evidence-supported for androgenetic alopecia when follicles are still active.",
          },
        },
      ],
    },
  ],
};

const styles = {
  heading2: { fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)", fontWeight: 600, color: "#3D2B1F", marginTop: "2.5rem", marginBottom: "1rem", paddingLeft: "0.75rem", borderLeft: "3px solid #C4704E", lineHeight: 1.3 } as React.CSSProperties,
  para: { fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.85, color: "#2d2d2d", marginBottom: "1.25rem" } as React.CSSProperties,
};

export default function GovindNagarPage() {
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
                Local Guide · Govind Nagar, Kanpur
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 600, lineHeight: 1.15, color: "#3D2B1F", marginBottom: "1.25rem", letterSpacing: "-0.025em" }}>
              Dermatologist Near Govind Nagar, Kanpur
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", lineHeight: 1.75, color: "#5C4033", marginBottom: "1.5rem" }}>
              SKIN@Mantraa at Swaroop Nagar — Kanpur&apos;s leading dermatology clinic for Govind Nagar patients. Dr. Mamta Bhura, MD Dermatology, IMS BHU.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Book Consultation — ₹600</Link>
              <a href={`tel:${BRAND.clinic.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.65rem 1.4rem", borderRadius: "10px", border: "1px solid rgba(199,141,107,0.35)", color: "#C78D6B", fontFamily: "var(--font-accent)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
                Call Clinic
              </a>
            </div>
          </header>

          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="answer-box" style={{ background: "rgba(196,112,78,0.06)", borderLeft: "3px solid #C4704E", borderRadius: "0 10px 10px 0", padding: "1.1rem 1.4rem", marginBottom: "1.75rem" }}>
              <p style={{ fontFamily: "var(--font-accent)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4704E", margin: "0 0 0.45rem" }}>Quick Answer</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.75, color: "#3D2B1F", margin: 0 }}>
                SKIN@Mantraa at Swaroop Nagar is approximately 6 km from Govind Nagar — the nearest advanced dermatology clinic for the area. Dr. Mamta Bhura (MBBS, MD Dermatology, IMS BHU, 26+ years) offers clinical and cosmetic dermatology. Consultation fee: ₹600.
              </p>
            </div>

            <h2 style={styles.heading2}>Serving Govind Nagar Patients at Swaroop Nagar</h2>
            <p style={styles.para}>
              Govind Nagar is one of Kanpur&apos;s larger residential colonies. Patients from the area seeking a dermatologist — whether for a chronic skin condition or a cosmetic concern — find SKIN@Mantraa at Swaroop Nagar to be the most accessible advanced clinic in the vicinity.
            </p>
            <p style={styles.para}>
              Dr. Mamta Bhura brings 26+ years of clinical practice to each patient encounter. She is trained at IMS BHU (Institute of Medical Sciences, Banaras Hindu University), holds memberships in IMA, IADVL, and the Cosmetology Society of India, and focuses on accurate diagnosis before any treatment recommendation.
            </p>

            <h2 style={styles.heading2}>What Govind Nagar Patients Come For</h2>
            <ul style={{ margin: "0.5rem 0 1.25rem 1.5rem", listStyle: "disc" }}>
              {[
                "Laser hair removal — Nd:YAG and diode laser for dark skin tones",
                "Hair loss treatment — PRP and GFC for androgenetic alopecia",
                "Botox and dermal fillers — natural-looking anti-aging",
                "HIFU non-surgical skin tightening for jawline and neck",
                "Acne and acne scar correction",
                "Melasma and pigmentation treatment for Indian skin",
                "Vitiligo, psoriasis, eczema, and other skin diseases",
                "Chemical peels and Dermapen 4 for skin texture",
              ].map((item, i) => (
                <li key={i} style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.75, color: "#2d2d2d", marginBottom: "0.4rem" }}>
                  {item}
                </li>
              ))}
            </ul>

            {/* FAQ */}
            <div style={{ marginTop: "3rem", borderTop: "1px solid rgba(199,141,107,0.2)", paddingTop: "2rem" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)", fontWeight: 600, color: "#3D2B1F", marginBottom: "1.5rem" }}>
                Questions from Govind Nagar Patients
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { q: "How far is SKIN@Mantraa from Govind Nagar?", a: "Approximately 6 km — 18–22 minutes by road. The clinic is at Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff, Kanpur 208002." },
                  { q: "Does SKIN@Mantraa treat hair loss for Govind Nagar patients?", a: "Yes. PRP and GFC hair restoration treatments are available at SKIN@Mantraa. These are evidence-supported therapies for androgenetic alopecia (pattern hair loss) that use your own blood-derived growth factors to stimulate follicle activity." },
                  { q: "What is the consultation fee at SKIN@Mantraa?", a: "₹600 for a consultation with Dr. Mamta Bhura. This includes a thorough skin examination, diagnosis, and a clear treatment plan with realistic expectations. There is no pressure to proceed with any procedure at the first visit." },
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

            <div style={{ background: "#3D2B1F", borderRadius: "14px", padding: "2rem 1.75rem", marginTop: "2.5rem", textAlign: "center" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "#FDF6EC", marginBottom: "0.5rem" }}>
                Book at SKIN@Mantraa — Serving Govind Nagar
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(253,246,236,0.7)", marginBottom: "1rem", lineHeight: 1.7 }}>
                Swaroop Nagar, Kanpur. Mon–Fri 11 AM–6 PM · Sat 12–6 PM · Sun 10 AM–2 PM
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginTop: "1.25rem" }}>
                <Link href="/contact" className="btn-primary" style={{ borderRadius: "10px" }}>Book Consultation</Link>
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
