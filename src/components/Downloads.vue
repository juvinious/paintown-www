<template>

  <div class="container pt-container" id="top">
    <div class="card">
      <h3 class="card-header">Downloads</h3>

      <div class="card-block">
        <h4 class="card-title">For all platforms, test ports, mods and other misc. files</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a v-bind:href="releasePage" class="btn btn-secondary"><icon name="github" target="_blank"></icon> Release page on GitHub</a>
      </div>

      <div class="card-block">
        <ul class="list-group">
          <li class="list-group-item" v-for="(release, release_name) in items.downloads"><a href="#" v-scroll-to="'#' + hashCode(release_name)">{{release_name}}</a></li>
        </ul>
      </div>

      <div class="card-block" v-for="(release, release_name) in items.downloads">
        <h3 class="card-title" v-bind:id="hashCode(release_name)">{{release_name}}<a href="#" v-scroll-to="'#top'" class="btn btn-info float-right">Back to top</a></h3>
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
                  <button type="button" class="btn btn-primary pull-right">
                    <icon v-bind:name="item.icon"></icon>&nbsp;&nbsp;&nbsp;&nbsp;Download
                  </button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
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
      hashMap: {}
    }
  },
  watch: {
    downloads () {
      this.items = this.$root.$data.dataStore.state
    }
  },
  methods: {
    hashCode (str) {
      if (!(str in this.hashMap)) {
        this.hashMap[str] = 'section-' + Object.keys(this.hashMap).length.toString()
      }
      return this.hashMap[str]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
