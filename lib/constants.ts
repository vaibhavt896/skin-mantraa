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
      saturday: "Saturday: 4:00 PM – 8:00 PM",
      sunday: "Sunday: 10:00 AM – 2:00 PM",
    },
    coordinates: { lat: 26.4614, lng: 80.3416 },
  },
};

export const SERVICES = [
  {
    id: "laser-treatments",
    title: "Advanced Laser Treatments",
    shortDesc: "Nd-YAG, IPL, Diode, Q-Switch & Fractional lasers for precise results",
    icon: "laser",
    color: "from-brand-blush to-brand-champagne",
    featured: true,
    image: "/optimized/Laser%20Treatment%20Image.webp",
    treatments: ["Nd-YAG Laser", "IPL Therapy", "Diode Laser", "Q-Switch Laser", "Fractional CO2"],
  },
  {
    id: "anti-aging",
    title: "Anti-Aging & Rejuvenation",
    shortDesc: "Botox, Fillers, Thread Lifts & Mesotherapy to restore youthful radiance",
    icon: "sparkles",
    color: "from-brand-champagne to-brand-cream",
    featured: false,
    image: "/optimized/Anti-Aging%20%26%20Rejuvenation.webp",
    treatments: ["Botox", "Dermal Fillers", "Thread Lift", "Mesotherapy", "Skin Boosters"],
  },
  {
    id: "acne-scars",
    title: "Acne & Scar Solutions",
    shortDesc: "Chemical Peels, Dermabrasion & Dermaroller for clear, smooth skin",
    icon: "shield",
    color: "from-brand-cream to-brand-blush",
    featured: false,
    image: "/optimized/Acne%20%26%20Scar%20Solutions.webp",
    treatments: ["Chemical Peels", "Microdermabrasion", "Dermaroller", "Subcision", "TCA Cross"],
  },
  {
    id: "hair-restoration",
    title: "Hair Restoration",
    shortDesc: "PRP therapy & laser solutions to combat hair loss effectively",
    icon: "hair",
    color: "from-brand-blush to-brand-champagne",
    featured: false,
    image: "/optimized/Hair%20Restoration.webp",
    treatments: ["PRP Therapy", "Laser Hair Removal", "Mesotherapy for Hair", "GFC Treatment"],
  },
  {
    id: "skin-conditions",
    title: "Skin Disease Treatment",
    shortDesc: "Medical expertise for Eczema, Vitiligo, Psoriasis & Fungal infections",
    icon: "medical",
    color: "from-brand-champagne to-brand-cream",
    featured: false,
    image: "/optimized/Skin%20Disease%20Treatment.webp",
    treatments: ["Eczema", "Vitiligo", "Psoriasis", "Fungal Infections", "Allergic Dermatitis"],
  },
  {
    id: "cosmetic",
    title: "Cosmetic Enhancements",
    shortDesc: "Tattoo removal, pigmentation correction & sun damage reversal",
    icon: "star",
    color: "from-brand-cream to-brand-champagne",
    featured: false,
    image: "/optimized/Cosmetic%20Enhancements.webp",
    treatments: ["Tattoo Removal", "Pigmentation", "Sun Damage", "Melasma", "Skin Brightening"],
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
