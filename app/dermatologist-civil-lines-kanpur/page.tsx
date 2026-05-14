import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dermatologist in Civil Lines Kanpur — SKIN@Mantraa by Dr. Mamta Bhura",
  description:
    "Dermatologist near Civil Lines, Kanpur — SKIN@Mantraa at Swaroop Nagar. Dr. Mamta Bhura, MD Dermatology (IMS BHU), 26+ years. Laser, Botox, acne, and skin disease treatments. Consultation ₹600.",
  keywords: [
    "dermatologist Civil Lines Kanpur",
    "skin doctor Civil Lines Kanpur",
    "skin clinic near Civil Lines",
    "best dermatologist near Civil Lines Kanpur",
    "skin specialist Civil Lines",
    "laser treatment Civil Lines Kanpur",
  ],
  alternates: {
    canonical: "https://skinmantraa.in/dermatologist-civil-lines-kanpur",
  },
  openGraph: {
    title: "Dermatologist in Civil Lines Kanpur — SKIN@Mantraa",
    description:
      "SKIN@Mantraa serves Civil Lines patients. Dr. Mamta Bhura — MD Dermatology, IMS BHU, 26+ years. Advanced laser, anti-aging, acne and hair treatments.",
    url: "https://skinmantraa.in/dermatologist-civil-lines-kanpur",
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
        { "@type": "Place", name: "Civil Lines, Kanpur" },
        { "@type": "Place", name: "Swaroop Nagar, Kanpur" },
      ],
      medicalSpecialty: "Dermatology",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is there a good dermatologist near Civil Lines Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SKIN@Mantraa at Swaroop Nagar is approximately 5 km from Civil Lines and is the recommended advanced dermatology clinic for the area. Dr. Mamta Bhura — MBBS MD Dermatology (IMS BHU), 26+ years experience — is ranked #1 dermatologist in Kanpur by ThreeBestRated.in.",
          },
        },
        {
          "@type": "Question",
          name: "How far is SKIN@Mantraa from Civil Lines Kanpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SKIN@Mantraa is located in Swaroop Nagar, approximately 5 km from Civil Lines. The drive typically takes 15–20 minutes. Address: Bungalow No. 4, 113/196, Swaroop Nagar, Behind Hotel Royal Cliff, Kanpur 208002.",
          },
        },
        {
          "@type": "Question",
          name: "What skin treatments can Civil Lines patients access at SKIN@Mantraa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The full range: laser hair removal (Nd:YAG, diode), Botox, dermal fillers, HIFU skin tightening, thread lift, PRP and GFC hair treatment, Dermapen 4 for acne scars, chemical peels, melasma treatment, and medical dermatology for vitiligo, psoriasis, eczema, and skin infections.",
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

export default function CivilLinesPage() {
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
                Local Guide · Civil Lines, Kanpur
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 600, lineHeight: 1.15, color: "#3D2B1F", marginBottom: "1.25rem", letterSpacing: "-0.025em" }}>
              Dermatologist Near Civil Lines, Kanpur
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", lineHeight: 1.75, color: "#5C4033", marginBottom: "1.5rem" }}>
              SKIN@Mantraa at Swaroop Nagar — advanced dermatology and cosmetology for Civil Lines patients. Dr. Mamta Bhura, MD Dermatology, IMS BHU.
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
              <p style={{ fontFamily: "var(--font-accent)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4704E", margin: "0 0 0.45rem" }}>
                Quick Answer
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.75, color: "#3D2B1F", margin: 0 }}>
                SKIN@Mantraa at Swaroop Nagar is the nearest premium dermatology clinic to Civil Lines, Kanpur — approximately 5 km, or 15–20 minutes by road. Dr. Mamta Bhura (MBBS, MD Dermatology, IMS BHU) has 26+ years experience and offers the full range of clinical and cosmetic dermatology. Consultation: ₹600.
              </p>
            </div>

            <h2 style={styles.heading2}>Serving Civil Lines — Advanced Dermatology at Swaroop Nagar</h2>
            <p style={styles.para}>
              Civil Lines is one of Kanpur&apos;s most established residential and commercial areas. Patients from Civil Lines regularly visit SKIN@Mantraa at Swaroop Nagar for dermatology care — the drive is straightforward and parking is available at the clinic.
            </p>
            <p style={styles.para}>
              Dr. Mamta Bhura has been practising in Kanpur for over 26 years and is recognised across the city — including Civil Lines — for accurate diagnosis and honest, evidence-based treatment. She does not run a walk-in, high-volume practice; appointments are scheduled so that each patient receives adequate time and attention.
            </p>

            <h2 style={styles.heading2}>Treatments Accessed by Civil Lines Patients</h2>
            <ul style={{ margin: "0.5rem 0 1.25rem 1.5rem", listStyle: "disc" }}>
              {[
                "Laser hair removal — Nd:YAG and diode laser, safe for all Indian skin tones",
                "Anti-aging: Botox, dermal fillers, HIFU, thread lift, PRP for face",
                "Acne and scar treatment — Dermapen 4, TCA CROSS, subcision, chemical peels",
                "Melasma and hormonal pigmentation treatment",
                "PRP and GFC for hair fall and androgenetic alopecia",
                "Medical dermatology: vitiligo, psoriasis, eczema, allergic dermatitis, fungal infections",
              ].map((item, i) => (
                <li key={i} style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.75, color: "#2d2d2d", marginBottom: "0.4rem" }}>
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={styles.heading2}>Why Civil Lines Patients Travel to SKIN@Mantraa</h2>
            <p style={styles.para}>
              Patients from Civil Lines typically come to SKIN@Mantraa because they want clinical expertise, not just cosmetic procedures. Dr. Bhura&apos;s background at IMS BHU — one of India&apos;s most respected dermatology programmes — and her 26+ years of Kanpur clinical practice means she brings diagnostic rigour that is not always present at aesthetic-only clinics.
            </p>
            <p style={styles.para}>
              For Civil Lines residents managing melasma, chronic skin conditions like vitiligo or psoriasis, or exploring Botox and fillers for the first time, the clinic&apos;s reputation for honest assessment and no-pressure consultations is a strong differentiator.
            </p>

            {/* FAQ */}
            <div style={{ marginTop: "3rem", borderTop: "1px solid rgba(199,141,107,0.2)", paddingTop: "2rem" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)", fontWeight: 600, color: "#3D2B1F", marginBottom: "1.5rem" }}>
                Questions from Civil Lines Patients
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { q: "Is SKIN@Mantraa accessible from Civil Lines Kanpur?", a: "Yes. The clinic is at Swaroop Nagar, approximately 5 km from Civil Lines — a 15–20 minute drive. Auto-rickshaws, cabs, and personal vehicles all have easy access. Parking is available near the clinic." },
                  { q: "Can I get Botox or fillers near Civil Lines Kanpur?", a: "Yes. SKIN@Mantraa at Swaroop Nagar offers Botox (botulinum toxin) and dermal fillers performed by Dr. Mamta Bhura personally. She assesses each face individually and recommends only what is genuinely needed." },
                  { q: "Is Dr. Mamta Bhura good for skin problems like psoriasis?", a: "Yes. Dr. Bhura is an MD Dermatologist with deep clinical training in medical skin conditions including psoriasis, vitiligo, eczema, and dermatitis. Her approach is evidence-based and addresses underlying cause, not just surface symptoms." },
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
                Book a Consultation at SKIN@Mantraa
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(253,246,236,0.7)", marginBottom: "1rem", lineHeight: 1.7 }}>
                Serving Civil Lines and all of Kanpur. Honest diagnosis. Consultation: ₹600.
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
