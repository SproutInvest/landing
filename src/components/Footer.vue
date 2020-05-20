<template>
  <div
    id="footer"
    class="ss-footer py-5 text-center"
  >
    <div class="ss-social-sharing">
      <a
        href="https://www.facebook.com/sproutinvst/"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'facebook-square']" />
      </a>
      <a
        href="https://www.instagram.com/sproutinvst/"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'instagram-square']" />
      </a>
      <a
        href="https://twitter.com/invest_sprout"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'twitter-square']" />
      </a>
    </div>
    <p>{{ $t('at') }} <a href="mailto:contact@sproutinvest.io">contact@sproutinvest.io</a>  | © 2020 Sprout Invest</p>
  </div> 
</template>

<i18n>
{
  "en": {
    "at": "Email us at"
  },
  "es": {
    "at": "Contáctanos"
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
.ss-social-sharing
  margin-bottom: 1rem
  a
    font-size: 2.5rem
    margin-right: 1rem
</style>
