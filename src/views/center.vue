 <template>
     <div id="centerWarp">
 		<div class="usersection">
 			<div class="userbox">
 				<div class="loginWarp">
 					<div class="login">
 						<img src="https://m.changtu.com/_nuxt/img/userMo.39e011d.png" alt="" class="img">
 						<div class="signcheck">
 							<div class="sign" @click="handeleClick()">登陆/注册</div>
 							<div class="check" @click="handeleClick()">签到</div>
 						</div>
 						<div class="set" @click="setClick()">
 						</div>
 					</div>
 				<div class="logindown">
 					<p @click="handeleClick()">个人账户</p>
 					<p @click="handeleClick()">优惠券</p>
 					<p @click="handeleClick()">红包</p>
 					<p @click="handeleClick()">畅币</p>
 				</div>
 				</div>

 				<div class="sectionWArp">
 					<div class="section" >
 						<div class="imgWarp" @click="handeleClick()">
 						<img src="../../public/images/userIco.7283099_03.png" alt="">
 						<p>待支付</p>
 						</div>
 						<div class="imgWarp"  @click="handeleClick()">
 						<img src="../../public/images/userIco.7283099_06.png" alt="">
 						<p>待出行</p>
 						</div>
 						<div class="imgWarp" @click="handeleClick()">
 						<img src="../../public/images/userIco.7283099_08.png" alt="">
 						<p>待评价</p>
 						</div>
 						<div class="imgWarp" @click="handeleClick()">
 						<img src="../../public/images/userIco.7283099_10.png" alt="">
 						<p>我的订单</p>
 						</div>
 					</div>
 					<div class="section">
 						<div class="imgWarp"  @click="handeleClick()">
 						<img src="https://m.changtu.com/_nuxt/img/upScene.c91c3b2.png" alt="">
 						<p>我的实景</p>
 						</div>
 						<div class="imgWarp" @click="handeleClick()">
 						<img src="https://m.changtu.com/_nuxt/img/upAnser.47b541c.png" alt="">
 						<p>我的问答</p>
 						</div>
 						<div class="imgWarp" @click="handeleClick()">
 						<img src="https://m.changtu.com/_nuxt/img/upPing.d784eb6.png" alt="">
 						<p>我的评价</p>
 						</div>
 						<div class="imgWarp" @click="handeleClick()">
 						<img src="https://m.changtu.com/_nuxt/img/upCang.c50d328.png" alt="">
 						<p>我的收藏</p>
 						</div>
 					</div>
  					<div class="section" >
 						<div class="imgWarp" v-for="(data,index) in datalist" :key="index"  @click="handeleClick()">
 							 <img :src="data.focusImgUrl" alt="" :key="data.focusSeq">
 							<p >{{data.focusTitle}}</p>
 						</div>
 					</div>
 				</div>
 			</div>
		<div class="c-top">
				C-TOP会员
		</div>
 		</div>
 	</div>
 </template>
<script>
import Axios from 'axios'
export default {
 	 data () {
 		 return {
 			 datalist: []
 		 }
 	 },
 	 mounted () {
 		 Axios.post('/middlemobile/member/getUserMarea.htm',
 		 'timeStamp=1577082612219&uniqueId=15768105475990.3552099713412391&tFlag=1&flowCode=15770621367510.16590207163591697&orderSourceId=10322&orderChannel=1&orderSourceName=%E7%95%85%E9%80%94%E7%BD%91--%E8%A7%A6%E5%B1%8F%E7%89%88--%E6%96%B0%E7%89%88&channelEnvWord=touch'
 		 ).then(res => {
 			//  console.log(res.data.detail)
 			 this.datalist = res.data.detail
 			//  console.log(this.datalist)
 		 })
 	 },

 	 methods: {
 	 handeleClick () {
 		 this.$router.push('/login')
 	 },
	 setClick () {
		 this.$router.push('/userset')
	 }
 	 }
}
</script>

 <style lang="scss" scoped>
#centerWarp{
	height: 7rem;
	background: #f5f5f5 url(https://m.changtu.com/_nuxt/img/changBg.46f1cef.png) no-repeat center 4rem;
	background-size:1.5rem ;
 		.usersection{
 			width: 100%;
 			height:2.55rem;
 			font-size: 0.12rem;
 				.userbox{
 				width: 100%;
 				height: 1.8rem;
 				border-radius:0 0 0.05rem 0.05rem;
				background: url(https://m.changtu.com/_nuxt/img/userBg.e85cbfb.png) no-repeat;
				background-size:3.8rem ;
 				position: relative;
 				.logindown{
 					display: flex;
 					justify-content: space-around;
 					width: 100%;
 					color: white;
 					font-size: 0.13rem;
 				}
 				.login{
 					font-size: 0.18rem;
 					color: white;
 					height: 1rem;
 					.img{
 						width: 0.6rem;
 						height: 0.6rem;
 						border-radius:50% ;
 						border: 0.02rem solid darkorange;
 						float: left;
 						margin: 0.2rem;
 						}
 					.signcheck{
 						float: left;
 						margin-top: 0.3rem;
 					}
 					.check{
 						font-size:0.13rem;
 						width: 0.45rem;
 						height:0.18rem;
 						background:white ;
 						color: orange;
 						border-radius:0.3rem;
 						text-align: center;
 						margin-top:0.05rem ;
 					}
 					.set{
 						width:0.3rem;
 						height:0.3rem;
 						background: url(https://m.changtu.com/_nuxt/img/userIco.7283099.png) no-repeat ;
 						background-size:1.5rem ;
 						float: right;
 						margin-right:0.2rem ;
 						margin-top: 0.3rem;
 					}
 				}
 				.sectionWArp{
 					position: absolute;
 					bottom:-2.2rem;
 					z-index: 1;
 					display: flex;
 					flex-direction:column;
					margin-left: 0.05rem;
 					.section{
 						background: white;
 						width: 3.45rem;
 						height: 0.8rem;
 						border-radius: 0.05rem;
 						margin-left:0.1rem;
 						margin-bottom: 0.05rem;
 						display: flex;
 						justify-content: space-around;
 						align-items: center;

 						.imgWarp{
 							img{
 								width: 0.25rem;
 							}
 							display: flex;
 						align-items: center;
 						flex-direction: column;
 						}
 					}
 				}
 		}
		.c-top{
			width: 1.06rem;
			height: 0.28rem;
			background: #171C19;
			position: fixed;
			right: 0;
			bottom: 0.55rem;
			text-align: center;
			color: white;
			font-size: 0.14rem;
			line-height: 0.28rem;
			border-radius: 0.3rem;
		}
 		}
}
 </style>
