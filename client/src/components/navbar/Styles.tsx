import styled from 'styled-components';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

export const Navbar = styled(AppBar)`
	height: 50px;
`;

export const Nav = styled(Toolbar)``;

export const IconWrapper = styled(IconButton)``;
export const Icon = styled(AccountCircleIcon)``;

export const Redirect = styled(Link)`
		color: white;
		text-decoration: none;
		transition-duration: 0.2s;
		&:hover {
			color: antiquewhite;
		}
`;
