<template>
	<div class="communityIndex">
		<div class="communityIndex_top">
			<div class="communityIndex_top_ico">
				<img src="../../../img/teamIndexImg/comments_topic.jpg" alt="" />
			</div>
			<div class="communityIndex_top_msg">
				<h4>用户名 <span>主楼</span></h4>
				<p>2017/11/27 14:22 </p>
			</div>
			<div class="communityIndex_top_logo">
				<img src="../../../img/teamIndexImg/game_icon.png" alt="" />
				<span>未知世界</span>
			</div>
		</div>
		<!--communityIndex_top_topic-->
		<div class="communityIndex_top_topic">
			<h3><em>精华</em><span>我们的游戏人生 特别企划：FPS真正的演绎</span></h3>
			<div class="communityIndex_top_topic_desc clearfloat">
				<p class="communityIndex_top_topic_desc_view">浏览 <span>12568</span></p>
				<a class="communityIndex_top_topic_desc_btn"  v-on:click="descMsg()">
					<i class="iconfont icon-moreclass"></i>
				</a>
				<div class="communityIndex_top_topic_desc_msg" v-show="descMsgflage">
					<p>
						<i class="iconfont icon-view"></i> 只看主楼
					</p>
					<p>
						<i class="iconfont icon-paixu"></i> 正序/倒序
					</p>
					<router-link tag="p" to="/tip">
						<i class="iconfont icon-jingbao"></i> 举报
					</router-link>
				</div>
			</div>
		</div>
		<!--communityIndex_top_content-->
		<div class="communityIndex_top_content">
			<ul>
				<li class="communityIndex_top_content_list">
					<p>FPS作为一个老生常谈的话题，自不用过多的赘</p>
					<p class="communityIndex_top_content_list_goods">
						<span><em><i class="iconfont icon-good"></i></em><i>155</i></span>
						<span><em><i class="iconfont icon-LC_icon_chat_fill_1"></i></em><i>16</i></span>				
					</p>
				</li>
			</ul>
			<p class="communityIndex_top_content_more">加载更多>></p>
		</div>
		<!--communityIndex_top_reply-->
		<div class="communityIndex_top_reply" >
			<div class="communityIndex_top_reply_goods">
				<i class="iconfont icon-good"></i>
			</div>
			<div class="communityIndex_top_reply_input" v-on:click="showMask()">
				评论内容
			</div>
			<div class="communityIndex_top_reply_btn">
				回复
			</div>
		</div>
		<!--弹出回复框-->
		<div class="communityIndex_mask" v-show="maskflage">
			<!--@backMaskflage接收子级发送的事件-->
			<maskCommunity :maskflage="maskflage" @backMaskflage="backMaskflage"></maskCommunity>
		</div>
	</div>
</template>

