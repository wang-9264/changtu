<template>
    <div>
        <div class="top_bar">
            <span class="iconfont icon-houtuishangyige" @click="handleclick()"></span>
            <p>车站动向</p>
        </div>
        <ul>
            <li v-for="data in datalist" :key="data.recTypeId">
                <h3>{{data.title}}</h3>
                <div>
                <!-- <img :src="data.picInfoList[0].imgPic?data.picInfoList[0].imgPic:''" alt=""> -->
                <p>{{data.content}}</p>
                </div>
                <div class="bottom">
                  <div class="left">
                      <img :src="data.roleInfo.rolePic" alt="">
                      <span>{{data.roleInfo.roleName}}</span>
                  </div>
                  <div class="right">
                      <span>
                          <b class="iconfont icon-yanjing"></b>
                          {{data.browNum}}
                      </span>
                      <span>
                          <b class="iconfont icon-dianzan"></b>
                          {{data.agreeNum}}
                      </span>
                  </div>
                </div>
            </li>
        </ul>
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
    Axios.post('/middlemobile/discovery/queryInsuranceNewsList.htm', 'timeStamp=1577153737472&uniqueId=15768107854190.773148202536406&tFlag=1&flowCode=15771485007830.5902942660332133&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch&page=1&rowNum=20&boardCode=czdx').then(res => {
    //   console.log(res.data.detail.datInfoList)
      for (var i = 0; i < res.data.detail.datInfoList.length; i++) {
        this.datalist.push((res.data.detail.datInfoList[i]).mediaReport)
        // console.log(this.datalist)
      }
    //   console.log(this.datalist)
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
        margin-left: 1.2rem;
        font-size: 18px;
    }
}
ul{
    width: 100%;
    list-style: none;
    li{
        background: white;
        width: 3.51rem;
        // height: 1.25rem;
        padding: 0.0375rem 0.12rem 0 0.12rem;
        margin-top: 0.08rem;
        h3{
            width: 100%;
            height: 0.27rem;
            line-height: 0.27rem;
            font-size: 18px;
            color: #333333;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 500;
        }
        p{
            font-size: 15px;
            color: #808080;
        }
        .bottom{
            width: 3.51rem;
            height: 0.5rem;
            line-height: 0.5rem;
            .left{
                float: left;
                text-align: center;
                img{
                    width: 0.2rem;
                    display: block;
                    float: left;
                    margin: 0.15rem 0;
                }
                span{
                    font-size: 12px;
                    color: #808080;
                    margin-left: 0.05rem;
                    float: left;
                }
            }
            .right{
                float: right;
                text-align: center;
                span{
                    font-size: 12px;
                    color: #808080;
                    margin-right: 0.15rem;
                }
            }
        }
    }
}
</style>
