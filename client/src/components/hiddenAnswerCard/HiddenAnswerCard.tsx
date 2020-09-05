import React from 'react';
import { HiddenAnswerCardTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const HiddenAnswerCard = React.memo((props: OwnTypes.Props) => {

	return (
		<OwnStyles.HiddenAnswerCard
			onClick={props.onClick}
		>
			{props.option === 'test' || props.reveal ?
				<OwnStyles.RevealedText
					variant={props.type === 'greetings' || props.type === 'verbs' ? "body1" : "h2"}
				>{props.character}
				</OwnStyles.RevealedText> :
				"answer"
			}
		</OwnStyles.HiddenAnswerCard>
	);
});