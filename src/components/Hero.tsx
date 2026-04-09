import React, { useState } from "react";
import { Download, ArrowRight, Star, MapPin } from "lucide-react";
import { CountryData } from "../data/countries";
import LeadCaptureModal from "./LeadCaptureModal";

interface Props {
 country: CountryData;
}

const COUNTRY_DISPLAY_NAMES: Record<string, string> = {
 australia: "Australia",
 canada: "Canada",
 uk: "UK",
 usa: "USA"
};

/* ── floating UI cards shown in hero ── */
function EbookMockup({ country }: { country: CountryData }) {
 return (
  <div
   className={`float-card w-48 p-4 animate-float`}
   style={{ background: `linear-gradient(135deg, ${country.color}15, ${country.color}08)`,
        border: `1px solid ${country.color}20` }}
  >
   <div className={`w-10 h-10 rounded-xl mb-3 flex items-center justify-center text-xl`}
      style={{ background: `linear-gradient(135deg, ${country.color}, ${country.color}cc)` }}>
    {country.flag}
   </div>
   <p className="text-xs font-semibold text-neutral-800 leading-tight">{country.ebook.title}</p>
   <div className="flex items-center gap-1 mt-2">
    {[1,2,3,4,5].map(i => (
     <Star key={i} size={8} fill="#f59e0b" className="text-amber-400" />
    ))}
    <span className="text-xs text-neutral-500 ml-1">Free</span>
   </div>
   <div className="mt-3 text-xs font-bold text-white py-1.5 rounded-lg text-center"
      style={{ background: country.color }}>
    Download ↓
   </div>
  </div>
 );
}

function VisaCard({ country }: { country: CountryData }) {
 return (
  <div className="float-card px-4 py-3 animate-float-slow flex items-center gap-3 w-52">
   <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
    <span className="text-base">✅</span>
   </div>
   <div>
    <p className="text-xs text-neutral-500">Visa type</p>
    <p className="text-xs font-semibold text-neutral-800 leading-tight">{country.visa.type}</p>
   </div>
  </div>
 );
}

function UniversityCard() {
 return (
  <div className="float-card px-4 py-3 animate-float-rev flex items-center gap-3 w-52">
   <div className="w-8 h-8 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
    <span className="text-base">🏛️</span>
   </div>
   <div>
    <p className="text-xs font-semibold text-neutral-800">Matched Unis</p>
    <div className="flex gap-1 mt-0.5">
     {["Oxford","MIT","ANU"].slice(0,2).map(u => (
      <span key={u} className="text-xs bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded-md">{u}</span>
     ))}
    </div>
   </div>
  </div>
 );
}

function ChatBubble() {
 return (
  <div className="float-card px-4 py-3 animate-float w-52">
   <div className="flex items-start gap-2">
    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-800 to-brand-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-sm">G</div>
    <div>
     <p className="text-xs text-neutral-500 mb-0.5">Globaly AI</p>
     <p className="text-xs text-neutral-800 leading-relaxed">"Your visa cost is ~AUD 710. Processing takes 4–6 weeks." 💬</p>
    </div>
   </div>
  </div>
 );
}

function CostBadge({ country }: { country: CountryData }) {
 return (
  <div className="float-card px-3 py-2 animate-float-slow flex items-center gap-2">
   <span className="text-base">💰</span>
   <div>
    <p className="text-xs text-neutral-500">Est. yearly cost</p>
    <p className="text-xs font-bold text-neutral-800">{country.costs.tuitionRange}</p>
   </div>
  </div>
 );
}

export default function Hero({ country }: Props) {
 const [modalOpen, setModalOpen] = useState(false);
 const [successRedirect, setSuccessRedirect] = useState(false);

 return (
  <section
   className={`relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br ${country.gradient} pt-20`}
  >
   {/* Soft radial bg glow */}
   <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
    style={{ background: `radial-gradient(ellipse, ${country.color}44, transparent 70%)` }}
   />

   <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

     {/* ── Left: Copy ── */}
     <div className="space-y-6 animate-fade-up">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-white/60 text-neutral-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
       <span>{country.heroBadge}</span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-dark leading-tight tracking-tight">
       The Full Guide to<br />
       Study in <span className="text-brand-800 tracking-tight">
        {COUNTRY_DISPLAY_NAMES[country.id] || "Australia"}
       </span>
      </h1>

      {/* Sub */}
      <p className="text-lg text-neutral-600 leading-relaxed max-w-lg">
       {country.heroSub}
      </p>

      {/* Quick stats row */}
      <div className="flex flex-wrap gap-3">
       {country.stats.slice(0, 2).map((s) => (
        <div key={s.label} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-white/60 rounded-xl px-3 py-2 shadow-sm">
         <span className="text-lg">{s.icon}</span>
         <div>
          <p className="text-sm font-bold text-dark">{s.value}</p>
          <p className="text-xs text-neutral-500">{s.label}</p>
         </div>
        </div>
       ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
       <button
        onClick={() => setModalOpen(true)}
        className="flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
        style={{ background: country.color }}
       >
        <Download size={18} />
        Download Free Guide
       </button>
       <a
        href="#details"
        className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border border-neutral-200 text-neutral-700 font-semibold px-6 py-3.5 rounded-xl hover:bg-white transition-all"
       >
        Explore {country.name}
        <ArrowRight size={16} />
       </a>
      </div>

      {/* Trust line */}
      <p className="text-xs text-neutral-400 flex items-center gap-1.5">
       <MapPin size={12} className="text-neutral-400" />
       Free guide · No credit card · 10,000+ students helped
      </p>
     </div>

     {/* ── Right: Floating elements ── */}
     <div className="relative h-80 lg:h-[480px] hidden md:block">
      {/* Ebook mockup  center */}
      <div className="absolute top-[10%] left-[25%] z-20">
       <EbookMockup country={country} />
      </div>
      {/* Visa card  top right */}
      <div className="absolute top-[5%] right-[5%] z-10" style={{ animationDelay: "1s" }}>
       <VisaCard country={country} />
      </div>
      {/* University card  middle left */}
      <div className="absolute top-[45%] left-[0%] z-10" style={{ animationDelay: "0.5s" }}>
       <UniversityCard />
      </div>
      {/* Chat bubble  bottom right */}
      <div className="absolute bottom-[15%] right-[5%] z-10" style={{ animationDelay: "1.5s" }}>
       <ChatBubble />
      </div>
      {/* Cost badge  bottom left */}
      <div className="absolute bottom-[10%] left-[20%] z-20" style={{ animationDelay: "2s" }}>
       <CostBadge country={country} />
      </div>

      {/* Soft circle behind floats */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-10 blur-2xl"
         style={{ background: country.color }} />
     </div>
    </div>
   </div>

   {/* Lead capture modal */}
   <LeadCaptureModal
    isOpen={modalOpen}
    onClose={() => setModalOpen(false)}
    country={country.name}
    ebookTitle={country.ebook.title}
    onSuccess={() => setSuccessRedirect(true)}
   />
  </section>
 );
}
