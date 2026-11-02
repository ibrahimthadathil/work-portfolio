"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import styles from "./WorkCards.module.css";
import { useLanguage } from "./LanguageProvider";
import type { Content } from "@/lib/i18n/content";

type Project = Content["work"]["projects"][number];

const VISUALS = ["wave", "chart", "sphere"] as const;
type VisualType = (typeof VISUALS)[number];

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statLabel}>{label}</span>
      <span className={styles.statValue}>{value}</span>
    </div>
  );
}

function Visual({ type }: { type: VisualType }) {
  if (type === "wave") {
    return (
      <div className={styles.visual} style={{ background: "transparent" }}>
        <svg viewBox="0 0 200 120" className={styles.svg}>
          <path
            d="M0 60 Q 40 20 80 60 T 160 60 T 240 60"
            fill="none"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="2.5"
          />
          <path
            d="M0 80 Q 50 40 100 80 T 200 80"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
          />
          <path
            d="M0 40 Q 30 10 60 40 T 120 40 T 180 40"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }
  if (type === "chart") {
    return (
      <div className={styles.visual} style={{ background: "transparent" }}>
        <svg viewBox="0 0 200 120" className={styles.svg}>
          <rect x="20" y="70" width="20" height="40" fill="rgba(255,255,255,0.5)" rx="3" />
          <rect x="55" y="50" width="20" height="60" fill="rgba(255,255,255,0.7)" rx="3" />
          <rect x="90" y="30" width="20" height="80" fill="rgba(255,255,255,0.9)" rx="3" />
          <rect x="125" y="45" width="20" height="65" fill="rgba(255,255,255,0.6)" rx="3" />
          <rect x="160" y="20" width="20" height="90" fill="rgba(255,255,255,1)" rx="3" />
        </svg>
      </div>
    );
  }
  return (
    <div className={styles.visual} style={{ background: "transparent" }}>
      <div className={styles.sphere} />
    </div>
  );
}

function StackCard({ project, index }: { project: Project; index: number }) {
  const slotRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: slotRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.93]);
  const rotateZ = useTransform(scrollYProgress, [0.2, 0.8], [0, -1.5]);
  const brightnessVal = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.6]);
  const filterStyle = useMotionTemplate`brightness(${brightnessVal})`;

  const cardY = useTransform(scrollYProgress, [0, 0.25], [80, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.18], [0, 1]);

  // Handle typing if project.repoUrl is not yet strictly typed in your Content interface
  const repoUrl = (project as any).repoUrl; 

  return (
    <div ref={slotRef} className={styles.cardSlot} style={{ zIndex: index + 1 }}>
      <motion.div
        className={styles.stickyHolder}
        style={{ scale, rotateZ, filter: filterStyle }}
      >
        <motion.div
          className={styles.card}
          style={{ y: cardY, opacity: cardOpacity }}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
        >
          {/* Left Column: Title, Description, Tags/Links */}
          <div className={styles.cardLeft}>
            <div className={styles.titleDesc}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardDesc}>{project.description}</p>
            </div>
            <div className={styles.tagsContainer}>
              <div className={styles.pillButton}>{project.tag}</div>
              {repoUrl && (
                <a 
                  href={repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.pillButton}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  GitHub Repo ↗
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Box and Stats */}
          <div className={styles.cardRight}>
            <div className={styles.visualBox}>
              <Visual type={VISUALS[index % VISUALS.length]} />
            </div>
            <div className={styles.stats}>
              {project.stats.map((s) => (
                <StatItem key={s.label} {...s} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function WorkCards() {
  const { t } = useLanguage();
  return (
    <section id="work" className={styles.section}>
      {t.work.projects.map((p, i) => (
        <StackCard key={i} project={p} index={i} />
      ))}
    </section>
  );
}
