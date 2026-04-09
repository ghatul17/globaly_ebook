import React from "react";
import { CountryData } from "../data/countries";

interface Props {
 country: CountryData;
}

export default function TrustBadges({ country }: Props) {
 return (
  <section className="bg-white border-y border-neutral-100 py-10">
   <div className="max-w-5xl mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
     {country.stats.map((s) => (
      <div key={s.label} className="flex flex-col items-center text-center gap-2">
       <span className="text-3xl">{s.icon}</span>
       <p className="text-2xl font-bold text-dark tracking-tight">{s.value}</p>
       <p className="text-xs text-neutral-500 max-w-[120px] leading-snug">{s.label}</p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}
