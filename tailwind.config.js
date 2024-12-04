/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('@/assets/img/loginBg.png')",
        'inner-page': "url('@/assets/img/innerBg.png')",
      },
      colors: {
        'adx-base': '#5653F6',
        'font-c1': '#2D3138',
        'adx-gray': '#E7E8EE',
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        'r20': '1.25rem'
      },
    },
  },
  plugins: [],
};
