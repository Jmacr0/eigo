import React, { useState } from 'react';
import { HomePageALPHATypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { DisplayALPHA } from '../../components/displayALPHA/DisplayALPHA';

export const HomePageALPHA = React.memo((props: OwnTypes.Props) => {
	const [type, setType] = useState('' as OwnTypes.Type);

	const handleSelection = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setType(event.currentTarget.value as OwnTypes.Type);
	};
	const handleReset = () => {
		setType('' as OwnTypes.Type);
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
						<OwnStyles.SelectButton
							disabled
							disableElevation
							variant="contained"
							onClick={handleSelection}
							value="hiragana">
							hiragana
							</OwnStyles.SelectButton>
						<OwnStyles.SelectButton
							disabled
							disableElevation
							variant="contained"
							onClick={handleSelection}
							value="katakana">
							katakana
							</OwnStyles.SelectButton>
						<OwnStyles.SelectButton
							disabled
							disableElevation
							variant="contained"
							onClick={handleSelection}
							value="greetings">
							greetings
						</OwnStyles.SelectButton>
						<OwnStyles.SelectButton
							disableElevation
							variant="contained"
							onClick={handleSelection}
							value="verbs">
							verbs
							</OwnStyles.SelectButton>
						<OwnStyles.SelectButton
							disabled
							disableElevation
							variant="contained"
							onClick={handleSelection}
							value="adjectives">
							adjectives
						</OwnStyles.SelectButton>
						<OwnStyles.RedirectWrapper>
							<OwnStyles.Redirect to="/">RETURN TO V1</OwnStyles.Redirect>
						</OwnStyles.RedirectWrapper>

					</OwnStyles.ButtonDisplay>
				</>
			}
			{type &&
				<OwnStyles.MainDisplayWrapper
					container
					direction="column"
					justify="center"
					alignItems="center">
					<DisplayALPHA type={type} onReset={handleReset} />
				</OwnStyles.MainDisplayWrapper>
			}
		</>
	)
});