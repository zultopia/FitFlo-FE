import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white0: "#fefefd",
        primary: "#0e03a0",
        secondary: "#4974ee",
        accent: "#95d7f3",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        "blob-slow": "blob-slow 20s ease-in-out infinite alternate",
        "blob-medium": "blob-medium 15s ease-in-out infinite alternate",
        "blob-fast": "blob-faast 10s ease-in-out infinite alternate",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "120% 50%, 120% 50%",
          },
          to: {
            backgroundPosition: "0% 50%, 0% 50%",
          },
        },
        "blob-slow": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, 30px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        "blob-medium": {
          "0%": { transform: "translate(0, 0) scale(0.9)" },
          "33%": { transform: "translate(-30px, -20px) scale(1.1)" },
          "66%": { transform: "translate(20px, -30px) scale(1)" },
          "100%": { transform: "translate(0, 0) scale(0.9)" },
        },
        "blob-fast": {
          "0%": { transform: "translate(0, 0) scale(1.1)" },
          "33%": { transform: "translate(20px, -20px) scale(0.8)" },
          "66%": { transform: "translate(-30px, -10px) scale(1.2)" },
          "100%": { transform: "translate(0, 0) scale(1.1)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
    function ({ addBase, theme }) {
      const colors = theme("colors");
      const colorVars = {};

      Object.entries(colors).forEach(([colorName, colorValue]) => {
        if (typeof colorValue === "object") {
          Object.entries(colorValue).forEach(([shade, value]) => {
            colorVars[`--${colorName}-${shade}`] = value;
          });
        } else {
          colorVars[`--${colorName}`] = colorValue;
        }
      });

      addBase({
        ":root": {
          ...colorVars,
          "--transparent": "transparent",
        },
      });
    },
  ],
};
