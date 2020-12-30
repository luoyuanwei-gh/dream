<template>
  <div class="com-layout">
    <div class="com-header"></div>
    <div class="com-main">
      <div class="com-menu">
        <UiMenu></UiMenu>
      </div>
      <div class="com-content">
        <el-tabs type="border-card" v-model="activeTabPath" class="tab-content" closable @tab-remove="tabRemove" @tab-click="tabClick()">
          <el-tab-pane
            v-for="tab in contentTabs"
            :key="tab.code"
            :label="tab.name"
            :name="tab.path"
            >
            <UiBreadcrumb></UiBreadcrumb>{{activeTabPath}}
          </el-tab-pane>
          <router-view></router-view>
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
      activeTab: state => state.pageState.pageState.currentPage.path
    })
  },
  watch: {
    activeTab: function (oldV, newV) {
      console.log(oldV, newV)
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
      if (this.$route.path !== '/' + this.activeTabPath) {
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
}
.com-main {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.com-menu {
  width: 240px;
  height: calc(100vh - 80px);
  overflow: auto;
  border-right: 1px solid #ddd;
}
.com-content {
  flex: 1;
  height: 100%;
}
.tab-content{
  box-sizing: border-box;
  height: 100%;
}
</style>
