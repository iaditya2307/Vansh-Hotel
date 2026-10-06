/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        royal: {
          dark: '#07090e',
          card: '#0f1420',
        }
      }
    },
  },
  plugins: [],
}
