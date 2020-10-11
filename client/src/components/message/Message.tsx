import React, { useState } from 'react';
import { MessageTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';

export const Message = React.memo((props: OwnTypes.Props) => {
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
		props.onCloseMessage();
	}

	return (
		<OwnStyles.MessageWrapper
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
		>
			<OwnStyles.MessageContent
				severity={props.message.severity}
			>
				{props.message.text}
			</OwnStyles.MessageContent>
		</OwnStyles.MessageWrapper>
	);
});