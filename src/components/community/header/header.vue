<template>
	<div class="teamIndex-header">
		<span class="teamIndex-header-back" v-on:click="go()"><</span>
		<span class="teamIndex-header-name">
			{{name}}
		</span>
	</div>
</template>

<script>
	export default{
		props:{
			name:{
				type:String
			},
			goFlage:{
				type:Boolean
			}
		},
		methods:{
			
				go(){
					//if(this.goFlage){
						this.$router.go(-1)
					/*}else{
						this.$emit("backLast",false)
					}*/
				}
			
		}
	}
</script>

<style scoped="scoped">
	.teamIndex-header{
		width: 100%;
		height: 0.5rem;
		line-height: 0.5rem;
	    text-align: center;
	    font-size: 0.16rem;
	    color: #a5a5a5;
	    position: relative;
	    top: 0;
	    left: 0;
	    background: #202020;
	}
	.teamIndex-header-back{
		position: absolute;	
	    left: 0.14rem;
	    display: block;
	    width: 0.12rem;
	    height: 0.2rem;
	    font-size: 0.24rem;
	}
</style>