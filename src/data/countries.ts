export interface City {
 name: string;
 costIndex: "Low" | "Medium" | "High" | "Very High";
 costPerMonth: string;
 vibe: string;
 emoji: string;
 topUnis: string[];
 highlight: string;
}

export interface Scholarship {
 name: string;
 amount: string;
 who: string;
 deadline: string;
}

export interface FAQ {
 q: string;
 a: string;
}

export interface Testimonial {
 name: string;
 from: string;
 program: string;
 university: string;
 text: string;
 initials: string;
 avatarColor: string;
}

export interface CountryData {
 id: string;
 name: string;
 flag: string;
 tagline: string;
 color: string;     // primary brand colour for this country
 gradient: string;    // hero gradient
 cardGradient: string;  // ebook card gradient
 heroHeadline: string;
 heroSub: string;
 heroBadge: string;

 stats: { label: string; value: string; icon: string }[];

 ebook: {
  title: string;
  subtitle: string;
  bullets: string[];
  pages: number;
 };

 whySection: {
  headline: string;
  reasons: { title: string; body: string; icon: string }[];
 };

 problems: { problem: string; solution: string }[];

 costs: {
  tuitionRange: string;
  livingRange: string;
  currency: string;
  note: string;
  breakdown: { item: string; cost: string; icon: string }[];
 };

 visa: {
  type: string;
  processingTime: string;
  fee: string;
  keySteps: string[];
  tips: string[];
 };

 workRights: {
  duringStudy: string;
  afterStudy: string;
  afterStudyName: string;
  bullets: string[];
 };

 pr: {
  headline: string;
  pathways: string[];
  timeline: string;
 };

 cities: City[];
 scholarships: Scholarship[];
 faqs: FAQ[];
 testimonials: Testimonial[];
}

