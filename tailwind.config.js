/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pastel-green": "#77dd77",
        "tomato-red": "#ff6347",
        darkBlue: {
          DEFAULT: '#161441'
        },
        yellow: {
          DEFAULT: '#f6901e'
        },
        gray: {
          light: "#46479E",
          DEFAULT: "#60739F",
          dark: "#222939",
          hover: "#2e2f69",
        },
        footer: {
          DEFAULT: "#171440",
          light: "#2c296b",
        },
      },
      width: {
        "20vw": "20vw",
        "35vw": "35vw",
      },
      fontFamily: {
        exo2: ['"Exo2"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
