<template>
  <div>
    <div>
      <span>
        </span>
        <span>出发地
      </span>
    </div>
    <span></span>
    <input type="text" v-model="inputValue" @input="sousuo()">
    <div class="hot">

      热门城市
    </div>
    <li class="hotcity" v-for="(data,index) in datalist" :key="index">
      {{data.CITY_NAME_DESC}}
    </li>

    <li v-for="(data,index) in dataloot" :key="index">

      <div>
        <div class="suoyin">
          {{index}}
        </div>
        <ul>
          <li class="city" v-for="(item,index2) in data" :key="index2" @click="sora(item)">
            {{item.showName}}
          </li>

        </ul>
      </div>
    </li>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { IndexList, IndexSection } from 'mint-ui'

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
      console.log(res.data)
      // console.log(res.data.detail.hotBookList)

      this.datalist = res.data.detail.hotBookList
      this.dataloot = res.data.detail.allBookCityMap
      console.log(this.dataloot)
    })
  },
  methods: {
    sora (item) {
      console.log(item.showName)
      localStorage.setItem('startcity', item.showName)
    },
    sousuo () {
      this.dataloot = this.list.filter(item => item.includes(this.inputValue))
    }
  }
}
</script>

<style scoped>
  input {
    width: 100%;
  }

  li {
    list-style: none;
  }

  .hotcity {
    float: left;
    width: 27.33%;
    height: 33px;
    padding: 0 15px;
    line-height: 33px;
    /* text-align: center; */
    color: #F60;
  }

  .hot {
    background: #CCCCCC;
    width: 100%;
    padding-left: 15px;
    margin: 5px 0;
  }

  .city {
    width: 100%;
    height: 1.875rem;
    margin-left: 0.625rem;
    line-height: 30px;
  }

  .suoyin {
    background: #CCCCCC;
    padding-left: 10px;
  }
</style>
