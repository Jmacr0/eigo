import styled from 'styled-components';
import {
	IconButton,
	Typography,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	TextField,
	Button,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { color } from '../../../utils/global/Styles';

export const Header = styled.div``;

export const IconWrapper = styled(IconButton)``;
export const Icon = styled(ChevronLeftIcon)``;

export const Text = styled(Typography)`
        margin-top: 20px!important;
`;

export const Break = styled(Divider)``;

export const DrawerList = styled(List)``;
export const DrawerListItem = styled(ListItem)`
		background-color: transparent!important;		
		color: ${color.dark.text}!important;
		cursor: auto!important;
`;
export const DrawerListItemIcon = styled(ListItemIcon)``;
export const DrawerListItemText = styled(ListItemText)``;

export const Input = styled(TextField)`
		.MuiInputBase-input {
			color: ${color.dark.text}!important;
		}
		.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
			border-color: ${color.dark.text}!important;
		}
		.MuiInputLabel-outlined {
			color: ${color.dark.text}!important;
		}

		.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
			border-color: ${color.primary.background.flat}!important;
		}
		.MuiInputLabel-outlined.Mui-focused {
			color: ${color.primary.background.flat}!important;
		}
		
`;
export const UserButton = styled(Button)`
		border-radius: 0px!important;
		background: ${color.primary.background.flat}!important;
`;

export const SwitchUserButton = styled(Button)`
		color: ${color.dark.text}!important;
		border-radius: 0px!important;
`;