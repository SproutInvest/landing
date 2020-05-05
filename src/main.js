import Vue from 'vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAnalytics from 'vue-analytics'

import App from './App.vue'
import i18n from './i18n'



library.add(faSpinner)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VueAnalytics, {
  id: 'UA-164524931-1',
})

,
new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
