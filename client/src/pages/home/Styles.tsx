import styled from 'styled-components';
import { Box, Container, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/images/banner.png';
import { color } from '../../utils/global/Styles';

export const MainBannerWrapper = styled(Container)`
		padding-top: 70px;
		background-image: url(${bannerImage});
		background-origin: margin;
		background-repeat: no-repeat;
		background-position: center top;
		background-color: #white;
`;

export const MainBanner = styled(Grid)`
		margin: auto!important;
`;
export const ImageWrapper = styled(Grid)``;

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
`;

export const SectionWrapper = styled(Container)``;
export const Section = styled(Grid)`
		margin: auto!important;
		margin-top: 20px;
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
        border-radius: 0px!important;
        `;

export const Redirect = styled(Link)`
        text-decoration: none;
`;