import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { FavouritesPageTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { FavouriteDisplay } from '../../components/favouriteDisplay/FavouriteDisplay';

export const FavouritesPage = React.memo((props: OwnTypes.Props) => {
	// const [selectedFavourite, setSelectedFavourite] = useState({} as OwnTypes.Favourite);
	const history = useHistory();
	const match = useRouteMatch();
	const location = useLocation();
	const handleSelection = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log(event.currentTarget.value);
		const favouriteName = event.currentTarget.value;
		// console.log(props.user.Favourites.find((favourite: any) => favourite.name === favouriteName))
		// const selectedFavourite = await props.user.Favourites.find((favourite: any) => favourite.name === favouriteName);
		// setSelectedFavourite(selectedFavourite);
		history.push(`${match.url}/${favouriteName}`);
	};

	useEffect(() => {
		props.onGetUser();
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
				<Route
					path={`${match.path}/:selectedFavourite`}
				>
					<FavouriteDisplay
						user={props.user}
					/>
				</Route>
			</Switch>
		</>
	);
});