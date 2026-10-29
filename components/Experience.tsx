"use client";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const jobs = [
  {
    company: "Notion",
    role: "Senior Product Designer",
    period: "2023 — Present",
    type: "Full-time",
  },
  {
    company: "Stripe",
    role: "UX Designer",
    period: "2021 — 2023",
    type: "Full-time",
  },
  {
    company: "Linear",
    role: "Product Designer",
    period: "2020 — 2021",
    type: "Full-time",
  },
  {
    company: "Freelance",
    role: "UI/UX Consultant",
    period: "2018 — 2020",
    type: "Contract",
  },
];

export default function Experience() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Experience</h2>
        </motion.div>

        <div className={styles.list}>
          {jobs.map((j, i) => (
            <motion.div
              key={j.company}
              className={styles.item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className={styles.left}>
                <span className={styles.company}>{j.company}</span>
                <span className={styles.role}>{j.role}</span>
              </div>
              <div className={styles.right}>
                <span className={styles.type}>{j.type}</span>
                <span className={styles.period}>{j.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
