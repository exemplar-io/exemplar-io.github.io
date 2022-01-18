const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  /* if we need more colors, go to https://tailwindcss.com/docs/customizing-colors  */
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.indigo,
      secondary: colors.white,
      gray: colors.gray,
      error: colors.red['500'],
    },
    textColor: {
      primary: colors.indigo,
      secondary: colors.white,
      error: colors.red['500'],
    },
    extend: {
      backgroundImage: {
        wave: "url('/src/img/background.svg')",
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
      hover: ['disabled'],
      fontWeight: ['hover'],
    },
  },
  plugins: [],
};
