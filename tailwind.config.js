/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7AA65A",
      },
      dropShadow: {
        custom1: "0 5px 1px rgba(0, 0, 0, 0.20)",
        custom2: "3px 5px 2px rgba(0,0,0,0.20)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
