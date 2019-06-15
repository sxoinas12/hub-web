
import API from './API';

class UserService {
	constructor(){
		this.user = null;
		this.token = null;
		this.API = new API();
	}

	isAuthenticated(){
		return false;
	}

	login(){
		return true;
	}
}

export default UserService;