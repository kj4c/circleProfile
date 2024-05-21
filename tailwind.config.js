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
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      width: {
        waveWidth: '1000px'
      },
      height: {
        waveHeight: '400px'
      },
      backgroundSize: {
        'waveSize': '100%',
      },
      spacing: {
        'waveBottom': '-500px',
        'waveTop': '-190px',
      },
      fontSize: {
        'titleText': '70px'
      },
      animation: {
        fadeIn: 'fadeIn 1.1s ease-out',
        slide: 'slide 1.1s ease-out',
        waveMotion: 'waveMotion 10s linear infinite'
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
        },
        waveMotion: {
          '0%': { transform: 'translateX(0)'},
          '50%': { transform: 'translateX(-52%)'},
        },
      }
    }
  },
  plugins: [],
}

