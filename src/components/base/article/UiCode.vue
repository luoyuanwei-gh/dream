<template>
  <div class="ui-code" v-highlight>
    <pre><code>{{dataObj.text}}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'UiCode',
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
    analysisHtml () {
      console.log(this.dataObj.text)
    }
  }
}
</script>

<style>
.ui-code {
  background: #000;
  padding: 20px;
  text-align: left;
  border-radius: 8px;
}
.hljs {
  color: #fff;
  background: #000;
  border-radius: 6px;
}
.hljs-tag,
.hljs-name,
.hljs-attr {
  color: #0000ff;
}
.hljs-selector-class {
  color: #888;
}
.hljs-attribute {
  color: #0000ff;
}
.hljs-keyword {
  color: #a6e22e;
}
.hljs-number {
  color: #ae81ff;
}
</style>
