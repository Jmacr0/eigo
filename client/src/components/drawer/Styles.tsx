import styled from 'styled-components';
import {
    IconButton,
    Typography,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    Button,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export const Header = styled.div``;

export const IconWrapper = styled(IconButton)``;
export const Icon = styled(ChevronLeftIcon)``;

export const Text = styled(Typography)`
        margin-top: 20px!important;
`;

export const Break = styled(Divider)``;

export const SideDrawer = styled(Drawer)``;
export const DrawerList = styled(List)``;
export const DrawerListItem = styled(ListItem)``;
export const DrawerListItemIcon = styled(ListItemIcon)``;
export const DrawerListItemText = styled(ListItemText)``;

export const Input = styled(TextField)``;
export const UserButton = styled(Button)`
        border-radius: 0px!important;
`;