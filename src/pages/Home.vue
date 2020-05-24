<template>
  <div>
    <Header />
    <Hero />
    <Demo />
    <Video />
    <About />
    <Buy />
    <Ctoa />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Demo from '../components/Demo.vue'
import Video from '../components/Video.vue'
import About from '../components/About.vue'
import Buy from '../components/Buy.vue'
import Ctoa from '../components/Ctoa.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Demo,
    Video,
    About,
    Buy,
    Ctoa,
    Footer,
  },
  mounted() {
    this.$ga.page('/')
  },
}
</script>

<style lang="sass">
</style>
