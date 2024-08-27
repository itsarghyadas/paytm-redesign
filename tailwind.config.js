/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      clash: ["Clash Display", "system-ui", "sans-serif"],
      cabinet: ["Cabinet Grotesk", "system-ui", "sans-serif"],
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
