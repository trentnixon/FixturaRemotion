//import styled from 'styled-components';
import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';

export const Match = (props) => {
	
	return (
		<MatchContainer>
			<TeamsAndScores {...props} />
			<HeaderContainer {...props} />
		</MatchContainer>
	);
};
