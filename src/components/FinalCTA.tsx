import { useState } from "react";
import { Download, ArrowRight } from "lucide-react";
import { CountryData } from "../data/countries";
import LeadCaptureModal from "./LeadCaptureModal";

interface Props {
 country: CountryData;
}

export default function FinalCTA({ country }: Props) {
 const [modalOpen, setModalOpen] = useState(false);

 return (
  <section className="py-24 bg-dark-gradient">
   <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
    {/* Country badge */}
    <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-sm px-4 py-1.5 rounded-full mb-6">
     <span className="text-xl">{country.flag}</span>
     <span>Free {country.name} Study Guide</span>
    </div>

    {/* Headline */}
    <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
     Your journey to {country.name}<br className="hidden sm:block" /> starts with one download.
    </h2>

    <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
     {country.ebook.pages} pages of real information. Visa steps, cost breakdowns,
     scholarship lists and PR pathways  all free, no fluff.
    </p>

    {/* CTA buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
     <button
      onClick={() => setModalOpen(true)}
      className="flex items-center gap-2 bg-white text-dark font-bold px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors shadow-lg text-base"
     >
      <Download size={20} />
      Download Free Guide
     </button>
     <a
      href="https://globaly.app"
      className="flex items-center gap-2 border border-white/20 text-white/80 font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-base"
     >
      Explore Globaly APP
      <ArrowRight size={18} />
     </a>
    </div>

    {/* Social proof line */}
    <div className="flex items-center justify-center gap-6 text-white/40 text-sm">
     <span>✓ Free forever</span>
     <span>✓ No credit card</span>
     <span>✓ 10,000+ downloads</span>
    </div>
   </div>

   <LeadCaptureModal
    isOpen={modalOpen}
    onClose={() => setModalOpen(false)}
    country={country.name}
    ebookTitle={country.ebook.title}
    onSuccess={() => {}}
   />
  </section>
 );
}
