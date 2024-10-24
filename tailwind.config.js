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
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: "#ff0000",
        black: "#000000",
        white: "#ffffff",
        slate: "#313D48",
        danger: "#EA3E3E",
        gray: "#748092",
        pink: "#F4B6B5",
        default: "#DFE5EF",
        "red-hover": "#D0BEF2",
        "black-hover": "#4146ad",
        "red-light": "#fffbd7",
      },
    },
  },
  plugins: [],
};
