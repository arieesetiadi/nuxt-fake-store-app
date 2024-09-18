// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-swiper",
    "@vueuse/nuxt",
  ],

  app: {
    head: {
      htmlAttrs: { "data-theme": "light" },
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});