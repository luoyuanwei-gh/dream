<template>
  <div class="ui-code" v-highlight>
    <pre><code>{{dataObj.text}}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'UiTitle',
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
  background: #d0d0d0;
  padding: 20px;
  text-align: left;
}
.hljs {
  color: #888;
  background: #eee;
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
</style>
