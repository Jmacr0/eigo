import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { LibraryPageTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { DisplayALPHA } from '../../components/displayALPHA/DisplayALPHA';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const LibraryPage = React.memo((props: OwnTypes.Props) => {
	const [type, setType] = useState('' as OwnTypes.Type);
	const history = useHistory();
	const match = useRouteMatch();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));
	const handleSelection = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setType(event.currentTarget.value as OwnTypes.Type);
		history.push(`${match.path}/${event.currentTarget.value}`);
	};
	const handleGoBack = () => {
		history.goBack();
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<>
			<OwnStyles.LibraryGrid
				container
				item
				direction="column"
				alignItems="center"
				alignContent="flex-start"
				justify="center"
			>
				{!matches && 8}
				<OwnStyles.LibraryGrid
					container
					item
					direction="row"
					alignItems="center"
					alignContent="flex-start"
					justify="flex-start"
				>
					<OwnStyles.LibraryGrid
						item
						xs={3}
					>
						{/* <OwnStyles.BackIconWrapper
							onClick={handleGoBack}
						>
							<OwnStyles.BackIcon
								fontSize="large"
							/>
						</OwnStyles.BackIconWrapper> */}
					</OwnStyles.LibraryGrid>
					<OwnStyles.LibraryGrid
						item
						xs={6}
					>
						<OwnStyles.Title
							variant="h2"
						>
							Library
			</OwnStyles.Title>
					</OwnStyles.LibraryGrid>
				</OwnStyles.LibraryGrid>
			</OwnStyles.LibraryGrid>
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
							onGetUser={props.onGetUser}
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
						<OwnStyles.BackButton
							color="secondary"
							variant="text"
							size="large"
							onClick={handleGoBack}
						>
							back
						</OwnStyles.BackButton>
					</OwnStyles.ButtonDisplay>
				</Route>
			</Switch>
		</>
	)
});

export default LibraryPage;