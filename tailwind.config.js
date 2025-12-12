/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        imperial: {
          50: '#fcf4f4',
          100: '#f9e8e8',
          200: '#f3d5d5',
          300: '#eab6b6',
          400: '#de8d8d',
          500: '#ce6363',
          600: '#b44040',
          700: '#962d2d',
          800: '#8b0000', // Primary Red
          900: '#6b1010',
        },
        gold: {
          50: '#fbf9f1',
          100: '#f5f0db',
          200: '#ebe0b8',
          300: '#dec98e',
          400: '#d1b066',
          500: '#c59a45', // Primary Gold
          600: '#aa7e37',
          700: '#88602f',
          800: '#704e2b',
          900: '#5e4126',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', '"Noto Sans JP"', 'sans-serif'],
        serif: ['"Noto Serif SC"', '"Noto Serif JP"', 'serif'],
      },
      backgroundImage: {
        'pattern-cloud': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}