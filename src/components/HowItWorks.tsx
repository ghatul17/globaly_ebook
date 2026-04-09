const steps = [
 {
  number: "01",
  title: "Search",
  body: "Tell us your study goals and we'll instantly match you with programs, universities, and eligibility  powered by AI.",
  icon: "🔍",
 },
 {
  number: "02",
  title: "Connect",
  body: "Browse verified agents with real student reviews and trust scores. Send an enquiry in seconds.",
  icon: "💬",
 },
 {
  number: "03",
  title: "Enroll",
  body: "Your verified agent guides you through the full application. Track every step on your dashboard.",
  icon: "🎓",
 },
 {
  number: "04",
  title: "Settle",
  body: "Arrive with confidence. Housing, jobs, banking, and community  Globaly stays with you after enrollment.",
  icon: "🏡",
 },
];

export default function HowItWorks() {
 return (
  <section className="py-24 bg-white">
   <div className="max-w-5xl mx-auto px-4 sm:px-6">
    {/* Header */}
    <div className="text-center mb-16">
     <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-900 mb-4">
      How it works
     </p>
     <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-[-0.02em]">
      Search. Enroll. Settle.
     </h2>
     <p className="mt-3 text-neutral-400 text-sm">
      Your full journey in one platform.
     </p>
    </div>

    {/* Steps */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
     {steps.map((s) => (
      <div key={s.number} className="group text-center">
       {/* Number + Icon */}
       <div className="relative inline-flex items-center justify-center mb-5">
        <div className="w-16 h-16 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-2xl group-hover:scale-105 group-hover:border-neutral-200 transition-all duration-300">
         {s.icon}
        </div>
        <span className="absolute -top-1.5 -right-1.5 bg-neutral-900 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
         {s.number.slice(1)}
        </span>
       </div>
       <h3 className="font-semibold text-neutral-900 mb-2 text-[15px] tracking-[-0.01em]">{s.title}</h3>
       <p className="text-[13px] text-neutral-400 leading-relaxed">{s.body}</p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}
