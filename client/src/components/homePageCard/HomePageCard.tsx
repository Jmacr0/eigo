import React from 'react';
import { useHistory } from 'react-router-dom';
import { Characters } from '../characters/Characters';
import { HomePageCardTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const HomePageCard = React.memo((props: OwnTypes.Props) => {
	const history = useHistory();
	const handleLinkClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log(event.currentTarget)
		const url = `${event.currentTarget.value}`;
		history.push(url);
	};
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
				<OwnStyles.CardLinks>
					<OwnStyles.Link
						value={props.link}
						onClick={handleLinkClick}
					>
						TRY HERE
					</OwnStyles.Link>
				</OwnStyles.CardLinks>
			</OwnStyles.Content>
		</OwnStyles.Main>
	);
});