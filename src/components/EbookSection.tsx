import { useState } from "react";
import {
 Download, BookOpen, CheckCircle, AlertTriangle,
 TrendingDown, MapPin, Clock, FileX,
} from "lucide-react";
import { CountryData } from "../data/countries";
import LeadCaptureModal from "./LeadCaptureModal";

interface Props {
 country: CountryData;
}

const MISTAKES = [
 {
  icon: <TrendingDown size={18} />,
  title: "Wrong Course",
  body: "$35K on a degree no one's hiring for",
  iconBg: "bg-red-500/15 text-red-400",
 },
 {
  icon: <MapPin size={18} />,
  title: "Wrong City",
  body: "Paid double when a cheaper city had the same uni",
  iconBg: "bg-amber-500/15 text-amber-400",
 },
 {
  icon: <FileX size={18} />,
  title: "Visa Rejected",
  body: "One missing document. Three months wasted.",
  iconBg: "bg-orange-500/15 text-orange-400",
 },
 {
  icon: <Clock size={18} />,
  title: "Missed Intake",
  body: "Applied late. Waited 6 more months at home.",
  iconBg: "bg-rose-500/15 text-rose-400",
 },
];

export default function EbookSection({ country }: Props) {
 const [modalOpen, setModalOpen] = useState(false);

 return (
  <section id="download">

   {/* ═══════════════════════════════════════
     DARK HOOK — Short, emotional, scannable
     Job: Stop scrolling. Create urgency.
   ═══════════════════════════════════════ */}
   <div className="relative py-16 sm:py-20 bg-neutral-950 overflow-hidden">
    {/* Subtle glow */}
    <div
     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
     style={{ background: country.color }}
    />

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
     {/* Badge */}
     <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/15 mb-6">
      <AlertTriangle size={11} />
      Every year, students learn this too late
     </span>

     {/* Headline — 10 words max */}
     <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight text-balance">
      Don't Pick the Wrong Course in{" "}
      <span style={{ color: country.color === "#7F1D1D" ? "#FCA5A5" : `${country.color}cc` }}>
       {country.name}
      </span>.
     </h2>

     {/* Subtext — 12 words max */}
     <p className="mt-3 text-neutral-400 text-[15px]">
      These four mistakes cost students thousands. All are avoidable.
     </p>

     {/* 4 Mistake cards — compact grid */}
     <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10 max-w-3xl mx-auto">
      {MISTAKES.map((m) => (
       <div
        key={m.title}
        className="rounded-xl p-4 bg-white/[0.04] border border-white/[0.06] text-left"
       >
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${m.iconBg}`}>
         {m.icon}
        </div>
        <p className="text-white text-sm font-semibold mb-1">{m.title}</p>
        <p className="text-neutral-500 text-xs leading-relaxed">{m.body}</p>
       </div>
      ))}
     </div>
    </div>
   </div>


   {/* ═══════════════════════════════════════════
     LIGHT SECTION — Value + Ebook + CTA
     Job: Show what they get. Make them click.
   ═══════════════════════════════════════════ */}
   <div className="relative py-16 sm:py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">

     {/* Section header */}
     <div className="text-center mb-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-900/50 mb-2">Free 2026 Guide</p>
      <h3 className="text-2xl sm:text-3xl font-bold text-dark tracking-tight leading-snug">
       {country.ebook.pages} Pages to Get It Right the First Time
      </h3>
     </div>

     {/* Two-column: Ebook + Benefits */}
     <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">

      {/* Left: Ebook mockup */}
      <div className="flex justify-center">
       <div className="relative">
        {/* Soft shadow */}
        <div
         className="absolute inset-0 rounded-2xl translate-x-2 translate-y-2 opacity-20 blur-sm"
         style={{ background: country.color }}
        />
        {/* Stacked page */}
        <div className="absolute top-1.5 left-1.5 w-full h-full rounded-2xl bg-neutral-100 border border-neutral-200" />

        {/* Main card */}
        <div className={`relative rounded-2xl p-7 shadow-card w-56 sm:w-60 bg-gradient-to-br ${country.cardGradient} border border-white/10`}>
         <div className="flex items-center gap-2 mb-5">
          <BookOpen size={14} className="text-white/70" />
          <span className="text-white/70 text-[10px] font-semibold uppercase tracking-wider">Free Guide</span>
         </div>
         <div className="text-3xl mb-2">{country.flag}</div>
         <h4 className="text-white font-bold text-sm leading-tight mb-1">{country.ebook.title}</h4>
         <p className="text-white/50 text-[11px] mb-4">{country.ebook.pages} pages · PDF + Checklist</p>
         <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
           <svg key={i} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
           </svg>
          ))}
          <span className="text-[10px] text-white/40 ml-1">10K+</span>
         </div>
        </div>

        {/* Badge */}
        <div className="absolute -top-2.5 -right-2.5 bg-white rounded-lg px-2.5 py-1 shadow-card z-10">
         <p className="text-[10px] font-bold text-dark">{country.ebook.pages} pages</p>
         <p className="text-[10px] text-neutral-400">Free PDF</p>
        </div>
       </div>
      </div>

      {/* Right: What's inside + CTA */}
      <div>
       <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mb-4">What's inside</p>

       {/* Bullets — scannable, tight */}
       <div className="space-y-3 mb-8">
        {country.ebook.bullets.slice(0, 6).map((b) => {
         const [title, ...rest] = b.split(" — ");
         const detail = rest.join(" — ");
         return (
          <div key={b} className="flex items-start gap-2.5">
           <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
           <p className="text-sm leading-relaxed">
            <span className="text-dark font-medium">{title}</span>
            {detail && <span className="text-neutral-400"> — {detail}</span>}
           </p>
          </div>
         );
        })}
       </div>

       {/* Testimonial — inline, compact */}
       <div className="rounded-xl bg-surface border border-border p-4 mb-8">
        <p className="text-sm text-neutral-600 leading-relaxed italic">
         "This guide showed me which degrees actually lead to PR. Saved me from a $40K mistake."
        </p>
        <p className="mt-2 text-xs text-neutral-400">
         <span className="text-dark font-medium">Sujata R.</span> · Nepal · Deakin University
        </p>
       </div>

       {/* CTA */}
       <button
        onClick={() => setModalOpen(true)}
        className="flex items-center gap-2.5 font-semibold px-7 py-3.5 rounded-xl text-white shadow-lg hover:opacity-90 transition-all text-[15px]"
        style={{ background: country.color }}
       >
        <Download size={18} />
        Get It Free — Sent to Your Inbox
       </button>

       {/* Risk reversal */}
       <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs text-neutral-400">
        <span>No credit card</span>
        <span>·</span>
        <span>No follow-up calls</span>
        <span>·</span>
        <span>Unsubscribe anytime</span>
       </div>
      </div>

     </div>
    </div>
   </div>

   <LeadCaptureModal
    isOpen={modalOpen}
    onClose={() => setModalOpen(false)}
    country={country.name}
    ebookTitle={country.ebook.title}
   />
  </section>
 );
}
