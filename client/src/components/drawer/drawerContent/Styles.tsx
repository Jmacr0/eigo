import styled from 'styled-components';
import {
	Typography,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	TextField,
	Button,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export const Header = styled.div``;

export const Loader = styled(Skeleton)``;

export const UserIcon = styled(AccountCircleIcon)``;
export const StarredIcon = styled(StarBorderIcon)``;

export const Text = styled(Typography)`
        margin-top: 20px!important;
`;

export const Break = styled(Divider)``;

export const DrawerList = styled(List)``;
export const DrawerListItem = styled(ListItem)``;
export const UserListItem = styled(ListItem)`
		background-color: transparent!important;
		cursor: auto!important;
`;
export const LogoutListItem = styled(ListItem)`
		background-color: transparent!important;
		cursor: auto!important;
`;
export const DrawerListItemIcon = styled(ListItemIcon)``;
export const DrawerListItemText = styled(ListItemText)``;

export const Input = styled(TextField)``;
export const LogoutButton = styled(Button)`
        border-radius: 0px!important;
`;