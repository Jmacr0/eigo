import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { AboutPageTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { FavouriteDisplay } from '../../components/favouriteDisplay/FavouriteDisplay';

export const AboutPage = React.memo((props: OwnTypes.Props) => {

	return (
		<>
			<div
				style={{ textAlign: 'center' }}
			>
				<br />
				<br />
				<br />
				<br />
				<h2>About 🚧</h2>
				<p>Currently under construction.</p>
			</div>
		</>
	);
});