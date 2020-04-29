<template>
  <div
    id="footer"
    class="ss-footer py-5 text-center"
  >
    <p>{{ $t('at') }} <a href="mailto:contact@sproutinvest.io">contact@sproutinvest.io</a>  | © 2020 Sprout Invest</p>
  </div>
</template>

<i18n>
{
  "en": {
    "at": "Email us at"
  },
  "es": {
    "at": "Envíenos un email a"
  }
}
</i18n>

<script>
export default {
  name: 'Footer',
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.ss-footer
  background-color: $ss-bg-color-special
  color: $ss-font-color-white
  a
    color: $ss-font-color-white
    text-decoration: underline solid $ss-font-color-white
</style>
