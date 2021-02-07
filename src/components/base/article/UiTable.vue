<template>
  <div class="ui-table">
    <el-table
        :data="dataObj.data"
        border
        stripe
        style="width: 100%">
        <el-table-column v-for="(item, index) in dataObj.columns"
          :key="index"
          :prop="item.prop"
          :label="item.label">
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  name: 'UiTable',
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
