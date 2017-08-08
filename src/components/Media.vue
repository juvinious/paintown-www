<template>

  <div class="container pt-container" id="top">
    <div class="card">
      <h3 class="card-header">Media</h3>

      <div class="card-block">
        <h4 class="card-title">Screenshots and Videos</h4>
        <hr />
        <ul class="list-group">
          <li class="list-group-item"><a href="#" v-scroll-to="'#screenshots'">Screenshots</a></li>
          <li class="list-group-item"><a href="#" v-scroll-to="'#videos'">Videos</a></li>
        </ul>
      </div>

      <div class="card-block">
        <h3 class="card-title" id="screenshots">Screenshots<a href="#" v-scroll-to="'#top'" class="btn btn-info float-right">Back to top</a></h3>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm" v-for="(screenshot, index) in screenshots">
              <img v-bind:src="screenshot" class="img-thumbnail" />
            </div>
          </div>
        </div>
      </div>

      <div class="card-block">
        <h3 class="card-title" id="videos">Videos<a href="#" v-scroll-to="'#top'" class="btn btn-info float-right">Back to top</a></h3>
        <div class="container">
          <div class="row justify-content-center" v-for="(vids, index) in videos">
            <div class="col-sm" v-for="(video, index) in vids">
              <h5>{{ video.title }}</h5>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" v-bind:src="video.link" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'media',
  data () {
    return {
      screenshots: [
        require('../assets/scr1.png'),
        require('../assets/scr2.png'),
        require('../assets/scr3.png')
      ],
      videos: [
        [
          {
            title: '3.3.1 tech demo',
            link: '//www.youtube.com/embed/Imk8dR7Gsek'
          },
          {
            title: 'Running on the PSP',
            link: '//www.youtube.com/embed/ysBRtz3wC1Y'
          }
        ],
        [
          {
            title: 'Running on Dingux',
            link: '//www.youtube.com/embed/7wTpiVu8taA'
          },
          {
            title: 'Running on the Wii',
            link: '//www.youtube.com/embed/GS49ecqpUtk'
          }
        ]
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
