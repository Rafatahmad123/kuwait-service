import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        kuwait: {
          green: "#2E7D32",
          red: "#D32F2F",
          black: "#1F1F1F",
          white: "#FFFFFF",
          sand: "#F5F1EA",
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 25px 50px -12px rgba(46, 125, 50, 0.35)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(135deg, rgba(46,125,50,0.12) 0%, rgba(211,47,47,0.08) 100%)",
      },
      keyframes: {
        "float-card": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "float-card": "float-card 9s ease-in-out infinite",
      },
    },
  },
  safelist: [
    {
      pattern: /^(rtl|ltr)$/,
      variants: ["sm", "md", "lg", "xl"],
    },
  ],
  plugins: [typography],
};

export default config;
