<template>

  <div class="container pt-container" id="top">
    <div class="card">
      <h3 class="card-header">Downloads</h3>

      <div class="card-block">
        <h4 class="card-title">For all platforms, test ports, mods and other misc. files</h4>
        <hr />
        <p class="card-text">
          <a v-bind:href="releasePage" class="btn btn-secondary"><icon name="github" target="_blank"></icon> Release page on GitHub</a>
        </p>
        <p class="card-text">
          <b-alert variant="info" show>
            Note: The windows installer creates an entry in the start menu under Programs -> Games -> Paintown
          </b-alert>
        </p>
      </div>

      <div class="card-block">
        <h3 class="card-title">Releases</h3>
        <ul class="list-group">
          <li class="list-group-item" v-for="(release, release_name) in items.downloads"><a href="#" v-scroll-to="'#' + getAnchor(release_name)">{{release_name}}</a></li>
        </ul>
      </div>

      <div class="card-block" v-for="(release, release_name) in items.downloads">
        <h3 class="card-title" v-bind:id="getAnchor(release_name)">{{release_name}}<a href="#" v-scroll-to="'#top'" class="btn btn-info float-right">Back to top</a></h3>
        <table class="table table-striped table-sm">
          <thead class="thead-inverse">
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Download Link</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in release">
              <th scope="row">{{item.title}}</th>
              <td>{{item.date}}</td>
              <td>
                <a v-bind:href="item.link">
                  <button type="button" class="btn btn-outline-success pull-right">
                    <icon v-bind:name="item.icon"></icon>&nbsp;&nbsp;&nbsp;&nbsp;Download
                  </button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-html="renderAdditional(release_name)"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'downloads',
  data () {
    return {
      releasePage: 'https://github.com/kazzmir/paintown/releases',
      items: this.$root.$data.dataStore.state,
      anchorMap: {}
    }
  },
  watch: {
    downloads () {
      this.items = this.$root.$data.dataStore.state
    }
  },
  methods: {
    getAnchor (str) {
      if (!(str in this.anchorMap)) {
        this.anchorMap[str] = 'section-' + Object.keys(this.anchorMap).length.toString()
      }
      return this.anchorMap[str]
    },
    renderAdditional (version) {
      switch (version) {
        case 'mods':
          return `<p class="card-text">
            To install a mod download the zip file and unzip it to your mod path. Each OS has a different mod path:
            </p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Windows - Paintown installation directory (c:\\program files\\paintown)</li>
          <li class="list-group-item">Linux - ~/.paintown</li>
          <li class="list-group-item">OSX - ~/.paintown</li>
          </ul>`
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
