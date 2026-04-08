import React, { useState } from "react";
import { Download, CheckCircle } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  country: string;
  ebookTitle: string;
  onSuccess: () => void;
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

export default function LeadCaptureModal({ isOpen, onClose, country, ebookTitle, onSuccess }: Props) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", currentCountry: "", educationQualification: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const set = (key: keyof typeof form) => (val: string) =>
    setForm(prev => ({ ...prev, [key]: val }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (form.phone && !/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone number";
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
          phone: form.phone || null,
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
    setTimeout(() => { onSuccess(); onClose(); }, 2500);
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
              <DialogDescription>Free guide. Straight to your inbox. No spam, ever.</DialogDescription>
            </DialogHeader>

            {/* What's inside */}
            <div className="bg-surface rounded-xl p-4 mb-5 border border-border">
              <p className="text-xs font-semibold text-meta uppercase tracking-wide mb-3">What you get</p>
              <div className="space-y-2">
                {/* What's inside bullets */}
                {[
                  "Visa step-by-step checklist",
                  "Real cost breakdown by city",
                  "PR pathway guide",
                  "Top scholarships for 2025",
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
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 234 567 8900 (optional)"
                  value={form.phone}
                  onChange={e => set("phone")(e.target.value)}
                  className={errors.phone ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}
                />
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
                By downloading, you agree to receive occasional study abroad tips from Globaly APP. Unsubscribe anytime.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-green-500" size={32} />
            </div>
            <h2 className="text-xl font-bold text-dark mb-2">Guide on its way!</h2>
            <p className="text-sm text-meta">
              Check your inbox for your free {country} study guide.
              <br />
              While you wait — explore the full breakdown below.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
