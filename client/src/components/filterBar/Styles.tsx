import styled from 'styled-components';
import { Grid, Paper, ButtonGroup, Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { color } from '../../utils/global/Styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListIcon from '@material-ui/icons/List';

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
	background: ${color.primary.background.gradient.vertical}!important;
`;

export const DisplayIcon = styled(ListIcon)`
	margin-right: 10px;
`;

export const DropDown = styled(Select)`
	border: 2px solid ${color.dark.text};
	border-radius: 2px;
	&.MuiInput-underline {

	}
`;
export const DropDownItem = styled(MenuItem)`

padding-left: 7px!important;
padding-right: 15px!important;
`;