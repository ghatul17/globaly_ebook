import React from "react";
import { MapPin } from "lucide-react";
import { CountryData } from "../data/countries";

interface Props {
  country: CountryData;
}

const costColors = {
  "Low":       "bg-green-100 text-green-700",
  "Medium":    "bg-yellow-100 text-yellow-700",
  "High":      "bg-orange-100 text-orange-700",
  "Very High": "bg-red-100 text-red-700",
};

export default function CitiesSection({ country }: Props) {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 bg-neutral-200 px-3 py-1 rounded-full">
            Pick your city
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-dark tracking-tight">
            Where will you live?
          </h2>
          <p className="mt-3 text-neutral-500 max-w-xl mx-auto">
            Each city has its own vibe, cost and career scene. Here's the honest breakdown.
          </p>
        </div>

        {/* City grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {country.cities.map((city) => (
            <div
              key={city.name}
              className="bg-white rounded-2xl shadow-card border border-neutral-100 p-5 hover:shadow-float hover:-translate-y-1 transition-all duration-200"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{city.emoji}</span>
                  <h3 className="font-bold text-dark">{city.name}</h3>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${costColors[city.costIndex]}`}>
                  {city.costIndex}
                </span>
              </div>

              {/* Cost */}
              <div className="flex items-center gap-1.5 mb-3">
                <MapPin size={12} className="text-neutral-400" />
                <span className="text-sm font-semibold text-dark">{city.costPerMonth}</span>
                <span className="text-xs text-neutral-400">/ month est.</span>
              </div>

              {/* Vibe */}
              <p className="text-[11px] text-neutral-400 uppercase tracking-widest font-medium mb-3">{city.vibe}</p>

              {/* Highlight */}
              <div className="bg-neutral-50 rounded-xl px-3 py-2 text-xs text-neutral-600 mb-3">
                ⭐ {city.highlight}
              </div>

              {/* Top unis */}
              <div>
                <p className="text-xs text-neutral-400 mb-1.5">Top universities</p>
                <div className="flex flex-wrap gap-1">
                  {city.topUnis.map((u) => (
                    <span key={u} className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-md font-medium">
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map callout */}
        <div className="mt-8 bg-white rounded-2xl border border-neutral-200 p-5 flex items-center gap-4 shadow-card">
          <div className="text-3xl">🗺️</div>
          <div>
            <p className="font-semibold text-dark text-sm">Want an interactive map?</p>
            <p className="text-xs text-neutral-500">Download the free guide — it includes a full city comparison with cost calculators and PR score by region.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
