<template>
	
	<div class="instruction" id="instruction">
		<h3 class="instruction_title" @touchmove.prevent>
			预约领福利说明
		</h3>
	
		<div class="instruction_msg">
			<p>
				任天堂《火焰纹章：英雄》今天正式推出官方中文版，双平台已实装。今天《火焰纹章：英雄》2.0.0大版本更新中加入了官方中文，目前游戏维护已经完成，在设置菜单的「F&Q」中可选择更换语言。
			</p>
			<img src="../../../img/wzsjImg/intro_img.jpg" alt="" />
			<p>
				任天堂《火焰纹章：英雄》今天正式推出官方中文版，双平台已实装。今天《火焰纹章：英雄》2.0.0大版本更新中加入了
			</p>
		</div>
		
		<a href="javascript:;" class="instruction_close" @click="closeInstrc()" >
			关 闭
		</a>
	</div>
	
</template>

<script>
	export default{
		
		methods:{
			closeInstrc(){
				this.$emit("closeInstrc",false)
			}			
		}
	}
</script>

<style scoped="scoped">
	.instruction{
		    position: fixed;
		    z-index: 999;
		    top: 50%;		    
		    width: 90%;
		    left: 5%;
		    background: #ffffff;
		    height: 4.4rem;
		    overflow: hidden;
		    max-width: 640px;
		    margin:-60% auto 0;
	}
	.instruction_title{
		    height: 0.5rem;
		    line-height: 0.5rem;
		    position: relative;
		   text-align: center;
		   border-bottom: 1px solid #F47500;
	}

	.instruction_msg{
		    padding: 0.15rem;
		    height: 3.25rem;
		    overflow-y: scroll;
		    font-size: 0.12rem;
		    color: #555555;
		    line-height: 0.18rem;
		    border-bottom: 0.01rem #d5d5d5 solid;
		    position: relative;
		    
		    z-index: 1000;
	}
	.instruction_msg>img{
		    margin: 0.12rem auto;
	}
	.instruction_close{
		    width: 0.9rem;
		    height: 0.3rem;
		    line-height: 0.3rem;
		    text-align: center;
		    background: #c5c5c5;
		    color: #ffffff;
		    font-size: 0.14rem;
		    margin: 0.15rem auto;
		    position: relative;
	}
</style>