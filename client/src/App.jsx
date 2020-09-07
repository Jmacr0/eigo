import React, { useState } from 'react';
import { Display } from './components/display/Display';
import * as OwnStyles from './Styles';

function App() {
	const [type, setType] = useState();
	const handleSelection = (event) => {
		setType(event.currentTarget.value);
	};
	const handleReset = () => {
		setType();
	}

	return (
		<>
			<h1
				style={{ textAlign: "center" }}
			>
				Eigo
			</h1>
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
	);
}

export default App;
