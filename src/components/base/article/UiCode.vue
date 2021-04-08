<template>
  <div class="ui-code" v-highlight>
    <pre><code><span class="code-block code-block-margin" v-for="(code, index) in dataObj" :key="index">{{dealNotes(code.notes)}}<span class="code-block">{{dealCodeText(code.text)}}</span><span v-if="code.print">{{dealNotes(code.print)}}</span></span></code></pre>
  </div>
</template>

<script>
var beautify = require('js-beautify').js
export default {
  name: 'UiCode',
  data () {
    return {
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
    },
    dealNotes (notes) {
      return notes + '\n'
    }
  }
}
</script>

<style>
.ui-code {
  line-height: 20px;
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
.hljs-type {
  color: #06d4f5;
}
.code-block {
  display: block;
}
.code-block-margin {
  margin: 10px 0;
}

</style>
