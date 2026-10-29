"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What's your design process like?",
    a: "I follow a human-centered design process: discover, define, ideate, prototype, and test. Every project starts with understanding the user's goals and business constraints before touching any tools.",
  },
  {
    q: "Are you available for freelance projects?",
    a: "Yes! I'm currently open to select freelance projects. I prefer long-term engagements where I can make a real impact. Reach out via email to discuss your project.",
  },
  {
    q: "What tools do you use for design?",
    a: "Figma is my primary design tool for UI/UX work. I use Framer for interactive prototypes and websites, Principle for micro-animation, and FigJam for workshopping and research synthesis.",
  },
  {
    q: "Do you also handle development?",
    a: "I can build functional prototypes and simple websites using React, Next.js, and Framer. For production-grade development, I collaborate closely with engineering teams to ensure design is implemented faithfully.",
  },
  {
    q: "How do you handle feedback and revisions?",
    a: "Structured feedback rounds are built into my process. I typically share work-in-progress early and often, using Figma's commenting features and async video reviews to minimize lengthy meetings.",
  },
];

function FAQItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className={styles.item}>
      <button className={styles.question} onClick={onClick} aria-expanded={open}>
        <span>{q}</span>
        <motion.span
          className={styles.icon}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={styles.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          className={styles.list}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              open={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
