/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx,json}",
    "./components/**/*.{js,jsx,ts,tsx,css}",
    "./public",
  ],
  safelist: [
    "relative",
    "rounded-xl",
    "bg-neutral-500",
    "w-full",
    "min-h-40",
    "flex",
    "flex-col",
    "p-4",
    "text-xl",
    "mb-2",
    "absolute",
    "bottom-2",
    "right-2",
    "z-0",
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
