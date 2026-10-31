"use client";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
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
            Web designer and expert in <span className={styles.badge}>UX/UI Design</span> with over{" "}
            <span className={styles.badge}>15 years</span> of industry experience. Expertise extends to{" "}
            <span className={styles.badge}>Framer Development</span> enabling him to create<br className={styles.break} /> 
            both aesthetically pleasing and easily implementable.<br className={styles.break} /> 
            Currently works as <span className={styles.badge}>Product Designer</span> at FLYR Hospitality
          </h2>
        </motion.div>
      </div>
    </section>
  );
}