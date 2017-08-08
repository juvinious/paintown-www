<template>

  <div class="container pt-container" id="top">
    <div class="card">
      <h3 class="card-header">Contact</h3>

      <div class="card-block">
        <h3 class="card-title" id="ml">Paintown mailing list signup</h3>
        <p class="card-text">
          <a v-bind:href="mailinglist" class="btn btn-success">
            Click to Sign Up
          </a>
        </p>
      </div>

      <div class="card-block">
        <h3 class="card-title" id="issues">Issues, bug reporting, and/or problems</h3>
        <p class="card-text">
          <a v-bind:href="issues" class="btn btn-success">
            Click here
          </a>
        </p>
      </div>

      <div class="card-block">
        <h3 class="card-title" id="irc">IRC: #paintown on irc.freenode.net</h3>
        <p class="card-text">
          <a v-bind:href="irc" class="btn btn-success">
            Click to go straight to the channel
          </a>
        </p>
      </div>

      <div class="card-block">
        <h3 class="card-title" id="github">GitHub</h3>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm">
              <hr>
              <a href="https://www.github.com/kazzmir" class="ng-binding">
                <img width="32" height="32" src="https://avatars.githubusercontent.com/u/333508?v=3">&nbsp;
                kazzmir
              </a>
              <hr>
            </div>
            <div class="col-sm">
              <hr>
              <a href="https://www.github.com/juvinious" class="ng-binding">
                <img width="32" height="32" src="https://avatars.githubusercontent.com/u/581120?v=3">&nbsp;
                juvinious
              </a>
              <hr>
            </div>
          </div>
        </div>
      </div>

      <div class="card-block">
        <h3 class="card-title"><a href="#" v-scroll-to="'#top'" class="btn btn-info float-right">Back to top</a></h3>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      mailinglist: 'https://lists.sourceforge.net/lists/listinfo/paintown-list',
      issues: 'https://github.com/kazzmir/paintown/issues',
      irc: 'http://webchat.freenode.net/?randomnick=1&channels=paintown'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
