<template>

    <div class="swiper-container kerwin" >
        <div class="swiper-wrapper" >
            <div class="swiper-slide"  v-for="(data,index) in datalist" :key="index">
                <img :src="data.entryPic" alt="" @click="handleclick(index)">
                <p>{{data.entryName}}</p>
            </div>
        </div>
            <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>

</template>
<script>
import Swiper from 'swiper' // swiper js文件
import 'swiper/css/swiper.min.css' // swiper css
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      URL: ['/czdx', '/wdj', '/blblp', '/login', '/lpal', '/login', '/login', '/login', '/login']
    }
  },
  mounted () {
    axios.post(
      '/middlemobile/discovery/queryEntryHot.htm',
      'timeStamp=1577102685864&uniqueId=15768107854190.773148202536406&tFlag=1&flowCode=15768937226810.4433462746303658&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch&entryTypeId=1'
    ).then(res => {
      // console.log(res.data.detail.entryList)
      this.datalist = res.data.detail.entryList
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: false, // 循环模式选项
          slidesPerView: 4,
          spaceBetween: 10,
          centeredSlides: false,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    })
  },
  methods: {
    handleclick (index) {
      this.$router.push(this.URL[index])
    }
  }
}

</script>
<style lang="scss" scoped>
.swiper-container {
    width: 3.75rem;
    height: 0.82rem;
    background: white;
    margin-bottom: 0.07rem;
    padding-top: 0.08rem;
    margin-top: 0.44rem;
    .swiper-wrapper{
        .swiper-slide{
        text-align: center;
        img{
            width: 0.35rem;
            height: 0.35rem;
        }
        p{
            font-size: 12px;
            font-weight: 400;
            color: #333333;
            font-family: "\\5FAE软雅黑"
        }
        }
        // float: left;
    }
}
</style>
