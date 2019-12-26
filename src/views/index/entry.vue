<template>
  <div class="myentry">

    <li v-for="(data,i) in datalist" :key="i">
       <!-- {{data.imageUrl}} -->
      <a href="">
        <img :src=data.imageUrl alt="">
        <span>
          {{data.entryName}}
        </span>
      </a>
    </li>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.post(
      'middlemobile/app/queryEntry.htm',
      'timeStamp=1577088324413&uniqueId=15768119515340.8027515278901425&tFlag=1&flowCode=15770882554680.6271856334028012&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch'

    ).then(res => {
      console.log(res.data.detail.topEntry)
      this.datalist = res.data.detail.topEntry
      console.log(this.datalist.imageUrl)
    })
  }
}

</script>

<style lang="scss" scoped>
  *{
    list-style: none;
  }
  .myentry{
	  height:1.3rem;
  }
  div{
    width: 100%;
    height:100%;
    li{
      a{
        font-size:0.2rem;
            font-weight: 600;
            color: #fff;
      }
      img{
        width: 48.9%;
        float: left;
        position: relative;
        margin:0.02rem

    }
  }
  span{
    position:relative;
    display: block;
    float: left;
    width: 40%;
    height:0.1rem;
    margin-left:-1.57rem;
    margin-top:0.19rem

  }

  }
</style>
