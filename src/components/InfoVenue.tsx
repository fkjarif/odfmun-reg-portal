import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays, CircleAlert, Landmark, MapPin, ShieldCheck, Users } from "lucide-react";
import { registrationPathways, siteConfig } from "../config/siteConfig";
import { SectionHeading } from "./shared";

function LedgerRow({ label, children, last = false }: { label: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={`grid gap-2 py-6 sm:grid-cols-12 sm:gap-6 ${last ? "" : "border-b border-ivory/12"}`}>
      <dt className="text-[9px] font-bold tracking-[0.32em] text-mutedgrey uppercase sm:col-span-4 sm:pt-1.5">{label}</dt>
      <dd className="font-serif text-xl leading-snug text-ivory sm:col-span-8 sm:text-[22px]">{children}</dd>
    </div>
  );
}

export function ImportantInformation() {
  const reduce = useReducedMotion();
  const feeRows = registrationPathways.filter((p) => p.fee);
  return (
    <section id="information" className="relative overflow-hidden bg-ink py-24 sm:py-32" aria-labelledby="info-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="info-heading" align="left" eyebrow="Chapter III — The Ledger" title={<>Important<br /><em className="font-light text-silver">Information</em></>} script="Before you register" />
            <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-7 max-w-md text-sm leading-7 text-silver">
              Everything officially confirmed for OMNIMUNC'26, recorded in one place. If a detail is not listed here, it has not yet been announced by the Omni Diplomatic Forum.
            </motion.p>
            <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-8 flex gap-4 border border-wine-light/50 bg-burgundy/60 p-5">
              <CircleAlert className="h-5 w-5 shrink-0 text-silver" aria-hidden="true" />
              <p className="text-[12px] leading-6 text-ivory/85">
                <span className="font-semibold text-ivory">A note on payments —</span> after registering and paying, every participant must complete the official Payment Confirmation form so their registration can be verified.
              </p>
            </motion.div>
          </div>

          <motion.dl initial={reduce ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9 }}
            className="border-t-2 border-ivory/70 lg:col-span-7">
            <LedgerRow label="Conference">{siteConfig.conference.fullName} <span className="text-silver">({siteConfig.conference.shortName})</span></LedgerRow>
            <LedgerRow label="Presented By">{siteConfig.conference.organiser} <span className="text-silver">({siteConfig.conference.organiserShort})</span></LedgerRow>
            <LedgerRow label="Dates"><span className="inline-flex items-center gap-2"><CalendarDays className="h-5 w-5 text-silver" aria-hidden="true" />{siteConfig.conference.datesShort}</span></LedgerRow>
            <LedgerRow label="Venue"><span className="inline-flex items-center gap-2"><Landmark className="h-5 w-5 text-silver" aria-hidden="true" />{siteConfig.conference.venue}, Bangladesh</span></LedgerRow>
            <LedgerRow label="Eligibility"><span className="inline-flex items-start gap-2"><Users className="mt-1 h-5 w-5 shrink-0 text-silver" aria-hidden="true" />{siteConfig.conference.eligibility}</span></LedgerRow>
            <LedgerRow label="Fees at a Glance">
              <span className="block space-y-2.5">
                {feeRows.map((p) => (
                  <span key={p.id} className="flex items-baseline gap-3 text-[19px] sm:text-[21px]">
                    <span>{p.title}</span>
                    <span className="dotted-leader min-w-8 flex-1" aria-hidden="true" />
                    <span className="font-semibold whitespace-nowrap">{p.fee}</span>
                    <span className={`hidden text-[9px] font-sans font-bold tracking-[0.22em] uppercase sm:inline ${p.status === "open" ? "text-silver" : "text-mutedgrey"}`}>{p.statusLabel}</span>
                  </span>
                ))}
                <span className="block pt-1 font-sans text-[11px] leading-5 tracking-[0.04em] text-mutedgrey">Executive Board &amp; Secretariat Board — see the official application forms for details.</span>
              </span>
            </LedgerRow>
            <LedgerRow label="Payment Confirmation" last>
              <span className="block">
                <span className="flex items-start gap-2"><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-silver" aria-hidden="true" /><span>Once you have paid, submit the official confirmation form.</span></span>
                <a href={siteConfig.paymentConfirmation.url} target="_blank" rel="noopener noreferrer" className="group mt-3 inline-flex items-center gap-2 font-sans text-[10px] font-bold tracking-[0.26em] text-ivory uppercase underline decoration-silver/50 underline-offset-4 transition-colors hover:decoration-ivory">
                  Open Confirmation Form <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </span>
            </LedgerRow>
          </motion.dl>
        </div>
      </div>
    </section>
  );
}

