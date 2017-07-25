<template>
  <div class="home">
    <!--<div class="block" ng-style="{'background':'black url(assets/images/akuma-anim-320.gif) center center', 'background-size': '100% auto', 'background-repeat': 'no-repeat'}">-->
    <div class="block">
      <div class="paintown-header">
        <div class="paintown-logo">
          <a href="/#/#">
            <h1><img src="../assets/paintown-logo-cropped-lg-trans.png" class="media img-rounded img-responsive" alt="Paintown"  /></h1>
          </a>
        </div>
      </div>
      <div class="container">
        <p class="lead" style="text-align:center;">
          If you are looking for a side-scrolling, action packed game like you used to play or if you are looking for an extensible engine to write your own game, look no further
        </p>
        <ul class="list-inline social-buttons" style="text-align: center;">
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
        <b-button-group>
          <b-button href="http://sourceforge.net/projects/paintown/files/paintown/3.6.0/paintown-win32-3.6.0.exe/download" class="btn btn-large btn-windows" role="button">
            <i class="fa fa-windows"></i>
            Windows Installer
          </b-button>
          <b-button href="http://sourceforge.net/projects/paintown/files/paintown/3.6.0/paintown-3-6-0.dmg/download" class="btn btn-large btn-osx" role="button">
            <i class="fa fa-apple"></i>
            OSX Snow Leopard
          </b-button>
          <b-button href="https://github.com/kazzmir/paintown/archive/master.tar.gz" class="btn btn-large btn-source" role="button">
            <i class="fa fa-code"></i>
            Source Code
          </b-button>
        </b-button-group>
      </div>
    </div>

    <div class="container">
      <div class="row attract">
        <div class="col-sm-12 col-md-6">
          <div style="width: 320px; margin: 0 auto;">
            <img class="gfyitem" data-expand="true" data-id="IlliterateSoulfulAvocet"/>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div style="width: 320px; margin: 0 auto;">
            <img class="gfyitem" data-expand="true" data-id="MarriedAlarmedBear"/>
          </div>
        </div>
      </div>
      <div class="row">&nbsp;</div>
      <div class="row">
        <div class="col-sm-12 col-lg-4">
          <div class="card">
            <h4 class="card-header"><icon name="flag"></icon> Various Gameplay Engines and Modes</h4>
            <!--<img class="card-img" src="../assets/mugen.png"/>-->
            <div class="card-block">
              <p class="card-text">
                Low CPU and GPU Requirements with backend support with multiple libraries:
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Paintown Engine</li>
              <li class="list-group-item">M.U.G.E.N Engine</li>
              <li class="list-group-item">Platformer Engine</li>
              <li class="list-group-item">Asteroid Demo</li>
            </ul>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4">
          <div class="card">
            <h3 class="card-header"><icon name="magic"></icon> Flexible backend</h3>
            <div class="card-block">
              <p class="card-text">
                Low CPU and GPU Requirements with backend support with multiple libraries
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Music Support - Mod, S3M, XM, IT, MP3, OGG and many more Modules</li>
              <li class="list-group-item">Fonts - Freetype2 and image based</li>
              <li class="list-group-item">Images - png and jpeg</li>
            </ul>
            <div class="card-block">
              <a href="http://alleg.sourceforge.net" class="card-link">Allegro    &raquo;</a>
              <a href="https://www.libsdl.org" class="card-link">SDL    &raquo;</a>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4">
          <div class="card">
            <h3 class="card-header"><icon name="retweet"></icon> Network</h3>
            <div class="card-block">
              <p class="card-text">
                Network enabled modes
              </p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Paintown</li>
                <li class="list-group-item">Preliminary MUGEN support <em>(Still buggy)</em></li>
                <li class="list-group-item">IRC integration</li>
                <li class="list-group-item">Extensible and re-usable network interface</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        &nbsp;
      </div>
      <div class="row">
        <div class="col-sm-12 col-lg-4">
          <div class="card">
            <h3 class="card-header"><icon name="circle"></icon> Scripting</h3>
            <div class="card-block">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Python</li>
                <li class="list-group-item">Ruby</li>
                <li class="list-group-item">Scheme like configuration files</li>
                <li class="list-group-item">Extensible to easily implement others</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4">
          <div class="card">
            <h4 class="card-header"><icon name="asterisk"></icon> Ports to Many Systems</h4>
            <div class="card-block">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Linux</li>
                <li class="list-group-item">Windows</li>
                <li class="list-group-item">OSX</li>
                <li class="list-group-item">Android</li>
                <li class="list-group-item">Wii</li>
                <li class="list-group-item">PS3</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4">
          <div class="card">
            <h3 class="card-header"><icon name="thumbs-up"></icon> BSD License</h3>
            <div class="card-block">
              <p class="card-text">Redistributable and open.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">&nbsp;</div>
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
    text-align: center;

    /*@media @desktop, @desktop-xl {
      padding: 1.5em 1.5em 1.5em;
    }*/

    .paintown-header {
      img {
        margin: 0 auto;
      }
      //@media @mobile, @tablet {
      @include media-breakpoint-between(xs, sm){
        display: none;
      }
      //}
    }

    .container {
      text-align: left;
      margin-bottom: 1em;
      .lead {
        font-size: 24px;
        line-height: 1.25;
      }
      .social-buttons {
        li {
        }
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
      margin-top: 1em;
      margin-bottom: 1em;
    }
  }

  .marketing {
    margin-bottom: 1em;
    border-radius: 15px;
    .row {
      margin-bottom: 10px;
      border-radius: 15px;
      background: white url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVQIW2M8f/78f0NDQ0YGKIAzMARgKjFUAABgXQgFprntcgAAAABJRU5ErkJggg==);
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
    h4 {
      margin-bottom: 1em;
    }
  }



</style>
