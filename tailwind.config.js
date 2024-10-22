/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        futGreenBackground: "#61a562",
        futBlack: "#000000",
      },
      fontFamily: {
        'SportsWorld': ['"SportsWorld", sans-serif'],
      }
    },
  },
  plugins: [],
}

