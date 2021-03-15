import React, { useEffect, useState, useRef } from 'react';
import { Route, Switch, useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSwipeable } from 'react-swipeable';
import { HomePageTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { HomePageCard } from '../../components/homePageCard/HomePageCard';

import { FavouriteDisplay } from '../../components/favouriteDisplay/FavouriteDisplay';
import iPhoneImage from '../../assets/images/iphone-frame.png';
import iPhoneImageActivity from '../../assets/images/iphone-frame-activity.png';
import iPhoneImageLibrary from '../../assets/images/iphone-frame-library.png';
import sakeBarrelsImage from '../../assets/images/sake-barrels.jpg';
import ramenBarImage from '../../assets/images/ramen-bar.jpg';
import libraryImage from '../../assets/images/library.jpg';
import { selectRandomWord } from '../../utils/api/randomWordAPI';

export const HomePage = React.memo((props: OwnTypes.Props) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));
	const [currentStep, setCurrentStep] = useState(0);
	const [prevStep, setPrevStep] = useState(0);
	const [currentFeatureDisplayStep, setCurrentFeatureDisplayStep] = useState(0);
	const [randomWord, setRandomWord] = useState('');
	const findOutMoreRef = useRef<HTMLHeadingElement>({} as HTMLHeadingElement)
	const handleStepperClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const clickedButton = event.currentTarget.value;
		if (clickedButton === 'next') {
			const newStep = currentStep >= 2 ? currentStep : currentStep + 1;
			setPrevStep(currentStep);
			setCurrentStep(newStep);
		}
		if (clickedButton === 'back') {
			const newStep = currentStep <= 0 ? currentStep : currentStep - 1;
			setPrevStep(currentStep);
			setCurrentStep(newStep);
		}
	}
	const handleFindOutMoreClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const clickedButton = event.currentTarget;
		console.log(clickedButton);
		findOutMoreRef.current.scrollIntoView({ behavior: "smooth" });
	}
	const handleFeaturesButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const clickedButton = parseInt(event.currentTarget.value);
		setCurrentFeatureDisplayStep(clickedButton);
		console.log(clickedButton);
	}
	const swipeHandlers = useSwipeable({
		onSwipedLeft: (eventData) => {
			const newStep = currentStep >= 2 ? currentStep : currentStep + 1;
			setPrevStep(currentStep);
			setCurrentStep(newStep);
		},
		onSwipedRight: (eventData) => {
			const newStep = currentStep <= 0 ? currentStep : currentStep - 1;
			setPrevStep(currentStep);
			setCurrentStep(newStep);
		},
	});
	OwnStyles.ImageStripWrapper.defaultProps = {
		theme: {
			image: `${currentFeatureDisplayStep === 0 ? sakeBarrelsImage :
				currentFeatureDisplayStep === 1 ? ramenBarImage : libraryImage}`
		},
	}
	useEffect(() => {
		setRandomWord(selectRandomWord());
	}, []);
	return (
		<>
			<OwnStyles.MainBannerWrapper
				maxWidth={false}
			>
				<OwnStyles.MainBanner
					container
					item
					direction="column"
					alignItems="center"
					alignContent="flex-start"
					justify="center"
					lg={8}
				>
					<OwnStyles.SimpleGrid
						container
						item
						direction="row"
						alignItems="center"
						alignContent="space-around"
						justify="center"
						style={{ overflowX: 'hidden' }}
						{...swipeHandlers}
					>
						{currentStep !== 0 && matches ?
							<OwnStyles.StepperButton
								value="back"
								onClick={handleStepperClick}
							>
								<OwnStyles.StepperBackIcon />
							</OwnStyles.StepperButton> :
							<OwnStyles.StepperButton
								disabled
							/>
						}
						{currentStep === 0 &&
							<OwnStyles.MainTextBox
								item
								sm={8}
								data-aos={prevStep !== 0 ? 'fade-right' : 'fade-left'}
								data-aos-duration="1000"
							>
								<OwnStyles.MainText
									variant="h3"
								>
									The exciting japanese learning app for on the go. EIGO.
								</OwnStyles.MainText>
								<OwnStyles.GetStartedButton
									value="next"
									onClick={handleStepperClick}
									endIcon={<OwnStyles.GetStartedButtonIcon />}
								>
									GET STARTED
						</OwnStyles.GetStartedButton>
								<OwnStyles.FindOutMoreWrapper>
									<OwnStyles.FindOutMoreButton
										onClick={handleFindOutMoreClick}
									>
										Find out more...
						</OwnStyles.FindOutMoreButton>
								</OwnStyles.FindOutMoreWrapper>
							</OwnStyles.MainTextBox>
						}
						{currentStep === 1 &&
							<OwnStyles.MainTextBox
								item
								sm={8}
								data-aos={prevStep > 1 ? 'fade-right' : 'fade-left'}
								data-aos-duration="1000"
							>
								<OwnStyles.MainText
									variant="h3"
								>
									Activity lets you test your ability to memorize characters, words, and sayings.
						</OwnStyles.MainText>
								<OwnStyles.StepperUpWrapper
									container
									item
									direction="row"
									alignItems="center"
									alignContent="space-around"
									justify="center"
								>
									<OwnStyles.StepperLinkButton
										to="/activity"
									>
										ACTIVITY
									</OwnStyles.StepperLinkButton>
									{/* <OwnStyles.StepperUpIcon /> */}
								</OwnStyles.StepperUpWrapper>
							</OwnStyles.MainTextBox>
						}
						{currentStep === 2 &&
							<OwnStyles.MainTextBox
								item
								sm={8}
								data-aos={prevStep > 2 ? 'fade-right' : 'fade-left'}
								data-aos-duration="1000"
							>
								<OwnStyles.MainText
									variant="h3"
								>
									Library lets you search for words and includes their various forms all in one repository... like a library!
						</OwnStyles.MainText>
								<OwnStyles.StepperUpWrapper
									container
									item
									direction="row"
									alignItems="center"
									alignContent="space-around"
									justify="center"
								>
									<OwnStyles.StepperLinkButton
										to="/library"
									>
										LIBRARY
									</OwnStyles.StepperLinkButton>
									{/* <OwnStyles.StepperUpIcon /> */}
								</OwnStyles.StepperUpWrapper>
							</OwnStyles.MainTextBox>
						}
						{currentStep === 1 && matches ?
							<OwnStyles.StepperButton
								value="next"
								onClick={handleStepperClick}
							>
								<OwnStyles.StepperForwardIcon />
							</OwnStyles.StepperButton> :
							<OwnStyles.StepperButton
								disabled
							/>
						}
					</OwnStyles.SimpleGrid>
					<OwnStyles.Stepper
						variant="dots"
						steps={3}
						position="static"
						activeStep={currentStep}
						nextButton={
							<></>
						}
						backButton={
							<></>
						}
					/>
					<h2
						ref={findOutMoreRef}
					/>
				</OwnStyles.MainBanner>
			</OwnStyles.MainBannerWrapper>
			<OwnStyles.SectionWrapper>
				<OwnStyles.Section
					container
					item
					direction="column"
					alignItems="flex-start"
					alignContent="space-around"
					justify="center"
					md={8}
				>
					<OwnStyles.SectionHeading
						variant="h3"
						gutterBottom
					>
						What is EIGO?
					</OwnStyles.SectionHeading>
					<OwnStyles.SectionText
						variant="h5"
						gutterBottom
					>
						EIGO is a Japanese Language Learning Tool targeted for people on the go. Users are able to utilize small pockets of time throughout their day by doing short activities that help memorize characters, words, and phrases.
					</OwnStyles.SectionText>
				</OwnStyles.Section>
			</OwnStyles.SectionWrapper>
			<OwnStyles.SectionWrapperBeige
				maxWidth={false}
			>
				<OwnStyles.Section
					container
					item
					direction="column"
					alignItems="center"
					alignContent="space-around"
					justify="center"
					xl={8}
				>
					<OwnStyles.SimpleGrid
						container
						item
						direction="row"
						alignItems="center"
						alignContent="space-around"
						justify="center"
					>
						<OwnStyles.FeaturesButtonGroup
							disableElevation
						>
							<OwnStyles.FeaturesButton
								value={0}
								className={currentFeatureDisplayStep === 0 ? 'active' : ''}
								onClick={handleFeaturesButtonClick}
							>
								MEMORIZE
							</OwnStyles.FeaturesButton>
							<OwnStyles.FeaturesButton
								value={1}
								className={currentFeatureDisplayStep === 1 ? 'active' : ''}
								onClick={handleFeaturesButtonClick}
							>
								CHALLENGE
							</OwnStyles.FeaturesButton>
							<OwnStyles.FeaturesButton
								value={2}
								className={currentFeatureDisplayStep === 2 ? 'active' : ''}
								onClick={handleFeaturesButtonClick}
							>
								REFERENCE
							</OwnStyles.FeaturesButton>
						</OwnStyles.FeaturesButtonGroup>
					</OwnStyles.SimpleGrid>
					<OwnStyles.SimpleGrid
						container
						item
						direction="row"
						alignItems="center"
						alignContent="space-around"
						justify="center"
						spacing={2}
					>
						{currentFeatureDisplayStep === 0 &&
							<OwnStyles.SimpleGrid
								item
								sm={4}
							>
								<HomePageCard
									title="Memorize"
									body="Use the flash cards to help memorize characters (hiragana, katakana) and words (verbs, adjectives). A paired hidden answer card is provided, and can be revealed with a click!"
									image={sakeBarrelsImage}
									link="activity"
								/>
							</OwnStyles.SimpleGrid>
						}
						{currentFeatureDisplayStep === 1 &&
							<OwnStyles.SimpleGrid
								item
								sm={4}
							>
								<HomePageCard
									title="Practice"
									body="Challenge yourself with the test mode and see how much you can remember. Similar to the flash cards, a hidden answer card is provided and can be revealed!"
									image={ramenBarImage}
									link="activity"
								/>
							</OwnStyles.SimpleGrid>
						}
						{currentFeatureDisplayStep === 2 &&
							<OwnStyles.SimpleGrid
								item
								sm={4}
							>
								<HomePageCard
									title="Library"
									body="Visit the vast library of vocabulary (たんご) as reference, or to discover new words! Also included are the many forms that each word may have (e.g. masu form 〜ます)."
									image={libraryImage}
									link="library"
								/>
							</OwnStyles.SimpleGrid>
						}
					</OwnStyles.SimpleGrid>
				</OwnStyles.Section>
			</OwnStyles.SectionWrapperBeige>
			<OwnStyles.SectionWrapper>
				<OwnStyles.Section
					container
					item
					direction="column"
					alignItems="flex-start"
					alignContent="space-around"
					justify="center"
					md={8}
				>
					<OwnStyles.SectionText
						variant="h5"
						gutterBottom
					>
						The word 'Eigo' means 'English' in Japanese. As we use English to learn Japanese the name is a play on the word meaning.
					</OwnStyles.SectionText>
					<hr />
					<OwnStyles.SectionText
						variant="h5"
						gutterBottom
					>
						Powered as a Progressive Web App (PWA), Eigo can be used like a native application on mobile by downloading to homescreen.
					</OwnStyles.SectionText>
				</OwnStyles.Section>
			</OwnStyles.SectionWrapper>
			<OwnStyles.SectionWrapper
				disableGutters
				maxWidth={false}
			>
				<OwnStyles.ImageStripWrapper
					container
					item
					direction="row"
					alignItems="flex-start"
					alignContent="space-around"
					justify="center"
				>
					<OwnStyles.SectionBeige
						container
						item
						direction="row"
						alignItems="flex-start"
						alignContent="space-around"
						justify="center"
						md={8}
					>
						<OwnStyles.Section
							item
							sm={5}
						>
							<OwnStyles.ImageWrapper>
								<OwnStyles.Image
									src={iPhoneImageLibrary}
									alt="iphone-image-library"
									data-aos="fade-left"
									data-aos-duration="500"
								/>
							</OwnStyles.ImageWrapper>
						</OwnStyles.Section>
						<OwnStyles.Section
							item
							sm={7}
						>
							<OwnStyles.SectionHeading
								variant="h4"
								gutterBottom
							>
								Learn different form variations
						</OwnStyles.SectionHeading>
							<OwnStyles.SectionText
								variant="h6"
								gutterBottom
							>
								<em><b>Form</b></em> variations can be tricky! The library features the most common form variations for:
							<ul>
									<li>
										<em>Verbs</em>
									</li>
									<li>
										<em>Adjectives</em>
									</li>
								</ul>
							This provides a place to use as a reference guide.
							<br />
								<br />
								<em><b>Search</b></em> lets you find a specific word!
							<br />
								{/* <OwnStyles.RedirectWrapper>
								<OwnStyles.Redirect to="/library">TRY HERE</OwnStyles.Redirect>
							</OwnStyles.RedirectWrapper> */}
							</OwnStyles.SectionText>
						</OwnStyles.Section>
						<OwnStyles.Section
							item
							sm={5}
						>
							<OwnStyles.ImageWrapper>
								<OwnStyles.Image
									src={iPhoneImageLibrary}
									alt="iphone-image-library"
									data-aos="fade-left"
									data-aos-duration="500"
								/>
							</OwnStyles.ImageWrapper>
						</OwnStyles.Section>
						<OwnStyles.Section
							item
							sm={7}
						>
							<OwnStyles.SectionHeading
								variant="h4"
								gutterBottom
							>
								Create your Favourites!
						</OwnStyles.SectionHeading>
							<OwnStyles.SectionText
								variant="h6"
								gutterBottom
							>
								<em><b>Favourites</b></em>  enables registered users to create a favourites list and add:
							<ul>
									<li>
										<em>Verbs</em>
									</li>
									<li>
										<em>Adjectives</em>
									</li>
								</ul>
								{/* <em><b>Forms</b></em> provides reference for form changes in verbs & adjectives.
							<br />
							<br /> */}
								<em><b>Multiple</b></em> favourites can be created to organize certain words together.
							<br />
								{/* <OwnStyles.RedirectWrapper>
								<OwnStyles.Redirect to="/library">TRY HERE</OwnStyles.Redirect>
							</OwnStyles.RedirectWrapper> */}
							</OwnStyles.SectionText>
						</OwnStyles.Section>
					</OwnStyles.SectionBeige>
					{/* <OwnStyles.RandomWordWrapper
						item
						md={8}
						style={{ backgroundColor: 'white' }}
					>
						<OwnStyles.RandomWord
							variant="h3"
						>
							{randomWord}
						</OwnStyles.RandomWord>
					</OwnStyles.RandomWordWrapper> */}
				</OwnStyles.ImageStripWrapper>
			</OwnStyles.SectionWrapper>
			<OwnStyles.SectionWrapper>
				<OwnStyles.Section
					container
					item
					direction="row"
					alignItems="flex-start"
					alignContent="space-around"
					justify="center"
					md={8}
				>
				</OwnStyles.Section>
			</OwnStyles.SectionWrapper>
		</>
	);
});