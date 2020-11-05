import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CardALPHATypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { FavouriteMenu } from './favouriteMenu/FavouriteMenu';

export const CardALPHA = React.memo((props: OwnTypes.Props) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [selectedWord, setSelectedWord] = useState({
		id: '',
		word: '',
		type: '',
	});
	const [confirmRemoveFromFavourite, setConfirmRemoveFromFavourite] = useState(false);
	const location = useLocation();
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleAddToFavourite = (word: OwnTypes.SelectedWord) => (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
		event.stopPropagation();
		console.log(word)
		setSelectedWord(word);
		setAnchorEl(event.currentTarget);
	};
	const handleConfirmRemoveFromFavourite = (word: OwnTypes.SelectedWord) => (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
		event.stopPropagation();
		console.log(word)
		setSelectedWord(word);
		setConfirmRemoveFromFavourite(confirmRemoveFromFavourite ? false : true);
	};
	const handleRemoveFromFavourite = () => {

	};
	useEffect(() => {
		console.log(props.characterSet);
		console.log(location.pathname)
	}, [props.user]);

	return (
		<OwnStyles.CardDisplay
			container
			item
			direction="column"
			justify="center"
			alignItems="center"
			xs={12}
			sm={9}
		>
			{props.characterSet.map((word, index) => {
				// if word is a verb
				if (word.short) {
					return (
						<OwnStyles.AccordionGroup key={index}>
							<OwnStyles.AccordionTitle
								expandIcon={<OwnStyles.ShowMoreIcon />}
							>
								{`${word.short}  -  ${word.english}`}
								{props.user && location.pathname.indexOf('favourites') === -1 &&
									<OwnStyles.FavouriteButton
										onClick={handleAddToFavourite({
											id: word.id,
											word: word.short,
											type: 'verb',
										})}
										icon={<OwnStyles.FavouriteIcon />}
										label="ADD"
										aria-controls={word.short}
										aria-haspopup="true"
									/>
								}
								{location.pathname.indexOf('favourites') !== -1 &&
									<OwnStyles.RemoveFromFavouriteButton
										onClick={handleConfirmRemoveFromFavourite({
											id: word.id,
											word: word.short,
											type: 'verb',
										})}
										label="remove"
										deleteIcon={(confirmRemoveFromFavourite && selectedWord.word === word.short) ? <OwnStyles.RemoveIcon /> : <></>}
										onDelete={handleRemoveFromFavourite}
										aria-controls={word.short}
										aria-haspopup="true"
										color={(confirmRemoveFromFavourite && selectedWord.word === word.short) ? 'secondary' : 'default'}
									/>
								}
							</OwnStyles.AccordionTitle>
							<OwnStyles.AccordionBody>
								<div>
									<OwnStyles.Tip
										title="short form"
										placement="top-start"
										arrow
									>
										<OwnStyles.MapKey
											label="SP"
											style={{ backgroundColor: OwnStyles.color.shortFormColor }}
										/>
									</OwnStyles.Tip> {word.shortPast}
								</div>
								<div>
									<OwnStyles.Tip
										title="short negative form"
										placement="top-start"
										arrow
									>
										<OwnStyles.MapKey
											label="SN"
											style={{ backgroundColor: OwnStyles.color.shortFormColor }}
										/>
									</OwnStyles.Tip> {word.shortNeg}
								</div>
								<div>
									<OwnStyles.Tip
										title="short past negative form"
										placement="top-start"
										arrow
									>
										<OwnStyles.MapKey
											label="SPN"
											style={{ backgroundColor: OwnStyles.color.shortFormColor }}
										/>
									</OwnStyles.Tip> {word.shortPastNeg}
								</div>
								<div>
									<OwnStyles.Tip
										title="long form"
										placement="top-start"
										arrow
									>
										<OwnStyles.MapKey
											label="L"
											style={{ backgroundColor: OwnStyles.color.longFormColor }}
										/>
									</OwnStyles.Tip> {word.long}
								</div>
								<div>
									<OwnStyles.Tip
										title="long past form"
										placement="top-start"
										arrow
									>
										<OwnStyles.MapKey
											label="LP"
											style={{ backgroundColor: OwnStyles.color.longFormColor }}
										/>
									</OwnStyles.Tip> {word.longPast}
								</div>
								<div>
									<OwnStyles.Tip
										title="long negative form"
										placement="top-start"
										arrow
									>
										<OwnStyles.MapKey
											label="LN"
											style={{ backgroundColor: OwnStyles.color.longFormColor }}
										/>
									</OwnStyles.Tip> {word.longNeg}
								</div>
								<div>
									<OwnStyles.Tip
										title="long past negative form"
										placement="top-start"
										arrow
									>
										<OwnStyles.MapKey
											label="LPN"
											style={{ backgroundColor: OwnStyles.color.longFormColor }}
										/>
									</OwnStyles.Tip> {word.longPastNeg}
								</div>
								<div>
									<OwnStyles.Tip
										title="te form"
										placement="top-start"
										arrow
									>
										<OwnStyles.MapKey
											label="T"
											style={{ backgroundColor: OwnStyles.color.teFormColor }}
										/>
									</OwnStyles.Tip> {word.te}
								</div>
							</OwnStyles.AccordionBody>
						</OwnStyles.AccordionGroup>
					);
				}
				// if word is an adjective
				if (word.plain) {
					return (
						<OwnStyles.AccordionGroup key={index}>
							<OwnStyles.AccordionTitle
								expandIcon={<OwnStyles.ShowMoreIcon />}
							>
								{`${word.plain}  -  ${word.english}`}
								{props.user && location.pathname.indexOf('favourites') === -1 &&
									<OwnStyles.FavouriteButton
										onClick={handleAddToFavourite({
											id: word.id,
											word: word.plain,
											type: 'adjective',
										})}
										icon={<OwnStyles.FavouriteIcon />}
										label="ADD"
										aria-controls={word.short}
										aria-haspopup="true"
									/>
								}
								{location.pathname.indexOf('favourites') !== -1 &&
									<OwnStyles.RemoveFromFavouriteButton
										onClick={handleConfirmRemoveFromFavourite({
											id: word.id,
											word: word.plain,
											type: 'adjective',
										})}
										label="remove"
										deleteIcon={(confirmRemoveFromFavourite && selectedWord.word === word.plain) ? <OwnStyles.RemoveIcon /> : <></>}
										onDelete={handleRemoveFromFavourite}
										aria-controls={word.plain}
										aria-haspopup="true"
										color={(confirmRemoveFromFavourite && selectedWord.word === word.plain) ? 'secondary' : 'default'}
									/>
								}
							</OwnStyles.AccordionTitle>
							<OwnStyles.AccordionBody>
								<div>
									<OwnStyles.Tip
										title="present form"
										placement="top-start"
										arrow
									>
										<OwnStyles.MapKey
											label="Pr."
											style={{ backgroundColor: OwnStyles.color.shortFormColor }}
										/>
									</OwnStyles.Tip> {word.present}
								</div>
								<div>
									<OwnStyles.Tip
										title="present negative form"
										placement="top-start"
										arrow
									>
										<OwnStyles.MapKey
											label="PN"
											style={{ backgroundColor: OwnStyles.color.shortFormColor }}
										/>
									</OwnStyles.Tip> {word.presentNeg}
								</div>
								<div>
									<OwnStyles.Tip
										title="past form"
										placement="top-start"
										arrow
									>
										<OwnStyles.MapKey
											label="Ps."
											style={{ backgroundColor: OwnStyles.color.longFormColor }}
										/>
									</OwnStyles.Tip> {word.past}
								</div>
								<div>
									<OwnStyles.Tip
										title="past negative form"
										placement="top-start"
										arrow
									>
										<OwnStyles.MapKey
											label="PN"
											style={{ backgroundColor: OwnStyles.color.longFormColor }}
										/>
									</OwnStyles.Tip> {word.pastNeg}
								</div>
							</OwnStyles.AccordionBody>
						</OwnStyles.AccordionGroup>
					);
				}
			})}
			{props.user &&
				<FavouriteMenu
					selectedWord={selectedWord}
					anchorEl={anchorEl}
					onClose={handleClose}
					user={props.user}
				/>
			}
		</OwnStyles.CardDisplay >
	);
});