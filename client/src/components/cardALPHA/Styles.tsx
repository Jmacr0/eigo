import styled from 'styled-components';
import {
	Grid,
	Menu,
	MenuItem,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Chip,
	Tooltip,
	TextField,
	InputAdornment,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
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
		background-color: transparent!important;
`;
export const AdornmentWrapper = styled(InputAdornment)``;
export const AddNewFavouriteIcon = styled(PlaylistAddIcon)`
		cursor: pointer;
		&.hover {

		}
`;

export const RemoveFromFavouriteButton = styled(Chip)`
		margin-left: auto!important;
`;
export const RemoveIcon = styled(DeleteForeverIcon)``;

export const InputWrapper = styled.div`
		padding: 10px;
`;
export const Input = styled(TextField)`
		width: 150px;
`;

export const AccordionGroup = styled(Accordion)`
		min-height: 56px;
		width: 95%;
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