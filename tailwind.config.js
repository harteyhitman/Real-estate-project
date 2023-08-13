/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#3B3386",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
