import { BRAND } from "@/lib/constants";

export default function SchemaMarkup() {
  const medicalBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: BRAND.name,
    description:
      "Premier dermatology and cosmetology clinic in Kanpur, Uttar Pradesh",
    url: "https://skinmantraa.com",
    telephone: BRAND.clinic.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BRAND.clinic.address}, ${BRAND.clinic.landmark}`,
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
        opens: "16:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    priceRange: "₹₹",
    image: "https://skinmantraa.com/images/Clinic%20Front%20Look.png",
    medicalSpecialty: "Dermatology",
  };

  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: BRAND.doctor.name,
    description: `${BRAND.doctor.specialization} with ${BRAND.doctor.experience} years experience`,
    medicalSpecialty: "Dermatology",
    qualification: ["MBBS - IMS BHU", "MD Dermatology - IMS BHU"],
    memberOf: [
      { "@type": "Organization", name: "Indian Medical Association" },
      {
        "@type": "Organization",
        name: "Indian Association of Dermatologists, Venereologists and Leprologists",
      },
      { "@type": "Organization", name: "Cosmetology Society of India" },
    ],
    worksFor: { "@type": "MedicalBusiness", name: BRAND.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physician) }}
      />
    </>
  );
}
