<template>

  <div class="container pt-container">
    <div class="card">
      <h3 class="card-header">Downloads</h3>

      <div class="card-block">
        <h4 class="card-title">For all platforms, test ports, mods and other misc. files</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>

      <div class="card-block">
        <div v-for="(release, release_name) in items">
          <table class="table table-striped">
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Download Link</th>
            </tr>
            <tr v-for="item in release">
              <td>{{item.title}}</td>
              <td>{{item.date}}</td>
              <td>
                <a v-bind:href="item.link">
                  <button type="button" class="btn btn-primary pull-right">
                    <i class="fa" :class="[`${item.icon}`]"></i> Download
                  </button>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'downloads',
  data () {
    return {
      items: this.$root.$data.dataStore.state.downloads
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
