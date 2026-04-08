import React from "react";
import { CountryData } from "../data/countries";

export default function StatsBar({ data }: { data: CountryData }) {
  return (
    <section className="py-8 border-y border-neutral-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <p className="text-xl font-extrabold text-dark tracking-tight">{s.value}</p>
                <p className="text-xs text-neutral-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
