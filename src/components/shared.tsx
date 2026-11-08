import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { siteConfig } from "../config/siteConfig";

/** Official ODF seal — always on a perfect white circle, never distorted. */
export function OdfLogo({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_0_0_1px_rgba(243,238,232,0.35),0_4px_18px_rgba(0,0,0,0.45)] ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={siteConfig.logos.odf}
        alt="Omni Diplomatic Forum official seal"
        width={size}
        height={size}
        className="h-full w-full object-contain p-[7%]"
        loading="eager"
      />
    </span>
  );
}

/** Four-point silver star from the campaign artwork (SVG, not emoji). */
export function StarMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="currentColor">
      <path d="M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z" />
      <path d="M50 22 L54 46 L78 50 L54 54 L50 78 L46 54 L22 50 L46 46 Z" opacity=".55" transform="rotate(45 50 50)" />
    </svg>
  );
}

export function OrnamentalRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-silver/50 to-silver/70" />
      <span className="block h-1.5 w-1.5 rotate-45 border border-silver/80" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-silver/50 to-silver/70" />
    </div>
  );
}

export function SectionHeading({
  eyebrow, title, script, align = "center", children, id,
}: {
  eyebrow: string; title: ReactNode; script?: string; align?: "center" | "left"; children?: ReactNode; id?: string;
}) {
  const center = align === "center";
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${center ? "text-center mx-auto" : "text-left"} max-w-3xl`}
    >
      <p className={`flex items-center gap-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.42em] text-silver uppercase ${center ? "justify-center" : ""}`}>
        <span className="hidden sm:block h-px w-10 bg-silver/50" aria-hidden="true" />
        {eyebrow}
        <span className="hidden sm:block h-px w-10 bg-silver/50" aria-hidden="true" />
      </p>
      <h2 id={id} className="mt-5 font-serif text-[42px] leading-[0.95] font-medium text-ivory sm:text-6xl lg:text-7xl">
        {title}
        {script && (
          <span className="font-script block mt-1 text-[44px] sm:text-6xl lg:text-7xl font-normal text-silver leading-[1.1]">{script}</span>
        )}
      </h2>
      {children}
    </motion.div>
  );
}

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};
