/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'off-white': '#373837',
        'off-black': '#161717'
      },
    },
  },
  plugins: [],
}

