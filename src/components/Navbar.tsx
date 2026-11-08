import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "../config/siteConfig";
import { OdfLogo } from "./shared";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open ]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ink/85 backdrop-blur-md shadow-[0_1px_0_rgba(243,238,232,0.12),0_18px_40px_rgba(0,0,0,0.45)] py-2.5" : "bg-gradient-to-b from-ink/70 to-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          <a href="#home" className="group flex min-w-0 items-center gap-3" aria-label="OMNIMUNC'26 — back to top">
            <OdfLogo size={scrolled ? 40 : 46} className="transition-all duration-500" />
            <span className="min-w-0 leading-none">
              <span className="block truncate font-serif text-lg sm:text-xl font-semibold tracking-[0.14em] text-ivory">
                OMNI<span className="text-silver">MUNC</span><span className="font-light italic">'26</span>
              </span>
              <span className="mt-1 block text-[8px] sm:text-[9px] font-medium tracking-[0.34em] text-silver/90 uppercase">
                Omni Diplomatic Forum
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="group relative py-2 text-[11px] font-semibold tracking-[0.28em] text-ivory/85 uppercase transition-colors hover:text-ivory">
                {l.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ivory transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#registration"
              className="group hidden sm:inline-flex items-center gap-2 border border-ivory/70 px-5 py-2.5 text-[10px] font-bold tracking-[0.28em] text-ivory uppercase transition-all duration-300 hover:bg-ivory hover:text-oxblood"
            >
              Register Now
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <button
              type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center border border-ivory/30 text-ivory lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="grain fixed inset-0 z-40 bg-oxblood/[0.985] lg:hidden"
            role="dialog" aria-modal="true" aria-label="Menu"
          >
            <div className="pointer-events-none absolute inset-3 border border-ivory/20" aria-hidden="true" />
            <nav className="flex h-full flex-col items-center justify-center gap-2 px-8" aria-label="Mobile">
              <p className="mb-6 text-[10px] tracking-[0.4em] text-silver uppercase">{siteConfig.conference.organiser} Presents</p>
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href} href={l.href} onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * i, duration: 0.45 }}
                  className="py-2 font-serif text-4xl font-medium text-ivory transition-colors hover:text-silver"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#registration" onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="mt-8 inline-flex items-center gap-2 bg-ivory px-8 py-4 text-[11px] font-bold tracking-[0.3em] text-oxblood uppercase"
              >
                Register Now <ArrowUpRight className="h-4 w-4" />
              </motion.a>
              <p className="mt-10 font-script text-3xl text-silver">{siteConfig.conference.slogan}</p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
