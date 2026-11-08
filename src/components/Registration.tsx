import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Clock3, Lock, ShieldCheck, Trophy } from "lucide-react";
import { campusAmbassadorIncentives, registrationPathways, siteConfig, type RegistrationPathway } from "../config/siteConfig";
import { SectionHeading } from "./shared";
import cardsHand from "../assets/cards-hand.jpg";

type Filter = "all" | RegistrationPathway["audience"];
const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All Pathways" },
  { id: "delegate", label: "Delegates" },
  { id: "ambassador", label: "Campus Ambassador" },
  { id: "board", label: "Board Applications" },
];

function StatusPill({ pathway }: { pathway: RegistrationPathway }) {
  const open = pathway.status === "open";
  return (
    <span className={`inline-flex items-center gap-2 border px-3 py-1.5 text-[8px] font-bold tracking-[0.26em] uppercase ${open ? "border-ivory/40 text-ivory" : "border-mutedgrey/50 text-silver"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${open ? "bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" : "bg-silver/70"}`} aria-hidden="true" />
      {pathway.statusLabel}
    </span>
  );
}

function CardCta({ pathway }: { pathway: RegistrationPathway }) {
  if (pathway.status !== "open" || !pathway.url) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 border border-ivory/20 px-5 py-4 text-[10px] font-bold tracking-[0.24em] text-silver/80 uppercase select-none"
      >
        <Lock className="h-3.5 w-3.5" aria-hidden="true" /> {pathway.cta}
      </span>
    );
  }
  return (
    <a
      href={pathway.url} target="_blank" rel="noopener noreferrer"
      className="group/cta inline-flex w-full items-center justify-center gap-2 bg-ivory px-5 py-4 text-[10px] font-bold tracking-[0.24em] text-oxblood uppercase transition-all duration-300 hover:bg-warmwhite hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
      aria-label={`${pathway.cta} — opens the official Google Form in a new tab`}
    >
      {pathway.cta}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" aria-hidden="true" />
    </a>
  );
}

