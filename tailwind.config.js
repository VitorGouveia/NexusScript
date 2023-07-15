/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{tsx,js,jsx,ts}",
    "./components/**/*.{tsx,js,jsx,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FF336E",
          base: "#F50047",
          dark: "#B20034",
          darkest: "#66001D",
        },
        accent: {
          light: "#FF8A33",
          base: "#F56800",
          dark: "#B24C00",
          darkest: "#662B00",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
