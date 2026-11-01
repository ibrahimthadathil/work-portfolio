"use client";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className={styles.section}>
      {/* Background glow effect matching the image */}
      <div className={styles.orb} />

      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className={styles.statement}>
            {t.about.map((seg, i) =>
              seg.badge ? (
                <span key={i} className={styles.badge}>
                  {seg.text}
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              ),
            )}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
