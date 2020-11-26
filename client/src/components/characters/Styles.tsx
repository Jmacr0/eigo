import styled from 'styled-components';
import { Grid, Button, Card } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { color } from '../../utils/global/Styles';

export const LoaderContainer = styled(Grid)`
		max-height: 100px;
		min-height: 100px;
`;
export const Loader = styled(Skeleton)``;

export const RandomButton = styled(Button)`
		min-width: 200px;
		color: white!important;
		background: ${color.primary.background.vertical}!important;
		&:disabled {
			color: rgba(16, 16, 16, 0.3)!important;
			background: #e0e0e0!important;
		};
`;

export const HiddenAnswerCard = styled(Card)`
		min-width: 150px;
		max-width: 150px;
		min-height: 100px;
		max-height: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		cursor: pointer;
		&:hover {
			background-color: #bbbbbb;
			transition: 0.2s;
		}
`;