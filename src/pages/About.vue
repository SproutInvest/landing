<template>
  <div>
    <p>About page</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {},
  mounted() {
    this.$ga.page('/about')
  },
}
</script>

<style lang="sass">
</style>
