/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6fffb',
          100: '#b3fff3',
          200: '#80ffec',
          300: '#4dffe4',
          400: '#1affdd',
          500: '#14b8a6', // teal-ish primary
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl: '14px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1024px',
          xl: '1180px',
          '2xl': '1280px',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
