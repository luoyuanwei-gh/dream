<template>
  <div class="ui-image">
    <img :src="dataObj.url" />
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
.ui-image {
  font-size: 20px;
  font-weight: bold;
}
</style>
