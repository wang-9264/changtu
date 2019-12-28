<template>
  <div class="mybody" ref="city_List">
    <div class="head">
      <span>
        <span class="iconfont icon-houtuishangyige icon" @click="goback()"></span>
        <p class="chufadi"> 出发地</p>
      </span>
    </div>

    <div class="city_searchBox" ref="search">
      <input class="" type="text">
    </div>
    <mt-index-list>
      <mt-index-section v-for="(item,index) in dataloot" :key="index" :index="index">
        <mt-cell v-for="(list,indexList) in item" :key="indexList" :title="list.showName">
        </mt-cell>
      </mt-index-section>
    </mt-index-list>
    <!--  <mt-index-section index="B">
    <mt-cell title="Baldwin"></mt-cell>
    <mt-cell title="Braden"></mt-cell>
  </mt-index-section>
  ...
  <mt-index-section index="Z">
    <mt-cell title="Zack"></mt-cell>
    <mt-cell title="Zane"></mt-cell>
  </mt-index-section> -->
    <!-- </mt-index-list>
 -->
    <!--    <div class="nav_right" ref="city_sort">
      <li class="nav_r"  v-for="(data,index) in dataloot" :key="index" @click="sora(index)">
        <h4 ref="myid" class="d_right">
          {{index}}
        </h4>
      </li>
    </div> -->

    <!--       <li v-for="(data,index) in dataloot" :key="index">
      <div>
        <div class="suoyin" ref="myid">
          {{index}}
        </div>
        <ul>
          <li class="city" v-for="(item,index2) in data" :key="index2" @click="sora(item)">
            {{item.showName}}
          </li>
        </ul>
      </div>
    </li>
 -->
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
      // console.log(res.data)
      // console.log(res.data.detail.hotBookList)

      this.datalist = res.data.detail.hotBookList
      this.dataloot = res.data.detail.allBookCityMap
      // console.log(this.dataloot)
    })
  },
  methods: {
    sora (item) {
      // console.log(item[0])
      localStorage.setItem('tocity', item.showName)
      this.$router.push('/index')
    }

    // goback() {
    //   this.$router.push('/index')
    // },
    // regItem(item) {
    //   let regVal = new RegExp(this.searchVal)
    //   return regVal.test(item.cityPl) || regVal.test(item.showName);
    // },
    // regListItem(item) {
    //   let regVal = new RegExp(this.searchVal)
    //   for (let i = 0; i < item.length; i++) {
    //     if (regVal.test(item[i].cityPl) || regVal.test(item[i].showName)) {
    //       return true;
    //     }
    //   }
    // }

    // sora(index){
    //   // console.log(this.index = )

    //   // console.log(this.$refs.myid[index])
    //   // console.log(index.CITY_FIRST_LETTER)
    //   console.log($refs.CITY_FIRST_LETTER)
    // }

  },
  sora (index) { // 点击左侧字母跳到对应的内容块
    // var h4 = getElementsByTagName(this.index);
    // console.log(index.offsetTop)
    // this.$refs.city_sort.parentNode.scrollTop = this.index.offsetTop;
    //     this.$refs.city_List.toScrollTop(-h4[index].offsetTop);
    // },
    // handleToCity(nm,id){
    //     this.$store.commit('city/CITY_INFO',{ nm , id });
    //     window.localStorage.setItem('nowNm',nm);
    //     window.localStorage.setItem('nowId',id);
    //     this.$router.push('/movie/nowPlaying');
  }
}
</script>

<style scoped>
  .mybody {
    position: relative;
    background: #fff;
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
