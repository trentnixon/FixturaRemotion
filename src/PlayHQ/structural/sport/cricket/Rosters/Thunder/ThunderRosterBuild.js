import styled from 'styled-components';
import {RosterContainer} from './components/RosterContainer';
import {DisplayRosterData} from './components/DisplayRosterData';
import { ThunderLeagueRosterTitle } from '../../../../assets/common/TitleSequences/ThunderLeague/Roster';

export const ThunderRosterBuild = (props) => {
	return (
		<RosterContainer>
			<ThunderLeagueRosterTitle />
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
