import Vue from 'vue'

import YDUI from 'vue-ydui' /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css'
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

import App from './App.vue'
import router from './router'

Vue.use(YDUI)
Vue.use(Datetime)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
