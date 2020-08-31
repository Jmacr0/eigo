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
				Eigo Japanese App
			</h1>
			{!type &&
				<>
					<OwnStyles.ButtonDisplay
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="hiragana">hiragana</OwnStyles.SelectButton>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="katakana">katakana</OwnStyles.SelectButton>
					</OwnStyles.ButtonDisplay>
					<OwnStyles.ButtonDisplay
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="greetings">greetings</OwnStyles.SelectButton>
						<OwnStyles.SelectButton disableElevation variant="contained" onClick={handleSelection} value="verbs">verbs</OwnStyles.SelectButton>
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
