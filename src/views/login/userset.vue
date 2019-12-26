<template>
	<div id="setWarp">
		<div class="goback">
		<i class="iconfont icon-houtuishangyige" @click="backClick()"></i>
		<p>设置</p>
		</div>
		<div class="helps">
			<i class="iconfont icon-wentiquestions1"></i>
			<span>帮助中心</span>
			<i class="iconfont icon-qianjin icon" @click="guide()"></i>
		</div>
			<hr/>
		<div class="helps">
			<i class="iconfont icon-guanyu"></i>
			<span>关于畅途</span>
			<i  class="iconfont icon-qianjin icon" @click="us()"></i>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    backClick () {
      this.$router.back()
    },
    guide () {
      this.$router.push('/guide')
    }
  }
	 }
</script>

<style lang="scss" scoped>
	#setWarp{
		padding: 0.1rem;
		background: white;
	.goback{
		height: 0.4rem;
		margin-top: 0.05rem;
			.icon-houtuishangyige{
				color: darkorange;
				font-size: 0.3rem;
				display: inline-block;
				float: left;
					}
				p{
					width: 85%;
					font-size: 0.18rem;
					text-align: center;
					float: left;
					color: #1B181B;
					font-weight: 500;
					margin-top: 0.03rem;
				}
			}
			hr{
				border: 0;
				border: 0.005rem solid lightgray;
			}
		.helps{
			width: 100%;
			height: 0.4rem;
			line-height:0.4rem;
			margin-top: 0.02rem;
			font-size: 0.14rem;
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

</style>
