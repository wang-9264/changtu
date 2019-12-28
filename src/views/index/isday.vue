<template>
  <div class="mybody">
    <div class="head">
      <span>
        <span class="iconfont icon-houtuishangyige icon" @click="goback()"></span>
        <p class="chufadi"> 出发地</p>
      </span>
    </div>
    <Calendar v-on:choseDay="clickDay" v-on:changeMonth="changeDate" @click="sora">

    </Calendar>
  </div>
</template>
<script>
import Calendar from 'vue-calendar-component'
import { Tabbarhide, Tabbarshow } from '@/store/type'
export default {
  components: {
    Calendar
  },
  methods: {
    clickDay (data) {
      localStorage.setItem('time', data)
      this.$router.push('/index')
    },
    changeDate (data) {
      // console.log(data)
    },
    clickToday (data) {
      // console.log(data)
    },
    goback () {
      this.$router.push('/index')
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
<style scoped>
.mybody{
  width: 100%;
}
 .chufadi {
    text-align: center;
    line-height: 0.44rem;
    font-size: 0.18rem;
  }

  .icon {
    font-size: 0.25rem;
    color: #f60;
    line-height: 0.44rem;
    float: left;
    margin-left: 0.05rem;
  }
</style>
