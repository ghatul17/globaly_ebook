import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { CountryData } from "../data/countries";

interface Props {
 country: CountryData;
}

export default function FAQ({ country }: Props) {
 const [open, setOpen] = useState<number | null>(0);

 return (
  <section className="py-20 bg-white">
   <div className="max-w-3xl mx-auto px-4 sm:px-6">
    {/* Header */}
    <div className="text-center mb-12">
     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 border border-neutral-200 px-3 py-1.5 rounded-full bg-white shadow-sm">
      FAQ
     </span>
     <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-dark tracking-tight">
      Questions students always ask
     </h2>
    </div>

    {/* Accordion */}
    <div className="space-y-2">
     {country.faqs.map((faq, i) => (
      <div
       key={i}
       className="border border-neutral-200 rounded-2xl overflow-hidden bg-white"
      >
       <button
        onClick={() => setOpen(open === i ? null : i)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-neutral-50 transition-colors"
       >
        <span className="text-sm font-semibold text-dark pr-4">{faq.q}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center">
         {open === i
          ? <Minus size={12} className="text-neutral-600" />
          : <Plus size={12} className="text-neutral-600" />
         }
        </span>
       </button>
       {open === i && (
        <div className="px-5 pb-5">
         <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
        </div>
       )}
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}
