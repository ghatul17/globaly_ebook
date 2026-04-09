import React from "react";
import { Star } from "lucide-react";
import { CountryData } from "../data/countries";

interface Props {
 country: CountryData;
}

export default function Testimonials({ country }: Props) {
 return (
  <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
   <div className="max-w-5xl mx-auto px-4 sm:px-6">
    {/* Header */}
    <div className="text-center mb-12">
     <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 bg-neutral-200 px-3 py-1 rounded-full">
      Real students
     </span>
     <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-dark tracking-tight">
      They figured it out. So can you.
     </h2>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-6">
     {country.testimonials.map((t) => (
      <div
       key={t.name}
       className="bg-white rounded-2xl shadow-card border border-neutral-100 p-6 flex flex-col hover:shadow-float hover:-translate-y-1 transition-all duration-200"
      >
       {/* Stars */}
       <div className="flex gap-0.5 mb-4">
        {[1,2,3,4,5].map((i) => (
         <Star key={i} size={14} fill="#f59e0b" className="text-amber-400" />
        ))}
       </div>

       {/* Quote */}
       <p className="text-sm text-neutral-700 leading-relaxed flex-1 mb-5">
        "{t.text}"
       </p>

       {/* Author */}
       <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
        <div className={`w-9 h-9 rounded-full ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
         {t.initials}
        </div>
        <div>
         <p className="text-sm font-semibold text-dark">{t.name}</p>
         <p className="text-xs text-neutral-500">{t.program} · {t.university}</p>
         <p className="text-xs text-neutral-400">From {t.from}</p>
        </div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}
