<template>
  <div class="navbar">
    <router-link to="/" style="text-decoration: none; color: inherit;"><img src="../assets/violence-tracker-logo.png" width="108" height="82"/></router-link>
    <div class="links">
      <router-link to="/" style="text-decoration: none; color: inherit;"><p class="navbar-link">Home</p></router-link>
      <router-link to="/about" style="text-decoration: none; color: inherit;"><p class="navbar-link">About</p></router-link>
    </div>
    <img src='https://i.ibb.co/xSn8kxs/image.png' alt="hamburger" width='70' height='70' class='hamburger' @click="handleMenu"/>
  </div>
  <div v-if="isHamburgerActive" class="navbar-dropdown">
    <router-link to="/" style="text-decoration: none; color: inherit;"><p class="navbar-link">Home</p></router-link>
    <router-link to="/about" style="text-decoration: none; color: inherit;"><p class="navbar-link">About</p></router-link>
  </div>
</template>
<script>
  export default {
    name: 'HomeNavbar',
    data: function () {
      return {
        isHamburgerActive: false
      }
    },
    methods: {
      handleMenu: function () {
        this.isHamburgerActive = !this.isHamburgerActive
      }
    }
  }
</script>
