<template>
	<div class="login">
		<div class="login_wrap">
			<loginHeader :name="headerName"  @backLast="backLast"></loginHeader>
			<div class="login_content">
				<input class="login_accout login_input" type="text" placeholder="手机号/用户名" ref="userName"></input>
				<input type="text" class="login_password login_input" placeholder="输入密码" ref="passwd"/>
				<a href="javascript:;" class="login_btn" @click="loginBtn()">登&nbsp;&nbsp;录</a>
				<div class="login_tips_wrap">
		            <a href="javascript:;" @click="regist()">手机注册</a>
		            <a href="javascript:;">忘记密码</a>
		        </div>
			</div>
			<h3 class="login_tips">
		        <span>第三方登录</span>
		    </h3>
		    <div class="login_three_wrap">
		        <a href="javascript:;" class="p_icon_bg_qq">
		        </a>
		        <a href="javascript:;" class="p_icon_bg_wechat"></a>
		        <a href="javascript:;" class="p_icon_bg_weibo"></a>
		    </div>
		    <p class="prompt" v-if="promptFlage">{{prompt}}</p>
	    </div>
	    <transition name="slide_left">
	    	<router-view/>  
	    </transition>
	</div>
</template>

<script>
	import loginHeader from '../community/header/header'	
	import { mapMutations } from 'vuex';
	import getRoutePath from '../../common/js/getRoutePath'
	export default{
		data(){
			return{
				headerName:"登录",
				prompt:"",
				promptFlage:false
			}
		},
		components:{
			loginHeader
		},
		methods:{
			...mapMutations({
				setCurrUser:"CURRUSER"
			}),
			backLast(val){
				
			},
			loginBtn(){
				let userName=this.$refs.userName.value
				let pass=this.$refs.passwd.value
				if(!userName||!pass){
					this.prompt="请输入用户名和密码"
					this.promptFlage=true
					setTimeout(()=>{
						this.promptFlage=false
					},1300)
				}else{
					this.setCurrUser(userName)
					this.$router.go(-1)
					
				}
			},
			//注册按钮
			regist(){
				this.$router.push("/wzsjIndex/login/registerTel")
			}
		}
	}
</script>

<style scoped="scoped">
	.login{
		width: 100%;
		position: fixed;
		min-height: 100%;
		background: #fff;
		top: 0;
		left: 0;
		z-index: 300;
	}
	.login_wrap{
		width: 100%;
		min-height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 300;
	}
	.prompt{
		width: 50%;
		line-height: 0.3rem;
		background: #000000;
		color: #fff;
		text-align: center;
		font-size: 0.14rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,0);
	}
	.login_content{
		padding: 0.4rem 0.3rem;
	}
	.login_input{
		    width: 100%;
		    margin-bottom: 0.20rem;
		    -webkit-appearance: none;
		    -webkit-tap-highlight-color: rgba(0,0,0,0);
		    outline: none;
		    border-radius: 0;
		    background-color: transparent;
		    font-size: 0.14rem;
		    padding: 0.12rem;
		    border: 0.01rem #d5d5d5 solid;
		    line-height: 0.16rem;
	}
	.login_input::-moz-placeholder{
		color: #CCCCCC;
	}
	::-webkit-input-placeholder{
		color: #CCCCCC;
	} 
	.login_btn{
		    line-height: 0.5rem;
		    background: #ff6c06;
		    text-align: center;
		    font-size: 0.18rem;
		    color: #fff;
	}
	.login_tips_wrap{
		    display: flex;
    		margin-top: 0.25rem;
    		justify-content: space-between;
	}
	.login_tips_wrap a{
		    font-size: 0.14rem;
		    color: #2db0f4;
		    text-decoration: underline;
	}
	.login_tips{
		    font-size: 0.14rem;
		    color: #555555;
		    font-weight: normal;
		    text-align: center;
		    position: relative;
		    margin-bottom: 0.4rem;
	}
	.login_tips::before{
		    content: '';
		    height: 0.01rem;
		    background: #d5d5d5;
		    width: 38%;
		    position: absolute;
		    left: 0;
		    top: 50%;
	}
	.login_tips::after{
		    content: '';
		    height: 0.01rem;
		    background: #d5d5d5;
		    width: 38%;
		    position: absolute;
		    right: 0;
		    top: 50%;
	}
	.login_three_wrap{
		width: 1.85rem;
	    margin: 0 auto;
	    display: flex;
	    justify-content: space-between;
	}
	.login_three_wrap>a{

		    width: 0.45rem;
		    height: 0.45rem;
		    display: block;
	}
	.p_icon_bg_qq{
		background: url(../../img/wzsjImg/qq_icon.png) no-repeat;
		background-size: 100% 100%;		
	}
	.p_icon_bg_wechat{
		background: url(../../img/wzsjImg/wx_icon.png) no-repeat;
		background-size: 100% 100%;		
	}
	.p_icon_bg_weibo{
		background: url(../../img/wzsjImg/xl_icon.png) no-repeat;
		background-size: 100% 100%;		
	}
	.slide_left-enter-active,.slide_left-leave-active{
    	transition: all 0.5s; 
    }
    .slide_left-enter{
    	transform: translate3d(100%,0,0);
    }
    .slide_left-leave,.slide_left-leave-active{
    	transform: translate3d(100%,0,0);
    }
</style>