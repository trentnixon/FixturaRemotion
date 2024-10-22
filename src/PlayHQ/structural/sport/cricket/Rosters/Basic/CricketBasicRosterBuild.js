import {RosterContainer} from './components/RosterContainer';
import {HeaderContainer} from './components/HeaderContainer';
import {TeamsAndScores} from './components/TeamsAndScores';
import {DisplayFixtureData} from './components/DisplayFixtureData';
import styled from 'styled-components';

export const CricketBasicRosterBuild = (props) => {
	return (
		<RosterContainer>
			<ColumnContainer>
				<DisplayFixtureData {...props} />
				<TeamsAndScores {...props} />
			</ColumnContainer>
			<HeaderContainer {...props} />
		</RosterContainer>
	);
};

const ColumnContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 96%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 0px;
`;
