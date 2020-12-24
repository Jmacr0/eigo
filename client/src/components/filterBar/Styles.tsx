import styled from 'styled-components';
import { Grid, Paper, ButtonGroup, Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { color } from '../../utils/global/Styles';

export const FilterWrapper = styled(Grid)`
	min-height: 30px;
	width: 100%;
	`;

export const FilterBar = styled(Paper)`
	height: 100%;
	width: 100%;
	margin: 10px;
	padding: 10px;
`;

export const Wrapper = styled(Grid)`
	`;

export const SearchWrapper = styled(Grid)`
	margin-left: auto!important;	
`;
export const Title = styled(Typography)`
margin-right: 10px!important;
`;

export const ButtonGroupWrapper = styled(ButtonGroup)``;
export const ButtonSingle = styled(Button)`
	color: white!important;
	background: ${color.primary.background.vertical}!important;
`; 
