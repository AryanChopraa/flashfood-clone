/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'figtree':['Figtree', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  plugins: [],
}