<template>
  <div class="mybody" ref="city_List">
    <div class="head">
      <span class="iconfont icon-houtuishangyige icon" @click="goback()"></span>
      <p class="chufadi"> 出发地</p>
    </div>
    <div class="yangshi">
      <mt-index-list>
        <mt-index-section v-for="(data,index) in dataloot" :key="index" :index="index">
          <div @click="sora(item)" v-for="(item,index2) in data" :key="index2">
            <mt-cell :key="index2" :title="item.showName">
            </mt-cell>
          </div>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import {
  IndexList,
  IndexSection
} from 'mint-ui'
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
export default {
  data () {
    return {
      datalist: [],
      dataloot: [],
      inputValue: '',
      list: []

    }
  },
  mounted () {
    axios.post(
      'middlemobile/city/queryStartCityArr.htm',
      'timeStamp=1577013417634&uniqueId=15768119515340.8027515278901425&tFlag=1&flowCode=15770108049400.4377382064974249&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch&ruleValue=ticket'

    ).then(res => {
      this.datalist = res.data.detail.hotBookList
      this.dataloot = res.data.detail.allBookCityMap
    })
  },
  methods: {
    sora (item) {
      console.log(item)
      localStorage.setItem('tocity', item.showName)
      this.$router.push('/index')
    },
    sousuo () {
      this.dataloot = this.list.filter(item => item.includes(this.inputValue))
    },
    goback () {
      this.$router.push('/index')
    }
  }
}
</script>

<style scoped>
  .mybody {
    position: relative;
    background: #fff;
    overflow: hidden;
  }

  h4 {
    overflow: hidden;
  }

  .sou {
    background: #CCCCCC;
    width: 90%;
    border-radius: 0.2rem;
  }

  input {
    width: 100%;
  }

  .yangshi {
    height: 100%;
  }

  li {
    list-style: none;
  }

  .nav_right {
    position: fixed;
    right: 15px;
    top: 136px;
    background: #CCCCCC;
    border-radius: 15px;
  }

  .chufadi {
    text-align: center;
    line-height: 0.44rem;
    font-size: 0.18rem;
  }

  .icon {
    font-size: 0.25rem;
    color: #f60;
    line-height: 0.44rem;
    float: left;
    margin-left: 0.05rem;
  }

  .d_right {
    text-align: center;
  }

  .nav_r {
    height: 17px;
  }

  .head {
    display: flex;
  }

  .hotcity {
    float: left;
    width: 47%;
    height: 33px;
    padding-left: 0.1rem;
    line-height: 33px;
    /* text-align: center; */
    color: #F60;
  }

  .hot {
    width: 100%;
    height: 2rem;
    /* padding-left: 15px; */
    /* margin: 5px 0; */
  }

  .hot_ul {
    height: 100%;
  }

  .city {
    width: 100%;
    /* height: 1.875rem; */
    /* margin-left: 0.625rem; */
    padding-left: 0.1rem;
    line-height: 30px;
  }

  .suoyin {
    background: #CCCCCC;
    padding-left: 10px;
    height: 0.21rem;
  }
</style>
