import styled from 'styled-components';
import { Box, } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const TextWrapper = styled.p`
        margin: auto;
        max-width: 350px;
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