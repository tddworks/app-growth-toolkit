/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/11ty/**/*.{njk,md,html,js}",
    "./_site/**/*.html"
  ],
  darkMode: ["selector", '[class~="dark"]'],
  theme: {
    extend: {
      screens: {
        light: { raw: "(prefers-color-scheme: light)" },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
    ({ addVariant }) => {
      addVariant("light", ".light &");
    },
  ],
}
