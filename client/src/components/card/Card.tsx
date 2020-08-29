import React from 'react';
import { Characters } from '../characters/Characters';
import { CardTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const Card = React.memo((props: OwnTypes.Props) => {

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
			<Characters type={props.type} characterSet={props.characterSet} />
		</OwnStyles.CardDisplay>
	);
});