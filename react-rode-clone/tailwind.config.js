/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '481px',
      'md': '768px',
      'lg': '1024px',
      'lgm': '1100px',
      'xl': '1240px',
      'xxl': '1400px',
    },
    extend: {
      colors: {
        bgbody: '#fbf7ed',
        darkgreen: '#004C3F',
        green: '#F3FCF4',
      },
      fontFamily: {
        'mont': ['"Montserrat"', '"sans"']
      }
    }
  },
  plugins: [],
}
