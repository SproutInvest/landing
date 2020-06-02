<template>
  <div>
    <Header />
    <div class="ss-blog">
      <div class="container pt-5 pb-5">
        <h2 class="text-center mb-5">
          {{ $t('blogTitle') }}
        </h2>
        <div class="ss-blog-post">
          <h4 class="mb-3">
            {{ post.title }}
          </h4>
          <div v-html="post.content" />
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
  name: 'BlogPost',
  components: {Ctoa},
  data() {
    return {
      locale: null,
      post: {
        title: null,
        content: null,
      },
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.$ga.page(`/blog/${ id }`)
    this.localeInterval = setInterval(function () {
      const locale = localStorage.getItem('locale') || this.$i18n.locale
      if (locale !== this.locale) {
        this.locale = locale
        const posts = require('./blogPosts.json')['posts'][locale]
        this.post = posts.filter(p => p.id == id)[0]
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
  color: $ss-font-color-black
  font-weight: 700
.ss-blog-post
  background-color: $ss-bg-color-lighter
  color: $ss-font-color-black
  padding: 1rem
</style>
