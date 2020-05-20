import Vue from 'vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faLock } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAnalytics from 'vue-analytics'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

import App from './App.vue'
import i18n from './i18n'

library.add(faSpinner)
library.add(faLock)
library.add(faFacebookSquare)
library.add(faInstagramSquare)
library.add(faTwitterSquare)
library.add(faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VueAnalytics, {
  id: 'UA-164524931-1',
})

Vue.use(VueVideoPlayer)

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
