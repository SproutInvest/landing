<template>
  <div
    id="video"
    class="ss-video"
  >
    <div
      ref="videoContainer"
      class="text-center container"
    >
      <h3 class="mb-5">
        {{ $t('how') }}
      </h3>
      <!-- <video-player
        ref="videoPlayer"
        class="video-player-box vjs-big-play-centered"
        :options="playerOptions"
        :playsinline="true"
        @play="onPlayerPlay()"
        @pause="onPlayerPause()"
        @ended="onPlayerEnded()"
      /> -->
      <video
        :width="videoWidth"
        controls
        src="../assets/video.mp4"
        poster="../assets/poster.png"
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
  data() {
    return {
      videoWidth: 1000,
      playerOptions: {
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        width: this.videoWidth,
        sources: [{
          type: 'video/mp4',
          src: require('../assets/video.mp4'),
        }],
        poster: require('../assets/poster.png'),
      },
    }
  },
  mounted() {
    this.videoWidth = Math.min(this.$refs.videoContainer.clientWidth - 30, 1000)
    this.playerOptions.width = this.videoWidth
  },
  methods: {
    onPlayerPlay() {
      this.$ga.event({
        eventCategory: 'video',
        eventAction: 'play',
        eventLabel: 'explainerVideo',
      })
    },
    onPlayerPause() {
      this.$ga.event({
        eventCategory: 'video',
        eventAction: 'pause',
        eventLabel: 'explainerVideo',
      })
    },
    onPlayerEnded() {
      this.$ga.event({
        eventCategory: 'video',
        eventAction: 'end',
        eventLabel: 'explainerVideo',
      })
    },
  },
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
