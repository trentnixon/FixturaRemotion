import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {PlayerPerformances} from './Performances';
import {PrincipalSponsorAlwaysShow} from '../../../Components/Intro/PrincipalSponsor';
export const Match = (props) => {
	const {THEME} = props;
	return (
		<MatchContainer THEME={THEME} fontFamily={'Oswald'}>
			<TeamsAndScores {...props} />
			<PlayerPerformances {...props} />
			<HeaderContainer {...props} />
			<PrincipalSponsorAlwaysShow fontFamily={'Oswald'} FPS={30} {...props} />
		</MatchContainer>
	);
};
