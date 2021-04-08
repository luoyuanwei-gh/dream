<template>
  <div class="ui-code" v-highlight>
    <pre><code><span class="code-block" v-for="(code, index) in dataObj" :key="index">{{code.notes}}<span class="code-block">{{dealCodeText(code.text)}}</span></span></code></pre>
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
        return []
      },
      type: Array
    }
  },
  computed: {
  },
  created () {
    console.log(this.dataObj)
  },
  methods: {
    dealCodeText (code) {
      return beautify(code)
    }
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
.hljs-comment {
  color: #b1d8a8;
}
.code-block {
  display: block;
  margin-bottom: 10px;
}
.margin-bottom-10 {
  margin-bottom: 10px;
}
</style>
