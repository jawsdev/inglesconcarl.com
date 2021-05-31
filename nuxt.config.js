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
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Play: {
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
    '@nuxtjs/axios'
  ],

  router: {
    middleware: 'pages'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
