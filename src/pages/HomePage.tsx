import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight, Globe, BookOpen, ArrowUpRight } from "lucide-react";
import { COUNTRIES } from "../data/countries";
import HowItWorks from "../components/HowItWorks";
import LeadCaptureModal from "../components/LeadCaptureModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FEATURED_COUNTRY = COUNTRIES[0];

const PHRASES = [
 "Accessible and Possible",
 "Open & Empowering",
 "Connected & Limitless",
 "Borderless & Bright",
 "Simple & Achievable"
];

function Typewriter() {
 const [text, setText] = useState("");
 const [isDeleting, setIsDeleting] = useState(false);
 const [loopNum, setLoopNum] = useState(0);

 useEffect(() => {
  let timer: ReturnType<typeof setTimeout>;
  const current = loopNum % PHRASES.length;
  const fullText = PHRASES[current];

  if (isDeleting) {
   timer = setTimeout(() => {
    setText(fullText.substring(0, text.length - 1));
   }, 40); // Fast delete
  } else {
   timer = setTimeout(() => {
    setText(fullText.substring(0, text.length + 1));
   }, 80); // Typing speed
  }

  if (!isDeleting && text === fullText) {
   clearTimeout(timer);
   timer = setTimeout(() => {
    setIsDeleting(true);
   }, 2000); // Pause at end of word
  } else if (isDeleting && text === "") {
   clearTimeout(timer);
   setIsDeleting(false);
   setLoopNum((prev) => prev + 1);
  }

  return () => clearTimeout(timer);
 }, [text, isDeleting, loopNum]);

 return (
  <span className="inline-flex items-center">
   {text}
   <span className="inline-block w-[3px] h-[1em] bg-brand-900 ml-[2px] animate-[pulse_1s_ease-in-out_infinite]"></span>
  </span>
 );
}

