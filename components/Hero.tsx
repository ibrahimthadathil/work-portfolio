"use client";

import type { Transition } from "framer-motion";
import { motion } from "framer-motion";

import styles from "./Hero.module.css";

import {
  SiCursor,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiSupabase,
  SiVercel,
  SiRender,
  SiLinux,
  SiDocker,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiNginx,
  SiNotion,
  SiGit,
  SiGoogle,
  SiPostman,
  SiBootstrap,
  SiVite,
  SiTailwindcss,
  SiCss,
  SiQatarairways,
  SiClaude,
  SiIcloud,
  SiFigma,
  SiGithub,
  SiRedis,
  SiRedux,
  SiSocketdotio,
} from "@icons-pack/react-simple-icons";

const socialLinks = [
  {
    label: "Cursor",

    Icon: SiCursor,

    color: "#FFFFFF",
  },

  {
    label: "Figma",

    Icon: SiFigma,

    color: "#c356cf",
  },

  {
    label: "Claude AI",

    Icon: SiClaude,

    color: "#D97757",
  },

  {
    label: "React",

    Icon: SiReact,

    color: "#61DAFB",
  },

  {
    label: "TypeScript",

    Icon: SiTypescript,

    color: "#3178C6",
  },

  {
    label: "Next.js",

    Icon: SiNextdotjs,

    color: "#FFFFFF",
  },

  {
    label: "Node.js",

    Icon: SiNodedotjs,

    color: "#5FA04E",
  },

  {
    label: "AWS",

    Icon: SiIcloud,

    color: "#FF9900",
  },

  {
    label: "Supabase",

    Icon: SiSupabase,

    color: "#3FCF8E",
  },

  {
    label: "Vercel",

    Icon: SiVercel,

    color: "#FFFFFF",
  },

  {
    label: "Render",

    Icon: SiRender,

    color: "#46E3B7",
  },

  {
    label: "Linux",

    Icon: SiLinux,

    color: "#FCC624",
  },

  {
    label: "Docker",

    Icon: SiDocker,

    color: "#2496ED",
  },

  {
    label: "Firebase",

    Icon: SiFirebase,

    color: "#DD2C00",
  },

  {
    label: "PostgreSQL",

    Icon: SiPostgresql,

    color: "#4169E1",
  },

  {
    label: "MongoDB",

    Icon: SiMongodb,

    color: "#47A248",
  },

  {
    label: "Express.js",

    Icon: SiExpress,

    color: "#FFFFFF",
  },

  {
    label: "JavaScript",

    Icon: SiJavascript,

    color: "#F7DF1E",
  },

  {
    label: "Nginx",

    Icon: SiNginx,

    color: "#009639",
  },

  {
    label: "Redis",

    Icon: SiRedis,

    color: "#620303",
  },

  {
    label: "Redux",

    Icon: SiRedux,

    color: "#3c0833",
  },

  {
    label: "Socket io",

    Icon: SiSocketdotio,

    color: "#434543",
  },

  {
    label: "Notion",

    Icon: SiNotion,

    color: "#FFFFFF",
  },

  {
    label: "Git",

    Icon: SiGit,

    color: "#F05032",
  },

  {
    label: "Git Hub",

    Icon: SiGithub,

    color: "#F05032",
  },

  {
    label: "Antigravity",

    Icon: SiGoogle,

    color: "#8AB4F8",
  },

  {
    label: "Postman",

    Icon: SiPostman,

    color: "#FF6C37",
  },

  {
    label: "Bootstrap",

    Icon: SiBootstrap,

    color: "#7952B3",
  },

  {
    label: "Vite",

    Icon: SiVite,

    color: "#646CFF",
  },

  {
    label: "Tailwind CSS",

    Icon: SiTailwindcss,

    color: "#06B6D4",
  },

  {
    label: "CSS",

    Icon: SiCss,

    color: "#663399",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },

  animate: { opacity: 1, y: 0 },

  transition: {
    duration: 0.7,
    delay,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  } satisfies Transition,
});

export default function Hero() {
  // Double the list for seamless infinite loop

  const doublLink = [...socialLinks, ...socialLinks];

  return (
    <section className={styles.hero}>
      {/* Background orb */}

      <div className={styles.orb} />

      <div className={`container ${styles.content}`}>
        {/* Availability badge */}

        <motion.div className={styles.badge} {...fadeUp(0.1)}>
          <span className={styles.dot} />
          Available for work
        </motion.div>

        {/* Avatar */}

        <motion.div className={styles.avatarWrap} {...fadeUp(0.2)}>
          <div className={styles.avatarFallback}>AD</div>
        </motion.div>

        {/* Headline */}

        <motion.h1 className={styles.headline} {...fadeUp(0.3)}>
          Designed for Designers to
          <br />
          <span className={styles.italic}>showcase their work.</span>
        </motion.h1>

        {/* Sub text */}

        <motion.p className={styles.sub} {...fadeUp(0.4)}>
          A UX &amp; Product Designer crafting purposeful digital experiences.
          <br />
          Currently open to full-time &amp; freelance opportunities.
        </motion.p>
        {/* CTA buttons */}

        <motion.div className={styles.ctas} {...fadeUp(0.5)}>
          {/* cta-primary */}
          <a href="#work" className={styles.ctaPrimary}>
            <span className={styles.dots_border}></span>
            <svg
              className={styles.sparkle}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={styles.path}
                d="M10 1L12.5 7.5L19 10L12.5 12.5L10 19L7.5 12.5L1 10L7.5 7.5L10 1Z"
              />
              <path
                className={styles.path}
                d="M19 15L20.25 17.75L23 19L20.25 20.25L19 23L17.75 20.25L15 19L17.75 17.75L19 15Z"
              />
              <path
                className={styles.path}
                d="M5 2L5.75 3.75L7.5 4.5L5.75 5.25L5 7L4.25 5.25L2.5 4.5L4.25 3.75L5 2Z"
              />
            </svg>
            <span className={styles.text_button}>View my work</span>
          </a>
          {/* cta-secondary */}
          <a href="mailto:hello@athos.design" className={styles.ctaSecondary}>
            Say hello →
          </a>
        </motion.div>
      </div>

      {/* ── Infinite Marquee Social Icons ── */}

      <motion.div
        className={styles.marqueeOuter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        {/* Left fade */}

        <div className={`${styles.fadeEdge} ${styles.fadeLeft}`} />

        <div className={styles.marqueeTrack}>
          {doublLink.map(({ label, Icon, color }, ind) => (
            <a
              key={ind}
              className={styles.marqueeItem}
              title={label}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.iconText}>
                <Icon size={36} color={color} aria-hidden />
              </span>

              <span className={styles.iconLabel}>{label}</span>
            </a>
          ))}
        </div>

        {/* Right fade */}

        <div className={`${styles.fadeEdge} ${styles.fadeRight}`} />
      </motion.div>
    </section>
  );
}
