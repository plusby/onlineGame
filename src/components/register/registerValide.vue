<template>
	<div class="registerValide">
		
		<div class="registerValide_wrap">
			<registerHeader :name="headerName"  @backLast="backLast"></registerHeader>
			<div class="registerValide_content">
				<p class="mb_30"><span class="color_gray">已发送验证码至</span><span class="user_tel">18788835816</span></p>
				<div class="get_code_wrap">
		            <input class="code_msg login_input" type="number" placeholder="输入验证码" autofocus="autofocus" ref="code" @input="telInput($event)">
		            <input type="button" id="get_code" class="get_code login_input" :value="codeVal" disabled="true" style="background: rgb(197, 197, 197);">
		        </div>
		        <input class="login_input w_100 set_password" type="tel" placeholder="设置登录密码" @input="telInput($event)" ref="pass">
		        <a href="javascript:;" class="regist_btn regist_btn_02" @click="telBtn($event)" ref="telBtnEle">下一步</a>
			</div>
		</div>
		 <transition name="slide_left">
	    	<router-view/>  
	   </transition>	
	</div>
</template>

<script>
import registerHeader from '../community/header/header'	
	export default{
		data(){
			return{
				headerName:"注册",
				codeVal:"获取验证码"
			}
		},
		components:{
			registerHeader
		},
		mounted(){
			
		},
		methods:{
			backLast(val){
				
			},
			telBtn(event){
				const tag=event.currentTarget||event.target						
				if(tag.style.backgroundColor=="rgb(255, 117, 15)"){
					this.$router.push("/wzsjIndex/login/registerTel/registerValide/registerIco")
				}
			},
			telInput(event){				
				let code=this.$refs.code.value
				let pass=this.$refs.pass.value						
				if(pass.length>=6&&code.length>3){					
					this.$refs.telBtnEle.style.backgroundColor="#ff750f"
				}else{
					this.$refs.telBtnEle.style.backgroundColor="#c5c5c5"
				}
				
			}
		}
	}
</script>

<style scoped="scoped">
	.registerValide,.registerValide_wrap{
		width: 100%;
		min-height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 400;
		background: #fff;
	}
	.registerValide_content{
		width: 100%;
		padding: 0.4rem 0.3rem;
		font-size: 0.12rem;
	}
	.mb_30 {
	    margin-bottom: 0.3rem;
	}
	.color_gray {
	    color: #a5a5a5;
	}
	.get_code_wrap {
	    overflow: hidden;
	    margin-bottom: 0.20rem;
	}
	.login_input {
	    font-size: 0.14rem;
	    padding: 0.12rem;
	    border: 0.01rem #d5d5d5 solid;
	    line-height: 0.16rem;
	    -webkit-appearance: none;
	    -webkit-tap-highlight-color: rgba(0,0,0,0);
	    outline: none;
	    border-radius: 0;
	    background-color: transparent;
	}
	.code_msg {
	    width: 66%;
	    float: left;
	}
	.get_code {
	    background: rgb(31, 216, 192) !important;
	    width: 30%;
	    float: right;
	    color: #ffffff;
	}
	.w_100 {
	    width: 100%;
	}
	.regist_btn {
	    width: 70%;
	    margin: 0 auto;
	    line-height: 0.4rem;
	    text-align: center;
	    background: #c5c5c5;
	    font-size: 0.18rem;
	    color: #ffffff;
	    margin-top: 0.3rem;
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