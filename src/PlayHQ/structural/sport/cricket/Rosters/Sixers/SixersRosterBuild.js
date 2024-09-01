import styled from 'styled-components';
import {RosterContainer} from './components/RosterContainer';
import {DisplayRosterData} from './components/DisplayRosterData';
import {SixersLeagueRosterTitle} from '../../../../assets/common/TitleSequences/SixersLeague/Roster';

export const SixersRosterBuild = (props) => {
	return (
		<RosterContainer>
			<SixersLeagueRosterTitle />
			<ColumnContainer >
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
	padding: 0px  0 0 5%;
`;
