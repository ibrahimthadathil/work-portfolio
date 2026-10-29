"use client";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

const links = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className={styles.logoBlock}>
            <span className={styles.logo}>
              <span className={styles.logoIcon}>✦</span> athos
            </span>
            <p className={styles.tagline}>
              Designed for Designers.<br />Built with Framer.
            </p>
          </div>

          {/* Links */}
          <div className={styles.linkGroup}>
            {links.map((l) => (
              <a key={l.label} href={l.href} className={styles.link}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Bottom */}
          <div className={styles.bottom}>
            <span>© {new Date().getFullYear()} Athos Design. All rights reserved.</span>
            <a href="mailto:hello@athos.design" className={styles.email}>
              hello@athos.design
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
