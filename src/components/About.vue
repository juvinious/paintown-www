<template>

  <div class="container pt-container">
    <div class="card">
      <h3 class="card-header">Paintown is a free and open source 2-d fighting game</h3>
      <div class="row">
        <div class="col-md col-lg-4">
          <div class="card-block">
            <div class="embed-responsive embed-responsive-4by3">
              <iframe class="embed-responsive-item" src="//www.youtube.com/embed/Imk8dR7Gsek" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="col-md col-lg-8">
          <div class="card-block">
            <h4 class="card-title">Why PainTown?</h4>
            <hr class="my-4" />
            <p class="card-text">
              If you are looking for a side-scrolling, action packed game like you used to play or if you are looking for an extensible engine to write your own game, look no further. Paintown supports user created content through a mod system and user defined functionality through scripting.
            </p>
            <p class="card-text">
              Paintown also supports an implementation of M.U.G.E.N. Our goal is to be 100% compatible with M.U.G.E.N 2002.04.14 beta as well as supporting any new updates in the 1.0 version.
            </p>
            <p class="card-text">
              Paintown is completely open-source and we would love any contributions in the form of code, art, or donations. Give Paintown a try!
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md col-lg-4">
          <hr class="my-4" />
          <div class="card-block">
            <img class="img-fluid" src="../assets/scr3.jpg">
          </div>
        </div>
        <div class="col-md col-lg-8">
          <div class="card-block">
            <h4 class="card-title">Features</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">BSD License</li>
              <li class="list-group-item">Low CPU and GPU requirements</li>
              <li class="list-group-item">Network play</li>
              <li class="list-group-item">Dynamic lighting</li>
              <li class="list-group-item">Joystick support</li>
              <li class="list-group-item">mod/s3m/xm/it/mp3/ogg music modules</li>
              <li class="list-group-item">Scripting with python</li>
              <li class="list-group-item">M.U.G.E.N engine</li>
              <li class="list-group-item">Ports to many systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'about',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="scss">

</style>
