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
import UiTitle from '../ui/article/UiTitle.vue'
import UiSubhead from '../ui/article/UiSubhead.vue'
import UiImage from '../ui/article/UiImage.vue'
import UiParagraph from '../ui/article/UiParagraph.vue'
import UiCode from '../ui/article/UiCode.vue'
import UiList from '../ui/article/UiList.vue'

import { AA } from '../../statics/test.js'

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
          title: '标题111',
          author: '键盘侠',
          time: '2021-1-12 09:12:02',
          content: [
            {
              type: 'table',
              data: {}
            },
            {
              type: 'subhead',
              data: {
                text: '小标题'
              }
            },
            {
              type: 'code',
              data: {
                type: 'html',
                text: AA
              }
            },
            {
              type: 'link',
              data: {
                text: '连接',
                url: 'https://www.baidu.com'
              }
            },
            {
              type: 'paragraph',
              data: {
                content: [
                  {
                    type: 'a',
                    text: '连接',
                    url: 'https://www.baidu.com'
                  },
                  {
                    isInline: true,
                    text: '我是正文描述信息2'
                  },
                  {
                    text: '我是正文描述信息3'
                  },
                  {
                    text: '我是正文描述信息3'
                  }
                ]
              }
            },
            {
              type: 'paragraph',
              data: {
                content: [
                  {
                    isInline: true,
                    text: '我是正文描述信息4'
                  }
                ]
              }
            },
            {
              type: 'image',
              data: {
                text: '图片',
                url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3762123163,3968954416&fm=26&gp=0.jpg'
              }
            }
          ]
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
    width: 1024px;
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
