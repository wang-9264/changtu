<template>
	<div id="setWarp">
		<div class="set">
			<div class="goback">
			<i class="iconfont icon-houtuishangyige" @click="backClick()"></i>
			<p>设置</p>
			</div>
			<div class="helps">
				<i class="iconfont icon-wentiquestions1"></i>
				<span>帮助中心</span>
				<i class="iconfont icon-qianjin icon" @click="guide()"></i>
			</div>
				<div class="hr"></div>
			<div class="helps">
				<i class="iconfont icon-guanyu"></i>
				<span>关于畅途</span>
				<i  class="iconfont icon-qianjin icon" @click="us()"></i>
			</div>
		</div>
	</div>
</template>

<script>

import { Tabbarhide, Tabbarshow } from '@/store/type'
export default {
  methods: {
    backClick () {
      this.$router.back()
    },
    guide () {
      this.$router.push('/guide')
    },
    us () {
      this.$router.push('/abouttrip')
    }
  },
  beforeMount () {
    this.$store.commit(Tabbarhide)
  },

  beforeDestroy () {
    this.$store.commit(Tabbarshow)
  }
	 }
</script>

<style lang="scss" scoped>
	#setWarp{
		height: 6.7rem;
		background: #f6f6f6 url(https://m.changtu.com/_nuxt/img/changBg.46f1cef.png) no-repeat center 5.5rem;
		background-size:1.405rem ;
		.set{
			background: white;
	.goback{
		height: 0.4rem;
		padding: 0.1rem;
		padding-bottom: 0;
		margin-top: 0.05rem;
			.icon-houtuishangyige{
				color: darkorange;
				font-size: 0.3rem;
				display: inline-block;
				float: left;
					}
				p{
					width: 80%;
					font-size: 0.18rem;
					text-align: center;
					float: left;
					color: #1B181B;
					font-weight: 500;
					margin-top: 0.03rem;
				}
			}
			.hr{
				padding: 0 0.02rem;
				border: 0;
				border-bottom: 0.005rem solid lightgray;
				width: 3.5rem;
				margin: 0 auto;
			}
		.helps{
			width: 95%;
			height: 0.4rem;
			line-height:0.4rem;
			font-size: 0.14rem;
			padding: 0.1rem;
			padding-bottom: 0;
			.iconfont{
				color: dimgray;
				font-size: 0.2rem;
				}
			.icon{
				float: right;
				font-size: 0.2rem;
			}
			span{
				margin-left: 0.06rem;
			}
		}
		}
}

</style>
