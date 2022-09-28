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
        accentColor: '#F4A261',
      },
      fontFamily: {
        heading: 'Montserrat, sans-serif',
        text: 'Open Sans, sans-serif',
      },
    },
  },
  plugins: [],
};
