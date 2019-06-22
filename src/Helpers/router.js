

import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//maybe import nav bar here
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import LinkButton from '../Components/LinkButton';
import './router.css';

//Import pages
import HomePage from '../Home/homepage';
import Login from '../Login/index';
import UserSevice from '../Services/UserService';


import {UserContext} from '../Services/ProviderService';


function About() {
  return <h2>ABout the users</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Contact() {
  return <h2>contacts</h2>;
}
const PrivateRoute = ({component:Component , ...rest }) => (
	
	 <Route { ...rest } render = {(props) => 
	 	<UserContext.Consumer>
		{({user}) => (
			user.isAuthenticated ?
			<Component {...props} />
			: <Redirect to={{
				pathname:"/login",
				state:{ from : props.location}

			}} />
			)}
		</UserContext.Consumer>
		}
	 />
	 
	)




class AppRouter extends React.Component{
	constructor(props){
		super(props)
		this.state = {	
		}
	} 
	render(){
	return (
		<Router>
			<div>
			<AppBar position="static">
			<Toolbar className="navbar">
				<LinkButton aria-label="Menu" to='/' color="inherit">Home</LinkButton>
				<LinkButton to='/contact/' color="inherit">Contact</LinkButton>
				<LinkButton to='/about/' color="inherit">About</LinkButton>
				<LinkButton to='/users/' color="inherit">Users</LinkButton>
				<UserContext.Consumer>
					{({user}) => (
						user.isAuthenticated ?(
							<div>User Profile</div>
							):(
								<LinkButton  to='/login/' color="inherit">Login</LinkButton>
								)
							)}
				</UserContext.Consumer>
				
			</Toolbar>
			</AppBar>

			<Route path="/" exact component={HomePage} />
			<Route path="/contact/" component={Contact} />
        	<Route path="/users/" component={Users} />
        	

        	<UserContext.Consumer> 
        		{(context) => (
        		<Route path="/login/" render={(props) => <Login {...props} context={context} />}/>
        		)}
        	</UserContext.Consumer> 
        	{/* Privates Routes are defined here */}

        	<PrivateRoute path="/about/" component={About} />

			</div>



		</Router>
		)
}
}


export default AppRouter;