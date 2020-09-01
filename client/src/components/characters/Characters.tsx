import React, { useEffect, useState } from 'react';
import { Japanese } from './japanese/Japanese';
import { CharacterTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { English } from './english/English';

export const Characters = React.memo((props: OwnTypes.Props): React.ReactElement => {
	const [reveal, setReveal] = useState(false);
	const [verbList, setVerbList] = useState({} as OwnTypes.VerbTypes);
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

			if (props.type === 'verbs' && Object.keys(verbList).length) {
				console.log('verblesefsdf', verbList)

				const verbKeyList = Object.keys(verbList);
				const randomVerbKey = (verbKeyList[Math.floor(Math.random() * verbKeyList.length)]);
				const randomVerbKeyValue = verbList[randomVerbKey];

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

	const populateVerbs = (set: OwnTypes.CharacterSet) => {
		let allVerbs = verbList;
		set.forEach((verbGroup): void => {
			console.log(verbGroup);
			const uVerbs = verbGroup.verbs!.u;
			const ruVerbs = verbGroup.verbs!.ru;
			const irregularVerbs = verbGroup.verbs!.irregular;

			const allVerbTypes = { ...uVerbs, ...ruVerbs, ...irregularVerbs };
			allVerbs = { ...allVerbs, ...allVerbTypes };
		})
		console.log('all verbs!', allVerbs)
		setVerbList(allVerbs);
	};

	const verbListLength = Object.keys(verbList).length;

	useEffect(() => {
		populateVerbs(props.characterSet);
		setTimeout(() => {
			selectRandom(props.characterSet);
		}, 1500);
	}, [props.characterSet, verbListLength]);

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