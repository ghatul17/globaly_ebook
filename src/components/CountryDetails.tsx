import React, { useState } from "react";
import { CountryData } from "../data/countries";

interface Props {
  country: CountryData;
}

type Tab = "costs" | "visa" | "work" | "pr" | "scholarships";

const tabs: { id: Tab; label: string; emoji: string }[] = [
  { id: "costs",        label: "Costs",        emoji: "💰" },
  { id: "visa",         label: "Visa",         emoji: "🛂" },
  { id: "work",         label: "Work Rights",  emoji: "💼" },
  { id: "pr",           label: "PR Path",      emoji: "🏠" },
  { id: "scholarships", label: "Scholarships", emoji: "🎓" },
];

export default function CountryDetails({ country }: Props) {
  const [active, setActive] = useState<Tab>("costs");

  return (
    <section id="details" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 border border-neutral-200 px-3 py-1.5 rounded-full bg-white shadow-sm">
            By the numbers
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-dark tracking-tight">
            Everything you need to know about {country.name}
          </h2>
          <p className="mt-3 text-neutral-500">Costs, visa, work rights and PR — all in one place.</p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-[11px] uppercase tracking-widest font-bold transition-all duration-300 ${
                active === t.id
                  ? "bg-brand-900 text-white shadow-lg shadow-brand-900/10"
                  : "bg-white border border-neutral-100 text-neutral-400 hover:border-neutral-200 hover:text-neutral-600"
              }`}
            >
              <span>{t.emoji}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-100 min-h-[320px]">

          {/* COSTS */}
          {active === "costs" && (
            <div>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-2xl p-5 shadow-card border border-neutral-100">
                  <p className="text-xs text-neutral-500 mb-1">Annual Tuition</p>
                  <p className="text-2xl font-bold text-dark">{country.costs.tuitionRange}</p>
                  <p className="text-xs text-neutral-400 mt-1">{country.costs.currency} · {country.costs.note}</p>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-card border border-neutral-100">
                  <p className="text-xs text-neutral-500 mb-1">Annual Living Costs</p>
                  <p className="text-2xl font-bold text-dark">{country.costs.livingRange}</p>
                  <p className="text-xs text-neutral-400 mt-1">{country.costs.currency} · {country.costs.note}</p>
                </div>
              </div>
              <h4 className="text-sm font-semibold text-neutral-700 mb-3">Monthly breakdown</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {country.costs.breakdown.map((b) => (
                  <div key={b.item} className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-neutral-100">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{b.icon}</span>
                      <span className="text-sm text-neutral-700">{b.item}</span>
                    </div>
                    <span className="text-sm font-semibold text-dark">{b.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VISA */}
          {active === "visa" && (
            <div className="space-y-6">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-card border border-neutral-100 text-center">
                  <p className="text-2xl mb-1">🛂</p>
                  <p className="text-xs text-neutral-500 mb-1">Visa type</p>
                  <p className="text-sm font-semibold text-dark leading-tight">{country.visa.type}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-card border border-neutral-100 text-center">
                  <p className="text-2xl mb-1">⏱️</p>
                  <p className="text-xs text-neutral-500 mb-1">Processing time</p>
                  <p className="text-sm font-semibold text-dark">{country.visa.processingTime}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-card border border-neutral-100 text-center">
                  <p className="text-2xl mb-1">💳</p>
                  <p className="text-xs text-neutral-500 mb-1">Visa fee</p>
                  <p className="text-sm font-semibold text-dark">{country.visa.fee}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-neutral-700 mb-3">Step-by-step checklist</h4>
                <ol className="space-y-2">
                  {country.visa.keySteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-neutral-100">
                      <span className="w-6 h-6 rounded-full bg-dark text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-neutral-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-neutral-700 mb-3">💡 Pro tips</h4>
                <ul className="space-y-2">
                  {country.visa.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="text-amber-500 mt-0.5">→</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* WORK */}
          {active === "work" && (
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-card border border-neutral-100">
                  <p className="text-xs text-neutral-500 mb-1">During studies</p>
                  <p className="text-xl font-bold text-dark">{country.workRights.duringStudy}</p>
                  <p className="text-xs text-neutral-400 mt-1">per week</p>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-card border border-neutral-100">
                  <p className="text-xs text-neutral-500 mb-1">{country.workRights.afterStudyName}</p>
                  <p className="text-xl font-bold text-dark">{country.workRights.afterStudy}</p>
                  <p className="text-xs text-neutral-400 mt-1">after graduation</p>
                </div>
              </div>
              <ul className="space-y-2">
                {country.workRights.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white rounded-xl px-4 py-3 border border-neutral-100">
                    <span className="text-green-500 text-sm mt-0.5">✓</span>
                    <span className="text-sm text-neutral-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* PR */}
          {active === "pr" && (
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-5 shadow-card border border-neutral-100">
                <h4 className="text-sm font-semibold text-dark mb-1">{country.pr.headline}</h4>
                <p className="text-sm text-neutral-500">Typical timeline: <span className="font-semibold text-dark">{country.pr.timeline}</span></p>
              </div>
              <div className="space-y-2">
                {country.pr.pathways.map((pw, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-neutral-100">
                    <span className="text-lg">🛣️</span>
                    <span className="text-sm text-neutral-700">{pw}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SCHOLARSHIPS */}
          {active === "scholarships" && (
            <div className="grid sm:grid-cols-2 gap-4">
              {country.scholarships.map((s) => (
                <div key={s.name} className="bg-white rounded-2xl p-5 shadow-card border border-neutral-100">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-dark">{s.name}</h4>
                  </div>
                  <p className="text-lg font-bold mb-2" style={{ color: country.color }}>{s.amount}</p>
                  <p className="text-xs text-neutral-500 mb-1">Who: {s.who}</p>
                  <p className="text-xs text-neutral-400">Deadline: {s.deadline}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
