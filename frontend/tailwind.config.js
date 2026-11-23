/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        plightBlue: '#E8F5FF',
      },
      fontFamily: {
        fontPro: ['Fira Sans'],
      },
    },
  },
  plugins: [],
};
