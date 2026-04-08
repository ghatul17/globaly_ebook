/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        /* ── Globaly brand ── */
        brand: {
          50:  "#FDF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D", // Brand Red
          950: "#450A0A",
        },
        accent: {
          50:  "#FFFBEB",
          100: "#FEF3C7",
          400: "#FE952B", // Verified Amber
          500: "#FE952B",
          600: "#D97706",
        },
        navy:     "#1E293B", // Viridian/Navy
        dark:     "#1E293B",
        surface:  "#F1F5F9",
        platinum: "#F2F2F2",
        border:   "#E2E8F0",
        meta:     "#94A3B8",

        /* ── shadcn/ui CSS-var tokens ── */
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
      },
      borderRadius: {
        lg:   "var(--radius)",
        md:   "calc(var(--radius) - 2px)",
        sm:   "calc(var(--radius) - 4px)",
        "2xl": "12px",
        "3xl": "16px",
      },
      boxShadow: {
        float: "0 8px 32px rgba(127,29,29,0.10)",
        card:  "0 4px 16px rgba(0,0,0,0.07)",
        lg2:   "0 12px 48px rgba(127,29,29,0.12)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, #FDF2F2 0%, #F1F5F9 55%, #ffffff 100%)",
        "dark-gradient":
          "radial-gradient(ellipse 80% 60% at 50% 110%, #7F1D1D 0%, #1E293B 60%)",
      },
      animation: {
        float:        "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-rev":  "floatRev 7s ease-in-out infinite",
        "fade-up":    "fadeUp 0.6s ease both",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        floatRev: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(10px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
