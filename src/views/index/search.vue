<template>
  <div class="mybody">
    <div class="top_1">
      <p class="from" @click="go()">{{gocity}}</p>
      <span></span>
      <p class="add" @click="to()">{{tocity}}</p>
    </div>
    <div class="top_2">
      <p class="month" @click="istime()">{{time}}</p>
      <!-- <p class="week" v-if="localStorage.getItem('startcity')?''">{{week}}</p> -->
    </div>
    <div class="top_3">

      <button>搜索汽车票</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gocity: '',
      tocity: '',
      time: '',
      week: ''
    }
  },
  methods: {
    go () {
      this.$router.push('/Startcity')
    },
    to () {
      this.$router.push('/Tocity')
    },
    istime () {
      this.$router.push('/Isday')
    }

  },
  mounted () {
    //   var dt = new Date();
    //   var weekDay = ["周天", "周一", "周二", "周三", "周四", "周五", "周六"];
    //   this.week = weekDay[dt.getDay()]
    if (localStorage.getItem('startcity')) {
      this.gocity = localStorage.getItem('startcity')
    } else {
      this.gocity = '请选择'
    }
    if (localStorage.getItem('tocity')) {
      this.tocity = localStorage.getItem('tocity')
    } else {
      this.tocity = '请选择'
    }
    if (localStorage.getItem('time')) {
      this.time = localStorage.getItem('time')
    } else {
      this.time = '请选择'
    }
    // }
  }
}
</script>

<style scoped lang="scss">
  .mybody {
    width: 100%;
    height: 1.75rem;

    .top_1 {
      // width:100%;
      width: 3.35rem;
      height: 0.5rem;
      padding: 0.1rem;
      border-bottom: 0.01rem solid #ccc;
      line-height: .5rem;
      font-weight: 600;
      margin: 0 auto;

      p {
        font-size: 0.237rem;
        color: #333;
      }

      .from {
        float: left;
      }

      .add {
        float: right;
      }

      .week {
        margin-left: 0.5rem;
        display: block;
      }

      span {
        width: 0.41rem;
        height: 0.41rem;
        display: inline-block;
        background-image: url(https://m.changtu.com/_nuxt/img/change_ico.fc2be47.png);
        background-repeat: no-repeat;
        background-size: 0.9rem 0.41rem;
        margin-left: 22%;
      }
    }

    .top_2 {
      width: 3.35rem;
      height: 0.5rem;
      line-height: .5rem;
      margin: 0 auto;

      p {
        float: left;
        display: inline-block;
        font-weight: 600;
        font-size: 0.21rem;
        // margin-right: 0.2rem;
        color: #333;
      }

      .month {
        font-weight: 600;
        font-size: 0.21rem;
        margin: 0 0.2rem
      }

      .week {
        font-weight: 600;
        font-size: 0.21rem;
      }
    }

    .top_3 {
      width: 3.35rem;
      height: 0.44rem;
      // padding: 0.05rem 0.12rem 0.2rem;
      margin: 0 auto;

      button {
        width: 3.35rem;
        height: 0.44rem;
        background: #FF6600;
        border-radius: 0.2rem;
        border: 0;
        font-size: 0.18rem;
        color: #fff;
        line-height: .44rem;
      }
    }
  }
</style>
