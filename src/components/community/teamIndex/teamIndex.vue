<template>
	<div class="teamIndex">
		<teamHeader :name="name"></teamHeader>
		<!--data数据存在就渲染-->
		<div class="teamIndex_content" v-if="data">
			<router-link tag="div" to="/wzsjIndex" class="teamIndex_content_top">
				<img :src="data.ico" alt="" class="teamIndex_content_top_ico" />
				<div class="teamIndex_content_top_name">
					<p v-if="data.name">{{ data.name}}</p>
					<p v-if="data.desc">{{ data.desc}}</p>
				</div>
			</router-link>
			<ul class="teamIndex_content_list">
				
				<li v-for="(item,index) in data.content" >
					<router-link :to="{ name:'communityIndex', params:{id:item.id,api:contentDataApi } }">
					<!--v-if判断数据是否存在和其他命令使用此数据不能放在同一个元素中，否则会出错-->
					<span v-if="contentData[index]&&item.contentName==contentData[index].content.contentName" class="teamIndex_content_list_tag">
						<em  v-for="(val,i) in contentData[index].content.tag" >{{ val  }}</em>	
					</span>
					<span>{{item.contentName}}</span>
					</router-link>
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
					<teamIndexPost v-show="flage" :postData="data" :teamDataApi="teamDataApi"></teamIndexPost>
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
	import { mapState,mapGetters,mapMutations} from 'vuex';
	import getData from '../../../api/getData'
	import teamHeader from '../header/header'
	import teamIndexPost from './teamIndex-post'
	import teamIndexTopic from './teamIndex-topic'
	import teamIndexMenu from './teamIndex-menu'
	export default{
		data(){
			return {
				name:"群组名称",
				flage:true,
				menuFlage:false,
				//存储获取teamData数据
				data:[],
				//存储获取teamContent数据
				contentData:[],
				//存储获取数据的api,用于路由之间的通信
				teamDataApi:'teamData',
				contentDataApi:'teamContent'
			}
		},
		components:{
			teamHeader,
			teamIndexPost,
			teamIndexTopic,
			teamIndexMenu
		},
		created(){
			const _this=this
			//获取teamData数据
			getData("/api/teamData",_this).then((data)=>{
				this.data=data[0]
				//console.log(this.data.content[0].id)		
				//把用户名和游戏名保存到vuex的state中
				if(this.data){					
					this.setcurrName(this.data.name)
					this.setcurrIco(this.data.ico)
				}
			})
			//获取teamContent数据
			getData("/api/teamContent",_this).then((data)=>{
				this.contentData=data			
				//console.log(this.contentData[0].content.contentName)
			})
			
			
		},
		methods:{
			//把当前游戏名保存到vuex,把mutations中的CURRNAME方法赋值给setcurrName变量供外部调用
			...mapMutations({
				setcurrName:'CURRNAME',
			    setcurrIco:'CURRICO'
			}),
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
    .teamIndex_content_list_tag em{
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
    .teamIndex_content_list_tag em:nth-of-type(1){
    	background: #ff7d18;
    }
    .teamIndex_content_list_tag em:nth-of-type(2){
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