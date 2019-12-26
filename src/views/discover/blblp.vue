<template>
    <div>
        <div class="top_bar">
            <span class="iconfont icon-houtuishangyige" @click="handleclick()"></span>
            <p>balabala票</p>
        </div>
        <div class="disnews">
            <div class="disnews_item" v-for="data in datalist" :key="data.mediaReport.recId">
                <div>
                    <h3>{{data.mediaReport.title}}</h3>
                    <div class="center">
                        <img src="https://res06.changtu.com/view/4241954a818b8f00acd840764051bfb944a1c1f9aaf77944a467f44efa1dd9877608e532e8267b6ac4f0df86b2528542.jpg" alt="">
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
    Axios.post('/middlemobile/discovery/queryInsuranceNewsList.htm', 'timeStamp=1577183393650&uniqueId=15768107854190.773148202536406&tFlag=1&flowCode=15771485007830.5902942660332133&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch&page=1&rowNum=20&boardCode=blblp').then(res => {
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
        margin-left: 1.1rem;
        font-size: 18px;
    }
}
.disnews{
    background: #f5f5f5;
    margin-top: 0.35rem;
    .disnews_item{
        width: 3.51rem;
        padding: 0.1375rem 0.12rem 0 0.12rem;
        margin-top: 0.08rem;
        background: #fff;
        // position: relative;
        div{
            h3{
                font-size: 18px;
                font-weight: 400;
                color: #333333;
                word-break: break-all;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            .center{
                margin-top: 0.096rem;
                img{
                    width: 0.7rem;
                }
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
}
</style>
