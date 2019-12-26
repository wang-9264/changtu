<template>
  <div>
    <div class="info">
    <router-view></router-view>
    </div>
    <footerBar></footerBar>
  </div>
</template>
<script>
import footerBar from './components/footerBar'
export default {
  components: {
    footerBar
  },
  mounted () {
    console.log(this.$router.params)
  }
}
</script>
<style lang="scss" scoped>
html,body{
    background: #f5f5f5;
}
.info{
  margin-bottom: 0.49rem;
}
</style>
