import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Skin Specialist Near Rawatpur Kanpur — SKIN@Mantraa by Dr. Mamta Bhura",
  description:
    "Skin specialist near Rawatpur, Kanpur — SKIN@Mantraa at Swaroop Nagar. Dr. Mamta Bhura, MD Dermatology (IMS BHU), 26+ years. Laser, acne, skin disease and hair treatments. Consultation ₹600.",
  keywords: [
    "skin specialist Rawatpur Kanpur",
    "dermatologist near Rawatpur Kanpur",
    "skin clinic Rawatpur Kanpur",
    "best skin doctor near Rawatpur",
    "dermatologist near Rawatpur",
    "skin treatment Rawatpur Kanpur",
  ],
  alternates: {
    canonical: "https://skinmantraa.in/skin-specialist-rawatpur-kanpur",
  },
  openGraph: {
    title: "Skin Specialist Near Rawatpur Kanpur — SKIN@Mantraa",
    description:
      "SKIN@Mantraa at Swaroop Nagar serves Rawatpur patients. Dr. Mamta Bhura — MD Dermatology, IMS BHU, 26+ years. Clinical and cosmetic dermatology.",
    url: "https://skinmantraa.in/skin-specialist-rawatpur-kanpur",
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
        { "@type": "Place", name: "Rawatpur, Kanpur" },
        { "@type": "Place", name: "Swaroop Nagar, Kanpur" },
      ],
      medicalSpecialty: "Dermatology",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best skin clinic near Rawatpur Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SKIN@Mantraa at Swaroop Nagar is the nearest advanced dermatology clinic to Rawatpur — approximately 7 km, or 20–25 minutes by road. It is led by Dr. Mamta Bhura, MBBS MD Dermatology (IMS BHU), ranked #1 dermatologist in Kanpur by ThreeBestRated.in.",
          },
        },
        {
          "@type": "Question",
          name: "Does SKIN@Mantraa serve patients from Rawatpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Patients from Rawatpur regularly visit SKIN@Mantraa for clinical and cosmetic dermatology. The clinic is at Swaroop Nagar, approximately 20–25 minutes from Rawatpur.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a dermatologist for vitiligo near Rawatpur Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dr. Mamta Bhura at SKIN@Mantraa is an MD Dermatologist with extensive experience in vitiligo treatment including NB-UVB phototherapy. She has helped vitiligo patients from Rawatpur, Govind Nagar, and across Kanpur achieve meaningful repigmentation.",
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

export default function RawatpurPage() {
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
                Local Guide · Rawatpur, Kanpur
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 600, lineHeight: 1.15, color: "#3D2B1F", marginBottom: "1.25rem", letterSpacing: "-0.025em" }}>
              Skin Specialist Near Rawatpur, Kanpur
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", lineHeight: 1.75, color: "#5C4033", marginBottom: "1.5rem" }}>
              SKIN@Mantraa, Swaroop Nagar — advanced clinical and cosmetic dermatology for Rawatpur patients. Dr. Mamta Bhura, MD Dermatology, IMS BHU.
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
                SKIN@Mantraa at Swaroop Nagar is approximately 7 km from Rawatpur — the nearest premium dermatology clinic. Dr. Mamta Bhura (MBBS, MD Dermatology, IMS BHU, 26+ years) offers the full range of clinical and cosmetic dermatology. Consultation: ₹600.
              </p>
            </div>

            <h2 style={styles.heading2}>Advanced Skin Care for Rawatpur Patients</h2>
            <p style={styles.para}>
              Rawatpur is a residential area in Kanpur that falls within SKIN@Mantraa&apos;s served catchment. Patients from Rawatpur visit the clinic at Swaroop Nagar for a wide range of concerns — from chronic skin diseases like vitiligo, psoriasis, and eczema to cosmetic procedures like laser hair removal, Botox, and acne scar treatment.
            </p>
            <p style={styles.para}>
              Dr. Mamta Bhura trained at IMS BHU, has practised dermatology in Kanpur for over 26 years, and sees patients by appointment. Her practice is built on clinical accuracy: she diagnoses before she treats, and she is direct about what a given treatment can and cannot achieve.
            </p>

            <h2 style={styles.heading2}>What Rawatpur Patients Can Access at SKIN@Mantraa</h2>
            <ul style={{ margin: "0.5rem 0 1.25rem 1.5rem", listStyle: "disc" }}>
              {[
                "Laser hair removal — Nd:YAG 1064nm, safe for Indian skin",
                "Vitiligo treatment with NB-UVB phototherapy",
                "Psoriasis, eczema, and allergic dermatitis management",
                "Acne and acne scar treatment — Dermapen 4, chemical peels",
                "Melasma and pigmentation treatment",
                "PRP and GFC for hair fall",
                "Botox, dermal fillers, HIFU anti-aging",
                "Full-body skin check and mole evaluation",
              ].map((item, i) => (
                <li key={i} style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.75, color: "#2d2d2d", marginBottom: "0.4rem" }}>
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={styles.heading2}>Clinic Location and Hours</h2>
            <p style={styles.para}>
              SKIN@Mantraa is located at Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff, Kanpur 208002. From Rawatpur, the clinic is approximately 7 km — a 20–25 minute drive. Open Mon–Fri 11 AM–6 PM, Saturday 12 PM–6 PM, Sunday 10 AM–2 PM. Contact: {BRAND.clinic.phoneDisplay}.
            </p>

            {/* FAQ */}
            <div style={{ marginTop: "3rem", borderTop: "1px solid rgba(199,141,107,0.2)", paddingTop: "2rem" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)", fontWeight: 600, color: "#3D2B1F", marginBottom: "1.5rem" }}>
                Questions from Rawatpur Patients
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { q: "Is SKIN@Mantraa accessible from Rawatpur?", a: "Yes. From Rawatpur, the clinic is approximately 7 km at Swaroop Nagar — a 20–25 minute drive by car or auto. It is easily accessible from the Rawatpur Crossing direction via Swaroop Nagar Road." },
                  { q: "Can I get vitiligo treatment near Rawatpur Kanpur?", a: "Yes. Dr. Mamta Bhura at SKIN@Mantraa offers vitiligo treatment including NB-UVB phototherapy, topical immunomodulators, and combination protocols. She has treated vitiligo patients from Rawatpur and across Kanpur with meaningful outcomes." },
                  { q: "What is the cost of consultation at SKIN@Mantraa?", a: "₹600 for a consultation. This includes examination, diagnosis, and a clear treatment plan. You are under no obligation to proceed with any procedure at the first visit." },
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
                Book at SKIN@Mantraa — Serving Rawatpur, Kanpur
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(253,246,236,0.7)", marginBottom: "1rem", lineHeight: 1.7 }}>
                Clinical and cosmetic dermatology. Consultation ₹600. Honest, no-pressure care.
              </p>
              <p style={{ fontFamily: "var(--font-accent)", fontSize: "0.9rem", color: "#C78D6B", marginBottom: "0.25rem" }}>
                {BRAND.clinic.phoneDisplay} &nbsp;·&nbsp; Swaroop Nagar, Kanpur 208002
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginTop: "1.25rem" }}>
                <Link href="/contact" className="btn-primary" style={{ borderRadius: "10px" }}>Book Consultation</Link>
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