/* ─────────────────────────────────────────
  AUSTRALIA
───────────────────────────────────────── */
const australia: CountryData = {
 id: "australia",
 name: "Australia",
 flag: "🇦🇺",
 tagline: "Sunny skies. World-class education. A clear path to PR.",
 color: "#7F1D1D",
 gradient: "from-brand-50 via-white to-white",
 cardGradient: "from-brand-900 to-brand-700",
 heroHeadline: "Your future starts Down Under.",
 heroSub:
  "Australia offers a laid-back lifestyle, top 50 global universities, and one of the clearest PR pathways in the world  all in one place.",
 heroBadge: "🌏 #1 Most Welcoming Study Destination",

 stats: [
  { label: "International students", value: "750K+", icon: "🎓" },
  { label: "Post-study work years", value: "Up to 6", icon: "💼" },
  { label: "Universities in top 200", value: "8", icon: "🏛️" },
  { label: "PR approvals (2023)", value: "160K+", icon: "🛂" },
 ],

 ebook: {
  title: "Australia Study Guide 2025",
  subtitle: "Everything you need to plan, apply, and arrive  free.",
  bullets: [
   "Step-by-step student visa (subclass 500) checklist",
   "Real cost breakdowns by city  Sydney vs Melbourne vs Brisbane",
   "Top courses with the highest post-grad employment rates",
   "Work rights explained simply: 48 hrs/fortnight rule",
   "Graduate visa (485) → PR pathway, explained in plain English",
   "6 scholarships you can actually win as an international student",
   "What to pack, what to expect, what no one tells you",
  ],
  pages: 42,
 },

 whySection: {
  headline: "Why students pick Australia  and don't look back.",
  reasons: [
   {
    title: "World-ranked universities",
    body: "8 Australian universities sit in the global top 200. ANU, Melbourne, Sydney, and UNSW open doors worldwide.",
    icon: "🏛️",
   },
   {
    title: "Clear PR pathway",
    body: "Skilled migration is genuinely achievable. Certain degrees earn points that fast-track your permanent residency application.",
    icon: "🛂",
   },
   {
    title: "Work while you study",
    body: "48 hours per fortnight during semesters, unlimited during breaks. Many students cover living costs entirely from part-time work.",
    icon: "💼",
   },
   {
    title: "Post-study freedom",
    body: "Graduate Temporary Visa (subclass 485) gives you 2-6 extra years in Australia to work, earn, and build your future.",
    icon: "✈️",
   },
  ],
 },

 problems: [
  {
   problem: "\"I don't know which city is affordable.\"",
   solution: "Globaly APP shows you live cost comparisons: Sydney vs Melbourne vs Brisbane, side by side.",
  },
  {
   problem: "\"Visa paperwork looks terrifying.\"",
   solution: "We break the student visa into 8 simple steps with a checklist you actually understand.",
  },
  {
   problem: "\"I'm not sure my degree leads to PR.\"",
   solution: "Our tool shows exactly which occupations earn PR points  before you enrol.",
  },
  {
   problem: "\"I don't know any Australian universities.\"",
   solution: "Compare 40+ universities by ranking, fees, post-grad employment, and scholarship availability.",
  },
 ],

 costs: {
  tuitionRange: "AUD 20,000 – 45,000",
  livingRange: "AUD 18,000 – 26,000",
  currency: "AUD",
  note: "per year, approximate",
  breakdown: [
   { item: "Rent (shared apartment)", cost: "AUD 700–1,400/mo", icon: "🏠" },
   { item: "Groceries", cost: "AUD 300–500/mo", icon: "🛒" },
   { item: "Transport", cost: "AUD 100–200/mo", icon: "🚌" },
   { item: "Eating out", cost: "AUD 200–400/mo", icon: "🍜" },
   { item: "Health cover (OSHC)", cost: "AUD 600–700/yr", icon: "💊" },
   { item: "Student activities", cost: "AUD 50–150/mo", icon: "🎭" },
  ],
 },

 visa: {
  type: "Student Visa  Subclass 500",
  processingTime: "4–6 weeks (apply early)",
  fee: "AUD 710",
  keySteps: [
   "Get your Confirmation of Enrolment (CoE) from your university",
   "Arrange Overseas Student Health Cover (OSHC)",
   "Gather financials  show AUD 21,041/yr in funds",
   "Complete ImmiAccount application online",
   "Biometrics + health exam (if required)",
   "Receive your visa grant  usually by email",
  ],
  tips: [
   "Apply as soon as you have your CoE  don't wait",
   "OSHC must be active from your arrival date",
   "Bank statements should cover at least 3 months",
   "Genuine Temporary Entrant (GTE) statement matters  be honest and specific",
  ],
 },

 workRights: {
  duringStudy: "48 hrs/fortnight",
  afterStudy: "Up to 6 years",
  afterStudyName: "Graduate Visa (Subclass 485)",
  bullets: [
   "Work in any industry  hospitality, retail, tech, healthcare",
   "Unlimited hours during official semester breaks",
   "Spouse/partner can also work full-time on dependent visa",
   "485 visa duration depends on your location (regional = more years)",
   "Many employers actively recruit 485 holders for sponsorship",
  ],
 },

 pr: {
  headline: "Australia's PR pathway is real  and achievable.",
  pathways: [
   "Skilled Independent Visa (189)  no employer needed",
   "Skilled Nominated Visa (190)  state nomination, extra points",
   "Skilled Work Regional Visa (491)  regional sponsorship + 5yr PR pathway",
   "Employer Nomination Scheme (186)  employer sponsors your PR",
   "Graduate Temporary Visa (485) → gain experience → Skilled Migration",
  ],
  timeline: "2–4 years post-graduation for most pathways",
 },

 cities: [
  {
   name: "Sydney",
   costIndex: "Very High",
   costPerMonth: "AUD 2,200–3,000",
   vibe: "Beaches, finance, tech startups",
   emoji: "🌊",
   topUnis: ["University of Sydney", "UNSW Sydney", "UTS"],
   highlight: "Iconic lifestyle, highest job density",
  },
  {
   name: "Melbourne",
   costIndex: "High",
   costPerMonth: "AUD 1,900–2,700",
   vibe: "Coffee, arts, multicultural heartbeat",
   emoji: "☕",
   topUnis: ["University of Melbourne", "Monash", "RMIT"],
   highlight: "Most liveable city 7 years running",
  },
  {
   name: "Brisbane",
   costIndex: "Medium",
   costPerMonth: "AUD 1,600–2,200",
   vibe: "Sunny, relaxed, booming economy",
   emoji: "🌞",
   topUnis: ["UQ", "QUT", "Griffith"],
   highlight: "2032 Olympics city  huge growth ahead",
  },
  {
   name: "Adelaide",
   costIndex: "Low",
   costPerMonth: "AUD 1,300–1,800",
   vibe: "Quiet, affordable, student-friendly",
   emoji: "🍷",
   topUnis: ["University of Adelaide", "UniSA", "Flinders"],
   highlight: "Best value city + state nomination advantage",
  },
  {
   name: "Perth",
   costIndex: "Medium",
   costPerMonth: "AUD 1,500–2,100",
   vibe: "Isolated, beaches, mining economy",
   emoji: "🏖️",
   topUnis: ["UWA", "Curtin", "ECU"],
   highlight: "Regional advantages for PR, beautiful beaches",
  },
 ],

 scholarships: [
  {
   name: "Australia Awards",
   amount: "Full tuition + living + airfare",
   who: "Students from 70+ developing countries",
   deadline: "April each year",
  },
  {
   name: "Destination Australia",
   amount: "AUD 15,000/year",
   who: "Students studying in regional Australia",
   deadline: "Varies by university",
  },
  {
   name: "University of Melbourne Graduate",
   amount: "AUD 10,000 – full fee",
   who: "Academic merit, varies by faculty",
   deadline: "Varies by intake",
  },
  {
   name: "Endeavour Leadership Program",
   amount: "AUD 272,500 (max)",
   who: "High-achieving postgrad students",
   deadline: "April 30 each year",
  },
 ],

 faqs: [
  {
   q: "Can I work while studying in Australia?",
   a: "Yes. You can work 48 hours per fortnight (about 2 days/week) while your course is running. During official breaks, you can work unlimited hours. Many students in hospitality or retail comfortably cover rent and groceries.",
  },
  {
   q: "How much money do I need to show for the visa?",
   a: "Australia requires you to show AUD 21,041 per year for living costs, plus tuition fees and travel. This is per student  your financial documents (bank statements, education loans) should clearly show this.",
  },
  {
   q: "What is the Subclass 485 Graduate Visa?",
   a: "After you finish your studies, this visa lets you stay in Australia to work. Duration ranges from 2 to 6 years depending on your qualification and study location. It's one of the most popular routes to gaining experience before applying for PR.",
  },
  {
   q: "Which Australian city is cheapest to live in?",
   a: "Adelaide is consistently the most affordable. Rent for a shared room runs AUD 600–900/month, and the city has a large student population with a relaxed pace. Brisbane is the next most affordable of the major cities.",
  },
  {
   q: "Is an Australian degree recognised worldwide?",
   a: "Yes. Australian universities follow the AQF (Australian Qualifications Framework), which is internationally recognised. Degrees from Group of Eight universities (like Melbourne, Sydney, ANU) carry particular weight globally.",
  },
 ],

 testimonials: [
  {
   name: "Priya S.",
   from: "India",
   program: "Master of IT",
   university: "University of Melbourne",
   text: "Globaly APP helped me compare Melbourne vs Sydney costs before I even applied. I saved so much time. The visa checklist was exactly what I needed  clear, simple, no fluff.",
   initials: "PS",
   avatarColor: "bg-brand-50 text-brand-900",
  },
  {
   name: "Marco A.",
   from: "Brazil",
   program: "Bachelor of Commerce",
   university: "UNSW Sydney",
   text: "I was confused about the 485 visa. Globaly APP's guide explained it better than any YouTube video. Now I'm on my 485 working at a Big 4 firm.",
   initials: "MA",
   avatarColor: "bg-brand-50 text-brand-900",
  },
  {
   name: "Aisha K.",
   from: "Nigeria",
   program: "Master of Nursing",
   university: "University of Adelaide",
   text: "Adelaide was not on my radar until Globaly APP showed me the cost comparison. I'm saving AUD 600/month versus Melbourne. The Australia Awards scholarship info in the guide helped me apply successfully.",
   initials: "AK",
   avatarColor: "bg-brand-50 text-brand-900",
  },
 ],
};

