<template>
  <div class="ss-ctoa">
    <div class="container">
      <Subscribe show-options="true" />
    </div>
  </div>
</template>

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
</style>
