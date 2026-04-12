import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        'xs': '475px',
      },
      colors: {
        obsidian: {
          DEFAULT: "#0A0A0A",
          light: "#1A1A1A",
          medium: "#121212",
        },
        marble: {
          DEFAULT: "#F5F5F5",
          dark: "#E0E0E0",
          light: "#FAFAFA",
        },
        gold: {
          DEFAULT: "#FFD700",
          dim: "#B8860B",
          bright: "#FFE44D",
        },
        // Accent colors for visual variety
        accent: {
          purple: "#A855F7",
          pink: "#EC4899",
          cyan: "#22D3EE",
          emerald: "#10B981",
          orange: "#F97316",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "marble-texture": "linear-gradient(135deg, rgba(245,245,245,0.03) 0%, transparent 50%)",
        "holographic": "linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0.05) 50%, rgba(255,215,0,0.1) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(255, 215, 0, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      width: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
      height: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
    },
  },
  plugins: [],
};

export default config;