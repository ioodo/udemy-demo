/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue"
  ],
  theme: {
    screens: {
      xxs: '280px',

      xs: '512px',
      // => @media (min-width: 512px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }
    },
    extend: {
      width: {
        content: '1180px'
      },
      colors: {
        primary: '#6d28d2',
        secondary: '#c0c4fc',
        main: '#303141',
        'gray-200': '#d1d2e0',
        'gray-300': '#9194ac',
        'gold-200': '#f69c08',
        'gold-400': '#c4710d',
        'gold-800': '#8b4309'
      }
    },
  },
  plugins: [],
}