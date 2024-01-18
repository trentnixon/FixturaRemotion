import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {PlayerPerformances} from './Performances';
import {PrincipalSponsorAlwaysShow} from '../../../Components/Intro/PrincipalSponsor';

export const Match = (props) => {
	return (
		<MatchContainer>
			<TeamsAndScores {...props} />
			<PlayerPerformances {...props} />
			<HeaderContainer {...props} />
			<PrincipalSponsorAlwaysShow FPS={30} {...props} /> 
		</MatchContainer>
	);
};
