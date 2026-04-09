import React from "react";
import { Building2, TrendingUp, Briefcase, Plane } from "lucide-react";

export interface PersuasionData {
 title: string;
 description: string;
 icon: React.ElementType;
}

const DEFAULT_CONTENT: PersuasionData[] = [
 {
  title: "Top universities explained simply",
  description: "Get a clear breakdown of universities, rankings, and what actually matters for your career.",
  icon: Building2
 },
 {
  title: "Career & migration pathways",
  description: "Understand how your study choice impacts long-term opportunities and future plans.",
  icon: TrendingUp
 },
 {
  title: "Work while studying",
  description: "Learn how students earn, manage expenses, and gain real-world experience.",
  icon: Briefcase
 },
 {
  title: "Post-study opportunities",
  description: "Discover visa options, job pathways, and what happens after graduation.",
  icon: Plane
 }
];

interface PersuasionSectionProps {
 country?: string; // Kept for API compatibility but unused for labels now
 content?: PersuasionData[];
}

export default function PersuasionSection({ content = DEFAULT_CONTENT }: PersuasionSectionProps) {
 return (
  <section className="py-24 bg-[#FAFAFA]">
   <div className="max-w-5xl mx-auto px-4 sm:px-6">
    {/* Header */}
    <div className="text-center flex flex-col items-center mb-16 sm:mb-24">
     <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 border border-neutral-200/80 px-4 py-1.5 rounded-full bg-white shadow-sm mb-6">
      WHY DOWNLOAD
     </span>
     <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#1E293B] tracking-[-0.03em] max-w-3xl leading-[1.1] text-balance">
      Why you should download this guide and not miss out.
     </h2>
    </div>

    {/* Grid Layout */}
    <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
     {content.map((item, index) => (
      <div
       key={index}
       className="group flex flex-col items-start p-10 rounded-[32px] bg-white border border-neutral-100/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02),0_4px_25px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] hover:border-neutral-200 transition-all duration-500 ease-out"
      >
       {/* Minimal Icon with Soft Background */}
       <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white group-hover:border-slate-200 transition-all duration-500 ease-out shadow-sm">
        {React.createElement(item.icon, {
         className: "w-6 h-6 text-[#475569] stroke-[1.5]"
        })}
       </div>
       
       {/* Card Content */}
       <div>
        <h3 className="text-[20px] font-bold text-[#1E293B] mb-3 tracking-[-0.02em]">
         {item.title}
        </h3>
        <p className="text-[16px] text-slate-500 leading-relaxed font-normal opacity-90">
         {item.description}
        </p>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}
