<template>
  <div>
    <div class="info">
    <router-view></router-view>
    </div>
    <footerBar v-if="isShow"></footerBar>
  </div>
</template>
<script>
import footerBar from './components/footerBar'
import { mapState } from 'vuex'
export default {
  components: {
    footerBar
  },
  mounted () {
    // console.log(this.$router.params)
  },
  computed: {
    ...mapState(['isShow'])
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
