import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CountryData } from "../data/countries";

export default function FAQSection({ data }: { data: CountryData }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-brand-900 uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            The questions everyone asks
          </h2>
        </div>

        <div className="space-y-3">
          {data.faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-neutral-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start gap-4 px-6 py-5 text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="flex-1 text-sm font-semibold text-dark leading-snug pt-0.5">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-neutral-400 transition-transform mt-0.5 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
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
