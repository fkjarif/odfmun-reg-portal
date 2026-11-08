import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { StarMark } from "./shared";
import heroMask from "../assets/hero-mask.jpg";
import curtain from "../assets/curtain.jpg";

function useCountdown(targetISO: string) {
  const target = useRef(new Date(targetISO).getTime());
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.current - now);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const { days, hours, minutes, seconds } = useCountdown(siteConfig.conference.openingDateISO);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const units = [
    { v: days, l: "Days" }, { v: hours, l: "Hours" }, { v: minutes, l: "Minutes" }, { v: seconds, l: "Seconds" },
  ];

  return (
    <section ref={ref} id="home" className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-oxblood" aria-label="OMNIMUNC'26 introduction">
      {/* Backdrop */}
      <motion.div style={{ y: imgY }} className="absolute inset-0" aria-hidden="true">
        <img src={curtain} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <img src={heroMask} alt="" className="absolute inset-0 h-full w-full object-cover object-[72%_center] opacity-70 sm:object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-oxblood via-oxblood/78 to-burgundy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
        <div className="halftone halftone-fade absolute inset-0 opacity-40" />
      </motion.div>
      {/* Poster frame */}
      <div className="pointer-events-none absolute inset-3 z-20 border border-ivory/25 sm:inset-4" aria-hidden="true" />
      <span className="pointer-events-none absolute left-6 top-24 z-20 hidden font-serif text-sm tracking-[0.2em] text-ivory/70 md:block" aria-hidden="true">OMNI<br />MUNC'26</span>

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 pb-16 pt-32 text-center sm:px-8 sm:pt-36">
        <motion.p initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease }}
          className="flex items-center gap-3 text-[9px] font-semibold tracking-[0.46em] text-silver uppercase sm:text-[11px]">
          <span className="h-px w-8 bg-silver/60 sm:w-14" /> Omni Diplomatic Forum Presents <span className="h-px w-8 bg-silver/60 sm:w-14" />
        </motion.p>

        <motion.div initial={reduce ? false : { opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5, ease }} className="mt-7 text-silver">
          <StarMark className="h-9 w-9 sm:h-11 sm:w-11 drop-shadow-[0_0_14px_rgba(243,238,232,0.45)]" />
        </motion.div>

        <h1 className="mt-4 font-serif text-ivory">
          <motion.span initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6, ease }}
            className="block text-[15px] font-medium tracking-[0.55em] text-silver sm:text-xl">· OMNI ·</motion.span>
          <motion.span initial={reduce ? false : { opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.72, ease }}
            className="mt-2 flex flex-wrap items-center justify-center gap-x-4 text-[13.5vw] leading-[0.92] font-medium tracking-tight sm:text-7xl lg:text-[104px]">
            <span className="hidden h-px w-10 bg-ivory/70 md:block lg:w-20" aria-hidden="true" />
            MODEL
            <span className="relative mx-1 inline-block">
              <span className="font-script absolute -top-[0.52em] left-1/2 z-10 -translate-x-1/2 -rotate-3 text-[0.72em] font-normal text-warmwhite drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">United</span>
              <span className="invisible">—</span>
            </span>
            NATIONS
            <span className="hidden h-px w-10 bg-ivory/70 md:block lg:w-20" aria-hidden="true" />
          </motion.span>
          <motion.span initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.86, ease }}
            className="mt-3 block text-lg font-light tracking-[0.32em] text-ivory/95 sm:text-2xl">
            CONFERENCE <span className="font-medium italic text-silver">'26</span>
          </motion.span>
        </h1>

        <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.05 }}
          className="font-script mt-6 text-4xl text-warmwhite sm:text-5xl" aria-label={siteConfig.conference.slogan}>
          Diplomacy for All.
        </motion.p>

        <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.15, ease }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a href="#registration" className="group inline-flex w-full items-center justify-center gap-3 bg-ivory px-8 py-4 text-[11px] font-bold tracking-[0.3em] text-oxblood uppercase shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition-all duration-300 hover:bg-warmwhite hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] sm:w-auto">
            Explore Registration
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <a href="#about" className="inline-flex w-full items-center justify-center border border-ivory/60 px-8 py-4 text-[11px] font-bold tracking-[0.3em] text-ivory uppercase backdrop-blur-sm transition-all duration-300 hover:border-ivory hover:bg-ivory/10 sm:w-auto">
            Discover the Conference
          </a>
        </motion.div>

        {/* Countdown */}
        <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.3, ease }}
          className="mt-11" role="timer" aria-label={`Countdown to 26 December 2026: ${days} days, ${hours} hours, ${minutes} minutes remaining`}>
          <p className="text-[9px] font-semibold tracking-[0.4em] text-silver uppercase">The Curtain Rises In</p>
          <div className="mt-3 flex items-start justify-center gap-4 sm:gap-7">
            {units.map((u, i) => (
              <div key={u.l} className="flex items-start gap-4 sm:gap-7">
                <div className="min-w-[52px]">
                  <span className="block font-serif text-4xl font-medium tabular-nums text-ivory sm:text-5xl">{String(u.v).padStart(2, "0")}</span>
                  <span className="mt-1 block text-[8px] font-semibold tracking-[0.32em] text-silver uppercase">{u.l}</span>
                </div>
                {i < units.length - 1 && <span className="pt-2 font-serif text-2xl text-silver/60" aria-hidden="true">:</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Poster footer strip */}
      <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-2 px-6 pb-9 text-center sm:grid-cols-3 sm:px-10 sm:text-left">
        <p className="font-serif text-lg tracking-[0.18em] text-ivory sm:text-xl">THIS DECEMBER</p>
        <p className="order-first text-[9px] font-semibold tracking-[0.36em] text-silver uppercase sm:order-none sm:text-center sm:text-[10px]">· Diplomacy · Debate · Experience ·</p>
        <div className="sm:text-right">
          <p className="font-serif text-2xl font-medium text-ivory sm:text-3xl">26–27–28<span className="align-super text-sm italic text-silver">th</span></p>
          <p className="mt-1 text-[8px] font-semibold tracking-[0.3em] text-silver uppercase">{siteConfig.conference.venueCountry}</p>
        </div>
      </motion.div>

    </section>
  );
}