export default function HomePage() {
 const [modalOpen, setModalOpen] = useState(false);
 const [selectedCountry, setSelectedCountry] = useState(FEATURED_COUNTRY);

 function openModal(countryId: string) {
  const c = COUNTRIES.find(c => c.id === countryId) ?? FEATURED_COUNTRY;
  setSelectedCountry(c);
  setModalOpen(true);
 }

 return (
  <>
   {/* ── HERO ─────────────────────────────── */}
   <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-white pt-16">
    {/* Subtle gradient orb */}
    <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[100px] bg-brand-900 pointer-events-none" />
    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[80px] bg-brand-700 pointer-events-none" />

    <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full py-24 text-center">
     {/* Badge */}
     <div className="flex justify-center mb-10 animate-fade-up">
      <Badge variant="outline" className="gap-1.5 border-neutral-200/80 text-neutral-400 text-[10px] uppercase tracking-[0.15em] font-medium px-4 py-1.5 rounded-full bg-white shadow-sm">
       <Globe size={10} className="text-brand-900" />
       The Global Education Marketplace
      </Badge>
     </div>

     {/* Headline */}
     <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-navy tracking-[-0.04em] mb-8 animate-fade-up animate-delay-100 min-h-[120px] sm:min-h-[140px] lg:min-h-[150px]">
      Making Global Education<br />
      <span className="text-brand-900 font-medium tracking-tight">
       <Typewriter />
      </span>
     </h1>

     {/* Sub */}
     <p className="text-lg sm:text-lg text-neutral-500/80 max-w-xl mx-auto mb-14 leading-relaxed font-normal animate-fade-up animate-delay-200">
      A premium network connecting ambitious students with verified agents and top universities worldwide.
     </p>

     {/* CTA */}
     <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-300">
      <Button asChild size="lg" className="rounded-full px-10 h-14 text-[13px] uppercase tracking-widest font-bold bg-brand-900 hover:bg-brand-800 shadow-xl shadow-brand-900/10 transition-all border-none">
       <a href="#guides">Pick a Country Guide</a>
      </Button>
      <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-14 text-[13px] uppercase tracking-widest font-bold border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-all">
       <a href="#how">How it works</a>
      </Button>
     </div>

     {/* Social proof */}
     <p className="mt-12 text-[10px] text-neutral-400 uppercase tracking-[0.2em] font-medium animate-fade-up animate-delay-500">
      Free forever &nbsp;·&nbsp; 10,000+ students helped &nbsp;·&nbsp; Verified agents in 60+ countries
     </p>
    </div>
   </section>

   {/* ── COUNTRY CARDS ────────────────────── */}
   <section id="guides" className="py-24 bg-neutral-50/80">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
     <div className="text-center mb-16">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-900 mb-4">
       Country Guides
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-[-0.02em]">
       Where do you want to study?
      </h2>
      <p className="mt-3 text-neutral-500 max-w-md mx-auto text-sm leading-relaxed">
       Each guide covers costs, visa requirements, work rights, PR pathways and top cities  completely free.
      </p>
     </div>

     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {COUNTRIES.map((c) => (
       <div
        key={c.id}
        className="group relative bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:border-neutral-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out"
       >
        <div className="p-6">
         {/* Flag  large and centered */}
         <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 ease-out">
          {c.flag}
         </div>

         {/* Country name */}
         <h3 className="font-semibold text-neutral-900 text-lg tracking-[-0.01em] mb-1">
          {c.name}
         </h3>

         {/* Tagline */}
         <p className="text-[13px] text-neutral-400 leading-relaxed mb-5 min-h-[40px]">
          {c.tagline}
         </p>

         {/* Key stat */}
         <div className="flex items-center gap-2 mb-6 pb-5 border-b border-neutral-100">
          {c.stats.slice(0, 1).map(s => (
           <div key={s.label} className="flex items-baseline gap-1.5">
            <span className="text-sm font-bold text-neutral-900">{s.value}</span>
            <span className="text-[11px] text-neutral-400">{s.label}</span>
           </div>
          ))}
         </div>

         {/* Actions */}
         <div className="flex items-center gap-2">
          <Link
           to={`/${c.id}`}
           className="flex items-center gap-1 text-[13px] font-medium text-neutral-600 hover:text-navy transition-colors"
          >
           Explore
           <ArrowUpRight size={13} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </Link>
          <span className="text-neutral-200">·</span>
          <button
           onClick={() => openModal(c.id)}
           className="flex items-center gap-1.5 text-[13px] font-medium text-brand-900 hover:text-brand-800 transition-colors"
          >
           <Download size={12} />
           Free Guide
          </button>
         </div>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* ── STATS BAR ─────────────────────────── */}
   <section className="py-16 bg-white border-y border-neutral-100">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
       { value: "10,000+",  label: "Guides downloaded" },
       { value: "4",     label: "Countries covered" },
       { value: "60+",    label: "Student nationalities" },
       { value: "Free",    label: "Always free" },
      ].map((s) => (
       <div key={s.label}>
        <p className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">{s.value}</p>
        <p className="text-xs text-neutral-500 mt-1 tracking-wide">{s.label}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* ── HOW IT WORKS ─────────────────────── */}
   <div id="how">
    <HowItWorks />
   </div>

   {/* ── GLOBAL CTA ───────────────────────── */}
   <section className="py-28 bg-navy relative overflow-hidden">
    {/* Subtle glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.08] blur-[100px] bg-brand-900 pointer-events-none" />

    <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
     <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-[-0.03em] mb-5 leading-tight">
      Ready to make the move?
     </h2>
     <p className="text-lg text-white/40 mb-12 leading-relaxed font-light">
      Pick a destination, download the free guide, and start your journey today.
     </p>
     <div className="flex flex-wrap gap-3 justify-center">
      {COUNTRIES.map((c) => (
       <button
        key={c.id}
        onClick={() => openModal(c.id)}
        className="flex items-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] hover:border-white/20 text-white text-sm font-medium px-5 py-3 rounded-full transition-all duration-200"
       >
        <span className="text-lg">{c.flag}</span>
        {c.name}
       </button>
      ))}
     </div>
    </div>
   </section>

   {/* Global lead capture modal */}
   <LeadCaptureModal
    isOpen={modalOpen}
    onClose={() => setModalOpen(false)}
    country={selectedCountry.name}
    ebookTitle={selectedCountry.ebook.title}
   />
  </>
 );
}
