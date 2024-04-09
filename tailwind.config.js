/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Violet": "hsl(257, 40%, 49%)",
        "Soft_Magenta": "hsl(300, 69%, 71%)",

      }
    },
  },
  plugins: [],
}