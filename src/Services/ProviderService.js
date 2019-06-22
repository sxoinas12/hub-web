

import React from "react";

const USER_STATE = {
	user:{
		isAuthenticated:""
	},
	logout:(user) => console.log("logout bitch"),
	data:{
		some:true
	}
}
export const UserContext = React.createContext()


export default class Provider extends React.Component{
	constructor(props){
		super(props)
		this.state = USER_STATE;
	}

	searchTermChanged = searchTerm => {
		
		this.setState(searchTerm)
	};
		
	render(){
		return (
			<React.Fragment>
				<UserContext.Provider value={{
			        ...this.state,
			        searchTermChanged: this.searchTermChanged,
			      	}}> 
			      	{this.props.children} 
			     </UserContext.Provider>
			</React.Fragment>
			)
	}
}


