/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lobster': ['"Lobster Two"','cursive'],
        'dosis' : ['"Dosis"', 'cursive'],
        'montserrat' : ['"Montserrat"', 'cursive'],
      },
      colors: {
        'orange-s' : '#f6853c',
        'orange-light': '#F4AC7D',
        'orange-xtralight':'#F1E1D6',
        'pink-s' : '#f6dbf7',
        'purple-s' : '#6e4371',
        'blue-s' : '#91a7e3',
        'grey-s' : '#F7F7F7',
      },
    },
  },
  plugins: [],
}
