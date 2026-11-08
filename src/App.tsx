import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About, { Marquee } from "./components/About";
import Registration from "./components/Registration";
import { ImportantInformation, Venue } from "./components/InfoVenue";
import { Faq, Footer } from "./components/FaqFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-ivory antialiased">
      <a href="#registration" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ivory focus:px-5 focus:py-3 focus:text-[11px] focus:font-bold focus:tracking-[0.2em] focus:text-oxblood">
        Skip to registration
      </a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Registration />
        <ImportantInformation />
        <Venue />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
