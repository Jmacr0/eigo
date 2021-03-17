import styled from 'styled-components';
import {
	IconButton,
	Divider,
	Drawer,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { color } from '../../utils/global/Styles';

export const Header = styled.div``;

export const IconWrapper = styled(IconButton)``;
export const Icon = styled(ChevronLeftIcon)`
	color: ${color.dark.text}!important;
`;

export const Break = styled(Divider)``;

export const SideDrawer = styled(Drawer)`
	.MuiDrawer-paper {
		color: ${color.dark.text}!important;
		background: linear-gradient(90deg, rgb(37, 39, 43) 0%,rgb(33, 36, 41, 1) 100%)!important;		
	}
`;