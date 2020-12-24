import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { HomePageTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { FavouriteDisplay } from '../../components/favouriteDisplay/FavouriteDisplay';
import iPhoneImage from '../../assets/images/iphone-frame.png';
import iPhoneImageActivity from '../../assets/images/iphone-frame-activity.png';
import iPhoneImageLibrary from '../../assets/images/iphone-frame-library.png';

export const HomePage = React.memo((props: OwnTypes.Props) => {

	return (
		<>
			<OwnStyles.MainBannerWrapper
				maxWidth={false}
			>
				<OwnStyles.MainBanner
					container
					item
					direction="row"
					alignItems="center"
					alignContent="space-around"
					justify="center"
					lg={8}
				>
					<OwnStyles.MainTextBox
						item
						sm={8}
					>
						<OwnStyles.MainText
							variant="h2"
						>
							the exciting japanese learning app for on the go.
						</OwnStyles.MainText>
						<OwnStyles.GetStartedButton>
							GET STARTED
						</OwnStyles.GetStartedButton>
					</OwnStyles.MainTextBox>
				</OwnStyles.MainBanner>
			</OwnStyles.MainBannerWrapper>
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
			</OwnStyles.SectionWrapper>
		</>
	);
});