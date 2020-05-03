<template>
  <div class="ss-ctoa">
    <div class="container">
      <h2 class="mb-3">
        {{ $t('ctoa') }}
      </h2>
      <Subscribe v-bind:show-options="true" />
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "ctoa": "To learn more about investing your money and stay updated about the latest sprout news, please leave your contact details below"
  },
  "es": {
    "ctoa": "Estás interesado en hacer crecer tu dinero y enterarte de las últimas novedades de Sprout?"
  }
}
</i18n>

<script>
import Subscribe from './Subscribe.vue'

export default {
  name: 'Ctoa',
  components: {
    Subscribe,
  },
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1
  font-size: 3.25rem
.ss-ctoa
  background-color: $ss-bg-color
.container
  max-width: 40rem
  margin: auto
  padding-top: 5rem
  padding-bottom: 5rem
h2
  font-size: 1.1rem
</style>
