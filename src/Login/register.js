import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import API from '../Services/API';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email:"",
			username:"",
			password:""
		}
	}
	handleChange(e){
		this.setState({[e.target.name]:e.target.value});
	}


	handleSubmit(e){
		this.props.handleRegister(this.state);
	}


	render(){
		return(
			<div className="container">
				<Paper className="form">
					 <div>Please Log In to the XDN Area</div>
					 <TextField
				        id="outlined-email-input"
				        label="Email"
				        type="email"
				        name="email"
				        margin="normal"
				        variant="outlined"
				        onChange={(e) => this.handleChange(e)}
				      />
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
				      <Button onClick = {(e) => this.handleSubmit(e)}className="logBut">Register</Button>
				      
				</Paper>
			</div>
			)
	}
}


export default Register;