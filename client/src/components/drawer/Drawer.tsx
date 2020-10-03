import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import { DrawerTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import googleButton from '../../assets/images/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png';
import { GoogleOneTap } from '../googleOneTap/GoogleOneTap';
import API from '../../utils/api';

export const Drawer = React.memo((props: OwnTypes.Props) => {
	const [toggleLogin, setToggleLogin] = useState(true);
	const [showGoogleOneTap, setShowGoogleOneTap] = useState(false);
	const [userInput, setUserInput] = useState({
		username: '',
		password: '',
		passwordCheck: '',
	});
	const handleClick = () => {
		const toggleGoogleOneTap = (showGoogleOneTap ? false : true);
		setShowGoogleOneTap(toggleGoogleOneTap);
	};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const input = event.currentTarget.value;
		const key = event.currentTarget.id;
		setUserInput({
			...userInput,
			[key]: input,
		});
	};
	const handleFormChange = () => {
		const toggle = (toggleLogin ? false : true);
		setToggleLogin(toggle);
		setUserInput({
			username: '',
			password: '',
			passwordCheck: '',
		})
	};
	const handleSubmit = () => {
		if (toggleLogin && userInput.username && userInput.password) {
			console.log('logging in', userInput);
		}
		if (
			!toggleLogin &&
			userInput.username &&
			(userInput.password === userInput.passwordCheck)
		) {
			console.log('signing up', userInput);
			API.user.createUser(userInput);
		}
	};
	return (
		<>
			<OwnStyles.SideDrawer
				open={props.drawerStatus}
				ModalProps={{
					onBackdropClick: props.onDrawerClick,
					onEscapeKeyDown: props.onDrawerClick
				}}
			>
				<OwnStyles.Header>
					<OwnStyles.IconWrapper
						onClick={props.onDrawerClick}
					>
						<OwnStyles.Icon />
					</OwnStyles.IconWrapper>
				</OwnStyles.Header>
				<OwnStyles.Break />
				<OwnStyles.Text
					variant="h6"
					align="center"
				>
					{toggleLogin ? "Login" : "Sign Up"}
				</OwnStyles.Text>
				<OwnStyles.DrawerList>
					<OwnStyles.DrawerListItem
						button
					>
						<OwnStyles.Input
							autoComplete="off"
							color="primary"
							id="username"
							label="Username"
							variant="outlined"
							size="small"
							value={userInput.username}
							onChange={handleChange}
						// InputProps={{
						// 	endAdornment:
						// 		< InputAdornment position="end" >
						// 			{adornment}
						// 		</InputAdornment>
						// }}
						/>
					</OwnStyles.DrawerListItem>
					<OwnStyles.DrawerListItem
						button
					>
						<OwnStyles.Input
							color="primary"
							type="password"
							id="password"
							label="Password"
							variant="outlined"
							size="small"
							value={userInput.password}
							onChange={handleChange}
						// InputProps={{
						// 	endAdornment:
						// 		< InputAdornment position="end" >
						// 			{adornment}
						// 		</InputAdornment>
						// }}
						/>
					</OwnStyles.DrawerListItem>
					{toggleLogin ? '' :
						<OwnStyles.DrawerListItem
							button
						>
							<OwnStyles.Input
								color="primary"
								type="password"
								id="passwordCheck"
								label="Retype password"
								variant="outlined"
								size="small"
								value={userInput.passwordCheck}
								onChange={handleChange}
							// InputProps={{
							// 	endAdornment:
							// 		< InputAdornment position="end" >
							// 			{adornment}
							// 		</InputAdornment>
							// }}
							/>
						</OwnStyles.DrawerListItem>
					}
					<OwnStyles.DrawerListItem
						button
					>
						<OwnStyles.UserButton
							variant="contained"
							color="primary"
							disableElevation
							onClick={handleSubmit}
						>
							{toggleLogin ? "Login" : "Sign Up"}
						</OwnStyles.UserButton>
						<OwnStyles.UserButton
							onClick={handleFormChange}
						>
							or {toggleLogin ? "Sign Up" : "Login"}
						</OwnStyles.UserButton>
					</OwnStyles.DrawerListItem>
					<OwnStyles.Break />
					<OwnStyles.DrawerListItem
						button
					>
						<OwnStyles.DrawerListItemText>
							<img src={googleButton} onClick={handleClick}></img>
						</OwnStyles.DrawerListItemText>
					</OwnStyles.DrawerListItem>
				</OwnStyles.DrawerList>
			</OwnStyles.SideDrawer>
			{showGoogleOneTap && <GoogleOneTap />}
		</>
	)
});