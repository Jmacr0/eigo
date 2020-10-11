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
				<OwnStyles.IconWrapper
					onClick={props.onDrawerClick}
					edge="start"
				>
					<OwnStyles.Icon />
				</OwnStyles.IconWrapper>
				<OwnStyles.Redirect to="/">
					Eigo
					</OwnStyles.Redirect>
			</OwnStyles.Nav>
		</OwnStyles.Navbar>
	)
});