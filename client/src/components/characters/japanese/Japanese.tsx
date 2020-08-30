import React from 'react';
import { JapaneseTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const Japanese = React.memo((props: OwnTypes.Props) => (
	<OwnStyles.JapaneseDisplay
		variant={props.type === 'greetings' || props.type === 'verbs' ? "h5" : "h1"}
	>
		{props.character}
	</OwnStyles.JapaneseDisplay >
));