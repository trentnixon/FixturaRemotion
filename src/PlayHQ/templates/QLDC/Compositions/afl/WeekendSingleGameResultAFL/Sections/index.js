import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {PlayerPerformances} from './Performances';
import {ResultStatement} from './ResultStatment';
import {DisplayQuarters} from './DisplayQuaters';
import {BestPlayers} from './BestPlayers';
import styled from 'styled-components';

const PerformanceRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	padding: 0 10px;
	margin: 0px;
`;
export const Match = (props) => {

	return (
		<MatchContainer>
			<TeamsAndScores {...props} />

			<DisplayQuarters {...props} team="home" />
			<PerformanceRow>
				<PlayerPerformances {...props} team="home" />
				<BestPlayers {...props} team="home" />
			</PerformanceRow>

			<DisplayQuarters {...props} team="away" />
			<PerformanceRow>
				<PlayerPerformances {...props} team="away" />
				<BestPlayers {...props} team="away" />
			</PerformanceRow>
			<HeaderContainer {...props} />
			<ResultStatement {...props} />
		</MatchContainer>
	);
};
