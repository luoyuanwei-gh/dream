<template>
  <div class="article-page">
    <BaseArticle :article="article"></BaseArticle>
  </div>
</template>

<script>
import BaseArticle from '../../components/base/BaseArticle.vue'
import { bfcDesc } from '../../statics/article/html/bfc/index.js'
export default {
  name: 'Home',
  components: {
    BaseArticle
  },
  data () {
    return {
      article: bfcDesc
    }
  }
}
</script>
