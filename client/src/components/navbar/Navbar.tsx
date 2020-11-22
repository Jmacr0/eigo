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
				<OwnStyles.RedirectHome to="/">
					EIGO
					</OwnStyles.RedirectHome>
				<OwnStyles.NavLinkWrapper>
					<OwnStyles.RedirectNavLink to="/activity">
						Activity
					</OwnStyles.RedirectNavLink>
					|
					<OwnStyles.RedirectNavLink to="/library">
						Library
					</OwnStyles.RedirectNavLink>
					|
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
				</OwnStyles.NavLinkWrapper>
			</OwnStyles.Nav>
		</OwnStyles.Navbar>
	)
});