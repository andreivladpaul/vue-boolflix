import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

library.add(fas)
Vue.component('fa', FontAwesomeIcon)
