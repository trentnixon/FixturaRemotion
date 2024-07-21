import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {PlayerPerformances} from './Performances';
import styled from 'styled-components';

export const BasicFixtureBuild = (props) => {
	return (
		<MatchContainer>
			<TeamsAndScores {...props} />
			<PlayerPerformances {...props} />
			<HeaderContainer {...props} />
		</MatchContainer>
	);
};
const MatchContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 0px;
`;
