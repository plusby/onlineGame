<template>
	<div class="teamIndex_post">
		<ul>
			<li>
				<router-link to="/communityIndex">
				<h4 class="teamIndex_post_head">
					本次领取的五个游戏均是端游，其中一个是Steam平台上的本次领取的五个游戏均是端游，
					其中一个是Steam平台上的本次领取的五个游戏均是端游，其中一个是Steam平台上的本
					次领取的五个游戏均是端游，其中一个是Steam平台上的
				</h4>
				<p class="teamIndex_post_content">
					本次领取的五个游戏均是端游，其中一个是Steam平台上的本次领取的五个游戏均是端游，
					其中一个是Steam平台上的本次领取的五个游戏均是端游，其中一个是Steam平台上的本
					次领取的五个游戏均是端游，其中一个是Steam平台上的本次领取的五个游戏均是端游，
					其中一个是Steam平台上的
				</p>
				<div class="teamIndex_post_cream">
					<img src="../../../img/teamIndexImg/img_01.jpg" alt="">
					<img src="../../../img/teamIndexImg/img_02.jpg" alt="">
					<img src="../../../img/teamIndexImg/img_03.jpg" alt="">
				</div>
				<div class="teamIndex_post_comment">
					<div class="teamIndex_post_comment_left">
						<span>喔喔</span>
						<span>时间</span>
					</div>
					<div class="teamIndex_post_comment_right">
						<span>
							<i class="iconfont icon-view"></i>
							<em>1234</em>
						</span>
						<span>
							<i class="iconfont icon-good"></i>
							<em>1234</em>
						</span>
						<span>
							<i class="iconfont icon-LC_icon_chat_fill_1"></i>
							<em>1254</em>
						</span>
					</div>
				</div>
				</router-link>
			</li>
			<li>
				<router-link to="/communityIndex">
				<h4 class="teamIndex_post_head">
					本次领取的五个游戏均是端游，其中一个是Steam平台上的本次领取的五个游戏均是端游，
					其中一个是Steam平台上的本次领取的五个游戏均是端游，其中一个是Steam平台上的本
					次领取的五个游戏均是端游，其中一个是Steam平台上的
				</h4>
				<p class="teamIndex_post_content">
					本次领取的五个游戏均是端游，其中一个是Steam平台上的本次领取的五个游戏均是端游，
					其中一个是Steam平台上的本次领取的五个游戏均是端游，其中一个是Steam平台上的本
					次领取的五个游戏均是端游，其中一个是Steam平台上的本次领取的五个游戏均是端游，
					其中一个是Steam平台上的
				</p>
				<div class="teamIndex_post_cream">
					<img src="../../../img/teamIndexImg/img_01.jpg" alt="">
					<img src="../../../img/teamIndexImg/img_02.jpg" alt="">
					<img src="../../../img/teamIndexImg/img_03.jpg" alt="">
				</div>
				<div class="teamIndex_post_comment">
					<div class="teamIndex_post_comment_left">
						<span>喔喔</span>
						<span>时间</span>
					</div>
					<div class="teamIndex_post_comment_right">
						<span>
							<i class="iconfont icon-view"></i>
							<em>1234</em>
						</span>
						<span>
							<i class="iconfont icon-good"></i>
							<em>1234</em>
						</span>
						<span>
							<i class="iconfont icon-LC_icon_chat_fill_1"></i>
							<em>1254</em>
						</span>
					</div>
				</div>
				</router-link>
			</li>
			
		</ul>
		<div class="teamIndex_post_more">
			加载更多>>
		</div>
		
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	@import url("../../../img/icon/iconfont.css");
	.teamIndex_post{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.teamIndex_post ul{
		width: 100%;
	}
	.teamIndex_post ul li{
		width: 100%;
		    padding: 0.20rem 0.15rem;
		    border-bottom: 0.05rem #f4f4f4 solid;
		    background: #ffffff;
		    position: relative;
	}
	.teamIndex_post_head{
		font-size: 0.18rem;
	    color: #202020;
	    font-weight: normal;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    margin-bottom: 0.05rem;
	}
	.teamIndex_post_content{
		    font-size: 0.12rem;
		    color: #888888;
		    line-height: 0.18rem;
		    /*显示指定的行数，其余隐藏*/
		    overflow: hidden;
		    text-overflow: ellipsis;
		    display: -webkit-box;
		    -webkit-line-clamp: 2;
		    -webkit-box-orient: vertical;
	}
	.teamIndex_post_cream{
		width: 100%;
		display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        margin-top: 0.08rem;
	}
	.teamIndex_post_cream img{
		width: 32%;
		height: 0.7rem;
		
	}
	.teamIndex_post_comment{
		width: 100%;
		overflow: hidden;
	    font-size: 0.12rem;
	    color: #c5c5c5;
	    margin-top: 0.12rem;
	}
	.teamIndex_post_comment_left{
		float: left;
	}
	.teamIndex_post_comment_right{
		float: right;
	}
	.teamIndex_post_comment_right span{
		margin-right: 0.12rem;
	}
	.teamIndex_post_comment_right .iconfont{
		font-size: 0.1rem !important;
	}
	/*加载更多*/
	.teamIndex_post_more{
		text-align: center;
	    padding: 0.20rem 0;
	    color: #00a8ff;
	    font-size: 0.12rem;
	}
</style>