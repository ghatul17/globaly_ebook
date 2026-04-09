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
  country?: string;
  content?: PersuasionData[];
}

export default function PersuasionSection({ country, content = DEFAULT_CONTENT }: PersuasionSectionProps) {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center flex flex-col items-center mb-20">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 border border-neutral-200/80 px-4 py-1.5 rounded-full bg-white shadow-sm mb-6">
            {country ? `WHY ${country.toUpperCase()}` : "WHY DOWNLOAD"}
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-bold text-navy tracking-[-0.02em] max-w-2xl leading-[1.15]">
            {country 
              ? `Why students pick ${country} — and don't look back.` 
              : "Why you should download this guide — and not miss out."}
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 gap-6">
          {content.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white border border-neutral-100/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-neutral-200 transition-all duration-300"
            >
              {/* Minimal Icon with Soft Background */}
              <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 ease-out">
                {React.createElement(item.icon, {
                  className: "w-[22px] h-[22px] text-neutral-700 stroke-[1.5]"
                })}
              </div>
              
              {/* Card Content */}
              <div>
                <h3 className="text-lg font-bold text-navy mb-2 tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-[15px] text-neutral-500 leading-relaxed font-normal">
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
