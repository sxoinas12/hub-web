import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import './index.css';
import Button from '@material-ui/core/Button';

class Login extends React.Component{
	constructor(props){
		super(props)
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
				      />
				      <TextField
				        id="outlined-password-input"
				        label="Password"
				        type="password"
				        margin="normal"
				        variant="outlined"
				      />
				      <Button className="logBut">Log in</Button>
				</Paper>
			</div>
			)
	}
}

export default Login;