import styled from 'styled-components';
import {RosterTitleHeader} from '../../../../../templates/CNSW/Components/Header/LogoClubTitleHeader';
import {RosterContainer} from './components/RosterContainer';
import {DisplayRosterData} from './components/DisplayRosterData';

export const CricketCNSWRosterBuild = (props) => {
	return (
		<RosterContainer>
			<RosterTitleHeader />
			<ColumnContainer>
				<DisplayRosterData {...props} />
			</ColumnContainer>
		</RosterContainer>
	);
};

const ColumnContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 70%;
	height: auto;
	max-width: 100%;
	margin-bottom: 0px;
`;
