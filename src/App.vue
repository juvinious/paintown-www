<template>
  <div id="app">

    <!-- Navigation -->
    <navbar></navbar>

    <!-- main -->
    <div class="content">
      <router-view></router-view>
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
</style>
