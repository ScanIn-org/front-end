import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-highest": "#353535",
        "on-primary-fixed": "#002108",
        "primary-fixed-dim": "#34e36a",
        "surface-container-lowest": "#0e0e0e",
        outline: "#859583",
        "surface-container": "#202020",
        "secondary-fixed-dim": "#c8c6c5",
        "error-container": "#93000a",
        "inverse-surface": "#e5e2e1",
        "on-error": "#690005",
        "surface-tint": "#34e36a",
        "outline-variant": "#3c4a3c",
        "on-secondary-fixed-variant": "#474646",
        "on-primary-container": "#005721",
        "on-error-container": "#ffdad6",
        "primary-container": "#1ed760",
        surface: "#131313",
        tertiary: "#d9d7d6",
        secondary: "#c8c6c5",
        "on-primary": "#003913",
        "secondary-fixed": "#e5e2e1",
        "on-secondary-fixed": "#1c1b1b",
        "on-surface": "#e5e2e1",
        "inverse-primary": "#006e2c",
        "surface-container-low": "#1b1b1c",
        "surface-dim": "#131313",
        "tertiary-container": "#bdbbba",
        "on-secondary-container": "#bab8b7",
        "inverse-on-surface": "#303030",
        "on-tertiary-fixed-variant": "#474746",
        "tertiary-fixed": "#e5e2e1",
        "primary-fixed": "#69ff89",
        "on-tertiary-fixed": "#1c1b1b",
        "secondary-container": "#4a4949",
        "on-tertiary-container": "#4b4b4b",
        background: "#131313",
        "on-secondary": "#313030",
        "surface-variant": "#353535",
        "tertiary-fixed-dim": "#c8c6c5",
        primary: "#4cf479",
        "on-surface-variant": "#bbcbb8",
        error: "#ffb4ab",
        "on-primary-fixed-variant": "#00531f",
        "surface-container-high": "#2a2a2a",
        "on-tertiary": "#313030",
        "surface-bright": "#393939",
        "on-background": "#e5e2e1",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
      fontFamily: {
        "label-caps": ["Be Vietnam Pro"],
        caption: ["Be Vietnam Pro"],
        "body-md": ["Be Vietnam Pro"],
        "body-sm": ["Be Vietnam Pro"],
        "title-md": ["Be Vietnam Pro"],
        headline: ["Be Vietnam Pro"],
        display: ["Be Vietnam Pro"],
      },
      fontSize: {
        "label-caps": ["11px", { lineHeight: "16px", letterSpacing: "1.5px", fontWeight: "700" }],
        caption: ["10px", { lineHeight: "14px", letterSpacing: "0px", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "20px", letterSpacing: "0px", fontWeight: "400" }],
        "body-sm": ["12px", { lineHeight: "18px", letterSpacing: "0px", fontWeight: "400" }],
        "title-md": ["16px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "700" }],
        headline: ["20px", { lineHeight: "28px", letterSpacing: "-0.2px", fontWeight: "700" }],
        display: ["24px", { lineHeight: "32px", letterSpacing: "-0.5px", fontWeight: "700" }],
      },
      animation: {
        "float-up": "float-up linear infinite",
        "jelly-pulse": "jelly-pulse 6s ease-in-out infinite alternate",
        "jelly-drift": "jelly-drift 5s ease-in-out infinite alternate",
        bounce: "bounce 2s ease-in-out infinite",
        "fade-up": "fade-up 0.9s ease both",
        "scan-line": "scan-line 4s linear infinite",
      },
      keyframes: {
        "float-up": {
          "0%": {
            transform: "translateY(110vh) translateX(0) scale(1)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.6" },
          "100%": {
            transform: "translateY(-10vh) translateX(var(--drift, 20px)) scale(0.5)",
            opacity: "0",
          },
        },
        "jelly-pulse": {
          from: {
            transform: "scale(1) translateY(0)",
            opacity: "0.25",
          },
          to: {
            transform: "scale(1.15) translateY(-30px)",
            opacity: "0.45",
          },
        },
        "jelly-drift": {
          from: {
            transform: "translateY(0) rotate(-3deg)",
          },
          to: {
            transform: "translateY(-20px) rotate(3deg)",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(8px)",
          },
        },
        "fade-up": {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scan-line": {
          "0%": {
            top: "-10%",
          },
          "100%": {
            top: "110%",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
