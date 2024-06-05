/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  purge: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx,json}",
    "./components/**/*.{js,jsx,ts,tsx}",
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
};
