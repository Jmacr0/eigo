import React, { useState, useEffect } from 'react';
import { JapaneseTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { HiddenAnswerCard } from '../../hiddenAnswerCard/HiddenAnswerCard';
import { InputAdornment } from '@material-ui/core';

export const Japanese = React.memo((props: OwnTypes.Props) => {
	const [typedAnswer, setTypedAnswer] = useState('');
	const [inputProps, setInputProps] = useState({
		success: false,
	});

	const adornment = React.useMemo(() => {
		return inputProps.success ? <OwnStyles.TickMark /> : < OwnStyles.CrossMark />;
	}, [inputProps.success]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const input = event.currentTarget.value;
		if (input === props.character) {
			setInputProps({
				success: true
			});
		} else {
			setInputProps({
				success: false
			});
		}
		setTypedAnswer(input);
	}

	useEffect(() => {
		setTypedAnswer('');
	}, [props.character]);

	return (
		<>
			{props.option === 'test' &&
				<>
					<OwnStyles.TestInput
						required
						color="primary"
						id="japanese-answer"
						label="Japanese answer"
						variant="outlined"
						value={typedAnswer}
						onChange={handleChange}
						InputProps={{
							endAdornment:
								< InputAdornment position="end" >
									{adornment}
								</InputAdornment>
						}}
					/>
					<HiddenAnswerCard
						reveal={props.reveal}
						onClick={props.onClick}
						type={props.type}
						language="japanese"
						option={props.option}
						character={props.character}
					/>
				</>
			}
			{
				props.option !== 'test' ?
					<OwnStyles.JapaneseDisplay
						variant={
							props.type === 'greetings' ||
								props.type === 'verbs' ||
								props.type === 'adjectives' ? "h4" : "h1"}
					>
						{props.character}
					</OwnStyles.JapaneseDisplay > : <></>
			}
		</>
	)
});