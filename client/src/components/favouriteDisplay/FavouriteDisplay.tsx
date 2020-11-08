import React, { useState, useEffect } from 'react';
import { Characters } from '../characters/Characters';
import { FavouriteDisplayTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { CardALPHA } from '../cardALPHA/CardALPHA';
import { useRouteMatch } from 'react-router-dom';

export const FavouriteDisplay = React.memo((props: OwnTypes.Props) => {
	const [characterSet, setCharacterSet] = useState([] as OwnTypes.CharacterSet);
	const [favouriteName, setFavouriteName] = useState('');
	const match = useRouteMatch();
	const handleCreateSet = async () => {
		const { selectedFavourite } = match.params as any;
		setFavouriteName(selectedFavourite);
		if (props.user) {
			const favourite = await props.user.Favourites.find((favourite: any) => favourite.name === selectedFavourite);
			console.log(favourite)

			const entireFavouriteSet: any = [
				...favourite.Verbs,
				...favourite.Adjectives,
			];
			setCharacterSet(entireFavouriteSet);
		}
	};

	useEffect(() => {
		handleCreateSet();
	}, [props.user, characterSet.length]);

	return (
		<>
			<h2
				style={{ textAlign: 'center' }}
			>{favouriteName}
			</h2>
			<OwnStyles.MainDisplay
				container
				direction="column"
				justify="center"
				alignItems="center"
			>
				<CardALPHA
					characterSet={characterSet}
					user={props.user}
					onGetUser={props.onGetUser}
				/>
			</OwnStyles.MainDisplay>
		</>
	)
});