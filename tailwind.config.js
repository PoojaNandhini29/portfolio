/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0A0A0A',
        panel: '#121212',
        gold: '#D4AF37',
        goldBright: '#FFD700',
        mist: '#F5F1E8',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        glow: 'glow 3.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 },
        },
      }
    },
  },
  plugins: [],
}
