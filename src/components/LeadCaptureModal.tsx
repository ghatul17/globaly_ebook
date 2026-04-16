import React, { useState, useRef, useEffect } from "react";
import { Download, CheckCircle, ChevronDown, Search } from "lucide-react";
import {
 Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
 Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

interface Props {
 isOpen: boolean;
 onClose: () => void;
 country: string;
 ebookTitle: string;
}

const WEBHOOK_URL = "https://n8n.globalyhub.com/webhook/42485f26-cab1-47ce-83f9-630e95d9f225";

const QUALIFICATION_OPTIONS = [
 "High School / Secondary",
 "Diploma / Certificate",
 "Bachelor's Degree",
 "Master's Degree",
 "PhD / Doctorate",
 "Currently Studying",
 "Other",
];

const COUNTRIES = [
 "India","Nepal","Bangladesh","Pakistan","Sri Lanka",
 "China","Vietnam","Philippines","Indonesia","Nigeria","Brazil","Other",
];

const COUNTRY_CODES = [
 { code: "+977", flag: "\u{1F1F3}\u{1F1F5}", name: "Nepal" },
 { code: "+91",  flag: "\u{1F1EE}\u{1F1F3}", name: "India" },
 { code: "+880", flag: "\u{1F1E7}\u{1F1E9}", name: "Bangladesh" },
 { code: "+92",  flag: "\u{1F1F5}\u{1F1F0}", name: "Pakistan" },
 { code: "+94",  flag: "\u{1F1F1}\u{1F1F0}", name: "Sri Lanka" },
 { code: "+86",  flag: "\u{1F1E8}\u{1F1F3}", name: "China" },
 { code: "+84",  flag: "\u{1F1FB}\u{1F1F3}", name: "Vietnam" },
 { code: "+63",  flag: "\u{1F1F5}\u{1F1ED}", name: "Philippines" },
 { code: "+62",  flag: "\u{1F1EE}\u{1F1E9}", name: "Indonesia" },
 { code: "+234", flag: "\u{1F1F3}\u{1F1EC}", name: "Nigeria" },
 { code: "+55",  flag: "\u{1F1E7}\u{1F1F7}", name: "Brazil" },
 { code: "+1",   flag: "\u{1F1FA}\u{1F1F8}", name: "United States" },
 { code: "+44",  flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom" },
 { code: "+61",  flag: "\u{1F1E6}\u{1F1FA}", name: "Australia" },
 { code: "+64",  flag: "\u{1F1F3}\u{1F1FF}", name: "New Zealand" },
 { code: "+81",  flag: "\u{1F1EF}\u{1F1F5}", name: "Japan" },
 { code: "+82",  flag: "\u{1F1F0}\u{1F1F7}", name: "South Korea" },
 { code: "+49",  flag: "\u{1F1E9}\u{1F1EA}", name: "Germany" },
 { code: "+33",  flag: "\u{1F1EB}\u{1F1F7}", name: "France" },
 { code: "+971", flag: "\u{1F1E6}\u{1F1EA}", name: "UAE" },
 { code: "+966", flag: "\u{1F1F8}\u{1F1E6}", name: "Saudi Arabia" },
 { code: "+60",  flag: "\u{1F1F2}\u{1F1FE}", name: "Malaysia" },
 { code: "+65",  flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore" },
 { code: "+254", flag: "\u{1F1F0}\u{1F1EA}", name: "Kenya" },
 { code: "+27",  flag: "\u{1F1FF}\u{1F1E6}", name: "South Africa" },
];

function PhoneCodePicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
 const [open, setOpen] = useState(false);
 const [search, setSearch] = useState("");
 const ref = useRef<HTMLDivElement>(null);
 const searchRef = useRef<HTMLInputElement>(null);

 const selected = COUNTRY_CODES.find(c => c.code === value);
 const filtered = COUNTRY_CODES.filter(c =>
  c.name.toLowerCase().includes(search.toLowerCase()) || c.code.includes(search)
 );

 useEffect(() => {
  const handler = (e: MouseEvent) => {
   if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
  };
  document.addEventListener("mousedown", handler);
  return () => document.removeEventListener("mousedown", handler);
 }, []);

 useEffect(() => {
  if (open && searchRef.current) searchRef.current.focus();
 }, [open]);

 return (
  <div className="relative" ref={ref}>
   <button
    type="button"
    onClick={() => { setOpen(!open); setSearch(""); }}
    className="flex h-10 items-center gap-1.5 rounded-lg border border-border bg-white px-3 text-sm text-dark hover:border-neutral-300 transition-colors shrink-0"
   >
    <span className="text-base leading-none">{selected?.flag}</span>
    <span>{selected?.code}</span>
    <ChevronDown size={12} className="text-meta ml-0.5" />
   </button>
   {open && (
    <div className="absolute top-full left-0 mt-1 z-50 w-64 rounded-xl border border-border bg-white shadow-lg overflow-hidden">
     <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
      <Search size={14} className="text-meta shrink-0" />
      <input
       ref={searchRef}
       type="text"
       placeholder="Search country..."
       value={search}
       onChange={e => setSearch(e.target.value)}
       className="w-full text-sm outline-none bg-transparent placeholder:text-neutral-400"
      />
     </div>
     <div className="max-h-48 overflow-y-auto p-1">
      {filtered.length === 0 && (
       <p className="text-xs text-meta px-3 py-2">No results</p>
      )}
      {filtered.map(c => (
       <button
        key={c.code}
        type="button"
        onClick={() => { onChange(c.code); setOpen(false); }}
        className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-md text-sm text-left transition-colors ${
         c.code === value ? "bg-brand-50 text-brand-700" : "hover:bg-neutral-50 text-dark"
        }`}
       >
        <span className="text-base leading-none">{c.flag}</span>
        <span className="flex-1">{c.name}</span>
        <span className="text-meta text-xs">{c.code}</span>
       </button>
      ))}
     </div>
    </div>
   )}
  </div>
 );
}

export default function LeadCaptureModal({ isOpen, onClose, country, ebookTitle }: Props) {
 const [step, setStep] = useState<"form" | "success">("form");
 const [form, setForm] = useState({
  name: "", email: "", phoneCode: "+977", phone: "", currentCountry: "", educationQualification: "",
 });
 const [errors, setErrors] = useState<Record<string, string>>({});
 const [loading, setLoading] = useState(false);

 useEffect(() => {
  if (isOpen) {
   setStep("form");
   setErrors({});
  }
 }, [isOpen]);

 const set = (key: keyof typeof form) => (val: string) =>
  setForm(prev => ({ ...prev, [key]: val }));

 const validate = () => {
  const e: Record<string, string> = {};
  if (!form.name.trim()) e.name = "Name is required";
  if (!form.email.trim()) e.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
  if (form.phone && !/^[\d\s\-()]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone number";
  return e;
 };

 const handleSubmit = async (ev: React.FormEvent) => {
  ev.preventDefault();
  const e = validate();
  if (Object.keys(e).length) { setErrors(e); return; }
  setLoading(true);
  try {
   await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
     name: form.name,
     email: form.email,
     phone: form.phone ? `${form.phoneCode} ${form.phone}` : null,
     currentCountry: form.currentCountry || null,
     educationQualification: form.educationQualification || null,
     guideCountry: country,
     guideTitle: ebookTitle,
     submittedAt: new Date().toISOString(),
     source: "globaly-io-lead-form",
    }),
   });
  } catch { /* proceed anyway */ }
  setLoading(false);
  setStep("success");
 };

 const handleOpenChange = (open: boolean) => { if (!open) onClose(); };

 return (
  <Dialog open={isOpen} onOpenChange={handleOpenChange}>
   <DialogContent className="max-w-md">
    {step === "form" ? (
     <>
      <DialogHeader>
       <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center mb-3">
        <Download className="text-brand-900" size={20} />
       </div>
       <DialogTitle>{ebookTitle}</DialogTitle>
       <DialogDescription>42 pages of real information — free, no fluff, in your inbox in 30 seconds.</DialogDescription>
      </DialogHeader>

      {/* What's inside */}
      <div className="bg-surface rounded-xl p-4 mb-5 border border-border">
       <p className="text-xs font-semibold text-meta uppercase tracking-wide mb-3">What you get</p>
       <div className="space-y-2">
        {/* What's inside bullets */}
        {[
         "Visa (subclass 500) checklist — avoid rejection",
         "City-by-city real cost comparison",
         "Courses with actual job demand in 2026",
         "Graduate visa → PR pathway explained",
         "6 scholarships most students miss",
        ].map((item) => (
         <div key={item} className="flex items-center gap-2 text-sm text-navy">
          <div className="h-4 w-4 bg-accent-400 rounded-full flex items-center justify-center text-[10px] text-white font-bold">✓</div>
          {item}
         </div>
        ))}
       </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
       <div className="space-y-1">
        <Label htmlFor="name">Full name *</Label>
        <Input
         id="name"
         placeholder="Your full name"
         value={form.name}
         onChange={e => set("name")(e.target.value)}
         className={errors.name ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}
        />
        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
       </div>

       <div className="space-y-1">
        <Label htmlFor="email">Email address *</Label>
        <Input
         id="email"
         type="email"
         placeholder="you@example.com"
         value={form.email}
         onChange={e => set("email")(e.target.value)}
         className={errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
       </div>

       <div className="space-y-1">
        <Label htmlFor="phone">Phone number</Label>
        <div className="flex gap-2">
         <PhoneCodePicker value={form.phoneCode} onChange={set("phoneCode")} />
         <Input
          id="phone"
          type="tel"
          placeholder="234 567 8900 (optional)"
          value={form.phone}
          onChange={e => set("phone")(e.target.value)}
          className={errors.phone ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}
         />
        </div>
        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
       </div>

       <div className="space-y-1">
        <Label>Highest education qualification</Label>
        <Select value={form.educationQualification} onValueChange={set("educationQualification")}>
         <SelectTrigger>
          <SelectValue placeholder="Select qualification" />
         </SelectTrigger>
         <SelectContent>
          {QUALIFICATION_OPTIONS.map(q => (
           <SelectItem key={q} value={q}>{q}</SelectItem>
          ))}
         </SelectContent>
        </Select>
       </div>

       <div className="space-y-1">
        <Label>Where are you from?</Label>
        <Select value={form.currentCountry} onValueChange={set("currentCountry")}>
         <SelectTrigger>
          <SelectValue placeholder="Select country (optional)" />
         </SelectTrigger>
         <SelectContent>
          {COUNTRIES.map(c => (
           <SelectItem key={c} value={c}>{c}</SelectItem>
          ))}
         </SelectContent>
        </Select>
       </div>

       <Button type="submit" className="w-full mt-2 bg-brand-900 hover:bg-brand-800 text-white font-semibold h-12 shadow-md transition-all" size="lg" disabled={loading}>
        {loading ? (
         <>
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Sending your guide…
         </>
        ) : (
         <>
          <Download size={16} />
          Get My Free {country} Guide
         </>
        )}
       </Button>

       <p className="text-xs text-center text-meta">
        Join 10,000+ students who planned smarter. Unsubscribe anytime.
       </p>
      </form>
     </>
    ) : (
     <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
       <CheckCircle className="text-green-500" size={32} />
      </div>
      <h2 className="text-xl font-bold text-dark mb-2">You'll receive the eBook in your email!</h2>
      <p className="text-sm text-meta mb-6">
       We've sent the free {country} study guide to your inbox.
       <br />
       Please check your email (and spam folder) shortly.
      </p>
     </div>
    )}
   </DialogContent>
  </Dialog>
 );
}