<script>
	import maskCommunity from "../mask/maskCommunity"
	export default{
		props:{
			
		},
		data(){
			return{
				//开关小图标按钮
				descMsgflage:false,
				//弹出层的开关
				maskflage:false
			}
		},
		components:{
			maskCommunity
		},
		methods:{
			//开关小图标按钮
			descMsg(){
				this.descMsgflage=!this.descMsgflage
			},
			//显示弹出层
			showMask(){
				this.maskflage=true
			},
			//子级发送的事件
			backMaskflage(data){
				this.maskflage=data
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../../img/icon/iconfont.css");
	.communityIndex{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color:#F4F4F4;
		min-height: 100%;
	}
	.communityIndex_top{
		width: 100%;
		overflow: hidden;
		padding: 0.18rem 0.15rem;
		position: relative;
		background: #fff;
	}
	.communityIndex_top::before{
		content: " ";
	    width: 100%;
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    border-bottom: 1px dashed #a5a5a5;
	}
	.communityIndex_top_ico{
		float: left;
	    width: 0.40rem;
	    height: 0.40rem;
	    border-radius: 50%;
	    overflow: hidden;
	}
	.communityIndex_top_msg{
		    float: left;
		    margin-left: 0.12rem;
		    font-size: 0.12rem;
		    color: #c5c5c5;
		    padding-top: 0.01rem;
	}
	.communityIndex_top_msg>h4{
		font-weight: normal;
	    font-size: 0.14rem;
	    color: #202020;
	    vertical-align: middle;
	    margin-bottom: 0.01rem;
	}
	.communityIndex_top_msg>h4 span{
		
	    display: inline-block;
	    vertical-align: middle;
	    padding:0 0.02rem;
	    color: #ff7711;
	    font-size: 0.10rem;
	    border: 0.01rem #ff7711 solid;
	    margin-left:0.12rem ;
	}
	.communityIndex_top_logo{
		    float: right;
		    font-size: 0.12rem;
		    padding-top: 0.07rem;
	}
	.communityIndex_top_logo>img{
		display: inline-block;
	    width: 0.24rem;
	    height: 0.24rem;
	    overflow: hidden;
	    border-radius: 50%;
	    vertical-align: middle;
	}
	/*communityIndex_top_topic*/
	.communityIndex_top_topic{
		width: 100%;
		 padding: 0.15rem;
	    position: relative;
	    background: #ffffff;
	    border-bottom: 0.05rem solid #f4f4f4;
	}
	.communityIndex_top_topic>h3{
		    text-align: left;
	        font-size: 0.18rem;
		    color: #202020;
		    margin-bottom: 0.15rem;
		    line-height: 0.22rem;
	}
	.communityIndex_top_topic>h3>em{
			padding: 0.01rem 0.02rem;
		    border: 0.01rem #c511ff solid;
		    color: #c511ff;
		    font-size: 0.10rem;
		    margin-right: 0.05rem;
		    font-style:normal;
	}
	.communityIndex_top_topic>h3>span{
		    vertical-align: middle;
	}
	
	.communityIndex_top_topic_desc{
		width: 100%;
		
		font-size: 0.12rem;
        color: #c5c5c5;
        position: relative;
	}
	/*清除浮动代码*/ 
	.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0} 
	.clearfloat{zoom:1} 
	.communityIndex_top_topic_desc_view{
		float: left;
	}.communityIndex_top_topic_desc_view>span{
		margin-left: 0.05rem;
	}
	.communityIndex_top_topic_desc_btn{
		float: right;
		color: #ff750f;
	}
	.communityIndex_top_topic_desc_msg{
		border: 0.01rem #d5d5d5 solid;
	    width: 1.1rem;
	    position: absolute;
	    right: 0.2rem;
	    bottom: -1.1rem;
	    z-index: 99;
	    background: #ffffff;
	    font-size: 0.12rem;
	}
	.communityIndex_top_topic_desc_msg>p{
		height: 0.4rem;
	    line-height: 0.4rem;
	    border-bottom: 0.01rem #d5d5d5 solid;
	    padding-left: 0.12rem;
	    color: #555555;
	}
	.communityIndex_top_topic_desc_msg>p>.iconfont{
		font-size: 0.14rem;
		margin-right: 0.06rem;
		width: 0.6rem;
		color: #A5A5A5;
	}
	/*communityIndex_top_content*/
	.communityIndex_top_content{
		width: 100%;
		 
	}
	.communityIndex_top_content ul,.communityIndex_top_content ul li{
		width: 100%;
		background: #fff;
	}
	.communityIndex_top_content_list>p:nth-of-type(1){
		 font-size: 0.14rem;
	    padding: 0.15rem;
	    background: #ffffff;
	    min-height: 1.2rem;
	    text-align: left;
	}
	.communityIndex_top_content_list_goods{
		text-align: center;
		padding-bottom: 0.1rem;
	}
	.communityIndex_top_content_list_goods span{
		 display: inline-block;
	}
	.communityIndex_top_content_list_goods em{
		display: block;
	    width: 0.4rem;
	    height: 0.4rem;
	    background:rgb(244,244,244);
	    border-radius: 50%;
	    line-height: 0.4rem;	    
	    color:#D5D5D5;
	    margin: 0 0.08rem;
	}
	.communityIndex_top_content_list_goods span>i{
		color:#C5C5C5;
		font-style: normal;
		font-size: 0.1rem;
	}
	.communityIndex_top_content_list_goods .iconfont{
		font-size: 0.2rem;
	}
	.communityIndex_top_content_more{
		    text-align: center;
		    padding: 0.20rem 0;
		    color: #00a8ff;
		    font-size: 0.12rem;
	}
	/*communityIndex_top_reply*/
	.communityIndex_top_reply{
		    position: fixed;
		    z-index: 99;
		    bottom: 0;
		    left: 0;
		    width: 100%;
		    height: 0.5rem;
		    font-size: 0.12rem;
		    background: #ffffff;
		    padding-left: 0.15rem;
		    overflow: hidden;
	}
	.communityIndex_top_reply_goods{
		vertical-align: middle;
		float: left;
		
		line-height: 0.5rem;
		color:#A5A5A5;
	}
	.communityIndex_top_reply_goods>.icon-good{
		font-size: 0.24rem;
	}
	.communityIndex_top_reply_input{
		display: inline-block;
	    background: #ffffff;
	    width: 66%;
	    padding: 0.07rem 0.10rem;
	    color: #d5d5d5;
	    border: 0.01rem #d5d5d5 solid;
	    margin: 0.075rem 0.06rem 0 0.15rem;
	}
	.communityIndex_top_reply_btn{
		    display: inline-block;
		    width: 0.6rem;
		    line-height: 0.30rem;
		    background: #ff750f;
		    font-size: 0.12rem;
		    color: #ffffff;
		    text-align: center;
		    vertical-align: middle;
	}
	/*
	  弹出层
	 * */
	.communityIndex_mask{
		width: 100%;
	}
</style>