import React, { useEffect } from 'react';
import { Characters } from '../characters/Characters';
import { CardALHPATypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const CardALPHA = React.memo((props: OwnTypes.Props) => {

	useEffect(() => {
		console.log(props.characterSet);
	}, []);

	return (
		<OwnStyles.CardDisplay
			container
			item
			direction="column"
			justify="center"
			alignItems="center"
			xs={12}
			sm={6}
		>
			{props.characterSet.map((word, index) => {
				return (
					<div key={index}>{word.short}</div>
				);
			})}
		</OwnStyles.CardDisplay>
	);
});