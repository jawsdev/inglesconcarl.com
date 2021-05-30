module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#e5753b',
          DEFAULT: '#FE8242',
          light: '#fe8f55'
        },
        whatsapp: '#4FCE5D'
      },
      fontFamily: {
        play: ['Play', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
