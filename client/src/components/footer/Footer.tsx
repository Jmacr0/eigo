import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import { FooterTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const Footer = React.memo((props: OwnTypes.Props) => {
	const [value, setValue] = useState(1);

	return (
		<>
			<OwnStyles.FooterWrapper>
				<OwnStyles.InfoWrapper
					container
					direction="column"
					justify="center"
					alignItems="center"
				>
					<OwnStyles.InfoWrapper
						item
						md={6}
					>
						<OwnStyles.Text>EIGO</OwnStyles.Text>
						<OwnStyles.Text>
							<OwnStyles.Anchor href="https://jmacro.dev/" target="_blank">jmacro.dev</OwnStyles.Anchor>
						</OwnStyles.Text>
						<OwnStyles.Text>
							Eigo is a Japanese Learning Web App designed as a supplement to, or stand alone resource in learning Japanese.
						</OwnStyles.Text>
						<OwnStyles.Text>
							Check out the repository <OwnStyles.Anchor href="https://github.com/jmacr0/eigo" target="_blank">here</OwnStyles.Anchor>
						</OwnStyles.Text>
					</OwnStyles.InfoWrapper>
				</OwnStyles.InfoWrapper>
			</OwnStyles.FooterWrapper>
		</>
	);
});