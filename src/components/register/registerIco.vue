<template>
	<div class="registerIco">
		<div class="registerIco_wrap">
			<registerHeader :name="headerName"  @backLast="backLast"></registerHeader>
			<div class="registerIco_content">
				<div class="setIcon_img">
	                <div class="user_icon_wrap">
	                	<!--上传头像-->
	                	<ul class="list-ul" v-show="!isPhoto">
							<li class="list-li" v-for="(iu, index) in imgUrls">
								<a class="list-link" @click='previewImage(iu)'>
									<img :src="iu">
								</a>
								<span class="list-img-close" @click='delImage(index)'>x</span>
							</li>
							<!--<li class="list-li-add">
								<span class="add-img" @click.stop="addPic"></span>
							</li>-->
						</ul>
					
					    <div class="add-preview" v-show="isPreview" @click="closePreview">
							<img :src="previewImg">
						</div>
						<!--上传头像结束-->
	                    <img id="view" v-if="imgUrls.length<1" data-index="3" src="http://ctimg.5fun.com/upload/images//headportraitv3/20180322/3ed2174f993c2cb8f57018a806b36578_1521704308.jpg" ref="userIco" alt="">
	                </div>
	                <p>更换头像</p>
	                <input type="file" class="fileIco" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange"  />		               
	            </div>
	            
	            <div class="fillName_wrap">
	                <input class="fillName w_100" type="text" placeholder="填写昵称" ref="userName" @input="telInput()">
	            </div>
	            <a class="setIcon_btn" href="javascript:;" @click="registUser($event)" ref="telBtnEle">确定</a>
			</div>
		</div>
		 <transition name="slide_left">
	    	<router-view/>  
	   </transition>	
	</div>
</template>

<script>
	import { mapMutations } from "vuex"
	import lrz from 'lrz'
	
import registerHeader from '../community/header/header'	

	export default{
		data(){
			return{
				headerName:"设置昵称/头像",
				
				imgUrls: [],
				urlArr: [],
				isPhoto: true,
				btnTitle: '',
				isModify: false,
				previewImg:'',
				isPreview: false
			}
		},
		components:{
			registerHeader
		},
		mounted(){
			
		},
		watch: {
			imgUrls: 'toggleAddPic'
		},
		methods:{
			...mapMutations({
				setCurrUser:"CURRUSER",
				setCurrUserIco:"CURRUSERICO"
			}),
			backLast(val){
				
			},
			registUser(event){
				const tag=event.currentTarget||event.target						
				if(tag.style.backgroundColor=="rgb(255, 117, 15)"){
					if(!this.$refs.userIco){
						this.setCurrUser(this.$refs.userName.value)
						this.setCurrUserIco('http://ctimg.5fun.com/upload/images//headportraitv3/20180322/3ed2174f993c2cb8f57018a806b36578_1521704308.jpg')
						this.$router.push("/wzsjIndex")
						return
					}
					this.setCurrUser(this.$refs.userName.value)
					this.setCurrUserIco(this.$refs.userIco.src)
					this.$router.push("/wzsjIndex")
					
				}
			},
			telInput(event){				
				let userName=this.$refs.userName.value				
				if(userName.length>=3&&userName.length<10){					
					this.$refs.telBtnEle.style.backgroundColor="#ff750f"
				}else{
					this.$refs.telBtnEle.style.backgroundColor="#c5c5c5"
				}				
			},
			
			toggleAddPic: function() {
				let vm = this;
				if(vm.imgUrls.length >= 1) {
					vm.isPhoto = false;
				} else {
					vm.isPhoto = true;
				}
			},
			addPic: function(e) {
				let vm = this;
				$('input[type=file]').trigger('click');
				return false;
			},
			onFileChange: function(e) {
				var files = e.target.files || e.dataTransfer.files;
				if(!files.length) return;
				this.createImage(files, e);
			},
			createImage: function(file, e) {
				let vm = this;
				lrz(file[0], { width: 480 }).then(function(rst) {
					vm.imgUrls.push(rst.base64);
					vm.imgUrls.splice(0,vm.imgUrls.length-1)
					return rst;
				}).always(function() {
				// 清空文件上传控件的值
				e.target.value = null;
			});
			},
			delImage: function(index) {
				let vm = this;
				let btnArray = ['取消', '确定'];
				vm.imgUrls.splice(index, 1);
				
			},
			previewImage: function(url){
				let vm = this;
				vm.isPreview = true;
				vm.previewImg = url;
			},
			closePreview: function(){
				let vm = this;
				vm.isPreview = false;
				vm.previewImg = "";
			},
			saveImage: function(){
				let vm = this;
				let urlArr = [],
				imgUrls = this.imgUrls;

				for(let i = 0; i < imgUrls.length; i++) {
					if(imgUrls[i].indexOf('file') == -1) {
						urlArr.push(imgUrls[i].split(',')[1]);
					} else {
						urlArr.push(imgUrls[i]);
					}
				}

				//数据传输操作
			}
		}
	}
</script>

<style scoped="scoped">
	.registerIco,.registerIco_wrap{
		width: 100%;
		min-height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 500;
		background: #fff;
	}
	.registerIco_content{
		width: 100%;
		padding: 0.4rem 0.3rem;
		font-size: 0.12rem;
	}
	
	.setIcon_img {
	    width: 0.9rem;
	    margin: 0 auto;
	    position: relative;
	    margin-bottom: 0.15rem;
	}
	.user_icon_wrap {
		    width: 0.9rem;
		    height: 0.9rem;
		    position: relative;
	}
	.setIcon_img p {
	    width: 100%;
	    margin-top: 0.13rem;
	    color: #2db0f4;
	    text-align: center;
	    overflow: hidden;
	    font-size: 0.14rem;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.fillName_wrap {
	    width: 66%;
	    margin: 0 auto;
	    text-align: center;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    white-space: nowrap;
	    padding: 0.2rem 0 0.11rem;
	    position: relative;
	    font-size: 0.14rem;
	    color: #c5c5c5;
	}
	.w_100 {
	    width: 100%;
	}
	.fileIco{
		width: 0.8rem;
		height: 0.3rem;
		 position: absolute;
		 font-size: 100px;
		 left: 0.1rem;
		 bottom: 0;
		 opacity: 0;
	}
	.fillName {
	    border: 0;
	    outline: none;
	    text-align: center;
	    font-size: 0.12rem;
	}
	.fillName_wrap:before {
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
	.setIcon_btn {
	    width: 58%;
	    margin: 0 auto;
	    text-align: center;
	    line-height: 0.4rem;
	    margin-top: 0.4rem;
	    background: #C5C5C5;
	    font-size: 0.18rem;
	    color: #ffffff;
	}
	.list-ul{
		width: 40%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		
	}
	.list-ul li{
		width: 100%;
		height: 1.1rem;
		position: relative;
		top: 0;
	}
	.list-link
	 {
	 	width: 100%;
	 	height: 85%;
	 	position: absolute;
	 	bottom: 0;
	 }
	.list-img-close{
		width: 0.16rem;
		height: 0.16rem;
		line-height: 0.14rem;
		border: 0.01rem solid red;
		display: block;
		position: absolute;
		top: 0rem;
		right: 0rem;
		border-radius: 50%;
		color: red;
		text-align: center;
	}
	.add-preview{
		position: relative;
		top: -0.2rem;
		left: 0;
		z-index: 300;
	}
</style>