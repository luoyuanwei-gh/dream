<template>
  <div class="article">
    <UiTitle :titleInfo="article.title"></UiTitle>
    <div class="article-info">
      <span>{{article.author}}</span>
      <span>{{article.time}}</span>
    </div>
    <div v-for="(item, index) in article.content" :key="index">
      <UiSubhead class="article-item" v-if="item.type === 'subhead'" :dataObj="item.data"></UiSubhead>
      <UiImage class="article-item" v-else-if="item.type === 'image'" :dataObj="item.data"></UiImage>
      <UiParagraph class="article-item" v-else-if="item.type === 'paragraph'" :dataObj="item.data"></UiParagraph>
      <UiCode class="article-item" v-else-if="item.type === 'code'" :dataObj="item.data"></UiCode>
      <UiList class="article-item" v-else-if="item.type === 'list'" :dataObj="item.data"></UiList>
      <UiTable class="article-item" v-else-if="item.type === 'table'" :dataObj="item.data"></UiTable>
    </div>
  </div>
</template>

<script>
import UiTitle from '../base/article/UiTitle.vue'
import UiSubhead from '../base/article/UiSubhead.vue'
import UiImage from '../base/article/UiImage.vue'
import UiParagraph from '../base/article/UiParagraph.vue'
import UiCode from '../base/article/UiCode.vue'
import UiList from '../base/article/UiList.vue'
import UiTable from '../base/article/UiTable.vue'

export default {
  name: 'BaseArticle',
  components: {
    UiTitle,
    UiSubhead,
    UiImage,
    UiParagraph,
    UiCode,
    UiList,
    UiTable
  },
  data () {
    return {
    }
  },
  props: {
    article: {
      default: function () {
        return {
        }
      },
      type: Object
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
.article {
  margin: 0 auto;
  max-width: 1024px;
}
.article-info {
  margin: 20px 0;
}
.article-info span {
  margin: 0 20px;
}
.article-item {
  margin-bottom: 20px;
}
a {
  color: #5b60f7;
  text-decoration: none;
}
.text-bold {
  font-weight: bold;
}
</style>
