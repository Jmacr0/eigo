import React, { useEffect, useState } from 'react';
import { DisplayALPHATypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import API from '../../utils/api';
import { CardALPHA } from '../cardALPHA/CardALPHA';

export const DisplayALPHA = React.memo((props: OwnTypes.Props) => {
	const [characterSet, setCharacterSet] = useState([]);
	const [option, setOption] = useState('');

	const handleSelection = (event: React.MouseEvent<HTMLButtonElement>) => {
		const selection = event.currentTarget.value;
		setOption(selection)
	}

	const handleGetAllAPI = async () => {
		switch (props.type) {
			case 'verbs':
				const res = await API.verb.findAll();
				if (res.success) {
					console.log(res.data);
					setCharacterSet(res.data);
				}
				break;

			default:
				break;
		}
	};

	useEffect(() => {
		handleGetAllAPI();
		// const uri = `https://japaneseapi.herokuapp.com/api/v1/${props.type}`;
		// fetch(uri)
		// 	.then(res => res.json())
		// 	.then(res => {
		// 		setCharacterSet(res);
		// 	})
	}, [props.type]);

	return (
		<>
			<OwnStyles.Title
				component="h3"
			>
				{(props.type).toUpperCase()}
			</OwnStyles.Title>
			<OwnStyles.MainDisplay
				container
				direction="column"
				justify="center"
				alignItems="center"
			>
				{!option ?
					<>
						<OwnStyles.SelectButton
							onClick={handleSelection}
							value="all"
						>
							all
				</OwnStyles.SelectButton>
					</> :
					<CardALPHA type={props.type} option={option} characterSet={characterSet} />
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