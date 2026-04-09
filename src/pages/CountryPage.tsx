import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { COUNTRY_MAP } from "../data/countries";

import Hero           from "../components/Hero";
import TrustBadges    from "../components/TrustBadges";
import PersuasionSection from "../components/PersuasionSection";
import EbookSection   from "../components/EbookSection";
import ProblemSolution from "../components/ProblemSolution";
import CountryDetails from "../components/CountryDetails";
import CitiesSection  from "../components/CitiesSection";
import HowItWorks     from "../components/HowItWorks";
import Testimonials   from "../components/Testimonials";
import FAQ            from "../components/FAQ";
import FinalCTA       from "../components/FinalCTA";

export default function CountryPage() {
  const { countryId } = useParams<{ countryId: string }>();
  const country = COUNTRY_MAP[countryId ?? ""] || COUNTRY_MAP["australia"];

  if (!country) return <Navigate to="/" replace />; // fallback just in case

  return (
    <main>
      {/* 1 ── Hero: headline, floating cards, primary CTA */}
      <Hero country={country} />

      {/* 2 ── Trust: top-line stats */}
      <TrustBadges country={country} />

      {/* 3 ── Why: reasons to download the e-book */}
      <PersuasionSection country={country.name} />

      {/* 4 ── Ebook CTA: guide preview, bullets, download */}
      <EbookSection country={country} />

      {/* 5 ── Problem → Solution */}
      <ProblemSolution country={country} />

      {/* 6 ── Tabbed details: costs, visa, work, PR, scholarships */}
      <CountryDetails country={country} />

      {/* 7 ── Cities: map-style cards */}
      <CitiesSection country={country} />

      {/* 8 ── How Globaly works */}
      <HowItWorks />

      {/* 9 ── Testimonials */}
      <Testimonials country={country} />

      {/* 10 ── FAQ */}
      <FAQ country={country} />

      {/* 11 ── Final dark CTA */}
      <FinalCTA country={country} />
    </main>
  );
}
