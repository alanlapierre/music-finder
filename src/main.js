import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import msToMm from '@/filters/ms-to-mm'
import uppercase from '@/filters/uppercase'

import blur from '@/directives/blur'

import routes from '@/routes'
import store from '@/store'

import EventBus from '@/plugins/event-bus'
import i18n from '@/i18n'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(uppercase)
Vue.use(blur)

const router = new VueRouter({ routes, base: '/music-finder', mode: 'history' })

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  i18n,
  store
})
