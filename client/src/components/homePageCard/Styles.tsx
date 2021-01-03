import styled from 'styled-components';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { color } from '../../utils/global/Styles';

export const Main = styled(Card)`
	margin: 20px;
	min-height: 400px;
	`;
export const Image = styled(CardMedia)`
	height: 150px;
`;

export const Content = styled(CardContent)``;

export const DarkText = styled(Typography)`
	color: ${color.dark.background}!important;
`;
export const CardLinks = styled(CardActions)``;
export const Link = styled(Button)``;