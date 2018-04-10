<template>
	<div class="teamIndex_topic">
		<ul>
			<li>
				
				<div class="teamIndex_topic_ico">
					<img src="../../../img/teamIndexImg/topic_icon_01.png" alt="" />
				</div>
				<div class="teamIndex_topic_content">
					<p>话题名称</p>
					<p>话题描述一句话</p>
				</div>
				<div class="teamIndex_topic_more">
					<span>今日更新：3</span><span>></span>
				</div>
			</li>
			<li>
				<div class="teamIndex_topic_ico">
					<img src="../../../img/teamIndexImg/topic_icon_01.png" alt="" />
				</div>
				<div class="teamIndex_topic_content">
					<p>话题名称</p>
					<p>话题描述一句话</p>
				</div>
				<div class="teamIndex_topic_more">
					<span>今日更新：3</span><span>></span>
				</div>
			</li>
			<li>
				<div class="teamIndex_topic_ico">
					<img src="../../../img/teamIndexImg/topic_icon_01.png" alt="" />
				</div>
				<div class="teamIndex_topic_content">
					<p>话题名称</p>
					<p>话题描述一句话</p>
				</div>
				<div class="teamIndex_topic_more">
					<span>今日更新：3</span><span>></span>
				</div>
			</li>
			<li>
				<div class="teamIndex_topic_ico">
					<img src="../../../img/teamIndexImg/topic_icon_01.png" alt="" />
				</div>
				<div class="teamIndex_topic_content">
					<p>话题名称</p>
					<p>话题描述一句话</p>
				</div>
				<div class="teamIndex_topic_more">
					<span>今日更新：3</span><span>></span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	.teamIndex_topic{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index:10;
	}
	.teamIndex_topic ul{
		width: 100%;
	}
	.teamIndex_topic ul li{
		    padding: 0.15rem 0.15rem;
		    position: relative;
		    overflow: hidden;
		    z-index: 10;
	}
	.teamIndex_topic_ico{
		    display: block;
		    width: 0.5rem;
		    height: 0.5rem;
		    overflow: hidden;
		    float: left;
		    margin-right: 0.15rem;
	}
	.teamIndex_topic_content{
		    width: 40%;
		    position: absolute;
		    left: 0.73rem;
		    top: 50%;
		    transform: translate(0,-50%);
		    -webkit-transform: translate(0,-50%);
		    text-align: left;
		    z-index: 10;
	}
	.teamIndex_topic_content p:nth-of-type(1){
		    font-weight: normal;
		    font-size: 0.16rem;
		    color: #202020;
		    margin-bottom: 0.02rem;
	}
	.teamIndex_topic_content p:nth-of-type(2){
		       font-size: 0.12rem;
    		   color: #888888;
	}
	.teamIndex_topic_more{
		    position: absolute;
		    font-size: 0.12rem;
		    color: #27aff6;
		    right: 0.19rem;
		   line-height: 0.5rem;
		   z-index: 10;
	}
	.teamIndex_topic_more span:nth-of-type(1){
		  margin-right: 0.15rem;
	}
</style>