import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import { DrawerTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import googleButton from '../../assets/images/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png';
import { GoogleOneTap } from '../googleOneTap/GoogleOneTap';
import API from '../../utils/api';
import { DrawerLogin } from './drawerLogin/DrawerLogin';
import { DrawerContent } from './drawerContent/DrawerContent';

export const Drawer = React.memo((props: OwnTypes.Props) => {
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
				{props.loggedIn ?
					<DrawerContent
						user={props.user}
						setUser={props.setUser}
						onLogin={props.onLogin}
					/>
					:
					<DrawerLogin
						onLogin={props.onLogin}
					/>
				}
			</OwnStyles.SideDrawer>
		</>
	)
});