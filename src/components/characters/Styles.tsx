import styled from 'styled-components';
import { CircularProgress, Button, Card } from '@material-ui/core';

export const Spinner = styled(CircularProgress)`

`;

export const RandomButton = styled(Button)`

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
`;