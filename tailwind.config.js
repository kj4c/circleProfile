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
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      animation: {
        fadeIn: 'fadeIn 1.1s ease-out',
        slide: 'slide 1.1s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            transform: "translateY(9%)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        slide: {
          '0%': {
            top:0
          },
          '25%': {
            top: '-4rem'
          },
          '72.5%': {
            top: '-12.25rem'
          }
        }
      }
    }
  },
  plugins: [],
}

