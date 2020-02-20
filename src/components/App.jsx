import React from 'react';
import NavBar from './navbar/NavBar';
import Login from './login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
// import SignUp from './signup/SignUp';

class App extends Component {
	state = {
		loggedIn: false
	}

	render() {
		const isLogged = this.state.loggedIn;
		let homePage;
		if (!isLogged) {
			homePage = <Login />;
		}

		return (
			<React.Fragment>
				<NavBar isLogged={isLogged} />
				{homePage}
			</React.Fragment>
		);
	}
}

export default App;
