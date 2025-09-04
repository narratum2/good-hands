/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#171717',
        porcelain: '#FAFAF9',
        shell: '#F5F5F4',
        harbor: '#E1E7EF',
        gold: '#F8BE48',
        sage: '#C3CFB9',
        coral: '#EF9A9A'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem'
      },
      transitionTimingFunction: {
        outExpo: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
};