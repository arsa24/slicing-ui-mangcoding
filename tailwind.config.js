/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{css, js}"],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": ['"Plus Jakarta Sans"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        "halvetica-neue": ['"Halvetica neue"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
