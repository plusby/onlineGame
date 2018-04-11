const ERRNO=0

const commIndex=(url,obj)=>{
	return obj.$http.get(url).then((res)=>{	
	      res=res.body			
		 if(res.errno==ERRNO){				 
		 	return res.data
		 }
	})
	
}


export default commIndex