<template>
  <div class="ss-demo">
    <div class="container">
      <div class="ss-demo-section py-5">
        I am <input type="text"> years old.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.ss-demo
  background-color: $ss-bg-color
.ss-demo-section
  font-family: $ss-font-family-special
  font-size: 3rem
  font-weight: 700
  input
    width: 8rem
</style>
