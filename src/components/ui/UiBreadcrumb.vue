<template>
  <div>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="breadcrumbItem in breadcrumb" :key="breadcrumbItem.code">
        {{breadcrumbItem.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'UiBreadcrumb',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      breadcrumb: state => state.pageState.pageState.breadcrumb
    })
  },
  methods: {
  }
}
</script>

<style>
</style>
