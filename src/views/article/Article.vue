<template>
  <div class="article-page">
    <BaseArticle :article="article"></BaseArticle>
  </div>
</template>

<script>
import BaseArticle from '../../components/ui/BaseArticle.vue'
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
  watch: {
    $route (to, from) {
      const id = this.$route.params.id
      getJson(`static/article/${id}.json`).then(res => {
        console.log(res.data)
        this.article = res.data
      })
    }
  },
  created () {
    const id = this.$route.params.id
    getJson(`static/article/${id}.json`).then(res => {
      console.log(res.data)
      this.article = res.data
    })
  },
  methods: {
    getArticleData () {
      const id = this.$route.params.id
      getJson(`static/article/${id}.json`).then(res => {
        console.log(res.data)
        this.article = res.data
      })
    }
  }
}
</script>
