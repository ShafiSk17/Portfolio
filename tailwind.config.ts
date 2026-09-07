import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark dev-hub token system (princesinghdev-inspired)
        bg: "#0f0f0f",
        surface: "#1a1a1a",
        "surface-raised": "#222222",
        "surface-overlay": "#2a2a2a",
        ink: "#f0f0f0",
        "ink-muted": "#9ca3af",
        "ink-subtle": "#6b7280",
        line: "#2d2d2d",
        "line-strong": "#3f3f3f",
        accent: "#f97316",
        "accent-dim": "rgba(249,115,22,0.12)",
        green: "#22c55e",
        amber: "#f59e0b",

        // Keep legacy tokens so nothing breaks during transition
        paper: "#0f0f0f",
        panel: "#1a1a1a",
        hairline: "#2d2d2d",
        "ink-subtle-old": "#6b7280",
      },
      fontFamily: {
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "Consolas", "monospace"],
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.4s ease forwards",
        "slide-in": "slide-in-left 0.3s ease forwards",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-8px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)",
        "card-hover": "0 4px 16px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
