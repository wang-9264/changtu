<template>
	<div id="about">
		<div class="goto" @click="goclick()">
			<span class="iconfont icon-houtuishangyige"></span>
			<span>关于畅途</span>
			<span class="iconfont icon-icon--"></span>
		</div>
		<div class="call">
			<ul>
				<li>畅途公告 <i class="iconfont icon-qianjin"></i></li>
				<li>畅途介绍 <i class="iconfont icon-qianjin"></i></li>
				<li>意见反馈 <i class="iconfont icon-qianjin"></i></li>
				<li>用户协议 <i class="iconfont icon-qianjin"></i></li>
				<li>客服中心 <ul><li><span>在线客服、</span> <span>电话客服</span></li></ul> <i class="iconfont icon-qianjin"></i></li>
			</ul>
		</div>
		<div class="buttom">
			<ul>
				<li>登陆</li>
				<li>注册</li>
				<li>客户端</li>
				<li>电脑版</li>
			</ul>
				<p>@2019&nbsp;苏ICP备11079920号</p>
		</div>
	</div>
</template>

<script>
// import { mapState } from 'vuex'
import { Tabbarhide, Tabbarshow } from '@/store/type'
export default {
  methods: {
    goclick () {
      this.$router.push('/center')
    }
  },
  mounted () {
    this.$store.commit(Tabbarhide)
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
	ul li{
		list-style: none;
	}
	#about{
		height: 3.662rem;
		.goto{
			height: 0.44rem;
			display: flex;
			justify-content: space-between;
			border-bottom: 0.01rem solid lightgray;
			line-height: 0.44rem;
				.iconfont{
					color: dimgray;
					font-size: 0.3rem;
					display: inline-block;
					float: left;
						}
					span{
						font-size: 0.18rem;
						color:dimgray;
						&:nth-child(3){
							margin-right:0.1rem ;
						}
					}
				}
		.call{
			height: 2.332rem;
			margin: 0.1rem auto;
			background: white;
			border-top:0.01rem solid lightgray ;
			border-bottom:0.01rem solid lightgray ;
			ul{
				display: flex;
				flex-direction: column;
				padding:0 0.05rem;
				li{
					height: 0.456rem;
					line-height: 0.456rem;
					font-size: 0.18rem;
					color: dimgray;
					display: flex;
					justify-content: space-between;
					ul{
						li{
							color: #007BBB;
							font-size: 0.14rem;
							margin-left: 0.8rem;
						}
					}
					.icon-qianjin{
						margin-right: 0.2rem;
						font-weight: 600;
						color: darkgray;
					}
					&:nth-child(2n){
						border-top:0.01rem solid lightgray ;
						border-bottom:0.01rem solid lightgray ;
					}
				}
			}
		}
		.buttom{
			height: 0.69rem;
			border-top: 0.01rem solid lightgray;

			ul{
				width: 2.5rem;
				display: flex;
				justify-content: space-around;
				margin: auto;
				li{
					line-height: 0.4rem;
					color: gray;
				}
			}
			p{
				font-size: 0.12rem;
				color: darkgray;
				text-align: center;
			}
		}
		}
</style>
