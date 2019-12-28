<template>
    <div>
      <div class="top_bar">
            <span class="iconfont icon-houtuishangyige" @click="handleclick()"></span>
            <p>问答</p>
      </div>
        <div class="disStat">共有<span>34080</span>条问题，<span>87.26%</span>的提问都收到了回答</div>
        <wdjBar></wdjBar>
        <router-view></router-view>
    </div>
</template>
<script>
import wdjBar from './wdj/wdj_Bar'
// import { mapState } from 'vuex'
import { Tabbarhide, Tabbarshow } from '@/store/type'
// import Axios from 'axios'
export default {
  components: {
    wdjBar
  },
  methods: {
    handleclick () {
      this.$router.push('/discover')
    }
  },
  beforeMount () {
    // this.$store.state.isShow = false;
    this.$store.commit(Tabbarhide)
    // this.$store.commit("show");
  },

  beforeDestroy () {
    // this.$store.state.isShow = true;
    this.$store.commit(Tabbarshow)
  }
}
</script>
<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
}
.top_bar{
    width: 3.75rem;
    height: 0.34rem;
    background: white;
    text-align: center;
    padding-top: 0.06rem;
    // overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    span{
        display: inline-block;
        float: left;
        font-size: 0.3rem;
        color: #ff7600;
    }
    p{
        float: left;
        margin-left: 1.4rem;
        font-size: 18px;
    }
}
.disStat{
  width: 3.51rem;
  height: 0.35rem;
  background: #fffcdf;
  padding: 0 0.12rem;
  margin-top: 0.39rem;
  text-align: center;
  font-size: 15px;
  line-height: 0.35rem;
  span{
    color: #ff7600;
  }
}
</style>
