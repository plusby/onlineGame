<template>
	<div class="phoneMsg" @touchmove.prevent>
		<ul>
			<li>
				<input class="tel_input" type="tel" placeholder="请输入11位手机号码">
			</li>
			<li>
				<input class="code_num" type="number" placeholder="请输入6位短信验证码">
				<input type="button" class="get_code" value="获取验证码">
			</li>
		</ul>
		<a href="javascript:;" class="go_reserve">立即预约</a>
		<a href="javascript:;" class="close_reserve_btn" @click="closeTel()"></a>
	</div>
</template>

<script>
	export default{
		props:['telFlage'],
		methods:{
			closeTel(){
				//通过传入对象直接操作这个对象，不在需要$emit
				this.telFlage.flage=false
				this.$emit("backTelFlage",false)
			}
		}
	}
</script>

<style scoped="scoped">
	.phoneMsg{
		    position: fixed;
		    font-size: 0;
		    z-index: 999;
		    max-width: 640px;
		    margin: -25% auto 0;
		    width: 78%;
		    left: 11%;
		    background: #ffffff;
		    top: 50%;
		    padding-top: 0.25rem;
	}
	.phoneMsg ul{
		width: 86%;
	    margin: 0 auto;
	    margin-bottom: 0.05rem;
	}
	.phoneMsg ul li{
		    margin-bottom: 0.2rem;
    		overflow: hidden;
	}
	.phoneMsg ul input {
	    border: 1px #c5c5c5 solid;
	    padding: 0.14rem 0;
	    text-indent: 1em;
	    font-size: 0.12rem;
	    color: #202020;
	    line-height: 0.14rem;
	}
	.phoneMsg .tel_input {
	    width: 100%;
	}
	.code_num{
		    float: left;
    		width: 58%;
	}
	.phoneMsg .get_code{
		    width: 37.5%;
		    float: right;
		    text-indent: 0;
		    background: #ffffff;
		    text-align: center;
		    border: 1px #ff7f19 solid;
		    color: #ff7f19;
	}
	.go_reserve, .reserve_close {
	    font-size: 0.18rem;
	    color: #ffffff;
	    text-align: center;
	    width: 100%;
	    height: 0.5rem;
	    line-height: 0.5rem;
	    background: #ff7f19;
    }
    .close_reserve_btn {
	    width: 0.4rem;
	    height: 0.4rem;
	    background:url(../../../img/wzsjImg/close_btn.png) no-repeat;
	    background-size: 0.4rem 0.4rem;
	    position: absolute;
	    left: 50%;
	    margin-left: -0.2rem;
	    bottom: -0.6rem;
	}
</style>