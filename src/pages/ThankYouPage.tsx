import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { COUNTRIES, COUNTRY_MAP } from "../data/countries";

export default function ThankYouPage() {
  const [params] = useSearchParams();
  const countryId = params.get("country") ?? "";
  const country = COUNTRY_MAP[countryId];

  return (
    <main className="min-h-screen bg-hero-gradient flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Success icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>

        <h1 className="text-3xl font-bold text-dark mb-3">
          Your guide is on its way! 🎉
        </h1>
        <p className="text-neutral-500 mb-8 leading-relaxed">
          Check your inbox for your free
          {country ? ` ${country.name}` : ""} study guide.
          <br />While you wait, explore more below.
        </p>

        {/* Country cards */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {COUNTRIES.filter(c => c.id !== countryId).map((c) => (
            <Link
              key={c.id}
              to={`/${c.id}`}
              className="flex items-center gap-2 bg-white rounded-xl border border-neutral-200 shadow-card p-3 hover:shadow-float hover:-translate-y-0.5 transition-all text-left"
            >
              <span className="text-2xl">{c.flag}</span>
              <div>
                <p className="text-xs font-semibold text-dark">{c.name}</p>
                <p className="text-xs text-neutral-500 flex items-center gap-0.5">
                  Explore <ArrowRight size={10} />
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-dark text-white font-semibold px-6 py-3 rounded-xl hover:bg-neutral-800 transition-colors"
        >
          Back to Globaly
          <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
