<template>
  <div class="ui-paragraph" v-html="analysisParagraph()">
  </div>
</template>

<script>
export default {
  name: 'UiParagraph',
  data () {
    return {
    }
  },
  props: {
    dataObj: {
      default: function () {
        return {}
      },
      type: Object
    }
  },
  computed: {
  },
  methods: {
    analysisParagraph () {
      let paragraphHtml = ''
      if (this.dataObj.content) {
        this.dataObj.content.forEach(item => {
          paragraphHtml += this.getHtmlStr(item)
        })
      }
      return paragraphHtml
    },
    getHtmlStr (element) {
      let elStr = ''
      switch (element.type) {
        case 'bold':
          elStr = `<span class="text-bold">${element.text}</span>`
          break
        default:
          elStr = element.text
      }
      return elStr
    }
  }
}
</script>

<style>
.ui-paragraph {
  text-align: left;
  line-height: 28px;
}
.dis-inline {
  display: inline-block;
}
.link-a {
  text-decoration: none!important;
  color: blue;
}
</style>
