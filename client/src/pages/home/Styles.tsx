import styled from 'styled-components';
import { Box, Button, Container, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/images/banner.png';
import { color } from '../../utils/global/Styles';

export const MainBannerWrapper = styled(Container)`
		padding-top: 70px;
		height: 100vh;
		background: ${color.dark.background};
`;
// MainBannerWrapper Background Image Styles
// background-image: url(${bannerImage});
// background-origin: margin;
// background-repeat: no-repeat;
// background-position: center top;
// background-color: #white;
// background-size: cover;

export const MainBanner = styled(Grid)`
		margin: auto!important;
`;

export const MainTextBox = styled(Grid)`
		margin-top: 30px!important;
		padding: 20px;
`;

export const MainText = styled(Typography)`
		color: ${color.dark.text};
`;

export const GetStartedButton = styled(Button)`
		margin-top: 40px!important;
		padding: 10px!important;
		font-size: x-large!important;
		border: 4px solid ${color.dark.text}!important;
		border-radius: 10px!important;
		padding-left: 20px!important;		
		padding-right: 40px!important;
		color: ${color.dark.text}!important;
`;

export const ImageWrapper = styled(Grid)`
		overflow-x: hidden;
`;

export const Image = styled.img`
		width: 100%;
`;
export const InfoCard = styled(Card)``;
export const InfoCardContent = styled(CardContent)``;
export const InfoCardTitle = styled(Typography)`
		color: ${color.primary.text}!important;
`;

export const Heading = styled(Typography)`
		color: ${color.primary.text}!important;
		text-align: center;
		margin-bottom: 10px!important;
		font-family: Lobster!important;
`;

export const SectionWrapper = styled(Container)``;
export const Section = styled(Grid)`
		margin: auto!important;
		margin-top: 20px!important;
`;

export const TextWrapper = styled.p`
        margin: auto;
        max-width: 350px;
`;

export const RedirectWrapper = styled(Box)`
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 70px!important;
		min-width: 200px!important;
		border-radius: 5px!important;
		margin-top: 10px;
		margin-bottom: 10px;
		background: ${color.secondary.background.vertical}!important;
		`;

export const Redirect = styled(Link)`
		text-decoration: none;		
		color: white!important;
		font-weight: bold;
`;