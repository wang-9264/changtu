<template>
  <div>
    <div class="mybody">
      <li class="top_li" v-for="(data,index) in datalist" :key="index">
        <div class="sora">
          <div class="top_1">
            <h3>{{data.contentTitle}}</h3>
            <h4>{{data.attribute1}}</h4>
          </div>
          <img class="topImg" :src=data.titleImageId alt="">
        </div>
      </li>
      <div class="ban">
        <div class="ccc">
          <div class="swiper-container myswiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide bon_l" v-for="(data,index) in dataleft" :key="index">
                <li class="banLi">
                  <span class="span1">
                    {{data.userName}}
                  </span>
                  <span class="span3">在行程中说：</span>
                  <span class="span2">
                    {{data.sceneryTitle}}
                  </span>
                </li>
                <img class="banImg" :src=data.imgPath alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="ccc bbb">
          <div class="swiper-container myswiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide bon_l" v-for="(data,index) in dataright" :key="index">
                <li class="banLi">
                  <span class="span1">
                    {{data.roleInfo.roleName}}
                  </span>
                  <span class="span3">在行程中问：</span>
                  <span class="span2">
                    {{data.questionContent}}
                  </span>
                </li>
                <img class="banImg" src="https://m.changtu.com/_nuxt/img/img2.3048e08.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  data () {
    return {
      datalist: [],
      dataleft: [],
      dataright: []
    }
  },
  mounted () {
    axios.post(
      'app/queryFloorContents',
      'timeStamp=1577104012728&uniqueId=15768119515340.8027515278901425&tFlag=1&flowCode=15771039970630.9121480822136574&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch&startCityId=680201&endCityId=163497'
    ).then(res => {
      console.log(res.data.data.floor[0].floorContents[2].choiceSceneryList)
      this.dataleft = res.data.data.floor[0].floorContents[2].choiceSceneryList
      this.dataright = res.data.data.floor[0].floorContents[3].questionList
      this.datalist = res.data.data.floor[0].floorContents

      var swiper1 = new Swiper('.myswiper', {
        direction: 'vertical',
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      })
    })
  }
}
</script>

<style scoped lang="scss">
  li {
    list-style: none;
    width: 100%;
  }

  .mybody {
    height: 1.75rem;
    position: relative;
  }

  .sora {
    width: 45%;
    float: left;
    margin: 0.08rem;
  }

  .top_1 {
    float: left;
  }

  h3 {
    color: #333333;
    font-size: 0.15rem;
    font-weight: 100;
  }

  h4 {
    font-size: 0.12rem;
    font-weight: 100;
    color: #808080
  }

  .topImg {
    float: right;
    width: 0.6rem;
  }

  .ban {
    height: 1rem;
    margin-top: 0.2rem;
    position: absolute;
    top:0.47rem;
    z-index: -100;
  }

  .ccc {
    width: 48%;
    height: 1rem;
    overflow: hidden;
    float: left;
  }

  .bbb {
    margin-left: 0.05rem;
  }

  .bon_l {
    width: 1.79rem;
    height: 1rem;
  }
  .span1 {
    height: 0.18rem;
    width: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #ff7600;
    display: block;
    font-size: 0.12rem;
    margin-left: 0.1rem;
    margin-top: 0.43rem;
    position: absolute
  }

  .banImg {
    height: 1rem;
  }

  .span2 {
    height: 0.18rem;
    width: 1rem;
    font-size: 0.12rem;
    margin-top: 0.55rem;
    left: 0;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    margin-left: 0.1rem;
    white-space: nowrap;
    position: absolute
  }

  .span3 {
    width: 1.09rem;
    font-size: 0.12rem;
    margin-left: 0.4rem;
    margin-top: 0.43rem;
    left: 0;
    color: #808080;
    position: absolute
  }

  .banLi {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0));
  }

  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 0.14rem;
    color: #000;
    margin: 0;
    padding: 0;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 0.18rem;
    background: #fff;
    height: 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    justify-content: center;

    align-items: center;
  }
</style>
