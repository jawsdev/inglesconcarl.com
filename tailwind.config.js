module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#262C33',
          DEFAULT: '#FE8242',
          light: '#FFB48F'
        },
        secondary: {
          dark: '#272F36',
          DEFAULT: '#F8CE86',
          light: '#42515C'
        },
        accent: {
          dark: '#00949C',
          DEFAULT: '#00adb5',
          light: '#00B8C2'
        },
        light: {
          dark: '#D4D4D4',
          DEFAULT: '#eeeeee',
          light: '#FAFAFA'
        },
        dark: {
          dark: '#6B6B6B',
          DEFAULT: '#848484',
          light: '#A8A8A8'
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
