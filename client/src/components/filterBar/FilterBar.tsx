import React, { useEffect, useState } from 'react';
import { FilterBarTypes as OwnTypes } from './Types';
import * as OwnStyles from './Styles';
import { Search } from './search/Search';

export const FilterBar = React.memo((props: OwnTypes.Props) => {
	const [value, setValue] = useState(1);

	const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log(event.currentTarget.value);
		const numberToDisplay = parseInt(event.currentTarget.value);
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
							<OwnStyles.Wrapper
								item
							>
								<OwnStyles.Title>
									Display
								</OwnStyles.Title>
							</OwnStyles.Wrapper>
							<OwnStyles.Wrapper
								item
							>
								<OwnStyles.ButtonGroupWrapper>
									<OwnStyles.ButtonSingle onClick={handleOnClick} value={5}>5</OwnStyles.ButtonSingle>
									<OwnStyles.ButtonSingle onClick={handleOnClick} value={10}>10</OwnStyles.ButtonSingle>
									<OwnStyles.ButtonSingle onClick={handleOnClick} value={20}>20</OwnStyles.ButtonSingle>
								</OwnStyles.ButtonGroupWrapper>
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