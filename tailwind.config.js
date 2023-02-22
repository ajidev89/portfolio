/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'eudoxus': ['eudoxus sans'],
        'noto': ['Noto Serif Display']
      },
      colors: {
        // 'brand': 'linear-gradient(90deg, #4362BE 0%, #9747FF 100%)',
        'dark-mode' :'#0C0C14'
      }
    },
  },
  plugins: [],
}
