import React from 'react';
import { Characters } from '../characters/Characters';
import { HomePageCardTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const HomePageCard = React.memo((props: OwnTypes.Props) => {

	return (
		<OwnStyles.Main
			data-aos="zoom-in"
			data-aos-duration="1000"
		>
			<OwnStyles.Image
				image={props.image}
			/>
			<OwnStyles.Content>
				<OwnStyles.DarkText
					variant="h4"
				>
					{props.title}
				</OwnStyles.DarkText>
				<OwnStyles.DarkText
					variant="body1"
				>
					{props.body}
				</OwnStyles.DarkText>
			</OwnStyles.Content>
		</OwnStyles.Main>
	);
});