<template>
  <div class="ui-table">
    <el-table
        :data="dataObj.data"
        max-height="400"
        border
        stripe
        style="width: 100%">
        <el-table-column type="expand" fixed="left" v-if="dataObj.expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <p style="margin-bottom: 6px;" v-for="expandItem in props.row.expand" :key="expandItem" v-html="expandItem"></p>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column v-for="(item, index) in dataObj.columns"
          fixed
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width">
          <template slot-scope="scope">
            <p v-html="scope.row[item.prop]"></p>
          </template>
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
