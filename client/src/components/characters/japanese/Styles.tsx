import styled from 'styled-components';
import { Typography, TextField } from '@material-ui/core';
import { CheckBox, Cancel } from '@material-ui/icons';

export const JapaneseDisplay = styled(Typography)`
		max-height: 100px;
		min-height: 100px;
		max-width: 90vw;
		font-weight: bold;
		color: red;
		text-align: center;
	`;

export const TestInput = styled(TextField)`
		max-width: 260px!important;
		min-width: 260px!important;
	`;

export const TickMark = styled(CheckBox)`
		color: green;
`;

export const CrossMark = styled(Cancel)`
		color: red;
`;
