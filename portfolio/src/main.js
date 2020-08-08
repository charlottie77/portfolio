import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ScrollWatch from 'scrollwatch'

import 'animate.css'

Vue.config.productionTip = false
Vue.prototype.$sw = new ScrollWatch({
  onElementInView: function(data) {
    console.log(data.el, '...is now in view')
  },
  inViewClass: 'animate__fadeInUp',
  watchOnce: true,
  scrollThrottle:80
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')