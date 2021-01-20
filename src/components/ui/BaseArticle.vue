<template>
  <div class="article">
    <UiTitle :titleInfo="article.title"></UiTitle>
    <div class="article-info">
      <span>{{article.author}}</span>
      <span>{{article.time}}</span>
    </div>
    <div v-for="(item, index) in article.content" :key="index">
      <UiSubhead class="article-item" v-if="item.type === 'subhead'" :dataObj="item.data">{{item.data}}</UiSubhead>
      <UiImage class="article-item" v-else-if="item.type === 'image'" :dataObj="item.data">{{item.data}}</UiImage>
      <UiParagraph class="article-item" v-else-if="item.type === 'paragraph'" :dataObj="item.data">{{item.data}}</UiParagraph>
      <UiCode class="article-item" v-else-if="item.type === 'code'" :dataObj="item.data">{{item.data}}</UiCode>
      <UiList class="article-item" v-else-if="item.type === 'list'" :dataObj="item.data">{{item.data}}</UiList>
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

export default {
  name: 'BaseArticle',
  components: {
    UiTitle,
    UiSubhead,
    UiImage,
    UiParagraph,
    UiCode,
    UiList
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
</style>
