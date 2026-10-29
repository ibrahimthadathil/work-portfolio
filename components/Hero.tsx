"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const socialLinks = [
  { label: "Behance",  icon: "Be", color: "#1769ff", href: "#" },
  { label: "Framer",   icon: "Fr", color: "#8855ff", href: "#" },
  { label: "LinkedIn", icon: "in", color: "#0a66c2", href: "#" },
  { label: "Twitter",  icon: "𝕏",  color: "#aaaaaa", href: "#" },
  { label: "GitHub",   icon: "",  color: "#cccccc", href: "#" },
  { label: "Instagram",icon: "ig", color: "#e1306c", href: "#" },
  { label: "Dribbble", icon: "",  color: "#ea4c89", href: "#" },
  { label: "Figma",    icon: "F",  color: "#f24e1e", href: "#" },
  { label: "Notion",   icon: "N",  color: "#ffffff", href: "#" },
  { label: "Medium",   icon: "M",  color: "#00ab6c", href: "#" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Hero() {
  // Double the list for seamless infinite loop
  const marqueeItems = [...socialLinks, ...socialLinks];

  return (
    <section className={styles.hero}>
      {/* Background orb */}
      <div className={styles.orb} />

      <div className={`container ${styles.content}`}>
        {/* Availability badge */}
        <motion.div className={styles.badge} {...fadeUp(0.1)}>
          <span className={styles.dot} />
          Available for work
        </motion.div>

        {/* Avatar */}
        <motion.div className={styles.avatarWrap} {...fadeUp(0.2)}>
          <div className={styles.avatarFallback}>AD</div>
        </motion.div>

        {/* Headline */}
        <motion.h1 className={styles.headline} {...fadeUp(0.3)}>
          Designed for Designers to
          <br />
          <span className={styles.italic}>showcase their work.</span>
        </motion.h1>

        {/* Sub text */}
        <motion.p className={styles.sub} {...fadeUp(0.4)}>
          A UX &amp; Product Designer crafting purposeful digital experiences.
          <br />
          Currently open to full-time &amp; freelance opportunities.
        </motion.p>

        {/* CTA buttons */}
        <motion.div className={styles.ctas} {...fadeUp(0.5)}>
          <a href="#work" className={styles.ctaPrimary}>
            View my work
          </a>
          <a href="mailto:hello@athos.design" className={styles.ctaSecondary}>
            Say hello →
          </a>
        </motion.div>
      </div>

      {/* ── Infinite Marquee Social Icons ── */}
      <motion.div
        className={styles.marqueeOuter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        {/* Left fade */}
        <div className={`${styles.fadeEdge} ${styles.fadeLeft}`} />

        <div className={styles.marqueeTrack}>
          {marqueeItems.map((s, i) => (
            <a
              key={`${s.label}-${i}`}
              href={s.href}
              className={styles.marqueeItem}
              style={{ "--glow": s.color } as React.CSSProperties}
              title={s.label}
            >
              <span className={styles.iconText}>{s.icon}</span>
              <span className={styles.iconLabel}>{s.label}</span>
            </a>
          ))}
        </div>

        {/* Right fade */}
        <div className={`${styles.fadeEdge} ${styles.fadeRight}`} />
      </motion.div>
    </section>
  );
}
