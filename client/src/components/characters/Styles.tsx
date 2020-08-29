import styled from 'styled-components';
import { CircularProgress, Button, Card } from '@material-ui/core';

export const Spinner = styled(CircularProgress)`

`;

export const RandomButton = styled(Button)`
		min-width: 200px;
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