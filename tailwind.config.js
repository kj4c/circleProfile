const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9254de',
        secondary: '#efdbff',
        deftext: '#cfbef0',
        sectext: '#BC9AF7'
      },
    }
  },
  plugins: [],
}

