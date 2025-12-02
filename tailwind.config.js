/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a3c30', // Deep Green
          50: '#eef6f4',
          100: '#d5e8e3',
          200: '#b0d4cb',
          300: '#84b8ab',
          400: '#5a9687',
          500: '#3d7a6b',
          600: '#2d6154',
          700: '#1a3c30', // Base
          800: '#163329',
          900: '#12261e', // Darkest
          950: '#0a1712',
        },
        secondary: {
          DEFAULT: '#9e7e43', // Gold
          50: '#fbf8f1',
          100: '#f5efdd',
          200: '#eaddbc',
          300: '#dec293',
          400: '#d1a56b',
          500: '#c48a4a', // More orange-gold
          600: '#9e7e43', // Base
          700: '#7e6136',
          800: '#674f30',
          900: '#55412b',
          950: '#2e2215',
        },
        cream: {
          DEFAULT: '#f2efdc',
          50: '#ffffff',
          100: '#fbfaf6',
          200: '#f2efdc', // Base
          300: '#e6dfbc',
          400: '#d9cf9c',
          500: '#ccbf7c',
        },
        dark: {
          DEFAULT: '#12261e',
          800: '#1a3c30',
          900: '#12261e',
          950: '#0a1410',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #1a3c30 0%, #12261e 100%)',
        'gradient-gold': 'linear-gradient(135deg, #9e7e43 0%, #c48a4a 100%)',
        'gradient-cream': 'linear-gradient(to bottom, #f2efdc 0%, #ffffff 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}
