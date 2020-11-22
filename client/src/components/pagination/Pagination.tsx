import React, { useEffect, useState } from 'react';
import { PaginationTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const Pagination = React.memo((props: OwnTypes.Props) => {
	const round5 = (numberOfwords: number) => {
		return Math.ceil(numberOfwords / 5) * 5;
	}
	const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
		console.log(value);
		props.setCurrentPage(value);
	}
	return (
		<>
			<OwnStyles.Pagination count={Math.ceil(props.characterSet.length / 5)} defaultPage={1} onChange={handleChange} color="primary" />
		</>
	);
});