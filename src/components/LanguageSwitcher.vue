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
      @click="switchLanguage('es')"
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
import axios from 'axios'

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
      localStorage.setItem('locale', val)
      this.$i18n.locale = val
    },
  },
  mounted () {
    const locale = localStorage.getItem('locale')
    if (locale) {
      this.locale = locale
    } else {
      axios
        .get('https://ipinfo.io?token=b23e31692a8879')
        .then(response => {
          const country = response.data.country
          if (country === 'MX' || country === 'ES') {
            this.locale = 'es'
          }
        })
    }
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
