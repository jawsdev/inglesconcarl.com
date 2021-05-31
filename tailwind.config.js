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
        lora: ['Lora', 'serif'],
        'open-sans': ['Open Sans', 'sans serif']
      },
      typography: {
        DEFAULT: {
          css: {
            h3: {
              color: '#FE8242',
              '&:hover': {
                color: '#FE8242'
              }
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
