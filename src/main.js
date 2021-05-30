import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import VueSmoothScroll from 'vue2-smooth-scroll'


Vue.config.productionTip = false;
require('vue2-animate/dist/vue2-animate.min.css');
//Vue.use(VueSmoothScroll)

Vue.use(VueSmoothScroll, {
  duration: 700,
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
