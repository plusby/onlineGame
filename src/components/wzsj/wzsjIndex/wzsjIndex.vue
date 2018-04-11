<template>
	<div class="wzsjIndex">
		
		<!--wzsjIndex_banner-->
		<div class="wzsjIndex_banner">
			
			<div class="wzsjIndex_head">
				<div class="wzsjIndex_head_ico">
					<img src="../../../img/teamIndexImg/game_icon.png" alt="" />
				</div>
				<div class="wzsjIndex_head_content">
					<h3>未知世界</h3>
					<p>年度最美清新梦幻风手游</p>
				</div>
				<a href="#" class="wzsjIndex_head_btn">立即预约</a>
			</div>
			
			
			<img src="../../../img/wzsjImg/banner_bg.jpg" alt="" />
			<div class="wzsjIndex_banner_welfare">
				<i class="iconfont icon-bajiefuli"></i>
				<span>关注领福利</span>
			</div>
			<div class="wzsjIndex_banner_video">
				<a href="#" class="video_pause">
					<img src="../../../img/teamIndexImg/video_btn.png" alt="" />
				</a>				
			</div>
			<div class="wzsjIndex_banner_num">
				已有<span>999</span>人预约
			</div>
			<div class="wzsjIndex_banner_btn"></div>
			<div class="wzsjIndex_banner_explain">预约流程福利说明</div>
		</div>
		<!--wzsjIndex_item-->
		<div class="wzsjIndex_item">
			<img src="../../../img/wzsjImg/item_01_bg.jpg" alt="" class="wzsjIndex_item_bg" />
			<div class="wzsjIndex_item_swiper">
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	@import url("../../../img/icon/iconfont.css");
	.wzsjIndex{
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
	}
	/*wzsjIndex_head*/
	.wzsjIndex_head{
		width: 100%;
		padding: 0.06rem 0.06rem;
		background: #000;
		position: absolute;
		top: 0;
		z-index: 10;
	}
	.wzsjIndex_head::after{
		content: "";
		display: block;
		height: 0;
		visibility: hidden;
		clear: both;
	}
	.wzsjIndex_head_ico{
		float: left;
		width: 0.45rem;		
	}
	.wzsjIndex_head_content{
		float: left;
		margin: 0 0.06rem;
	}
	.wzsjIndex_head_content>h3{
		font-weight: normal;
	    font-size: 0.16rem;
	    color: #ffffff;
	    margin: 0.06rem 0 0.02rem;
	    line-height: 0.18rem;
	}
	.wzsjIndex_head_content>p{
		    font-size: 0.12rem;
    		color: #a5a5a5;
    		line-height: 0.15rem;
	}
	.wzsjIndex_head_btn{
		width: 0.75rem;
        float: right;
        line-height: 0.32rem;
        color: #fff;
        background: #F47500;
        text-align: center;
        margin-top: 0.06rem;
	}
	/*wzsjIndex_banner*/
	.wzsjIndex_banner{
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
		z-index: 9;
	}
	.wzsjIndex_banner_welfare{
		width: 1.2rem;
		height: 0.25rem;
		line-height: 0.25rem;
		background: url(../../../img/wzsjImg/top_gz_bg.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top:0.53rem;
		left: 0;		
		color: #fff;
		font-size: 0.12rem;
	}
	.wzsjIndex_banner_welfare>.icon-bajiefuli{
		font-size: 0.14rem;
		color: #fff;
		margin-left: 0.12rem;
	}
	/*wzsjIndex_banner_video*/
	.wzsjIndex_banner_video{
		width: 100%;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(0,-50%);
	}
	.wzsjIndex_banner_video .video_pause{
		width: 0.5rem;
		margin: 0 auto;
	}
	.wzsjIndex_banner_num{
		width: 100%;
		position: absolute;
		top: 65%;
		left: 0;
		text-align: center;
		font-size: 0.14rem;
    	color: #ffffff;
	}
	.wzsjIndex_banner_num>span{
		    font-size: 0.20rem;
		    color: #fff08e;
		    padding: 0 0.06rem;
	}
	 .wzsjIndex_banner_btn{
	 	    position: absolute;
		    width: 46%;
		    height: 10%;
		    left: 27%;
		    top: 70%;
	 }
	 .wzsjIndex_banner_explain{
	 	    position: absolute;
		    top: 84%;
		    width: 1.3rem;
		    line-height: 0.3rem;
		    border: 1px #000000 solid;
		    background: rgba(0,0,0,0.5);
		    font-size: 0.12rem;
		    color: #ffffff;
		    text-align: center;
		    left: 50%;
		    transform: translate(-50%,0);
	 }
	 /*wzsjIndex_item*/
	.wzsjIndex_item{
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
	}
	
</style>