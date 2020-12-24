import styled from 'styled-components';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import { color } from '../../../utils/global/Styles';

export const SearchWrapper = styled(Paper)`
	padding-left: 10px;
	padding-right: 10px;
`;
export const SearchField = styled(InputBase)``;
export const IconWrapper = styled(IconButton)``;
export const SearchIcon = styled(Search)``;
