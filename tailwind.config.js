/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'tripsans': ['Trip Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

