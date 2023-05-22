// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import github from './utils/github'
import scroll from 'vue-scrollto'

Vue.config.productionTip = false

// Smooth scroll back to top between transitions
router.beforeEach(function (to, from, next) {
  scroll.scrollTo('body')
  next()
})

let store = {
  debug: false,
  state: {
    downloads: {},
    commits: {}
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
  },
  hasDownloads () {
    return Object.keys(this.state.downloads).length !== 0
  },
  addCommit (repository, commit) {
    if (this.debug) {
      console.log('Adding [' + commit['date'] + '] to release [' + repository + ']')
    }
    if (!(repository in this.state.commits)) {
      this.state.commits[repository] = []
    }
    let list = this.state.commits[repository]
    list.push(commit)
    this.state.commits = Object.assign({}, this.state.commits, {[repository]: list})
  },
  hasCommits () {
    return Object.keys(this.state.commits).length !== 0
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
    github.fetch(this.dataStore)
  }
})
