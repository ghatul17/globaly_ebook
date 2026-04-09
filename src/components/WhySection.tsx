import React from "react";
import { CountryData } from "../data/countries";

interface Props {
 country: CountryData;
}

export default function WhySection({ country }: Props) {
 return (
  <section className="py-20 bg-white">
   <div className="max-w-5xl mx-auto px-4 sm:px-6">
    {/* Header */}
    <div className="text-center mb-14">
     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 border border-neutral-200 px-3 py-1.5 rounded-full bg-white shadow-sm">
      Why {country.name}
     </span>
     <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-dark tracking-tight">
      {country.whySection.headline}
     </h2>
    </div>

    {/* Reason cards */}
    <div className="grid sm:grid-cols-2 gap-6">
     {country.whySection.reasons.map((r, i) => (
      <div
       key={r.title}
       className="group p-6 rounded-2xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:shadow-card hover:border-neutral-200 transition-all duration-200"
      >
       <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
        {r.icon}
       </div>
       <h3 className="text-base font-bold text-dark mb-2">{r.title}</h3>
       <p className="text-sm text-neutral-600 leading-relaxed">{r.body}</p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}
