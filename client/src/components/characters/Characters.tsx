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
			const selectedIndex = set[indexToSearchType]

			if (props.type === 'hiragana' || props.type === 'katakana') {
				const selectedLetterSyllablesKeyList = Object.keys(selectedIndex.syllables!);
				const randomKey = (selectedLetterSyllablesKeyList[Math.floor(Math.random() * selectedLetterSyllablesKeyList.length)]);
				const randomKeyValue = selectedIndex.syllables![randomKey];
				const selectedCharacter = {
					english: randomKey,
					japanese: randomKeyValue,
				}
				setCurrentCharacter(selectedCharacter);
			}

			if (props.type === 'greetings') {
				const greetingKey = Object.keys(selectedIndex)[0];
				const greetingKeyValue = selectedIndex[greetingKey];

				const selectedGreeting = {
					english: greetingKey,
					japanese: greetingKeyValue,
				}

				setCurrentCharacter(selectedGreeting);
			}

			if (props.type === 'verbs') {
				const selectedVerbsKeyList = Object.keys(selectedIndex.verbs!);
				const randomVerbTypeKey = (selectedVerbsKeyList[Math.floor(Math.random() * selectedVerbsKeyList.length)]);
				const randomVerbTypeKeyValue = selectedIndex.verbs![randomVerbTypeKey];

				const selectedVerbTypeKeyList = Object.keys(randomVerbTypeKeyValue);
				const randomVerbKey = (selectedVerbTypeKeyList[Math.floor(Math.random() * selectedVerbTypeKeyList.length)]);
				const randomVerbKeyValue = randomVerbTypeKeyValue[randomVerbKey];

				const selectedGreeting = {
					english: randomVerbKey,
					japanese: randomVerbKeyValue,
				}

				setCurrentCharacter(selectedGreeting);
			}
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
					<Japanese type={props.type} character={currentCharacter.japanese} />
			}
			<br />
			<OwnStyles.HiddenAnswerCard
				onClick={handleShow}
			>
				{reveal ?
					<English type={props.type} character={currentCharacter.english} /> :
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