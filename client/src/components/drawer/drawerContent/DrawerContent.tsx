import React, { useEffect, useState } from 'react';
import { Card } from '../../card/Card';
import { DrawerContentTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import API from '../../../utils/api';

export const DrawerContent = React.memo((props: OwnTypes.Props) => {
	return (
		<>
			<OwnStyles.DrawerList>
				<OwnStyles.DrawerListItem
					button
				>
					<OwnStyles.DrawerListItemIcon>
						<OwnStyles.StarredIcon />
					</OwnStyles.DrawerListItemIcon>
					<OwnStyles.DrawerListItemText primary="Starred" />
				</OwnStyles.DrawerListItem>
				<OwnStyles.DrawerListItem
					button
				>
					<OwnStyles.DrawerListItemIcon>
						<OwnStyles.StarredIcon />
					</OwnStyles.DrawerListItemIcon>
					<OwnStyles.DrawerListItemText primary="Starred" />
				</OwnStyles.DrawerListItem>
				<OwnStyles.DrawerListItem
					button
				>
					<OwnStyles.DrawerListItemIcon>
						<OwnStyles.StarredIcon />
					</OwnStyles.DrawerListItemIcon>
					<OwnStyles.DrawerListItemText primary="Starred" />
				</OwnStyles.DrawerListItem>
				<OwnStyles.DrawerListItem
					button
				>
					<OwnStyles.DrawerListItemIcon>
						<OwnStyles.StarredIcon />
					</OwnStyles.DrawerListItemIcon>
					<OwnStyles.DrawerListItemText primary="Starred" />
				</OwnStyles.DrawerListItem>
				<OwnStyles.Break />
				<OwnStyles.DrawerListItem
					button
				>
					<OwnStyles.Input
						autoComplete="off"
						color="primary"
						id="Search"
						label="Search"
						variant="outlined"
						size="small"
					// InputProps={{
					// 	endAdornment:
					// 		< InputAdornment position="end" >
					// 			{adornment}
					// 		</InputAdornment>
					// }}
					/>
				</OwnStyles.DrawerListItem>
			</OwnStyles.DrawerList>
		</>
	);
});