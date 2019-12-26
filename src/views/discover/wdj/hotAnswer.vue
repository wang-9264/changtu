<template>
    <div>
        <div class="disAnsCo">
            <span>全部</span>
            <span v-for="data in datalist" :key="data.labelId">{{data.labelName}}</span>
        </div>
        <div>
            <div class="list" v-for="item in items" :key="item.questionId">
                <div class="top">
                    <!-- <b class="iconfont icon-wen"></b> -->
                    <h3>{{item.questContent}}</h3>
                </div>
                <div class="center">
                    <p>{{item.answerContent}}</p>
                </div>
                <div class="bottom">
                    <div class="bottom_left">
                        <img :src="item.issueUserInfo.headerImgUrl?item.issueUserInfo.headerImgUrl:'https://m.changtu.com/_nuxt/img/default_face.9c4c598.png'" alt="">
                        <span>{{item.issueUserInfo.nickName}}</span>
                    </div>
                    <div class="bottom_right">
                        <span v-if="item.browNum>999?'999+':item.browNum"><b class="iconfont icon-yanjing"></b>{{item.browNum}}</span>
                        <span><b class="iconfont icon-shang"></b>{{item.answerNum}}</span>
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
      datalist: [],
      items: []
    }
  },
  mounted () {
    Axios.post('/middlemobile/discovery/queryQuestionLabel.htm', 'timeStamp=1577169166231&uniqueId=15768107854190.773148202536406&tFlag=1&flowCode=15771485007830.5902942660332133&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch').then(res => {
    //   console.log(res.data.detail.labelList)
      this.datalist = res.data.detail.labelList
    })
    Axios.post('/middlemobile/discovery/questQuestionList.htm', 'timeStamp=1577169166275&uniqueId=15768107854190.773148202536406&tFlag=1&flowCode=15771485007830.5902942660332133&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch&pageNo=1&pageSize=20&sourceTypeId=1&labelIds=-1&parameterCharacteristics=-1').then(res => {
      console.log(res.data.detail.questionList)
      this.items = res.data.detail.questionList
    })
  }
}
</script>
<style lang="scss" scoped>
*{
    padding: 0;
    margin: 0;
}
.disAnsCo{
    width: 3.49rem;
    height: 1.8rem;
    background: white;
    padding: 0 0.12rem;
    :first-child{
            background: #ff7600;
        }
    span{
        padding: 0 0.115rem;
        // margin: 0.1rem 0.1075rem 0 0 ;
        margin-top: 0.15rem;
        margin-left: 0.12rem;
        background: #f5f5f5;
        border-radius: 0.1rem;
        line-height: 0.19rem;
        height: 0.19rem;
        float: left;
        font-size: 12px;
        color: #333333;
    }
}
.list{
    width: 3.51rem;
    height: 1.25rem;
    background: #fff;
    padding: 0.1375rem 0.12rem 0 0.12rem;
    margin-top: 0.08rem;
    position: relative;
    .top{
        position: relative;
        h3{
            padding-left: 0.15rem;
            font-size: 18px;
            line-height: 0.2rem;
            color: #333333;
            font-weight: 500;
             text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
    }
    .center{
        p{
            font-size: 15px;
            color: #808080;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
    }
    .bottom{
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 12px;
        color: #808080;
        .bottom_left{
            float: left;
            height: 0.5rem;
            line-height: 0.5rem;
            img{
                width: 0.2rem;
                margin-top: 0.15rem;
                float: left;
            }
            span{
                float: left;
                display: inline-block;
                width: 0.88rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-left: 0.032rem;
            }
        }
        .bottom_right{
            float: right;
            padding-right: 0.064rem;
            span{
                margin-right: 0.096rem;
                b{
                    margin-right: 0.0448rem;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>
