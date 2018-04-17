<template>
	<div class="registerTel">
		
		<div class="registerTel_wrap">
			<registerHeader :name="headerName"  @backLast="backLast"></registerHeader>
			<div class="registerTel_content">
				<input class="regist_tel login_input w_100" type="tel" placeholder="输入手机号码" autofocus="autofocus" ref="telNum" @input="telInput($event)">
				<h5><span>* </span>绑定手机可提高账号安全性，并获得200铜板奖励</h5>
				<a href="javascript:;" class="regist_btn regist_btn_01" @click="telBtn($event)" ref="telBtnEle">下一步</a>
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
					this.$router.push("/wzsjIndex/login/registerTel/registerValide")
				}
			},
			telInput(event){
				const tag=event.currentTarget||event.target
				let num=tag.value			
				if(num.length==11){					
					this.$refs.telBtnEle.style.backgroundColor="#ff750f"
				}else{
					this.$refs.telBtnEle.style.backgroundColor="#c5c5c5"
				}
				
			}
		}
	}
</script>

<style scoped="scoped">
	.registerTel,.registerTel_wrap{
		width: 100%;
		min-height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 400;
		background: #fff;
	}
	.registerTel_content{
		width: 100%;
		padding: 0.4rem 0.3rem;
	}
	.w_100 {
	    width: 100%;
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
	.registerTel_content h5 {
	    font-size: 0.10rem;
	    color: #a5a5a5;
	    margin-top: 0.06rem;
	}
	.registerTel_content h5 span{
	    color: #db1500;
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