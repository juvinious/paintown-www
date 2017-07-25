<template>
  <b-navbar fixed="bottom" variant="inverse" type="inverse">
    <p class="navbar-text float-right">
      Copyright {{current_year}}&nbsp;&copy;&nbsp;
      <iframe
        src="http://ghbtns.com/github-btn.html?user=kazzmir&type=follow"
        allowtransparency="true"
        frameborder="0"
        scrolling="0"
        width="125"
        height="20">
      </iframe>
    </p>
  </b-navbar>
</template>

<script>
  export default {
    name: 'bottomNavbar',
    data () {
      return {
        'current_year': new Date().getFullYear()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-text {
  color: white;
  font-weight: bolder;
  text-align: right;
  margin-bottom: 0;
}
</style>
