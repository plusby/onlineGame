<template>
	<div class="tip">
		<vheader :name="name"></vheader>
		<div class="tip_content">
			<h3>举报类型</h3>
			<p @click="select($event)"><input type="radio" name="radios" /><label >辱骂、歧视、挑畔等不友善的内容</label></p>
			<p @click="select($event)"><input type="radio" name="radios" /><label >广告或垃圾信息</label></p>
			<p @click="select($event)"><input type="radio" name="radios" /><label >色情、暴力、政治等违反法律的内容</label></p>
			<p @click="select($event)"><input type="radio" name="radios" /><label >帖子内容与标签、标题不符</label></p>
			<p @click="select($event)"><input type="radio" name="radios"/><label >其他</label></p>
			
			<h3>补充说明</h3>
			<textarea placeholder="在此输入（可不填）"></textarea>
			<router-link  to="/successTip" class="tip_content_btn">
				提交
			</router-link>
		</div>
	</div>
</template>

<script>
	import vheader from "../header/header"
	export default{
		data(){
			return{
				name:"举报",
				lastObj:""
			}
		},
		components:{
			vheader
		},
		methods:{
			//选中单选按钮改变样式
			select(event){
				if(this.lastObj){
					this.lastObj.firstElementChild.style.backgroundColor="#fff"
					this.lastObj.firstElementChild.style.borderColor="#979797"
					this.lastObj.lastElementChild.style.color="#979797"
				}
				let _this=event.currentTarget||event.target
				_this.firstElementChild.style.backgroundColor="#F47500"
				_this.firstElementChild.style.borderColor="#F47500"
				_this.lastElementChild.style.color="#F47500"
				this.lastObj=_this
			}
		}
	}
</script>

<style scoped="scoped">
	.tip{
		width: 100%;
	}
	.tip_content{
		    background: #fff;
    		padding: .14rem .18rem;
	}
	 .tip_content h3{
	 	    font-size: .16rem;
		    color: #4A4A4A;
		    font-weight: 400;
		    margin-bottom: .12rem;
		    position: relative;
		    border-bottom:1px solid #C5C5C5 ;
		    padding-bottom: 0.1rem;
	 }
	  .tip_content h3:nth-of-type(2){
	  	border: none;
	  	margin-bottom:0 ;
	  }
	  .tip_content p{
	  	    color: #8A8A8A;
		    font-size: .14rem;
		    display: block;
		    margin: .09rem 0;
		    line-height: .24rem;
	  }
	  .tip_content>p>input{
	  	    vertical-align: -0rem;
		    margin-right: 10px;
		    border: 0 none;
		    width: .1rem;
		    height: .1rem;
		    border: 0.01rem solid #979797;
		    background: #fff;
		    appearance: none;
		    -webkit-appearance: none;
		    border-radius: 50%;
		    outline: none;
	  }
	  .tip_content textarea{
	  	    background: #F7F7F7;
		    width: 100%;
		    border: 0.01rem solid #d5d5d5;
		    padding: .10rem .14rem;
		    height: .84rem;
		    color: #4A4A4A;
		    border-radius: 0;
		    overflow: auto;
		    font-size: 0.12rem;
		    /*调整窗口大小*/
		    resize: none;
   			 -webkit-appearance: none;
   			 outline: none;
	  }
	  .tip_content_btn{
	  	    display: block;
		    width: 50%;
		    margin: .24rem auto 0;
		    background: #F47500;
		    text-align: center;
		    line-height: 0.4rem;
		    color: #fff;
		    font-size: .16rem;
	  }
</style>