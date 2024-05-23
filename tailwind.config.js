const colors = require('tailwindcss/colors')
import wave from './assets/wave.svg';

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1904px', // Large screens
        'xl': '1439px', // Extra large screens
        'xxl': '1980px',
        'xxxl': '25560'
      },
      colors: {
        primary: '#9254de',
        secondary: '#efdbff',
        homepage: '#9654e6',
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
      backgroundImage: {
        'wave': "url('${wave}')"
      },
      spacing: {
        'waveBottom': '-500px',
        'waveTop': '-190px',
        'waveLeft': '219.8%',
        'waveTop2': '-191px',
      },
      fontSize: {
        'titleText': '70px'
      },
      animation: {
        fadeIn: 'fadeIn 1.1s ease-out',
        slide: 'slide 1.1s ease-out',
        slideRight: 'slideRight 2s ease-in-out',
        waveMotion: 'waveMotion 13s cubic-bezier(0.36, 0.45, 0.63, 0.53)  -0.125s infinite',
        waveMotionBounce: 'waveMotionBounce 13s cubic-bezier(0.36, 0.45, 0.63, 0.53)  -0.125s infinite',
        bouncing: 'bouncing 3s ease-in-out infinite',
        moveTop: 'moveTop 1s ease-out infinite',
        popOut: 'popOut 1s ease-in-out',
        boom: 'boom 0.2s ease-in-out'
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
        slideRight: {
          '0%': {
            transform: 'translateX(-60px)'
          },
          '50%': {
            transform: 'translateX(10px)'
          },
          '100%': {
            transform: 'translateX(0px)'
          }
        },
        waveMotionBounce: {
          '0%': { 
            marginLeft: '0',
            transform: 'translateY(-50px)'
          },
          '50%': {
            transform: 'translateY(0)'
          },
          '100%': { 
            marginLeft: '-1725px',
            transform: 'translateY(-50px)'
          },
        },
        waveMotion: {
          '0%': { 
            marginLeft: '0',
          },
          '100%': { 
            marginLeft: '-1725px',
          },
        },
        bouncing: {
          '0%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
          '100%' : {
            transform: 'translateY(0px)'
          }
        },
        moveTop: {
          '0%' : {
            transform: 'translateY(-35px)'
          },
          '100%': {
            transform: 'translateY(-35px)'
          }
        },
        popOut: {
          '0%': {
            transform: 'scale(1.8)'
          },
          '20%': {
            transform: 'scale(1.1)'
          },
          '40%': {
            transform: 'scale(1.7)'
          },
          '60%': {
            transform: 'scale(1.3)'
          },
          '80%': {
            transform: 'scale(1.5)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        boom: {
          '100%': {
            transform: 'scale(1.1)'
          }
        }
      }
    }
  },
  plugins: [],
}

