/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#454340",
        secondary: {
          100: "#e6ded3",
          200: "#bdb6ae",
          
        },
      },
    },
  },
  plugins: [],
}

