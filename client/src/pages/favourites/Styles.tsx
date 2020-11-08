import styled from 'styled-components';
import { Box, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Title = styled(Box)`
                margin-top: 100px!important;
		text-align: center;
`;
export const ButtonDisplay = styled(Grid)`
		
	`;

export const SelectButton = styled(Button)`
		min-height: 70px!important;
		min-width: 200px!important;
		border-radius: 0px!important;
`;
export const BackButton = styled(Button)`
`;

export const RedirectWrapper = styled(Box)`
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 70px!important;
		min-width: 200px!important;
        border-radius: 0px!important;
        `;

export const Redirect = styled(Link)`
        text-decoration: none;
`;