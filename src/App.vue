<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
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