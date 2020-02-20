import React, { Component } from 'react';

class NavBar extends Component {
	state = {}
	render() {
		return (
			<nav className="justify-content-center bg-warning">
				<ul className="nav justify-content-center">
					<button className="nav-item btn bg-primary rounded-0">EIGO</button>
					<button className="nav-item btn bg-primary rounded-0">Profile</button>
					<button className="nav-item btn bg-primary rounded-0">Settings</button>
				</ul>
			</nav>
		);
	}
}

export default NavBar;