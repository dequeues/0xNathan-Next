module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-blue': '#01A9DB'
      },
      fontFamily: {
        'sans': 'goldman,cursive'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
