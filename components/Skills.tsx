"use client";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

// Flattened into a single array to match the continuous block layout from the design
const skillsList = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Redis",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "Redux Toolkit",
  "RESTful APIs",
  "+ More",
];

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
          <h2 className={styles.sectionTitle}>
            <span className={styles.orangeDot}></span> Skills
          </h2>

          {/* Render as a single wrapping container instead of mapped groups */}
          <div className={styles.pills}>
            {skillsList.map((skill, index) => (
              <motion.span
                key={skill}
                className={styles.pill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.03, // Staggered fade-in
                }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}