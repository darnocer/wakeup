/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx,json}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontSize: {
        xxs: ".6rem",
      },
      colors: {
        neutral: {
          500: "#1b2024",
        },
        primary: colors.sky["500"],
      },
    },
  },
};
