import styled from 'styled-components';
import {
	Grid,
	Menu,
	MenuItem,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Chip,
	Tooltip
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { teal, purple, orange } from '@material-ui/core/colors';

export const color = {
	shortFormColor: teal[900],
	longFormColor: purple[800],
	teFormColor: orange[400],
};

export const CardDisplay = styled(Grid)`
	
	`;

export const FavouriteButton = styled(Chip)`
		margin-left: auto!important;
`;
export const FavouriteIcon = styled(AddIcon)``;
export const FavouriteMenu = styled(Menu)`
`;
export const FavouriteMenuItem = styled(MenuItem)`
		min-width: 110px!important;
`;

export const AccordionGroup = styled(Accordion)`
		width: 100%;
`;
export const AccordionTitle = styled(AccordionSummary)``;
export const AccordionBody = styled(AccordionDetails)`
		flex-direction: column;
`;

export const ShowMoreIcon = styled(ExpandMoreIcon)``;
export const MapKey = styled(Chip)`
		font-weight: bold;
		color: white!important;
		width: 55px;
`;

export const Tip = styled(Tooltip)`
		height: 30px!important;
`;