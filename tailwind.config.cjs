/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'almarai' : ['Almarai', 'sans-serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#A51D2B',
      'secondary': '#F79321',
      'basic' : '#fff',
      'bodybg': '#f3f3f3',
      'accept': '#00FF65',
      'red' : '#F43F5E'

    },
  },
  plugins: [],
}