
class API {
	post(url,data){
		try{
			let options = {
			method:"POST",
			headers:{
				'Content-Type':"application/json"
			},
			body:JSON.stringify(data)
			};
			console.log("dadada",data)
			return fetch(url,options);
		}
		catch(e){
			console.log(e)
		}
		
	}
}


export default API;