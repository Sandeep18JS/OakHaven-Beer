/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Bangers', 'sans-serif'],
        secondary: ['Galdeano', 'sans-serif'],
        tertiary: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#EF816A",
        secondary: "#C7E5EF",
        tertiary: "#074457",
      }
    },
  },
  plugins: [],
}
