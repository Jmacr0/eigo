import styled from 'styled-components';
import { Box, Container, Grid, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/images/banner.png';

export const MainBannerWrapper = styled(Container)`
		padding-top: 70px;
		background-image: url(${bannerImage});
		background-origin: margin;
		background-repeat: no-repeat;
		background-position: center top;
		background-color: #white;
`;

export const MainBanner = styled(Grid)``;
export const ImageWrapper = styled(Grid)``;

export const Image = styled.img`
		width: 100%;
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