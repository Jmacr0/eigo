import React, { useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { LibraryPageTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { DisplayALPHA } from '../../components/displayALPHA/DisplayALPHA';

const LibraryPage = React.memo((props: OwnTypes.Props) => {
	const [type, setType] = useState('' as OwnTypes.Type);
	const history = useHistory();
	const match = useRouteMatch();
	const handleSelection = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setType(event.currentTarget.value as OwnTypes.Type);
		history.push(`${match.path}/${event.currentTarget.value}`);
	};

	return (
		<>
			<Switch>
				<Route path={`${match.path}/:type`}>
					<OwnStyles.MainDisplayWrapper
						container
						direction="column"
						justify="center"
						alignItems="center">
						<DisplayALPHA
							type={type}
							user={props.user}
						/>
					</OwnStyles.MainDisplayWrapper>
				</Route>
				<Route to={`${match.path}`}>
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
							disableElevation
							variant="contained"
							onClick={handleSelection}
							value="adjectives">
							adjectives
						</OwnStyles.SelectButton>
					</OwnStyles.ButtonDisplay>
				</Route>
			</Switch>

		</>
	)
});

export default LibraryPage;