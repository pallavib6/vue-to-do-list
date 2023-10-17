/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
      },
      fontFamily: {
        sans: ['Arial', 'sans'],
      },
    },
  },
  plugins: [],
}

