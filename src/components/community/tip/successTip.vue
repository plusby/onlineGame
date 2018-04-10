<template>
	<div class="successTip">
		<vheader :name="name"></vheader>
		<p><i class="iconfont icon-jiaoyichenggong"></i></p>
		<p>举报已提交，我们会尽快处理</p>
	</div>
</template>

<script>
	import vheader from "../header/header"
	export default{
		data(){
			return{
				name:"举报成功"
			}
		},
		components:{
			vheader
		}
	}
</script>

<style scoped="scoped">
	@import url("../../../img/icon/iconfont.css");
	.successTip{
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
		text-align: center;
	}
	.successTip>p{
		margin: 0.3rem 0 0;
		font-size: 0.16rem;
	}
	.icon-jiaoyichenggong{
		font-size: 0.5rem;
		color: #1FD8C0;
		font-weight: bold;
	}
</style>