<template>
  <div class="ui-code" v-highlight>
    <pre><code>{{codeText}}</code></pre>
  </div>
</template>

<script>
var beautify = require('js-beautify').js
export default {
  name: 'UiCode',
  data () {
    return {
      codeText: ''
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
  created () {
    this.codeText = beautify(this.dataObj.text)
    console.log(this.codeText)
  },
  methods: {
  }
}
</script>

<style>
.ui-code {
  background: #444;
  padding: 20px;
  text-align: left;
  border-radius: 8px;
}
.hljs {
  color: #fff;
  background: #444;
  border-radius: 6px;
}
.hljs-tag,
.hljs-name,
.hljs-attr {
  color: #ccff00;
}
.hljs-selector-class {
  color: #888;
}
.hljs-attribute {
  color: #ccff00;
}
.hljs-keyword {
  color: #a6e22e;
}
.hljs-number {
  color: #ae81ff;
}
</style>
