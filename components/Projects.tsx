"use client";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
  {
    id: "p1",
    title: "The Bold and the Beautiful — Product Showcase",
    category: "Case Study",
    image: "https://framerusercontent.com/images/iHc6cFFuF5Ba9NQr3a7tjB8jE.jpg",
    gradient: "linear-gradient(135deg, #1a0a2e, #2d1b69)",
  },
  {
    id: "p2",
    title: "Visual Language for a Trading Platform",
    category: "Brand Identity",
    image: "",
    gradient: "linear-gradient(135deg, #1a0505, #400d0d)",
  },
  {
    id: "p3",
    title: "Navigation Redesign for a SaaS Product",
    category: "UX Research",
    image: "",
    gradient: "linear-gradient(135deg, #050a1a, #0d1a3a)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Articles</h2>
        </motion.div>

        <div className={styles.list}>
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href="#"
              className={styles.item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ x: 4 }}
            >
              <div
                className={styles.thumb}
                style={{ background: p.gradient }}
              >
                {p.image && (
                  <img src={p.image} alt={p.title} className={styles.thumbImg} />
                )}
              </div>
              <div className={styles.info}>
                <span className={styles.cat}>{p.category}</span>
                <h3 className={styles.title}>{p.title}</h3>
              </div>
              <span className={styles.arrow}>→</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          className={styles.moreWrap}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a href="#" className={styles.more}>
            View all articles →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
