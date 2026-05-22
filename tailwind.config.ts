import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          light: "#122848",
          dark: "#071528",
        },
        gold: {
          DEFAULT: "#C8A951",
          light: "#D4BC76",
          dark: "#A88B38",
        },
        cream: "#F7F5F0",
        "dark-text": "#1A1A2E",
        "mid-gray": "#6B7280",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(ellipse at 20% 50%, rgba(200,169,81,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(11,31,58,0.5) 0%, transparent 50%)",
        "gold-gradient": "linear-gradient(135deg, #C8A951 0%, #D4BC76 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
