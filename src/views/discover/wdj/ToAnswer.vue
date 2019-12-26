<template>
    <div>
        <div class="await" >
            <div class="adv">
                <img src="https://m.changtu.com/_nuxt/img/ans_banner.5782def.png" alt="">
            </div>
            <div v-for="data in datalist" :key="data.questionId">
                <div class="querlist">
                    <h3>{{data.questContent}}</h3>
                    <div class="bottom">
                        <div class="left">
                            <img :src="data.issueUserInfo.headerImgUrl?data.issueUserInfo.headerImgUrl:'https://m.changtu.com/_nuxt/img/default_face.9c4c598.png'" alt="">
                            <span>{{data.issueUserInfo.nickName}}</span>
                        </div>
                        <div class="right">
                            <span>我来回答</span>
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
  mounted () {
    Axios.post('/middlemobile/discovery/questQuestionList.htm', 'timeStamp=1577169247282&uniqueId=15768107854190.773148202536406&tFlag=1&flowCode=15771485007830.5902942660332133&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch&pageNo=1&pageSize=20&sourceTypeId=2&parameterCharacteristics=-1').then(res => {
    //   console.log(res.data.detail.questionList)
      this.datalist = res.data.detail.questionList
    })
  }
}
</script>
<style lang="scss" scoped>
.await{
    background: #fff;
    padding: 0.12rem 0.12rem 0 0.12rem;
    .adv{
        img{
            vertical-align: middle;
            border: 0 none;
            width: 100%;
        }
    }
    .querlist{
        margin-top: 0.096rem;
        border-bottom: 1px solid #e5e5e5;
        h3{
            font-weight: 500;
            font-size: 18px;
            color: #333333;
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
            .left{
                float: left;
                img{
                    width: 0.2rem;
                    float: left;
                    margin-top: 0.1rem;
                }
                span{
                    float: left;
                    width: 0.88rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-left: 0.05rem;
                }
            }
            .right{
                float: right;
                span{
                    display: block;
                    width: 0.648rem;
                    height: 0.228rem;
                    margin-top: 0.096rem;
                    line-height: 0.228rem;
                    text-align: center;
                    border-radius: 0.3rem;
                    border: 1px solid #ff7600;
                    color: #ff7600;
                    box-sizing: border-box;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
