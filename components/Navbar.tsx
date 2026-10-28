"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Navbar.module.css";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          <span className={styles.logoText}>athos</span>
        </a>

        {/* Links */}
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={styles.link}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="mailto:hello@athos.design" className={styles.cta}>
          Get in touch
        </a>
      </div>
    </motion.nav>
  );
}
