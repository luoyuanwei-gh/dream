<template>
  <div class="ui-list">
    <div class="ui-list-desc">
      <span class="subhead-flag">#</span>
      {{dataObj.desc}}
    </div>
    <ul class="ui-list-ul">
      <li class="ui-list-li" v-for="(item, index) in dataObj.content" :key="index">
         <div v-html="item"></div>
      </li>
    </ul>
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
  }
}
</script>

<style scoped="scoped">
.ui-list {
  text-align: left;
}
.ui-list-desc {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 14px;
}
.subhead-flag {
  color: #42b983;
  margin-right: 6px;
}
.ui-list-li {
  margin-left: 40px;
  line-height: 28px;
}
</style>
