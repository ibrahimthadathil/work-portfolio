"use client";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skillGroups = [
  {
    label: "Design",
    skills: ["Figma", "Framer", "Webflow", "Principle", "Protopie", "PrototypeAI"],
  },
  {
    label: "Research",
    skills: ["User Interviews", "Usability Testing", "Card Sorting", "A/B Testing"],
  },
  {
    label: "Dev",
    skills: ["HTML/CSS", "React", "TypeScript", "Next.js", "Tailwind"],
  },
  {
    label: "Tools",
    skills: ["Notion", "Linear", "Jira", "Miro", "Slack", "Loom"],
  },
];

const colors = ["#7c3aed", "#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6"];

export default function Skills() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Skills</h2>

          <div className={styles.groups}>
            {skillGroups.map((g, gi) => (
              <div key={g.label} className={styles.group}>
                <span className={styles.groupLabel}>{g.label}</span>
                <div className={styles.pills}>
                  {g.skills.map((s, si) => (
                    <motion.span
                      key={s}
                      className={styles.pill}
                      style={{ "--clr": colors[(gi * 2 + si) % colors.length] } as React.CSSProperties}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: (gi * 4 + si) * 0.04 }}
                      whileHover={{ scale: 1.06 }}
                    >
                      {s}
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
