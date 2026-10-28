"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const socialLinks = [
  { icon: "𝔹", label: "Behance", color: "#1769ff", href: "#" },
  { icon: "𝔽", label: "Framer", color: "#8855ff", href: "#" },
  { icon: "𝕃", label: "LinkedIn", color: "#0a66c2", href: "#" },
  { icon: "𝕏", label: "Twitter", color: "#888", href: "#" },
  { icon: "𝔾", label: "GitHub", color: "#aaa", href: "#" },
  { icon: "𝕀", label: "Instagram", color: "#e1306c", href: "#" },
  { icon: "𝔻", label: "Dribbble", color: "#ea4c89", href: "#" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Hero() {
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
          <img
            src="https://framerusercontent.com/images/3dpALmvrIR88qPmbDlYoTyJSig.png"
            alt="Designer Avatar"
            className={styles.avatar}
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              t.style.display = "none";
            }}
          />
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
          A UX & Product Designer crafting purposeful digital experiences.
          <br />
          Currently open to full-time & freelance opportunities.
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

        {/* Social icons */}
        <motion.div className={styles.socials} {...fadeUp(0.6)}>
          {socialLinks.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              className={styles.socialIcon}
              style={{ "--glow": s.color } as React.CSSProperties}
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.96 }}
              title={s.label}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
