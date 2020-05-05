<template>
  <div id="app">
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
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Demo from './components/Demo.vue'
import Video from './components/Video.vue'
import About from './components/About.vue'
import Buy from './components/Buy.vue'
import Ctoa from './components/Ctoa.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
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
  methods: {
    track () {
      this.$ga.page('/')
    },
  },
}
</script>

<style lang="sass">

#app
  font-family: $ss-font-family-basic
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $ss-font-color-darkblue
</style>
