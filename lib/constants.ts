export const BRAND = {
  name: "SKIN@Mantraa",
  tagline: "Where Science Meets Your Skin",
  doctor: {
    name: "Dr. Mamta Bhura",
    title: "MBBS, MD (Dermatology)",
    university: "Institute of Medical Sciences, BHU",
    experience: "26+",
    rating: "4.0",
    patients: "451+",
    specialization: "Dermatologist & Cosmetologist",
    memberships: ["IMA", "IADVL", "CDSI"],
    bio: "Trained at one of India's most prestigious medical institutions — the Institute of Medical Sciences, BHU — Dr. Mamta Bhura brings 26+ years of clinical expertise to every patient she treats. Her approach combines cutting-edge cosmetic technology with genuine care for long-term skin health.",
    shortBio:
      "BHU Gold Medallist. 26 years of transforming skin in Kanpur. Honest diagnoses, real results.",
  },
  clinic: {
    address: "Bungalow No. 4, 113/196, Swaroop Nagar",
    landmark: "Behind Hotel Royal Cliff",
    city: "Kanpur, Uttar Pradesh 208002",
    phone: "+917383079825",
    phoneDisplay: "+91 73830 79825",
    whatsapp: "+917383079825",
    email: "skinmantraa@gmail.com",
    hours: {
      weekdays: "Mon–Fri: 11:00 AM – 6:00 PM",
      saturday: "Saturday: 12:00 PM – 4:00 PM",
      sunday: "Sunday: 10:00 AM – 2:00 PM",
    },
    coordinates: { lat: 26.48100042497026, lng: 80.31557800112557 },
  },
};

