import styled from 'styled-components';
import { Box, Button, ButtonGroup, Container, Grid, Card, CardContent, Typography, MobileStepper } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/images/banner.png';
import { color } from '../../utils/global/Styles';

export const MainBannerWrapper = styled(Container)`
		min-height: 100vh;
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
		height: 100vh!important;
`;

export const SimpleGrid = styled(Grid)``;

export const MainTextBox = styled(Grid)`
		min-height: 70vh!important;
		padding: 20px;
		overflow: hidden!important;
`;

export const MainText = styled(Typography)`
		color: ${color.dark.text};
`;

export const GetStartedButton = styled(Button)`
		width: 100%!important;
		margin-top: 40px!important;
		padding: 10px!important;
		font-size: x-large!important;
		border: 4px solid ${color.dark.text}!important;
		border-radius: 10px!important;
		padding-left: 20px!important;		
		padding-right: 40px!important;
		color: ${color.dark.text}!important;
`;

export const GetStartedButtonIcon = styled(ArrowForwardIosIcon)`
	@keyframes blinker {
		0% { opacity: 1.0; }
		50% { opacity: 0.0; }
		100% { opacity: 1.0; }
   	}
    animation: blinker 1s linear infinite;
`;

export const FindOutMoreWrapper = styled(Grid)`
	   margin-top: 20px;
	   width: 100%!important;
	   display: flex!important;
	   justify-content: center!important;
`;
export const FindOutMoreButton = styled(Button)`
	color: ${color.dark.text}!important;
`;

export const Stepper = styled(MobileStepper)`		
		background: ${color.dark.background}!important;
		.MuiMobileStepper-dot {
			transition-duration: 0.2s;
			background-color: ${color.primary.background.flat}!important;
		}
		.MuiMobileStepper-dotActive {
			transition-duration: 0.2s;
			background-color: ${color.dark.text}!important;
		}
`;

export const StepperButton = styled(Button)`
		font-weight: bold!important;
	   	color: ${color.dark.text}!important;
`;

export const StepperForwardIcon = styled(ArrowForwardIosIcon)`
		font-weight: bold!important;
	   	color: ${color.dark.text}!important;
`;

export const StepperBackIcon = styled(ArrowBackIosIcon)`
		font-weight: bold!important;
	   	color: ${color.dark.text}!important;
`;
export const StepperUpWrapper = styled(Grid)`
		margin-top: 25px!important;
		width: 100%!important;
`
export const StepperUpIcon = styled(ArrowDropUpIcon)`
		font-weight: bold!important;
		font-size: 5rem!important;
	   	color: ${color.dark.text}!important;
		&:hover {
			cursor: pointer;
		}

		@keyframes blinker {
			0% { opacity: 1.0; }
			50% { opacity: 0.0; }
			100% { opacity: 1.0; }
		}

		animation: blinker 1s linear infinite;
`;

export const StepperLinkButton = styled(Link)`
		margin-top: 40px!important;
		padding: 10px!important;
		font-size: x-large!important;
		border: 4px solid ${color.dark.text}!important;
		border-radius: 10px!important;
		padding-left: 40px!important;		
		padding-right: 40px!important;
		color: ${color.dark.text}!important;
		text-decoration: none;	
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
export const SectionWrapperBeige = styled(Container)`
		background: antiquewhite!important;
		padding-top: 30px!important; 
		padding-bottom: 30px!important; 
		`;

export const Section = styled(Grid)`
		margin: auto!important;
		margin-top: 20px!important;
`;
export const ImageStripWrapper = styled(Grid)`
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;  
		background-image: url(${props => props.theme.image});
		min-height: 20vh!important;

`;
export const ImageStrip = styled.img`
		margin-top: 20px!important;
		margin-bottom: 20px!important;
		min-height: 20vh!important;
		width: 100%!important;
`
export const SectionHeading = styled(Typography)`
		color: ${color.dark.background}!important;
`;
export const RandomWord = styled(Typography)`
		color: ${color.dark.text}!important;
		letter-spacing: 10px!important;
`;
export const SectionText = styled(Typography)`
		color: ${color.dark.background}!important;
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
		background: ${color.secondary.background.flat}!important;
		`;

export const Redirect = styled(Link)`
		text-decoration: none;		
		color: white!important;
		font-weight: bold;		
`;
export const FeaturesButtonGroup = styled(ButtonGroup)`
		margin-top: 20px;
`;
export const FeaturesButton = styled(Button)`
		border-radius: 0px!important;
		background: white!important;
		&.active {
			background: ${color.dark.background}!important;
			color: white;
		}
`;