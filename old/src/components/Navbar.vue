<template>
  <b-navbar toggleable class="pt-nav" type="inverse" variant="inverse" toggle-breakpoint="md" :sticky=true>

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <div class="navbar-brand">
      <span>
        <a :href="home">
          <img src="../assets/paintown-sm.png" alt="Paintown" />
        </a>
      </span>
      <small>
        <a :href="github" target="_blank">
          {{current_version}}
        </a>
      </small>
    </div>

    <b-collapse is-nav id="nav_collapse" ref="collapse">

      <b-nav is-nav-bar>
        <b-nav-item to="/#" @click="close"><icon name="home"></icon> Home</b-nav-item>
        <b-nav-item to="/about" @click="close"><icon name="info-circle"></icon> About</b-nav-item>
        <b-nav-item to="/downloads" @click="close"><icon name="download"></icon> Downloads</b-nav-item>
        <b-nav-item to="/development" @click="close"><icon name="code"></icon> Development</b-nav-item>
        <b-nav-item to="/media" @click="close"><icon name="file"></icon> Screenshots & Videos</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <span style="font-weight: bold;"><icon name="question-circle"></icon> Support</span>
          </template>
          <b-dropdown-item to="/contact" @click="close"><icon name="envelope"></icon> Contact</b-dropdown-item>
          <b-dropdown-item href="http://webchat.freenode.net/?randomnick=1&channels=paintown" target="_blank"><icon name="comments"></icon> IRC</b-dropdown-item>
          <b-dropdown-item href="https://github.com/kazzmir/paintown/issues" target="_blank"><icon name="bug"></icon> Report a Bug (Issues)</b-dropdown-item>
          <b-dropdown-item href="https://github.com/kazzmir/paintown/wiki" target="_blank"><icon name="book"></icon> Wiki</b-dropdown-item>
          <b-dropdown-item href="https://www.paypal.com/cgi-bin/webscr?item_name=Donation+to+PainTown&cmd=_donations&business=workmin%40ccs.neu.edu" target="_blank"><icon name="credit-card"></icon> Donate</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        'home': '/#/#',
        'github': 'http://www.github.com/kazzmir/paintown',
        'current_version': '3.6.1'
      }
    },
    methods: {
      close () {
        if (this.$refs.collapse.show) {
          this.$refs.collapse.toggle()
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navbar-brand {
    color: white;
    padding-top: 10px;
    margin-top: 0;
    small {
      font-size: 60%;
      a, a:hover, a:focus {
        color: #ddd; //$med-blue;
        font-weight: bolder;
      }
    }
  }

  .dropdown-item.active, .dropdown-item:active {
      background-color: gray;
  }

  .navbar-inverse .navbar-nav .nav-link {
    font-weight: bolder;
  }

  .pt-nav {
    background-color: black !important;
    border-radius: 0;
    border: none white;
  }

</style>