/* ─────────────────────────────────────────
  CANADA
───────────────────────────────────────── */
const canada: CountryData = {
 id: "canada",
 name: "Canada",
 flag: "🇨🇦",
 tagline: "Affordable. Inclusive. A real path to Canadian citizenship.",
 color: "#7F1D1D",
 gradient: "from-brand-50 via-white to-white",
 cardGradient: "from-brand-900 to-brand-700",
 heroHeadline: "Study in Canada. Stay for life.",
 heroSub:
  "Canada actively wants international graduates to become citizens. The pathways are clear, the universities are excellent, and life here genuinely welcomes you.",
 heroBadge: "🍁 Top 3 Most Welcoming Countries for Immigrants",

 stats: [
  { label: "International students", value: "900K+", icon: "🎓" },
  { label: "Work hours/week (study)", value: "Unlimited*", icon: "💼" },
  { label: "Universities in top 200", value: "5", icon: "🏛️" },
  { label: "PR granted (2023)", value: "465K+", icon: "🛂" },
 ],

 ebook: {
  title: "Canada Study Guide 2025",
  subtitle: "Visas, costs, cities, and PR  all in one plain-English guide.",
  bullets: [
   "Student Permit application  step by step, no jargon",
   "Real living costs: Toronto vs Vancouver vs Montreal vs smaller cities",
   "The Post-Graduation Work Permit (PGWP) explained simply",
   "Express Entry and PNP pathways  how they connect to your degree",
   "Part-time work rules and the co-op/internship advantage",
   "Quebec: why it's different and why that can work in your favour",
   "Top scholarships for international students in 2025",
  ],
  pages: 38,
 },

 whySection: {
  headline: "Why Canada is more than just a degree.",
  reasons: [
   {
    title: "Immigration-first mindset",
    body: "Canada's government explicitly wants graduates to stay. Programs like Express Entry and Provincial Nominee Programs are designed to turn students into citizens.",
    icon: "🍁",
   },
   {
    title: "Work while you study  unlimited",
    body: "As of 2024, international students with a valid study permit can work unlimited hours off-campus. This is a huge advantage compared to other countries.",
    icon: "💼",
   },
   {
    title: "Affordable tuition vs USA",
    body: "Tuition in Canada averages 40–60% less than comparable US programs, with many cities offering lower living costs than major US hubs.",
    icon: "💰",
   },
   {
    title: "Multicultural & safe",
    body: "Canada consistently ranks among the safest, most inclusive countries. Over 20% of Canadians are immigrants  you won't feel like an outsider.",
    icon: "🤝",
   },
  ],
 },

 problems: [
  {
   problem: "\"PGWP vs study permit  I'm confused.\"",
   solution: "Globaly APP explains both in plain English and maps which permit comes first, second, and how they connect to PR.",
  },
  {
   problem: "\"Toronto seems way too expensive for me.\"",
   solution: "We show you 6 Canadian cities with real rent and living cost data  many are surprisingly affordable.",
  },
  {
   problem: "\"I don't know if my degree qualifies for Express Entry.\"",
   solution: "Our tool matches your intended program to CRS points so you know your PR outlook before you enrol.",
  },
  {
   problem: "\"Co-op programs sound great but I don't know where to start.\"",
   solution: "We list universities with the strongest co-op networks by industry so you can choose strategically.",
  },
 ],

 costs: {
  tuitionRange: "CAD 18,000 – 35,000",
  livingRange: "CAD 12,000 – 20,000",
  currency: "CAD",
  note: "per year, approximate",
  breakdown: [
   { item: "Rent (shared)", cost: "CAD 700–1,500/mo", icon: "🏠" },
   { item: "Groceries", cost: "CAD 300–500/mo", icon: "🛒" },
   { item: "Transport (transit pass)", cost: "CAD 100–150/mo", icon: "🚌" },
   { item: "Phone plan", cost: "CAD 40–60/mo", icon: "📱" },
   { item: "Health insurance", cost: "CAD 600–900/yr", icon: "💊" },
   { item: "Entertainment", cost: "CAD 100–300/mo", icon: "🎭" },
  ],
 },

 visa: {
  type: "Study Permit",
  processingTime: "8–12 weeks (apply early; SDS program: ~20 days)",
  fee: "CAD 150",
  keySteps: [
   "Receive your Letter of Acceptance (LOA) from a DLI",
   "Apply online via IRCC or use the Student Direct Stream (SDS) if eligible",
   "Provide financials: CAD 10,000/yr living + first-year tuition",
   "Complete biometrics at a Visa Application Centre",
   "Medical exam if required",
   "Receive port-of-entry letter  your permit is issued at the border",
  ],
  tips: [
   "SDS applicants (India, China, Vietnam, Philippines, and others) get much faster processing",
   "Apply as soon as you receive your LOA  do not wait",
   "IELTS 6.0 overall (no band below 6.0) is the SDS language requirement",
   "Show a GIC (Guaranteed Investment Certificate) with CAD 10,000  it's the cleanest proof of funds",
  ],
 },

 workRights: {
  duringStudy: "Unlimited off-campus",
  afterStudy: "Up to 3 years",
  afterStudyName: "Post-Graduation Work Permit (PGWP)",
  bullets: [
   "No employer restrictions  work in any field, any province",
   "PGWP duration mirrors your program length (up to 3 years)",
   "PGWP experience counts towards Express Entry CRS points",
   "Spouse/partner gets an Open Work Permit while you study",
   "Co-op work is ON top of regular off-campus hours",
  ],
 },

 pr: {
  headline: "Canada turns students into citizens  on purpose.",
  pathways: [
   "Express Entry (CEC)  Canadian work experience → fast-track PR",
   "Provincial Nominee Program (PNP)  each province nominates skilled workers",
   "Atlantic Immigration Program  especially welcoming in Atlantic provinces",
   "Rural & Northern Immigration Pilot  regional communities sponsor PR",
   "Quebec Skilled Worker Program (QSWP)  parallel French-language stream",
  ],
  timeline: "2–3 years post-graduation for most PGWP + Express Entry pathways",
 },

 cities: [
  {
   name: "Toronto",
   costIndex: "Very High",
   costPerMonth: "CAD 2,000–3,200",
   vibe: "Finance, tech, multicultural hub",
   emoji: "🌆",
   topUnis: ["University of Toronto", "York University", "Toronto Metropolitan"],
   highlight: "Biggest job market in Canada",
  },
  {
   name: "Vancouver",
   costIndex: "Very High",
   costPerMonth: "CAD 2,000–3,000",
   vibe: "Tech, outdoors, Pacific Rim gateway",
   emoji: "🏔️",
   topUnis: ["UBC", "SFU", "BCIT"],
   highlight: "Closest city to Asia  huge tech scene",
  },
  {
   name: "Montreal",
   costIndex: "Medium",
   costPerMonth: "CAD 1,400–2,000",
   vibe: "French culture, arts, affordable",
   emoji: "🎭",
   topUnis: ["McGill", "Université de Montréal", "Concordia"],
   highlight: "Lowest rent of any major Canadian city",
  },
  {
   name: "Calgary",
   costIndex: "Medium",
   costPerMonth: "CAD 1,500–2,200",
   vibe: "Energy sector, mountains, no provincial tax",
   emoji: "⛰️",
   topUnis: ["University of Calgary", "SAIT", "Mount Royal"],
   highlight: "No provincial income tax  keeps more of your earnings",
  },
  {
   name: "Halifax",
   costIndex: "Low",
   costPerMonth: "CAD 1,100–1,700",
   vibe: "Ocean city, relaxed, Atlantic community",
   emoji: "⚓",
   topUnis: ["Dalhousie", "SMU", "NSCAD"],
   highlight: "Atlantic Immigration Program = easier PR route",
  },
 ],

 scholarships: [
  {
   name: "Vanier Canada Graduate Scholarships",
   amount: "CAD 50,000/year (3 years)",
   who: "PhD students  academic excellence + leadership",
   deadline: "November each year",
  },
  {
   name: "Banting Postdoctoral Fellowships",
   amount: "CAD 70,000/year (2 years)",
   who: "Postdoctoral researchers",
   deadline: "October each year",
  },
  {
   name: "University of Toronto International",
   amount: "CAD 10,000 – 60,000",
   who: "Merit-based, varies by program",
   deadline: "Varies",
  },
  {
   name: "McGill Entrance Scholarships",
   amount: "CAD 3,000 – 12,000",
   who: "High GPA undergraduate applicants",
   deadline: "With application",
  },
 ],

 faqs: [
  {
   q: "How many hours can I work in Canada as a student?",
   a: "Since November 2024, international students with a valid study permit from a DLI can work unlimited off-campus hours. Previously capped at 20 hours, the change was made permanent to help students with cost of living.",
  },
  {
   q: "What is the Post-Graduation Work Permit (PGWP)?",
   a: "The PGWP is a work permit that lets you stay and work in Canada after graduating. Its length matches your program duration  a 2-year master's earns you a 2-year PGWP, up to a maximum of 3 years. This is your key stepping stone to PR.",
  },
  {
   q: "Is living in Montreal cheaper than Toronto?",
   a: "Significantly. A shared apartment in Montreal runs CAD 700–1,100/month, compared to CAD 1,200–2,000 in Toronto. Add world-class universities like McGill and Concordia, and Montreal is one of the best-value study cities in the world.",
  },
  {
   q: "Can I study in English in Quebec?",
   a: "Yes. McGill and Concordia University in Montreal offer fully English programs. However, living in Quebec helps if you learn some French  it also opens the Quebec Skilled Worker Program as an additional PR pathway.",
  },
  {
   q: "What is the Student Direct Stream (SDS)?",
   a: "SDS is a faster study permit track (around 20 days) for students from India, China, the Philippines, Vietnam, Morocco, Senegal, Pakistan, and several other countries who meet specific requirements including a GIC and IELTS score.",
  },
 ],

 testimonials: [
  {
   name: "Rahul M.",
   from: "India",
   program: "Master of Data Science",
   university: "University of British Columbia",
   text: "The PGWP section in Globaly APP's Canada guide saved me hours of research. I now have my PGWP and just submitted my Express Entry profile. Very close to PR.",
   initials: "RM",
   avatarColor: "bg-brand-50 text-brand-900",
  },
  {
   name: "Linh N.",
   from: "Vietnam",
   program: "Bachelor of Business",
   university: "Concordia University",
   text: "I picked Montreal because of Globaly APP's cost comparison. I'm paying half what my classmates in Toronto pay. And the city is amazing. Best decision I made.",
   initials: "LN",
   avatarColor: "bg-brand-50 text-brand-900",
  },
  {
   name: "Carlos R.",
   from: "Mexico",
   program: "Master of Engineering",
   university: "University of Calgary",
   text: "No provincial income tax in Alberta made a real difference when I started working on my PGWP. Globaly APP's city comparison showed me this  I wouldn't have thought to check.",
   initials: "CR",
   avatarColor: "bg-brand-50 text-brand-900",
  },
 ],
};

