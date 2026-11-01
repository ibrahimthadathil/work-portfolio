"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import { useLanguage } from "./LanguageProvider";
import { profile } from "@/lib/i18n/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, toggle } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>✦</span>
          <span className={styles.logoText}>{profile.initials}</span>
        </a>

        {/* Links */}
        <ul className={styles.links}>
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Language switch + CTA */}
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
      </div>
    </motion.nav>
  );
}
