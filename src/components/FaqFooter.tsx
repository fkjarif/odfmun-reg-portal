import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Link2, Mail, Minus, Plus } from "lucide-react";

function FacebookIcon({ className = "" }: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7h2.8Z"/></svg>);
}
function InstagramIcon({ className = "" }: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="3.8"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/></svg>);
}
import { faqs, siteConfig } from "../config/siteConfig";
import { OdfLogo, OrnamentalRule, SectionHeading, StarMark } from "./shared";
import conference from "../assets/conference.jpg";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();
  return (
    <section id="faq" className="relative overflow-hidden bg-ink py-24 sm:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading id="faq-heading" eyebrow="Chapter V — Questions" title={<>Frequently Asked <em className="font-light text-silver">Questions</em></>} script="Everything confirmed" />
        <div className="mt-14 border-t border-ivory/20">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <motion.div key={f.q} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.55, delay: Math.min(i * 0.05, 0.3) }} className="border-b border-ivory/15">
                <h3>
                  <button
                    type="button" onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open} aria-controls={`faq-panel-${i}`} id={`faq-button-${i}`}
                    className={`flex w-full items-center gap-4 py-6 text-left transition-colors sm:gap-6 ${open ? "text-ivory" : "text-ivory/85 hover:text-ivory"}`}
                  >
                    <span className="font-serif text-sm tracking-[0.2em] text-silver">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 font-serif text-[22px] leading-tight font-medium sm:text-[26px]">{f.q}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-300 ${open ? "rotate-0 border-ivory bg-ivory text-oxblood" : "border-ivory/35 text-ivory"}`}>
                      {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-button-${i}`}
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <p className="max-w-3xl pb-7 pl-10 pr-2 text-sm leading-7 text-silver sm:pl-14">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-[11px] leading-6 text-mutedgrey">
          Still unsure? Write to the Omni Diplomatic Forum at{" "}
          <a href={`mailto:${siteConfig.contact.emails[0]}`} className="text-silver underline decoration-silver/40 underline-offset-4 hover:text-ivory">{siteConfig.contact.emails[0]}</a>.
        </p>
      </div>
    </section>
  );
}

function EmailRow({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* clipboard unavailable */ }
  };
  return (
    <div className="group flex items-center justify-between gap-3 border-b border-ivory/15 py-4">
      <a href={`mailto:${email}`} className="flex min-w-0 items-center gap-3 text-sm text-ivory/90 transition-colors hover:text-ivory sm:text-[15px]">
        <Mail className="h-4 w-4 shrink-0 text-silver" aria-hidden="true" />
        <span className="truncate">{email}</span>
      </a>
      <button type="button" onClick={copy} aria-label={copied ? `${email} copied` : `Copy ${email}`}
        className="inline-flex shrink-0 items-center gap-1.5 border border-ivory/25 px-3 py-2 text-[8px] font-bold tracking-[0.22em] text-silver uppercase transition-all hover:border-ivory hover:text-ivory">
        {copied ? <><Check className="h-3 w-3" /> Copied</> : <><Copy className="h-3 w-3" /> Copy</>}
      </button>
    </div>
  );
}

export function Footer() {
  const reduce = useReducedMotion();
  const socials = [
    { label: "Facebook — Omni Diplomatic Forum", href: siteConfig.socials.facebook, Icon: FacebookIcon },
    { label: "Instagram — odf.official_", href: siteConfig.socials.instagram, Icon: InstagramIcon },
    { label: "Linktree — odf.official", href: siteConfig.socials.linktree, Icon: Link2 },
  ];
  return (
    <footer id="contact" className="grain relative overflow-hidden bg-oxblood" aria-labelledby="contact-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <img src={conference} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-oxblood via-oxblood/88 to-ink" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-24 sm:px-8 sm:pt-32 lg:px-10">
        <motion.div initial={reduce ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9 }} className="text-center">
          <StarMark className="mx-auto h-9 w-9 text-silver" />
          <p className="mt-6 text-[10px] font-semibold tracking-[0.42em] text-silver uppercase">Omni Diplomatic Forum Invites You</p>
          <h2 id="contact-heading" className="mx-auto mt-5 max-w-4xl font-serif text-[40px] leading-[0.98] font-medium text-ivory sm:text-6xl lg:text-7xl">
            THE WORLD IS WAITING<br />FOR <em className="font-light text-silver">YOUR VOICE.</em>
          </h2>
          <p className="mt-6 font-serif text-xl font-light italic text-ivory/85 sm:text-2xl">Three days. Countless perspectives. One shared diplomatic experience.</p>
          <p className="font-script mt-5 text-4xl text-warmwhite sm:text-5xl">Diplomacy for All.</p>
          <a href="#registration" className="group mt-9 inline-flex items-center gap-2 bg-ivory px-9 py-4 text-[11px] font-bold tracking-[0.3em] text-oxblood uppercase transition-all duration-300 hover:bg-warmwhite hover:shadow-[0_16px_44px_rgba(0,0,0,0.55)]">
            Register Now <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <div className="mt-20 grid gap-12 border-t border-ivory/20 pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <OdfLogo size={58} />
              <div className="leading-none">
                <p className="font-serif text-2xl font-semibold tracking-[0.12em] text-ivory">OMNI<span className="text-silver">MUNC</span><span className="font-light italic">'26</span></p>
                <p className="mt-1.5 text-[8px] font-semibold tracking-[0.32em] text-silver uppercase">Omni Model United Nations</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[13px] leading-6 text-silver">The official registration portal of the Omni Model United Nations Conference 2026, organised by the Omni Diplomatic Forum.</p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`}
                  className="flex h-11 w-11 items-center justify-center border border-ivory/30 text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory hover:text-oxblood">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="text-[9px] font-bold tracking-[0.34em] text-silver uppercase">Explore</p>
            <ul className="mt-5 space-y-3 font-serif text-lg text-ivory/90">
              {[["About the Conference", "#about"], ["Registration", "#registration"], ["Important Information", "#information"], ["Venue", "#venue"], ["FAQ", "#faq"]].map(([label, href]) => (
                <li key={href}><a href={href} className="transition-colors hover:text-silver">{label}</a></li>
              ))}
            </ul>
            <p className="mt-7 text-[11px] leading-5 text-mutedgrey">{siteConfig.conference.datesShort}<br />{siteConfig.conference.venue}, Bangladesh</p>
          </nav>

          <div className="md:col-span-4">
            <p className="text-[9px] font-bold tracking-[0.34em] text-silver uppercase">Correspondence</p>
            <div className="mt-2">
              {siteConfig.contact.emails.map((e) => <EmailRow key={e} email={e} />)}
            </div>
            <p className="mt-5 text-[11px] leading-5 text-mutedgrey">For registration queries, please write to the Omni Diplomatic Forum through either official address.</p>
          </div>
        </div>

        <OrnamentalRule className="mt-14" />
        <div className="mt-7 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] tracking-[0.18em] text-silver uppercase">© 2026 Omni Diplomatic Forum. All Rights Reserved.</p>
          <p className="flex items-center gap-2 text-[10px] tracking-[0.24em] text-mutedgrey uppercase">
            <img src={siteConfig.logos.uttaraUniversity} alt="" className="h-6 w-auto bg-warmwhite px-1.5 py-0.5 object-contain" loading="lazy" aria-hidden="true" />
            Hosted at Uttara University
          </p>
        </div>
      </div>
      <p className="relative select-none text-center font-serif text-[13.5vw] font-bold leading-[0.78] tracking-tight text-ivory/[0.07]" aria-hidden="true">OMNIMUNC'26</p>
    </footer>
  );
}
