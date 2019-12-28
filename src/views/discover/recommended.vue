<template>
    <div>

        <swiper></swiper>

        <div class="remhot">
            <img src="https://m.changtu.com/_nuxt/img/hot_ico.165f000.png" alt="">
            <div class="remhotInfo">
                <p v-for="data in datalist" :key="data.recId">{{data.title}}</p>
            </div>
        </div>
            <div class="dispu">
            <ul>
                <waterfall :line-gap="172.5" :watch="items">
                <waterfall-slot
                v-for="(item, index) in items"
                :width="172.5"

                :height="item.height"
                :order="index"
                :key="item.recId"
                :style="{'top':item.height+40+'px !important'}"
                >
                <!-- <li v-for="(item,index) in items" :key="index"> -->
                    <li :key="index" class="item">
                    <div class="top">
                        <img :src="item.imgUrl" alt="">
                        <div class="top_left" v-if="item.locationAddr">{{item.locationAddr}}</div>
                        <div class="top_right" v-if="item.seceneryImgCount">{{item.seceneryImgCount}}</div>
                    </div>
                    <div class="under">
                        <p>{{item.sceneryTitle}}</p>
                        <div>
                        <div class="left">
                            <img :src="item.issueUserInfo.headerImgUrl" alt="">
                            <span>{{item.issueUserInfo.nickName}}</span>
                        </div>
                        <div class="right">
                            <span>👍</span>
                            <span>{{item.agreeNum}}</span>
                        </div>
                        </div>
                    </div>
                </li>
         </waterfall-slot>
        </waterfall>
            </ul>
        </div>
        <div class="camera_fix">
            <img src="https://m.changtu.com/_nuxt/img/cricle.bdf0e8d.png" alt="" class="camera_pic">
            <img src="https://m.changtu.com/_nuxt/img/plus_ico.9bb228a.png" alt="" class="cam_plus">
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
import swiper from './discocer_swiper'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import { Indicator } from 'mint-ui'
export default {
//   components: {
//     Waterfall,
//     WaterfallSlot
//   },
  data () {
    return {
      datalist: [],
      items: []
    //   lilist: []
    }
  },

  components: {
    swiper,
    Waterfall,
    WaterfallSlot
  },
  mounted () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    Axios.post('/middlemobile/discovery/queryStickyMedia.htm', 'timeStamp=1576911232062&uniqueId=15768107854190.773148202536406&tFlag=1&flowCode=15768937226810.4433462746303658&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch').then(res => {
    //   console.log(res.data.detail)
      this.datalist = res.data.detail
    })
    Axios.post('/middlemobile/discovery/queryMediaInfo.htm', 'timeStamp=1577062235777&uniqueId=15768107854190.773148202536406&tFlag=1&flowCode=15768937226810.4433462746303658&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch&sceneType=1&queryVal=-1&cityId=390073&pageNo=1&pageSize=20').then(resp => {
      // this.items = resp.data.detail.datInfoList
      // console.log(resp.data.detail.datInfoList)
      for (var i = 0; i < resp.data.detail.datInfoList.length; i++) {
        // console.log(resp.data.detail.datInfoList[i],1111111)
        if ((resp.data.detail.datInfoList[i]).seceneryInfo !== undefined) {
          this.items.push((resp.data.detail.datInfoList[i]).seceneryInfo)
        }
        // console.log(this.items)
      }
      for (var data of this.items) {
        data.height = String((Number(data.height) * (172.5 / Number(data.width))) + 54)
      }
      Indicator.close()
    })
  }
}
</script>
<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
}
// .vue-waterfall-slot{
//     margin-bottom: 0.78rem;
// }
.remhot{
    width: 100%;
    height: 0.56rem;
    background: #fff;
    padding-top: 0.1rem;
    margin-bottom: 0.1rem;
    img{
        display: block;
        // width: 0.21rem;
        height: 0.38rem;
        float: left;
        margin-left: 0.05rem;
        // margin-top: 0.05rem;
    }
    .remhotInfo{
            height: 0.55rem;
            margin-left: 0.03rem;
            margin-top: 0.05rem;
            p{
            font-size: 12px;
            line-height: 12px;
            margin-top: 0.0325rem;
            margin-top: 0.05rem;
            margin-left: 0.3rem;
            }
        }
}
    .dispu{
        width: 3.55rem;
        // background: pink;
        box-sizing: border-box;
        padding: 0 0.1rem;
        overflow: hidden;
        position: relative;
        ul{
            list-style: none;
            position: relative;
            width: 3.55rem;
            margin-left: 0.12rem;
            li{
                // width: 1.725rem;
                padding: 0.1rem 0.1rem 0 0 ;
                // float: left;
                // margin-bottom: 0.78rem;
                display: inline-block;
                .top{
                    width: 100%;
                    position: relative;
                    // overflow: hidden;
                    background: white;
                    img{
                        width:100%;
                        // display: inline-block;
                        position: relative;
                    }
                    .top_left{
                        height: 0.2rem;
                        position: absolute;
                        left: 0.1rem;
                        bottom: 0.1rem;
                        // background: green;
                        background: rgba(0,0,0,.5);
                        color: #fff;
                        border-radius: 0.2rem;
                        line-height: 0.2rem;
                        padding: 0 5px 0 5px;
                        font-size: 12px;
                        text-align: center;
                        width: 0.545rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        }
                    .top_right{
                        height: 0.12rem;
                        position: absolute;
                        right:0.1rem;
                        bottom: 0.2rem;
                        // background: green;
                        background: rgba(0,0,0,.5);
                        color: #fff;
                        border-radius: 0.2rem;
                        line-height: 12px;
                        padding: 0 5px 0 5px;
                        font-size: 12px;
                        text-align: center;
                    }
                }
                .under{
                    width: 100%;
                    // height: 0.88rem;
                    position: relative;
                    overflow: hidden;
                    background: white;
                    p{
                        font-size: 12px;
                        line-height: 12px;
                        // margin: 0.05rem 0;
                        padding: 0.05rem 0;
                        padding-left: 0.05rem;
                    }
                    .left{
                        float: left;
                        text-align: center;
                        width: 0.65rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        img{
                            width: 0.15rem;
                            // height: 1.1rem;
                            border-radius: 50%;
                        }
                        span{
                            font-size: 12px;
                            color: #333333;
                        }
                    }
                    .right{
                        float: right;
                        text-align: center;
                        span{
                            margin-right: 0.2rem;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
    .camera_fix{
        width: 0.62rem;
        height: 0.62rem;
        position: fixed;
        left: 42%;
        bottom: 1rem;
        z-index: 12;
        .camera_pic{
            width: 0.62rem;
        height: 0.62rem;
        }
        .cam_plus{
            width: 0.22rem;
        height: 0.22rem;
        position: absolute;
        left: 31%;
        top: 0.15rem;
        }
    }
</style>
