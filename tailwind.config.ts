import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#FBF7EF",
          100: "#F6F0E3",
          200: "#EDE3CE",
          300: "#DFD1B0"
        },
        ink: {
          400: "#4B5563",
          500: "#2A2F36",
          600: "#1B2029",
          700: "#141821",
          800: "#0E121A",
          900: "#080B12"
        },
        teal: {
          50: "#EAF7F7",
          100: "#CDEBEB",
          200: "#A4DBDB",
          300: "#6AC4C4",
          400: "#3FAFAF",
          500: "#209B9B",
          600: "#177E7E",
          700: "#116060",
          800: "#0C4444",
          900: "#082D2D"
        },
        brass: {
          400: "#C9A46B",
          500: "#B08B4F"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"]
      },
      backdropBlur: {
        xs: "6px",
        "3xl": "48px"
      },
      boxShadow: {
        soft: "0 1px 3px rgba(20,25,35,0.06), 0 12px 40px -12px rgba(20,25,35,0.14)",
        lift: "0 20px 60px -20px rgba(20,25,35,0.22)",
        glow: "0 0 60px -10px rgba(32,155,155,0.35)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.05)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        marquee: "marquee 40s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
