<template>
	<div id="guideWrap" >
		<div class="goback">
			<i class="iconfont icon-houtuishangyige" @click="goclick()"></i>
			<span>购票指南</span>
			<span>新手指南</span>
		</div>
	<div class="L0">
	<swiper :options="{
	  loop:false,
	  pagination:{},
	  slidesPerView: 4,
	  spaceBetween: 30,
	  freeMode: true,
	}" class="boards" swipername="boards" v-if="datalist.length" >
	<ul class="swiper-slide" v-for="(data,index) in datalist" :key="index" >
	    <li :class="index===inds? 'boardname'  : ' '" @click="bordes(index)">{{data.boardName}}</li>
	</ul>
	</swiper>
	</div>
	<swiper @swipes="ww"  :options="{
	  slidesPerView: 1,
	  spaceBetween: 10,
	  pagination: {
		clickable: true,
	    },

	}" class="photos" swipername="photos" v-if="datalist.length">
	<ul class="swiper-slide" v-for="data in datalist" :key="data.title" >
	    <li>
			<img :src="data.imageId" alt="">
			<div class="guidebox" v-for="data in list" :key="data.pkNewsId">
				<h3>{{data.title}}</h3>
				<p>{{data.content}}</p>
			</div>
		</li>
	</ul>
	</swiper>

	</div>
</template>

<script>
import Axios from 'axios'
import swiper from '@/components/swiper'
// import { mapState } from 'vuex'
import { Tabbarhide, Tabbarshow } from '@/store/type'
export default {
	  data () {
	    return {
      inds: 0,
		  list: [],
	      datalist: [],
		  eee: null
	    }
	  },
  components: {
	    swiper
	  },
	  mounted () {
		  this.$store.commit(Tabbarhide)
	      Axios.post('/about/queryNewsBoards',
      'timeStamp=1577259881593&uniqueId=15768105475990.3552099713412391&tFlag=1&flowCode=15771917144980.6634046297564555&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch&boardEnName=commonQs'
    ).then(res => {
	        // console.log(res.data)

	        this.datalist = res.data.data
    })
    Axios.post('/about/queryNewsContents',
      'timeStamp=1577260450167&uniqueId=15768105475990.3552099713412391&tFlag=1&flowCode=15771917144980.6634046297564555&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch&boardEnName=takeTicketsQs'

    ).then(res => {
      this.list = res.data.data
    })
  },
  methods: {
	  goclick () {
      this.$router.go(-1)
	  },
	 bordes (index) {
		  this.inds = index
		   this.eee.slideTo(index + 1, 1000, false)
	 	  },
	 	  ww (swipes) {
	 		  // console.log(swipes,"fuchuNs")
			  this.eee = swipes
	 	  }
  },
  beforeMount () {
    // this.$store.state.isShow = false;
    this.$store.commit(Tabbarhide)
    // this.$store.commit("show");
  },

  beforeDestroy () {
    // this.$store.state.isShow = true;
    this.$store.commit(Tabbarshow)
  }
}
</script>

<style lang="scss" scoped>
	.boardname{
		font-weight: 600;
	}
	ul li{
		list-style: none;
	}
	#guideWrap{
background: #f5f5f5;
	.goback{
		height: 0.5rem;
		display: flex;
		justify-content: space-between;
		background: white;
		line-height: 0.5rem;
			.icon-houtuishangyige{
				color: darkorange;
				font-size: 0.3rem;
				display: inline-block;
				float: left;
					}
				span{
					font-size: 0.18rem;
					&:nth-child(3){
						color:orangered;
						font-size: 0.14rem;
						margin-right:0.08rem ;
					}
				}
			}
			.boards{
				height: 0.4rem;
				line-height: 0.4rem;
					font-size: 0.14rem;

			}

			.swiper-slide{
					float: left;
					img{
						width: 3.75rem;
						height: 0.9rem;
						margin: 0 auto;
					}
					.guidebox{
						margin: 0.1rem auto 0;
						background: white;
						width: 3.75rem;
						height: 0.9rem;
						h3{
							font-weight: 500;
							font-size: 0.15rem;
							color: coral;
							line-height: 0.3rem;
						}
						p{
							font-size: 0.15rem;
						}
						}
			}

	}

</style>
