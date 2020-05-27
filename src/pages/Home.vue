<template>
  <div>
    <Hero />
    <Demo />
    <Video />
    <How />
    <Buy />
    <Ctoa />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Demo from '../components/Demo.vue'
import Video from '../components/Video.vue'
import How from '../components/How.vue'
import Buy from '../components/Buy.vue'
import Ctoa from '../components/Ctoa.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Demo,
    Video,
    How,
    Buy,
    Ctoa,
  },
  mounted() {
    this.$ga.page('/')
  },
}
</script>

<style lang="sass">
</style>
