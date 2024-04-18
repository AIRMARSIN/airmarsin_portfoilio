/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#079211',
        'white': '#FFFF',
        'light-gray': '#D1D5DB',
        'gray': '#808080',
        'deep-gray': '0A0A0F',
        'light-dark': '#101017',
        'dark': '#101017',
        'deep-dark': '#050507',
      }
    },
  },
  plugins: [],
}