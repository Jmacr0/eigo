import React from 'react';
import { EnglishTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const English = React.memo((props: OwnTypes.Props) => {
	return (
		<OwnStyles.EnglishDisplay
			variant={props.type === 'greetings' ? "body1" : "h3"}
		>
			{props.character}
		</OwnStyles.EnglishDisplay>
	)
});