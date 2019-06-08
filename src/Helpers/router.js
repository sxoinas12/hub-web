

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Contact() {
  return <h2>contacts</h2>;
}


function AppRouter(){
	return (
		<Router>
			<div>
			<AppBar position="static">
			<Toolbar className="navbar">
				<LinkButton aria-label="Menu" to='/' color="inherit">Home</LinkButton>
				<LinkButton to='/contact/' color="inherit">Contact</LinkButton>
				<LinkButton to='/about/' color="inherit">About</LinkButton>
				<LinkButton to='/users/' color="inherit">Users</LinkButton>
				<LinkButton to='/login/' color="inherit">Login</LinkButton>
			</Toolbar>
			</AppBar>

			<Route path="/" exact component={HomePage} />
			<Route path="/contact/" component={Contact} />
			<Route path="/about/" component={About} />
        	<Route path="/users/" component={Users} />
        	<Route path="/login/" component={Login} />
			</div>



		</Router>
		)
}


export default AppRouter;