import styled from 'styled-components';
import { Box, Button, Grid, Typography, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { color } from '../../utils/global/Styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export const LibraryGrid = styled(Grid)``;
export const ButtonDisplay = styled(Grid)`
margin-top: 20px!important;
	`;

export const SelectButton = styled(Button)`
		min-height: 70px!important;
		min-width: 200px!important;
		border-radius: 0px!important;
`;
export const VerbButton = styled(Button)`
		min-height: 70px!important;
		min-width: 200px!important;
		border-radius: 0px!important;
		background-color: ${color.basic.green}!important;
		color: white!important;
`;
export const AdjectiveButton = styled(Button)`
		min-height: 70px!important;
		min-width: 200px!important;
		border-radius: 0px!important;
		background-color: ${color.basic.sky}!important;
		color: white!important;
`;
export const BackButton = styled(Button)`
`;
export const BackIconWrapper = styled(IconButton)`
margin-top: 60px!important;
`;
export const BackIcon = styled(ExitToAppIcon)``;
export const Title = styled(Typography)`
margin-top: 70px!important;
text-align: center;
`;
export const MainDisplayWrapper = styled(Grid)`
margin-top: 20px!important;
`;
