import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { FavouritesPageTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { FavouriteDisplay } from '../../components/favouriteDisplay/FavouriteDisplay';

export const FavouritesPage = React.memo((props: OwnTypes.Props) => {
	const history = useHistory();
	const match = useRouteMatch();
	const location = useLocation();
	const handleSelection = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log(event.currentTarget.value);
		const favouriteName = event.currentTarget.value;
		history.push(`${match.url}/${favouriteName}`);
	};

	useEffect(() => {
		console.log(props.user)
	}, []);

	return (
		<>
			<OwnStyles.Title
				component="h3"
			>
				Favourites
			</OwnStyles.Title>
			{location.pathname === '/favourites' &&
				<OwnStyles.ButtonDisplay
					container
					direction="column"
					justify="center"
					alignItems="center"
				>
					{props.user && props.user.Favourites.map((favourite: any, index: number) => (
						<OwnStyles.SelectButton
							key={index}
							disableElevation
							variant="contained"
							onClick={handleSelection}
							value={favourite.name}>
							{favourite.name}
						</OwnStyles.SelectButton>
					))}
				</OwnStyles.ButtonDisplay>
			}
			<Switch>
				{props.user && props.user.Favourites.map((favourite: any, index: number) => (
					<Route
						key={index}
						path={`${match.path}/${favourite.name}`}
					>
						<FavouriteDisplay />
					</Route>
				))}
			</Switch>
		</>
	);
});