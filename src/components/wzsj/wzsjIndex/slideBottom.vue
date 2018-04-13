<template>
	<div class="slideBottom">
		<div class="slideBottom_wrap" v-if="showData=='qq'">
				<p class="slideBottom_head">关注后即可领取专属福利</p>
				<ul class="slideBottom_list">
					<li>
						<img src="../../../img/wzsjImg/qq_icon.png" alt="" />
						<h4>官方1群</h4>
						<p>123456789</p>
					</li>
					<li>
						<img src="../../../img/wzsjImg/qq_icon.png" alt="" />
						<h4>官方2群</h4>
						<p>123456789</p>
					</li>
					<li>
						<img src="../../../img/wzsjImg/qq_icon.png" alt="" />
						<h4>官方3群</h4>
						<p>123456789</p>
					</li>
					<li>
						<img src="../../../img/wzsjImg/qq_icon.png" alt="" />
						<h4>官方4群</h4>
						<p>123456789</p>
					</li>
					<li>
						<img src="../../../img/wzsjImg/qq_icon.png" alt="" />
						<h4>官方5群</h4>
						<p>123456789</p>
					</li>
				</ul>
		</div>	
		<div class="slideBottom_wrap" v-if="showData=='wechat'">
			<p class="slideBottom_head">官方公众号：wufangame</p>
			<img class="wechat" src="../../../img/wzsjImg/wf_code.jpg" alt="" />
		</div>
		<p class="slideBottom_close" @click="closeSlide()">关闭</p>
	</div>
</template>

<script>
	export default{
		props:['showData'],
		methods:{
			closeSlide(){
				this.$emit("closeSlide",false)
			}
			
		}
	}
</script>

<style scoped="scoped">
	.slideBottom{
	        width: 100%;
		   
		    background: #fff;
		    max-width: 500px;
		    padding-bottom: 0.24rem;
		    position: absolute;
		    bottom: 0;
		    z-index: 110;
	}
	.slideBottom_wrap{
		width: 100%;
	}
	.slideBottom_head{
		    font-size: 0.16rem;
		    color: #202020;
		    text-align: center;
		    margin: 0.20rem 0;
	}
	.slideBottom_list{
		    width: 90%;
		    margin: 0 auto;
		    display: flex;
		    justify-content: space-around;
		    flex-wrap: wrap;
	}
	.slideBottom_list li{
		width: 22%;
		margin-bottom: 0.2rem;
	}
	.slideBottom_list li img{
		width: 0.4rem;
		margin: 0 auto;
	}
	.slideBottom_list li h4{
		font-size: 0.13rem;
	    color: #202020;
	    text-align: center;
	    padding-top: 0.04rem;
	    padding-bottom: 0.02rem;
	}
	.slideBottom_list li p{
		font-size: 0.11rem;
	    color: #888888;
	    text-align: center;
	}
	.wechat{
		width: 40%;
	    margin: 0 auto;
	    margin-bottom: 0.1rem;
	}
	.slideBottom_close{
		    position: absolute;
		    background: rgba(0,0,0,0.5);
		    border-radius: 0.25rem 0 0 0.25rem;
		    right: 0;
		    top: -0.3rem;
		    z-index: 999;
		    width: 0.8rem;
		    height: 0.25rem;
		    line-height: 0.25rem;
		    text-align: center;
		    font-size: 0.12rem;
		    color: #ffffff;
	}
</style>