import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DrawerContentTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import API from '../../../utils/api';

export const DrawerContent = React.memo((props: OwnTypes.Props) => {
	const [showConfirmLogout, setShowConfirmLogout] = useState(false);
	const history = useHistory();
	const handleLogout = async () => {
		const res = await API.user.logout();
		if (res) {
			props.onMessage({
				show: true,
				text: 'Successfully logged out.',
				severity: 'info' as OwnTypes.Severity,
			});
			props.onLogin();
		};
	};
	const handleClick = () => {
		API.user.test();
		history.push('/favourites');
		props.onDrawerClose();
	};

	useEffect(() => {
	}, []);

	return (
		<>
			<OwnStyles.DrawerList>

				<OwnStyles.UserListItem
					button
					disableRipple
				>
					{props.user ?
						<>
							<OwnStyles.DrawerListItemIcon>
								<OwnStyles.UserIcon />
							</OwnStyles.DrawerListItemIcon>
							<OwnStyles.DrawerListItemText primary={props.user.username} onClick={handleClick} />
						</>
						:
						<OwnStyles.Loader height={32} width={190} animation="wave" />
					}
				</OwnStyles.UserListItem>
				<OwnStyles.DrawerListItem
					button
				>
					<OwnStyles.DrawerListItemIcon>
						<OwnStyles.StarredIcon />
					</OwnStyles.DrawerListItemIcon>
					<OwnStyles.DrawerListItemText primary="Favourites" onClick={handleClick} />
				</OwnStyles.DrawerListItem>
				<OwnStyles.LogoutListItem
					button
					disableRipple
				>
					<OwnStyles.LogoutButton
						variant="contained"
						color={showConfirmLogout ? "secondary" : "primary"}
						disableElevation
						onClick={(
							showConfirmLogout ?
								handleLogout
								:
								() => setShowConfirmLogout((showConfirmLogout ? false : true)))}
					>
						{showConfirmLogout ? "Confirm" : "Logout"}
					</OwnStyles.LogoutButton>
					{showConfirmLogout &&
						<OwnStyles.LogoutButton
							variant="text"
							color={showConfirmLogout ? "secondary" : "primary"}
							disableElevation
							onClick={() => setShowConfirmLogout((showConfirmLogout ? false : true))}
						>
							Cancel
						</OwnStyles.LogoutButton>
					}
				</OwnStyles.LogoutListItem>
				<OwnStyles.Break />
				<OwnStyles.DrawerListItem
					button
					disabled
				>
					<OwnStyles.Input
						disabled
						autoComplete="off"
						color="primary"
						id="Search"
						label="Search"
						variant="outlined"
						size="small"
					// InputProps={{
					// 	endAdornment:
					// 		< InputAdornment position="end" >
					// 			{adornment}
					// 		</InputAdornment>
					// }}
					/>
				</OwnStyles.DrawerListItem>
			</OwnStyles.DrawerList>
		</>
	);
});