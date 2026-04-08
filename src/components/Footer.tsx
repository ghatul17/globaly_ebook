import { Link } from "react-router-dom";

const countries = [
  { id: "australia", name: "Australia", flag: "🇦🇺" },
  { id: "canada",    name: "Canada",    flag: "🇨🇦" },
  { id: "uk",        name: "UK",        flag: "🇬🇧" },
  { id: "usa",       name: "USA",       flag: "🇺🇸" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-neutral-500 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/logo-white.svg" alt="Globaly APP" className="h-8 w-auto opacity-90" />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Because Education Matters. Connecting students, verified agents, and top universities worldwide.
            </p>
          </div>

          {/* Country guides */}
          <div>
            <h4 className="text-neutral-300 text-xs font-semibold uppercase tracking-[0.15em] mb-5">Country Guides</h4>
            <ul className="space-y-3">
              {countries.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/${c.id}`}
                    className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                  >
                    <span>{c.flag}</span>
                    Study in {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-neutral-300 text-xs font-semibold uppercase tracking-[0.15em] mb-5">Resources</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-neutral-300 transition-colors">Free Guides</a></li>
              <li><a href="#" className="hover:text-neutral-300 transition-colors">Visa Checklists</a></li>
              <li><a href="#" className="hover:text-neutral-300 transition-colors">AI Eligibility Check</a></li>
              <li><a href="#" className="hover:text-neutral-300 transition-colors">Find Verified Agents</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Globaly APP Inc.
          </p>
          <div className="flex gap-6 text-xs text-neutral-600">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
