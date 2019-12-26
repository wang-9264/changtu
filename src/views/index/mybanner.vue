<template>
  <div class="box">
    <div class="icon">
      <img class="icon-l" src="https://m.changtu.com/_nuxt/img/collect_ico.3a7af3d.png" alt="">
      <img class="icon-c" src="https://m.changtu.com/_nuxt/img/logo_img.9ea0218.png">
      <img class="icon-r" src="https://m.changtu.com/_nuxt/img/meg_ico.a9e9784.png" alt="">
    </div>
    <div class="swiper-container swiper1">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide">Slide 1</div> -->
        <div class="swiper-slide" v-for="(data,index) in datalist" :key="index">

          <!-- {{data.backImageUrl}} -->
          <img class="btn" :src="data.backImageUrl" />
          <img class="top swiper-slide" :src="data.imageUrl" />

          <!-- </div> -->
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->

      </div>
      <div class="swiper-pagination fenye1">

      </div>
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
    axios.post(
      'middlemobile/focus/getFocusAndNotice.htm',
      'timeStamp=1576842075752&uniqueId=15768119515340.8027515278901425&tFlag=1&flowCode=15768373571970.5958419551096625&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch&currentCityId=390073'
    ).then(res => {
      this.datalist = res.data.detail.advList
      console.log(this.datalist)
      new Swiper('.swiper1', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        observer: true,
        observeParents: true,
        // direction:"vertical",
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        },

        pagination: {
          el: '.fuye',
          clickable: true
        }
      })
    })
  }
}
</script>

<style scoped>
  .box {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 0.14rem;
    color: #000;
    margin: 0;
    padding: 0;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .top {
    width: 3.35rem;
    height: 1.3rem;
    border-radius: 0.1rem;
    /* margin-top: 65px; */
    position: absolute;
    /* transform: scale(0.9); */
    box-shadow: 0 0.04rem 0.08rem hsla(0, 0%, 80%, .7);
    margin: 0.3rem 0 0 0.2rem;
  }

  .btn {
    width: 100%;
    height: 2.03rem
  }

  /*  .swiper-container {
    width: 100%;
    height: 100%;
  } */

  .swiper-slide {
    text-align: center;
    font-size: 0.18rem;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    /* justify-content: center; */

    align-items: center;
    transition: 300ms;
    /* transform: scale(0.8); */
  }

  /* .swiper-slide-active, */
  .swiper-slide-duplicate-active {
    transform: scale(1);
  }

  img {
    width: 100%;
  }

  .icon {
    width: 3.3rem;
    position: absolute;
    z-index: 11;
    margin-left: 0.23rem;
    margin-top: 0.12rem;
  }

  .icon-l {
    width: 0.29rem;
    height: 0.29rem;
  }

  .icon-c {
    margin-left: 1.18rem;
    width: 0.4rem;
    height: 0.4rem;
  }

  .icon-r {
    position: absolute;
    right: 0;
    width: 0.29rem;
    height: 0.29rem;
    margin-top: 0.13rem;
  }
</style>
