import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Downloads from '@/components/Downloads'
import Development from '@/components/Development'
import Media from '@/components/Media'
import Contact from '@/components/Contact'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'
import ScrollTo from 'vue-scrollto'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// only import the icons you use to reduce bundle size
// import 'vue-awesome/icons/flag'

// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(ScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: -65,
  cancelable: true,
  onDone: false,
  onCancel: false
})
Vue.component('icon', Icon)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/downloads',
      name: 'Downloads',
      component: Downloads
    },
    {
      path: '/development',
      name: 'Development',
      component: Development
    },
    {
      path: '/media',
      name: 'Media',
      component: Media
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
