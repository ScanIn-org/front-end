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
        primary: "#11d4ff",
        secondary: "#c9bfff",
        bg: "#041428",
        surface: "rgba(7, 20, 35, 0.78)",
        muted: "#88a4be",
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, var(--tw-gradient-stops))",
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
