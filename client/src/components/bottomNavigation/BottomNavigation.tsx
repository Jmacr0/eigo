import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import { BottomNavigationTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const BottomNavigation = React.memo((props: OwnTypes.Props) => {
	const [value, setValue] = useState(1);

	return (
		<>
			<OwnStyles.MainNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<OwnStyles.SingleNavigation label="Favourites" value="favourites" icon={<OwnStyles.Icon />} />
				<OwnStyles.SingleNavigation label="Home" value="home" icon={<OwnStyles.Icon />} />
				<OwnStyles.SingleNavigation label="Activity" value="activity" icon={<OwnStyles.Icon />} />
			</OwnStyles.MainNavigation>
		</>
	);
});