import React, { useEffect, useState } from 'react';
import { Hiragana } from './Hiragana';
import { CardTypes as OwnTypes } from './Types';

export const Characters = React.memo((props: OwnTypes.Props): React.ReactElement => {
	const [currentCharacter, setCurrentCharacter] = useState({
		english: '',
		hiragana: '',
	});

	const selectRandom = (set: OwnTypes.Set) => {
		const indexToSearchType = Math.floor(Math.random() * set.length);
		const selectedConsonantType = set[indexToSearchType]
		const consonantKeyList = Object.keys(selectedConsonantType);
		const randomKey = (consonantKeyList[consonantKeyList.length * Math.random()]);
		const selectedCharacter = {
			english: randomKey,
			hiragana: selectedConsonantType[randomKey],
		}
		setCurrentCharacter(selectedCharacter);
		// const indexToSearchInnerType = Math.floor(Math.random() * Object.keys(set[indexToSearchType]).length);
	};

	useEffect(() => {
		selectRandom(props.set);
	}, []);

	return (
		<>
			<h3>{currentCharacter.english}</h3>
			<br />
			<Hiragana hiragana={currentCharacter.hiragana} />
		</>
	);
});