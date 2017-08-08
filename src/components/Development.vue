<template>

  <div class="container pt-container" id="top">
    <div class="card">
      <h3 class="card-header">Development</h3>

      <div class="card-block">
        <h4 class="card-title">Information about development and GitHub Repositories</h4>
        <hr />
        <ul class="list-group">
          <li class="list-group-item" v-for="(commits, commit_name) in state.commits"><a href="#" v-scroll-to="'#' + getAnchor(commit_name)">Recent commits in {{commit_name}}</a></li>
          <li class="list-group-item"><a href="#" v-scroll-to="'#faq'">FAQ</a></li>
          <li class="list-group-item"><a href="#" v-scroll-to="'#gource'">Source Visualization</a></li>
        </ul>
      </div>

      <div class="card-block" v-for="(commits, repository_name) in state.commits">
        <h3 class="card-title" v-bind:id="getAnchor(repository_name)">Recent commits in {{repository_name}}<a href="#" v-scroll-to="'#top'" class="btn btn-info float-right">Back to top</a></h3>
        <hr />
        <p class="card-text">
          <a v-bind:href="repository[repository_name]" class="btn btn-secondary">
            <icon name="github" target="_blank"></icon> {{ repository_name }} GitHub Repository
          </a>
        </p>
        <table class="table table-striped table-sm">
          <thead class="thead-inverse">
            <tr>
              <th>Date/Time</th>
              <th>Commit</th>
              <th><span class="float-right">Author</span></th>
              <th><span class="float-right">Avatar</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="index in maxCommits">
              <th scope="row">{{commits[index].date}}</th>
              <td>
                <a v-bind:href="commits[index].link">{{commits[index].sha.substr(0,6)}}</a></td>
              <td>
                <a v-bind:href="commits[index].author.html_url">
                  <button type="button" class="btn btn-outline-success float-right">
                    <icon name="github"></icon>&nbsp;&nbsp;&nbsp;&nbsp;{{commits[index].author.login}}
                  </button>
                </a>
              </td>
              <td>
                <img v-bind:src="commits[index].author.avatar_url" class="rounded float-right" width="35" height="35" />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-success float-right" data-toggle="modal" data-target="#exampleModalLong">
          View more commits
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">All {{ repository_name }} commits</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>
                  <a type="button" class="btn btn-info" v-bind:href="repository[repository_name] + '/commits'">View commits on GitHub</a>
                </p>
              </div>
              <div class="modal-body">
                <div class="card" v-for="commit in commits" style="margin-bottom: .5em;">
                  <div class="card-header">
                    <a v-bind:href="commit.link">{{commit.sha}}</a>
                  </div>
                  <div class="card-block">
                    <h4 class="card-title">
                        {{ commit.date }}
                    </h4>
                    <p class="card-text">{{commit.message}}</p>
                  </div>
                  <div class="card-footer text-muted">
                    <strong>Commit by: </strong><a v-bind:href="commit.author.html_url" class="card-link">{{ commit.author.login }}</a>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>



      </div>

      <div class="card-block">
        <h3 class="card-title" id="faq">FAQ<a href="#" v-scroll-to="'#top'" class="btn btn-info float-right">Back to top</a></h3>
        <table class="table table-striped table-sm">
          <thead class="thead-inverse">
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="fa in faq">
            <th scope="row">{{fa.q}}</th>
            <th>{{fa.a}}</th>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="card-block">
        <h3 class="card-title" id="gource">Source Visualization with Gource<a href="#" v-scroll-to="'#top'" class="btn btn-info float-right">Back to top</a></h3>
        <hr />
        <ul class="list-group">
          <li class="list-group-item" v-for="vid in gource">
            <h4>{{ vid.year }}</h4>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" v-bind:src="vid.link" allowfullscreen></iframe>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'development',
  data () {
    return {
      repository: {
        'Paintown': 'https://github.com/kazzmir/paintown',
        'R-Tech1': 'https://github.com/kazzmir/r-tech1'
      },
      maxCommits: 10,
      anchorMap: {},
      state: this.$root.$data.dataStore.state,
      faq: [
        {
          q: 'What language is Paintown written in?',
          a: 'C++'
        },
        {
          q: 'Is python a requirement to run Paintown?',
          a: 'No, python is optional at this point and definitely not required for many game modes.'
        },
        {
          q: 'Is the source code to Paintown based on another engine?',
          a: 'No, Paintown was inspired by various other projects but the code is 100% original.'
        }
      ],
      gource: [
        {
          year: '2013',
          link: '//www.youtube.com/embed/zmzFOvIEFxo?wmode=transparent'
        },
        {
          year: '2012',
          link: '//www.youtube.com/embed/0xiV7bSxxuY?wmode=transparent'
        },
        {
          year: '2011',
          link: '//www.youtube.com/embed/Iz49GdQ3SA8?wmode=transparent'
        },
        {
          year: '2010',
          link: '//www.youtube.com/embed/W3z46OqbRQ4?wmode=transparent'
        }
      ]
    }
  },
  watch: {
    commits () {
      this.state = this.$root.$data.dataStore.state
    }
  },
  methods: {
    getAnchor (str) {
      if (!(str in this.anchorMap)) {
        this.anchorMap[str] = 'section-' + Object.keys(this.anchorMap).length.toString()
      }
      return this.anchorMap[str]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
