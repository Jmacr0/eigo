import styled from 'styled-components';
import { Card, Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export const HiddenAnswerCard = styled(Card)`
		padding: 5px;
		min-width: 250px;
		max-width: 250px;
		min-height: 100px;
		max-height: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		cursor: pointer;
		border-radius: 0!important;
		&:hover {
			background-color: #bbbbbb;
			transition: 0.2s;
		}
`;

export const RevealedText = styled(Box)``;

export const LoadingTextWrapper =  styled(Grid)`
container
spacing={0}
direction="column"
alignItems="center"
justify="center"`;

export const LoadingText = styled(Skeleton)`
	`;
