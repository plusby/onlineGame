<template>
	<div class="sendPost">
		<vheader :name="name"></vheader>
		<div class="sendPost_title">
			<input type="text" placeholder="标题（可选填）" />
		</div>
		<div class="sendPost_content" v-on:click="hidenPlace()" >
			<span class="sendPost_content_place" v-show="hidenFlage">
				<p>讨论贴</p>
				<p>1. 首领可发讨论帖</p>
				<p>2. 内容要积极向上</p>
				<p>3. 不得有语言暴力，人身攻击等内容</p>
				<p>4. 鼓励精华帖（奖励铜板1000个</p>
			</span>
			<textarea class="sendPost_textarea"  ref="textarea" v-on:blur="showPlace()"></textarea>
		</div>
		<div class="sendPost_btn">
			发布
		</div>
	</div>
</template>

<script>
	import vheader from "../header/header"
	export default{
		data(){
			return{
				name:"发布帖子",
				hidenFlage:true,
				textArea:""
			}
		},
		components:{
			vheader
		},
		methods:{
			hidenPlace(){
				this.hidenFlage=false
				
			},
			showPlace(){
				let num=this.$refs.textarea.value
				
				if(!num){
					this.hidenFlage=true
				}else{
					this.hidenFlage=false
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.sendPost{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 300;
		min-height: 100%;
		background: #fff;
	}
	.sendPost_title{
		width: 100%;
		background: #fff;
	}
	.sendPost_title>input{
		    width: 100%;
		    padding: 0.2rem;
		    font-size: 0.14rem;
		    border: 0;
		    outline: none;
		    border-bottom: 0.01rem #c5c5c5 solid;
		    border-radius: 0;
		   
	}
	.sendPost_title>input::-webkit-input-placeholder{
		 color:#D6D6D6;
	}
	.sendPost_content{
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
		z-index: 300;
		background: #fff;
		height: 5.32rem;
	}
	.sendPost_content_place{
		position: absolute;
		top: 0;
		left: 0;
		line-height: 0.24rem !important;
	    z-index: 99;
	    color: #c5c5c5 !important;
	    padding:0.1rem 0.2rem;
	    z-index: 300;
	    background: #fff;
	}
	.sendPost_textarea{
		    outline: none;
		    width: 100%;
		    font-size: 0.14rem;
		    resize: none;
		    border: none;
		    padding: 0.20rem;
		    min-height: 2.26rem;
		   position: absolute;
		   top: 0;
		   left: 0;
		   
		   background: transparent;
		   z-index: 300;
	}
	.sendPost_btn{
		    height: 0.5rem;
		    line-height: 0.5rem;
		    width: 100%;
		    text-align: center;
		    font-size: 0.16rem;
		    color: #ffffff;
		    background: #ff6c06;
		    position: fixed;
		    left: 0;
		    bottom: 0;
		    z-index: 300;
	}
</style>