import React, { useEffect, useState } from 'react';
import { SearchTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const Search = React.memo((props: OwnTypes.Props) => {
	return (
		<>
			<OwnStyles.SearchWrapper component="form" elevation={0}>
				<OwnStyles.SearchField
					onChange={props.onSearchChange}
					placeholder="Search"
					inputProps={{ 'aria-label': 'search' }}
				/>
				<OwnStyles.IconWrapper type="submit" aria-label="search">
					<OwnStyles.SearchIcon />
				</OwnStyles.IconWrapper>
			</OwnStyles.SearchWrapper>
		</>
	);
});