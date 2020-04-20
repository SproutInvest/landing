<template>
  <div
    id="video"
    class="ss-video"
  >
    <div class="text-center container">
      <h3 class="mb-5">
        {{ $t('how') }}
      </h3>
      <video
        width="1000"
        controls
        src="../assets/video.mp4"
      />
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "how": "How Sprout Works"
  },
  "es": {
    "how": "Cómo funciona Sprout"
  }
}
</i18n>

<script>
export default {
  name: 'Video',
  components: {},
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.ss-video
  background-color: $ss-bg-color
  padding-top: 3rem
  padding-bottom: 3rem
h3
  font-size: 2.25rem
  font-family: $ss-font-family-special
  color: $ss-font-color-blue
  font-weight: 700
  line-height: 1.5
</style>
