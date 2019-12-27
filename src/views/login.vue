 <template>
 	<div class="landing">
		<div class="top">
			<div class="back">
			<span class="iconfont icon-houtuishangyige" @click="backClick()"></span>
			<p>登录</p>
			</div>
		</div>
		<div class="buttom">
			<div class="switch">
				<p v-for="(data,index) in list" :key="index"
				   :class="index===ind? 'lander'  : ' '" @click="loginClick(index)" ref="change">
				{{data.title}}
				</p>

			</div>

			<div class="judeg" v-if="go">
				<div class="judegtext">
					<i class="iconfont icon-wode"></i>
					<input type="text" placeholder="手机号/昵称/邮箱">
				</div>
				<div class="judegtext">
					<i class="iconfont icon-suo"></i>
					<input type="password" placeholder="登陆密码">
				</div>
			</div>

			<div class="judeg2" v-if="back">
				<div class="judegtext">
					<i class="iconfont icon-wode"></i>
					<input type="text" placeholder="已验证的手机号">
				</div>
				<div class="judegtext">
					<i class="iconfont icon-youjian1"></i>
					<input type="password" placeholder="动态密码" class="judepassword">
				<span class="gain">获取动态密码 </span>
				</div>
			</div>

			<div class="foget">
				<div>忘记密码？</div>
				<div>快速注册</div>
			</div>
			<p>第三方账号登陆</p>
			<div class="third">
				<div class="QQ">
					<i class="iconfont icon-qq"></i>
				</div>
				<div class="QQ QQ1">
					<i class="iconfont icon-web_xinlangweibo"></i>
				</div>
			</div>
		</div>
 	</div>
 </template>

<script>
// import { mapState } from 'vuex'
import { Tabbarhide, Tabbarshow } from '@/store/type'
 	export default {
  data () {
    return {
      go: true,
      back: false,
      ind: 0,
      list: [
        {
          title: '普通登录'

        },
        {
          title: '动态密码登陆'

        }
      ]
    }
  },
  methods: {
    backClick () {
      this.$router.back()
    },
    loginClick (index) {
      this.ind = index
      if (this.$refs.change[index].className === 'lander') {
		  this.$refs.change[index].className = ' '
      } else {
		  this.$refs.change[index].className = 'lander'
		 this.go = !this.go
		 this.back = !this.back
      }
      // console.log(index,this.$refs.change[index],11)
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
	.lander{
	 	background: lightgray !important;
	 	color: gray !important;
	 }
	ul li{
		list-style: none;
	 }
	.landing{
		height: 100%;
		background: white;
		width: 100%;
	.top{
		width: 100%;
		height: 2.4rem;
		background: url(https://m.changtu.com/_nuxt/img/banner.ba6979e.png) no-repeat;
		background-size:cover ;
		overflow: hidden;
		.back{
			width:100%;
			height: 0.4rem;
			margin-top: 0.03rem;
				.icon-houtuishangyige{
					color: white;
					font-size: 0.3rem;
					display: inline-block;
					float: left;
						}
					p{
						width: 3rem;
						font-size: 0.2rem;
						text-align: center;
						float: left;
						color: white;
						font-weight: 500;
						margin-top: 0.03rem;
					}
				}
			}
		.buttom{
			width: 100%;
			height: 4.5rem;
			background:white;
			.judegtext{
				width: 2.8rem;
				height: 0.3rem;
				border-bottom: 0.01rem solid darkgray ;
				margin: 0.15rem auto;
		.iconfont{
			font-size: 0.18rem;
			color: darkgray;
		}
			input{
				border: 0;
				width: 2.5rem;
				height:0.28rem;
				outline:none;
				margin-left:0.05rem;
				font-size: 0.18rem;
				color: lightgray;
			}
		.judepassword{
			width: 1.6rem;
		 }
		.gain{
			width: 1.8rem;
			height: 0.2rem;
			border-radius: 0.2rem;
			border: 0.01rem solid darkgray;
			line-height: 0.2rem;
			color: lightgray;
			font-size: 0.14rem;
			}
		}
		.switch{
			 width: 3.1rem;
			 height: 0.4rem;
			 margin: 0 auto;
			p{
				width: 1.5rem;
				height: 0.4rem;
				border: 0.01rem solid lightgray;
				float: left;
				text-align: center;
				line-height:0.4rem;
				background: white;
				color: darkorange;
				&:nth-child(1){
				 border-radius:0.2rem 0 0 0.2rem;
				}
				&:nth-child(2){
			 	border-radius:0 0.2rem 0.2rem 0;
			    }
			}
		}
		.foget{
			width: 2.8rem;
			height: 0.8rem;
			margin: 0 auto;
			div{
				&:nth-child(1){
					float: left;
				}
				&:nth-child(2){
					float: right;
					color: darkorange;
				}
			}
		}
		p{
			text-align: center;
			font-size: 0.13rem;
			color: darkgray;
		}
		.QQ{
			margin: 0.1rem auto;
			width: 0.4rem;
			height: 0.4rem;
			border-radius: 50%;
			border: 0.01rem solid skyblue;
			float: left;
			text-align: center;
			line-height: 0.4rem;
			.icon-qq{
				color: skyblue;
				font-size: 0.2rem;
			}
			.icon-web_xinlangweibo{
				color: indianred;
				font-size: 0.25rem;
			}
		}
		.QQ1{
		 	border: 0.01rem solid indianred ;
			float: right;
		}
		.third{
			width: 1.1rem;
			height: 0.6rem;
			margin: 0 auto;
		}
	}
}
 </style>
