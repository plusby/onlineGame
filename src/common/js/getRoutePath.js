const getRoutePath=(obj, parsePath, chilPath, el)=>{
	
	if(obj.$route.path == parsePath&&obj.$refs[el]) { //如果跳转到子路由，那么隐藏当前路由
		setTimeout(() => {
			obj.$refs[el].style.display = "none"
		}, 600)
	}
	if(obj.$route.path == chilPath&&obj.$refs[el]) { //如果从子路由跳转回来就显示当前路由
		obj.$refs[el].style.display = "block"
	}
}

export default getRoutePath