/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      'black-bg': '#272727',
      'blue': {
        300: '#275c91',
      },
      'white': {
        100:  '#fff',
      }
    },
    extend: {
      scale: {
        '101': '1.005',
      },
    },
  },
  plugins: [

  ],
}
