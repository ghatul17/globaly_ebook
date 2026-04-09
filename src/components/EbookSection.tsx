import React, { useState } from "react";
import { Download, BookOpen, CheckCircle } from "lucide-react";
import { CountryData } from "../data/countries";
import LeadCaptureModal from "./LeadCaptureModal";

interface Props {
 country: CountryData;
}

export default function EbookSection({ country }: Props) {
 const [modalOpen, setModalOpen] = useState(false);

 return (
  <section id="download" className="py-20 bg-gradient-to-br from-neutral-950 to-neutral-900">
   <div className="max-w-5xl mx-auto px-4 sm:px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">

     {/* ── Left: Visual ebook card ── */}
     <div className="flex justify-center">
      <div className="relative">
       {/* Shadow/depth card */}
       <div
        className="absolute inset-0 rounded-3xl translate-x-3 translate-y-3 opacity-40"
        style={{ background: `linear-gradient(135deg, ${country.color}88, ${country.color}44)` }}
       />
       {/* Main card */}
       <div
        className={`relative rounded-3xl p-8 shadow-2xl w-64 bg-gradient-to-br ${country.cardGradient}`}
       >
        <div className="flex items-center gap-2 mb-6">
         <BookOpen size={20} className="text-white/80" />
         <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">Free Guide</span>
        </div>
        <div className="text-4xl mb-4">{country.flag}</div>
        <h3 className="text-white font-bold text-lg leading-tight mb-1">{country.ebook.title}</h3>
        <p className="text-white/70 text-xs mb-6">{country.ebook.pages} pages · PDF + Checklist</p>
        <div className="text-xs text-white/60 font-medium">globaly.io</div>
       </div>

       {/* Floating pages count badge */}
       <div className="absolute -top-3 -right-3 bg-white rounded-xl px-3 py-1.5 shadow-float">
        <p className="text-xs font-bold text-dark">{country.ebook.pages} pages</p>
        <p className="text-xs text-neutral-400">Free PDF</p>
       </div>
      </div>
     </div>

     {/* ── Right: Content ── */}
     <div className="space-y-6">
      <div>
       <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white/60">
        Inside the guide
       </span>
       <h2 className="mt-4 text-3xl font-bold text-white tracking-tight">{country.ebook.title}</h2>
       <p className="mt-2 text-neutral-400">{country.ebook.subtitle}</p>
      </div>

      <ul className="space-y-3">
       {country.ebook.bullets.map((b) => (
        <li key={b} className="flex items-start gap-3">
         <CheckCircle size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
         <span className="text-sm text-neutral-300 leading-relaxed">{b}</span>
        </li>
       ))}
      </ul>

      <button
       onClick={() => setModalOpen(true)}
       className="flex items-center gap-2 text-dark font-semibold px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-100 transition-colors shadow-lg"
      >
       <Download size={18} />
       Download Free  {country.name} Guide
      </button>

      <p className="text-xs text-neutral-500">
       Free. Straight to your inbox. No spam. 10,000+ students downloaded.
      </p>
     </div>
    </div>
   </div>

   <LeadCaptureModal
    isOpen={modalOpen}
    onClose={() => setModalOpen(false)}
    country={country.name}
    ebookTitle={country.ebook.title}
    onSuccess={() => {}}
   />
  </section>
 );
}
