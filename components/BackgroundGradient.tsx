"use client";
import { ReactNode } from "react";
import styles from "./BackgroundGradient.module.css";

interface Props {
  children?: ReactNode;
  /** Override the base bg color — defaults to #000000 */
  bgColor?: string;
}

/**
 * Animated radial-gradient background with 5 moving blobs.
 * Recreates the Aceternity UI BackgroundGradientAnimation
 * using vanilla CSS + keyframes — no Tailwind required.
 *
 * Blob colors drawn from the Athos Dark color token set:
 *  --color-teal         #0f6499
 *  --color-plum         #ba8ad6
 *  --color-dark-slate-gray #2a3f4c
 *  --color-orange       #ff6c0a
 *  --color-dark-khaki   #82c95e
 */
export default function BackgroundGradient({ children, bgColor }: Props) {
  return (
    <div
      className={styles.container}
      style={bgColor ? ({ "--bg": bgColor } as React.CSSProperties) : undefined}
    >
      {/* SVG filter — creates soft "gooey" blend between blobs */}
      <svg className={styles.svgFilter} aria-hidden>
        <defs>
          <filter id="bgBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Base background */}
      <div className={styles.bg} />

      {/* Animated blobs */}
      <div className={styles.blobsContainer}>
        {/* Blob 1 — teal, moveVertical 30s */}
        <div className={`${styles.blob} ${styles.blob1}`} />
        {/* Blob 2 — plum, moveInCircle 20s reverse */}
        <div className={`${styles.blob} ${styles.blob2}`} />
        {/* Blob 3 — dark-slate-gray, moveInCircle 40s */}
        <div className={`${styles.blob} ${styles.blob3}`} />
        {/* Blob 4 — orange (subtle), moveHorizontal 40s */}
        <div className={`${styles.blob} ${styles.blob4}`} />
        {/* Blob 5 — dark-khaki (subtle), moveInCircle 20s */}
        <div className={`${styles.blob} ${styles.blob5}`} />
      </div>

      {/* Content sits above the blobs */}
      <div className={styles.children}>{children}</div>
    </div>
  );
}
