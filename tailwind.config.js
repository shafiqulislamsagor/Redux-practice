/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        warning:"#EF4444",
        success:"#22C55E",
        primary: {
          DEFAULT: "#00AEF0",
          foreground: "hsl(var(--primary-foreground))",
          50: "#EFFAFF",
          100: "#DEF3FF",
          200: "#B6EAFF",
          300: "#75DBFF",
          400: "#2CC9FF",
          500: "#00AEF0",
          600: "#0090D4",
          700: "#0072AB",
          800: "#00608D",
          900: "#065074",
        },
        secondary: {
          DEFAULT: "#FFD60A",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#FDFEE8",
          100: "#FBFFC2",
          200: "#FFF687",
          300: "#FFE943",
          400: "#FFD60A",
          500: "#EFBE03",
          600: "#CE9300",
          700: "#A46804",
          800: "#88510B",
          900: "#88510B",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors:{
      gray:{
        50:"#f9fafb",
        100:"#f3f4f6",
        200:"#e5e7eb",
        300:"#d1d5db",
        400:"#9ca3af",
        500:"#6b7280",
        600:"#4b5563",
        700:"#374151",
        800:"#1f2937",
        900:"#111827",
      },
      slate:{
        50:"#f8fafc",
        100:"#f1f5f9",
        200:"#e2e8f0",
        300:"#cbd5e1",
        400:"#94a3b8",
        500:"#64748b",
        600:"#475569",
        700:"#334155",
        800:"#1e293b",
        900:"#0f172a",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
