<template>
  <div class="ui-menu">
    <el-menu
      :default-active="currentPage.code"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu :index="menu.code" v-for="menu in menus" :key="menu.code">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span>{{menu.name}}</span>
        </template>
        <el-menu-item-group v-if="menu.children.length > 0">
          <el-menu-item :index="item.code" v-for="item in menu.children" :key="item.code" @click="goLink(item)">
            {{item.name}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'UiMenu',
  data () {
    return {
      menus: []
    }
  },
  computed: {
    ...mapState({
      contentTabs: state => state.pageState.pageState.contentTabs,
      currentPage: state => state.pageState.pageState.currentPage
    })
  },
  mounted () {
    this.getMenu()
  },
  methods: {
    getMenu () {
      this.$axios.get('http://localhost:3000/getMenu').then(res => {
        this.menus = res.data.menu
      })
    },
    goLink (item) {
      this.$store.dispatch('pageState/setCurrentPage', item)
      const isExit = this.contentTabs.some(itemTab => {
        return itemTab.code === item.code
      })
      if (this.$route.path !== item.path) {
        if (!isExit) {
          this.$store.dispatch('pageState/addContentTabs', item)
        }
        this.$router.push(item.path)
      }
    },
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    }
  }
}
</script>

<style scoped lang="scss">
.ui-menu {
  text-align: left;
}
</style>
