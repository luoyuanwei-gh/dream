<template>
  <div class="ui-title">
    {{titleInfo}}
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
    titleInfo: {
      default: '',
      type: String
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped="scoped">
.ui-title {
  font-size: 20px;
  font-weight: bold;
}
</style>
