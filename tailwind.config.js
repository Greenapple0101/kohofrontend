// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          kohoBlue: "#0077cc",
          kohoYellow: "#f9c846"
        }
      }
    },
    plugins: []
  }
  