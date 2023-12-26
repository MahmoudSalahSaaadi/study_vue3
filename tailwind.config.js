/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Avenir', 'Neosans', 'sans-serif'],
      },
      colors: {
        primary: {
          0: '#F7F2EF',
          100: '#FAF1E1',
          200: '#ECE2CF',
          300: '#D3BFA7',
          400: '#F0BAAF',
          500: '#CE7C64',
          600: '#996C5A',
        },
        secondary: {
          0: '#F7F7F7',
          100: '#F3F3F3',
          200: '#E4E7E6',
          300: '#C0CCCC',
          400: '#5A7A80',
          500: '#1E2F2B',
          600: '#212D30',
        },
        tertiary: {
          500: '#C2BDB7',
        },
        basic: {
          DEFAULT: '#4E4E4E',
        },
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1536px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
