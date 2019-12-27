<template>
    <ul>
        <li v-for="(data,index) in datalist" :key="data.unselectedImageId" @click="handleclick(index)">
        <!-- <img :src="Url[index]"> -->
        <img :src="index===ind?data.imageUrl:data.unselectedImageUrl">
        <span :class="index===ind?'change':'nochange'" ref='change'>{{data.entryName}}</span>
        </li>
    </ul>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      // Url: [],
      currnet: false,
      ind: 0,
      entryUrl: ['/index', '/discover', '/travel', '/center']
    }
  },
  mounted () {
    // console.log(this.$route.path, this)
    if (this.$route.path === '/index') {
      this.ind = 0
      // console.log('index')
    } else if (this.$route.path === '/discover/recommended') {
      this.ind = 1
      // console.log('/discover/recommended')
    } else if (this.$route.path === '/travel') {
      this.ind = 2
      // console.log('/travel')
    } else if (this.$route.path === '/center') {
      // console.log('/center')
      this.ind = 3
    } else {

    }
    // console.log(this.$route.params, 111)
    axios.post('/middlemobile/app/queryEntry.htm',
      'timeStamp=1576844267508&uniqueId=15768107854190.773148202536406&tFlag=1&flowCode=15768107854200.967171246994305&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch'
    ).then(res => {
      // console.log(res.data.detail.bottomEntry)
      // console.log(this.$route.params.shopId)
      this.datalist = res.data.detail.bottomEntry
      // this.Url=this.datalist.unselectedImageUrl
      // for (var i = 0; i < this.datalist.length; i++) {
      //   this.Url.push(this.datalist[i].unselectedImageUrl)
      // }
    })
  },
  methods: {
    handleclick (index) {
      this.ind = index
      this.$router.push(this.entryUrl[index])
      // console.log(this.$router.path, 111)
      if (this.$refs.change[index].className === 'change') {
        this.$refs.change[index].className = 'nochange'
      } else {
        this.$refs.change[index].className = 'change'
      }
      // console.log(this.Url[index],3333,this.currnet)
    }
  }
}
</script>
<style lang="scss" scoped>
*{
    padding:0px;
    margin:0px;
}
.change{
    color: #ff7600;
}
html,body{
  width: 100%;
  height: 100%;
}
ul{
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 3.76rem;
  // width: 100%;
  height: 0.49rem;
  list-style: none;
  box-shadow: -0.02rem -0.02rem 0.1rem 0 rgba(0,0,0,.2);
  li{
  flex: 1;
  // justify-content: space-around;
  display: flex;
  flex-direction:column;
  align-items:center;
  text-align: center;
  background: white;

  img{
    width: 0.23rem;
    height: 0.23rem;
  }
}
  }

</style>
