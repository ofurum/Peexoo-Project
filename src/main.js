import Vue from 'vue'
// import Bootstrap from 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon }  from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
// import FunctionalCalendar from 'vue-functional-calendar';
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(Bootstrap)
library.add(faUserSecret)
Vue.use(BootstrapVue)
Vue.use(FunctionalCalendar, {
  dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
});


 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  // FontAwesomeIcon ,
  // faUserSecret,
  FunctionalCalendar,
  render: h => h(App)
}).$mount('#app')
