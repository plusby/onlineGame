<template>
	<div class="teamIndex_post" >
		<div class="loader" v-if="currentData.length==0">Loading...</div>
		<ul v-if="currentData">
			<li v-for="(item,index) in currentData.main">
				<!--路由传参-->
				<router-link :to="{ name:'communityIndex',params:{id:item.id,api:teamDataApi } }">
				<h4 class="teamIndex_post_head">
					{{item.content.contentName}}
				</h4>
				<p class="teamIndex_post_content">
					{{item.content.content}}
				</p>
				<div class="teamIndex_post_cream" v-if="item.content.img">
					<img v-for="(val,i) in item.content.img" :src="val" alt="">					
				</div>
				<div class="teamIndex_post_comment">
					<div class="teamIndex_post_comment_left">
						<span>{{ item.username }}</span>
						<span>{{ item.time }}</span>
					</div>
					<div class="teamIndex_post_comment_right">
						<span>
							<i class="iconfont icon-view"></i>
							<em>{{item.content.viewCount}}</em>
						</span>
						<span>
							<i class="iconfont icon-good"></i>
							<em>{{item.content.goods}}</em>
						</span>
						<span>
							<i class="iconfont icon-LC_icon_chat_fill_1"></i>
							<em>{{item.content.reply}}</em>
						</span>
					</div>
				</div>
				</router-link>
			</li>		
		</ul>
		<div class="teamIndex_post_more" @click="postMore($event)" >
			加载更多>>
		</div>
		
	</div>
</template>

<script>
	export default{
		props:["postData","teamDataApi"],
		data(){
			return{
				data:[],
				//当前数据
				currentData:[],
				//加载更多
				page:0
			}
		},
		computed:{
			
		},
		mounted(){
			setTimeout(()=>{			
				this.data=this.postData.viewPost				
				this.currentData=this.data[this.page]		
				
			},500)					
		},
		methods:{
			//点击加载更多
			postMore(event){
				if(this.data&&this.page<this.data.length-1){
					this.page++
					this.currentData.main=this.currentData.main.concat(this.data[this.page].main)					
				}else{
					let ev=event.currentTarget||event.target
					ev.innerHTML="已经到底了"
				}
			}
		}
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
	/*纯白色圈*/
.loader {
   text-indent: -9999em;
   position: relative;
   width:1rem;
   height: 1rem;
   box-shadow: inset 0 0 0 15px #C5C5C5;
   border-radius: 50%;
   margin: 0.4rem auto;
}
.loader::before {
   position: absolute;
   content: '';
   width: 0.5rem;
   height: 1rem;
   background: #ffff;

   /*半圆*/
   border-radius: 0 1rem 1rem 0;
   left: 0.5rem;

   /*原点从（0,0）移至圆心处（0,100），绕圆心旋转*/
   transform-origin: 0px 0.5rem;
   animation: load-effect 2s infinite linear;
}

/*最上层（即::before之前）绘制透明白色圆环*/
.loader::after {
   position: absolute;
   content: '';
   width: 1rem;
   height: 1rem;
   border-radius: 50%;
   left: 0;
   box-shadow: inset 0 0 0 0.1rem rgba(255,255,255,1);
}

/*动画：旋转360°*/
@keyframes load-effect {
   0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
   }
   100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
   }
}
</style>