<template>
  <div>
    <div class="ss-blog">
      <div class="container pt-5 pb-5">
        <h2 class="text-center mb-5">
          {{ $t('blogTitle') }}
        </h2>
        <div
          v-for="post in posts"
          :key="post.id"
        >
          <router-link :to="`/blog/${ post.id }`">
            <div class="ss-blog-post-item mb-5">
              <h4 class="mb-3">
                {{ post.title }}
              </h4>
              <div v-html="post.description" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <Ctoa />
  </div>
</template>

<i18n>
{
  "en": {
    "blogTitle": "Sprout Learning Center"
  },
  "es": {
    "blogTitle": "Blog de aprendizaje Sprout"
  }
}
</i18n>

<script>
import Ctoa from '../components/Ctoa.vue'

export default {
  name: 'Blog',
  components: {Ctoa},
  data() {
    return {
      locale: null,
      posts: [],
    }
  },
  mounted () {
    this.$ga.page('/blog')
    this.localeInterval = setInterval(function () {
      const locale = localStorage.getItem('locale') || this.$i18n.locale
      if (locale !== this.locale) {
        this.locale = locale
        this.posts = require('./blogPosts.json')['posts'][locale]
      }
    }.bind(this), 1000)
  },
  beforeDestroy() {
    clearInterval(this.localeInterval)
  },
}
</script>

<style lang="sass">
.ss-blog
  background-color: $ss-bg-color
h2
  font-weight: 700
  font-family: $ss-font-family-special
  color: $ss-font-color-black
h4
  color: $ss-font-color-black !important
  font-weight: 700
  text-decoration: none !important
a
  text-decoration: none !important
.ss-blog-post-item
  background-color: $ss-bg-color-lighter
  color: $ss-font-color-black !important
  padding: 1rem
  &:hover
    background-color: $ss-bg-color-light
</style>
