<template>
  <div class="ui-subhead">
    <span class="subhead-flag">#</span>{{dataObj.text}}
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
.ui-subhead {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
}
.subhead-flag {
  color: #42b983;
  margin-right: 6px;
}
</style>
