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
        lora: ['Lora', 'serif']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.cyan.900')
            },
            h2: {
              color: theme('colors.cyan.900')
            },
            h3: {
              color: theme('colors.cyan.900')
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
