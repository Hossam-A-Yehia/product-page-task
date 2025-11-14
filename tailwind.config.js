/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FAFAFA',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          500: '#6B7280',  
          900: '#111827',  
        },
        accent: {
          rating: '#FFB400', 
        },
        cta: {
          primary: '#111111',
          hover: '#374151',
        }
      },
      maxWidth: {
        '7xl': '1200px',
      },
      aspectRatio: {
        '4/5': '4 / 5',
      },
      gridTemplateColumns: {
        'hero': '7fr 5fr', 
      },
      fontSize: {
        'product-title-mobile': ['20px', { lineHeight: '1.2' }],
        'product-title-tablet': ['24px', { lineHeight: '1.2' }], 
        'product-title-desktop': ['32px', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem', 
        '20': '5rem',   
        '22': '5.5rem', 
        '24': '6rem',   
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms', 
        '300': '300ms',
      }
    },
  },
  plugins: [],
}