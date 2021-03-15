import React, { useEffect, useState } from 'react';
import { FilterBarTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { Search } from './search/Search';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const FilterBar = React.memo((props: OwnTypes.Props) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));
	const [value, setValue] = useState(5);
	const handleOnChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		console.log(event.target.value as number);
		const numberToDisplay = event.target.value as number;
		setValue(numberToDisplay);
		props.onNumberToDisplay(numberToDisplay);
	};

	return (
		<>
			<OwnStyles.FilterWrapper
				container
				item
				direction="row"
			// justify="center"
			// alignItems="center"
			>
				<OwnStyles.FilterBar
					elevation={1}
				>
					<OwnStyles.Wrapper
						container
						item
						direction="row"
					>
						<OwnStyles.Wrapper
							container
							item
							direction="row"
							alignItems="center"
						>
							{matches &&
								<OwnStyles.Wrapper
									item
								>
									<OwnStyles.DisplayIcon />
								</OwnStyles.Wrapper>
							}
							<OwnStyles.Wrapper
								item
							>
								<OwnStyles.DropDown
									value={value}
									onChange={handleOnChange}
								>
									<OwnStyles.DropDownItem value={5}>5</OwnStyles.DropDownItem>
									<OwnStyles.DropDownItem value={10}>10</OwnStyles.DropDownItem>
									<OwnStyles.DropDownItem value={20}>20</OwnStyles.DropDownItem>
								</OwnStyles.DropDown>
							</OwnStyles.Wrapper>
							<OwnStyles.SearchWrapper
								item
							>
								<Search
									onSearchChange={props.onSearchChange}
								/>
							</OwnStyles.SearchWrapper>
						</OwnStyles.Wrapper>
					</OwnStyles.Wrapper>
				</OwnStyles.FilterBar>
			</OwnStyles.FilterWrapper>
		</>
	);
});