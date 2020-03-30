<template>
  <div id="app">
    <Header />
    <Hero />
    <Demo />
    <Video />
    <About />
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
    Ctoa,
    Footer,
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
