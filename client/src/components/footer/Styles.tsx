import styled from 'styled-components';
import { BottomNavigation, BottomNavigationAction, Grid, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { color } from '../../utils/global/Styles';

export const SingleNavigation = styled(BottomNavigationAction)``;

export const Icon = styled(AddIcon)``;

export const FooterWrapper = styled.div`
	position: 'fixed';
	width: 100% !important;
	height: 400px !important;
	background: ${color.dark.background};
	bottom: 0!important;
`;

export const InfoWrapper = styled(Grid)``;
export const Text = styled(Typography)`
	margin: 20px!important;
	color: ${color.dark.text}!important;
	text-align: center!important;
`;
export const Anchor = styled.a`
		text-decoration: none;
		color: white!important;
		font-weight: bold;
`;
