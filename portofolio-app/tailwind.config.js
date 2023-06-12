/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'blink-animation': {
          '0%': {visibility: 'visible'},
          '50%': {visibility: 'hidden'},
          '100%': {visibility: 'visible'},
        },
      },
      animation: {'blink': 'blink-animation 1s step-start infinite'}
    },
  },
  plugins: [],
}

