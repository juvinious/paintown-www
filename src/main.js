// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import downloads from './utils/downloads'

Vue.config.productionTip = false

downloads.fetch()

var store = {
  debug: true,
  state: {
    downloads: {},
    commits: []
  },
  hasDownloads () {
    return this.state.downloads.length !== 0
  },
  addCommit (obj) {
    this.state.commits.push(obj)
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    dataStore: store
  }
})
