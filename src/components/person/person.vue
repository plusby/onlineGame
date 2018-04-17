<template>
	<div class="person">
		<div class="person_wrap">
			<div class="person_user_head">
				<a href="javascript:;" class="person_user">
			        <i>
			            <img :src="userIco===''? '../../img/loginImg/p_user_icon.jpg':userIco " alt="">
			        </i>
			        <div class="person_name">
			            <h3>
			                <span>用户昵称</span>
			                <div class="grade_icon_wrap grade_vip">
			                    <img src="../../img/loginImg/svip_01.png" alt="">  <!--改变图片命名后缀来改变svip级别-->
			                </div>
			            </h3>
			            <p>{{username===""?"未登录":username}}</p>
			        </div>
			     </a>
			     <div class="person_tag">
			        <ul>
			            <li>
			                <a href="javascript:;" class="leftCenter">
			                    <span>饭票</span>
			                    <p>13</p>
			                </a>
			            </li>
			            <li>
			                <a href="javascript:;" class="leftCenter">
			                    <span>红包</span>
			                    <p>6</p>
			                </a>
			            </li>
			            <li>
			                <a href="javascript:;" class="leftCenter">
			                    <span>代金券</span>
			                    <p>6</p>
			                </a>
			            </li>
			        </ul>
			    </div>
			</div>		
			<div class="person_content">
				<ul>
					<li>
						<i class="person_content_ico"></i>
						<p class="person_content_name">消息</p>
						<em class="person_content_tag">16</em>
					</li>
					<li>
						<i class="person_content_ico"></i>
						<p class="person_content_name">我的社区</p>
						
					</li>
					<li>
						<i class="person_content_ico"></i>
						<p class="person_content_name">我的礼包</p>
						
					</li>
					<li>
						<i class="person_content_ico"></i>
						<p class="person_content_name">充值记录</p>
						
					</li>
					<li>
						<i class="person_content_ico"></i>
						<p class="person_content_name">我的游戏</p>
						
					</li>
					<li>
						<i class="person_content_ico"></i>
						<p class="person_content_name">客服反馈</p>
						
					</li>
					<li class="last_list">
						<i class="person_content_ico"></i>
						<p class="person_content_name">账号安全</p>
						<em class="person_content_tag safe">有风险</em>
					</li>
					<li class="last_list">
						<i class="person_content_ico"></i>
						<p class="person_content_name">实名认证</p>
						
					</li>
					<li class="last_list" @click="cancelLogin()">
						<i class="person_content_ico"></i>
						<p class="person_content_name">退出登录</p>
						
					</li>
				</ul>
			</div>
		    <div class="person_bottom">
		    	<ul>
		    		<li>
		    			<i class="p_icon_bg topCenter"></i>
		    			<h3>自动登录</h3>
		    			<p>自动使用最近登录账号进入游戏</p>
		    			<div class="switch_wrap topCenter">
				            <input type="checkbox" id="switch"/>
				            <label for="switch">
				            	<span class="switch_btn"></span>
				            </label>
				        </div>
		    		</li>
		    		<li>
				        <i class="p_icon_bg topCenter"></i>
				        <h3>悟饭游戏官方平台</h3>
				        <p>游戏专属特权，一键启动，极速安全</p>
				        <a class="wf_download_btn topCenter2" href="javascript:;">下载</a>
				    </li>
		    	</ul>
		    </div>
		</div>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex';
	export default{
		data(){
			return{
				username:"未登录",
				userIco:'../../img/loginImg/p_user_icon.jpg'
			}
		},
		mounted(){
			this.username=this.$store.getters.currUser
			this.userIco=this.$store.getters.currUserIco
			if(!this.username&&!this.userIco){
				this.$router.push("/wzsjIndex")
			}
		},
		methods:{
			...mapMutations({
				setCurrUser:"CURRUSER",
				setCurrUserIco:"CURRUSERICO"
			}),
			cancelLogin(){
				this.setCurrUser("")
				this.setCurrUserIco("")
				this.$router.push("/wzsjIndex")
			}
		}
	}
