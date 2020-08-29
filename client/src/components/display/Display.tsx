import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import { DisplayTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const Display = React.memo((props: OwnTypes.Props) => {
	const [characterSet, setCharacterSet] = useState([]);

	useEffect(() => {
		const uri = `https://japaneseapi.herokuapp.com/api/v1/${props.type}`;
		fetch(uri)
			.then(res => res.json())
			.then(res => {
				setCharacterSet(res);
			})
	}, [props.type]);

	return (
		<>
			<OwnStyles.Title
				variant="h3"
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
				<Card type={props.type} characterSet={characterSet} />
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