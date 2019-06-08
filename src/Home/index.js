import React from 'react';
import AppRouter from '../Helpers/router'; 


class Home extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div>
					<AppRouter />
				</div>
				
			)
	}
}

export default Home;