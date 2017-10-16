<template>
  <div id="app">

    <!-- Navigation -->
    <navbar></navbar>

    <!-- main -->
    <div class="content">
      <transition name="router" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <router-view></router-view>
      </transition>
    </div>

    <!-- Footer -->
    <bottomNavbar></bottomNavbar>

  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
import bottomNavbar from './components/BottomNavbar.vue'
export default {
  name: 'app',
  components: {
    navbar,
    bottomNavbar
  }
}
</script>

<style lang="scss">
  @import '~AnimateCSS';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
  .content {
    background: linear-gradient(to bottom, #000 0, #fff 100%) repeat-x;
    padding-bottom: 5em;
  }


  .pt-container {
    padding-top: 5em;
  }
</style>
