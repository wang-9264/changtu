<template>
    <div>
        <discoverBar></discoverBar>
        <router-view></router-view>
    </div>
</template>
<script>
import discoverBar from './discover/discoverBar'
export default {
  components: {
    discoverBar
  }
  // mounted: function () {
  //   this.$router.push('/discover')
  // }
}
</script>
<style lang="scss" scoped>
</style>
