"use client";

import Link from "next/link";
import { BRAND, SERVICES } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Dr. Bhura", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Skin Analysis", href: "/skin-analysis" },
  { label: "Before & After", href: "/results" },
  { label: "Skin Guide", href: "/skin-guide" },
  { label: "Book Appointment", href: "/contact" },
];

const HOURS = [
  { day: "Monday – Friday", time: "11:00 AM – 6:00 PM" },
  { day: "Saturday", time: "4:00 PM – 8:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#2C1810", color: "#F5E6D3" }}>
      {/* Social Proof Strip */}
      <div
        style={{
          background: "rgba(199,141,107,0.12)",
          borderBottom: "1px solid rgba(199,141,107,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-center gap-6 flex-wrap">
          {BRAND.doctor.memberships.map((m, i) => (
            <span
              key={m}
              className="flex items-center gap-2"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: "#D4A76A",
                textTransform: "uppercase",
              }}
            >
              {i > 0 && (
                <span
                  style={{ color: "rgba(199,141,107,0.4)", fontSize: "0.6rem" }}
                  aria-hidden="true"
                >
                  ◆
                </span>
              )}
              {m} Member
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo + About */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex flex-col leading-none mb-4">
              <span className="flex items-baseline gap-0.5">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.625rem",
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: "#F5E6D3",
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                  }}
                >
                  SKIN
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.625rem",
                    fontStyle: "italic",
                    fontWeight: 700,
                    color: "#C4704E",
                    lineHeight: 1,
                    filter: "drop-shadow(0 0 8px rgba(196,112,78,0.5))",
                  }}
                >
                  @
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "1.375rem",
                    fontWeight: 500,
                    color: "#F5E6D3",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                  }}
                >
                  Mantraa
                </span>
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  color: "#C78D6B",
                  textTransform: "uppercase",
                  marginTop: "3px",
                }}
              >
                {BRAND.tagline}
              </span>
            </div>

            <p
              className="mt-4 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "rgba(245,230,211,0.65)",
                maxWidth: "26ch",
              }}
            >
              {BRAND.doctor.shortBio}
            </p>

            <p
              className="mt-4"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.8125rem",
                color: "#D4A76A",
                letterSpacing: "0.02em",
              }}
            >
              {BRAND.doctor.name}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                color: "rgba(245,230,211,0.5)",
              }}
            >
              {BRAND.doctor.title}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.6875rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4A76A",
              }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 transition-colors duration-200 group/link"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "rgba(245,230,211,0.65)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#F5E6D3")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(245,230,211,0.65)")
                    }
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "#C78D6B",
                        flexShrink: 0,
                        display: "inline-block",
                      }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.6875rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4A76A",
              }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="flex items-center gap-2 transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "rgba(245,230,211,0.65)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#F5E6D3")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(245,230,211,0.65)")
                    }
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "#C78D6B",
                        flexShrink: 0,
                        display: "inline-block",
                      }}
                    />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + Hours */}
          <div>
            <h4
              className="mb-6"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.6875rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4A76A",
              }}
            >
              Contact & Hours
            </h4>

            {/* Address */}
            <div className="flex gap-3 mb-5">
              <svg
                className="mt-0.5 flex-shrink-0"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C78D6B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    color: "rgba(245,230,211,0.65)",
                    lineHeight: 1.6,
                  }}
                >
                  {BRAND.clinic.address}
                  <br />
                  {BRAND.clinic.landmark}
                  <br />
                  {BRAND.clinic.city}
                </p>
              </div>
            </div>

            {/* Phone */}
            <a
              href={`tel:${BRAND.clinic.phone}`}
              className="flex items-center gap-3 mb-3 transition-colors duration-200"
              style={{ textDecoration: "none" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#F5E6D3")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "rgba(245,230,211,0.65)")
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C78D6B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "rgba(245,230,211,0.65)",
                }}
              >
                {BRAND.clinic.phoneDisplay}
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${BRAND.clinic.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mb-3 transition-colors duration-200"
              style={{ textDecoration: "none" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#F5E6D3")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "rgba(245,230,211,0.65)")
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#4CAF50"
                style={{ flexShrink: 0 }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.882l6.244-1.637A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.011-1.374l-.36-.213-3.707.972.988-3.61-.234-.37A9.818 9.818 0 0 1 2.182 12C2.182 6.568 6.568 2.182 12 2.182c5.432 0 9.818 4.386 9.818 9.818 0 5.432-4.386 9.818-9.818 9.818z" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "rgba(245,230,211,0.65)",
                }}
              >
                WhatsApp Us
              </span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${BRAND.clinic.email}`}
              className="flex items-center gap-3 mb-6 transition-colors duration-200"
              style={{ textDecoration: "none" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#F5E6D3")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "rgba(245,230,211,0.65)")
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C78D6B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  color: "rgba(245,230,211,0.65)",
                }}
              >
                {BRAND.clinic.email}
              </span>
            </a>

            {/* Hours */}
            <div
              className="rounded-xl p-4"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(199,141,107,0.12)" }}
            >
              <p
                className="mb-3"
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#D4A76A",
                }}
              >
                Clinic Hours
              </p>
              <div className="flex flex-col gap-2">
                {HOURS.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-baseline gap-4">
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        color: "rgba(245,230,211,0.55)",
                        flexShrink: 0,
                      }}
                    >
                      {day}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "0.75rem",
                        color: "rgba(245,230,211,0.8)",
                        textAlign: "right",
                      }}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(199,141,107,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "rgba(245,230,211,0.4)",
            }}
          >
            &copy; {currentYear} SKIN@Mantraa. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "rgba(245,230,211,0.4)",
            }}
          >
            Designed with care for{" "}
            <span style={{ color: "#C78D6B" }}>{BRAND.doctor.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
