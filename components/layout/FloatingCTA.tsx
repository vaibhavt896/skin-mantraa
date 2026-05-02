"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { BRAND } from "@/lib/constants";

const WhatsAppIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.882l6.244-1.637A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.011-1.374l-.36-.213-3.707.972.988-3.61-.234-.37A9.818 9.818 0 0 1 2.182 12C2.182 6.568 6.568 2.182 12 2.182c5.432 0 9.818 4.386 9.818 9.818 0 5.432-4.386 9.818-9.818 9.818z" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
  </svg>
);

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [waHovered, setWaHovered] = useState(false);
  const [phoneHovered, setPhoneHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    onScroll();
    onResize();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Hide on /contact on mobile — avoid competing with booking form submit
  const isContactPage = pathname === "/contact";
  if (isContactPage && isMobile) return null;

  const whatsappUrl = `https://wa.me/${BRAND.clinic.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20at%20SKIN%40Mantraa.`;
  const phoneUrl = `tel:${BRAND.clinic.phone}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="floating-cta"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="fixed z-50 flex flex-col gap-3"
          style={{
            bottom: "1.5rem",
            right: "1.5rem",
            willChange: "transform",
          }}
          aria-label="Quick contact options"
        >
          {/* WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 0.35, ease: "easeOut" }}
            className="relative flex items-center justify-end"
          >
            {/* Pulse rings */}
            <motion.span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "rgba(76, 175, 80, 0.35)", zIndex: 0 }}
              animate={{
                scale: [1, 1.4, 1.4],
                opacity: [0.4, 0, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "rgba(76, 175, 80, 0.2)", zIndex: 0 }}
              animate={{
                scale: [1, 1.4, 1.4],
                opacity: [0.4, 0, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.6,
              }}
            />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="relative flex items-center gap-3 rounded-full text-white transition-all duration-300"
              style={{
                background: "#25D366",
                boxShadow: waHovered
                  ? "0 8px 32px rgba(37,211,102,0.5)"
                  : "0 4px 20px rgba(37,211,102,0.35)",
                padding: waHovered ? "0.75rem 1.25rem" : "0.875rem",
                zIndex: 1,
              }}
              onMouseEnter={() => setWaHovered(true)}
              onMouseLeave={() => setWaHovered(false)}
            >
              <WhatsAppIcon />
              <AnimatePresence>
                {waHovered && (
                  <motion.span
                    key="wa-label"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Chat on WhatsApp
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          </motion.div>

          {/* Phone Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.35, ease: "easeOut" }}
            className="relative flex items-center justify-end"
          >
            <a
              href={phoneUrl}
              aria-label={`Call ${BRAND.clinic.phoneDisplay}`}
              className="relative flex items-center gap-3 rounded-full text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #C4704E 0%, #C78D6B 100%)",
                boxShadow: phoneHovered
                  ? "0 8px 32px rgba(196,112,78,0.5)"
                  : "0 4px 20px rgba(196,112,78,0.35)",
                padding: phoneHovered ? "0.75rem 1.25rem" : "0.875rem",
              }}
              onMouseEnter={() => setPhoneHovered(true)}
              onMouseLeave={() => setPhoneHovered(false)}
            >
              <PhoneIcon />
              <AnimatePresence>
                {phoneHovered && (
                  <motion.span
                    key="phone-label"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {BRAND.clinic.phoneDisplay}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
