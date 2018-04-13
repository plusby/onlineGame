<template>
	<div class="wzsjIndex" ref="wzsjIndex">
		
		<!--wzsjIndex_banner-->
		<div class="wzsjIndex_banner">			
			<div class="wzsjIndex_head">
				
					<router-link to="/teamIndex" tag="div" class="wzsjIndex_head_ico">						
						  <img :src="wzsjData.ico" alt="" />						
					</router-link>	
					
				<div class="wzsjIndex_head_content">
					<h3>{{ wzsjData.name }}</h3>
					<p>年度最美清新梦幻风手游</p>
				</div>
				<a href="#" class="wzsjIndex_head_btn" @click="orderBtn()">立即预约</a>
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
			<div class="wzsjIndex_banner_btn" @click="telOrder()"></div>
			<div class="wzsjIndex_banner_explain" @click="instruction()">预约流程福利说明</div>
		</div>
		<!--wzsjIndex_item-->
		<div class="wzsjIndex_item">
			<img src="../../../img/wzsjImg/item_01_bg.jpg" alt="" class="wzsjIndex_item_bg" />
			<div class="wzsjIndex_item_swiper">
				<mt-swipe :auto="4000">
				  <mt-swipe-item>
				  	<img src="../../../img/wzsjImg/list_01.jpg" alt="" />
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<img src="../../../img/wzsjImg/list_01.jpg" alt="" />
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<img src="../../../img/wzsjImg/list_01.jpg" alt="" />
				  </mt-swipe-item>
				</mt-swipe>
			</div>
			
			<div class="wzsjIndex_item_list">
				<ul>
					<li>
						<img src="../../../img/wzsjImg/game_01.jpg" alt="" />
					</li>
					<li>
						<img src="../../../img/wzsjImg/game_02.jpg" alt="" />
					</li>
					<li>
						<img src="../../../img/wzsjImg/game_03.jpg" alt="" />
					</li>
					<li>
						<img src="../../../img/wzsjImg/game_04.jpg" alt="" />
					</li>
				</ul>			
			</div>
			<p class="wzsjIndex_item_list_more">查看更多内容</p>
		</div>
		<div class="wzsjIndex_item">
			<img src="../../../img/wzsjImg/item_02_bg.jpg" class="wzsjIndex_item_bg"/>
			<div class="wzsjIndex_item_news">
				<p class="wzsjIndex_item_news_head">
					<span :class="newFlage==true?'wzsjIndex_item_news_head_active':''" @click="changeNewFalge()">漫画漫画</span>
					<span :class="newFlage==false?'wzsjIndex_item_news_head_active':''" @click="changeNewFalge()">每日每日</span>
					<span>更多></span>
				</p>
				<cartoon :data="data"></cartoon>
			</div>
		</div>
		<div class="wzsjIndex_item">
			<img src="../../../img/wzsjImg/item_03_bg.jpg" class="wzsjIndex_item_bg"/>
			<div class="wzsjIndex_item_comment">
				<div class="swiper-container">
				  <div class="swiper-wrapper">
				    <div class="swiper-slide">
				    	<img src="../../../img/wzsjImg/comment_list_01.png" alt="" />
				    </div>
				    <div class="swiper-slide">
				    	<img src="../../../img/wzsjImg/comment_list_01.png" alt="" />
				    </div>
				    <div class="swiper-slide">
				    	<img src="../../../img/wzsjImg/comment_list_01.png" alt="" />
				    </div>
				  </div>
				</div>
				<div class="swiper-button-next"></div>
				<div class="swiper-button-prev"></div>
			</div>
			<div class="wzsjIndex_item_comment_btn" @click="say()">
				<img src="../../../img/wzsjImg/say_btn.png" alt="" />
			</div>
		</div>
		<div class="wzsjIndex_item">
			<img src="../../../img/wzsjImg/item_04_bg.jpg" class="wzsjIndex_item_bg"/>
			<div class="wzsjIndex_item_fans">
				<ul>
					<li @click="slideMsg('qq')"></li>
					<li @click="slideMsg('wechat')"></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
		<div class="copyRight">
			<img src="../../../img/wzsjImg/item_05_bg.jpg" alt="" />
		</div>
		<!--关注qq,微信弹窗-->
		<transition name="slide_bottom">
			<slideBottom v-show="slideFlage" :showData="showData" @closeSlide="closeSlide"></slideBottom>
		</transition>
		<!--遮罩层弹窗-->
		<div class="maskScreen" v-if="showMask" @click="hidenSlide()"></div>
		<!--说一句弹窗-->
		<maskCommunity :maskflage="maskflage" @backMaskflage="backMaskflage" @backmsg="backmsg" v-show="maskflage"></maskCommunity>
	    <!--立即预约弹窗-->
	    <phoneMsg  v-if="telFlage.flage" :telFlage="telFlage" @backTelFlage="backTelFlage"></phoneMsg>
	    <!--立即预约教程弹窗-->
	    <orderInstruction v-if="instrFlage" @closeInstrc="closeInstrc"></orderInstruction>
	    <transition name="slide_left">
	    	
	    </transition>
	</div>
