import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { HomePageTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { FavouriteDisplay } from '../../components/favouriteDisplay/FavouriteDisplay';
import iPhoneImage from '../../assets/images/iphone-frame.png';
import bannerImage from '../../assets/images/banner.png';

export const HomePage = React.memo((props: OwnTypes.Props) => {

	return (
		<>
			<OwnStyles.MainBannerWrapper>
				<OwnStyles.MainBanner
					container
					alignItems="center"
				>
					<OwnStyles.ImageWrapper
						item
						sm={8}
						md={5}
					>
						<OwnStyles.Image
							src={iPhoneImage}
							alt=""
						/>
					</OwnStyles.ImageWrapper>
				</OwnStyles.MainBanner>
			</OwnStyles.MainBannerWrapper>
			<div
				style={{ textAlign: 'center', padding: '10px' }}
			>
				<br />
				<br />
				<br />
				<br />
				<h2>Home 🚧</h2>
				<OwnStyles.TextWrapper>
					Eigo is a Japanese language learning application. The Home page is currently under construction. Click links below to navigate existing features!
					</OwnStyles.TextWrapper>
				<OwnStyles.RedirectWrapper>
					<OwnStyles.Redirect to="/activity">Activity</OwnStyles.Redirect>
				</OwnStyles.RedirectWrapper>
				<OwnStyles.TextWrapper>
					Practice and test your knowledge with <em>Hiragana</em>, <em>Katakana</em>, <em>Verbs</em>, and <em>Adjectives</em>!
					</OwnStyles.TextWrapper>
				<OwnStyles.RedirectWrapper>
					<OwnStyles.Redirect to="/library">Library</OwnStyles.Redirect>
				</OwnStyles.RedirectWrapper>
				<OwnStyles.TextWrapper>
					Check out the library which is a repository for <em>Verbs</em>, and <em>Adjectives</em>.
				</OwnStyles.TextWrapper>
			</div>
		</>
	);
});