const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      pink: colors.pink,
      teal: colors.teal,
      indigo: colors.indigo
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
