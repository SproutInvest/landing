<template>
  <div
    id="footer"
    class="ss-footer py-5 text-center"
  >
    <p>Email us at <a href="mailto:contact@sproutsaving.com">contact@sproutsaving.com</a>  | © 2020 Sprout Saving</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.ss-footer
  background-color: $ss-bg-color-special
  color: $ss-font-color-white
  a
    color: $ss-font-color-white
    text-decoration: underline solid $ss-font-color-white
</style>
