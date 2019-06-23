import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import './index.css';
import Button from '@material-ui/core/Button';
import API from '../Services/API';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {UserContext} from '../Services/ProviderService';
import URL from '../config/urls';
import Register from './register';
import axios from 'axios';


class Login extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			user:{
				username:"",
				password:""
			},
			register:false
			
		};
		this.API = new API();
		this.register = false;
	}
	
	handleSubmit(e){
		let user = this.state.user;


		this.API.post('http://localhost:3001/users/login',user)
		.then((user) => {
			this.props.context.searchTermChanged({user:{isAuthenticated:true}})
		}).catch((e) => console.log(e))
	}

	handleChange(event){
		this.setState({
			[event.target.name]:event.target.value
		});
	}


	handleRegister(userData){
		this.API.post(URL.register,userData)
		.then((user) => {
			this.props.context.searchTermChanged({user:{isAuthenticated:true}})
		}).catch((e) => console.log(e))
	}

	LogWithLink(e){
		console.log("DO I COM########")
		axios.get('http://localhost:3001/auth').then(response => response.data)
		.then((url) =>  {
			

			console.log(url)
			window.location.href = url;
		}).catch((e) => console.log("ERRRRRROr",e))
	}





	render(){
		let from = '/home'
		if(this.props.location.state){
			from  = this.props.location.state.from;
		}

		//from = this.props.location.state ? this.props.location.state.from : '/home';
		if( this.props.context.user.isAuthenticated === true){
			return (
				<Redirect to= {{
					pathname:from.pathname
				}} />
				)
			}
		return(

			<div>
			
		{this.state.register ? (
			<Register handleRegister={(e) => this.handleRegister(e)} />
			):
		 (
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
				      	Click Here to Register <button onClick={(e) => this.setState( prevState => ({register:!prevState.register})) } >register</button>
				      </div>
				      <div>
				      	<button onClick={(e) => this.LogWithLink(e) } >Login with Linkedin</button>
				      </div>
				</Paper>
			</div>
			)}
		 </div>)
	}
}

export default Login;