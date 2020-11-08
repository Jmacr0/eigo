import styled from 'styled-components';
import { Box, Button, Grid, Typography, Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const ButtonDisplay = styled(Grid)`
		margin-top: 100px!important;
	`;

export const SelectButton = styled(Button)`
		min-height: 70px!important;
		min-width: 200px!important;
		border-radius: 0px!important;
`;

export const BackButton = styled(Button)`
`;

export const Title = styled(Typography)`

`;

export const MainDisplayWrapper = styled(Grid)`
		margin-top: 100px!important;
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

export const NewTag = styled(Badge)`
        .MuiBadge-anchorOriginTopRightRectangle {
                top: -4px;
                right: -12px;
        }
`;