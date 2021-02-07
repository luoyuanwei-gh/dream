<template>
  <div class="article-page">
    <BaseArticle :article="article"></BaseArticle>
  </div>
</template>

<script>
import BaseArticle from '../../components/ui/BaseArticle.vue'
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
      this.id = this.$route.params.id
      this.getArticleData()
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getArticleData()
  },
  methods: {
    getArticleData () {
      this.article = {}
      this.$axios.get(`article/${this.id}`).then(res => {
        this.article = res.data.data
      })
    }
  }
}
</script>
