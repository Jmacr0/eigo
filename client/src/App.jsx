import React, { useState } from 'react';
import { Display } from './components/display/Display';
import * as OwnStyles from './Styles';

function App() {
	const [type, setType] = useState();
	const handleSelection = (event) => {
		setType(event.target.value);
	};
	const handleReset = () => {
		setType();
	}

	return (
		<>
			<h1
				style={{ textAlign: "center" }}
			>
				Eigo Jap App
			</h1>
			{!type &&
				<OwnStyles.ButtonDisplay
					container
					direction="row"
					justify="center"
					alignItems="center"
				>
					<button onClick={handleSelection} value="hiragana">hiragana</button>
					<button onClick={handleSelection} value="katakana">katakana</button>
				</OwnStyles.ButtonDisplay>
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
