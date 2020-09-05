import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import { DisplayTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const Display = React.memo((props: OwnTypes.Props) => {
	const [characterSet, setCharacterSet] = useState([]);
	const [option, setOption] = useState('');

	const handleSelection = (event: React.MouseEvent<HTMLButtonElement>) => {
		const selection = event.currentTarget.value;
		setOption(selection)
	}

	useEffect(() => {
		const uri = `https://japaneseapi.herokuapp.com/api/v1/${props.type}`;
		fetch(uri)
			.then(res => res.json())
			.then(res => {
				setCharacterSet(res);
			})
	}, [props.type]);

	return (
		<>
			<OwnStyles.Title
				variant="h3"
				align="center"
			>
				{props.type}
			</OwnStyles.Title>
			<OwnStyles.MainDisplay
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				{!option ?
					<>
						<OwnStyles.SelectButton
							onClick={handleSelection}
							value="random"
						>
							random
				</OwnStyles.SelectButton>
						<OwnStyles.SelectButton
							onClick={handleSelection}
							value="test"
						>
							test
				</OwnStyles.SelectButton>
					</> :
					<Card type={props.type} option={option} characterSet={characterSet} />
				}
			</OwnStyles.MainDisplay>
			<OwnStyles.BackButton
				color="secondary"
				variant="text"
				size="large"
				onClick={props.onReset}
			>
				back
			</OwnStyles.BackButton>
		</>
	);
});