</template>

<script>
	import { mapState,mapGetters,mapMutations} from 'vuex';
	import cartoon from'./wzsjIndex_cartoon'
	import slideBottom from "./slideBottom"
	import maskCommunity from "../../community/mask/maskCommunity"
	import phoneMsg from "../phoneMsg/phoneMsg"
	import orderInstruction from '../instruction/instruction'

	export default{
		data(){
			return {
				//新闻切换开关
				newFlage:true,
				data:"123",
				//底部向上滑动开关
				slideFlage:false,
				//遮罩层开关
				showMask:false,
				//向底部滑动窗口传入的数据
				showData:'',
				//输入框开关
				maskflage:false,
				//手机号按钮
				telFlage:{
					flage:false
				},
				//教程开关
				instrFlage:false,
				wzsjData:{
					name:"生化危城",
					ico:"http://frimg.papa21.com/forum/20171114/1510649202-8904.png"
				},
				
			}
		},
		components:{
			cartoon,
			slideBottom,
			maskCommunity,
			phoneMsg,
			orderInstruction
		
		},
		mounted(){
			this.swiper()
			//把用户名和游戏名保存到vuex的state中
			if(this.wzsjData){					
					this.setCurrentName(this.wzsjData.name)
					this.setcurrIco(this.wzsjData.ico)
				}
		},
		methods:{
			//把当前游戏名保存到vuex,把mutations中的CURRNAME方法赋值给setcurrName变量供外部调用
			...mapMutations({
				setCurrentName:'CURRNAME',
				setcurrIco:'CURRICO'
			}),
			//切换新闻
			changeNewFalge(){
				this.newFlage=!this.newFlage
				if(this.newFlage){
					this.data="123"
				}else{
					this.data="456789"
				}
			},
			swiper(){
				let mySwiper = new Swiper('.swiper-container', {
					autoplay: 4000,//可选选项，自动滑动
					prevButton:'.swiper-button-prev',
					nextButton:'.swiper-button-next',
					loop : true,
				})
			},
			//上滑窗口
			slideMsg(val){
				this.slideFlage=true
				this.showMask=true
				this.showData=val
			},
			//隐藏上滑窗口
			closeSlide(val){
				this.slideFlage=val
				this.showMask=false
			},
			
			//说一句按钮
			say(){
				this.showMask=true
				this.maskflage=true
			},
			//输入框返回的开关信息
			backMaskflage(val){
				this.maskflage=val
				this.showMask=false
			},
			//输入框返回的信息
			backmsg(data){
				
			},
			//立即预约
			orderBtn(){
				
			},
			//立即预约
			telOrder(){
				this.showMask=true
				this.telFlage.flage=true
			},
			backTelFlage(){
				this.showMask=false
			},
			//说明教程
			instruction(){
				this.showMask=true
				this.instrFlage=true
			},
			//关闭说明教程
			closeInstrc(val){
				this.instrFlage=val
				this.showMask=false
			}
			
		}
	}
</script>

