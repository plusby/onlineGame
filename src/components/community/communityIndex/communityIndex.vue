<template>
	<div class="communityIndex" v-if="data[pos.mainIndex]">
		<div class="communityIndex_top">
			<div class="communityIndex_top_ico">
				<img src="../../../img/teamIndexImg/comments_topic.jpg" alt="" />
			</div>
			<div class="communityIndex_top_msg">
				<h4>{{data[pos.mainIndex].username}} <span>主楼</span></h4>
				<p>{{data[pos.mainIndex].time}}</p>
			</div>
			<div class="communityIndex_top_logo">
				<img :src="currIco" alt="" />
				<span>{{currName}}</span>
			</div>
		</div>
		<!--communityIndex_top_topic-->
		<div class="communityIndex_top_topic">
			<h3><em>精华</em><span>{{data[pos.mainIndex].content.contentName}}</span></h3>
			<div class="communityIndex_top_topic_desc clearfloat">
				<p class="communityIndex_top_topic_desc_view">浏览 <span>{{data[pos.mainIndex].content.viewCount}}</span></p>
				<a class="communityIndex_top_topic_desc_btn"  v-on:click="descMsg()">
					<i class="iconfont icon-moreclass"></i>
				</a>
				<div class="communityIndex_top_topic_desc_msg" v-show="descMsgflage">
					<p>
						<i class="iconfont icon-view"></i> 只看主楼
					</p>
					<p @click="orderBtn()">
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
					<p>{{data[pos.mainIndex].content.content}}</p>
					<img :src="data[pos.mainIndex].content.img[0]" alt="" />
					<p class="communityIndex_top_content_list_goods">
						<span><em><i class="iconfont icon-good" ref="listGood"></i></em><i>{{currentGoods}}</i></span>
						<span><em><i class="iconfont icon-LC_icon_chat_fill_1"></i></em><i>{{currentNum}}</i></span>				
					</p>
				</li>
			</ul>
			
		</div>
		<!--评论-->
		  <div class="communityIndex_comment">
		  	<ul v-if="data[pos.mainIndex].content.chat" ref="commentList">
		  		<li v-for="(item,index) in currentData">
		  			<div class="communityIndex_comment_top">
			  			<div class="communityIndex_comment_ico">
			  				<img v-lazy="item.ico" alt="" />
			  			</div>
			  			<div class="communityIndex_comment_msg">
			  				<h3>{{item.username}}</h3>
			  				<p>
			  					<span >{{ index ==0?"沙发": ((index+1)+'楼')}}</span>{{item.time}}
			  				</p>		  				
			  			</div>
			  			<div class="communityIndex_comment_reply" @click="showMask()">
			  				<i class="iconfont icon-LC_icon_chat_fill_1"></i>
			  			</div>
		  			</div>
		  			<div class="communityIndex_comment_content">
		  				{{item.content}}
		  			</div>
		  		</li>
		  	</ul>
		  	<p class="communityIndex_top_content_more" @click="moreBtn()" ref="contentMore" >加载更多>></p>
		  </div>
		<!--communityIndex_top_reply-->
		<div class="communityIndex_top_reply" >
			<div class="communityIndex_top_reply_goods" @click="replyGood($event)">
				<i class="iconfont icon-good"></i>
			</div>
			<div class="communityIndex_top_reply_input" v-on:click="showMask()">
				评论内容
			</div>
			<div class="communityIndex_top_reply_btn" @click="showMask()">
				回复
			</div>
		</div>
		<!--弹出回复框-->
		<div class="communityIndex_mask" v-show="maskflage">
			<!--@backMaskflage接收子级发送的事件-->
			<maskCommunity :maskflage="maskflage" @backMaskflage="backMaskflage" @backmsg="backmsg"></maskCommunity>
		</div>
	</div>
</template>

