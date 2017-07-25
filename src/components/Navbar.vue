<template>
  <b-navbar toggleable class="pt-nav" type="inverse" variant="inverse">

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

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item to="/#">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/downloads">Downloads</b-nav-item>
        <b-nav-item to="/development">Development</b-nav-item>
        <b-nav-item to="/media">Screenshots & Videos</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <span style="font-weight: bold;">Support</span>
          </template>
          <b-dropdown-item to="/contact">Contact</b-dropdown-item>
          <b-dropdown-item href="http://webchat.freenode.net/?randomnick=1&channels=paintown" target="_blank">IRC</b-dropdown-item>
          <b-dropdown-item href="https://github.com/kazzmir/paintown/issues" target="_blank">Report a Bug (Issues)</b-dropdown-item>
          <b-dropdown-item href="https://github.com/kazzmir/paintown/wiki" target="_blank">Wiki</b-dropdown-item>
          <b-dropdown-item href="https://www.paypal.com/cgi-bin/webscr?item_name=Donation+to+PainTown&cmd=_donations&business=workmin%40ccs.neu.edu" target="_blank">Donate</b-dropdown-item>
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
        'home': '/',
        'github': 'http://www.github.com/kazzmir/paintown',
        'current_version': '3.6.1'
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
  .pt-nav {
    margin-bottom: 2em;
    background-color: black !important;
    border-radius: 0;
    border: none white;
  }

</style>
