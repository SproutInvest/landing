<template>
  <div
    id="hero"
    class="ss-hero"
  >
    <div class="container">
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div class="col-12 col-lg-6 text-center text-lg-left">
          <h1 class="mb-5">
            {{ $t('header') }}
          </h1>
          <Subscribe />
          <small>{{ $t('disclaimer') }}</small>
        </div>
        <div
          class="col-12 col-lg-6 aos-init aos-animate text-center"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <img
            class="ss-hero-image"
            src="../assets/hero.png"
            alt="Sprout Hero Image"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "header": "Learn about your money and watch it grow",
    "disclaimer": "* we won't share your data with third parties"
  },
  "es": {
    "header": "La plataforma que te ayuda a Invertir Fácil y Rápido desde $200 pesos",
    "disclaimer": "* no compartiremos sus datos con terceros"
  }
}
</i18n>

<script>
import Subscribe from './Subscribe.vue'

export default {
  name: 'Hero',
  components: {
    Subscribe,
  },
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1
  font-size: 2.25rem
.ss-hero
  background-color: $ss-bg-color
.ss-hero-image
  width: 75%
  margin: 0 auto
</style>
