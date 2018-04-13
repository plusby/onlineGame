<template>
	<div class="wzsjIndex_cartoon">
		<ul>
			<li>
				<h4 class="wzsjIndex_cartoon_name">{{data}}</h4>
				<span class="wzsjIndex_cartoon_time">2017/11/15</span>
			</li>
			<li>
				<h4 class="wzsjIndex_cartoon_name">TGA公布2017年度最佳游戏候选</h4>
				<span class="wzsjIndex_cartoon_time">2017/11/15</span>
			</li>
			<li>
				<h4 class="wzsjIndex_cartoon_name">TGA公布2017年度最佳游戏候选</h4>
				<span class="wzsjIndex_cartoon_time">2017/11/15</span>
			</li>
			<li>
				<h4 class="wzsjIndex_cartoon_name">TGA公布2017年度最佳游戏候选</h4>
				<span class="wzsjIndex_cartoon_time">2017/11/15</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:['data']
		
	}
</script>

<style scoped="scoped">
	.wzsjIndex_cartoon{
		width: 100%;
	}
	.wzsjIndex_cartoon ul,.wzsjIndex_cartoon ul li{
		width: 100%;
	}
	.wzsjIndex_cartoon ul li{
		    height: 0.42rem;
		    line-height: 0.42rem;
		    position: relative;
		    overflow: hidden;
		    font-size: 0.12rem;
		    border-bottom: 1px solid #D5D5D5;
	}
	.wzsjIndex_cartoon_name{
		font-weight: normal;
	    color: #202020;
	    float: left;
	    text-indent: 0.05rem;
	    width: 74%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.wzsjIndex_cartoon_time{
		    color: #888888;
   			 float: right;
	}
</style>