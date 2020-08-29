import React from 'react';
import { JapaneseTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const Japanese = React.memo((props: OwnTypes.Props) => (
	<OwnStyles.JapaneseDisplay
		variant={props.type === 'greetings' ? "h5" : "h1"}
	>
		{
			props.character.formal ?
				<>
					<p>formal: {props.character.formal}</p>
					<p>informal: {props.character.informal}</p>
				</>
				: props.character
		}
	</OwnStyles.JapaneseDisplay >
));