export const SERVICES = [
  {
    id: "laser-treatments",
    title: "Advanced Laser Treatments",
    shortDesc: "Precise laser solutions for hair reduction, pigmentation, tattoo removal, and skin resurfacing.",
    longDesc: "When skin concerns need precision, laser-based treatments offer control, consistency, and visible improvement. This category includes advanced systems for unwanted hair, melasma, freckles, post-acne marks, sun damage, enlarged pores, and tattoo removal. Depending on your concern, we select the right laser modality to target the problem while protecting surrounding skin — especially important for Indian skin tones.",
    icon: "laser",
    color: "from-brand-blush to-brand-champagne",
    featured: true,
    image: "/optimized/Laser%20Treatment%20Image.webp",
    treatments: [
      "Nd:YAG Laser",
      "IPL Therapy",
      "Diode Laser",
      "Triple-Wavelength Laser",
      "Q-Switch Laser",
      "Fractional CO2",
      "Carbon Laser Peel",
      "RevLite"
    ],
    ctaText: "Explore Laser Treatments"
  },
  {
    id: "anti-aging",
    title: "Anti-Aging & Rejuvenation",
    shortDesc: "Restore firmness, hydration, glow, and definition with treatments that look natural — never overdone.",
    longDesc: "Our anti-aging treatments are designed to soften lines, improve texture, support collagen, and bring back a fresher look without changing what makes your face yours. Whether you want subtle wrinkle softening, deeper skin hydration, lifted contours, or regenerative skin support, we build the plan around your age, skin condition, and aesthetic goals.",
    icon: "sparkles",
    color: "from-brand-champagne to-brand-cream",
    featured: false,
    image: "/optimized/Anti-Aging%20%26%20Rejuvenation.webp",
    treatments: [
      "Botox",
      "Dermal Fillers",
      "Thread Lift",
      "Mesotherapy",
      "Skin Boosters",
      "HIFU",
      "HydraFacial",
      "Microneedling Radiofrequency",
      "PRP for Face",
      "Exosomes",
      "PDRN",
      "Sculptra"
    ],
    ctaText: "Explore Anti-Aging"
  },
  {
    id: "acne-scars",
    title: "Acne, Scars & Pores",
    shortDesc: "Target active acne, post-acne marks, rough texture, and visible pores with customized corrective care.",
    longDesc: "Acne leaves more than breakouts behind — it often leaves redness, marks, scars, and uneven texture that can affect confidence long after the acne is gone. This section focuses on controlled, step-by-step improvement using treatments that help clear congestion, smooth scars, and refine skin texture over time.",
    icon: "shield",
    color: "from-brand-cream to-brand-blush",
    featured: false,
    image: "/optimized/Acne%20%26%20Scar%20Solutions.webp",
    treatments: [
      "Chemical Peels",
      "Dermapen 4",
      "Microdermabrasion",
      "Dermaroller",
      "Subcision",
      "TCA CROSS"
    ],
    ctaText: "Explore Acne & Scar Solutions"
  },
  {
    id: "hair-restoration",
    title: "Hair Restoration",
    shortDesc: "Doctor-led solutions for thinning hair, early hair fall, and scalp rejuvenation.",
    longDesc: "Hair loss is rarely just cosmetic — it is often emotional, frustrating, and deeply personal. Our hair restoration treatments are selected to support weaker follicles, improve scalp health, and encourage better hair density where possible. We focus on realistic expectations, proper diagnosis, and a treatment plan that matches the pattern and cause of hair loss.",
    icon: "hair",
    color: "from-brand-blush to-brand-champagne",
    featured: false,
    image: "/optimized/Hair%20Restoration.webp",
    treatments: ["PRP Therapy", "Mesotherapy for Hair", "GFC Treatment", "Scalp Rejuvenation"],
    ctaText: "Explore Hair Restoration"
  },
  {
    id: "skin-conditions",
    title: "Skin Disease Treatment",
    shortDesc: "Medical dermatology for chronic, recurring, and everyday skin concerns.",
    longDesc: "This section brings clinical dermatology to the forefront. For skin conditions that are recurring, uncomfortable, or difficult to manage on your own, our approach begins with accurate diagnosis and continues with a treatment plan that is practical, safe, and medically sound.",
    icon: "medical",
    color: "from-brand-champagne to-brand-cream",
    featured: false,
    image: "/optimized/Skin%20Disease%20Treatment.webp",
    treatments: ["Eczema", "Vitiligo", "Psoriasis", "Fungal Infections", "Allergic Dermatitis"],
    ctaText: "Explore Skin Conditions"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Enhancements",
    shortDesc: "Refine pigmentation, fade sun damage, improve tone, and restore a brighter, clearer complexion.",
    longDesc: "Some concerns are not disease — they are refinement. This category is built for patients who want to even out skin tone, reduce visible pigmentation, soften stubborn spots, and improve overall complexion quality. The goal is not to bleach or over-treat the skin, but to make it look clearer, healthier, and more balanced.",
    icon: "star",
    color: "from-brand-cream to-brand-champagne",
    featured: false,
    image: "/optimized/Cosmetic%20Enhancements.webp",
    treatments: [
      "Tattoo Removal",
      "Pigmentation Correction",
      "Melasma Treatment",
      "Sun Damage Reversal",
      "Skin Brightening",
      "Freckles and Lentigines Treatment"
    ],
    ctaText: "Explore Cosmetic Enhancements"
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya S.",
    treatment: "Laser Treatment",
    rating: 5,
    quote:
      "Dr. Bhura is absolutely wonderful. She diagnosed my skin condition accurately after two other doctors had missed it. The laser treatment results exceeded my expectations.",
    source: "Practo",
    featured: true,
  },
  {
    id: 2,
    name: "Rahul M.",
    treatment: "Acne Treatment",
    rating: 5,
    quote:
      "After struggling with acne for years, Dr. Bhura gave me clear skin in 3 months. She honestly tells you what can and cannot be treated — that trust is rare.",
    source: "Google",
    featured: false,
  },
  {
    id: 3,
    name: "Sunita K.",
    treatment: "Anti-Aging",
    rating: 5,
    quote:
      "The results from my fillers look completely natural. Everyone asks if I've been on vacation — not that I've had any procedure done. That's the mark of a true expert.",
    source: "Practo",
    featured: false,
  },
  {
    id: 4,
    name: "Amit T.",
    treatment: "PRP Hair Treatment",
    rating: 5,
    quote:
      "Started PRP 6 months ago for hair fall. The reduction is significant and new growth is visible. Dr. Bhura's guidance on maintenance has been invaluable.",
    source: "Justdial",
    featured: false,
  },
  {
    id: 5,
    name: "Kavita R.",
    treatment: "Chemical Peel",
    rating: 5,
    quote:
      "My skin has never looked this good. Dr. Bhura customized the peel perfectly for my skin type. The clinic is also very hygienic and professional.",
    source: "Google",
    featured: false,
  },
  {
    id: 6,
    name: "Deepak V.",
    treatment: "Vitiligo Treatment",
    rating: 5,
    quote:
      "Dr. Bhura gave me hope when others said nothing could be done. The phototherapy combined with her medication protocol has shown remarkable results.",
    source: "Practo",
    featured: false,
  },
];

export const TRUST_STATS = [
  { value: 26, suffix: "+", label: "Years of Experience" },
  { value: 451, suffix: "+", label: "Happy Patients" },
  { value: 28, suffix: "+", label: "Advanced Treatments" },
  { value: 3, suffix: "", label: "Memberships" },
];
