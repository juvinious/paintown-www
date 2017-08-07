// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import downloads from './utils/downloads'

Vue.config.productionTip = false

let store = {
  debug: false,
  state: {
    downloads: {},
    commits: []
  },
  addDownload (release, download) {
    if (this.debug) {
      console.log('Adding [' + download['title'] + '] to release [' + release + ']')
    }
    if (!(release in this.state.downloads)) {
      this.state.downloads[release] = []
    }
    let list = this.state.downloads[release]
    list.push(download)
    this.state.downloads = Object.assign({}, this.state.downloads, {[release]: list})

    // this.state.downloads[release].push(download)
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
  },
  mounted () {
    downloads.fetch(this.dataStore)
  }
})
