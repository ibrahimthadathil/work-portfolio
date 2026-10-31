// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
// import useCountUp from "@/hooks/useCountUp";
// import styles from "./WorkCards.module.css";

// const projects = [
//   {
//     id: "proj1",
//     tag: "Dashboard",
//     title: "Building a Data Analytics Dashboard",
//     description:
//       "Redesigned a complex analytics platform to make insights instantly accessible. Focused on clarity, hierarchy, and real-time data visualization.",
//     stat1: { value: 85, suffix: "%", label: "User satisfaction" },
//     stat2: { value: 70, suffix: "%", label: "Faster insights" },
//     gradient: "linear-gradient(135deg, #0a0a2e 0%, #1a0a3e 40%, #0d1a3a 100%)",
//     visual: "wave",
//   },
//   {
//     id: "proj2",
//     tag: "Mobile App",
//     title: "Designing a Customer-Facing App",
//     description:
//       "End-to-end UX design for a fintech mobile application. Simplified complex financial flows into intuitive, accessible experiences.",
//     stat1: { value: 72, suffix: "%", label: "Conversion rate" },
//     stat2: { value: 4.8, suffix: "★", label: "App store rating", decimals: 1 },
//     gradient: "linear-gradient(135deg, #1a0505 0%, #2d0a0a 40%, #1a1000 100%)",
//     visual: "chart",
//   },
//   {
//     id: "proj3",
//     tag: "SaaS",
//     title: "Creating a Customer Portal",
//     description:
//       "Designed a self-service portal to reduce support load by 30%. Mapped complex user journeys into simple, guided workflows.",
//     stat1: { value: 30, suffix: "%", label: "Support reduction" },
//     stat2: { value: 98, suffix: "%", label: "Task completion" },
//     gradient: "linear-gradient(135deg, #001a10 0%, #0a2a1a 40%, #001505 100%)",
//     visual: "sphere",
//   },
// ];

// function StatCounter({
//   value,
//   suffix,
//   label,
//   decimals = 0,
//   active,
// }: {
//   value: number;
//   suffix: string;
//   label: string;
//   decimals?: number;
//   active: boolean;
// }) {
//   const count = useCountUp(active ? value : 0, 1600, decimals);
//   return (
//     <div className={styles.stat}>
//       <span className={styles.statValue}>
//         {count}
//         {suffix}
//       </span>
//       <span className={styles.statLabel}>{label}</span>
//     </div>
//   );
// }

// function Visual({ type, gradient }: { type: string; gradient: string }) {
//   if (type === "wave") {
//     return (
//       <div className={styles.visual} style={{ background: gradient }}>
//         <svg viewBox="0 0 200 120" className={styles.svg}>
//           <path
//             d="M0 60 Q 40 20 80 60 T 160 60 T 240 60"
//             fill="none"
//             stroke="rgba(99,102,241,0.8)"
//             strokeWidth="2.5"
//           />
//           <path
//             d="M0 80 Q 50 40 100 80 T 200 80"
//             fill="none"
//             stroke="rgba(99,102,241,0.4)"
//             strokeWidth="1.5"
//           />
//           <path
//             d="M0 40 Q 30 10 60 40 T 120 40 T 180 40"
//             fill="none"
//             stroke="rgba(139,92,246,0.6)"
//             strokeWidth="2"
//           />
//         </svg>
//       </div>
//     );
//   }
//   if (type === "chart") {
//     return (
//       <div className={styles.visual} style={{ background: gradient }}>
//         <svg viewBox="0 0 200 120" className={styles.svg}>
//           <rect x="20" y="70" width="20" height="40" fill="rgba(239,68,68,0.7)" rx="3" />
//           <rect x="55" y="50" width="20" height="60" fill="rgba(239,68,68,0.85)" rx="3" />
//           <rect x="90" y="30" width="20" height="80" fill="rgba(239,68,68,0.95)" rx="3" />
//           <rect x="125" y="45" width="20" height="65" fill="rgba(239,68,68,0.8)" rx="3" />
//           <rect x="160" y="20" width="20" height="90" fill="rgba(239,68,68,1)" rx="3" />
//           <path
//             d="M10 90 Q 50 60 90 40 T 190 20"
//             fill="none"
//             stroke="rgba(251,191,36,0.9)"
//             strokeWidth="2"
//           />
//         </svg>
//       </div>
//     );
//   }
//   return (
//     <div className={styles.visual} style={{ background: gradient }}>
//       <div className={styles.sphere} />
//     </div>
//   );
// }

// /** Individual stacking card driven by scroll */
// function StackCard({
//   project,
//   index,
//   total,
// }: {
//   project: (typeof projects)[0];
//   index: number;
//   total: number;
// }) {
//   const slotRef = useRef<HTMLDivElement>(null);

//   // Track scroll progress of THIS card's slot
//   const { scrollYProgress } = useScroll({
//     target: slotRef,
//     offset: ["start end", "end start"],
//   });

