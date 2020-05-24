<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="sass">
#app
  font-family: $ss-font-family-basic
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $ss-font-color-darkblue
</style>