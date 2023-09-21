/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Poppins': ['Poppins', 'sans-serif']
      },
      colors:{
        'primary': '#00ADB5',
        'white': '#EEEEEE',
        'dark': '#393E46',
        'super-dark': '#222831'
      }
    },
  },
  plugins: [],
}

