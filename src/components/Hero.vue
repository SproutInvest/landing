<template>
  <div
    id="hero"
    class="ss-hero"
  >
    <div class="container">
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div class="col-12 col-lg-6 text-center text-lg-left">
          <h1 class="mb-2">
            {{ $t('header') }}
          </h1>
          <h3 class="mb-5">
            {{ $t('subHeader') }}
          </h3>
          <h4 class="mt-5">
            {{ $t('ctoa') }}
          </h4>
          <!-- <Subscribe />
          <small>{{ $t('disclaimer') }}</small> -->
          <a
            href="#footer"
            class="btn"
            @click.capture="onCtoaClick"
          >{{ $t('start') }}</a>
        </div>
        <div
          class="col-12 col-lg-6 aos-init aos-animate text-center"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <img
            class="ss-hero-image"
            :src="getImgUrl()"
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
    "subHeader": "We believe that everyone should be able to achieve financial independence. Our dedicated team of investment professionals is developing Sprout to educate and help you to start investing.",
    "disclaimer": "* we won't share your data with third parties",
    "ctoa": "To learn more about investing your money and stay updated about the latest sprout news",
    "start": "Click Here"
  },
  "es": {
    "header": "La plataforma que te ayuda a Invertir Fácil y Rápido desde $200 pesos",
    "subHeader": "En Sprout creemos que todos deberían tener la oportunidad de ser financieramente independientes. Nuestro equipo de expertos está desarrollando Sprout para guiarte paso a paso en tus primeras inversiones.",
    "disclaimer": "* no compartiremos sus datos con terceros",
    "ctoa": "Estás interesado en hacer crecer tu dinero y enterarte de las últimas novedades de Sprout?",
    "start": "Click Here"
  }
}
</i18n>

<script>
// import Subscribe from './Subscribe.vue'

export default {
  name: 'Hero',
  components: {
    // Subscribe,
  },
  props: {},
  data: function() {
    return {
      locale: 'en',
    }
  },
  mounted () {
    const locale = localStorage.getItem('locale')
    if (locale) {
      this.locale = locale
    }
  },
  methods: {
    getImgUrl() {
      return require(`../assets/hero_${this.locale}.png`)
    },
    onCtoaClick() {
      this.$ga.event({
        eventCategory: 'subscribe',
        eventAction: 'click',
        eventLabel: 'heroClickBtn',
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1
  font-size: 2.25rem
h3
  font-size: 1rem
  // text-align: justify
h4
  font-size: 0.9rem
  font-style: italic
.ss-hero
  background-color: $ss-bg-color
.ss-hero-image
  width: 90%
  margin: 0 auto
.btn
  color: $ss-font-color-black
  background-color: #ffffff
  border-color: #ffffff
  border-top-left-radius: 0.25rem !important
  border-bottom-left-radius: 0.25rem !important
  border-top-right-radius: 0.25rem !important
  border-bottom-right-radius: 0.25rem !important
  min-width: 8rem
</style>
