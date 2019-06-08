
import React from "react";
import {Parallax} from 'react-materialize';
import './homepage.css'

class HomePage extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return(

			<div>
				<div>
				<Parallax image={<img src='./img/page6.jpg' />} />
					<div className="section white">
					<div className="row ">
					<h2 className="header">
					Parallax
					</h2>
					<p className="grey-text text-darken-3 lighten-3">
					Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
					</p>
					</div>
				</div>
				<Parallax image={<img src='./img/page4.jpg' />} />
				</div>
			</div>
			)
	}
}

export default HomePage;