function PathwayCard({ pathway, i }: { pathway: RegistrationPathway; i: number }) {
  const reduce = useReducedMotion();
  const soon = pathway.status !== "open";
  return (
    <motion.article
      layout
      initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col overflow-hidden border bg-charcoal transition-all duration-500 hover:-translate-y-1.5 ${soon ? "border-ivory/10" : "border-ivory/20 hover:border-ivory/45 hover:shadow-[0_28px_60px_rgba(0,0,0,0.5)]"}`}
      aria-labelledby={`reg-${pathway.id}`}
    >
      <div className={`h-1 w-full ${soon ? "bg-mutedgrey/40" : "bg-gradient-to-r from-wine via-wine-light to-wine"}`} aria-hidden="true" />
      {soon && <div className="halftone pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />}
      <div className="relative flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-3">
          <span className="font-serif text-sm tracking-[0.3em] text-silver">{pathway.index}.</span>
          <StatusPill pathway={pathway} />
        </div>
        <p className="font-script mt-7 text-4xl leading-none text-silver">{pathway.scriptWord}</p>
        <h3 id={`reg-${pathway.id}`} className="mt-2 font-serif text-4xl leading-[0.95] font-medium text-ivory sm:text-[42px]">{pathway.title}</h3>
        <p className="mt-2 text-[9px] font-bold tracking-[0.3em] text-mutedgrey uppercase">{pathway.category} · {pathway.audienceLabel}</p>
        <p className="mt-5 flex-1 text-[13px] leading-6 text-silver">{pathway.description}</p>

        <div className="mt-7 border-t border-ivory/12 pt-5">
          {pathway.fee ? (
            <div className="flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-[8px] font-bold tracking-[0.3em] text-mutedgrey uppercase">Registration Fee</p>
                <p className="mt-1 font-serif text-[34px] leading-none font-semibold text-ivory">{pathway.fee}</p>
              </div>
              {pathway.feeNote && <p className="flex items-center gap-1.5 text-[10px] tracking-[0.08em] text-silver"><Clock3 className="h-3.5 w-3.5" />{pathway.feeNote}</p>}
            </div>
          ) : (
            <p className="flex items-center gap-2 text-[11px] tracking-[0.1em] text-silver"><BadgeCheck className="h-4 w-4 text-silver" />{pathway.feeNote}</p>
          )}
        </div>
        <div className="mt-6"><CardCta pathway={pathway} /></div>
        {soon && <p className="mt-3 text-center text-[10px] leading-5 text-mutedgrey">The opening date &amp; form link will be announced here by ODF.</p>}
      </div>
    </motion.article>
  );
}

function AmbassadorCard({ pathway }: { pathway: RegistrationPathway }) {
  const reduce = useReducedMotion();
  const icons = [BadgeCheck, Trophy];
  return (
    <motion.article
      layout
      initial={reduce ? false : { opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden border border-ivory/30 bg-burgundy shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:col-span-2"
      aria-labelledby="reg-campus-ambassador"
    >
      <div className="grid md:grid-cols-12">
        <div className="relative min-h-[240px] overflow-hidden md:col-span-4">
          <img src={cardsHand} alt="Monochrome gloved hand presenting playing cards on a tray — the Campus Ambassador campaign artwork style" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-burgundy/70 md:bg-gradient-to-r" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-transparent to-transparent" aria-hidden="true" />
          <p className="absolute bottom-5 left-5 font-serif text-sm tracking-[0.24em] text-ivory/90">OMNI<br />MUNC'26</p>
        </div>
        <div className="relative p-6 sm:p-9 md:col-span-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <span className="font-serif text-sm tracking-[0.3em] text-silver">{pathway.index}.</span>
            <StatusPill pathway={pathway} />
          </div>
          <p className="font-script mt-5 text-4xl text-silver">Campus</p>
          <h3 id="reg-campus-ambassador" className="mt-1 font-serif text-4xl leading-[0.95] font-medium text-ivory sm:text-5xl">Campus Ambassador</h3>
          <p className="mt-3 max-w-xl text-[13px] leading-6 text-ivory/80">{pathway.description}</p>

          <div className="mt-7">
            <p className="flex items-center gap-3 text-[9px] font-bold tracking-[0.34em] text-ivory uppercase">
              <span className="h-px w-8 bg-ivory/50" /> Campus Ambassador Incentives
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {campusAmbassadorIncentives.map((inc, idx) => {
                const Icon = icons[idx];
                return (
                  <div key={inc.title} className="border border-ivory/25 bg-ink/35 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-ivory/50">
                    <Icon className="h-5 w-5 text-silver" aria-hidden="true" />
                    <h4 className="mt-3 font-serif text-[21px] leading-tight font-semibold text-ivory">{idx + 1}. {inc.title}</h4>
                    <p className="mt-2 text-[11.5px] leading-5 text-silver">{inc.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-5 border-t border-ivory/20 pt-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[8px] font-bold tracking-[0.3em] text-silver/80 uppercase">Registration Fee</p>
              <p className="mt-1 font-serif text-4xl leading-none font-semibold text-ivory">{pathway.fee}</p>
            </div>
            <a href={pathway.url!} target="_blank" rel="noopener noreferrer"
              className="group/cta inline-flex items-center justify-center gap-2 bg-ivory px-7 py-4 text-[10px] font-bold tracking-[0.24em] text-oxblood uppercase transition-all duration-300 hover:bg-warmwhite hover:shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
              aria-label="Become a Campus Ambassador — opens the official Google Form in a new tab">
              {pathway.cta} <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Registration() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = registrationPathways.filter((p) => filter === "all" || p.audience === filter);
  const ambassador = visible.find((p) => p.id === "campus-ambassador");
  const others = visible.filter((p) => p.id !== "campus-ambassador");

  return (
    <section id="registration" className="grain relative overflow-hidden bg-oxblood py-24 sm:py-32" aria-labelledby="registration-heading">
      <span className="text-outline pointer-events-none absolute left-0 top-16 select-none font-serif text-[18vw] font-bold leading-none" aria-hidden="true">MUNC</span>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading id="registration-heading" eyebrow="Chapter II — Registration" title={<>Your Seat at the<br />Table <em className="font-light text-silver">Awaits.</em></>} script="Choose your pathway">
          <p className="mt-5 text-sm leading-7 text-silver">Choose your pathway to OMNIMUNC'26. Every form below is an official Omni Diplomatic Forum Google Form and opens in a new tab.</p>
        </SectionHeading>

        {/* Pathway finder */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-[9px] font-bold tracking-[0.36em] text-silver uppercase" id="pathway-filter-label">I am joining as —</p>
          <div className="flex flex-wrap justify-center gap-2" role="group" aria-labelledby="pathway-filter-label">
            {filters.map((f) => (
              <button key={f.id} type="button" onClick={() => setFilter(f.id)} aria-pressed={filter === f.id}
                className={`px-5 py-3 text-[9px] font-bold tracking-[0.24em] uppercase transition-all duration-300 ${filter === f.id ? "bg-ivory text-oxblood" : "border border-ivory/30 text-ivory/85 hover:border-ivory hover:text-ivory"}`}>
                {f.label}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-mutedgrey" aria-live="polite">Showing {visible.length} of {registrationPathways.length} pathways</p>
        </div>

        <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {others.slice(0, 2).map((p, i) => <PathwayCard key={p.id} pathway={p} i={i} />)}
            {ambassador && <AmbassadorCard key={ambassador.id} pathway={ambassador} />}
            {others.slice(2).map((p, i) => <PathwayCard key={p.id} pathway={p} i={i + 2} />)}
          </AnimatePresence>
        </motion.div>

        {/* Payment confirmation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8 }}
          className="relative mt-6 overflow-hidden border border-ivory/25 bg-gradient-to-r from-wine via-burgundy to-charcoal p-7 sm:p-10"
        >
          <div className="halftone pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center border border-ivory/40 sm:flex"><ShieldCheck className="h-6 w-6 text-ivory" aria-hidden="true" /></span>
              <div>
                <p className="font-script text-3xl text-silver">Already Paid?</p>
                <h3 className="mt-1 font-serif text-3xl font-medium text-ivory sm:text-4xl">Confirm Your Payment</h3>
                <p className="mt-2 max-w-lg text-[13px] leading-6 text-silver">{siteConfig.paymentConfirmation.text} This step is separate from registration — please complete it after paying so your place can be verified.</p>
              </div>
            </div>
            <a href={siteConfig.paymentConfirmation.url} target="_blank" rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 bg-ivory px-8 py-4 text-[10px] font-bold tracking-[0.26em] text-oxblood uppercase transition-all duration-300 hover:bg-warmwhite hover:shadow-[0_14px_36px_rgba(0,0,0,0.5)]"
              aria-label="Confirm your payment — opens the official payment confirmation form in a new tab">
              {siteConfig.paymentConfirmation.cta} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        <p className="mt-6 text-center text-[10px] tracking-[0.14em] text-mutedgrey">All registration &amp; confirmation forms are administered by the Omni Diplomatic Forum via Google Forms.</p>
      </div>
    </section>
  );
}
