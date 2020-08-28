import React, { useEffect, useState } from 'react';
import { Japanese } from './japanese/Japanese';
import { CharacterTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { English } from './english/English';

export const Characters = React.memo((props: OwnTypes.Props): React.ReactElement => {
	const [reveal, setReveal] = useState(false);
	const [currentCharacter, setCurrentCharacter] = useState({
		english: '',
		japanese: '',
	});

	const selectRandom = (set: OwnTypes.CharacterSet) => {
		if (set.length) {
			const indexToSearchType = Math.floor(Math.random() * set.length);
			const selectedLetterType = set[indexToSearchType]
			const selectedLetterSyllablesKeyList = Object.keys(selectedLetterType.syllables);
			const randomKey = (selectedLetterSyllablesKeyList[Math.floor(Math.random() * selectedLetterSyllablesKeyList.length)]);
			const randomKeyValue = selectedLetterType.syllables[randomKey];
			const selectedCharacter = {
				english: randomKey,
				japanese: randomKeyValue,
			}
			setCurrentCharacter(selectedCharacter);
		}
	};
	const handleShow = () => {
		setReveal(true);
	}

	const handleRandom = () => {
		setReveal(false);
		selectRandom(props.characterSet);
	}

	useEffect(() => {
		selectRandom(props.characterSet);
	}, [props.characterSet]);

	return (
		<>
			{
				!currentCharacter.english && !currentCharacter.japanese ?
					<OwnStyles.Spinner /> :
					<Japanese character={currentCharacter.japanese} />
			}
			<br />
			<OwnStyles.HiddenAnswerCard
				onClick={handleShow}
			>
				{reveal ?
					<English character={currentCharacter.english} /> :
					"show"
				}
			</OwnStyles.HiddenAnswerCard>
			<br />
			<OwnStyles.RandomButton
				variant="contained"
				color="primary"
				size="large"
				onClick={handleRandom}>
				random
				</OwnStyles.RandomButton>
		</>
	);
});