<template>
  <div class="ui-code" v-highlight>
    <pre><code><span class="code-block code-block-margin" v-for="(code, index) in dataObj" :key="index"><span class="note-text" v-if="code.notes">{{dealNotes(code.notes)}}</span><span class="code-block">{{dealCodeText(code.text)}}</span><span class="note-text" v-if="code.print">{{dealNotes(code.print)}}</span></span></code></pre>
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
      console.log(notes + '\n')
      return notes + '\n'
    }
  }
}
</script>

<style>
.ui-code {
  line-height: 20px;
  background: #b4c1ef4f;
  padding: 20px;
  text-align: left;
  border-radius: 8px;
}
.code-block {
  display: block;
}
.code-block-margin {
  margin: 10px 0;
}
.hljs {
  color: #fff;
  background: #000;
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
.hljs-comment {
  color: #b1d8a8;
}
.hljs-type {
  color: #06d4f5;
}
.hljs-built_in {
  color:#A6E22E;
}
.hljs-title,
.hljs-params,
.code-block,
.hljs-number,
.hljs-string {
  color: #fbbff9;
}
.note-text,
.note-text > span{
  color: #8b9489!important;
}
.hljs-literal,
.hljs-symbol,
.hljs-bullet,
.hljs-meta,
.hljs-link {
    color: #dcc731;
}
</style>
