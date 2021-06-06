export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Inglés con Carl',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/graphcms.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics',
    '@nuxtjs/fontawesome'
  ],

  googleFonts: {
    families: {
      Lora: {
        wght: [400, 700]
      },
      'Open Sans': {
        wght: [400, 700]
      }
    }
  },

  googleAnalytics: {
    id: 'G-MLVTD6Y5W6'
  },

  fontawesome: {
    icons: {
      solid: [
        'faEnvelope',
        'faUserCircle',
        'faBriefcase',
        'faFlag',
        'faUserGraduate',
        'faLanguage',
        'faBars',
        'faTimes',
        'faSpinner',
        'faCheck',
        'faCircle',
        'faGlobe'
      ],
      // regular: [],
      // light: [],
      // duotone: [],
      brands: ['faWhatsapp']
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    [
      'nuxt-cookie-control',
      {
        locales: ['en', 'es'],
        controlButton: false
      }
    ]
  ],
  router: {
    middleware: ['language', 'pages_english', 'pages_spanish']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  recaptcha: {
    hideBadge: false,
    siteKey: '6LfodhUTAAAAAFOYOefb_vqQU7AJRm2wy6KMMQKz', // Better would be from 'process.env.API_KEY' and with '.env' file
    version: 2 // Or 3
  },

  generate: {
    routes: ['/en/', '/es/']
  }
}
