<template>
  <div
    id="language-switcher"
    class="ss-language-switcher"
  >
    <img
      v-if="locale === 'en'"
      src="../assets/mexico-flag.png"
      height="15"
      width="30"
      alt="Mexico Flag"
      @click="switchLanguage('sp')"
    >
    <img
      v-else
      src="../assets/us-flag.png"
      height="15"
      width="30"
      alt="US Flag"
      @click="switchLanguage('en')"
    >
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  components: {},
  props: {},
  data: function () {
    this.$i18n.locale = 'en'
    return {
      locale: 'en',
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    },
  },
  methods: {
    switchLanguage(lang) {
      this.locale = lang
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
</style>
