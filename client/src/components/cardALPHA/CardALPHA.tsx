import React, { useState, useEffect } from 'react';
import { CardALPHATypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import API from '../../utils/api';
import { FavouriteMenu } from './favouriteMenu/FavouriteMenu';

export const CardALPHA = React.memo((props: OwnTypes.Props) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [selectedWord, setSelectedWord] = useState({
		id: '',
		word: '',
	});
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleAddToFavourite = (word: OwnTypes.SelectedWord) => (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
		event.stopPropagation();
		setSelectedWord(word);
		setAnchorEl(event.currentTarget);
	};

	useEffect(() => {
		console.log(props.characterSet);
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
				return (
					<OwnStyles.AccordionGroup key={index}>
						<OwnStyles.AccordionTitle
							expandIcon={<OwnStyles.ShowMoreIcon />}
						>
							{`${word.short}  -  ${word.english}`}
							{props.user &&
								<OwnStyles.FavouriteButton
									onClick={handleAddToFavourite({
										id: word.id,
										word: word.short
									})}
									icon={<OwnStyles.FavouriteIcon />}
									label="ADD"
									aria-controls={word.short}
									aria-haspopup="true"
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