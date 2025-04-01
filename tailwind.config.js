/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue"
  ],
  theme: {
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