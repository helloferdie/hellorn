/** @type {import('tailwindcss').Config} */

const palette = require("./styles/palette.ts");

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: palette,
    },
  },
  plugins: [],
};
