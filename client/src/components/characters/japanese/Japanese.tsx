import React from 'react';
import { JapaneseTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const Japanese = React.memo((props: OwnTypes.Props) => (
	<OwnStyles.JapaneseDisplay>
		{props.character}
	</OwnStyles.JapaneseDisplay>
));