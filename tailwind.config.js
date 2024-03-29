/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  purge: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        neutral: {
          500: "#1b2024",
        },
        primary: colors.purple["500"],
      },
    },
  },
  plugins: [
    "@tailwindcss/typography",
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
  ],
};