/* ─────────────────────────────────────────
  UK
───────────────────────────────────────── */
const uk: CountryData = {
 id: "uk",
 name: "United Kingdom",
 flag: "🇬🇧",
 tagline: "Ancient universities. Modern careers. Two-year post-study freedom.",
 color: "#7F1D1D",
 gradient: "from-brand-50 via-white to-white",
 cardGradient: "from-brand-900 to-brand-700",
 heroHeadline: "Oxford, Manchester, Edinburgh. Now your story.",
 heroSub:
  "The UK packs centuries of academic excellence into a single postcode. Study for 1–3 years and leave with a degree the whole world recognises.",
 heroBadge: "🎓 Home to 4 of the World's Top 10 Universities",

 stats: [
  { label: "International students", value: "680K+", icon: "🎓" },
  { label: "Post-study work (Graduate Route)", value: "2 years", icon: "💼" },
  { label: "Universities in QS top 100", value: "17", icon: "🏛️" },
  { label: "Taught master's duration", value: "1 year", icon: "⚡" },
 ],

 ebook: {
  title: "UK Study Guide 2025",
  subtitle: "Visas, tuition, cities, and work rights  explained simply.",
  bullets: [
   "UK Student Visa  what changed post-Brexit and what it means for you",
   "Why a 1-year UK master's can cost less than a 2-year US equivalent",
   "Graduate Route (post-study work visa)  the full picture",
   "London vs Manchester vs Edinburgh vs smaller cities  real costs",
   "Tuition breakdown: Russell Group vs modern universities",
   "Chevening Scholarship application strategy (for 2025 cycle)",
   "Healthcare: how NHS access works as a student",
  ],
  pages: 36,
 },

 whySection: {
  headline: "The UK degree: worth every pound.",
  reasons: [
   {
    title: "1-year master's degrees",
    body: "UK taught master's typically take just 12 months. Compared to 2 years in most countries, you save a full year of tuition and living costs while getting an equivalent qualification.",
    icon: "⚡",
   },
   {
    title: "Global brand recognition",
    body: "A degree from Oxford, Cambridge, Imperial, UCL, LSE, or Edinburgh opens doors in every corner of the world. UK credentials are consistently the most recognised internationally.",
    icon: "🌍",
   },
   {
    title: "Graduate Route  2 free years",
    body: "After finishing your degree, the UK Graduate Route lets you stay and work for 2 years (3 years for PhD). No job offer needed. No employer sponsor. Total freedom.",
    icon: "🗺️",
   },
   {
    title: "NHS healthcare access",
    body: "Students pay the Immigration Health Surcharge (~£776/yr) but get full NHS access. This is far cheaper than private health insurance in most other countries.",
    icon: "💊",
   },
  ],
 },

 problems: [
  {
   problem: "\"UK tuition seems unaffordable.\"",
   solution: "A 1-year UK master's total cost is often less than a 2-year equivalent elsewhere. Globaly APP shows you the real comparison.",
  },
  {
   problem: "\"I don't understand the Graduate Route visa.\"",
   solution: "We explain exactly who qualifies, when to apply, and how it bridges to skilled worker status.",
  },
  {
   problem: "\"I want to be near London but can't afford it.\"",
   solution: "Our city guide shows you cities within 1 hour of London that cost 40% less  with strong university options.",
  },
  {
   problem: "\"I heard Brexit made it harder for EU students.\"",
   solution: "Brexit changed things for EU students (who now pay international fees). Our guide explains what changed and what didn't, clearly.",
  },
 ],

 costs: {
  tuitionRange: "GBP 12,000 – 38,000",
  livingRange: "GBP 12,000 – 20,000",
  currency: "GBP",
  note: "per year, approximate",
  breakdown: [
   { item: "Rent (shared room, outside London)", cost: "GBP 500–900/mo", icon: "🏠" },
   { item: "Rent (London)", cost: "GBP 900–1,600/mo", icon: "🏙️" },
   { item: "Groceries", cost: "GBP 200–350/mo", icon: "🛒" },
   { item: "Transport (student discount)", cost: "GBP 50–120/mo", icon: "🚌" },
   { item: "NHS surcharge (amortised)", cost: "GBP 65/mo", icon: "💊" },
   { item: "Eating out & social", cost: "GBP 100–250/mo", icon: "🍺" },
  ],
 },

 visa: {
  type: "UK Student Visa",
  processingTime: "3 weeks (apply up to 6 months before course)",
  fee: "GBP 490 + Immigration Health Surcharge",
  keySteps: [
   "Receive your Confirmation of Acceptance for Studies (CAS) from your university",
   "Prove English: IELTS, TOEFL, or equivalent",
   "Show funds: GBP 1,334/month for up to 9 months (London) or GBP 1,023/month (elsewhere)",
   "Complete online application at gov.uk/student-visa",
   "Book biometrics appointment at a UK Visa and Citizenship Centre",
   "Attend appointment and wait for decision (usually ~3 weeks)",
  ],
  tips: [
   "Apply as soon as you get your CAS  no earlier than 6 months before course start",
   "Funds must be held for 28 consecutive days before your application",
   "London-based students need to show more funds than those outside London",
   "Your CAS will specify English language requirement  check yours carefully",
  ],
 },

 workRights: {
  duringStudy: "20 hrs/week term-time",
  afterStudy: "2 years unrestricted",
  afterStudyName: "Graduate Route",
  bullets: [
   "Full-time work during official university vacations",
   "Graduate Route needs no job offer and no sponsor  total freedom",
   "Graduate Route holders can switch to Skilled Worker Visa if employer sponsors",
   "PhD graduates get 3 years on Graduate Route (not 2)",
   "Skilled Worker Visa → Indefinite Leave to Remain after 5 years",
  ],
 },

 pr: {
  headline: "UK residency is a real goal  it just takes a path.",
  pathways: [
   "Graduate Route (2 yr) → Skilled Worker Visa (employer sponsored)",
   "Skilled Worker Visa → Indefinite Leave to Remain (ILR) after 5 years",
   "Global Talent Visa  for exceptional talent in tech, arts, sciences",
   "Innovator Founder Visa  start a business, endorsed by approved body",
   "High Potential Individual (HPI) Visa  top 50 global university graduates",
  ],
  timeline: "5–7 years for ILR via Skilled Worker route",
 },

 cities: [
  {
   name: "London",
   costIndex: "Very High",
   costPerMonth: "GBP 1,800–2,800",
   vibe: "Finance, tech, global career hub",
   emoji: "🎡",
   topUnis: ["UCL", "Imperial", "LSE", "King's College"],
   highlight: "World's top city for international careers",
  },
  {
   name: "Manchester",
   costIndex: "Medium",
   costPerMonth: "GBP 900–1,400",
   vibe: "Music, tech, northern powerhouse",
   emoji: "🎵",
   topUnis: ["University of Manchester", "Manchester Metropolitan", "Salford"],
   highlight: "UK's fastest-growing tech hub outside London",
  },
  {
   name: "Edinburgh",
   costIndex: "Medium",
   costPerMonth: "GBP 900–1,400",
   vibe: "History, culture, Scottish charm",
   emoji: "🏰",
   topUnis: ["University of Edinburgh", "Heriot-Watt", "Napier"],
   highlight: "Stunning city, world-class research university",
  },
  {
   name: "Birmingham",
   costIndex: "Low",
   costPerMonth: "GBP 800–1,200",
   vibe: "Diverse, affordable, growing",
   emoji: "🏭",
   topUnis: ["University of Birmingham", "Aston", "BCU"],
   highlight: "UK's second city, 1.5 hrs from London by train",
  },
  {
   name: "Bristol",
   costIndex: "Medium",
   costPerMonth: "GBP 900–1,400",
   vibe: "Creative, aerospace, outdoors",
   emoji: "🎨",
   topUnis: ["University of Bristol", "UWE Bristol"],
   highlight: "Startup scene + Airbus HQ = great engineering hub",
  },
 ],

 scholarships: [
  {
   name: "Chevening Scholarship",
   amount: "Full tuition + living + flights",
   who: "Future leaders from 160+ countries (2+ yrs work experience)",
   deadline: "November each year",
  },
  {
   name: "Commonwealth Scholarships",
   amount: "Full tuition + living + airfare",
   who: "Students from Commonwealth developing countries",
   deadline: "October each year",
  },
  {
   name: "Rhodes Scholarship",
   amount: "Full tuition + living at Oxford",
   who: "Outstanding academic + leadership, various countries",
   deadline: "October/November",
  },
  {
   name: "GREAT Scholarships",
   amount: "GBP 10,000 minimum",
   who: "Students from specific countries (India, China, Brazil, others)",
   deadline: "Varies by university",
  },
 ],

 faqs: [
  {
   q: "Is a 1-year UK master's respected by employers?",
   a: "Absolutely. UK master's degrees are a single intensive year and are fully equivalent to 2-year programs elsewhere. Employers worldwide  especially in finance, tech, law, and consulting  recognise and value them highly.",
  },
  {
   q: "What is the UK Graduate Route visa?",
   a: "After finishing a UK degree, the Graduate Route lets you stay and work for 2 years (3 years for PhD). There's no job offer required and no employer sponsor needed. You can work in any field, at any level. It's essentially a free pass to build your UK career.",
  },
  {
   q: "Can I work while studying in the UK?",
   a: "Yes  20 hours per week during term-time, and full-time during official vacations. Students in London find part-time work plentiful in hospitality, retail, tutoring, and administrative roles.",
  },
  {
   q: "How expensive is London compared to other UK cities?",
   a: "London is roughly 60–80% more expensive for rent than cities like Manchester, Birmingham, or Edinburgh. A shared room in Manchester runs GBP 450–750/month vs GBP 900–1,500+ in London. Both cities have top universities.",
  },
  {
   q: "What is the Immigration Health Surcharge (IHS)?",
   a: "All student visa applicants pay an IHS, which gives you access to the NHS during your stay. The rate is currently GBP 776/year. While it sounds like an extra cost, it's far cheaper than private health insurance in countries like the USA.",
  },
 ],

 testimonials: [
  {
   name: "Yuna P.",
   from: "South Korea",
   program: "MSc Finance (1 year)",
   university: "London School of Economics",
   text: "Globaly made me realise a 1-year UK master's was actually cheaper than 2 years in the US or Australia. The scholarship guide led me to the GREAT scholarship. I got it.",
   initials: "YP",
   avatarColor: "bg-violet-100 text-violet-700",
  },
  {
   name: "Ahmed B.",
   from: "Egypt",
   program: "Master of Engineering",
   university: "University of Manchester",
   text: "I was fixated on London until Globaly showed me Manchester costs half as much and has incredible engineering employers on campus. Best city decision of my life.",
   initials: "AB",
   avatarColor: "bg-purple-100 text-purple-700",
  },
  {
   name: "Sofia L.",
   from: "Brazil",
   program: "LLM (Master of Laws)",
   university: "University of Edinburgh",
   text: "The UK Graduate Route explanation in the guide was the thing that convinced me. Two full years to build a legal career in the UK with no visa stress. Exactly what I needed.",
   initials: "SL",
   avatarColor: "bg-fuchsia-100 text-fuchsia-700",
  },
 ],
};

