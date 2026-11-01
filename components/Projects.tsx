"use client";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { useLanguage } from "./LanguageProvider";

const gradients = [
  "linear-gradient(135deg, #1a0a2e, #2d1b69)",
  "linear-gradient(135deg, #1a0505, #400d0d)",
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>{t.clients.title}</h2>
        </motion.div>

        <div className={styles.list}>
          {t.clients.items.map((p, i) => (
            <motion.div
              key={i}
              className={`${styles.item} ${styles.static}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div
                className={styles.thumb}
                style={{ background: gradients[i % gradients.length] }}
              />
              <div className={styles.info}>
                <span className={styles.cat}>{p.category}</span>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
