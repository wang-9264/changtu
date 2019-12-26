<template>
    <div>
        <div class="lostinfo">
            <b class="iconfont icon-houtuishangyige" @click="handleclick()"></b>
            <img src="https://m.changtu.com/_nuxt/img/banner.d72f035.png" alt="">
            <p>小畅已帮助乘客成功理赔</p>
        </div>
        <div class="disnews">
            <div class="disnews_item" v-for="data in datalist" :key="data.mediaReport.recId">
                <h3>{{data.mediaReport.title}}</h3>
                <div class="center">
                    <p>{{data.mediaReport.content}}</p>
                </div>
                <div class="bottom">
                    <div class="left">
                        <img :src="data.mediaReport.roleInfo.rolePic" alt="">
                        <span>{{data.mediaReport.roleInfo.roleName}}</span>
                    </div>
                    <div class="right">
                        <span><b class="iconfont icon-yanjing"></b>{{data.mediaReport.browNum}}</span>
                        <span><b class="iconfont icon-dianzan"></b>{{data.mediaReport.agreeNum}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  methods: {
    handleclick () {
      this.$router.back()
    }
  },
  mounted () {
    Axios.post('/middlemobile/discovery/queryInsuranceNewsList.htm', 'timeStamp=1577194268263&uniqueId=15768107854190.773148202536406&tFlag=1&flowCode=15771485007830.5902942660332133&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch&page=1&rowNum=20').then(res => {
    //   console.log(res.data.detail.datInfoList)
      this.datalist = res.data.detail.datInfoList
    })
  }
}
</script>
<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
}
.lostinfo{
    width: 3.75rem;
    height: 2.14rem;
    position: relative;
    b{
        font-weight: 500;
        font-size: 0.3rem;
        color: white;
        position: absolute;
        left: 0.1rem;
        top: 0.08rem;
    }
    img{
        width: 100%;
    }
    p{
        position: absolute;
        font-size: 15px;
        height: 0.31rem;
        color: #333333;
        right: 0;
        bottom: 0;
        padding: 0 0.12rem;

    }
}
.disnews{
    background: #f5f5f5;
    width: 3.75rem;
    .disnews_item{
        width: 3.51rem;
        padding: 0.1375rem 0.12rem 0 0.12rem;
        margin-top: 0.08rem;
        background: #fff;
        h3{
            font-size: 18px;
            line-height: 0.27rem;
            color: #333333;
            font-weight: 400;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
        .center{
            font-size: 15px;
            color: #808080;
            line-height: 0.22rem;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
        .bottom{
            height: 0.5rem;
            line-height: 0.5rem;
            color: #808080;
            font-size: 12px;
            .left{
                float: left;
                width: 1.5rem;
                height: 0.5rem;
                text-align: center;
                img{
                    width: 0.2rem;
                    margin-top: 0.15rem;
                    float: left;
                }
                span{
                    margin-left: 0.05rem;
                    float: left;
                }
            }
            .right{
                float: right;
                padding-right: 0.1rem;
                span{
                    margin-right: 0.15rem;
                    b{
                        margin-right: 0.07rem;
                        font-size: 16px;
                    }
                }
            }
        }
    }
}
</style>
