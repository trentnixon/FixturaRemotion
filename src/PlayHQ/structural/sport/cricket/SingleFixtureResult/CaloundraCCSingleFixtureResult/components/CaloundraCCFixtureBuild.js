import styled from 'styled-components';
import {CaloundraCCTeamsAndScores} from '../../../TeamsAndScores/CaloundraCCTeamsAndScores';
import {CaloundraCCPlayerPerformances} from '../../../PlayerPerformances/CaloundraCC_PlayerPerformances';
import {CaloundraCCFixtureData} from './CaloundraCCFixtureData';
export const CaloundraCCFixtureBuild = (props) => {
	return (
		<MatchContainer>
			<CaloundraCCTeamsAndScores {...props} />
			<CaloundraCCPlayerPerformances slice={3} {...props} />
			<CaloundraCCFixtureData {...props} />
		</MatchContainer>
	);
};
const MatchContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 0px;
`;
