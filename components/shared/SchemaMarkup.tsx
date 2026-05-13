import { BRAND } from "@/lib/constants";

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": "https://skinmantraa.in/#clinic",
        name: BRAND.name,
        alternateName: ["Skin Mantraa", "Skin Mantra Kanpur", "Skin Mantraa Clinic"],
        description:
          "Premier dermatology and cosmetology clinic in Kanpur, led by Dr. Mamta Bhura, MBBS MD Dermatology (IMS BHU), with 26+ years of clinical experience in laser treatments, anti-aging, acne care, hair restoration, and skin disease treatment.",
        url: "https://skinmantraa.in",
        telephone: BRAND.clinic.phone,
        email: BRAND.clinic.email,
        image: "https://skinmantraa.in/opengraph-image",
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Credit Card",
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
        hasMap: `https://maps.google.com/?q=${BRAND.clinic.coordinates.lat},${BRAND.clinic.coordinates.lng}`,
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
        medicalSpecialty: "Dermatology",
        sameAs: [
          "https://www.instagram.com/skinmantraa_official/",
          "https://www.facebook.com/skinmantraaofficial12/",
          "https://www.practo.com/kanpur/doctor/mamta-bhura-dermatologist",
          "https://www.justdial.com/Kanpur/Dr-Mamta-Bhura-Near-Domino-s-Swaroop-Nagar/0512PX512-X512-160830213024-J7A4_BZDET/reviews",
        ],
        founder: { "@id": "https://skinmantraa.in/about#doctor" },
      },
      {
        "@type": "Physician",
        "@id": "https://skinmantraa.in/about#doctor",
        name: BRAND.doctor.name,
        honorificPrefix: "Dr.",
        honorificSuffix: "MBBS, MD (Dermatology)",
        gender: "Female",
        jobTitle: "Dermatologist and Cosmetologist",
        description: `MBBS MD Dermatology, IMS BHU. ${BRAND.doctor.experience} years clinical experience. Former Consultant, Kaya Skin Clinic Delhi. Kanpur's leading female dermatologist. Rated #1 by ThreeBestRated.in. IMA, IADVL, CDSI member.`,
        medicalSpecialty: ["Dermatology", "Cosmetology"],
        image: "https://skinmantraa.in/opengraph-image",
        url: "https://skinmantraa.in/about",
        sameAs: [
          "https://www.practo.com/kanpur/doctor/mamta-bhura-dermatologist",
          "https://www.justdial.com/Kanpur/Dr-Mamta-Bhura-Near-Domino-s-Swaroop-Nagar/0512PX512-X512-160830213024-J7A4_BZDET/reviews",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Institute of Medical Sciences, Banaras Hindu University (IMS BHU)",
          url: "https://www.bhu.ac.in",
        },
        memberOf: [
          {
            "@type": "Organization",
            name: "Indian Medical Association",
            alternateName: "IMA",
            url: "https://www.ima-india.org/ima/",
          },
          {
            "@type": "Organization",
            name: "Indian Association of Dermatologists, Venereologists and Leprologists",
            alternateName: "IADVL",
            url: "https://iadvl.org/",
          },
          {
            "@type": "Organization",
            name: "Cosmetology Society of India",
            alternateName: "CDSI",
            url: "https://cdsi.in/",
          },
        ],
        worksFor: { "@id": "https://skinmantraa.in/#clinic" },
        knowsAbout: [
          "Laser Hair Removal",
          "Nd:YAG Laser Kanpur",
          "Diode Laser Hair Removal",
          "Laser Pigmentation Treatment",
          "Tattoo Removal",
          "Carbon Laser Facial",
          "Skin Resurfacing",
          "Acne Treatment",
          "Acne Scar Removal",
          "Dermapen 4 Microneedling",
          "Chemical Peels",
          "Anti-Aging",
          "Botox",
          "Dermal Fillers",
          "Thread Lift",
          "HIFU Skin Tightening",
          "Hair Restoration",
          "PRP Therapy",
          "GFC Hair Treatment",
          "Mesotherapy for Hair",
          "Hair Loss Treatment",
          "Vitiligo",
          "Vitiligo Phototherapy",
          "Melasma",
          "Psoriasis",
          "Eczema",
          "Pigmentation Treatment",
          "Indian Skin Dermatology",
          "Fitzpatrick Type III-V Skin Treatment",
          "Female Dermatologist Kanpur",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
