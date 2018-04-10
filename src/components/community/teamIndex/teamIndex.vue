<template>
	<div class="teamIndex">
		<teamHeader :name="name"></teamHeader>
		<div class="teamIndex_content">
			<router-link tag="div" to="/wzsjIndex" class="teamIndex_content_top">
				<img src="../../../img/teamIndexImg/game_icon.png" alt="" class="teamIndex_content_top_ico" />
				<div class="teamIndex_content_top_name">
					<p>未知世界</p>
					<p>悟饭官方网游活动、福利发放、攻略分享及交流区攻略分享及交流区</p>
				</div>
			</router-link>
			<ul class="teamIndex_content_list">
				<li>
					<em>精</em>
					<em>顶</em>
					<span>《绝地求生》还能拿来拍电影？新上线的回放功能被新上线的回放...</span>
				</li>
				<li>
					<em>顶</em>
					<span>精致的换装后，“暖暖”邂逅了她记忆中的恋爱原味</span>
				</li>
				<li>
					<em>顶</em>
					<span>开发者访谈：对话《暴走英雄坛》开发者</span>
				</li>
			</ul>
			<div class="teamIndex_main">
				<div class="teamIndex_main_head">
						<a href="javascript:;" :class="flage==true ? 'teamIndex_main_head_post teamIndex_main_head_active' : 'teamIndex_main_head_post'" v-on:click="changeFlage()">看帖</a>
						<a href="javascript:;" :class="flage==false ? 'teamIndex_main_head_topic teamIndex_main_head_active' : 'teamIndex_main_head_topic'" v-on:click="changeFlage()">话题</a>
						<a href="javascript:;" class="teamIndex_main_head_more" v-on:click="showMenu()" >
							<i class="iconfont icon-moreclass"></i>
						</a>
						<div class="teamIndex_menu" v-on:click="showMenu()" v-show="menuFlage">							
							<teamIndexMenu></teamIndexMenu>
						</div>
						
				</div>	
				<div class="teamIndex_main_wrapper">
					<teamIndexPost v-show="flage"></teamIndexPost>
					<teamIndexTopic v-show="!flage"></teamIndexTopic>
					<router-link to="/sendPost"  class="teamIndex_main_issue">
						<i class="iconfont icon-moreh"></i>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import teamHeader from '../header/header'
	import teamIndexPost from './teamIndex-post'
	import teamIndexTopic from './teamIndex-topic'
	import teamIndexMenu from './teamIndex-menu'
	export default{
		data(){
			return {
				name:"群组名称",
				flage:true,
				menuFlage:false
			}
		},
		components:{
			teamHeader,
			teamIndexPost,
			teamIndexTopic,
			teamIndexMenu
		},
		methods:{
			changeFlage(){
				this.flage=!this.flage
			},
			showMenu(){
				this.menuFlage=!this.menuFlage
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../../../img/icon/iconfont.css");
	.teamIndex{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.teamIndex_content{
		width:100%;
	}
	/*teamIndex_content_top开始*/
	.teamIndex_content_top{
		width: 100%;
		padding: 0.15rem;
	}
	.teamIndex_content_top_ico{
		width:0.5rem;
		height: 0.5rem;
		float: left;
	}
	.teamIndex_content_top_name{
		padding-left: 0.55rem;
		width: 100%;
	}
	.teamIndex_content_top_name p:nth-of-type(1){
		    font-size: 0.18rem;
		    color: #202020;
		    font-weight: normal;
		    margin-top: 0.03rem;		   	  
		    text-align: left;
	}
	.teamIndex_content_top_name p:nth-of-type(2){
		 	width: 100%;	
			color: #888888;
		    font-size: 0.12rem;
		    overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
    }
    /*teamIndex_content_list开始*/
    .teamIndex_content_list{
    	width: 100%;
    	position: relative;
    }
    .teamIndex_content_list::before{
    	width: 100%;
    	content:"";
    	border-bottom: 1px solid #c5c5c5;
    	position: absolute;
    	top: 0;
    	left: 0;
    }
    .teamIndex_content_list li::before{
    	width: 100%;
    	border-bottom: 1px solid #c5c5c5;
    	position: absolute;
    	bottom: 0;
    	left: 0;
    	content: "";
    }
    .teamIndex_content_list li{
    	width: 100%;
    	overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding: 0.15rem ;	
		position: relative;	
		text-align: left;
    }
    .teamIndex_content_list li em{
    	    display: inline-block;
		    width: 0.15rem;
		    text-align: center;
		    line-height: 0.15rem;
		    margin-right: 0.02rem;
		    font-size: 0.12rem;
		    color: #ffffff;
		    background: #ff7d18;
		    font-style: normal;
    }
    .teamIndex_content_list li:nth-of-type(1) em:nth-of-type(1){
    	background: #1fd8c0;
    }
    .teamIndex_content_list li span{
    	    font-size: 0.12rem;
    		color: #555555;    		
		    display: inline-block;
    }
    /*teamIndex_main开始*/
   .teamIndex_main{
   	width: 100%;
   
   }
   .teamIndex_main_head{
   	width: 100%;
   	height: 0.54rem;
   	padding: 0rem 0.15rem 0.04rem 0.15rem;
   	position: relative;
   	top: 0;
   }
   .teamIndex_main_head::before{
    	content: "";
    	position:absolute;
    	bottom: 0;
    	left: 0;
    	width: 100%;
    	border-bottom: 0.04rem solid #C5C5C5;
    }
   .teamIndex_main_head a{
   	  	display: block;
	    font-size: 0.16rem;
	    color: #555555;
	    width: 0.4rem;
	    text-align: center;
	    height: 0.50rem;
	    line-height: 0.5rem;
	    float: left;
	    margin-right: 0.30rem;
   }
   .teamIndex_main_head a:nth-of-type(3){
   	     margin-right: 0;
   	     float: right;
   }
   .icon-moreclass{
   		display: block;
	    font-size: 0.18rem;	   
	    color: #ff6c06;
   }
   .teamIndex_main_head_active{
   	 color: #ff6c06 !important;
    border-bottom: 0.02rem #ff6c06 solid;
   }
   .teamIndex_main_wrapper{
   	width: 100%;
   	position: relative;
   	top: 0;
   	left: 0;
   }
   .teamIndex_menu{
   		border: 0.01rem #d5d5d5 solid;
	    width: 1.1rem;
	    position: absolute;
	    right: 0.25rem;
	    bottom: -0.6rem;
	    z-index: 999;
	    background: #ffffff;
	    font-size: 0.12rem;
	    color: #202020;
   }
   /*发布按钮*/
	.teamIndex_main_issue{		    
		    position: fixed;
		    z-index: 99;
		    right: 0.2rem;
		    bottom: 0.25rem;		    
	}
	.teamIndex_main_issue .icon-moreh{
		font-size: 0.55rem !important;
		color: #FF6C06;
	}
</style>