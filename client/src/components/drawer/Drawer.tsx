import React, { useState } from 'react';
import { DrawerTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import googleButton from '../../assets/images/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png';
import { GoogleOneTap } from '../googleOneTap/GoogleOneTap';
import { DrawerLogin } from './drawerLogin/DrawerLogin';
import { DrawerContent } from './drawerContent/DrawerContent';
import { Message } from '../message/Message';

export const Drawer = React.memo((props: OwnTypes.Props) => {
	const [message, setMessage] = useState({
		show: false,
		text: '',
		severity: '' as OwnTypes.Severity,
	});
	const handleMessage = (newMessage: OwnTypes.Message) => {
		setMessage({
			show: true,
			text: newMessage.text!,
			severity: newMessage.severity,
		});
	};
	const handleCloseMessage = () => {
		setMessage({
			...message,
			show: false,
		});
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
				{props.loggedIn ?
					<DrawerContent
						user={props.user}
						setUser={props.setUser}
						onLogin={props.onLogin}
						onMessage={handleMessage}
					/>
					:
					<DrawerLogin
						onLogin={props.onLogin}
						onMessage={handleMessage}
					/>
				}
				{message.show &&
					<Message
						message={message}
						onCloseMessage={handleCloseMessage}
					/>
				}
			</OwnStyles.SideDrawer>
		</>
	)
});