/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a36a8',
        'cupon': '#DB0FA8',
      },
      fontFamily: {
        //futura:["src/assets/fonts/FuturaStd.otf"]
        futura:["assets/fonts/FuturaStd.otf"]
      }
    },
  },
  plugins: [],
}

