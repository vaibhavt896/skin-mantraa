import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Skin Doctor in Kidwai Nagar Kanpur — SKIN@Mantraa by Dr. Mamta Bhura",
  description:
    "Skin doctor near Kidwai Nagar, Kanpur — SKIN@Mantraa at Swaroop Nagar. Dr. Mamta Bhura, MD Dermatology (IMS BHU), 26+ years. Laser hair removal, acne scars, Botox, hair loss treatment. Consultation ₹600.",
  keywords: [
    "skin doctor Kidwai Nagar Kanpur",
    "dermatologist Kidwai Nagar",
    "skin clinic near Kidwai Nagar Kanpur",
    "best skin doctor near Kidwai Nagar",
    "laser hair removal Kidwai Nagar Kanpur",
    "acne treatment Kidwai Nagar Kanpur",
  ],
  alternates: {
    canonical: "https://skinmantraa.in/skin-doctor-kidwai-nagar-kanpur",
  },
  openGraph: {
    title: "Skin Doctor in Kidwai Nagar Kanpur — SKIN@Mantraa",
    description:
      "SKIN@Mantraa at Swaroop Nagar serves Kidwai Nagar patients. Dr. Mamta Bhura — MD Dermatology, IMS BHU, 26+ years. Full-range dermatology and cosmetology.",
    url: "https://skinmantraa.in/skin-doctor-kidwai-nagar-kanpur",
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
        { "@type": "Place", name: "Kidwai Nagar, Kanpur" },
        { "@type": "Place", name: "Swaroop Nagar, Kanpur" },
      ],
      medicalSpecialty: "Dermatology",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best skin doctor near Kidwai Nagar Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SKIN@Mantraa at Swaroop Nagar is approximately 4 km from Kidwai Nagar and is the leading advanced dermatology clinic for the area. Dr. Mamta Bhura — MBBS MD Dermatology (IMS BHU), 26+ years experience — has been ranked #1 dermatologist in Kanpur by ThreeBestRated.in.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get to SKIN@Mantraa from Kidwai Nagar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SKIN@Mantraa is at Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff, Kanpur 208002. From Kidwai Nagar, this is approximately 4 km — a 12–18 minute drive.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get laser hair removal near Kidwai Nagar Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. SKIN@Mantraa at Swaroop Nagar (4 km from Kidwai Nagar) offers laser hair removal using Nd:YAG 1064nm and diode laser — both clinically safe for Indian skin (Fitzpatrick III–V). Most patients need 6–8 sessions for 70–90% permanent hair reduction.",
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

export default function KidwaiNagarPage() {
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
                Local Guide · Kidwai Nagar, Kanpur
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 600, lineHeight: 1.15, color: "#3D2B1F", marginBottom: "1.25rem", letterSpacing: "-0.025em" }}>
              Skin Doctor Near Kidwai Nagar, Kanpur
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", lineHeight: 1.75, color: "#5C4033", marginBottom: "1.5rem" }}>
              SKIN@Mantraa, Swaroop Nagar — clinical and cosmetic dermatology for Kidwai Nagar patients. Dr. Mamta Bhura, MD Dermatology, IMS BHU.
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
                SKIN@Mantraa at Swaroop Nagar is approximately 4 km from Kidwai Nagar — the nearest advanced skin clinic for the area. Dr. Mamta Bhura (MBBS, MD Dermatology, IMS BHU) offers clinical and cosmetic dermatology including laser, Botox, acne, hair loss, and skin disease treatment. Consultation: ₹600.
              </p>
            </div>

            <h2 style={styles.heading2}>Advanced Dermatology for Kidwai Nagar Patients</h2>
            <p style={styles.para}>
              Kidwai Nagar is a densely populated and well-established area of Kanpur. Patients from here regularly visit SKIN@Mantraa for both medical skin concerns — vitiligo, psoriasis, eczema, fungal infections — and cosmetic treatments like laser hair removal, acne scar correction, and anti-aging procedures.
            </p>
            <p style={styles.para}>
              The clinic is located at Swaroop Nagar, roughly 12–18 minutes from Kidwai Nagar. Dr. Mamta Bhura has been a practising dermatologist in Kanpur for over 26 years, trained at IMS BHU, and maintains memberships in IMA, IADVL, and the Cosmetology Society of India.
            </p>

            <h2 style={styles.heading2}>Most Common Treatments for Kidwai Nagar Patients</h2>
            <ul style={{ margin: "0.5rem 0 1.25rem 1.5rem", listStyle: "disc" }}>
              {[
                "Laser hair removal — safe for dark Indian skin tones",
                "Acne treatment and acne scar correction (Dermapen 4, chemical peels)",
                "Melasma and post-inflammatory pigmentation",
                "Botox and dermal fillers",
                "PRP and GFC for hair fall",
                "HIFU non-surgical skin tightening",
                "Vitiligo, psoriasis, eczema management",
              ].map((item, i) => (
                <li key={i} style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.75, color: "#2d2d2d", marginBottom: "0.4rem" }}>
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={styles.heading2}>Book an Appointment</h2>
            <p style={styles.para}>
              Clinic hours: Mon–Fri 11 AM–6 PM, Sat 12 PM–6 PM, Sun 10 AM–2 PM. Contact: {BRAND.clinic.phoneDisplay}. WhatsApp bookings accepted.
            </p>

            {/* FAQ */}
            <div style={{ marginTop: "3rem", borderTop: "1px solid rgba(199,141,107,0.2)", paddingTop: "2rem" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)", fontWeight: 600, color: "#3D2B1F", marginBottom: "1.5rem" }}>
                Questions from Kidwai Nagar Patients
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { q: "Is SKIN@Mantraa the nearest good skin clinic to Kidwai Nagar?", a: "Yes. SKIN@Mantraa at Swaroop Nagar is approximately 4 km from Kidwai Nagar and is widely regarded as the most advanced dermatology clinic in this part of Kanpur." },
                  { q: "Can I get acne scar treatment near Kidwai Nagar?", a: "Yes. Acne scar treatment at SKIN@Mantraa includes Dermapen 4 microneedling, TCA CROSS for ice-pick scars, subcision for rolling scars, and chemical peels for surface texture. Treatment is sequenced based on scar type — Dr. Bhura assesses each patient individually." },
                  { q: "Is there a female dermatologist near Kidwai Nagar Kanpur?", a: "Yes. Dr. Mamta Bhura is a female dermatologist at SKIN@Mantraa, Swaroop Nagar — approximately 4 km from Kidwai Nagar. She is Kanpur's leading female dermatologist with 26+ years of clinical experience." },
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
                Book at SKIN@Mantraa — Serving Kidwai Nagar
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(253,246,236,0.7)", marginBottom: "1rem", lineHeight: 1.7 }}>
                Clinical and cosmetic dermatology. Consultation ₹600. No upselling, no pressure.
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
