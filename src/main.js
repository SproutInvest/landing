import Vue from 'vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
<<<<<<< HEAD
=======
import VueAnalytics from 'vue-analytics'
>>>>>>> e5a947c0e51b245b27c2c57a9e7e27305f219bf2

import App from './App.vue'
import i18n from './i18n'



library.add(faSpinner)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

<<<<<<< HEAD
=======
Vue.use(VueAnalytics, {
  id: 'UA-164524931-1',
})

,
>>>>>>> e5a947c0e51b245b27c2c57a9e7e27305f219bf2
new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
