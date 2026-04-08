import React from "react";
import { X, Check } from "lucide-react";
import { CountryData } from "../data/countries";

interface Props {
  country: CountryData;
}

export default function ProblemSolution({ country }: Props) {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 bg-neutral-200 px-3 py-1 rounded-full">
            How we help
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-dark tracking-tight">
            Sound familiar?
          </h2>
          <p className="mt-3 text-neutral-500 max-w-xl mx-auto">
            Every student starts with the same questions. Here's how Globaly APP cuts through the confusion.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {country.problems.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-card border border-neutral-100 overflow-hidden">
              {/* Problem */}
              <div className="p-5 border-b border-neutral-100">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={14} className="text-red-400" />
                  </div>
                  <p className="text-sm font-medium text-neutral-700 leading-relaxed">
                    {p.problem}
                  </p>
                </div>
              </div>
              {/* Solution */}
              <div className="p-5 bg-green-50/40">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-brand-900" />
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    <span className="font-semibold text-brand-900">Globaly APP: </span>
                    {p.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
