<template>
  <div
    id="hero"
    class="ss-hero"
  >
    <div class="container">
      <div class="row align-items-center justify-content-between py-5 py-md-10">
        <div class="col-12 col-lg-6 text-center text-lg-left">
          <h1 class="mb-5">
            Learn about your money and watch it grow
          </h1>
          <Subscribe />
          <small>* we won't share your data with third parties</small>
        </div>
        <div
          class="col-12 col-lg-6 aos-init aos-animate text-center"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <img
            class="ss-hero-app-image"
            src="../assets/app.png"
            alt="Image"
          >
        </div>
      </div>
    </div>
  </div>
</template>

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
  font-size: 3.25rem
.ss-hero
  background-color: $ss-bg-color
.ss-hero-app-image
  width: 60%
</style>
