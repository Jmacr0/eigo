import React, { useState } from 'react';
import { DrawerLoginTypes as OwnTypes } from './Types';
import { DrawerTypes } from '../Types';
import * as OwnStyles from './Styles';
import googleButton from '../../../assets/images/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png';
import { GoogleOneTap } from '../../googleOneTap/GoogleOneTap';
import API from '../../../utils/api';

export const DrawerLogin = React.memo((props: OwnTypes.Props) => {
	const [toggleLogin, setToggleLogin] = useState(true);
	const [showGoogleOneTap, setShowGoogleOneTap] = useState(false);
	const [userInput, setUserInput] = useState({
		username: '',
		password: '',
		passwordCheck: '',
	});
	const [inputError, setInputError] = useState(false);

	const handleClick = () => {
		API.user.test();
		const toggleGoogleOneTap = (showGoogleOneTap ? false : true);
		setShowGoogleOneTap(toggleGoogleOneTap);
	};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputError(false);
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
			...userInput,
			passwordCheck: '',
		})
	};
	const handleSubmit = async () => {
		if (toggleLogin && userInput.username && userInput.password) {
			const userLoginInput = {
				username: userInput.username,
				password: userInput.password,
			};
			console.log('logging in', userLoginInput);
			const res = await API.user.login(userLoginInput);
			if (res.success) {
				props.onMessage({
					show: true,
					text: 'Successfully logged in.',
					severity: 'success' as OwnTypes.Severity,
				});
				props.onLogin();
			} else {
				setInputError(true);
				props.onMessage({
					show: true,
					text: res.message.message,
					severity: 'error' as OwnTypes.Severity,
				});
			};
		};
		if (
			!toggleLogin &&
			userInput.username &&
			(userInput.password === userInput.passwordCheck)
		) {
			console.log('signing up', userInput);
			const res = await API.user.createUser(userInput);
			if (res.success) {
				props.onMessage({
					show: true,
					text: 'Successfully created user.',
					severity: 'success' as OwnTypes.Severity,
				});
				props.onLogin();
			} else {
				setInputError(true);
				props.onMessage({
					show: true,
					text: res.message.message,
					severity: 'error' as OwnTypes.Severity,
				});
			};
		};
	};
	return (
		<>
			<OwnStyles.Text
				variant="h6"
				align="center"
			>
				{toggleLogin ? "Login" : "Sign Up"}
			</OwnStyles.Text>
			<OwnStyles.DrawerList>
				<OwnStyles.DrawerListItem
					button
					disableRipple
				>
					<OwnStyles.Input
						error={inputError}
						color={inputError ? "secondary" : "primary"}
						// helperText={inputError ? "Incorrect combination." : ""}
						autoComplete="off"
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
					disableRipple
				>
					<OwnStyles.Input
						error={inputError}
						color={inputError ? "secondary" : "primary"}
						// helperText={inputError ? "Incorrect combination." : ""}
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
						disableRipple
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
					disableRipple
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
					disableRipple
				>
					<OwnStyles.DrawerListItemText>
						<img src={googleButton} onClick={handleClick}></img>
					</OwnStyles.DrawerListItemText>
				</OwnStyles.DrawerListItem>
			</OwnStyles.DrawerList>
			{showGoogleOneTap && <GoogleOneTap />}
		</>
	)
});