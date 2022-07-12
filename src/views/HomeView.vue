<template>
<div class="home">
  <button class="section-title">Current News</button>
  <div class="content-box">
    <div class="card-box" v-for="(article,i) in data" :key="i">
      <div class="card-image">
        <img src="../assets/violence-tracker-article.png" width="360" height="210"/>
      </div>
      <div class="card-info-box">
        <a :href="article?.link" style="text-decoration: none; color: inherit;" target="_blank"><p class="card-text">{{article?.text}}</p></a>
        <p class="card-footer">By {{getArticleSource(article?.id)}}</p>
      </div>
    </div>
  </div>
  <van-loading color="#0E1E32" class="loader" v-if="!data.length" size="100"/>
</div>
</template>

<script lang="ts">
export default {
  name: 'HomeView',
  props: ['data'],
  methods: {
    getArticleSource: function (id: string) : string {
      const hashMap: {[id:string]: string} = {
        JO: 'Jamaica Observer',
        NW: 'NationWide Radio',
        JL: 'Jamaica Loop',
        JS: 'Jamaica Star',
        RJ: 'RadioNews Jamaica'
      }
      return hashMap[id]
    }
  }
}

</script>
