// const businessUnits = {};
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@nuxtjs/device",
    "nuxt-headlessui",
    "@nuxtjs/tailwindcss",
    "@pinia-plugin-persistedstate/nuxt",
  ],

  build: { transpile: ['@vee-validate/rules'] },

  imports: {
    dirs: ['./stores'],
  },

  i18n: {
    legacy: false,
    lazy: true,
    // customRoutes: 'config',
    defaultLocale: "en",
    fallbackLocale: "en",
    localeDetection: false,
    langDir: "lang/",
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en.js",
      },
      {
        name: "العربية",
        code: "ar",
        iso: "ar-EG",
        file: "ar.js",
      },
    ],
    strategy: "prefix_except_default",
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  nitro: {
    compressPublicAssets: true,
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },

  runtimeConfig: {
    public: {
      // buId: businessUnits[process.env.BU_NAME.toLowerCase()]?.uid,
      // buCode: businessUnits[process.env.BU_NAME.toLowerCase()]?.code,
      buName: process.env.BU_NAME,
      apiUrl: process.env.API_URL,
      baseUrl: process.env.BASE_URL,
    },
  }
});
