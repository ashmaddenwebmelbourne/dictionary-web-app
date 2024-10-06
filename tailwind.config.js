/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Add this line to enable class-based dark mode
  theme: {
    extend: {},
    colors: {
      "grey-900": "#050505",
      "grey-800": "#1F1F1F",
      "grey-700": "#2D2D2D",
      "grey-600": "#3A3A3A",
      "grey-500": "#757575",
      "grey-400": "#E9E9E9",
      "grey-300": "#F4F4F4",
      white: "#FFFFFF",
      purple: "#A445ED",
      red: "#FF5252",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lora: ["Lora", "serif"],
      inconsolata: ["Inconsolata", "monospace"],
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
  },

  plugins: [],
};
