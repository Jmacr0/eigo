import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { CardALPHATypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { FavouriteMenu } from './favouriteMenu/FavouriteMenu';
import API from '../../utils/api';
import { Pagination } from '../pagination/Pagination';
import { FilterBar } from '../filterBar/FilterBar';

export const CardALPHA = React.memo((props: OwnTypes.Props) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [currentPageDisplay, setCurrentPageDisplay] = useState([] as OwnTypes.SingleSet[]);
	const [displayNumber, setDisplayNumber] = useState<number>(5);
	const [selectedWord, setSelectedWord] = useState({
		id: '',
		word: '',
		type: '',
	});
	const [confirmRemoveFromFavourite, setConfirmRemoveFromFavourite] = useState(false);
	const [searchWord, setSearchWord] = useState({
		searchWord: '',
		loading: false,
	});
	const { selectedFavourite } = useParams<{ selectedFavourite: string }>();
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
	const handleRemoveFromFavourite = async () => {
		console.log(selectedFavourite)
		const favourite = props.user.Favourites.filter((favourite: any) => favourite.name === selectedFavourite);
		const favouriteId = favourite[0].id;
		console.log(favourite)
		console.log(favouriteId)
		if (selectedWord.type === 'verb') {
			await API.favourite.updateFavouriteVerb({
				favouriteId,
				verbId: selectedWord.id,
				isFavourited: true,
			});
		}
		if (selectedWord.type === 'adjective') {
			await API.favourite.updateFavouriteAdjective({
				favouriteId,
				adjectiveId: selectedWord.id,
				isFavourited: true,
			});
		}
		props.onGetUser();
		setConfirmRemoveFromFavourite(false);
	};
	const handleSelectedPageDisplay = (pageNumber: number) => {
		const wordsToDisplay = props.characterSet.slice((pageNumber - 1) * displayNumber, (pageNumber * displayNumber));
		setCurrentPageDisplay(wordsToDisplay);
	};
	const handleNumberToDisplay = (displayNumber: number) => {
		setDisplayNumber(displayNumber);
	}

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const input = event.currentTarget.value;
		setSearchWord({
			...searchWord,
			loading: true,
		});
		handleSelectedPageDisplay(currentPage);
		const newWordsToDisplay = currentPageDisplay.filter(word => {
			return word.english.includes(input);
			// if (word.english.includes(input)) {
			// 	console.log(word);
			// }
		});
		setCurrentPageDisplay(newWordsToDisplay);
		setSearchWord({
			...searchWord,
			loading: false,
		});
	}
	// const handleSearch = () => {
	// 	setSearchWord({
	// 		...searchWord,
	// 		loading: true,
	// 	});
	// 	const newWordsToDisplay = currentPageDisplay.filter(word => { console.log(word) });
	// }
	useEffect(() => {
		console.log(props.characterSet);
		console.log(location.pathname);
		handleSelectedPageDisplay(currentPage);
	}, [props.user, currentPage, props.characterSet, displayNumber]);

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
			<FilterBar
				onNumberToDisplay={handleNumberToDisplay}
				onSearchChange={handleSearchChange}
			/>
			{searchWord.loading ? 'loading' : (
				currentPageDisplay && currentPageDisplay.map((word, index) => {
					// if word is a verb
					if (word.short) {
						return (
							<OwnStyles.AccordionGroup key={index} id={`${word.short}${word.id}`}>
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
											deleteIcon={(confirmRemoveFromFavourite && selectedWord.word === word.short) ?
												<OwnStyles.RemoveIcon
													onClick={handleRemoveFromFavourite}
												/> : <></>}
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
							<OwnStyles.AccordionGroup key={index} id={`${word.plain}${word.id}`}>
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
				})
			)}
			{
				props.characterSet.length ?
					<Pagination characterSet={props.characterSet} setCurrentPage={setCurrentPage} /> : ''
			}
			{
				!props.characterSet.length &&
				<OwnStyles.CardDisplay
					item
					md={6}
					style={{ padding: '15px', textAlign: 'center' }}
				>
					<p>🙅‍♀️ Nothing Found 🤷‍♂️</p>
					<p>Go to the Library and start adding your favourite words!</p>
				</OwnStyles.CardDisplay>
			}
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