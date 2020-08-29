import React from 'react';
import { EnglishTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const English = React.memo((props: OwnTypes.Props) => (
	<OwnStyles.EnglishDisplay
		variant="h3"
	>
		{props.character}
	</OwnStyles.EnglishDisplay>
));