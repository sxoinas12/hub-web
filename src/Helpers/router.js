

import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
//maybe import nav bar here
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import LinkButton from '../Components/LinkButton';
import './router.css';

//Import pages
import HomePage from '../Home/homepage';
import Login from '../Login/index';

function About() {
  return <h2>ABout the users</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Contact() {
  return <h2>contacts</h2>;
}


const AuthConext = React.createContext();

class MyProvider extends React.Component {
	state = {
		isAuthenticated:false
	}
	render(){
		return (
			<AuthConext.Provider>
				{this.props.children}
			</AuthConext.Provider>
		)
	}
}


const PrivateRoute = ({component:Component , ...rest }) => (
	<Route { ...rest } render = {(props) => 
		props.location.isAuthenticated === true ? 
		<Component {...props} />
		: <Redirect to={{
			pathname:"/login",
			state:{ from : props.location}
		}} />
		}
	 />
)



class AppRouter extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			isAuthenticated:false
		}
	} 

	onAuth(){
		this.setState({isAuthenticated:true});
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
				{this.state.isAuthenticated ? (
					<div>User Profile</div>
					):(
						<LinkButton  to='/login/' color="inherit">Login</LinkButton>
					)}
				
			</Toolbar>
			</AppBar>

			<Route path="/" exact component={HomePage} />
			<Route path="/contact/" component={Contact} />
        	<Route path="/users/" component={Users} />
        	<Route path="/login/" render={(props) => <Login {...props} auth={() => this.onAuth()} /> } />


        	{/* Privates Routes are defined here */}

        	<PrivateRoute path="/about/" component={About} />

			</div>



		</Router>
		)
}
}


export default AppRouter;