export function Venue() {
  const reduce = useReducedMotion();
  return (
    <section id="venue" className="grain relative overflow-hidden bg-burgundy py-24 sm:py-32" aria-labelledby="venue-heading">
      <span className="text-outline pointer-events-none absolute -left-4 bottom-8 select-none font-serif text-[16vw] font-bold leading-none" aria-hidden="true">UTTARA</span>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading id="venue-heading" eyebrow="Chapter IV — Venue" title="The Destination." script="Uttara University" />
        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <motion.div initial={reduce ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9 }}
            className="flex flex-col justify-between border border-ivory/25 bg-ink/45 p-7 backdrop-blur-sm sm:p-10 lg:col-span-5">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center border border-ivory/35"><MapPin className="h-5 w-5 text-ivory" aria-hidden="true" /></span>
              <h3 className="mt-6 font-serif text-4xl leading-tight font-medium text-ivory sm:text-5xl">Uttara University,<br /><em className="font-light text-silver">Bangladesh</em></h3>
              <p className="mt-5 max-w-md text-sm leading-7 text-silver">
                For three days this December, Uttara University becomes the chamber of OMNIMUNC'26 — where delegates assemble, debate and draft the future.
              </p>
              <div className="mt-8 space-y-3 border-t border-ivory/15 pt-6 text-[12px] tracking-[0.08em] text-silver">
                <p className="flex justify-between gap-4"><span className="text-mutedgrey uppercase text-[9px] font-bold tracking-[0.28em] pt-0.5">Conference</span><span className="text-right font-serif text-base text-ivory">{siteConfig.conference.shortName}</span></p>
                <p className="flex justify-between gap-4"><span className="text-mutedgrey uppercase text-[9px] font-bold tracking-[0.28em] pt-0.5">Dates</span><span className="text-right font-serif text-base text-ivory">{siteConfig.conference.datesShort}</span></p>
                <p className="flex justify-between gap-4"><span className="text-mutedgrey uppercase text-[9px] font-bold tracking-[0.28em] pt-0.5">Host Venue</span><span className="text-right font-serif text-base text-ivory">Uttara University</span></p>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex items-center gap-4 border border-ivory/15 bg-warmwhite p-4">
                <img src={siteConfig.logos.uttaraUniversity} alt="Uttara University official logo" className="h-12 w-auto max-w-[150px] object-contain" loading="lazy" />
                <p className="text-[9px] font-semibold leading-4 tracking-[0.18em] text-charcoal/70 uppercase">Official Venue<br />Uttara University</p>
              </div>
              <a href={siteConfig.maps.directionsUrl} target="_blank" rel="noopener noreferrer"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 bg-ivory px-8 py-4 text-[10px] font-bold tracking-[0.28em] text-oxblood uppercase transition-all duration-300 hover:bg-warmwhite hover:shadow-[0_14px_36px_rgba(0,0,0,0.5)]"
                aria-label="Get directions to Uttara University — opens Google Maps in a new tab">
                Get Directions <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay: 0.12 }}
            className="relative min-h-[380px] overflow-hidden border border-ivory/25 lg:col-span-7">
            <iframe
              title="Map preview of Uttara University, Bangladesh"
              src={siteConfig.maps.embedUrl}
              className="absolute inset-0 h-full w-full grayscale-[0.85] contrast-[1.05] opacity-90"
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/30" aria-hidden="true" />
            <a href={siteConfig.maps.directionsUrl} target="_blank" rel="noopener noreferrer"
              className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-ink/90 px-5 py-3 text-[9px] font-bold tracking-[0.26em] text-ivory uppercase backdrop-blur transition-colors hover:bg-oxblood"
              aria-label="Open Uttara University in Google Maps">
              <MapPin className="h-3.5 w-3.5" /> Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