</script>

<style scoped="scoped">
	.person{
		width: 100%;
		position:absolute;
		top: 0;
		left: 0;
		min-height: 100%;
		z-index: 300;
		background: #fff;
	}
	.person_wrap{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		min-height: 100%;
		z-index: 300;
	}
	.person_user_head{
		    padding-top: 0.21rem;
		    padding-bottom: 0.32rem;
		    position: relative;
		    background: #ff6c06;
		    color: #ffffff;
	}
	.person_user{
		    overflow: hidden;
		    padding: 0 0.15rem;
		    position: relative;
		    color: #ffffff;
	}
	.person_user i {
	    display: block;
	    float: left;
	    width: 0.6rem;
	    height: 0.6rem;
	    overflow: hidden;
	    margin-right: 0.15rem;
	    border-radius: 50%;
	    background: #ffffff;
    }
    .person_user i img{
    	width: 100%;
    	height: 100%;
    }
    .person_name {
		    position: absolute;
		    top: 50%;
		    transform: translate(0,-50%);
		    -webkit-transform: translate(0,-50%);
		    left: 25%;
	}
	.grade_icon_wrap {
	    display: inline-block;
	    width: 0.5rem;
	    vertical-align: middle;
	}
	.person_tag{
		padding-top: 0.12rem;
	    font-size: 0;
	    margin-top: 0.20rem;
	}
	.person_tag li{
		    display: inline-block;
		    font-size: 0.10rem;
		    position: relative;
		    text-align: center;
		    width: 33.3%;
		    height: 0.42rem;
		    z-index: 2;
	}
	.person_tag li::before{
		content: "";
		width: 0.01rem;
		height: 0.2rem;
		position: absolute;
		top:0.11rem;
		right: 0;
		background: #fff;		
	}
	.person_tag li:nth-of-type(3):before{
		width: 0;
		height: 0 !important;
		background: none;
	}
	.person_tag li a{
		    position: absolute;
		    top: 0rem;
		    z-index: 300;
		    width: 100%;
		    color: #ffffff;
		    font-size: 0.12rem;
	}
	.person_tag li p{
		    font-size: 0.18rem;
    		margin-top: 0.02rem;
	}
	/*person_content*/
	.person_content{
		width: 100%;
		    border-top: 0.05rem #f4f4f4 solid;
   		 border-bottom: 0.05rem #f4f4f4 solid;
	}
	.person_content ul{
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.person_content ul li{
		width:33.3%;
		height: 1.2rem;
		position: relative;
		top: 0;
		text-align: center;
	}
	.person_content ul li::before{
		content: "";
		width: 100%;
		height: 0.01rem;
		position: absolute;
		bottom: 0;
		left: 0;
		background:  #c5c5c5;;
	}
	.person_content ul li::after{
		content: "";
		width:0.01rem;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		background:  #c5c5c5;;
	}
	.person_content ul li:nth-of-type(3n):after{
		width:0;
		height: 0 !important;
	}
	.person_content_name{
		    font-size: 0.14rem;
		    color: #555555;
		    text-align: center;
	}
	.person_content_tag{
		    display: block;
		    position: absolute;
		    font-size: 0.12rem;
		    color: #ffffff;
		    width: 0.20rem;
		    height: 0.20rem;
		    border-radius: 100%;
		    text-align: center;
		    line-height: 0.20rem;
		    top: 0.15rem;
		    right: 0.15rem;
		    background: #ed0000;
		    font-style: normal;
	}
	.safe{
		   width: 0.36rem;
		   background: none;
		    color: #ff6c06;
		     right: 0.06rem;
	}
	.person_content_ico{
		    width: 0.3rem;
    		height: 0.3rem;
    		background: url(../../img/loginImg/personal_icon_bg.png) no-repeat 100% 100%;
    		background-size: 2rem 2rem;
    		display: block;
    		overflow: hidden;
		    margin: 0 auto;
		    margin-top: 0.30rem;
		    margin-bottom: 0.15rem;
	}
	
	.person_content_ico:nth-of-type(1){
		background-position: 0rem 0;
	}
	.person_content  li:nth-of-type(2) .person_content_ico{
		background-position: -0.3rem 0;
	}
	.person_content  li:nth-of-type(3) .person_content_ico{
		background-position: -0.6rem 0;
	}
	.person_content  li:nth-of-type(4) .person_content_ico{
		background-position: -0.3rem -0.3rem;
	}
	.person_content  li:nth-of-type(5) .person_content_ico{
		background-position: -0 -0.3rem;
	}
	.person_content  li:nth-of-type(6) .person_content_ico{
		background-position: -0.3rem -0.3rem;
	}
	.person_content  li:nth-of-type(7) .person_content_ico{
		background-position: -0.6rem -0.31rem;
	}
	.person_content  li:nth-of-type(8) .person_content_ico{
		background-position: -0.9rem -0.3rem;
	}
	.person_content  li:nth-of-type(9) .person_content_ico{
		background: url(../../img/loginImg/out_tips.png) no-repeat;
   		background-size: 0.30rem 0.30rem;
	}
	.last_list::before{
		width: 0 !important;
		height: 0;
	}
	/*person_bottom
	 */
	.person_bottom{
		width: 100%;
	}
	.person_bottom li{
		    position: relative;
		    padding: 0.23rem 0 0.23rem 0.6rem;
		    color: #a5a5a5;
		    font-size: 0.12rem;
	}
	.person_bottom li::before{
		    content: " ";
		    width: 100%;
		    position: absolute;
		    bottom: 0;
		    left: 0;
		    border-bottom: 1px solid #c5c5c5;
		    -webkit-transform: scaleY(.5);
		    -webkit-transform-origin: 0 0;
		    -webkit-box-sizing: border-box;
		    z-index: 0;
	}
	.p_icon_bg {
		    background: url(../../img/loginImg/personal_icon_bg.png) no-repeat;
		    background-size: 2rem 2rem;
		}
	.person_bottom li i {
		    display: block;
		    width: 0.20rem;
		    height: 0.20rem;
		    overflow: hidden;
		    background-position: 0 -0.65rem;
		    position: absolute;
		    left: 0.20rem;
	}
	.person_bottom li:nth-child(2) i {
	    background-position: -0.3rem -0.65rem;
	}
	.person_bottom li h3 {
		    color: #555555;
		    font-size: 0.16rem;
		}
	.person_bottom .wf_download_btn {
	    position: absolute;
	    right: 0.15rem;
	    background: #ff6c06;
	    font-size: 0.14rem;
	    color: #ffffff;
	    text-align: center;
	    line-height: 0.25rem;
	    width: 0.6rem;
	}
	.topCenter {
		    top: 50%;
		    transform: translate(0,-50%);
		    -webkit-transform: translate(0,-50%);
		    overflow: hidden;
	}
	.topCenter2 {
		    top: 50%;
		    transform: translate(0,-50%);
		    -webkit-transform: translate(0,-50%);
	}
	.switch_wrap{
		    width: 0.4rem;
		    height: 0.22rem;		   
		    position: absolute;
	    	right: 0.15rem;
	    	transition: 1s;
	}
	#switch{
		display: none;
	}
	#switch+label{
		 display: block;
		 
		 height: 0.22rem;
		 border-radius: 0.25rem;
		 background: #c5c5c5;
	     padding: 0.02rem 0.01rem;
	}
	#switch+label span{
		display: block;
		width: 0.18rem;
		height: 0.18rem;
		border-radius: 0.09rem;
	    background: #fff;
	    transition: 0.5s;
	}
	#switch:checked+label span{
		transform: translateX(0.18rem);
	}
	#switch:checked+label{
		background: #ff6c06;
	}
</style>