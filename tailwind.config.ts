import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#1F6B4A",
          accent: "#3E9D78",
        },
        sage: "#9DBBAA",
        sand: "#E7DCC7",
        dark: {
          bg: "#0F1714",
          surface: "#16211D",
        },
        light: {
          bg: "#F3EFE7",
          surface: "#FBF8F2",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        label: ["var(--font-space-grotesk)", "monospace"],
      },
      maxWidth: {
        container: "1400px",
      },
      boxShadow: {
        glow: "0 0 45px rgba(62,157,120,0.18)",
        "glow-lg": "0 0 70px rgba(62,157,120,0.24)",
        soft: "0 18px 50px -20px rgba(31,90,63,0.30)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(62,157,120,0.25)" },
          "50%": { boxShadow: "0 0 40px rgba(62,157,120,0.45)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.9" },
          "50%": { transform: "translate3d(0,-5%,0) scale(1.1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-130%)" },
          "100%": { transform: "translateX(130%)" },
        },
        "spin-rev": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "spin-slow": "spin-slow 30s linear infinite",
        "spin-rev": "spin-rev 45s linear infinite",
        "glow-pulse": "glow-pulse 2.6s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        aurora: "aurora 14s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
