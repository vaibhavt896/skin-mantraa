"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { BRAND, SERVICES } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Skin Analysis", href: "/skin-analysis", isFeature: true },
  { label: "Results", href: "/results" },
  { label: "Skin Guide", href: "/skin-guide" },
  { label: "Contact", href: "/contact" },
];

const menuOverlayVariants: Variants = {
  closed: { opacity: 0, y: "-100%" },
  open: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const linkVariants: Variants = {
  closed: { opacity: 0, y: 24 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.07, duration: 0.4, ease: "easeOut" },
  }),
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleDropdownEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(253, 246, 236, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          boxShadow: scrolled
            ? "0 1px 24px rgba(61, 43, 31, 0.08)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span className="flex items-baseline gap-0.5">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: "#3D2B1F",
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                  }}
                >
                  SKIN
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    fontStyle: "italic",
                    fontWeight: 700,
                    color: "#C4704E",
                    lineHeight: 1,
                    filter: "drop-shadow(0 0 8px rgba(196,112,78,0.45))",
                    transition: "filter 0.3s ease",
                  }}
                  className="group-hover:drop-shadow-[0_0_12px_rgba(196,112,78,0.7)]"
                >
                  @
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "#3D2B1F",
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
                  fontSize: "0.625rem",
                  letterSpacing: "0.18em",
                  color: "#C78D6B",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                {BRAND.tagline}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full border border-black/5 bg-white/5 backdrop-blur-sm">
              {NAV_LINKS.map((link) => {
                const isHovered = hoveredLink === link.label;
                return link.hasDropdown ? (
                  <div
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => {
                      handleDropdownEnter();
                      setHoveredLink(link.label);
                    }}
                    onMouseLeave={() => {
                      handleDropdownLeave();
                      setHoveredLink(null);
                    }}
                  >
                    <button
                      className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1.5"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "#3D2B1F",
                        letterSpacing: "0.01em",
                        zIndex: 1,
                      }}
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{
                          transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          color: "#C78D6B",
                        }}
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {isHovered && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-black/[0.04] -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl overflow-hidden"
                          style={{
                            background: "rgba(253, 246, 236, 0.98)",
                            backdropFilter: "blur(20px)",
                            boxShadow: "0 20px 40px rgba(61, 43, 31, 0.15), 0 0 0 1px rgba(199,141,107,0.1)",
                          }}
                        >
                          <div className="p-2">
                            {SERVICES.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services#${service.id}`}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group/item hover:bg-[#C78D6B]/10"
                                style={{ color: "#3D2B1F" }}
                                onClick={() => setServicesOpen(false)}
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover/item:scale-125"
                                  style={{ background: "#C78D6B" }}
                                />
                                <span
                                  style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                  }}
                                >
                                  {service.title}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div
                            className="px-6 py-4 border-t bg-black/[0.02]"
                            style={{ borderColor: "rgba(199,141,107,0.12)" }}
                          >
                            <Link
                              href="/services"
                              className="text-xs font-semibold flex items-center gap-1.5"
                              style={{
                                fontFamily: "var(--font-accent)",
                                color: "#C4704E",
                                letterSpacing: "0.05em",
                              }}
                              onClick={() => setServicesOpen(false)}
                            >
                              EXPLORE ALL SERVICES
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.isFeature ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                      position: "relative",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      padding: "0.5rem 1.1rem",
                      borderRadius: "100px",
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      color: "#C4704E",
                      background: "transparent padding-box, linear-gradient(135deg, #C4704E 0%, #D4A76A 100%) border-box",
                      border: "1.5px solid transparent",
                      boxShadow: "0 2px 12px rgba(196,112,78,0.12)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 1,
                    }}
                    onMouseEnter={(e) => {
                      setHoveredLink(link.label);
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "scale(1.03) translateY(-1px)";
                      el.style.boxShadow = "0 6px 20px rgba(196,112,78,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      setHoveredLink(null);
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "scale(1) translateY(0)";
                      el.style.boxShadow = "0 2px 12px rgba(196,112,78,0.12)";
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M8 1l1.4 4.2H14l-3.6 2.6 1.4 4.2L8 9.5 4.2 12l1.4-4.2L2 5.2h4.6L8 1z" />
                    </svg>
                    {link.label}
                    {isHovered && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-black/[0.04] -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-4 py-2 text-sm font-medium transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "#3D2B1F",
                      letterSpacing: "0.01em",
                      zIndex: 1,
                    }}
                  >
                    {link.label}
                    {isHovered && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-black/[0.04] -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300"
                style={{
                  fontFamily: "var(--font-accent)",
                  background: "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)",
                  boxShadow: "0 4px 20px rgba(196,112,78,0.3)",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(196,112,78,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(196,112,78,0.3)";
                }}
              >
                Book Appointment
              </Link>

              {/* Hamburger */}
              <button
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <motion.span
                  className="block w-6 h-px rounded-full"
                  style={{ background: "#3D2B1F" }}
                  animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="block w-6 h-px rounded-full"
                  style={{ background: "#3D2B1F" }}
                  animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-6 h-px rounded-full"
                  style={{ background: "#3D2B1F" }}
                  animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuOverlayVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col lg:hidden"
            style={{ background: "#FDF6EC" }}
          >
            {/* Top spacing for header */}
            <div className="h-20" />

            <div className="flex-1 flex flex-col px-8 py-10 overflow-y-auto">
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 py-4 border-b"
                      style={{
                        fontFamily: link.isFeature ? "var(--font-accent)" : "var(--font-display)",
                        fontSize: link.isFeature ? "1.4rem" : "2rem",
                        fontStyle: link.isFeature ? "normal" : "italic",
                        fontWeight: 600,
                        color: link.isFeature ? "#C4704E" : "#3D2B1F",
                        lineHeight: 1.1,
                        borderColor: link.isFeature ? "rgba(196,112,78,0.25)" : "rgba(199,141,107,0.15)",
                        letterSpacing: link.isFeature ? "0.02em" : "-0.01em",
                      }}
                    >
                      {link.isFeature && (
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                          <path d="M8 1l1.4 4.2H14l-3.6 2.6 1.4 4.2L8 9.5 4.2 12l1.4-4.2L2 5.2h4.6L8 1z" />
                        </svg>
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.4 } }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-center"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Book Appointment
                </Link>
              </motion.div>

              <motion.div
                className="mt-auto pt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.65 } }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "#C78D6B",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {BRAND.tagline}
                </p>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "#5C4033",
                  }}
                >
                  {BRAND.clinic.phoneDisplay}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