/* ─────────────────────────────────────────
  USA
───────────────────────────────────────── */
const usa: CountryData = {
 id: "usa",
 name: "United States",
 flag: "🇺🇸",
 tagline: "The world's best universities. Silicon Valley. The American dream, reloaded.",
 color: "#7F1D1D",
 gradient: "from-brand-50 via-white to-white",
 cardGradient: "from-brand-900 to-brand-700",
 heroHeadline: "MIT. Stanford. Harvard. Your name could follow.",
 heroSub:
  "The US has more top-ranked universities than anywhere on Earth, a culture of innovation, and OPT work authorization that puts you inside the best companies in the world.",
 heroBadge: "🚀 Home to 14 of the World's Top 20 Universities",

 stats: [
  { label: "International students", value: "1.05M+", icon: "🎓" },
  { label: "Universities in top 200", value: "60+", icon: "🏛️" },
  { label: "OPT work authorization", value: "1–3 years", icon: "💼" },
  { label: "Fortune 500 HQs", value: "500", icon: "🏢" },
 ],

 ebook: {
  title: "USA Study Guide 2025",
  subtitle: "F-1 visa, OPT, funding, and everything in between.",
  bullets: [
   "F-1 visa application process  what you actually need to prepare",
   "OPT vs STEM OPT  the 3-year work authorization explained",
   "Funding reality check: scholarships, teaching assistantships, and financial aid",
   "Real cost breakdowns: Boston vs Austin vs Midwest university towns",
   "CPT (Curricular Practical Training) for internships  how it works",
   "H-1B lottery reality  what you need to know before you enrol",
   "Community college → university transfer pathway (budget option)",
  ],
  pages: 44,
 },

 whySection: {
  headline: "Why the US still attracts more international students than anywhere else.",
  reasons: [
   {
    title: "Unmatched university prestige",
    body: "60+ US universities sit in the global top 200. MIT, Stanford, Harvard, Caltech  their alumni networks open every door in tech, finance, science, and policy.",
    icon: "🏆",
   },
   {
    title: "STEM OPT: 3 years in Silicon Valley",
    body: "STEM graduates get up to 3 years of OPT  Optional Practical Training  working legally at any US company. This is the single most valuable post-study benefit in the world for tech students.",
    icon: "💻",
   },
   {
    title: "Funding for grad students",
    body: "Many PhD and research master's programs pay you  via teaching assistantships, research assistantships, or full fellowships. Graduate school in the US can literally be free.",
    icon: "💰",
   },
   {
    title: "Culture of entrepreneurship",
    body: "Startup culture, hackathons, access to VCs, and alumni like Elon Musk, Sundar Pichai, and Satya Nadella  the US university ecosystem is unique in the world for building entrepreneurs.",
    icon: "🚀",
   },
  ],
 },

 problems: [
  {
   problem: "\"US tuition looks impossibly expensive.\"",
   solution: "We show you the full scholarship + assistantship picture. Many students pay less than you'd expect  or nothing for grad programs.",
  },
  {
   problem: "\"I'm scared about the H-1B lottery after graduation.\"",
   solution: "We explain the realistic OPT strategy and how STEM OPT gives you 3 years before you even need to think about H-1B.",
  },
  {
   problem: "\"I can't tell which university is worth the cost.\"",
   solution: "Globaly compares universities by ROI  employment rate, starting salary, and scholarship availability  not just ranking.",
  },
  {
   problem: "\"The F-1 visa interview feels intimidating.\"",
   solution: "Our guide gives you the exact questions consular officers ask and how to answer them simply and honestly.",
  },
 ],

 costs: {
  tuitionRange: "USD 20,000 – 60,000",
  livingRange: "USD 12,000 – 22,000",
  currency: "USD",
  note: "per year, varies widely by state and university",
  breakdown: [
   { item: "Rent (shared apartment)", cost: "USD 600–1,800/mo", icon: "🏠" },
   { item: "Groceries", cost: "USD 300–500/mo", icon: "🛒" },
   { item: "Health insurance (mandatory)", cost: "USD 1,500–3,000/yr", icon: "💊" },
   { item: "Transport (car in many cities)", cost: "USD 200–500/mo", icon: "🚗" },
   { item: "Books & supplies", cost: "USD 500–1,500/yr", icon: "📚" },
   { item: "Personal expenses", cost: "USD 200–500/mo", icon: "🎭" },
  ],
 },

 visa: {
  type: "F-1 Student Visa",
  processingTime: "2–8 weeks (allow time for interview scheduling)",
  fee: "USD 160 (MRV fee) + USD 350 SEVIS fee",
  keySteps: [
   "Receive your I-20 form from your US university (Designated School Official)",
   "Pay the SEVIS fee at fmjfee.com before your interview",
   "Complete DS-160 online application form",
   "Schedule visa interview at nearest US consulate/embassy",
   "Attend interview  bring I-20, DS-160, financials, and admission letter",
   "Receive visa (allow 3–5 days for passport return)",
  ],
  tips: [
   "Schedule your visa interview early  popular consulates book months in advance",
   "Be clear about your study plans and intent to return  consular officers look for this",
   "Show sufficient financial support covering at least year 1 tuition + living",
   "Bring original financial documents (bank statements, scholarship letters) to the interview",
  ],
 },

 workRights: {
  duringStudy: "20 hrs/week on-campus only",
  afterStudy: "1 year OPT (3 years for STEM)",
  afterStudyName: "OPT / STEM OPT",
  bullets: [
   "OPT (Optional Practical Training)  work in your field of study for 12 months",
   "STEM OPT extension adds 24 more months = 3 years total for science, tech, engineering, maths graduates",
   "CPT lets you do internships during your studies (must be integral to your program)",
   "On-campus work allowed during studies: 20 hrs/week, any on-campus employer",
   "OPT employer must be enrolled in E-Verify  this covers almost all major US companies",
  ],
 },

 pr: {
  headline: "US PR is harder  but the payoff is real.",
  pathways: [
   "H-1B Visa (employer sponsored, annual lottery) → Green Card",
   "EB-2 / EB-3 Employment-Based Green Card via PERM labour certification",
   "EB-1  Extraordinary Ability (no sponsor needed for exceptional talent)",
   "EB-2 NIW  National Interest Waiver (researchers, academics, entrepreneurs)",
   "O-1 Visa  extraordinary ability in tech/arts/business (no lottery)",
  ],
  timeline: "5–15+ years via H-1B route, varies significantly by nationality",
 },

 cities: [
  {
   name: "Boston",
   costIndex: "Very High",
   costPerMonth: "USD 2,000–3,500",
   vibe: "Academia, biotech, deep research culture",
   emoji: "🎓",
   topUnis: ["MIT", "Harvard", "Boston University", "Northeastern"],
   highlight: "Highest concentration of universities on Earth",
  },
  {
   name: "San Francisco / Bay Area",
   costIndex: "Very High",
   costPerMonth: "USD 2,500–4,500",
   vibe: "Tech, startups, VC culture",
   emoji: "🌉",
   topUnis: ["Stanford", "UC Berkeley", "UCSF"],
   highlight: "Global HQ for tech  Apple, Google, Meta all nearby",
  },
  {
   name: "Austin",
   costIndex: "Medium",
   costPerMonth: "USD 1,200–2,000",
   vibe: "Tech, music, no state income tax",
   emoji: "🤠",
   topUnis: ["UT Austin", "Texas A&M"],
   highlight: "Tesla, Apple, Google all opened major offices here",
  },
  {
   name: "Chicago",
   costIndex: "Medium",
   costPerMonth: "USD 1,300–2,200",
   vibe: "Finance, architecture, global trading",
   emoji: "🌬️",
   topUnis: ["University of Chicago", "Northwestern", "UIC"],
   highlight: "World-class finance and consulting recruiting hub",
  },
  {
   name: "Pittsburgh",
   costIndex: "Low",
   costPerMonth: "USD 900–1,500",
   vibe: "Tech, robotics, affordable Midwest",
   emoji: "🤖",
   topUnis: ["Carnegie Mellon", "University of Pittsburgh"],
   highlight: "CMU  world's top AI/robotics school, lowest cost of living",
  },
 ],

 scholarships: [
  {
   name: "Fulbright Foreign Student Program",
   amount: "Full funding  tuition + living + travel",
   who: "Exceptional students from 160+ countries",
   deadline: "Varies by country (typically Oct–Feb)",
  },
  {
   name: "AAUW International Fellowships",
   amount: "USD 18,000 – 30,000",
   who: "Women pursuing graduate study in the US",
   deadline: "November each year",
  },
  {
   name: "Graduate Teaching/Research Assistantships",
   amount: "Full tuition + USD 18,000–35,000 stipend",
   who: "Graduate students in research programs",
   deadline: "Varies  typically with PhD application",
  },
  {
   name: "Hubert H. Humphrey Fellowship",
   amount: "Full funding for 10-month program",
   who: "Mid-career professionals from developing nations",
   deadline: "Varies by home country",
  },
 ],

 faqs: [
  {
   q: "What is STEM OPT and why does it matter?",
   a: "OPT (Optional Practical Training) lets F-1 graduates work in the US for 12 months. If your degree is in Science, Technology, Engineering, or Maths (STEM), you can extend for another 24 months  giving you 3 full years to work at US companies, gain experience, and build your H-1B application.",
  },
  {
   q: "Are there really free PhD programs in the US?",
   a: "Yes  many STEM and social science PhD programs offer full funding via Teaching Assistantships (TA) or Research Assistantships (RA). You receive a tuition waiver plus a living stipend (typically USD 18,000–35,000/year). You're being paid to get your PhD.",
  },
  {
   q: "How hard is the F-1 visa interview?",
   a: "It's a short interview (5–10 minutes) focused on your study plans, funding, and ties to your home country. Be clear, specific, and honest. Officers want to know you're a genuine student. Your university acceptance letter, I-20, and financial documents do most of the talking.",
  },
  {
   q: "What is the H-1B lottery and should I be worried?",
   a: "H-1B is a work visa that many international graduates pursue after OPT. There's an annual lottery with ~65,000 spots and hundreds of thousands of applicants  so it's competitive. However, STEM OPT gives you 3 years to apply 3 times, many companies sponsor, and there are other paths (O-1, EB-2 NIW) for exceptional candidates.",
  },
  {
   q: "Is it cheaper to study outside New York and California?",
   a: "Dramatically. Top universities in states like Texas (UT Austin), Pennsylvania (CMU, Penn State), Illinois (Northwestern, U of Chicago), and Michigan (UMich) cost 30–60% less to live in than NYC or the Bay Area  with excellent career outcomes.",
  },
 ],

 testimonials: [
  {
   name: "Divya R.",
   from: "India",
   program: "MS Computer Science",
   university: "Carnegie Mellon University",
   text: "Pittsburgh was not glamorous  but CMU was. Globaly's cost breakdown showed me I could live on USD 1,200/month there vs USD 3,000 in SF. I'm now on STEM OPT at a top AI company.",
   initials: "DR",
   avatarColor: "bg-brand-50 text-brand-900",
  },
  {
   name: "Chen W.",
   from: "China",
   program: "PhD Economics",
   university: "University of Chicago",
   text: "The TA/RA funding section in the Globaly guide was eye-opening. I didn't know US PhDs could be funded. I applied, got in, and my full tuition + stipend is covered.",
   initials: "CW",
   avatarColor: "bg-brand-50 text-brand-900",
  },
  {
   name: "Fatima O.",
   from: "Nigeria",
   program: "MBA",
   university: "University of Texas at Austin",
   text: "The Fulbright application advice in Globaly's guide helped me structure my essays. I'm now a Fulbright Scholar at McCombs. This guide changed my life  I mean that seriously.",
   initials: "FO",
   avatarColor: "bg-brand-50 text-brand-900",
  },
 ],
};

/* ─────────────────────────────────────────
  EXPORTS
───────────────────────────────────────── */
export const countriesData: Record<string, CountryData> = {
 australia,
 canada,
 uk,
 usa,
};

export const countriesList = [
 { id: "australia", name: "Australia", flag: "🇦🇺", color: "#7F1D1D" },
 { id: "canada",  name: "Canada",  flag: "🇨🇦", color: "#7F1D1D" },
 { id: "uk",    name: "UK",    flag: "🇬🇧", color: "#7F1D1D" },
 { id: "usa",    name: "USA",    flag: "🇺🇸", color: "#7F1D1D" },
];

/* Aliases used by linter-updated components */
export const COUNTRY_MAP: Record<string, CountryData> = countriesData;
export const COUNTRIES = [australia, canada, uk, usa];
