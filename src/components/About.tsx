import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, Landmark, Users } from "lucide-react";
import { OrnamentalRule, SectionHeading } from "./shared";
import manuscript from "../assets/manuscript.jpg";

const words = ["DIPLOMACY", "DEBATE", "EXPERIENCE", "DIPLOMACY FOR ALL", "OMNIMUNC'26"];

export function Marquee() {
  const row = [...words, ...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-ivory/15 bg-burgundy py-4" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((w, i) => (
              <span key={`${half}-${i}`} className="flex items-center font-serif text-lg tracking-[0.3em] text-ivory/80">
                <span className="px-6">{w}</span>
                <span className="h-1.5 w-1.5 rotate-45 bg-silver/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const reduce = useReducedMotion();
  const facts = [
    { icon: CalendarDays, label: "The Dates", value: "26 · 27 · 28", sub: "December 2026" },
    { icon: Landmark, label: "The Venue", value: "Uttara University", sub: "Bangladesh" },
    { icon: Users, label: "Eligibility", value: "Open to All", sub: "No specific restrictions" },
  ];
  return (
    <section id="about" className="grain relative overflow-hidden bg-ink py-24 sm:py-32" aria-labelledby="about-heading">
      <span className="text-outline pointer-events-none absolute -right-6 top-10 select-none font-serif text-[22vw] font-bold leading-none opacity-60" aria-hidden="true">26</span>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <SectionHeading id="about-heading" align="left" eyebrow="Chapter I — The Conference" title={<>Where Diplomacy<br />Meets <em className="font-light text-silver">Opportunity.</em></>} />
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 max-w-2xl"
            >
              <p className="font-serif text-2xl font-light leading-snug text-ivory/95 sm:text-[28px]">
                Welcome to Omni Model United Nations Conference 2026. An opportunity to engage with global affairs, exchange perspectives, challenge ideas and experience the art of diplomacy.
              </p>
              <p className="mt-6 text-sm leading-7 text-silver sm:text-[15px]">
                Organised by the <span className="font-semibold text-ivory">Omni Diplomatic Forum (ODF)</span>, OMNIMUNC'26 gathers participants for three days this December at Uttara University, Bangladesh — a stage where every voice may be heard, and every perspective may be tested.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="font-script text-4xl text-warmwhite sm:text-5xl">Diplomacy for All.</span>
                <span className="hidden h-px w-16 bg-silver/50 sm:block" aria-hidden="true" />
                <span className="text-[10px] font-semibold tracking-[0.34em] text-silver uppercase">The Official Slogan</span>
              </div>
            </motion.div>

            <div className="mt-12 grid gap-px overflow-hidden border border-ivory/15 bg-ivory/15 sm:grid-cols-3">
              {facts.map((f, i) => (
                <motion.div key={f.label}
                  initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="group bg-charcoal p-6 transition-colors duration-300 hover:bg-burgundy"
                >
                  <f.icon className="h-5 w-5 text-silver transition-colors group-hover:text-ivory" aria-hidden="true" />
                  <p className="mt-5 text-[9px] font-bold tracking-[0.32em] text-mutedgrey uppercase">{f.label}</p>
                  <p className="mt-2 font-serif text-[22px] leading-tight font-medium text-ivory">{f.value}</p>
                  <p className="mt-1 text-[11px] tracking-[0.14em] text-silver">{f.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.figure
            initial={reduce ? false : { opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="absolute -left-3 -top-3 h-full w-full border border-silver/30" aria-hidden="true" />
            <div className="relative overflow-hidden">
              <img src={manuscript} alt="Antique handwritten diplomatic manuscript with calligraphy, evoking the historical documents of diplomacy" className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] hover:scale-105 sm:aspect-[5/6]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-script text-3xl text-warmwhite">Every resolution begins</p>
                <p className="mt-1 text-[10px] font-semibold tracking-[0.32em] text-silver uppercase">With a single written word</p>
              </figcaption>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden bg-ivory px-5 py-4 text-oxblood shadow-2xl sm:block">
              <p className="font-serif text-xl font-semibold leading-none">EST. MMXXVI</p>
              <p className="mt-1 text-[8px] font-bold tracking-[0.3em] uppercase">Omni Diplomatic Forum</p>
            </div>
          </motion.figure>
        </div>
        <OrnamentalRule className="mt-20 opacity-70" />
      </div>
    </section>
  );
}
