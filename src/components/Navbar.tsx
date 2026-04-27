import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
 const [scrolled, setScrolled] = useState(false);
 const [open, setOpen] = useState(false);
 const location = useLocation();

 useEffect(() => {
  const handler = () => setScrolled(window.scrollY > 16);
  window.addEventListener("scroll", handler);
  return () => window.removeEventListener("scroll", handler);
 }, []);

 useEffect(() => setOpen(false), [location]);

 return (
  <header
   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
     ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
     : "bg-transparent"
   }`}
  >
   <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
    {/* Logo */}
    <Link to="/" className="flex items-center">
     <img src="/logo-primary.svg" alt="Globaly APP" className="h-8 w-auto" />
    </Link>

    {/* CTA  desktop */}
    <div className="hidden md:flex items-center gap-2">
     <Button asChild variant="ghost" size="sm" className="text-xs text-neutral-500 hover:text-navy font-medium">
      <Link to="/blog">Blog</Link>
     </Button>
     <Button asChild variant="ghost" size="sm" className="text-xs text-neutral-500 hover:text-navy font-medium">
      <a href="#guides">Free Guides</a>
     </Button>
     <Button asChild size="sm" className="rounded-full px-4 h-8 text-xs font-medium bg-brand-900 hover:bg-brand-800 text-white shadow-sm transition-all">
      <a href="#guides">
       <Download size={12} />
       Download Guide
      </a>
     </Button>
    </div>

    {/* Mobile hamburger */}
    <Button
     variant="ghost"
     size="icon"
     className="md:hidden"
     onClick={() => setOpen(!open)}
    >
     {open ? <X size={18} /> : <Menu size={18} />}
    </Button>
   </div>

   {/* Mobile menu */}
   {open && (
    <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-100 px-4 py-4 space-y-2">
     <Button asChild variant="ghost" className="w-full justify-start text-sm hover:bg-brand-50 hover:text-brand-900">
      <Link to="/blog">Blog</Link>
     </Button>
     <Button asChild variant="ghost" className="w-full justify-start text-sm hover:bg-brand-50 hover:text-brand-900">
      <a href="#guides">Free Guides</a>
     </Button>
     <Button asChild className="w-full text-sm rounded-full bg-brand-900 hover:bg-brand-800 text-white transition-all">
      <a href="#guides">
       <Download size={14} />
       Download Guide
      </a>
     </Button>
    </div>
   )}
  </header>
 );
}
