import React, { useState, useEffect } from 'react';
import { Drawer } from './components/drawer/Drawer';
import { Display } from './components/display/Display';
import * as OwnStyles from './Styles';
import { Navbar } from './components/navbar/Navbar';
import API from './utils/api/';

function App() {
	const [type, setType] = useState();
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
	const handleSelection = (event) => {
		setType(event.currentTarget.value);
	};
	const handleReset = () => {
		setType();
	};

	useEffect(() => {
		handleCheckIfLoggedIn();
	}, []);

	useEffect(() => {
		console.log('second useEffect');
		handleGetUser();
	}, [loggedIn]);

	return (
		<>
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
			{!type &&
				<>
					<OwnStyles.ButtonDisplay
						container
						direction="column"
						justify="center"
						alignItems="center"
					>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="hiragana">hiragana</OwnStyles.SelectButton>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="katakana">katakana</OwnStyles.SelectButton>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="greetings">greetings</OwnStyles.SelectButton>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="verbs">verbs</OwnStyles.SelectButton>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="adjectives">adjectives</OwnStyles.SelectButton>
					</OwnStyles.ButtonDisplay>
				</>
			}
			{type &&
				<OwnStyles.MainDisplayWrapper
					container
					direction="column"
					justify="center"
					alignItems="center">
					<Display type={type} onReset={handleReset} />
				</OwnStyles.MainDisplayWrapper>
			}
		</>
	);
}

export default App;
