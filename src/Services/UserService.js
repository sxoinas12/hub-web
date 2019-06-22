
import API from './API';

import React from "react";
class UserService {
	constructor(){
		this.user = null;
		this.token = null;
		this.AuthContext = React.createContext({
			isAuthenticated:false
		});
		
		this.API = new API();

		console.log("########",this.AuthContext);
	}

	isAuthenticated(){
		return false;
	}

	login(){
		return true;
	}
}

export default UserService;