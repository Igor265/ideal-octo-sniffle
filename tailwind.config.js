/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FBF7F2',
        offwhite: '#FDFBF9',
        rose: {
          DEFAULT: '#E8C4C0',
          soft: '#F3DEDA',
          deep: '#C99A94',
        },
        lilac: '#E7E0F0',
        champagne: '#F4E7D3',
        gold: {
          DEFAULT: '#C9A96A',
          soft: '#E4CFA3',
        },
        ink: '#4A3F3D',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -24px, 0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(20px, -18px, 0) scale(1.06)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(0.9)' },
          '50%': { opacity: '0.9', transform: 'scale(1.15)' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        'float-slow': 'floatSlow 14s ease-in-out infinite',
        breathe: 'breathe 8s ease-in-out infinite',
        shimmer: 'shimmer 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