//   // Cards that are BELOW the incoming card shrink into the stack
//   // scale goes 1 → 0.93 as the slot scrolls past
//   const scale = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.93]);
//   const rotateZ = useTransform(scrollYProgress, [0.2, 0.8], [0, -1.5]);
//   const brightnessVal = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.6]);
//   const filterStyle = useMotionTemplate`brightness(${brightnessVal})`;

//   // The card itself slides up from 60px → 0 as it enters viewport
//   const cardY = useTransform(scrollYProgress, [0, 0.25], [80, 0]);
//   const cardOpacity = useTransform(scrollYProgress, [0, 0.18], [0, 1]);

//   return (
//     <div
//       ref={slotRef}
//       className={styles.cardSlot}
//       style={{ zIndex: index + 1 }}
//     >
//       {/* Scale-down + dim the whole slot (affects all cards below via sticky stacking) */}
//       <motion.div
//         className={styles.stickyHolder}
//         style={{
//           scale,
//           rotateZ,
//           filter: filterStyle,
//         }}
//       >
//         <motion.div
//           className={styles.card}
//           style={{ y: cardY, opacity: cardOpacity }}
//           whileHover={{ y: -6, transition: { duration: 0.3 } }}
//         >
//           <div className={styles.cardLeft}>
//             <span className={styles.tag}>{project.tag}</span>
//             <h2 className={styles.cardTitle}>{project.title}</h2>
//             <p className={styles.cardDesc}>{project.description}</p>
//             <a href="#" className={styles.explore}>
//               Explore <span>→</span>
//             </a>
//             <div className={styles.stats}>
//               <StatCounter {...project.stat1} active={true} />
//               <StatCounter {...project.stat2} active={true} />
//             </div>
//           </div>
//           <div className={styles.cardRight}>
//             <Visual type={project.visual} gradient={project.gradient} />
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default function WorkCards() {
//   return (
//     <section id="work" className={styles.section}>
//       {projects.map((p, i) => (
//         <StackCard key={p.id} project={p} index={i} total={projects.length} />
//       ))}
//     </section>
//   );
// }




"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import useCountUp from "@/hooks/useCountUp";
import styles from "./WorkCards.module.css";

const projects = [
  {
    id: "proj1",
    title: "Optimizing a Corporate Intranet",
    description:
      "An innovative app and approach for taking advantage of unused internet from people's devices. It differs from others because of its simplicity, functions, and ways to earn extra money.",
    stat1: { value: 20, suffix: "%", label: "Conversion Rate" },
    stat2: { value: 95, suffix: "%", label: "User Satisfaction" },
    gradient: "transparent",
    visual: "wave",
  },
  {
    id: "proj2",
    title: "Designing a Customer-Facing App",
    description:
      "End-to-end UX design for a fintech mobile application. Simplified complex financial flows into intuitive, accessible experiences.",
    stat1: { value: 72, suffix: "%", label: "Conversion Rate" },
    stat2: { value: 4.8, suffix: "★", label: "App Store Rating", decimals: 1 },
    gradient: "transparent",
    visual: "chart",
  },
  {
    id: "proj3",
    title: "Creating a Customer Portal",
    description:
      "Designed a self-service portal to reduce support load by 30%. Mapped complex user journeys into simple, guided workflows.",
    stat1: { value: 30, suffix: "%", label: "Support Reduction" },
    stat2: { value: 98, suffix: "%", label: "Task Completion" },
    gradient: "transparent",
    visual: "sphere",
  },
];

function StatCounter({ value, suffix, label, decimals = 0, active }) {
  const count = useCountUp(active ? value : 0, 1600, decimals);
  return (
    <div className={styles.stat}>
      {/* Label is now rendered above the value to match the design */}
      <span className={styles.statLabel}>{label}</span>
      <span className={styles.statValue}>
        {count}
        {suffix}
      </span>
    </div>
  );
}

function Visual({ type, gradient }) {
  if (type === "wave") {
    return (
      <div className={styles.visual} style={{ background: gradient }}>
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
      <div className={styles.visual} style={{ background: gradient }}>
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
    <div className={styles.visual} style={{ background: gradient }}>
      <div className={styles.sphere} />
    </div>
  );
}

function StackCard({ project, index, total }) {
  const slotRef = useRef(null);

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
          {/* Left Column: Title, Description, Button */}
          <div className={styles.cardLeft}>
            <div className={styles.titleDesc}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardDesc}>{project.description}</p>
            </div>
            <div className={styles.pillButton}>Coming Soon</div>
          </div>

          {/* Right Column: Visual Box and Stats */}
          <div className={styles.cardRight}>
            <div className={styles.visualBox}>
              <Visual type={project.visual} gradient={project.gradient} />
            </div>
            <div className={styles.stats}>
              <StatCounter {...project.stat1} active={true} />
              <StatCounter {...project.stat2} active={true} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function WorkCards() {
  return (
    <section id="work" className={styles.section}>
      {projects.map((p, i) => (
        <StackCard key={p.id} project={p} index={i} total={projects.length} />
      ))}
    </section>
  );
}