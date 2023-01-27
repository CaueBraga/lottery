/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        soft_white: "#EFEFEF",
        mega_sena: "#6BEFA3",
      },
    },
  },
  plugins: [],
};
