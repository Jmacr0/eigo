import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import { NavbarTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const Navbar = React.memo((props: OwnTypes.Props) => {
	return (
		<OwnStyles.Navbar
			position="fixed"
		>
			<OwnStyles.Nav>
				<OwnStyles.Redirect to="/">
					EIGO
					</OwnStyles.Redirect>
				{props.user ?
					<>
						<OwnStyles.UsernameDisplay>
							{props.user.username}
						</OwnStyles.UsernameDisplay>
						<OwnStyles.IconWrapper
							onClick={props.onDrawerClick}
							edge="start"
						>
							<OwnStyles.Icon />
						</OwnStyles.IconWrapper>
					</> : <OwnStyles.LoginLink onClick={props.onDrawerClick} to="#!">Login</OwnStyles.LoginLink>
				}
			</OwnStyles.Nav>
		</OwnStyles.Navbar>
	)
});