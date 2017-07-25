<template>
  <div class="home">
    <!--<div class="block" ng-style="{'background':'black url(assets/images/akuma-anim-320.gif) center center', 'background-size': '100% auto', 'background-repeat': 'no-repeat'}">-->
    <div class="block">
      <div class="paintown-header">
        <div class="paintown-logo">
          <a href="#/home">
            <h1><img src="../assets/paintown-logo-cropped-lg-trans.png" class="media img-rounded img-responsive" alt="Paintown"  /></h1>
          </a>
        </div>
      </div>
      <div class="container">
        <p class="lead">
          If you are looking for a side-scrolling, action packed game like you used to play or if you are looking for an extensible engine to write your own game, look no further
        </p>
        <ul class="list-inline social-buttons">
          <li>
            <iframe
              src="http://ghbtns.com/github-btn.html?user=kazzmir&amp;type=follow&amp;count=true"
              allowtransparency="true"
              frameborder="0"
              scrolling="0"
              width="150"
              height="20">
            </iframe>
          </li>
          <li>
            <iframe
              src="http://ghbtns.com/github-btn.html?user=juvinious&amp;type=follow&amp;count=true"
              allowtransparency="true"
              frameborder="0"
              scrolling="0"
              width="150"
              height="20">
            </iframe>
          </li>
        </ul>
        <div class="btn-group" role="group">
          <a href="http://sourceforge.net/projects/paintown/files/paintown/3.6.0/paintown-win32-3.6.0.exe/download" class="btn btn-large btn-windows" role="button">
            <i class="fa fa-windows"></i>
            Windows Installer
          </a>
        </div>
        <div class="btn-group" role="group">
          <a href="http://sourceforge.net/projects/paintown/files/paintown/3.6.0/paintown-3-6-0.dmg/download" class="btn btn-large btn-osx" role="button">
            <i class="fa fa-apple"></i>
            OSX Snow Leopard
          </a>
        </div>
        <div class="btn-group" role="group">
          <a href="https://github.com/kazzmir/paintown/archive/master.tar.gz" class="btn btn-large btn-source" role="button">
            <i class="fa fa-code"></i>
            Source Code
          </a>
        </div>
      </div>
      <div class="row attract">
        <!--<div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
            <img src="assets/images/akuma-anim-320.gif" class="center-block">
        </div>-->
        <div style="width: 450px; margin: 0 auto;">
          <img class="gfyitem" data-expand="true" data-id="IlliterateSoulfulAvocet"/>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="marketing">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="page-header">
              <h4><i class="fa fa-thumbs-up"></i> BSD License</h4>
            </div>
            <p>
              Redistributable and open
            </p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="page-header">
              <h4><i class="fa fa-magic"></i> Flexible backend</h4>
            </div>
            <p>
              Low CPU and GPU Requirements with backend support with multiple libraries:
            <ul>
              <li><a href="http://alleg.sourceforge.net/">Allegro    &raquo;</a></li>
              <li><a href="https://www.libsdl.org/">SDL    &raquo;</a></li>
              <li>Music Support - Mod, S3M, XM, IT, MP3, OGG and many more Modules</li>
              <li>Fonts - Freetype2 and image based</li>
              <li>Images - png and jpeg</li>
            </ul>
            </p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="page-header">
              <h4><i class="fa fa-retweet"></i> Network</h4>
            </div>
            <p>
              Network enabled modes
            <ul>
              <li>Paintown</li>
              <li>Preliminary MUGEN support <em>(Still buggy)</em></li>
              <li>IRC integration</li>
              <li>Extensible and re-usable network interface</li>
            </ul>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="page-header">
              <h4><i class="fa fa-circle"></i> Scripting</h4>
            </div>
            <ul>
              <li>Python</li>
              <li>Ruby</li>
              <li>Scheme like configuration files</li>
              <li>Extensible to easily implement others</li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="page-header">
              <h4><i class="fa fa-flag"></i> Various Gameplay Engines and Modes</h4>
            </div>
            <ul>
              <li>Paintown Engine</li>
              <li>M.U.G.E.N Engine</li>
              <li>Platformer Engine</li>
              <li>Asteroid Demo</li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="page-header">
              <h4><i class="fa fa-asterisk"></i> Ports to Many Systems</h4>
            </div>
            <ul>
              <li>Linux</li>
              <li>Windows</li>
              <li>OSX</li>
              <li>Android</li>
              <li>Wii</li>
              <li>PS3</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row attract">
        <div style="width: 450px; margin: 0 auto;">
          <img class="gfyitem" data-expand="true" data-id="MarriedAlarmedBear"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~bootstrap/scss/bootstrap.scss";

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.block {
  width: 100%;
  //#gradient > .vertical(black, white);
  color: white;
  padding: 2.5em 1.5em 1.5em;

/*@media @desktop, @desktop-xl {
  padding: 1.5em 1.5em 1.5em;
}*/

  .paintown-header {
  //@media @mobile, @tablet {
  @include media-breakpoint-between(xs, md){
    display: none;
  }
  //}
  }

  .container {
    text-align: center;
  .lead {
    font-size: 24px;
    line-height: 1.25;
  }
  .btn-group {
    display: table;
    margin: 1em auto 0;
  /*@media @desktop, @desktop-xl {
    margin: 1em 0 0;
    display: inline-block;
  }*/
    .btn {
      font-size: 21px;
      padding: 14px 24px;
    }
    .btn-windows {
      background-color: orangered;
      border-color: orangered;
    }
    .btn-osx {
      background-color: orange;
      border-color: orange;
    }
    .btn-source {
      background-color: yellow;
      border-color: yellow;
    }
  }
}

.attract {
img {
  width: 100%;
}
}
}

.marketing {
.row {
  margin-bottom: 10px;
  padding: 0;
  background: white;
  /*color: white;*/
  border-radius: 15px;
.page-header {
  color: #333;
  border-bottom-color: #333;
}
}

.row:last-child {
  margin-bottom: 0;
}

h4 [class*=" icon-"], h4 [class^="icon-"] {
  margin-right: 5px;
  vertical-align: -10%;
  font-size: 28px;
  line-height: 1;
}
}



</style>
