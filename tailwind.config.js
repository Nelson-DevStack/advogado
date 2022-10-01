/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryGray: '#1B2124',
        mainColor: '#013d37',
        secondaryColor: '#dfbf8d',
        lightColor: '#f6f6f6',
        accentColor: '#FF9966',
      },
      fontFamily: {
        heading: 'Montserrat, sans-serif',
        text: 'Open Sans, sans-serif',
      },
      backgroundImage: {
        hero: 'url("/hero.jpg")',
      },
    },
  },
  plugins: [],
};
