# SKIN@Mantraa — Dermatology Clinic Website

> **Live production website for Dr. Mamta Bhura's dermatology clinic in Kanpur, India.**  
> Built with Next.js 16 App Router, TypeScript, Tailwind CSS 4, and Framer Motion.

---

## Overview

SKIN@Mantraa is a full-featured, SEO-optimised clinic website for a specialist dermatologist with 26+ years of experience. The project demonstrates a production-grade frontend architecture: performance-focused rendering strategy, schema-validated forms, an interactive multi-step diagnostic tool, and a polished luxury design system — all without a UI kit.

**Live site:** [skinmantraa.com](https://skinmantraa.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + custom design tokens |
| Animations | Framer Motion 12 |
| Forms | React Hook Form 7 + Zod 4 |
| Icons | Lucide React |
| Compiler | React Compiler (Babel plugin) |
| Linting | ESLint 9 (flat config) |

---

## Key Features

### Pages & Routes

| Route | Description |
|---|---|
| `/` | Landing page — hero, trust bar, doctor intro, services, testimonials, location CTA |
| `/about` | Doctor biography, career timeline (1998–present), credentials, memberships |
| `/services` | 6 service categories with treatments, process workflow, and FAQ accordion |
| `/contact` | Booking form with Zod validation, clinic info, embedded Google Maps |
| `/skin-analysis` | Interactive 6-step skin analysis tool |
| `/results` | Before/after transformation gallery with category filters |
| `/skin-guide` | Educational dermatology article hub with category filtering |

### Interactive Skin Analysis Tool

A multi-step diagnostic questionnaire built entirely in React without any third-party wizard library:

- 10 concern types (acne, pigmentation, aging, hair loss, rashes, moles, eczema, scars, dark circles, sun damage)
- Optional photo upload via camera or file input
- Dynamic per-concern questionnaire (5–6 questions each)
- Weighted scoring algorithm in [`lib/skin-analysis.ts`](lib/skin-analysis.ts) producing:
  - Skin Score (0–100)
  - Severity level (mild → severe)
  - Urgency level (routine → urgent)
  - Top condition matches with confidence scores
  - Personalised recommendations and lifestyle tips
- Animated step transitions with Framer Motion

### Form Validation

The booking form ([`app/contact/BookingForm.tsx`](app/contact/BookingForm.tsx)) uses React Hook Form with a Zod v4 schema:

- Full name (min 2 chars)
- Phone (Indian 10-digit format, `[6-9]\d{9}`)
- Email (optional, validated with `z.email()`)
- Treatment selection (populated from constants)
- Preferred date (min: today, via `.refine()`)
- Animated success state

### Design System

Custom design tokens defined in [`tailwind.config.ts`](tailwind.config.ts) — no component library used:

**Colour palette:**

| Token | Hex | Usage |
|---|---|---|
| `brand.cream` | `#FDF6EC` | Page backgrounds |
| `brand.rosegold` | `#C78D6B` | Primary accents, borders |
| `brand.terracotta` | `#C4704E` | CTAs, highlights |
| `brand.espresso` | `#3D2B1F` | Primary text |
| `brand.champagne` | `#F5E6D3` | Section backgrounds |

**Typography:**
- Display: Cormorant Garamond (Google Fonts, 300–700)
- Body: DM Sans (Google Fonts, 300–700)
- Accent: Outfit (Google Fonts, 400–700)

### SEO & Structured Data

- Per-page `Metadata` exported from each route via [`lib/seo.ts`](lib/seo.ts)
- `SchemaMarkup` component injects JSON-LD for:
  - `MedicalBusiness` (clinic address, coordinates, hours)
  - `Physician` (doctor credentials, specialisation)
- OpenGraph + Twitter card images
- Canonical URLs on every page

---

## Project Structure

```
skin-mantraa/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (fonts, schema markup)
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx          # Doctor bio & timeline
│   ├── contact/
│   │   ├── page.tsx            # Contact & directions
│   │   └── BookingForm.tsx     # Validated booking form (client component)
│   ├── services/
│   │   ├── page.tsx            # Services listing (server component)
│   │   └── ServicesClient.tsx  # FAQ accordion (client component)
│   ├── skin-analysis/page.tsx  # Multi-step analysis tool
│   ├── skin-guide/page.tsx     # Article hub
│   └── results/page.tsx        # Before/after gallery
│
├── components/
│   ├── home/                   # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── DoctorIntro.tsx
│   │   ├── ServicesShowcase.tsx
│   │   ├── TestimonialsWall.tsx
│   │   ├── LocationCTA.tsx
│   │   ├── SkinAnalysisCTA.tsx
│   │   └── TrustBar.tsx
│   ├── layout/                 # Global layout
│   │   ├── Header.tsx          # Sticky nav with mobile menu + services dropdown
│   │   ├── Footer.tsx
│   │   └── FloatingCTA.tsx     # Scroll-triggered WhatsApp + phone buttons
│   ├── shared/
│   │   ├── SectionHeader.tsx   # Reusable animated section titles
│   │   ├── CTABlock.tsx        # Full-width CTA with particle animation
│   │   └── SchemaMarkup.tsx    # JSON-LD structured data
│   └── skin-analysis/
│       └── SkinAnalysisTool.tsx
│
├── lib/
│   ├── constants.ts            # BRAND, SERVICES, TESTIMONIALS, TRUST_STATS
│   ├── seo.ts                  # Metadata generators
│   ├── animations.ts           # Framer Motion variant presets
│   └── skin-analysis.ts        # Scoring engine + condition database
│
├── public/
│   ├── images/                 # Clinic & doctor photos
│   └── og-image.svg            # OpenGraph social preview image
│
├── .env.example                # Environment variable template
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/skin-mantraa.git
cd skin-mantraa

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Architecture Decisions

**Server vs Client components** — Pages are server components by default for fast initial load and SEO. Only interactive sections (booking form, FAQ accordion, skin analysis tool, navigation) are marked `"use client"`, minimising client-side JavaScript.

**No CSS framework / UI kit** — All components are written from scratch with Tailwind utility classes and custom design tokens. This keeps the bundle lean and the design fully brand-specific.

**Zod v4 schema validation** — Forms use `z.email()` (the Zod v4 top-level format validator) instead of the deprecated `z.string().email()` chain, keeping the project current with library conventions.

**React Compiler** — Enabled via the Babel plugin in `next.config.ts`, automatically memoising components without manual `useMemo`/`useCallback` calls.

**Animation architecture** — Framer Motion variants are centralised in [`lib/animations.ts`](lib/animations.ts) and shared across components, keeping animation definitions consistent and out of JSX.

---

## Deployment

The project is optimised for deployment on [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect the GitHub repository to Vercel for automatic deployments on push.

**Environment variables** to configure in the Vercel dashboard (see [`.env.example`](.env.example)):
- `NEXT_PUBLIC_SITE_URL`
- `APPOINTMENTS_API_URL` + `APPOINTMENTS_API_KEY` (when backend is integrated)
- `NEXT_PUBLIC_GA_ID` (for analytics)

---

## Roadmap

- [ ] Backend API for appointment bookings (email notifications via Resend)
- [ ] Individual article pages under `/skin-guide/[slug]`
- [ ] Real before/after patient images with consent management
- [ ] Google Analytics 4 integration
- [ ] WhatsApp Business API for automated booking confirmations

---

## About the Clinic

**Dr. Mamta Bhura** — MBBS, MD Dermatology (IMS BHU)  
Consultant Dermatologist & Cosmetologist with 26+ years of clinical experience across HIHT Dehradun, Kaya Skin Clinic New Delhi, and her own practice.

**SKIN@Mantraa**  
Bungalow No. 4, 113/196, Swaroop Nagar (Behind Hotel Royal Cliff)  
Kanpur, Uttar Pradesh 208002  
[+91 73830 79825](tel:+917383079825) · [skinmantraa@gmail.com](mailto:skinmantraa@gmail.com)

---

*Built with Next.js App Router · Deployed on Vercel*
