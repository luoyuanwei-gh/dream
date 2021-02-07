<template>
  <div class="com-layout">
    <div class="com-header"></div>
    <div class="com-main">
      <div class="com-menu">
        <UiMenu></UiMenu>
      </div>
      <div class="com-content">
        <el-tabs
          type="border-card"
          v-model="activeTabPath"
          class="tab-content"
          closable
          @tab-remove="tabRemove"
          @tab-click="tabClick()">
          <el-tab-pane
            v-for="tab in contentTabs"
            :key="tab.code"
            :label="tab.name"
            :name="tab.path"
            >
          </el-tab-pane>
          <UiBreadcrumb class="breadcrumb-box" v-if="breadcrumb.length > 0"></UiBreadcrumb>
          <router-view class="content-view"></router-view>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import UiMenu from '../components/ui/UiMenu.vue'
import UiBreadcrumb from '../components/ui/UiBreadcrumb.vue'
import { mapState } from 'vuex'
export default {
  name: 'IndexLayout',
  components: {
    UiMenu,
    UiBreadcrumb
  },
  data () {
    return {
      activeTabPath: ''
    }
  },
  computed: {
    ...mapState({
      contentTabs: state => state.pageState.pageState.contentTabs,
      activeTab: state => state.pageState.pageState.currentPage.path,
      breadcrumb: state => state.pageState.pageState.breadcrumb
    })
  },
  watch: {
    activeTab: function (oldV, newV) {
      this.activeTabPath = oldV
    }
  },
  created () {
    this.activeTabPath = this.activeTab
  },
  methods: {
    tabRemove (targetName) {
      this.contentTabs.forEach((item, index) => {
        if (item.path === targetName) {
          this.$store.dispatch('pageState/removeContentTabs', index)
        }
      })
      if (this.contentTabs.length > 0) {
        this.$store.dispatch('pageState/setCurrentPage', this.contentTabs[0])
        this.$router.push(this.contentTabs[0].path)
      } else {
        this.$store.dispatch('pageState/setCurrentPage', {})
        this.$router.push('/')
      }
    },
    tabClick () {
      this.contentTabs.forEach((item) => {
        if (item.path === this.activeTabPath) {
          this.$store.dispatch('pageState/setCurrentPage', item)
        }
      })
      if (this.$route.path !== this.activeTabPath) {
        this.$router.push(this.activeTabPath)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.com-layout {
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction:  column;
}
.com-header {
  border: 1px solid #eee;
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 100;
  background: #fff;
}
.com-main {
  flex: 1;
  height: calc(100% - 81px);
  margin-top: 80px;
  display: flex;
  flex-direction: row;
}
.com-menu {
  width: 240px;
  height: calc(100vh - 80px);
  overflow: auto;
}
.com-content {
  flex: 1;
  height: 100%;
}
.content-view {
  height: calc(100vh - 180px);
  overflow: auto;
}
.tab-content{
  box-sizing: border-box;
  height: 100%;
}
/*修改滚动条样式*/
.content-view::-webkit-scrollbar{
  width:4px;
  height:10px;
  /**/
}
.content-view::-webkit-scrollbar-track{
  background: rgb(239, 239, 239);
  border-radius:2px;
}
.content-view::-webkit-scrollbar-thumb{
  background: #bfbfbf;
  border-radius:4px;
}
.content-view::-webkit-scrollbar-thumb:hover{
  background: #333;
}
.content-view::-webkit-scrollbar-corner{
  background: #179a16;
}
</style>
