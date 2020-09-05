import React from 'react';
import { HiddenAnswerCardTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const HiddenAnswerCard = React.memo((props: OwnTypes.Props) => {

	return (
		<OwnStyles.HiddenAnswerCard
			onClick={props.onClick}
		>
			{props.reveal || props.option === 'test' && props.language === 'english' ?
				<OwnStyles.RevealedText
					component={props.type === 'greetings' || props.type === 'verbs' ? "p" : "h2"}
					color={props.option === 'test' && props.language === 'japanese' ? "green" : "black"}
					fontWeight="bold"
					fontSize={props.type === 'greetings' || props.type === 'verbs' ? (props.language === 'english' ? "1.2rem" : "1.5rem") : "3rem"}
				>{props.character}
				</OwnStyles.RevealedText>
				:
				<span
					style={{ color: "green" }}
				>
					answer
				</span>
			}
		</OwnStyles.HiddenAnswerCard >
	);
});