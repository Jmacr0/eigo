import React, { useEffect, useState } from 'react';
import { CardTypes as OwnTypes } from './Types';
export const Characters = React.memo((props: OwnTypes.Props): React.ReactElement => {
	const [randNum, setRandNum] = useState(0);

	const selectRandom = (set: OwnTypes.Set) => {
		setRandNum(0);
		console.log(randNum);
		return 0;
	};

	useEffect(() => {
		selectRandom(props.set);
	}, []);

	return (
		<p>character</p>
	);
});