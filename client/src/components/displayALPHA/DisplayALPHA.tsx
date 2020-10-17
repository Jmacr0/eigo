import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import { DisplayALPHATypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import API from '../../utils/api';
import { CardALPHA } from '../cardALPHA/CardALPHA';

export const DisplayALPHA = React.memo((props: OwnTypes.Props) => {
	const [type, setType] = useState('');
	const [characterSet, setCharacterSet] = useState([]);
	const history = useHistory();
	const match = useRouteMatch();

	const handleTypeSelected = () => {
		const { type } = match.params as any;
		setType(type);
	};

	const handleSelection = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log(match.path)
		const selection = event.currentTarget.value;
		history.push(`${type}/${selection}`);
	};

	const handleGetAllAPI = async () => {
		switch (type) {
			case 'verbs':
				const res = await API.verb.findAll();
				if (res.success) {
					console.log(res.data);
					setCharacterSet(res.data);
				}
				break;

			default:
				break;
		}
	};

	const handleGoBack = () => {
		history.goBack();
	};

	useEffect(() => {
		console.log(match.path)
		handleTypeSelected();
		handleGetAllAPI();
		// const uri = `https://japaneseapi.herokuapp.com/api/v1/${props.type}`;
		// fetch(uri)
		// 	.then(res => res.json())
		// 	.then(res => {
		// 		setCharacterSet(res);
		// 	})
	}, [type]);

	return (
		<>
			<OwnStyles.Title
				component="h3"
			>
				{type.toUpperCase()}
			</OwnStyles.Title>
			<OwnStyles.MainDisplay
				container
				direction="column"
				justify="center"
				alignItems="center"
			>
				<Switch>
					<Route path={`${match.path}/:option`}>
						<CardALPHA
							user={props.user}
							characterSet={characterSet}
						/>
					</Route>
					<Route path={`${match.path}`}>
						<>
							<OwnStyles.SelectButton
								onClick={handleSelection}
								value="all"
							>
								all
				</OwnStyles.SelectButton>
						</>
					</Route>
				</Switch>
			</OwnStyles.MainDisplay>
			<OwnStyles.BackButton
				color="secondary"
				variant="text"
				size="large"
				onClick={handleGoBack}
			>
				back
			</OwnStyles.BackButton>
		</>
	);
});