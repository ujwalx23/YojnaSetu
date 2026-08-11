/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary brand: Deep Navy Blue (from logo 'Y' letter)
        brand: {
          50:  '#e8eef8',
          100: '#c5d3ef',
          200: '#9eb5e4',
          300: '#7597d9',
          400: '#5580d1',
          500: '#3569c9',
          600: '#1B3B6F',  // Core navy (logo primary)
          700: '#162f58',
          800: '#102341',
          900: '#0a172a',
          950: '#060e1a',
        },
        // Secondary accent: Vivid Orange (from logo 'S' letter)
        accent: {
          50:  '#fff5e6',
          100: '#ffe4bb',
          200: '#ffd08a',
          300: '#ffbc59',
          400: '#ffaa33',
          500: '#F57C00',  // Core orange (logo accent)
          600: '#e06e00',
          700: '#c05e00',
          800: '#a04f00',
          900: '#7a3c00',
        },
        gov: {
          orange: '#FF671F',
          white:  '#FFFFFF',
          green:  '#046A38',
          blue:   '#1B3B6F',
          navy:   '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow':  'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':       'float 4s ease-in-out infinite',
        'spin-slow':   'spin 8s linear infinite',
        'shimmer':     'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      },
      backgroundImage: {
        // Hero gradient: navy → deep-blue
        'brand-gradient': 'linear-gradient(135deg, #1B3B6F 0%, #0f172a 60%, #162f58 100%)',
        // Orange CTA gradient
        'accent-gradient': 'linear-gradient(135deg, #F57C00 0%, #FF8C1A 100%)',
        // Card shimmer
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(245,124,0,0.08) 50%, transparent 100%)',
      },
      boxShadow: {
        'brand':  '0 4px 24px rgba(27, 59, 111, 0.35)',
        'accent': '0 4px 24px rgba(245, 124, 0, 0.35)',
        'orange-glow': '0 0 20px rgba(245, 124, 0, 0.4)',
        'navy-glow':   '0 0 20px rgba(27, 59, 111, 0.5)',
      }
    },
  },
  plugins: [],
}
