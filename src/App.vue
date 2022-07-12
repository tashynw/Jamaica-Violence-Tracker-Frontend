<template>
  <div class="app">
    <HomeNavbar/>
    <router-view :data="data"/>
    <HomeFooter />
  </div>
</template>
<script lang="ts">
  import HomeNavbar from '@/components/HomeNavbar.vue'
  import HomeFooter from '@/components/HomeFooter.vue'
  import axios, { AxiosResponse } from 'axios'
  export default {
    components: {
      HomeNavbar,
      HomeFooter
    },
    data: function () {
      return {
        data: []
      }
    },
    mounted () {
      axios.get('https://pristine-mount-rainier-47605.herokuapp.com/')
        .then((response: AxiosResponse) => {
          this.data = response.data
        })
    }
  }
</script>

<style>
body {
  margin: 0;
  background: #F1F2F3;
}
</style>
