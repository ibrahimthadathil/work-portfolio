"use client";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import { useLanguage } from "./LanguageProvider";
import type { Content } from "@/lib/i18n/content";

type Entry = Content["experience"]["jobs"][number];

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <div className={styles.list}>
      {entries.map((j, i) => (
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
            {j.period && <span className={styles.period}>{j.period}</span>}
          </div>
          {j.points.length > 0 && (
            <ul className={styles.points}>
              {j.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function Experience() {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>
            <span className={styles.orangeDot}></span> {experience.title}
          </h2>
        </motion.div>
        <EntryList entries={experience.jobs} />

        <motion.div
          className={`${styles.header} ${styles.subSection}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>
            <span className={styles.orangeDot}></span> {experience.educationTitle}
          </h2>
        </motion.div>
        <EntryList entries={experience.education} />
      </div>
    </section>
  );
}
