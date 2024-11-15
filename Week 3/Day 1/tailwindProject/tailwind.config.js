/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: '#F4D04E',
        darkGray: '#111111',
        lightGray: '#6B6B6B',
      },

      fontFamily: {
        sansFont: ['Arial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        customFont: ['Roboto', 'sans-serif'],

      }
    },
  },
  plugins: [],
}
