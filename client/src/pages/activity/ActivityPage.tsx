import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ActivityPageTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { Display } from '../../components/display/Display';

const ActivityPage = React.memo((props: OwnTypes.Props) => {
	const [type, setType] = useState('' as OwnTypes.Type);
	const history = useHistory();

	const handleSelection = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setType(event.currentTarget.value as OwnTypes.Type);
	};
	const handleReset = () => {
		setType('' as OwnTypes.Type);
	};
	const handleGoBack = () => {
		history.goBack();
	};

	return (
		<>
			{!type &&
				<>
					<OwnStyles.ButtonDisplay
						container
						direction="column"
						justify="center"
						alignItems="center"
					>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="hiragana">hiragana</OwnStyles.SelectButton>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="katakana">katakana</OwnStyles.SelectButton>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="greetings">greetings</OwnStyles.SelectButton>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="verbs">verbs</OwnStyles.SelectButton>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="adjectives">adjectives</OwnStyles.SelectButton>
						<OwnStyles.BackButton
							color="secondary"
							variant="text"
							size="large"
							onClick={handleGoBack}
						>
							back
						</OwnStyles.BackButton>
					</OwnStyles.ButtonDisplay>
				</>
			}
			{type &&
				<OwnStyles.MainDisplayWrapper
					container
					direction="column"
					justify="center"
					alignItems="center">
					<Display type={type} onReset={handleReset} />
				</OwnStyles.MainDisplayWrapper>
			}
		</>
	)
});

export default ActivityPage;