import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {PrincipalSponsorAlwaysShow} from '../../../Components/Intro/PrincipalSponsor';

export const Match = (props) => {
	const {THEME, fontFamily} = props;
	return (
		<MatchContainer THEME={THEME} fontFamily={fontFamily}>
			<TeamsAndScores {...props} />
			<HeaderContainer {...props} />
			<PrincipalSponsorAlwaysShow FPS={30} {...props} />
		</MatchContainer>
	);
};
