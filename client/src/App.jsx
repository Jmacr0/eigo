import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Drawer } from './components/drawer/Drawer';
import * as OwnStyles from './Styles';
import { Navbar } from './components/navbar/Navbar';
import API from './utils/api/';
import { HomePage } from './pages/home/HomePage';
import { HomePageALPHA } from './pages/homeALPHA/HomePageALPHA';

function App() {
	const [drawerStatus, setDrawerStatus] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState();
	const handleCheckIfLoggedIn = async () => {
		const { success } = await API.user.checkIfLoggedIn();
		setLoggedIn(success);
	};
	const handleGetUser = async () => {
		if (loggedIn) {
			console.log('get user', loggedIn);
			const { data } = await API.user.findUser();
			setTimeout(() => {
				setUser(data);
			}, 1200);
		};
	};
	const handleDrawerClick = () => {
		const setStatus = drawerStatus ? false : true;
		setDrawerStatus(setStatus);
	};
	const handleLogin = () => {
		const toggle = (loggedIn ? false : true);
		setLoggedIn(toggle);
	};
	useEffect(() => {
		handleCheckIfLoggedIn();
	}, []);

	useEffect(() => {
		console.log('second useEffect');
		handleGetUser();
	}, [loggedIn]);

	return (
		<Router>
			<Navbar
				onDrawerClick={handleDrawerClick}
			/>
			<Drawer
				loggedIn={loggedIn}
				user={user}
				setUser={setUser}
				drawerStatus={drawerStatus}
				onDrawerClick={handleDrawerClick}
				onLogin={handleLogin}
			/>
			<Switch>
				<Route path="/ALPHA">
					<HomePageALPHA />
				</Route>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