<style scoped="scoped">
	@import url("../../../img/icon/iconfont.css");
	@import url("../../../../static/css/mint-swiper.css");
	.wzsjview{
		width:100%;
		min-height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
	}
	.wzsjIndex{
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
		z-index: 100;
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
	.wzsjIndex_item_swiper{
		width: 92%;	
		height:1.8rem;
		position: absolute;		   
	    left: 4%;
	    top: 10%;
	    overflow: hidden;
	}
	.wzsjIndex_item_list{
		    position: absolute;
		    width: 92%;
		    left: 4%;
		    top: 55%;
		    overflow: hidden;
	}
    .wzsjIndex_item_list ul{
    	width: 100%;
    	display: flex;
    	justify-content: space-around;
    	flex-wrap: wrap;
    }
	.wzsjIndex_item_list ul li{
		width: 48%;
		margin-bottom: 0.1rem;
	}
	.wzsjIndex_item_list_more{
		    font-size: 0.12rem;
		    color: #ffffff;
		    text-align: center;
		    position: absolute;
		    bottom: 4%;
		    width: 100%;
		    left: 0;
	}
	/*wzsjIndex_item_news*/
	.wzsjIndex_item_news{
		width: 92%;
		position: absolute;
		top: 19%;
		left: 4%;
	}
	
	.wzsjIndex_item_news_head span{
		    display: inline-block;
		    font-size: 0.14rem;
		    color: #202020;
		    text-align: center;
		    height: 0.2rem;
		    line-height: 0.2rem;
		    position: relative;
		    padding: 0 0.06rem;
	}
	.wzsjIndex_item_news_head span:nth-of-type(1):before{
		       content: " ";
		    height: 100%;
		    position: absolute;
		    top: 0;
		    right: 0;
		    border-right: 1px solid #d5d5d5;
		    -webkit-transform: scaleX(.5);
		    -webkit-transform-origin: 0 0;
		    -webkit-box-sizing: border-box;
		    z-index: 0;
	}
	.wzsjIndex_item_news_head span:nth-of-type(2):before{
		       content: " ";
		    height: 100%;
		    position: absolute;
		    top: 0;
		    right: 0;
		    border-right: 1px solid #d5d5d5;
		    -webkit-transform: scaleX(.5);
		    -webkit-transform-origin: 0 0;
		    -webkit-box-sizing: border-box;
		    z-index: 0;
	}
	.wzsjIndex_item_news_head_active{
		color: #F47500 !important;
	}
	
	/*wzsjIndex_item_comment*/
	.wzsjIndex_item_comment{
		    position: absolute;
		    width: 100%;
		    left: 0;
		    top: 0;
	}
	.swiper-container{
		    margin: 0 auto;
		    position: relative;
		    overflow: hidden;
		    z-index: 10;
	}
	.swiper-button-next{
		background: url(../../../img/wzsjImg/rt_btn.png) no-repeat;
		background-size: 100% 100%;
		margin-top: -0.12rem;
	    width: 0.14rem;
       height: 0.24rem;
	}
	.swiper-button-prev{
		background: url(../../../img/wzsjImg/rt_btn.png) no-repeat;
		transform: rotateY(180deg);
		background-size: 100% 100%;
		margin-top: -0.12rem;
	    width: 0.14rem;
       height: 0.24rem;
	}
	.wzsjIndex_item_comment_btn{
		    position: absolute;
		    width: 33.3%;
		    bottom: 8%;
		    z-index: 10;
		    left: 50%;
		    transform: translate(-50%,0);
	}
	/*wzsjIndex_item_fans*/
	.wzsjIndex_item_fans{
		overflow: hidden;
	    width: 100%;
	    position: absolute;
	    top:40%;
	    text-align: center;
	    font-size: 0;
	}
	.wzsjIndex_item_fans ul{
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	.wzsjIndex_item_fans ul li{
		width: 25%;
		height: 0.52rem;
	}
	.copyRight{
		background: #f4f4f4;
	    padding: 0.18rem 0 0.2rem 0.3rem;
	    overflow: hidden;
	    font-size: 0.09rem;
	    color: #a5a5a5;
	    width: 100%;
	}
	.copyRight>img{
		    width:100%;
		    float: left;
		    margin-right: 0.3rem;
	}

    .slide_bottom-enter-active,.slide_bottom-leave-active{
    	transition: all 0.5s 0.2s; 
    }
    .slide_bottom-enter,.slide_bottom-leave{
    	transform: translate3d(0,100%,0);
    }
    .slide_bottom-leave-active{
    	transform: translate3d(0,100%,0);
    }
    .maskScreen{
    	width: 100%;
    	min-height: 100%;
    	position: fixed;
    	top: 0;
    	left: 0;
    	background: rgba(0,0,0,0.5);
    	z-index: 100;
    }
    .slide_left-enter-active,.slide_left-leave-active{
    	transition: all 0.5s; 
    }
    .slide_left-enter,.slide_left-leave{
    	transform: translate3d(100%,0,0);
    }
    .slide_left-leave{
    	transform: translate3d(-100%,0,0);
    }
</style>