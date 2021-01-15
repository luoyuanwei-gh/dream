<template>
  <div class="article-page">
    <BaseArticle :article="article"></BaseArticle>
  </div>
</template>

<script>
import BaseArticle from '../../components/base/BaseArticle.vue'
import { getJson } from '@/api/index.js'

export default {
  name: 'Home',
  components: {
    BaseArticle
  },
  data () {
    return {
      article: {}
    }
  },
  beforeRouteUpdate (to, from, next) {
    const id = this.$route.query.id
    console.log(id)
  },
  created () {
    const id = this.$route.query.id
    console.log(id)
    getJson(`static/${id}.json`).then(res => {
      console.log(res.data)
      this.article = res.data
    })
  },
  methods: {
  }
}
</script>
