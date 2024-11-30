/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('./src/assets/img/loginBg.png')",
        'inner-page': "url('./src/assets/img/innerBg.png')",
      },
      colors: {
        'adx-base': '#5653F6',
        'font-c1': '#2D3138'
      }
    },
  },
  plugins: [],
};
