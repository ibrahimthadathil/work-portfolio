"use client";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { useLanguage } from "./LanguageProvider";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>
            <span className={styles.orangeDot}></span> {t.skills.title}
          </h2>

          <div className={styles.groups}>
            {t.skills.groups.map((group) => (
              <div key={group.name} className={styles.group}>
                <h3 className={styles.groupName}>{group.name}</h3>
                <div className={styles.pills}>
                  {group.items.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className={styles.pill}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
