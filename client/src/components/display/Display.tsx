import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import { DisplayTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const Display = React.memo((props: OwnTypes.Props) => {
	const [characterSet, setCharacterSet] = useState([]);

	useEffect(() => {
		console.log(props.type)
		const uri = `https://radiant-hamlet-12316.herokuapp.com/api/v1/${props.type}`;
		fetch(uri)
			.then(res => res.json())
			.then(res => {
				setCharacterSet(res);
			})
	}, [props.type]);

	return (
		<>
			<OwnStyles.Title
				variant="h2"
				align="center"
			>
				{props.type}
			</OwnStyles.Title>
			<OwnStyles.MainDisplay
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				<Card characterSet={characterSet} />
			</OwnStyles.MainDisplay>
			<OwnStyles.BackButton
				color="secondary"
				variant="text"
				size="large"
				onClick={props.onReset}
			>
				back
			</OwnStyles.BackButton>
		</>
	);
});