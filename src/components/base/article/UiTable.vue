<template>
  <div class="ui-table">
    <el-table
        :data="dataObj.data"
        border
        stripe
        style="width: 100%;">
        <el-table-column type="expand" fixed="left" v-if="dataObj.expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <p style="margin-bottom: 6px;" v-for="expandItem in props.row.expand" :key="expandItem" v-html="expandItem"></p>
              <UiCode v-if="props.row.code" :dataObj="props.row.code"></UiCode>
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
import UiCode from './UiCode.vue'
export default {
  name: 'UiTable',
  components: {
    UiCode
  },
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
      console.log(this.dataObj)
    }
  }
}
</script>

<style>
</style>
