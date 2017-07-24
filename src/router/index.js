import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// only import the icons you use to reduce bundle size
// import 'vue-awesome/icons/flag'

// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.component('icon', Icon)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
