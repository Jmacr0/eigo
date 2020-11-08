import styled from 'styled-components';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

export const Navbar = styled(AppBar)`
	height: 50px;
`;

export const Nav = styled(Toolbar)``;

export const UsernameDisplay = styled(Typography)`
		margin-right: 5px!important;
`;

export const IconWrapper = styled(IconButton)`
		background-color: transparent!important;
`;
export const Icon = styled(AccountCircleIcon)``;

export const Redirect = styled(Link)`
		color: white;
		text-decoration: none;
		margin-right: auto;
		transition-duration: 0.2s;
		&:hover {
			color: antiquewhite;
		}
`;

export const LoginLink = styled(Link)`
		color: white;
		text-decoration: none;
		margin-left: auto;
		transition-duration: 0.2s;
		&:hover {
			color: antiquewhite;
		}
`;