<template>
  <div>
    <div>
      <span><</span>
      <span>出发地</span>
    </div>
    <span></span>
    <input type="text">
    <div class="hot">

      热门城市
    </div>
    <li class="hotcity" v-for="(data,index) in datalist" :key="index">
      {{data.CITY_NAME_DESC}}
      <!-- {{index}} -->
    </li>
    <li v-for="data in dataloot" :key="data.PK_CITY_ID">
      {{data}}
    </li>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      dataloot: []
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
      // console.log(this.datalist.length)
      // this.$nextTick(()=>{
      // new Swiper('.' + (this.swipername ? this.swipername : 'kerwin'), { ...defaultProps, ...this.options })
    })
  }
}

</script>

<style scoped>
  input{
    width: 100%;
  }
  li{
    list-style: none;
  }
  .hotcity{
    float: left;
    width: 25.33%;
    height: 33px;
    padding: 0 15px;
    line-height: 33px;
    /* text-align: center; */
    color: F60;
  }
  .hot{
    background: #CCCCCC;
    width: 100%;
    padding-left: 15px;
    margin: 5px 0;
  }
</style>
