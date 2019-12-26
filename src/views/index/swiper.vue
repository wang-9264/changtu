<template>

      <div class="swiper-container kerwin">
        <div class="icon">
          <img class="icon-l" src="https://m.changtu.com/_nuxt/img/collect_ico.3a7af3d.png" alt="">
        <img class="icon-c" src="https://m.changtu.com/_nuxt/img/logo_img.9ea0218.png">
        <img class="icon-r" src="https://m.changtu.com/_nuxt/img/meg_ico.a9e9784.png" alt="">
        </div>
            <div class="swiper-wrapper" v-if='datalist.length'>
          <!-- <div class="swiper-slide" v-for="(data,index) in datalist" :key="index" :style="{'width':'100%','height':'auto','backgroundImage':'url('+data.backImageUrl+')','backgroundSize':'100% 100%'}"> -->
              <div class="swiper-slide" v-for="(data,index) in datalist" :key="index">
                <img class="btn" :src="data.backImageUrl" />
                <img class="top swiper-slide" :src="data.imageUrl" />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination">

            </div>

  </div>

</template>
<script>
import Swiper from 'swiper' // swiper js文件
import 'swiper/css/swiper.min.css' // swiper css
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    var defaultProps = {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      // direction:"vertical",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }

    axios.post(
      'middlemobile/focus/getFocusAndNotice.htm',
      'timeStamp=1576842075752&uniqueId=15768119515340.8027515278901425&tFlag=1&flowCode=15768373571970.5958419551096625&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch&currentCityId=390073'
    ).then(res => {
      // console.log(res.data.detail.advList)
      this.datalist = res.data.detail.advList
      // console.log(this.datalist.length)
      this.$nextTick(() => {
        new Swiper('.' + (this.swipername ? this.swipername : 'kerwin'), { ...defaultProps, ...this.options })
      })
    })
  }

}

</script>
<style scoped>
  .btn{
    width: 100%;
    position: absolute;
  }
  .top{
    width:100%;
    border-radius:10px;
    margin-top:65px ;
    position: relative;
    /* transition: all .3s; */
    transform: scale(0.8) !important;
  }
.swiper-slide {
    transform: scale(0.8);
  }
  .swiper-slide-active,.swiper-slide-duplicate-active1{
    transform: scale(1);
  }
  .icon{
    width: 330px;
    position: absolute;
    z-index: 11;
    margin-left: 23px;
    margin-top: 12px;
  }
  .icon-l,.icon-r,.icon-c{
   width: 40px;
    height: 40px;

  }
  .icon-l{
    width: 29px;
    height: 29px;
  }
  .icon-c{
    margin-left: 118px;
  }
  .icon-r{
    position: absolute;
    right: 0;
    width: 29px;
    height: 29px;
    margin-top: 13px;
  }
</style>
