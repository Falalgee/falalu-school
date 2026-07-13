/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium palette: deep navy, emerald, gold
        primary: {
          DEFAULT: '#0B1120',   // Deep navy
          50: '#E6E9F0',
          100: '#C3CAD9',
          200: '#9BA6BC',
          300: '#74829F',
          400: '#4E5F83',
          500: '#0B1120',
          600: '#0A0F1C',
          700: '#080D19',
          800: '#060A14',
          900: '#04070D',
        },
        secondary: {
          DEFAULT: '#10B981',   // Emerald
          50: '#E6F9F2',
          100: '#B3F0DC',
          200: '#80E7C6',
          300: '#4DDEB0',
          400: '#26D49A',
          500: '#10B981',
          600: '#0E9F6E',
          700: '#0B855B',
          800: '#096B48',
          900: '#075135',
        },
        tertiary: {
          DEFAULT: '#F59E0B',   // Gold
          50: '#FEF9E7',
          100: '#FCEFBA',
          200: '#FAE48C',
          300: '#F8D95E',
          400: '#F6CE30',
          500: '#F59E0B',
          600: '#D18A08',
          700: '#AE7206',
          800: '#8B5B04',
          900: '#684402',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Semantic tokens
        surface: '#FFFFFF',
        'surface-alt': '#F9FAFB',
        'surface-dark': '#0B1120',
        'text-primary': '#0B1120',
        'text-secondary': '#4B5563',
        'text-muted': '#9CA3AF',
        border: '#E5E7EB',
        'border-light': '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '120': '30rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)',
        'card-hover': '0 1px 3px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.08)',
        'nav': '0 1px 2px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.02)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};