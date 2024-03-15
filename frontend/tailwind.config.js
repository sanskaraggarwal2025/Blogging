/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black-color':'#0D0A08',
        'button-color':'#fafbf8'
      }
    },
  },
  plugins: [],
}