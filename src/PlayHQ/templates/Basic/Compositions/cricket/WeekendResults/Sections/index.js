import {MatchContainer} from './OLD_MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {PlayerPerformances} from './Performances';

export const Match = (props) => {
	return (
		<MatchContainer>
			<TeamsAndScores {...props} />
			<PlayerPerformances {...props} />
			<HeaderContainer {...props} />
		</MatchContainer>
	);
}; 
 