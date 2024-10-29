import styled from 'styled-components';
import {DisplayRosterData} from './components/DisplayRosterData';
import {RosterSponsors} from './components/RosterSponsors';
import {
	MutedLeagueDefaultTitle,
	MutedLeagueRosterTitle,
} from '../../../../assets/common/TitleSequences/Muted/Default';

export const CricketMUTEDRosterBuild = (props) => {
	return (
		<RosterOuterContainer>
			<MutedLeagueRosterTitle />
			<ColumnContainer>
				<DisplayRosterData {...props} />
				<RosterSponsors {...props} />
			</ColumnContainer>
		</RosterOuterContainer>
	);
};

const RosterOuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 0px;
`;
const ColumnContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin-bottom: 0px;
`;
