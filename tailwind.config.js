// @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Onest", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: "#43AA13",
        white: "#ffffff",
        black: "#202020",
        orange: "#E4602F",
        darkGreen: "#193E2C",
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [],
};
