import React, { useEffect, useState, useRef } from 'react';
import { Route, Switch, useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { HomePageTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { FavouriteDisplay } from '../../components/favouriteDisplay/FavouriteDisplay';
import iPhoneImage from '../../assets/images/iphone-frame.png';
import iPhoneImageActivity from '../../assets/images/iphone-frame-activity.png';
import iPhoneImageLibrary from '../../assets/images/iphone-frame-library.png';

export const HomePage = React.memo((props: OwnTypes.Props) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));
	const [currentStep, setCurrentStep] = useState(0);
	const [prevStep, setPrevStep] = useState(0);
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
									variant="h2"
								>
									the exciting japanese learning app for on the go. EIGO.
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
									variant="h2"
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
									<OwnStyles.StepperUpIcon />
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
									variant="h2"
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
									<OwnStyles.StepperUpIcon />
								</OwnStyles.StepperUpWrapper>
							</OwnStyles.MainTextBox>
						}
						{currentStep !== 2 && matches ?
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
						variant="body1"
						gutterBottom
					>
						EIGO is a Japanese Language Learning Tool targeted for people on the go. Users are able to utilize small pockets of time throughout their day by doing short activities that help memorize characters, words, and phrases.
					</OwnStyles.SectionText>
				</OwnStyles.Section>
			</OwnStyles.SectionWrapper>
			{/* <OwnStyles.SectionWrapper>
				<OwnStyles.Section
					container
					item
					direction="row-reverse"
					alignItems="flex-start"
					alignContent="space-around"
					justify="center"
					lg={8}
				>
					<OwnStyles.Section
						item
						sm={5}
					>
						<OwnStyles.ImageWrapper>
							<OwnStyles.Image
								src={iPhoneImageActivity}
								alt="iphont-image-activity"
							/>
						</OwnStyles.ImageWrapper>
					</OwnStyles.Section>
					<OwnStyles.Section
						item
						sm={7}
					>
						<OwnStyles.Heading
							variant="h3"
							color="primary"
						>
							Activity
						</OwnStyles.Heading>
						<OwnStyles.TextWrapper>
							Practice and test your knowledge with
							<ul>
								<li>
									<em>Hiragana</em>
								</li>
								<li>
									<em>Katakana</em>
								</li>
								<li>
									<em>Verbs</em>
								</li>
								<li>
									<em>Adjectives</em>
								</li>
							</ul>
							<em><b>Random</b></em> tests your ability to remember characters and words.
							<br />
							<br />
							<em><b>Test</b></em> encourages not only memory, but the ability to type characters and words.
							<br />
							<OwnStyles.RedirectWrapper>
								<OwnStyles.Redirect to="/activity">TRY HERE</OwnStyles.Redirect>
							</OwnStyles.RedirectWrapper>
						</OwnStyles.TextWrapper>
					</OwnStyles.Section>
				</OwnStyles.Section>
			</OwnStyles.SectionWrapper>
			<OwnStyles.SectionWrapper>
				<OwnStyles.Section
					container
					item
					direction="row-reverse"
					alignItems="flex-start"
					alignContent="space-around"
					justify="center"
					lg={8}
				>
					<OwnStyles.Section
						item
						sm={5}
					>
						<OwnStyles.ImageWrapper>
							<OwnStyles.Image
								src={iPhoneImageLibrary}
								alt="iphone-image-library"
							/>
						</OwnStyles.ImageWrapper>
					</OwnStyles.Section>
					<OwnStyles.Section
						item
						sm={7}
					>
						<OwnStyles.Heading
							variant="h3"
							color="primary"
						>
							Library
						</OwnStyles.Heading>
						<OwnStyles.TextWrapper>
							Check out the library - a repository for:
							<ul>
								<li>
									<em>Verbs</em>
								</li>
								<li>
									<em>Adjectives</em>
								</li>
							</ul>
							<em><b>Forms</b></em> provides reference for form changes in verbs & adjectives.
							<br />
							<br />
							<em><b>Favourites</b></em> enables users to create a favourites list and add verbs & adjectives.
							<br />
							<OwnStyles.RedirectWrapper>
								<OwnStyles.Redirect to="/library">TRY HERE</OwnStyles.Redirect>
							</OwnStyles.RedirectWrapper>
						</OwnStyles.TextWrapper>
					</OwnStyles.Section>
				</OwnStyles.Section>
			</OwnStyles.SectionWrapper> */}
		</>
	);
});