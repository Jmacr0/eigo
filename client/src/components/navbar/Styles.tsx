import styled from 'styled-components';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { color } from '../../utils/global/Styles';

export const Navbar = styled(AppBar)`
	height: 55px;
	background: ${color.primary.background.vertical}!important;
`;

export const Nav = styled(Toolbar)``;

export const UsernameDisplay = styled(Typography)`
		margin-right: 5px!important;
`;

export const IconWrapper = styled(IconButton)`
		margin-left: 10px!important;	
		margin-right: 10px!important;
		background-color: transparent!important;
`;
export const Icon = styled(AccountCircleIcon)``;

export const RedirectHome = styled(Link)`
		color: white;
		text-decoration: none;
		margin-right: auto;
		transition-duration: 0.2s;
		&:hover {
			color: antiquewhite;
		}
`;

export const NavLinkWrapper = styled.div`
		margin-left: auto;
`;
export const RedirectNavLink = styled(Link)`
		color: white;
		text-decoration: none;
		margin-left: 10px;
		margin-right: 10px;
		transition-duration: 0.2s;
		&:hover {
			color: antiquewhite;
		}
`;

export const LoginLink = styled(Link)`
		color: white;
		text-decoration: none;
		margin-left: 10px;
		margin-right: 10px;
		transition-duration: 0.2s;
		&:hover {
			color: antiquewhite;
		}
`;