"use client";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      {/* Glowing orb */}
      <div className={styles.orb} />

      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Header row */}
          <div className={styles.header}>
            <div className={styles.avatarRow}>
              <div className={styles.avatar}>AD</div>
              <div className={styles.nameBlock}>
                <span className={styles.name}>Athos Design</span>
                <span className={styles.handle}>@athos.design</span>
              </div>
              <span className={styles.badge}>UX Designer</span>
            </div>
            <div className={styles.logoRow}>
              <span className={styles.framerBadge}>✦ Framer</span>
              <span className={styles.separator}>·</span>
              <span className={styles.subBadge}>Portfolio Template</span>
            </div>
          </div>

          {/* Bio */}
          <p className={styles.bio}>
            Follow me on{" "}
            <a href="#" className={styles.accentLink}>Twitter</a>,{" "}
            <a href="#" className={styles.accentLink}>LinkedIn</a> or{" "}
            <a href="#" className={styles.accentLink}>Behance</a> to see more of my work.
            I share weekly insights on UX strategy, interaction design, and building
            products people actually love. I'm passionate about crafting thoughtful digital
            experiences that balance aesthetics and functionality.
          </p>

          {/* Stats row */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>6+</span>
              <span className={styles.statLbl}>Years experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>40+</span>
              <span className={styles.statLbl}>Projects shipped</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>12</span>
              <span className={styles.statLbl}>Happy clients</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
