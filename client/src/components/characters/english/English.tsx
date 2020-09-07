import React from 'react';
import { EnglishTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { HiddenAnswerCard } from '../../hiddenAnswerCard/HiddenAnswerCard';

export const English = React.memo((props: OwnTypes.Props) => {
	return (
		<>
			<HiddenAnswerCard
				reveal={props.reveal}
				onClick={props.onClick}
				type={props.type}
				option={props.option}
				language="english"
				character={props.character}
			/>
		</>
	)
});