<script>
	import { mapState,mapGetters,mapMutations} from 'vuex';
	import getData from '../../../api/getData'
	import maskCommunity from "../mask/maskCommunity"
	export default{
		props:{
			
		},
		data(){
			return{
				//开关小图标按钮
				descMsgflage:false,
				//弹出层的开关
				maskflage:false,
				//存储后台返回的数据
				data:[],
				//存储当前加载的评论数据
				currentData:[],
				//存储当前的点赞
				currentGoods:0,
				//评论数量
				currentNum:0,
				//页数
				page:1,
				//根据上页点击数据找到它所在的位置
				pos:{
					viewPostIndex:0,
					mainIndex:0
				}
			}
		},
		components:{
			maskCommunity
		},
		watch: {
		},
		created(){
			/*const ERRNO=0			
			this.$http.get("/api/data").then((res)=>{
				if(res.data.errno==ERRNO){					
					this.data=res.data.data	
					console.log(res.data.data)
					this.currentData=this.data[0].post.chat[1]
					this.currentGoods=this.data[0].post.goods
					this.replyNum()
					//console.log(this.data[0].post)
				}				
			})	*/
			//上页点击数据时所在的api地址，在此获取
			const _url=this.$route.params.api
			//console.log("aaaaa"+_url)
			//获取上页点击的数据的id
			const id=this.$route.params.id
			//如果不存在api就返回上一页
			if(!_url){
				this.$router.go(-1)
				return
			}			
			const _this=this		
			//调用getData函数请求数据
			getData(`/api/${_url}`,_this).then((data)=>{	
								
				    //处理api为teamData的数据
				    if(_url==="teamData"){
					    //找到点击数据的位置
					    for(var c=0;c<data[0].viewPost.length;c++){
					    	for(var a in data[0].viewPost[c]){				    		
					    		for(var i=0;i<data[0].viewPost[c].main.length;i++){
							    	 let z=i						    	
							    	for(var j in data[0].viewPost[c].main[i]){
							    		console.log(data[0].viewPost[c].main[i].id)
							    		if(data[0].viewPost[c].main[i].id==id){
							    			this.pos.viewPostIndex=c
							    			this.pos.mainIndex=z				    			
							    		}
							    	}
							    }
					    	}					    
					    }
					    //数据赋值给当前变量
						this.data=data[0].viewPost[this.pos.viewPostIndex].main					
						this.currentData=this.data[this.pos.viewPostIndex].content.chat[1]
						this.currentGoods=this.data[this.pos.viewPostIndex].content.goods
						this.replyNum()
						console.log(this.data)
					}else{ //处理api为teamContent的数据
						console.log(data)
						for(var i=0;i<data.length;i++){
							let z=i						    	
							for(var j in data[i]){
							    	console.log(data[i].id)
							    	if(data[i].id==id){
							    			this.pos.viewPostIndex=z
							    			this.pos.mainIndex=z				    			
							    	}
							}
						}
						this.data=data					
						this.currentData=this.data[this.pos.viewPostIndex].content.chat[1]
						this.currentGoods=this.data[this.pos.viewPostIndex].content.goods
						this.replyNum()
					}
					
				})
			
		},
		computed:{
			//获取到vuex中的state中的属性
			...mapGetters(['currName','currIco'])
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
			},
			//几点加载更多按钮
			moreBtn(){				
				let arr=Object.keys(this.data[0].content.chat)
				if(this.page==arr.length){
					this.$refs.contentMore.innerHTML="已经到底了..."
					return
				}
				//let len=this.data[0].post.chat[this.page].length*this.page
				this.page++
				/*for(let i=0;i<this.data[0].post.chat[this.page].length;i++){
					this.currentData.splice(len,0,this.data[0].post.chat[this.page][i])
					len++
				}*/
                this.currentData=this.currentData.concat(this.data[0].content.chat[this.page])			
			  
			},
			//向数据中添加回复的内容
			backmsg(data){
				this.currentData.push({
					 "ico":"http://ctimg.5fun.com/upload/images//headportraitv3/20180327/7e73f31b378f6d8b856b940f3e58fe8f_1522140589.jpg",
			         "username":"mememememe",
			         "time":"2017-11-14 19:26:43",
			         "content":data
				})
				this.currentNum++
			},
			//点击赞
			replyGood(event){
				let target=event.currentTarget||event.target
				if(target.firstElementChild.style.color!="rgb(255, 117, 15)"){				
					target.firstElementChild.style.color="#ff750f"
					this.$refs.listGood.style.color="#ff750f"
					this.currentGoods++
				}				
			},
			//评论数量
			replyNum(){
				let arr=Object.keys(this.data[0].content.chat)
				let len=this.data[0].content.chat[1].length
				this.currentNum=(arr.length-1)*(this.data[0].content.chat[1].length)+this.data[0].content.chat[arr.length-1].length
			    
			},
			//点击排序
			orderBtn(){
				this.currentData.reverse()
				this.descMsgflage=false
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
	.communityIndex_top_content_list>img{
		padding:0 0.15rem;
	}
	.communityIndex_top_content_list_goods{
		text-align: center;
		padding: 0.3rem 0 0.12rem;
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
	/*communityIndex_comment*/
	.communityIndex_comment{
		width: 100%;
		padding-bottom: 0.49rem;
	}
	.communityIndex_comment ul{
		width: 100%;
		position: relative;
	}
	.communityIndex_comment ul li{
		width: 100%;
		padding:0.15rem;
		position: relative;
	}
	.communityIndex_comment ul li::before{
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width:100%;
		border-bottom: 1px solid #c5c5c5;
		transform: scaleY(0.5);
	}
	.communityIndex_comment ul li:last-child:before{
		border: none;
	}
	.communityIndex_comment_top{
		width: 100%;
		overflow: hidden;
	}
	.communityIndex_comment_ico{
		    margin-right: 0.12rem;
		    position: relative;
		    width: 0.4rem;
		    height: 0.4rem;
		    float: left;
		    border-radius: 50%;
		    overflow: hidden;
	}
	.communityIndex_comment_msg{
		float: left;
	}
	.communityIndex_comment_msg>h3{
		    font-weight: normal;
		    font-size: 0.14rem;
		    color: #202020;
		    margin-bottom: 0.02rem;
	}
	.communityIndex_comment_msg>p{
		        font-size: 0.12rem;
    			color: #c5c5c5;
	}
	.communityIndex_comment_reply{
		    display: block;
		    float: right;
		   
		    margin-top: 0.06rem;
		    overflow: hidden;
		    background-position: -0.67rem -0.63rem;
	}
	.communityIndex_comment_reply>i{
		 font-size: 0.22rem;
		 color: #A5A5A5;
	}
	.communityIndex_comment_content{
		    padding-left: 0.47rem;
   			 width: 100%;
   			 color: #555555;
    		font-size: 0.14rem;
    		line-height: 0.2rem;
    		padding-top: 0.16rem;
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