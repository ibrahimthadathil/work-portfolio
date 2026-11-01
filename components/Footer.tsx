"use client";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { useLanguage } from "./LanguageProvider";
import { profile } from "@/lib/i18n/content";

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className={styles.logoBlock}>
            <span className={styles.logo}>
              <span className={styles.logoIcon}>✦</span> {profile.name[lang]}
            </span>
            <p className={styles.tagline}>
              {t.footer.tagline[0]}
              <br />
              {t.footer.tagline[1]}
            </p>
          </div>

          {/* Links */}
          <div className={styles.linkGroup}>
            {profile.socials.map((l) => (
              <a key={l.label} href={l.href} className={styles.link}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Bottom */}
          <div className={styles.bottom}>
            <span>
              © {new Date().getFullYear()} {profile.name[lang]}. {t.footer.rights}
            </span>
            <span className={styles.email} dir="ltr">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              {" · "}
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
