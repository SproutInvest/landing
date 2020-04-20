module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/sass/_variables.sass"`,
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
}
