import React, { useState, useEffect } from 'react';
import { FavouriteMenuTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import API from '../../../utils/api';
import Checkbox from '@material-ui/core/Checkbox';
import { FormCheck } from 'react-bootstrap';

export const FavouriteMenu = React.memo((props: OwnTypes.Props) => {
	const [newFavouriteName, setNewFavouriteName] = useState('');
	const [favouriteIdsWithVerb, setFavouriteIdsWithVerb] = useState([] as number[]);

	const handleCheckIfFavourited = async () => {
		if (props.anchorEl) {
			const favouriteListKeys: any[] = [];
			await props.user.Favourites.forEach((favourite: any) => {
				favouriteListKeys.push(favourite.id);
			});
			const { data: { Favourites } } = await API.favourite.findFavouriteVerbs({
				favouriteId: favouriteListKeys,
				verbId: props.selectedWord.id,
			});
			const favouriteIds: number[] = [];
			await Favourites.forEach((favourite: any) => {
				favouriteIds.push(favourite.id);
			});
			setFavouriteIdsWithVerb(favouriteIds);
		};
	};
	const handleAddNewFavouriteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewFavouriteName(event.currentTarget.value);
	};
	const handleAddNewFavourite = async (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
		event.stopPropagation();
		event.preventDefault();
		if (newFavouriteName) {
			console.log(newFavouriteName);
			const res = await API.favourite.createFavourite(newFavouriteName);
			if (res.success) {
				console.log(res);
				props.user.Favourites.push(res.data);
				setNewFavouriteName('');
			}
		}
	};
	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFavouriteGroupId = parseInt(event.currentTarget.getAttribute('data-favourite-id') as string);
		if (favouriteIdsWithVerb.includes(selectedFavouriteGroupId)) {
			const newFavouriteIdsArray = [...favouriteIdsWithVerb].filter((id) => id != selectedFavouriteGroupId);
			setFavouriteIdsWithVerb(newFavouriteIdsArray);
			API.favourite.updateFavouriteVerbs({
				favouriteId: selectedFavouriteGroupId,
				verbId: props.selectedWord.id,
				isFavourited: false,
			});
		} else {
			setFavouriteIdsWithVerb([
				...favouriteIdsWithVerb,
				selectedFavouriteGroupId,
			]);
			API.favourite.updateFavouriteVerbs({
				favouriteId: selectedFavouriteGroupId,
				verbId: props.selectedWord.id,
				isFavourited: true,
			});
		};
	};

	useEffect(() => {
		handleCheckIfFavourited();
	}, [props.user, props.anchorEl]);

	return (
		<OwnStyles.FavouriteMenu
			id={props.selectedWord.id}
			anchorEl={props.anchorEl}
			keepMounted
			open={Boolean(props.anchorEl)}
			onClose={props.onClose}
		>
			{props.user.Favourites.map((favourites: any) => (
				<OwnStyles.FavouriteMenuItem
					id={favourites.id}
					key={favourites.id}
					disableRipple
					disableTouchRipple
				>
					<Checkbox
						checked={favouriteIdsWithVerb.includes(favourites.id)}
						onChange={handleCheckboxChange}
						name={favourites.name}
						inputProps={{
							'data-favourite-id': favourites.id,
						} as React.InputHTMLAttributes<HTMLInputElement>}
					/>
					{favourites.name}
				</OwnStyles.FavouriteMenuItem>
			))}
			<OwnStyles.FavouriteMenuItem
				onKeyDown={event => event.stopPropagation()}
				disableRipple
				disableTouchRipple
			>
				<OwnStyles.AddNewFavouriteIcon
					fontSize="large"
					onClick={handleAddNewFavourite}
				/>
				<OwnStyles.Input
					color="primary"
					// helperText={inputError ? "Incorrect combination." : ""}
					autoComplete="off"
					id="newFavourite"
					label="Create favourite"
					variant="outlined"
					size="small"
					value={newFavouriteName}
					onChange={handleAddNewFavouriteChange}
				/>
			</OwnStyles.FavouriteMenuItem>
		</OwnStyles.FavouriteMenu>
	);
});