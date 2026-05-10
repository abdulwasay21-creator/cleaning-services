/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#06101d',
        slateblue: '#0d223d',
        line: 'rgba(160, 196, 255, 0.16)',
        glow: '#1f8fff',
        ice: '#f8fbff',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 24px 60px rgba(3, 11, 21, 0.35)',
        glow: '0 18px 50px rgba(31, 143, 255, 0.2)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(160, 196, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(160, 196, 255, 0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
