import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import './index.css';
import Button from '@material-ui/core/Button';
import API from '../Services/API';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class Login extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			username:"",
			password:""
		};
		this.API = new API()
	}
	
	handleSubmit(e){
		this.API.post('http://localhost:3001/users/login',this.state)
		.then((user) => {
			this.props.auth();
		}).catch((e) => console.log(e))
	}

	handleChange(event){
		this.setState({
			[event.target.name]:event.target.value
		});
	}

	render(){

		const {isAuthenticated} = this.state;
		const { from } = this.props.location.state || { from : { pathname : '/' } };
		if( isAuthenticated === true){
			return (
				<Redirect to= {{
					pathname:from.pathname
				}} />
				)
			}

		return(
			<div className="container">
				<Paper className="form">
					 <div>Please Log In to the XDN Area</div>
					 <TextField
				        id="outlined-email-input"
				        label="Username"
				        type="username"
				        name="username"
				        margin="normal"
				        variant="outlined"
				        onChange={(e) => this.handleChange(e)}
				      />
				      <TextField
				        id="outlined-password-input"
				        label="Password"
				        name="password"
				        type="password"
				        margin="normal"
				        variant="outlined"
				      	onChange={(e) => this.handleChange(e)}
				      />
				      <Button onClick = {(e) => this.handleSubmit(e)}className="logBut">Log in</Button>
				      <div>
				      	Click Here to Register <button>register</button>
				      </div>
				</Paper>
			</div>
			)
	}
}

export default Login;