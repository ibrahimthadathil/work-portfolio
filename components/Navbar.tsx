"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import { useLanguage } from "./LanguageProvider";
import { profile } from "@/lib/i18n/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t, toggle } = useLanguage();

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop & prevent body scroll when open
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className={styles.inner}>
          {/* Logo */}
          <a href="#" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoIcon}>✦</span>
            <span className={styles.logoText}>{profile.initials}</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className={styles.links}>
            {t.nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.link}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Language switch + CTA */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.lang}
              onClick={toggle}
              aria-label={t.nav.switchLabel}
            >
              {t.nav.switchTo}
            </button>
            <a href={`mailto:${profile.email}`} className={styles.cta}>
              {t.nav.cta}
            </a>
          </div>

          {/* Hamburger Button (Tablet & Mobile) */}
          <button
            type="button"
            className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile & Tablet Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <ul className={styles.mobileLinks}>
                {t.nav.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={styles.mobileLink} onClick={closeMenu}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className={styles.mobileDivider} />

              <div className={styles.mobileActions}>
                <button
                  type="button"
                  className={styles.mobileLang}
                  onClick={() => {
                    toggle();
                    closeMenu();
                  }}
                  aria-label={t.nav.switchLabel}
                >
                  🌐 {t.nav.switchTo}
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className={styles.mobileCta}
                  onClick={closeMenu}
                >
                  {t.nav.cta}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}