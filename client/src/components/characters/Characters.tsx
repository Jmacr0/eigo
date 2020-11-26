import React, { useEffect, useState } from 'react';
import { Japanese } from './japanese/Japanese';
import { CharacterTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { English } from './english/English';

export const Characters = React.memo((props: OwnTypes.Props): React.ReactElement => {
	const [randomButtonDisabled, setRandomButtonDisabled] = useState(true);
	const [reveal, setReveal] = useState(false);
	const [verbList, setVerbList] = useState({} as OwnTypes.VerbTypes);
	const [adjectiveList, setAdjectiveList] = useState({} as OwnTypes.AdjectiveTypes);
	const [currentCharacter, setCurrentCharacter] = useState({
		english: '',
		japanese: '',
	});
	const handleDisable = () => {
		if (currentCharacter.english) {
			setRandomButtonDisabled(false);
		};
	};
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
			if (props.type === 'verbs' && Object.keys(verbList).length) {
				const verbKeyList = Object.keys(verbList);
				const randomVerbKey = (verbKeyList[Math.floor(Math.random() * verbKeyList.length)]);
				const randomVerbKeyValue = verbList[randomVerbKey];

				const selectedGreeting = {
					english: randomVerbKey,
					japanese: randomVerbKeyValue,
				}

				setCurrentCharacter(selectedGreeting);
			}
			if (props.type === 'adjectives' && Object.keys(adjectiveList).length) {
				const adjectiveKeyList = Object.keys(adjectiveList);
				const randomAdjectiveKey = (adjectiveKeyList[Math.floor(Math.random() * adjectiveKeyList.length)]);
				const randomAdjectiveKeyValue = adjectiveList[randomAdjectiveKey];

				const selectedGreeting = {
					english: randomAdjectiveKey,
					japanese: randomAdjectiveKeyValue,
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
	const populateList = (set: OwnTypes.CharacterSet) => {
		if (props.type === 'verbs') {
			let allVerbs = verbList;
			set.forEach((verbGroup): void => {
				const uVerbs = verbGroup.verbs!.u;
				const ruVerbs = verbGroup.verbs!.ru;
				const irregularVerbs = verbGroup.verbs!.irregular;

				const allVerbTypes = { ...uVerbs, ...ruVerbs, ...irregularVerbs };
				allVerbs = { ...allVerbs, ...allVerbTypes };
			})
			setVerbList(allVerbs);
		};
		if (props.type === 'adjectives') {
			let allAdjectives = adjectiveList;
			set.forEach((adjectiveGroup): void => {
				const iAdjectives = adjectiveGroup.adjectives!.i;
				const naAdjectives = adjectiveGroup.adjectives!.na;

				const allAdjectiveTypes = { ...iAdjectives, ...naAdjectives };
				allAdjectives = { ...allAdjectives, ...allAdjectiveTypes };
			})
			setAdjectiveList(allAdjectives);
		}
	};
	const verbListLength = Object.keys(verbList).length;
	const adjectiveListLength = Object.keys(adjectiveList).length;

	useEffect(() => {
		populateList(props.characterSet);
		setTimeout(() => {
			selectRandom(props.characterSet);
		}, 1500);
	}, [props.characterSet, verbListLength, adjectiveListLength]);

	useEffect(() => {
		handleDisable();
	}, [currentCharacter.english]);

	return (
		<>
			{
				!currentCharacter.english && !currentCharacter.japanese ?
					<OwnStyles.LoaderContainer>
						<OwnStyles.Loader height={30} width={200} />
						<OwnStyles.Loader height={30} width={200} animation={false} />
						<OwnStyles.Loader height={30} width={200} animation="wave" />
					</OwnStyles.LoaderContainer>
					:
					<Japanese
						reveal={reveal}
						onClick={handleShow}
						type={props.type}
						option={props.option}
						character={currentCharacter.japanese}
					/>
			}
			<English
				reveal={reveal}
				onClick={handleShow}
				type={props.type}
				option={props.option}
				character={currentCharacter.english}
			/>
			<br />
			<OwnStyles.RandomButton
				disabled={randomButtonDisabled}
				variant="contained"
				size="large"
				onClick={handleRandom}>
				random
			</OwnStyles.RandomButton>
		</>
	);
});