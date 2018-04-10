<template>
	<div class="wzsjIndex">
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
		<div class="wzsjIndex_banner">
			<img src="../../../img/wzsjImg/banner_bg.jpg" alt="" />
			<div class="wzsjIndex_banner_welfare">
				<i class="iconfont icon-bajiefuli"></i>
				<span>关注领福利</span>
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
	}
	.wzsjIndex_banner_welfare{
		width: 1.2rem;
		height: 0.25rem;
		line-height: 0.25rem;
		background: url(../../../img/wzsjImg/top_gz_bg.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 0;left: 0;
		
		color: #fff;
		font-size: 0.12rem;
	}
	.wzsjIndex_banner_welfare>.icon-bajiefuli{
		font-size: 0.14rem;
		color: #fff;
		margin-left: 0.12rem;
	}
</style>