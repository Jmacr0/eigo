import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core';
import AOS from 'aos';
import { Drawer } from './components/drawer/Drawer';
import './index.css';
import * as OwnStyles from './Styles';
import { Navbar } from './components/navbar/Navbar';
import { BottomNavigation } from './components/bottomNavigation/BottomNavigation';
import API from './utils/api/';
// import { ActivityPage } from './pages/activity/ActivityPage';
// import { LibraryPage } from './pages/library/LibraryPage';
// import { FavouritesPage } from './pages/favourites/FavouritesPage';
// import { AboutPage } from './pages/about/AboutPage';
import { HomePage } from './pages/home/HomePage';
import { Footer } from './components/footer/Footer';
const renderLoader = () => <p>loading</p>

const ActivityPage = lazy(() => import('./pages/activity/ActivityPage'));
const LibraryPage = lazy(() => import('./pages/library/LibraryPage'));
const FavouritesPage = lazy(() => import('./pages/favourites/FavouritesPage'));
const AboutPage = lazy(() => import('./pages/about/AboutPage'));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

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
			// setTimeout(() => {
			setUser(data);
			// }, 1200);
		} else {
			setUser();
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
		AOS.init();
		handleCheckIfLoggedIn();
	}, []);

	useEffect(() => {
		console.log('second useEffect');
		console.log(user)
		handleGetUser();
	}, [loggedIn]);

	return (
		<MuiThemeProvider
			theme={theme}
		>
			<Router>
				<Navbar
					user={user}
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
				<OwnStyles.MainDisplayWrapper>
					<Suspense fallback={renderLoader()}>
						<Switch>
							<Route path="/activity">
								<ActivityPage />
							</Route>
							<Route path="/library">
								<LibraryPage
									user={user}
									onGetUser={handleGetUser}
								/>
							</Route>
							<Route path="/favourites">
								<FavouritesPage
									user={user}
									onGetUser={handleGetUser}
								/>
							</Route>
							<Route path="/about">
								<AboutPage />
							</Route>
							<Route path="/">
								<HomePage />
							</Route>
						</Switch>
					</Suspense>
				</OwnStyles.MainDisplayWrapper>
				{/* <BottomNavigation /> */}
				<Footer />
			</Router >
		</MuiThemeProvider>
	);
}

export default App;
